import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, MessageCircle, Instagram, ArrowRight, CheckCircle2 } from "lucide-react";
import { CATEGORIES, type Product, type Category } from "./products-data";
import { CATEGORY_IMAGE, PRODUCT_IMAGE } from "./assets";

export function Products() {
  const [query, setQuery] = useState("");
  const [activeCat, setActiveCat] = useState<string>("all");
  const [learnMore, setLearnMore] = useState<{ p: Product; c: Category } | null>(null);
  const [buyOpen, setBuyOpen] = useState(false);

  const filtered = useMemo(() => {
    return CATEGORIES
      .filter((c) => activeCat === "all" || c.id === activeCat)
      .map((c) => ({
        ...c,
        products: c.products.filter((p) =>
          (p.name + " " + p.description).toLowerCase().includes(query.toLowerCase())
        ),
      }))
      .filter((c) => c.products.length > 0);
  }, [query, activeCat]);

  return (
    <section id="products" className="relative py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="inline-block rounded-full glass px-3 py-1 text-xs font-medium text-muted-foreground mb-4">
            Marketplace
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
            Browse <span className="gradient-text">Premium</span> Products
          </h2>
          <p className="mt-4 text-muted-foreground">
            Curated digital goods, delivered safely. Every item is legally sourced and backed by warranty.
          </p>
        </motion.div>

        {/* Search + filters */}
        <div className="mx-auto max-w-5xl mb-10 space-y-4">
          <div className="glass-strong rounded-2xl p-2 flex items-center gap-2">
            <Search className="ml-3 h-4 w-4 text-muted-foreground shrink-0" />
            <input
              value={query} onChange={(e) => setQuery(e.target.value)}
              placeholder="Search products…"
              className="flex-1 bg-transparent outline-none text-sm py-2 placeholder:text-muted-foreground"
            />
            {query && (
              <button onClick={() => setQuery("")} className="p-1.5 rounded-lg hover:bg-white/10 mr-1">
                <X className="h-3.5 w-3.5" />
              </button>
            )}
          </div>
          <div className="flex flex-wrap gap-2 justify-center">
            <FilterChip active={activeCat === "all"} onClick={() => setActiveCat("all")}>All</FilterChip>
            {CATEGORIES.map((c) => (
              <FilterChip key={c.id} active={activeCat === c.id} onClick={() => setActiveCat(c.id)}>
                <c.Icon className="h-3.5 w-3.5" /> {c.name}
              </FilterChip>
            ))}
          </div>
        </div>

        {/* Categories */}
        <div className="space-y-16">
          {filtered.length === 0 && (
            <p className="text-center text-muted-foreground py-20">No products match your search.</p>
          )}
          {filtered.map((cat) => (
            <CategoryBlock key={cat.id} cat={cat} onLearn={(p) => setLearnMore({ p, c: cat })} onBuy={() => setBuyOpen(true)} />
          ))}
        </div>
      </div>

      <LearnMoreModal data={learnMore} onClose={() => setLearnMore(null)} onBuy={() => { setLearnMore(null); setBuyOpen(true); }} />
      <BuyNowModal open={buyOpen} onClose={() => setBuyOpen(false)} />
    </section>
  );
}

function FilterChip({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button onClick={onClick}
      className={`inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-medium transition-all ${
        active ? "gradient-orange-purple text-white glow-both" : "glass hover:bg-white/10 text-muted-foreground"
      }`}>
      {children}
    </button>
  );
}

function CategoryBlock({ cat, onLearn, onBuy }: { cat: Category; onLearn: (p: Product) => void; onBuy: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }}
    >
      <div className="flex items-start gap-4 mb-6">
        <div className={`shrink-0 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${cat.gradient} glow-both`}>
          <cat.Icon className="h-7 w-7 text-white" />
        </div>
        <div>
          <h3 className="font-display text-2xl md:text-3xl font-bold">{cat.name}</h3>
          <p className="text-sm text-muted-foreground mt-1">{cat.description}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {cat.products.map((p) => (
          <ProductCard key={p.id} p={p} cat={cat} onLearn={() => onLearn(p)} onBuy={onBuy} />
        ))}
      </div>

      {cat.notes.length > 0 && (
        <div className="mt-5 glass rounded-2xl p-4 text-xs text-muted-foreground flex flex-wrap gap-x-4 gap-y-1">
          {cat.notes.map((n) => (
            <span key={n} className="flex items-center gap-1.5"><CheckCircle2 className="h-3 w-3 text-orange" /> {n}</span>
          ))}
        </div>
      )}
    </motion.div>
  );
}

