import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/vaultrix/Navbar";
import { Hero } from "@/components/vaultrix/Hero";
import { NoticePopup } from "@/components/vaultrix/NoticePopup";
import { Stats } from "@/components/vaultrix/Stats";
import { Products } from "@/components/vaultrix/Products";
import { Restock } from "@/components/vaultrix/Restock";
import { WhyChoose } from "@/components/vaultrix/WhyChoose";
import { Reviews } from "@/components/vaultrix/Reviews";
import { Giveaways } from "@/components/vaultrix/Giveaways";
import { Community } from "@/components/vaultrix/Community";
import { FAQ } from "@/components/vaultrix/FAQ";
import { Contact } from "@/components/vaultrix/Contact";
import { Footer } from "@/components/vaultrix/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vaultrix — Premium Digital Marketplace" },
      { name: "description", content: "Vaultrix is a premium digital marketplace for Discord Nitro, Robux, V-Bucks, Netflix, Spotify, VPS hosting and more — trusted, fast and affordable." },
      { property: "og:title", content: "Vaultrix — Premium Digital Marketplace" },
      { property: "og:description", content: "Nitro, Robux, VPS Hosting, Streaming Services and more. Trusted by hundreds of satisfied customers." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "theme-color", content: "#0B0F14" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="dark relative min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Products />
        <Restock />
        <WhyChoose />
        <Reviews />
        <Giveaways />
        <Community />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <NoticePopup />
    </div>
  );
}
