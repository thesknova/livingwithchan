"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Listings", href: "/listings" },
  { label: "Investors", href: "/investors" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const resourceLinks = [
  { label: "Blog", href: "/blog" },
  { label: "Market Reports", href: "/market-reports" },
  { label: "Mortgage Calculator", href: "/mortgage-calculator" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setResourcesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isResourcesActive = resourceLinks.some((l) => pathname.startsWith(l.href));

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-neutral-mid shadow-sm">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex flex-col leading-tight"
          onClick={() => setMenuOpen(false)}
        >
          <span className="text-lg font-bold text-primary tracking-tight">
            Living With Chan
          </span>
          <span className="text-xs text-text-muted font-medium tracking-wide uppercase">
            REMAX Complete Realty · Calgary
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors duration-150 ${
                pathname === link.href
                  ? "text-accent"
                  : "text-gray-700 hover:text-primary"
              }`}
            >
              {link.label}
            </Link>
          ))}

          {/* Resources dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setResourcesOpen((v) => !v)}
              className={`flex items-center gap-1 text-sm font-medium transition-colors duration-150 ${
                isResourcesActive ? "text-accent" : "text-gray-700 hover:text-primary"
              }`}
            >
              Resources
              <svg
                className={`w-3.5 h-3.5 transition-transform duration-150 ${resourcesOpen ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {resourcesOpen && (
              <div className="absolute right-0 top-full mt-2 w-52 bg-white rounded-xl border border-neutral-mid shadow-lg py-1.5 z-50">
                {resourceLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setResourcesOpen(false)}
                    className={`block px-4 py-2.5 text-sm font-medium transition-colors ${
                      pathname.startsWith(link.href)
                        ? "text-accent bg-accent/5"
                        : "text-gray-700 hover:bg-neutral-light hover:text-primary"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <a
            href="tel:4036810107"
            className="ml-2 bg-primary text-white text-sm font-semibold px-5 py-2 rounded-full hover:bg-primary-dark transition-colors"
          >
            403-681-0107
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span
            className={`block w-6 h-0.5 bg-primary transition-transform duration-200 ${menuOpen ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-primary transition-opacity duration-200 ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-primary transition-transform duration-200 ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-neutral-mid px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`text-base font-medium ${
                pathname === link.href ? "text-accent" : "text-gray-700"
              }`}
            >
              {link.label}
            </Link>
          ))}

          {/* Resources section in mobile */}
          <div className="border-t border-neutral-mid pt-3 mt-1">
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">Resources</p>
            {resourceLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`block py-1.5 text-base font-medium ${
                  pathname.startsWith(link.href) ? "text-accent" : "text-gray-700"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <a
            href="tel:4036810107"
            className="text-base font-semibold text-primary border-t border-neutral-mid pt-4 mt-1"
          >
            403-681-0107
          </a>
        </div>
      )}
    </header>
  );
}
