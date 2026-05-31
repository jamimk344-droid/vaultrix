import { motion } from "framer-motion";
import { ASSETS } from "./assets";

export function Contact() {
  return (
    <section id="contact" className="relative py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="inline-block rounded-full glass px-3 py-1 text-xs font-medium text-muted-foreground mb-4">Contact</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
            Get in <span className="gradient-text">touch</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {[
            { src: ASSETS.social.discord,   title: "Discord",         desc: "Fastest support — open a ticket.", btn: "Join Discord",      href: "https://discord.gg/c8VBAWAdwE" },
            { src: ASSETS.social.instagram, title: "Instagram",       desc: "DM us @vaultrix.1 anytime.",       btn: "Message Instagram", href: "https://www.instagram.com/vaultrix.1/" },
            { src: ASSETS.social.headset,   title: "Support Tickets", desc: "Track your order or get help.",    btn: "Open Ticket",       href: "https://discord.gg/c8VBAWAdwE" },
          ].map((c, i) => (
            <motion.a
              key={c.title}
              href={c.href} target="_blank" rel="noreferrer"
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="glass-strong rounded-2xl p-6 text-center group"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl gradient-orange-purple glow-both mb-4 group-hover:scale-110 transition-transform">
                <img src={c.src} alt="" aria-hidden className="h-6 w-6 brightness-0 invert" />
              </div>
              <h3 className="font-display text-xl font-semibold">{c.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{c.desc}</p>
              <div className="mt-4 inline-flex items-center gap-1 text-xs font-medium gradient-text">
                {c.btn} →
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
