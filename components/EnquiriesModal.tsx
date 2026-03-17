"use client";

import { createContext, useContext, useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { EnquiryForm } from "./EnquiryForm";

interface EnquiriesContextValue {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

export const EnquiriesContext = createContext<EnquiriesContextValue | null>(null);

export function useEnquiries() {
  const ctx = useContext(EnquiriesContext);
  if (!ctx) throw new Error("useEnquiries must be used within EnquiriesProvider");
  return ctx;
}

export function EnquiriesProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

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
    <EnquiriesContext.Provider value={{ isOpen, open, close }}>
      {children}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[200] bg-white flex items-center justify-center"
          >
            <button
              onClick={close}
              className="fixed top-6 right-6 z-[201] font-times text-xs uppercase text-foreground hover:opacity-60 transition-opacity"
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
    </EnquiriesContext.Provider>
  );
}
