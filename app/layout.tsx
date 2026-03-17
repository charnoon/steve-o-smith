import type { Metadata } from "next";
import "./globals.css";
import { ErrorBoundary } from "@/components/ErrorBoundary";

export const metadata: Metadata = {
  title: "STEVE O SMITH — Luxury Couture House",
  description: "STEVE O SMITH is a luxury couture house based in London.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="uppercase" suppressHydrationWarning>
      <body className="min-h-screen bg-white text-neutral-900" suppressHydrationWarning>
        <ErrorBoundary>{children}</ErrorBoundary>
      </body>
    </html>
  );
}
