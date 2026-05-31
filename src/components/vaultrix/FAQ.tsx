import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const FAQS = [
  { q: "How do I place an order?",       a: "Join our Discord server or message us on Instagram, open a ticket, tell us the product, and we'll guide you through payment and delivery." },
  { q: "Are the products legal?",        a: "Yes. Every product on Vaultrix is legally sourced — Nitro, Decorations, V-Bucks, Spotify, Netflix, VPS — all of it." },
  { q: "How fast is delivery?",          a: "Most products are delivered within minutes. Robux via Gamepass takes 3–7 days due to Roblox's payout rules." },
  { q: "What payment methods do you accept?", a: "We accept bKash, Nagad, Rocket, Binance and other crypto. Ask staff in Discord for the latest accepted methods." },
  { q: "Do prices change?",              a: "Yes — prices update with market fluctuations. The latest pricing always lives on our Discord server." },
  { q: "Can I get support after purchase?", a: "Absolutely. Every order comes with warranty during its validity period — open a ticket and we'll sort it." },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="relative py-24">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block rounded-full glass px-3 py-1 text-xs font-medium text-muted-foreground mb-4">FAQ</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
            Frequently asked <span className="gradient-text">questions</span>
          </h2>
        </motion.div>

        <div className="space-y-3">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={f.q}
                initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="glass-strong rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-white/[0.02] transition-colors"
                >
                  <span className="font-medium">{f.q}</span>
                  <motion.div animate={{ rotate: isOpen ? 45 : 0 }} transition={{ duration: 0.2 }}>
                    <Plus className="h-5 w-5 text-orange shrink-0" />
                  </motion.div>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">{f.a}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
