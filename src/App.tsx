import { Navbar } from "@/components/vaultrix/Navbar";
import { NoticePopup } from "@/components/vaultrix/NoticePopup";
import { MarketplaceRouter, SiteFooter } from "@/components/vaultrix/Marketplace";

export default function App() {
  return (
    <div className="dark relative min-h-screen bg-background text-foreground">
      <Navbar />
      <MarketplaceRouter />
      <SiteFooter />
      <NoticePopup />
    </div>
  );
}
