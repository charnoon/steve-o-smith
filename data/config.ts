export const siteConfig = {
  brand: "STEVE O SMITH",
  tagline: "Luxury Couture House · London",
  logo: {
    black: "/logo-black.png",
    white: "/logo-white.png",
  },
} as const;

export const collections = [
  { id: "aw23", label: "AW/23", href: "/collections/aw23" },
  { id: "aw24", label: "AW/24", href: "/collections/aw24" },
  { id: "metropolis", label: "METROPOLIS", href: "/collections/metropolis" },
] as const;

export const navItems = [
  { id: "enquiries", label: "ENQUIRIES" },
  { id: "collections", label: "COLLECTIONS" },
] as const;

export const civilityOptions = [
  { value: "", label: "SELECT" },
  { value: "mr", label: "MR" },
  { value: "mrs", label: "MRS" },
  { value: "ms", label: "MS" },
  { value: "miss", label: "MISS" },
  { value: "dr", label: "DR" },
] as const;

export const contactMethodOptions = [
  { value: "", label: "SELECT" },
  { value: "email", label: "EMAIL" },
  { value: "phone", label: "PHONE" },
] as const;

export const footerLinks: Array<
  | { label: string; href: string }
  | { label: string; href: string; external: true }
> = [
  { label: "PRIVACY POLICY", href: "#privacy" },
  { label: "TERMS", href: "#terms" },
  { label: "INSTAGRAM", href: "https://instagram.com", external: true },
];
