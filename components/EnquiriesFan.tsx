"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { EnquiryForm } from "./EnquiryForm";

interface EnquiriesFanProps {
  isOpen: boolean;
  onClose?: () => void;
}

export function EnquiriesFan({ isOpen, onClose }: EnquiriesFanProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);
  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div
          key="enquiries-fan"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[200] bg-white flex items-center justify-center"
        >
          <button
            onClick={onClose}
            className="fixed top-6 right-6 z-[201] font-serif text-xs uppercase text-neutral-900 hover:opacity-60 transition-opacity"
            aria-label="Close"
          >
            Close
          </button>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="w-full max-w-md mx-auto px-6 lg:px-12"
          >
            <EnquiryForm />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
