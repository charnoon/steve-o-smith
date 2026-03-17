"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { ReactLenis, useLenis } from "lenis/react";
import "lenis/dist/lenis.css";

const lenisOptions = {
  autoRaf: true,
  lerp: 0.035, // Lower = heavier, "stuck in mud" feel
  wheelMultiplier: 0.5, // Less scroll per wheel tick
  touchMultiplier: 0.5, // Same for touch
};

function ScrollToTop() {
  const pathname = usePathname();
  const lenis = useLenis();

  useEffect(() => {
    lenis?.scrollTo(0, { immediate: true });
  }, [pathname, lenis]);

  return null;
}

function LenisResize() {
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;
    const resize = () => lenis.resize();
    window.addEventListener("load", resize);
    const observer = new ResizeObserver(resize);
    observer.observe(document.body);
    return () => {
      window.removeEventListener("load", resize);
      observer.disconnect();
    };
  }, [lenis]);

  return null;
}

export function LenisProvider({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis root options={lenisOptions}>
      <ScrollToTop />
      <LenisResize />
      {children}
    </ReactLenis>
  );
}
