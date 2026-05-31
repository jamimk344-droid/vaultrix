import { motion } from "framer-motion";
import { Gift, Sparkles, PartyPopper } from "lucide-react";

const GIVEAWAYS = [
  { title: "Nitro Giveaways",     desc: "Monthly Discord Nitro drops for active members.", emoji: "🎁" },
  { title: "Netflix Giveaways",   desc: "Premium Netflix profiles given away each season.", emoji: "🍿" },
  { title: "Gemini Pro Giveaways",desc: "Free Gemini Pro / Google AI Pro slots.",          emoji: "🤖" },
  { title: "VPS Giveaways",       desc: "Free VPS hosting for community events.",          emoji: "🖥️" },
  { title: "Community Events",    desc: "Quizzes, gaming nights and milestone parties.",   emoji: "🎉" },
];

export function Giveaways() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 left-10 h-40 w-40 rounded-full bg-orange/20 blur-3xl" />
        <div className="absolute bottom-10 right-10 h-40 w-40 rounded-full bg-purple/20 blur-3xl" />
      </div>

      {/* Confetti */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-2 w-2 rounded-sm"
          style={{
            left: `${(i * 8.3) % 100}%`,
            top: `${(i * 17) % 100}%`,
            background: i % 2 ? "#FF8A00" : "#7C3AED",
          }}
          animate={{ y: [0, -30, 0], rotate: [0, 360], opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 4 + (i % 3), repeat: Infinity, delay: i * 0.2 }}
        />
      ))}

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="inline-flex items-center gap-1.5 rounded-full glass px-3 py-1 text-xs font-medium text-muted-foreground mb-4">
            <PartyPopper className="h-3 w-3 text-orange" /> Giveaways
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
            Free stuff, <span className="gradient-text">every week</span>
          </h2>
          <p className="mt-4 text-muted-foreground">Join the Discord to enter active giveaways and community events.</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-10">
          {GIVEAWAYS.map((g, i) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -6, rotate: -1 }}
              className="glass-strong rounded-2xl p-5 text-center"
            >
              <motion.div
                animate={{ rotate: [0, -8, 8, -8, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.3 }}
                className="text-4xl mb-3"
              >
                {g.emoji}
              </motion.div>
              <h4 className="font-semibold">{g.title}</h4>
              <p className="mt-1 text-xs text-muted-foreground">{g.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center">
          <a href="https://discord.gg/c8VBAWAdwE" target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-2xl gradient-orange-purple px-7 py-3.5 font-semibold text-white glow-both hover:scale-105 transition-transform">
            <Gift className="h-4 w-4" /> Join & Enter Giveaways <Sparkles className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
