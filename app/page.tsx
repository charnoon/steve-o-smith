import { HeaderHero } from "@/components/HeaderHero";
import { BottomNav } from "@/components/BottomNav";
import { FooterBar } from "@/components/FooterBar";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Hero with scrollable video */}
      <HeaderHero />
      <BottomNav />

      {/* Footer */}
      <FooterBar />
    </main>
  );
}
