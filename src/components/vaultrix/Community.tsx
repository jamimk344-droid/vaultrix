import { motion } from "framer-motion";
import { ASSETS } from "./assets";

const CHANNELS = [
  { src: ASSETS.community.announcements, name: "#announcements", desc: "Restocks, deals & news" },
  { src: ASSETS.community.giveaways,     name: "#giveaways",     desc: "Active giveaways" },
  { src: ASSETS.community.vouches,       name: "#vouches",       desc: "Verified customer proofs" },
  { src: ASSETS.community.support,       name: "#support",       desc: "24/7 ticket support" },
  { src: ASSETS.community.general,       name: "#general",       desc: "Hang out & chat" },
  { src: ASSETS.community.staff,         name: "#staff",         desc: "Meet the team" },
];

export function Community() {
  return (
    <section className="relative py-24">
      <div className="container mx-auto px-4">
        <div className="glass-strong rounded-3xl p-8 md:p-12 relative overflow-hidden">
          <img src={ASSETS.community.background} alt="" aria-hidden loading="lazy"
            className="absolute inset-0 h-full w-full object-cover opacity-15" />
          <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/60 to-background/80" />
          <div className="absolute inset-0 animated-gradient-bg opacity-10" />
          <div className="relative grid lg:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            >
              <span className="inline-block rounded-full glass px-3 py-1 text-xs font-medium text-muted-foreground mb-4">Community</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
                Join the <span className="gradient-text">Vaultrix</span> Discord
              </h2>
              <p className="mt-4 text-muted-foreground">
                Active support, giveaways, vouches, proofs, restock alerts and a friendly community of digital goods buyers — all in one place.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="https://discord.gg/c8VBAWAdwE" target="_blank" rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-2xl gradient-orange-purple px-6 py-3 font-semibold text-white glow-both hover:scale-105 transition-transform">
                  Join Discord
                </a>
                <a href="https://www.instagram.com/vaultrix.1/" target="_blank" rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-2xl glass px-6 py-3 font-semibold hover:bg-white/10 transition-colors">
                  Follow Instagram
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="grid grid-cols-2 gap-3"
            >
              {CHANNELS.map((c, i) => (
                <motion.div
                  key={c.name}
                  whileHover={{ y: -3 }}
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="glass rounded-xl p-3.5 flex items-center gap-3"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg gradient-orange-purple shrink-0">
                    <img src={c.src} alt="" aria-hidden className="h-4 w-4 brightness-0 invert" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm font-medium truncate">{c.name}</div>
                    <div className="text-xs text-muted-foreground truncate">{c.desc}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
