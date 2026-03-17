"use client";

import { motion } from "framer-motion";

interface GridMedia {
  url?: string;
  alt?: string;
  caption?: string;
  type?: "image" | "video";
}

interface CollectionGridProps {
  title: string;
  slug: string;
  gridImages: GridMedia[];
}

export function CollectionGrid({ title, slug, gridImages }: CollectionGridProps) {
  const cells = (gridImages ?? [])
    .filter((item) => item?.url)
    .map((item, i) => ({ ...item, type: item.type ?? "image", key: i }));

  return (
    <section id={slug} className="w-full max-w-full overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-4 w-full gap-0">
        {cells.map((item, i) => (
          <motion.div
            key={i}
            className="group relative aspect-[9/16] overflow-hidden bg-neutral-200"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
          >
            <>
              {item.type === "video" ? (
                <video
                  src={item.url}
                  className="absolute inset-0 w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                />
              ) : (
                <img
                  src={item.url}
                  alt={item.alt || `${title} image ${i + 1}`}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />
              )}
              {(item.caption || item.alt) && (
                <span className="absolute bottom-0 right-0 px-3 py-2 font-serif text-label tracking-[0.06em] text-[#ffffff] opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  {item.caption || item.alt}
                </span>
              )}
            </>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
