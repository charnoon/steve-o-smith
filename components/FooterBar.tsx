"use client";

import Link from "next/link";
import { footerLinks } from "@/data/config";

const linkClass =
  "font-serif text-label tracking-[0.06em] text-neutral-900 transition-colors hover:text-neutral-600";

export function FooterBar() {
  return (
    <footer className="bg-white">
      <div className="flex flex-col items-center gap-4 p-10 md:flex-row md:flex-wrap md:items-baseline md:justify-end md:gap-x-6 md:gap-y-2">
        {(footerLinks ?? []).map((link) => {
          const isExternal = "external" in link && link.external;
          return (
            <Link
              key={link.label}
              href={link.href}
              className={linkClass}
              {...(isExternal
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              {link.label}
            </Link>
          );
        })}
        <span
          className={linkClass}
          suppressHydrationWarning
        >
          © {new Date().getFullYear()} STEVE O SMITH
        </span>
      </div>
    </footer>
  );
}
