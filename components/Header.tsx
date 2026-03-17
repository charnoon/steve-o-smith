"use client";

import Link from "next/link";

export function Header() {
  return (
    <header className="fixed bottom-0 left-0 right-0 z-50 bg-transparent pointer-events-auto">
      <nav
        className="max-w-7xl mx-auto p-10 flex flex-col items-center justify-center gap-4"
        aria-label="Main navigation"
      >
        <Link
          href="/enquiries"
          className="font-times text-xs md:text-sm uppercase text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2"
        >
          Enquire
        </Link>
        <Link
          href="/"
          className="font-times text-xs md:text-sm uppercase text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2"
        >
          Collections
        </Link>
      </nav>
    </header>
  );
}
