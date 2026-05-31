import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { ASSETS } from "./assets";

const REVIEWS = [
  { name: "Roronoa_Zoro",  product: "3000 Robux",        text: "3000 Robux delivered successfully. Super smooth process, will buy again." },
  { name: "Aura",          product: "Netflix Premium",   text: "Netflix profile received instantly. 4K works flawlessly on every device." },
  { name: "NARCISSIST",    product: "Discord Nitro",     text: "Nitro Boost delivered smoothly. Pricing is way better than other shops." },
  { name: "X",             product: "Minecraft Account", text: "Got my Minecraft account with capes exactly as described. Legit seller." },
  { name: "NebulaVex",     product: "Spotify Premium",   text: "Spotify Premium worked perfectly on my personal account. No issues at all." },
  { name: "EKRAM",         product: "VPS 12GB",          text: "VPS is fast, root access in minutes. Uptime has been rock-solid so far." },
  { name: "RayaN",         product: "Gemini Pro",        text: "Gemini Pro activated within an hour. Insane value for 270 BDT." },
  { name: "Arias",         product: "V-Bucks",           text: "V-Bucks gifted instantly. Best rate I've seen, will definitely return." },
  { name: "SpidermanOG",   product: "YouTube Premium",   text: "1-year YouTube Premium working perfectly. Saved a ton vs official." },
  { name: "CrazedSoldier", product: "Server Boosts",     text: "14x boosts applied within minutes. Server hit level 3 instantly." },
  { name: "Mushfique",     product: "ChatGPT Plus",      text: "ChatGPT Plus activated same day. Worth every taka, will renew." },
  { name: "Moon",          product: "Decorations",       text: "Avatar decoration looks clean. Smooth login delivery as promised." },
];

export function Reviews() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((x) => (x + 1) % REVIEWS.length), 5000);
    return () => clearInterval(t);
  }, []);

  const visible = [REVIEWS[i], REVIEWS[(i + 1) % REVIEWS.length], REVIEWS[(i + 2) % REVIEWS.length]];

  return (
    <section id="reviews" className="relative py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="inline-block rounded-full glass px-3 py-1 text-xs font-medium text-muted-foreground mb-4">Reviews</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
            Loved by our <span className="gradient-text">community</span>
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">Based on real customer vouches from our Discord community.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
          <AnimatePresence mode="popLayout">
            {visible.map((r, idx) => (
              <motion.div
                key={r.name + i + idx}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -30, scale: 0.95 }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="glass-strong rounded-2xl p-6 relative"
              >
                <Quote className="absolute right-4 top-4 h-8 w-8 text-orange/20" />
                <div className="flex gap-0.5 mb-3">
                  {[...Array(5)].map((_, s) => (
                    <motion.div key={s} initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.1 + s * 0.05 }}>
                      <Star className="h-4 w-4 fill-orange text-orange" />
                    </motion.div>
                  ))}
                </div>
                <p className="text-sm leading-relaxed">{r.text}</p>
                <div className="mt-5 flex items-center gap-3 pt-4 border-t border-white/5">
                  <img
                    src={ASSETS.reviewAvatars[r.name] ?? `https://placehold.co/150x150/111111/ffffff?text=${encodeURIComponent(r.name[0])}`}
                    alt={r.name}
                    loading="lazy"
                    className="h-9 w-9 rounded-full object-cover ring-1 ring-white/10"
                  />
                  <div>
                    <div className="text-sm font-medium">{r.name}</div>
                    <div className="text-xs text-muted-foreground">{r.product}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="mt-8 flex justify-center gap-1.5">
          {REVIEWS.map((_, idx) => (
            <button key={idx} onClick={() => setI(idx)}
              className={`h-1.5 rounded-full transition-all ${idx === i ? "w-8 gradient-orange-purple" : "w-1.5 bg-white/20"}`} aria-label={`Review ${idx + 1}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
