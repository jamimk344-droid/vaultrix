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

export default function App() {
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
