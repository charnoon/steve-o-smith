"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { collections } from "@/data/config";

interface CollectionsFanProps {
  isOpen: boolean;
  onClose?: () => void;
  overFooter?: boolean;
  lightBackground?: boolean;
  whiteText?: boolean;
  inline?: boolean;
}

export function CollectionsFan({ isOpen, onClose, overFooter, lightBackground, whiteText, inline }: CollectionsFanProps) {
  const containerClass = inline
    ? "flex flex-col items-center gap-1"
    : "absolute bottom-full left-1/2 -translate-x-1/2 mb-1 flex flex-col items-center gap-1";

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="collections-fan"
          className={containerClass}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
          }}
          transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {(collections ?? []).map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 0.2,
                delay: i * 0.03,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            >
              <Link
                href={item.href}
                className={`block py-1.5 font-serif text-label tracking-[0.06em] transition-colors ${(overFooter || (lightBackground && !whiteText)) ? "text-neutral-900/90 hover:text-neutral-900" : "text-white/90 hover:text-white"}`}
                onClick={onClose}
              >
                {item.label}
              </Link>
            </motion.div>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
