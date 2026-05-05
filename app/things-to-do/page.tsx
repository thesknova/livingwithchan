import type { Metadata } from "next";
import { fetchCalgaryEvents } from "@/lib/events";
import CalgaryEventsClient from "@/components/CalgaryEventsClient";

export const revalidate = 604800; // weekly ISR — cron forces on-demand refresh

export const metadata: Metadata = {
  title: "Things to Do in Calgary | Chan Kawaguchi",
  description:
    "Discover upcoming events in Calgary — concerts, sports, festivals, food events and more. Updated weekly with the latest from Ticketmaster.",
};

export default async function ThingsToDoPage() {
  const events = await fetchCalgaryEvents();
  return <CalgaryEventsClient events={events} />;
}
