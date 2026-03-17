"use client";

import { useState } from "react";
import { Logo } from "./Logo";

const HERO_VIDEOS = ["/hero-video.mp4", "/hero-video-2.mp4", "/hero-video-3.mp4"];

function HeroVideo({ src, onError }: { src: string; onError: () => void }) {
  return (
    <video
      className="block w-full object-cover"
      style={{ aspectRatio: "9/16" }}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      onError={onError}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}

export function HeaderHero() {
  const [failedVideos, setFailedVideos] = useState<Set<string>>(new Set());

  const handleVideoError = (src: string) => {
    setFailedVideos((prev) => new Set(prev).add(src));
  };

  return (
    <section className="relative w-full min-h-screen bg-neutral-950">
      {/* Videos – stacked, 9:16 aspect, full scrollable height */}
      <div className="relative w-full">
        {HERO_VIDEOS.map((src) => (
          <div key={src} className="relative w-full">
            {!failedVideos.has(src) ? (
              <HeroVideo src={src} onError={() => handleVideoError(src)} />
            ) : (
              <div
                className="w-full bg-gradient-to-b from-neutral-800 to-neutral-950"
                style={{ aspectRatio: "9/16" }}
              />
            )}
          </div>
        ))}
      </div>

      {/* Subtle gradient overlay for legibility */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30"
        aria-hidden
      />

      {/* Centered logo – fixed in viewport */}
      <div className="pointer-events-none fixed inset-0 z-10 flex items-center justify-center">
        <Logo variant="white" className="h-[3rem] md:h-[4rem] w-auto" priority />
      </div>
    </section>
  );
}
