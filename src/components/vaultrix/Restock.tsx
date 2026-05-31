import { useState } from "react";
import { motion } from "framer-motion";
import { Package, Flame, Clock, XCircle, CheckCircle2 } from "lucide-react";
import { RESTOCK, type RestockStatus } from "./products-data";
import { RESTOCK_IMAGE } from "./assets";
import { BuyNowModal } from "./Products";

const STATUS_META: Record<RestockStatus, { label: string; cls: string; Icon: typeof CheckCircle2 }> = {
  "in-stock":   { label: "In Stock",       cls: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30", Icon: CheckCircle2 },
  "limited":    { label: "Limited",        cls: "bg-orange-500/15 text-orange-300 border-orange-500/30",   Icon: Flame },
  "restocking": { label: "Restocking Soon",cls: "bg-purple-500/15 text-purple-300 border-purple-500/30",   Icon: Clock },
  "sold-out":   { label: "Sold Out",       cls: "bg-red-500/15 text-red-300 border-red-500/30",            Icon: XCircle },
};

export function Restock() {
  const [buy, setBuy] = useState(false);
  return (
    <section id="restock" className="relative py-24">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[400px] w-[800px] rounded-full bg-purple/10 blur-[120px]" />
      </div>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="inline-flex items-center gap-1.5 rounded-full glass px-3 py-1 text-xs font-medium text-muted-foreground mb-4">
            <Package className="h-3 w-3 text-orange" /> Restock
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
            Limited Stock & <span className="gradient-text">Special Offers</span>
          </h2>
          <p className="mt-4 text-muted-foreground">Time-sensitive deals. When it's gone, it's gone.</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {RESTOCK.map((item, i) => {
            const meta = STATUS_META[item.status];
            return (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -4 }}
                className="glass-strong rounded-2xl overflow-hidden flex flex-col"
              >
                {RESTOCK_IMAGE[item.name] && (
                  <div className="relative h-28 -mx-0 -mt-0 overflow-hidden">
                    <img src={RESTOCK_IMAGE[item.name]} alt={item.name} loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover opacity-80" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  </div>
                )}
                <div className="p-5 flex flex-col flex-1">
                <div className="flex items-start justify-between gap-2">
                  <h4 className="font-semibold leading-snug">{item.name}</h4>
                  <span className={`shrink-0 inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[10px] font-medium ${meta.cls}`}>
                    <meta.Icon className="h-2.5 w-2.5" /> {meta.label}
                  </span>
                </div>
                <p className="mt-2 text-xs text-muted-foreground flex-1">{item.desc}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="font-display text-lg font-bold gradient-text">{item.price}</span>
                  <button
                    onClick={() => setBuy(true)}
                    disabled={item.status === "sold-out"}
                    className="rounded-xl gradient-orange-purple px-4 py-1.5 text-xs font-semibold text-white hover:opacity-90 disabled:opacity-40 disabled:cursor-not-allowed transition-opacity"
                  >
                    {item.status === "sold-out" ? "Sold Out" : "Order"}
                  </button>
                </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
      <BuyNowModal open={buy} onClose={() => setBuy(false)} />
    </section>
  );
}
