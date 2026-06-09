import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Sparkles, Zap } from "lucide-react";
import { ASSETS } from "./assets";

const floaters = [
  {
    src: ASSETS.hero.floaters.discord,
    x: "8%",
    y: "20%",
    color: "from-indigo-500 to-purple-600",
    delay: 0,
  },
  {
    src: ASSETS.hero.floaters.roblox,
    x: "85%",
    y: "15%",
    color: "from-emerald-400 to-teal-500",
    delay: 0.5,
  },
  {
    src: ASSETS.hero.floaters.spotify,
    x: "12%",
    y: "75%",
    color: "from-green-400 to-emerald-500",
    delay: 1,
  },
  {
    src: ASSETS.hero.floaters.netflix,
    x: "88%",
    y: "70%",
    color: "from-rose-400 to-red-600",
    delay: 1.5,
  },
  {
    src: ASSETS.hero.floaters.server,
    x: "78%",
    y: "45%",
    color: "from-blue-400 to-indigo-500",
    delay: 2,
  },
  {
    src: ASSETS.hero.floaters.minecraft,
    x: "5%",
    y: "48%",
    color: "from-green-500 to-lime-500",
    delay: 2.5,
  },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16">
      {/* Hero background image */}
      <div className="absolute inset-0 -z-20">
        <img
          src={ASSETS.hero.background}
          alt=""
          aria-hidden
          className="h-full w-full object-cover opacity-20"
          loading="eager"
        />
        <div className="absolute inset-0 bg-background/70" />
      </div>

      {/* Animated gradient orbs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 h-[500px] w-[500px] rounded-full bg-orange/20 blur-[120px] animate-pulse-glow" />
        <div
          className="absolute bottom-1/4 right-1/4 h-[500px] w-[500px] rounded-full bg-purple/25 blur-[120px] animate-pulse-glow"
          style={{ animationDelay: "1.5s" }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_0%,var(--background)_70%)]" />
      </div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Floating icons */}
      {floaters.map(({ src, x, y, color, delay }, i) => (
        <motion.div
          key={i}
          className="absolute hidden md:block"
          style={{ left: x, top: y }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 + i * 0.1, duration: 0.6 }}
        >
          <motion.div
            animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 6, repeat: Infinity, delay, ease: "easeInOut" }}
            className={`glass-strong rounded-2xl p-4 bg-gradient-to-br ${color} bg-opacity-20 glow-both`}
          >
            <img src={src} alt="" aria-hidden className="h-7 w-7 brightness-0 invert" />
          </motion.div>
        </motion.div>
      ))}

      <div className="container relative mx-auto px-4 text-center max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-muted-foreground mb-6"
        >
          <Sparkles className="h-3.5 w-3.5 text-orange" />
          Trusted by 300+ members across Discord
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05]"
        >
          Premium Digital <br />
          Products at <span className="gradient-text">Affordable</span> Prices
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-6 text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
        >
          Nitro, Robux, VPS Hosting, Streaming Services and more. Trusted by hundreds of satisfied
          customers.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <a
            href="#products"
            className="group inline-flex items-center gap-2 rounded-2xl gradient-orange-purple px-7 py-3.5 font-semibold text-white glow-both hover:scale-105 transition-transform"
          >
            Browse Products
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="https://discord.gg/c8VBAWAdwE"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 rounded-2xl glass-strong px-7 py-3.5 font-semibold hover:bg-white/10 transition-colors"
          >
            <MessageCircle className="h-4 w-4" />
            Join Discord
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs text-muted-foreground"
        >
          <span className="flex items-center gap-1.5">
            <Zap className="h-3.5 w-3.5 text-orange" /> Instant Delivery
          </span>
          <span className="flex items-center gap-1.5">
            <Sparkles className="h-3.5 w-3.5 text-purple" /> Legal & Warrantied
          </span>
          <span className="flex items-center gap-1.5">
            <MessageCircle className="h-3.5 w-3.5 text-orange" /> 24/7 Support
          </span>
        </motion.div>
      </div>
    </section>
  );
}
