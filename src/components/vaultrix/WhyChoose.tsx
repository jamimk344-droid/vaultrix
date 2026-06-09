import { motion } from "framer-motion";
import { Zap, Lock, Star, Gift, MessageCircle, Rocket } from "lucide-react";

const FEATURES = [
  {
    Icon: Zap,
    title: "Instant Delivery",
    desc: "Most products are delivered within minutes after confirmation.",
    color: "from-orange to-amber-500",
  },
  {
    Icon: Lock,
    title: "Secure Transactions",
    desc: "Safe, legal sourcing with full warranty across every product.",
    color: "from-emerald-400 to-teal-500",
  },
  {
    Icon: Star,
    title: "Trusted Community",
    desc: "300+ members and dozens of verified vouches on Discord.",
    color: "from-yellow-400 to-orange-500",
  },
  {
    Icon: Gift,
    title: "Frequent Giveaways",
    desc: "Nitro, Netflix, Gemini, VPS — giveaways drop every week.",
    color: "from-pink-400 to-fuchsia-500",
  },
  {
    Icon: MessageCircle,
    title: "Active Support",
    desc: "Real humans on Discord & Instagram — quick replies, 24/7.",
    color: "from-indigo-400 to-purple-500",
  },
  {
    Icon: Rocket,
    title: "Premium Services",
    desc: "From Nitro to KVM VPS — only the products we'd buy ourselves.",
    color: "from-sky-400 to-blue-500",
  },
];

export function WhyChoose() {
  return (
    <section className="relative py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="inline-block rounded-full glass px-3 py-1 text-xs font-medium text-muted-foreground mb-4">
            Why Vaultrix
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
            Built for <span className="gradient-text">trust</span> and speed
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {FEATURES.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              whileHover={{ y: -4 }}
              className="group relative glass-strong rounded-2xl p-6 overflow-hidden"
            >
              <div
                className={`absolute -top-12 -right-12 h-32 w-32 rounded-full bg-gradient-to-br ${f.color} opacity-20 blur-2xl group-hover:opacity-40 transition-opacity`}
              />
              <div
                className={`relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${f.color} glow-both mb-4`}
              >
                <f.Icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-display text-lg font-semibold">{f.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
