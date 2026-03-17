"use client";

import { useContext } from "react";
import { EnquiriesContext } from "./EnquiriesModal";

interface EnquireLinkProps {
  className: string;
}

export function EnquireLink({ className }: EnquireLinkProps) {
  const ctx = useContext(EnquiriesContext);

  if (ctx?.open) {
    return (
      <button
        type="button"
        onClick={ctx.open}
        className={`${className} appearance-none bg-transparent border-none cursor-pointer p-0`}
      >
        Enquire
      </button>
    );
  }

  return (
    <a href="/enquiries" className={className}>
      Enquire
    </a>
  );
}
