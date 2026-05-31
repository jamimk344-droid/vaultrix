import { Logo } from "./Logo";
import { ASSETS } from "./assets";

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-12 mt-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <Logo />
            <p className="mt-3 text-sm text-muted-foreground max-w-sm">
              Premium digital marketplace — Nitro, Robux, streaming, VPS and more, delivered fast.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <a href="https://discord.gg/c8VBAWAdwE" target="_blank" rel="noreferrer"
              aria-label="Discord"
              className="flex h-10 w-10 items-center justify-center rounded-xl glass hover:bg-white/10 transition-colors">
              <img src={ASSETS.social.discord} alt="" aria-hidden className="h-4 w-4 brightness-0 invert" />
            </a>
            <a href="https://www.instagram.com/vaultrix.1/" target="_blank" rel="noreferrer"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-xl glass hover:bg-white/10 transition-colors">
              <img src={ASSETS.social.instagram} alt="" aria-hidden className="h-4 w-4 brightness-0 invert" />
            </a>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <div>Vaultrix Shop © 2026 — All rights reserved.</div>
          <div>
            Developed by{" "}
            <a href="https://nebulavex1.netlify.app" target="_blank" rel="noreferrer"
              className="font-medium gradient-text hover:underline">
              NebulaVex
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
