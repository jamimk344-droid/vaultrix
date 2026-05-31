import type { LucideIcon } from "lucide-react";
import { Crown, Sparkles, Rocket, Gamepad2, Coins, Tv, Music, Server } from "lucide-react";

export type Product = {
  id: string;
  name: string;
  price: string;
  priceUsd?: string;
  description: string;
  details: string[];
};

export type Category = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  Icon: LucideIcon;
  gradient: string;
  products: Product[];
  notes: string[];
};

export const CATEGORIES: Category[] = [
  {
    id: "nitro",
    name: "Discord Nitro",
    tagline: "Boost your Discord experience",
    description: "Premium Nitro subscriptions delivered safely through login or gift links.",
    Icon: Crown,
    gradient: "from-indigo-500 to-purple-600",
    products: [
      { id: "nitro-m-login", name: "Nitro Premium Monthly (Login)", price: "580 BDT", priceUsd: "$4.3", description: "Monthly Nitro via secure login delivery.", details: ["1 month Discord Nitro Premium", "Login method delivery", "Full warranty support", "Legally purchased"] },
      { id: "nitro-m-gift", name: "Nitro Premium Monthly (GiftLink)", price: "800 BDT", priceUsd: "$6", description: "Monthly Nitro delivered as a gift link.", details: ["1 month Discord Nitro Premium", "Instant gift link", "Redeem anytime", "Legally purchased"] },
      { id: "nitro-y-login", name: "Nitro Premium Yearly (Login)", price: "4500 BDT", priceUsd: "$34", description: "12 months of Nitro Premium via login.", details: ["12 months Discord Nitro Premium", "Login method delivery", "Full year warranty", "Save vs monthly"] },
      { id: "nitro-promo", name: "Nitro Promo Claims (1m / 3m)", price: "Open Ticket", description: "Claim Nitro promos on eligible accounts.", details: ["1m or 3m promo claims", "Requires 1-month-old account", "Open a ticket for pricing", "Legally claimed"] },
    ],
    notes: ["Legally purchased", "Warranty provided", "Prices may change", "Account must be 1 month old for Nitro claims"],
  },
  {
    id: "decorations",
    name: "Discord Decorations",
    tagline: "Premium avatar decorations",
    description: "All Discord shop avatar decorations at affordable BDT prices.",
    Icon: Sparkles,
    gradient: "from-fuchsia-500 to-pink-600",
    products: [
      { id: "deco-499", name: "$4.99 Decoration", price: "200 BDT", description: "Any $4.99 tier avatar decoration.", details: ["Permanent decoration", "Delivered via login", "Choose any $4.99 design", "Warranty included"] },
      { id: "deco-599", name: "$5.99 Decoration", price: "250 BDT", description: "Any $5.99 tier avatar decoration.", details: ["Permanent decoration", "Delivered via login", "Choose any $5.99 design", "Warranty included"] },
      { id: "deco-699", name: "$6.99 Decoration", price: "330 BDT", description: "Any $6.99 tier avatar decoration.", details: ["Permanent decoration", "Delivered via login", "Choose any $6.99 design", "Warranty included"] },
      { id: "deco-799", name: "$7.99 Decoration", price: "370 BDT", description: "Any $7.99 tier avatar decoration.", details: ["Permanent decoration", "Delivered via login", "Choose any $7.99 design", "Warranty included"] },
      { id: "deco-899", name: "$8.99 Decoration", price: "440 BDT", description: "Any $8.99 tier avatar decoration.", details: ["Permanent decoration", "Delivered via login", "Choose any $8.99 design", "Warranty included"] },
      { id: "deco-999", name: "$9.99 Decoration", price: "520 BDT", description: "Any $9.99 tier avatar decoration.", details: ["Permanent decoration", "Delivered via login", "Choose any $9.99 design", "Warranty included"] },
    ],
    notes: ["Legally purchased", "Warranty provided", "Prices may change"],
  },
  {
    id: "boosts",
    name: "Server Boosts",
    tagline: "Power up your server",
    description: "14x monthly Discord server boosts — unlock perks, better audio, custom emojis.",
    Icon: Rocket,
    gradient: "from-purple-500 to-pink-500",
    products: [
      { id: "boost-14x", name: "14x Monthly Server Boosts", price: "Open Ticket", description: "Boost any server with 14x active boosts for the month.", details: ["14 server boosts", "Level 3 server perks", "Monthly recurring available", "Open a ticket for pricing"] },
    ],
    notes: ["Legally purchased", "Warranty provided", "Prices may change"],
  },
  {
    id: "robux",
    name: "Robux",
    tagline: "Roblox currency, your way",
    description: "Custom Robux amounts via Gamepass, Group Payout, Login or in-game gifting.",
    Icon: Gamepad2,
    gradient: "from-emerald-500 to-green-600",
    products: [
      { id: "robux-gp", name: "Robux via Gamepass", price: "Open Ticket", description: "Custom Robux amounts delivered through gamepass purchases.", details: ["Any custom amount", "Delivery: 3–7 days", "Safe & legal method", "Open ticket for pricing"] },
      { id: "robux-group", name: "Robux via Group Payout", price: "Open Ticket", description: "Group payout method — requires 2 weeks in group.", details: ["Any custom amount", "Requires 2 weeks group membership", "Bulk-friendly", "Open ticket for pricing"] },
      { id: "robux-login", name: "Robux via Login", price: "Open Ticket", description: "Secure login method — fast delivery.", details: ["Any custom amount", "Fast delivery", "Account must be reachable", "Open ticket for pricing"] },
      { id: "robux-gift", name: "Robux via In-game Gifting", price: "Open Ticket", description: "Gifted directly in-game on supported titles.", details: ["Gifted via in-game system", "Instant on supported games", "No account access required", "Open ticket for pricing"] },
    ],
    notes: ["Legally purchased", "Prices may change", "Group payouts require 2-week membership", "Gamepass delivery takes 3–7 days"],
  },
  {
    id: "vbucks",
    name: "V-Bucks",
    tagline: "Fortnite essentials",
    description: "V-Bucks, Crew Pack and Item Shop packs at the best rate in BDT.",
    Icon: Coins,
    gradient: "from-blue-500 to-cyan-500",
    products: [
      { id: "vb-rate", name: "V-Bucks (Custom Amount)", price: "0.7 BDT / V-Buck", description: "Any custom V-Bucks amount at 0.7 BDT each.", details: ["Custom amounts", "Best market rate", "Safe delivery", "Warranty provided"] },
      { id: "vb-crew", name: "Monthly Crew Pack", price: "500 BDT", description: "Fortnite Crew monthly subscription.", details: ["1000 V-Bucks per month", "Exclusive Crew Pack outfit", "Battle Pass included", "Monthly delivery"] },
      { id: "vb-shop", name: "Any Item Shop Pack", price: "Open Ticket", description: "Gift any item shop bundle.", details: ["Any current item shop bundle", "Gifted directly", "Friend required 48h", "Open ticket for pricing"] },
    ],
    notes: ["Legally purchased", "Prices may change"],
  },
  {
    id: "netflix",
    name: "Netflix",
    tagline: "4K UHD streaming",
    description: "Premium Netflix with no household restrictions and OTP support.",
    Icon: Tv,
    gradient: "from-red-500 to-rose-600",
    products: [
      { id: "nf-private", name: "Netflix Private Profile", price: "280 BDT", description: "Your own private profile on a Premium plan.", details: ["4K UHQ streaming", "Private profile, no sharing", "OTP support available", "No household issues"] },
      { id: "nf-shared", name: "Netflix Shared Profile", price: "150 BDT", description: "Affordable shared profile access.", details: ["4K UHQ streaming", "Shared profile", "OTP support", "No household issues"] },
    ],
    notes: ["Premium plan access", "4K UHQ quality", "OTP support included", "Warranty during validity"],
  },
  {
    id: "spotify",
    name: "Spotify",
    tagline: "Ad-free music",
    description: "Spotify Premium on your personal account — no ads, offline mode.",
    Icon: Music,
    gradient: "from-emerald-400 to-green-500",
    products: [
      { id: "sp-month", name: "Spotify Premium Monthly", price: "130 BDT", description: "1 month of Spotify Premium on your account.", details: ["Personal account upgrade", "Ad-free listening", "Offline downloads", "High-quality audio"] },
    ],
    notes: ["Personal account", "Ad-free", "Premium access", "Prices may change"],
  },
  {
    id: "vps",
    name: "VPS Hosting",
    tagline: "Powerful KVM VPS",
    description: "Full-root KVM VPS with DDoS protection and instant deployment.",
    Icon: Server,
    gradient: "from-sky-500 to-indigo-600",
    products: [
      { id: "vps-8", name: "VPS — 8GB RAM", price: "405 BDT", description: "8GB RAM KVM VPS with full root access.", details: ["8 GB RAM", "Full root access", "DDoS protection", "99.9% uptime", "Instant deployment"] },
      { id: "vps-12", name: "VPS — 12GB RAM", price: "540 BDT", description: "12GB RAM KVM VPS — great for bots & game servers.", details: ["12 GB RAM", "Full root access", "DDoS protection", "99.9% uptime", "KVM virtualization"] },
      { id: "vps-16", name: "VPS — 16GB RAM", price: "607.5 BDT", description: "16GB RAM KVM VPS for heavy workloads.", details: ["16 GB RAM", "Full root access", "DDoS protection", "99.9% uptime", "KVM virtualization"] },
    ],
    notes: ["Full root access", "DDoS protection", "Instant deployment", "99.9% uptime SLA"],
  },
];

export type RestockStatus = "in-stock" | "limited" | "restocking" | "sold-out";

export const RESTOCK: { name: string; price: string; status: RestockStatus; desc: string }[] = [
  { name: "Minecraft Account — 5 Capes + VIP+", price: "2500 BDT", status: "limited", desc: "Rare account with 5 capes and VIP+ rank." },
  { name: "MCFA Account — Special Capes", price: "1650 BDT", status: "in-stock", desc: "Microsoft full-access account with special capes." },
  { name: "ChatGPT Monthly", price: "550 BDT", status: "in-stock", desc: "ChatGPT Plus monthly subscription." },
  { name: "MCE Cape Code", price: "Open Ticket", status: "restocking", desc: "Minecraft cape code — restocks periodically." },
  { name: "YouTube Premium — 1 Year", price: "1700 BDT", status: "in-stock", desc: "12 months of YouTube Premium." },
  { name: "Google AI Pro / Gemini Pro", price: "270 BDT", status: "limited", desc: "Gemini Pro / Google AI Pro access." },
  { name: "Spotify — 3 Months", price: "200 BDT", status: "in-stock", desc: "3 months Spotify Premium." },
];
