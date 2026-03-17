"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import { CollectionsFan } from "./CollectionsFan";
import { EnquiriesFan } from "./EnquiriesFan";

interface BottomNavProps {
  lightBackground?: boolean;
  whiteText?: boolean;
}

export function BottomNav({ lightBackground = false, whiteText = false }: BottomNavProps = {}) {
  const [mounted, setMounted] = useState(false);
  const [overFooter, setOverFooter] = useState(false);
  const [collectionsOpen, setCollectionsOpen] = useState(false);
  const [enquiriesOpen, setEnquiriesOpen] = useState(false);
  const collectionsCloseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || typeof document === "undefined") return;
    let observer: IntersectionObserver | null = null;
    let retryId: ReturnType<typeof setTimeout> | undefined;
    const maxRetries = 20;

    const setup = (retries = 0) => {
      const footer = document.querySelector("footer");
      if (footer) {
        if (retryId) {
          clearTimeout(retryId);
          retryId = undefined;
        }
        observer = new IntersectionObserver(
          ([entry]) => setOverFooter(!!entry?.isIntersecting),
          { threshold: 0.1, rootMargin: "-10% 0px 0px 0px" }
        );
        observer.observe(footer);
        return;
      }
      if (retries < maxRetries) {
        retryId = setTimeout(() => setup(retries + 1), 50);
      }
    };

    setup();
    return () => {
      observer?.disconnect();
      if (retryId) clearTimeout(retryId);
    };
  }, [mounted]);

  const closeAll = useCallback(() => {
    if (collectionsCloseTimer.current) {
      clearTimeout(collectionsCloseTimer.current);
      collectionsCloseTimer.current = null;
    }
    setCollectionsOpen(false);
    setEnquiriesOpen(false);
  }, []);

  const handleCollectionsMouseEnter = useCallback(() => {
    if (collectionsCloseTimer.current) {
      clearTimeout(collectionsCloseTimer.current);
      collectionsCloseTimer.current = null;
    }
    setCollectionsOpen(true);
  }, []);

  const handleCollectionsMouseLeave = useCallback(() => {
    collectionsCloseTimer.current = setTimeout(() => {
      setCollectionsOpen(false);
      collectionsCloseTimer.current = null;
    }, 150);
  }, []);

  const toggleCollections = useCallback(() => {
    if (collectionsCloseTimer.current) {
      clearTimeout(collectionsCloseTimer.current);
      collectionsCloseTimer.current = null;
    }
    setCollectionsOpen((prev) => !prev);
    setEnquiriesOpen(false);
  }, []);

  const toggleEnquiries = useCallback(() => {
    setEnquiriesOpen((prev) => !prev);
    setCollectionsOpen(false);
  }, []);

  const useDarkText = (lightBackground && !whiteText) || overFooter;
  const textClass = useDarkText
    ? "font-serif text-label tracking-[0.06em] text-neutral-900 transition-colors hover:text-neutral-600"
    : "font-serif text-label tracking-[0.06em] text-white transition-colors hover:text-neutral-200";

  const navClass = "fixed bottom-0 left-0 right-0 z-[100] flex flex-col items-center justify-center p-10 md:flex-row md:items-baseline md:justify-start";

  const navContent = !mounted ? (
    <nav className={navClass} aria-label="Primary navigation">
      <div className="flex flex-col items-center gap-4 md:flex-row md:items-baseline md:gap-8">
        <span className="font-serif text-label tracking-[0.06em] text-white">
          ENQUIRIES
        </span>
        <span className="font-serif text-label tracking-[0.06em] text-white">
          COLLECTIONS
        </span>
      </div>
    </nav>
  ) : (
    <nav className={navClass} aria-label="Primary navigation">
      <EnquiriesFan isOpen={enquiriesOpen} onClose={closeAll} />

      {/* Desktop: original layout - ENQUIRIES | COLLECTIONS with dropdown */}
      <div className="hidden md:flex md:flex-row md:items-baseline md:gap-8">
        <button
          type="button"
          onClick={toggleEnquiries}
          onMouseEnter={() => setEnquiriesOpen(true)}
          onMouseLeave={() => {
            if (enquiriesOpen) return;
            setEnquiriesOpen(false);
          }}
          className={textClass}
          aria-expanded={enquiriesOpen}
          aria-haspopup="dialog"
        >
          ENQUIRIES
        </button>
        <div
          className="relative"
          onMouseEnter={handleCollectionsMouseEnter}
          onMouseLeave={handleCollectionsMouseLeave}
        >
          <CollectionsFan
            isOpen={collectionsOpen}
            onClose={closeAll}
            overFooter={overFooter}
            lightBackground={lightBackground}
            whiteText={whiteText}
          />
          <button
            type="button"
            onClick={toggleCollections}
            className={textClass}
            aria-expanded={collectionsOpen}
            aria-haspopup="menu"
          >
            COLLECTIONS
          </button>
        </div>
      </div>

      {/* Mobile: ENQUIRIES pushes up when COLLECTIONS opens */}
      <div className="flex flex-col items-center gap-4 md:hidden">
        {!collectionsOpen && (
          <button
            type="button"
            onClick={toggleEnquiries}
            onMouseEnter={() => setEnquiriesOpen(true)}
            onMouseLeave={() => {
              if (enquiriesOpen) return;
              setEnquiriesOpen(false);
            }}
            className={textClass}
            aria-expanded={enquiriesOpen}
            aria-haspopup="dialog"
          >
            ENQUIRIES
          </button>
        )}
        <div
          className="flex flex-col items-center"
          onMouseEnter={handleCollectionsMouseEnter}
          onMouseLeave={handleCollectionsMouseLeave}
        >
          <motion.div
            className="flex flex-col items-center overflow-hidden"
            initial={false}
            animate={{
              height: collectionsOpen ? "auto" : 0,
              opacity: collectionsOpen ? 1 : 0,
            }}
            transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="flex flex-col items-center gap-2 pb-2">
              <button
                type="button"
                onClick={toggleEnquiries}
                onMouseEnter={() => setEnquiriesOpen(true)}
                onMouseLeave={() => {
                  if (enquiriesOpen) return;
                  setEnquiriesOpen(false);
                }}
                className={textClass}
                aria-expanded={enquiriesOpen}
                aria-haspopup="dialog"
              >
                ENQUIRIES
              </button>
              <CollectionsFan
                isOpen={collectionsOpen}
                onClose={closeAll}
                overFooter={overFooter}
                lightBackground={lightBackground}
                whiteText={whiteText}
                inline
              />
            </div>
          </motion.div>
          <button
            type="button"
            onClick={toggleCollections}
            className={textClass}
            aria-expanded={collectionsOpen}
            aria-haspopup="menu"
          >
            COLLECTIONS
          </button>
        </div>
      </div>
    </nav>
  );

  if (typeof document === "undefined") return null;
  return createPortal(navContent, document.body);
}
