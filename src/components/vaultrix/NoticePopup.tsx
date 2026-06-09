import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AlertTriangle, X, MessageCircle } from "lucide-react";

const KEY = "vaultrix-notice-dismissed";

export function NoticePopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem(KEY)) return;
    const t = setTimeout(() => setOpen(true), 5000);
    return () => clearTimeout(t);
  }, []);

  const close = () => {
    if (typeof window !== "undefined") sessionStorage.setItem(KEY, "1");
    setOpen(false);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[80] flex items-center justify-center p-4"
        >
          <div className="absolute inset-0 bg-background/70 backdrop-blur-md" onClick={close} />
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 22 }}
            className="relative w-full max-w-md glass-strong rounded-3xl p-6 sm:p-8 glow-both"
          >
            <button
              onClick={close}
              className="absolute right-4 top-4 p-1.5 rounded-lg hover:bg-white/10"
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-orange to-purple glow-both mb-5">
              <AlertTriangle className="h-7 w-7 text-white" />
            </div>

            <h3 className="font-display text-2xl font-bold mb-2">Important Notice</h3>
            <p className="text-muted-foreground leading-relaxed">
              Prices change frequently due to market fluctuations. For the latest prices and stock
              updates, join our Discord server.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-2.5">
              <a
                href="https://discord.gg/c8VBAWAdwE"
                target="_blank"
                rel="noreferrer"
                onClick={close}
                className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl gradient-orange-purple px-5 py-3 font-semibold text-white hover:opacity-90"
              >
                <MessageCircle className="h-4 w-4" /> Join Discord
              </a>
              <button
                onClick={close}
                className="flex-1 inline-flex items-center justify-center rounded-xl glass px-5 py-3 font-medium hover:bg-white/10"
              >
                Later
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
