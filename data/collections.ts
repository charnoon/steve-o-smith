/**
 * Single source of truth for collection data.
 * Used by collection pages, MetropolisSection, and config.
 */

export type CollectionMedia = {
  url: string;
  alt: string;
  caption?: string;
  type: "image" | "video";
};

export type CollectionImage = CollectionMedia;

export type CollectionData = {
  title: string;
  slug: string;
  images: CollectionMedia[];
};

const METROPOLIS_MEDIA: CollectionMedia[] = [
  { url: "/metropolis/metropolis-1557443.jpeg", alt: "Metropolis", caption: "Look 1", type: "image" },
  { url: "/metropolis/metropolis-1805756.jpeg", alt: "Metropolis", caption: "Look 2", type: "image" },
  { url: "/metropolis/metropolis-3065623.jpeg", alt: "Metropolis", caption: "Look 3", type: "image" },
  { url: "/metropolis/metropolis-3667976.jpeg", alt: "Metropolis", caption: "Look 4", type: "image" },
  { url: "/metropolis/metropolis-3907990.jpeg", alt: "Metropolis", caption: "Look 5", type: "image" },
  { url: "/metropolis/metropolis-3980850.jpeg", alt: "Metropolis", caption: "Look 6", type: "image" },
  { url: "/metropolis/metropolis-4127316.jpeg", alt: "Metropolis", caption: "Look 7", type: "image" },
  { url: "/metropolis/metropolis-450034.jpeg", alt: "Metropolis", caption: "Look 8", type: "image" },
  { url: "/metropolis/metropolis-4626652.jpeg", alt: "Metropolis", caption: "Look 9", type: "image" },
  { url: "/metropolis/metropolis-5008172.jpeg", alt: "Metropolis", caption: "Look 10", type: "image" },
  { url: "/metropolis/metropolis-5555180.jpeg", alt: "Metropolis", caption: "Look 11", type: "image" },
  { url: "/metropolis/metropolis-5798527.jpeg", alt: "Metropolis", caption: "Look 12", type: "image" },
  { url: "/metropolis/metropolis-8625062.jpeg", alt: "Metropolis", caption: "Look 13", type: "image" },
  { url: "/metropolis/metropolis-9767376.jpeg", alt: "Metropolis", caption: "Look 14", type: "image" },
];

export const COLLECTION_DATA: Record<string, CollectionData> = {
  metropolis: {
    title: "METROPOLIS",
    slug: "metropolis",
    images: METROPOLIS_MEDIA,
  },
  aw23: {
    title: "AW/23",
    slug: "aw23",
    images: [],
  },
  aw24: {
    title: "AW/24",
    slug: "aw24",
    images: [],
  },
};

export function getCollection(slug: string): CollectionData | null {
  return COLLECTION_DATA[slug] ?? null;
}
