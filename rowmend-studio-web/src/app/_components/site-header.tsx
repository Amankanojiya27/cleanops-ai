"use client";

import { useState } from "react";
import { brandName, navigation } from "../_content/site-content";
import { ActionLink, BrandLabel, BrandMark } from "./landing-primitives";

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-white/88 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-4 sm:px-6">
        <a
          href="#home"
          aria-label={`${brandName} homepage`}
          className="flex items-center gap-3"
        >
          <BrandMark />
          <BrandLabel />
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted transition hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ActionLink href="#contact" className="hidden sm:inline-flex">
            Send a sample file
          </ActionLink>

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-[var(--radius-sm)] border border-line bg-white lg:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <svg className="h-5 w-5 text-ink" viewBox="0 0 20 20" fill="none">
              {menuOpen ? (
                <path
                  d="M5 5l10 10M15 5l-10 10"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M3 5h14M3 10h14M3 15h14"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          aria-label="Mobile navigation"
          className="border-t border-line/70 bg-white px-4 pb-5 pt-3 lg:hidden"
        >
          <div className="flex flex-col gap-2">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-[var(--radius-sm)] px-4 py-3 text-sm font-medium text-muted transition hover:bg-surface-soft hover:text-ink"
              >
                {item.label}
              </a>
            ))}
            <ActionLink href="#contact" className="mt-2 w-full">
              Send a sample file
            </ActionLink>
          </div>
        </nav>
      )}
    </header>
  );
}
