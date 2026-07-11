"use client";

/**
 * Floating AI chat assistant — the conversational lead-responder demo.
 *
 * Gated OFF by default. It renders only when EITHER:
 *   - NEXT_PUBLIC_ENABLE_AI_CHAT === "1"  (turn on for everyone), OR
 *   - the URL has ?ai=1                   (private demo without going live)
 *
 * Talks to /api/chat, which answers + qualifies and pushes hot leads to the CRM.
 */

import { useEffect, useRef, useState } from "react";
import { trackEvent, trackLead } from "@/lib/analytics";

interface Msg {
  role: "user" | "assistant";
  text: string;
}

const GREETING: Msg = {
  role: "assistant",
  text: "Hi! I'm Chan's assistant 👋 Looking to buy, sell, or invest in Calgary? Ask me anything — I can help you get started.",
};

function useChatEnabled(): boolean {
  const [enabled, setEnabled] = useState(false);
  useEffect(() => {
    const flag = process.env.NEXT_PUBLIC_ENABLE_AI_CHAT === "1";
    const param =
      typeof window !== "undefined" &&
      new URLSearchParams(window.location.search).get("ai") === "1";
    setEnabled(flag || param);
  }, []);
  return enabled;
}

const ChatBubbleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 2C6.48 2 2 5.94 2 10.8c0 2.42 1.1 4.6 2.9 6.18-.13 1.2-.6 2.3-1.36 3.2a.5.5 0 00.46.82c1.86-.28 3.3-.93 4.34-1.6.82.2 1.7.3 2.6.3 5.52 0 10-3.94 10-8.8S17.52 2 12 2z" />
  </svg>
);

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M18 6 6 18M6 6l12 12" />
  </svg>
);

const SendIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M2 21l21-9L2 3v7l15 2-15 2v7z" />
  </svg>
);

export default function ChatWidget() {
  const enabled = useChatEnabled();
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([GREETING]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [notified, setNotified] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, loading, open]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  if (!enabled) return null;

  async function send() {
    const text = input.trim();
    if (!text || loading) return;

    if (!messages.some((m) => m.role === "user")) {
      trackEvent("chat_first_message");
    }
    const next = [...messages, { role: "user" as const, text }];
    setMessages(next);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next }),
      });
      const data = await res.json();
      const reply: string =
        data?.reply ??
        "Sorry — I had trouble there. Please try again, or call Chan at 403-681-0107.";
      setMessages((prev) => [...prev, { role: "assistant", text: reply }]);
      if (data?.captured) {
        if (!notified) trackLead("ai_chat");
        setNotified(true);
      }
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text: "Sorry — connection hiccup. Please try again, or call Chan at 403-681-0107.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  }

  return (
    <>
      {/* Panel */}
      {open && (
        <div className="fixed bottom-24 right-4 sm:right-6 z-50 flex w-[calc(100vw-2rem)] max-w-sm flex-col overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-black/10 animate-[fadeIn_.2s_ease-out]">
          {/* Header */}
          <div className="flex items-center justify-between bg-primary px-4 py-3 text-white">
            <div className="flex items-center gap-2.5">
              <span className="grid h-8 w-8 place-items-center rounded-full bg-accent text-sm font-bold">
                CK
              </span>
              <div className="leading-tight">
                <p className="text-sm font-semibold">Chat with Chan&apos;s assistant</p>
                <p className="flex items-center gap-1.5 text-[11px] text-white/70">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-green-400" />
                  Typically replies instantly
                </p>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="rounded-full p-1 text-white/80 transition-colors hover:bg-white/10 hover:text-white"
            >
              <CloseIcon />
            </button>
          </div>

          {/* Messages */}
          <div
            ref={scrollRef}
            className="flex max-h-[55vh] min-h-[18rem] flex-col gap-3 overflow-y-auto bg-neutral-light px-4 py-4"
          >
            {messages.map((m, i) => (
              <div
                key={i}
                className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                  m.role === "user"
                    ? "self-end rounded-br-sm bg-accent text-white"
                    : "self-start rounded-bl-sm bg-white text-text-dark ring-1 ring-neutral-mid"
                }`}
              >
                {m.text}
              </div>
            ))}
            {loading && (
              <div className="self-start rounded-2xl rounded-bl-sm bg-white px-4 py-3 ring-1 ring-neutral-mid">
                <span className="flex gap-1">
                  <span className="h-2 w-2 animate-bounce rounded-full bg-accent [animation-delay:-0.3s]" />
                  <span className="h-2 w-2 animate-bounce rounded-full bg-accent [animation-delay:-0.15s]" />
                  <span className="h-2 w-2 animate-bounce rounded-full bg-accent" />
                </span>
              </div>
            )}
            {notified && (
              <div className="self-center rounded-full bg-green-50 px-3 py-1 text-[11px] font-medium text-green-700 ring-1 ring-green-200">
                ✓ Chan has been notified — she&apos;ll follow up personally
              </div>
            )}
          </div>

          {/* Input */}
          <div className="flex items-center gap-2 border-t border-neutral-mid bg-white px-3 py-2.5">
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={onKeyDown}
              placeholder="Type your message…"
              className="flex-1 rounded-full border border-neutral-mid bg-neutral-light px-4 py-2.5 text-sm text-text-dark placeholder:text-text-muted focus:border-transparent focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <button
              onClick={send}
              disabled={loading || !input.trim()}
              aria-label="Send message"
              className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-full bg-accent text-white transition-colors hover:bg-accent-dark disabled:opacity-40"
            >
              <SendIcon />
            </button>
          </div>
          <p className="bg-white pb-2 text-center text-[10px] text-text-muted">
            AI assistant · for specifics Chan will confirm personally
          </p>
        </div>
      )}

      {/* Launcher */}
      <button
        onClick={() => {
          if (!open) trackEvent("chat_open");
          setOpen((o) => !o);
        }}
        aria-label={open ? "Close chat" : "Open chat assistant"}
        className="fixed bottom-5 right-4 sm:right-6 z-50 grid h-14 w-14 place-items-center rounded-full bg-accent text-white shadow-xl ring-4 ring-accent/20 transition-transform hover:scale-105 active:scale-95"
      >
        {open ? <CloseIcon /> : <ChatBubbleIcon />}
      </button>
    </>
  );
}
