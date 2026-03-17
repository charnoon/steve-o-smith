"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/config";

type LogoVariant = "black" | "white";

interface LogoProps {
  variant: LogoVariant;
  className?: string;
  href?: string;
  priority?: boolean;
}

export function Logo({
  variant,
  className = "",
  href,
  priority,
}: LogoProps) {
  const [error, setError] = useState(false);
  const src = siteConfig.logo[variant];
  const textColor = variant === "white" ? "text-white" : "text-neutral-900";

  const content = error ? (
    <span
      className={`font-serif text-[0.75rem] tracking-[0.2em] ${textColor}`}
    >
      {siteConfig.brand}
    </span>
  ) : (
    <Image
      src={src}
      alt={siteConfig.brand}
      width={200}
      height={48}
      className={`h-auto w-auto object-contain ${className}`}
      priority={priority}
      onError={() => setError(true)}
    />
  );

  if (href) {
    return (
      <Link href={href} className={`inline-block ${className}`}>
        {content}
      </Link>
    );
  }

  return content;
}
