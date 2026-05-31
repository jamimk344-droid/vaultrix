import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";

const LINKS = [
  { href: "#products", label: "Products" },
  { href: "#restock", label: "Restock" },
  { href: "#reviews", label: "Reviews" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "py-2" : "py-4"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className={`mx-auto flex items-center justify-between rounded-2xl px-4 py-2.5 transition-all duration-500 ${
            scrolled ? "glass-strong max-w-5xl" : "glass max-w-6xl"
          }`}>
            <a href="#" className="shrink-0"><Logo /></a>
            <nav className="hidden md:flex items-center gap-1">
              {LINKS.map((l) => (
                <a key={l.href} href={l.href}
                  className="px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground rounded-lg hover:bg-white/5 transition-colors">
                  {l.label}
                </a>
              ))}
            </nav>
            <div className="flex items-center gap-2">
              <a href="https://discord.gg/c8VBAWAdwE" target="_blank" rel="noreferrer"
                className="hidden sm:inline-flex items-center gap-2 rounded-xl gradient-orange-purple px-4 py-2 text-sm font-medium text-white hover:opacity-90 transition-opacity glow-both">
                Join Discord
              </a>
              <button className="md:hidden p-2 rounded-lg hover:bg-white/5" onClick={() => setOpen(true)} aria-label="Open menu">
                <Menu className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] md:hidden"
          >
            <div className="absolute inset-0 bg-background/80 backdrop-blur-xl" onClick={() => setOpen(false)} />
            <motion.div
              initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25 }}
              className="absolute right-0 top-0 h-full w-80 max-w-[85%] glass-strong p-6"
            >
              <div className="flex items-center justify-between mb-8">
                <Logo />
                <button onClick={() => setOpen(false)} className="p-2 rounded-lg hover:bg-white/5">
                  <X className="h-5 w-5" />
                </button>
              </div>
              <nav className="flex flex-col gap-1">
                {LINKS.map((l) => (
                  <a key={l.href} href={l.href} onClick={() => setOpen(false)}
                    className="px-4 py-3 text-base rounded-xl hover:bg-white/5 transition-colors">
                    {l.label}
                  </a>
                ))}
                <a href="https://discord.gg/c8VBAWAdwE" target="_blank" rel="noreferrer"
                  className="mt-4 text-center rounded-xl gradient-orange-purple px-4 py-3 font-medium text-white">
                  Join Discord
                </a>
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
