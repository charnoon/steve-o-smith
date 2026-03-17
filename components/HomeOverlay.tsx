"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export function HomeOverlay() {
  const [position, setPosition] = useState({ top: "50%", left: "50%", transform: "translate(-50%, -50%)" });
  const [inFooter, setInFooter] = useState(false);

  useEffect(() => {
    const top = 10 + Math.random() * 70;
    const left = 10 + Math.random() * 70;
    setPosition({
      top: `${top}%`,
      left: `${left}%`,
      transform: "translate(-50%, -50%)",
    });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.querySelector("footer");
      if (!footer) return;
      const rect = footer.getBoundingClientRect();
      setInFooter(rect.top <= window.innerHeight / 2);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClass = inFooter
    ? "font-times text-xs md:text-sm uppercase text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2"
    : "font-times text-xs md:text-sm uppercase text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-transparent";

  if (inFooter) {
    return (
      <div className="fixed bottom-0 left-0 right-0 z-50 flex flex-col items-center justify-end gap-6 pb-8 pointer-events-none">
        <div className="pointer-events-auto flex flex-col items-center gap-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo-black.png"
            alt="Steve O Smith"
            className="w-48 md:w-64 lg:w-80 h-auto object-contain transition-all duration-500"
          />
          <nav
            className="flex flex-col items-center gap-4"
            aria-label="Main navigation"
          >
            <Link href="/enquiries" className={linkClass}>
              Enquire
            </Link>
            <Link href="/" className={linkClass}>
              Collections
            </Link>
          </nav>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="fixed inset-0 z-40 pointer-events-none">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/logo-white.png"
          alt="Steve O Smith"
          className="w-64 md:w-96 lg:w-[28rem] h-auto object-contain absolute transition-all duration-500"
          style={{
            top: position.top,
            left: position.left,
            transform: position.transform,
          }}
        />
      </div>
      <header className="fixed bottom-0 left-0 right-0 z-50 bg-transparent pointer-events-auto">
        <nav
          className="max-w-7xl mx-auto px-6 lg:px-12 py-6 flex flex-col items-center justify-center gap-4"
          aria-label="Main navigation"
        >
          <Link href="/enquiries" className={linkClass}>
            Enquire
          </Link>
          <Link href="/" className={linkClass}>
            Collections
          </Link>
        </nav>
      </header>
    </>
  );
}