function ProductCard({ p, cat, onLearn, onBuy }: { p: Product; cat: Category; onLearn: () => void; onBuy: () => void }) {
  return (
    <motion.div
      whileHover={{ y: -4 }} transition={{ type: "spring", stiffness: 300 }}
      className="group glass-strong rounded-2xl overflow-hidden flex flex-col hover:border-orange/30 transition-colors"
    >
      <div className={`relative h-32 bg-gradient-to-br ${cat.gradient} overflow-hidden`}>
        <img
          src={PRODUCT_IMAGE[p.id] ?? CATEGORY_IMAGE[cat.id]}
          alt={p.name}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <cat.Icon className="absolute right-4 bottom-4 h-10 w-10 text-white/80 drop-shadow group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500" />
        <div className="absolute left-4 top-4 inline-flex items-center rounded-full bg-black/40 backdrop-blur px-2.5 py-1 text-[10px] font-medium text-white uppercase tracking-wider">
          {cat.tagline}
        </div>
      </div>
      <div className="p-5 flex flex-col flex-1">
        <h4 className="font-semibold text-base leading-snug">{p.name}</h4>
        <p className="mt-1.5 text-xs text-muted-foreground line-clamp-2 flex-1">{p.description}</p>
        <div className="mt-4 flex items-baseline gap-2">
          <span className="font-display text-xl font-bold gradient-text">{p.price}</span>
          {p.priceUsd && <span className="text-xs text-muted-foreground">/ {p.priceUsd}</span>}
        </div>
        <div className="mt-4 flex gap-2">
          <button onClick={onLearn} className="flex-1 rounded-xl glass px-3 py-2 text-xs font-medium hover:bg-white/10 transition-colors">
            Learn More
          </button>
          <button onClick={onBuy} className="flex-1 rounded-xl gradient-orange-purple px-3 py-2 text-xs font-semibold text-white hover:opacity-90 transition-opacity">
            Buy Now
          </button>
        </div>
      </div>
    </motion.div>
  );
}

function LearnMoreModal({ data, onClose, onBuy }: { data: { p: Product; c: Category } | null; onClose: () => void; onBuy: () => void }) {
  return (
    <AnimatePresence>
      {data && (
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          className="fixed inset-0 z-[70] flex items-center justify-center p-4"
        >
          <div className="absolute inset-0 bg-background/70 backdrop-blur-md" onClick={onClose} />
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.95, opacity: 0 }}
            transition={{ type: "spring", damping: 22 }}
            className="relative w-full max-w-lg glass-strong rounded-3xl overflow-hidden glow-both"
          >
            <button onClick={onClose} className="absolute right-4 top-4 z-10 p-1.5 rounded-lg bg-black/30 hover:bg-black/50">
              <X className="h-4 w-4" />
            </button>
            <div className={`relative h-40 bg-gradient-to-br ${data.c.gradient} overflow-hidden`}>
              <img
                src={PRODUCT_IMAGE[data.p.id] ?? CATEGORY_IMAGE[data.c.id]}
                alt={data.p.name}
                className="absolute inset-0 h-full w-full object-cover opacity-70"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <data.c.Icon className="absolute right-6 bottom-6 h-14 w-14 text-white/80 drop-shadow" />
            </div>
            <div className="p-6 sm:p-8">
              <div className="text-xs uppercase tracking-wider text-muted-foreground">{data.c.name}</div>
              <h3 className="mt-1 font-display text-2xl font-bold">{data.p.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{data.p.description}</p>
              <div className="mt-5 flex items-baseline gap-2">
                <span className="font-display text-3xl font-bold gradient-text">{data.p.price}</span>
                {data.p.priceUsd && <span className="text-sm text-muted-foreground">/ {data.p.priceUsd}</span>}
              </div>
              <ul className="mt-5 space-y-2">
                {data.p.details.map((d) => (
                  <li key={d} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-orange shrink-0 mt-0.5" /> {d}
                  </li>
                ))}
              </ul>
              <button onClick={onBuy}
                className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-xl gradient-orange-purple px-5 py-3 font-semibold text-white hover:opacity-90">
                Buy Now <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function BuyNowModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          className="fixed inset-0 z-[70] flex items-center justify-center p-4"
        >
          <div className="absolute inset-0 bg-background/70 backdrop-blur-md" onClick={onClose} />
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.95, opacity: 0 }}
            transition={{ type: "spring", damping: 22 }}
            className="relative w-full max-w-md glass-strong rounded-3xl p-6 sm:p-8 glow-both"
          >
            <button onClick={onClose} className="absolute right-4 top-4 p-1.5 rounded-lg hover:bg-white/10">
              <X className="h-4 w-4" />
            </button>
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl gradient-orange-purple glow-both mb-5">
              <MessageCircle className="h-7 w-7 text-white" />
            </div>
            <h3 className="font-display text-2xl font-bold">Place your order</h3>
            <p className="mt-2 text-muted-foreground">
              Orders are handled through our Discord server and Instagram page. Choose your preferred channel below.
            </p>
            <div className="mt-6 flex flex-col gap-2.5">
              <a href="https://discord.gg/c8VBAWAdwE" target="_blank" rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl gradient-orange-purple px-5 py-3 font-semibold text-white hover:opacity-90">
                <MessageCircle className="h-4 w-4" /> Join Discord
              </a>
              <a href="https://www.instagram.com/vaultrix.1/" target="_blank" rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl glass px-5 py-3 font-semibold hover:bg-white/10">
                <Instagram className="h-4 w-4" /> Open Instagram
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
