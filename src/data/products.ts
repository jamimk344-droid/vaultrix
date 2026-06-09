import { ASSETS } from "@/components/vaultrix/assets";

export const DISCORD_URL = "https://discord.gg/c8VBAWAdwE";
export const INSTAGRAM_URL = "https://www.instagram.com/vaultrix.1/";

export type CategoryKey = "discord" | "games" | "subscriptions" | "hosting" | "ai";

export type PricingOption = {
  id: string;
  label: string;
  price: string;
  priceUsd?: string;
  description?: string;
};

export type ProductReview = {
  name: string;
  product: string;
  text: string;
};

export type ProductFaq = {
  q: string;
  a: string;
};

export type Product = {
  id: string;
  slug: string;
  title: string;
  category: CategoryKey;
  image: string;
  description: string;
  longDescription: string;
  pricing: PricingOption[];
  tags: string[];
  featured?: boolean;
  status?: "in-stock" | "limited" | "restocking" | "sold-out";
  features: string[];
  faq: ProductFaq[];
  reviews: ProductReview[];
  purchaseLinks: {
    discord: string;
    instagram: string;
  };
  relatedProducts: string[];
  calculator?: {
    type: "usd-bdt";
    rate: number;
    unitLabel: string;
  };
};

export type Category = {
  id: CategoryKey;
  slug: CategoryKey;
  title: string;
  tagline: string;
  description: string;
  heroImage: string;
  gradient: string;
  tags: string[];
};

export const categoryList: Category[] = [
  {
    id: "discord",
    slug: "discord",
    title: "Discord",
    tagline: "Nitro, boosts and profile upgrades",
    description:
      "Premium Discord products delivered safely through login, gift links, ticket support and warranty-backed service.",
    heroImage: ASSETS.productImages.nitro,
    gradient: "from-indigo-500 via-purple-600 to-fuchsia-500",
    tags: ["Nitro", "Boosts", "Decorations", "Profile"],
  },
  {
    id: "games",
    slug: "games",
    title: "Games",
    tagline: "Robux, V-Bucks, Minecraft and gift cards",
    description:
      "Game currencies, accounts, item shop products and gift cards with flexible order support.",
    heroImage: ASSETS.productImages.robux,
    gradient: "from-emerald-500 via-cyan-500 to-blue-600",
    tags: ["Robux", "Fortnite", "Minecraft", "Steam"],
  },
  {
    id: "subscriptions",
    slug: "subscriptions",
    title: "Subscriptions",
    tagline: "Streaming and premium apps",
    description:
      "Netflix, Spotify, YouTube Premium and other account upgrades with clear plan options and support.",
    heroImage: ASSETS.productImages.netflix,
    gradient: "from-rose-500 via-orange-500 to-purple-600",
    tags: ["Netflix", "Spotify", "YouTube", "ChatGPT"],
  },
  {
    id: "hosting",
    slug: "hosting",
    title: "Hosting",
    tagline: "KVM VPS with root access",
    description:
      "Full-root KVM VPS plans with DDoS protection, instant deployment and 99.9% uptime positioning.",
    heroImage: ASSETS.productImages.vps,
    gradient: "from-sky-500 via-indigo-500 to-purple-600",
    tags: ["VPS", "KVM", "Root", "DDoS"],
  },
  {
    id: "ai",
    slug: "ai",
    title: "AI Tools",
    tagline: "AI subscriptions and pro access",
    description:
      "ChatGPT, Google AI Pro and Gemini access from the current Vaultrix restock catalog.",
    heroImage: ASSETS.productImages.chatgpt,
    gradient: "from-violet-500 via-purple-500 to-orange-500",
    tags: ["ChatGPT", "Gemini", "Google AI"],
  },
];

export const marketplaceFaq: ProductFaq[] = [
  {
    q: "How do I place an order?",
    a: "Join the Discord server or message Vaultrix on Instagram, open a ticket, share the product and staff will guide payment and delivery.",
  },
  {
    q: "Are the products legal?",
    a: "Yes. Vaultrix positions its catalog as legally sourced across Nitro, Decorations, V-Bucks, Spotify, Netflix, VPS and the wider marketplace.",
  },
  {
    q: "How fast is delivery?",
    a: "Most products are delivered within minutes. Robux via Gamepass can take 3-7 days because of Roblox payout timing.",
  },
  {
    q: "What payment methods do you accept?",
    a: "Vaultrix accepts bKash, Nagad, Rocket, Binance and other crypto. Staff can confirm the latest supported methods in Discord.",
  },
  {
    q: "Do prices change?",
    a: "Yes. Prices can update with market fluctuations, so the latest confirmed pricing is handled through Discord tickets.",
  },
  {
    q: "Can I get support after purchase?",
    a: "Yes. Orders include warranty during the validity period. Open a ticket if anything needs support.",
  },
];

export const marketplaceReviews: ProductReview[] = [
  {
    name: "Roronoa_Zoro",
    product: "3000 Robux",
    text: "3000 Robux delivered successfully. Super smooth process, will buy again.",
  },
  {
    name: "Aura",
    product: "Netflix Premium",
    text: "Netflix profile received instantly. 4K works flawlessly on every device.",
  },
  {
    name: "NARCISSIST",
    product: "Discord Nitro",
    text: "Nitro Boost delivered smoothly. Pricing is way better than other shops.",
  },
  {
    name: "X",
    product: "Minecraft Account",
    text: "Got my Minecraft account with capes exactly as described. Legit seller.",
  },
  {
    name: "NebulaVex",
    product: "Spotify Premium",
    text: "Spotify Premium worked perfectly on my personal account. No issues at all.",
  },
  {
    name: "EKRAM",
    product: "VPS 12GB",
    text: "VPS is fast, root access in minutes. Uptime has been rock-solid so far.",
  },
  {
    name: "RayaN",
    product: "Gemini Pro",
    text: "Gemini Pro activated within an hour. Insane value for 270 BDT.",
  },
  {
    name: "Arias",
    product: "V-Bucks",
    text: "V-Bucks gifted instantly. Best rate I've seen, will definitely return.",
  },
  {
    name: "SpidermanOG",
    product: "YouTube Premium",
    text: "1-year YouTube Premium working perfectly. Saved a ton vs official.",
  },
  {
    name: "CrazedSoldier",
    product: "Server Boosts",
    text: "14x boosts applied within minutes. Server hit level 3 instantly.",
  },
  {
    name: "Mushfique",
    product: "ChatGPT Plus",
    text: "ChatGPT Plus activated same day. Worth every taka, will renew.",
  },
  {
    name: "Moon",
    product: "Decorations",
    text: "Avatar decoration looks clean. Smooth login delivery as promised.",
  },
];

const defaultLinks = { discord: DISCORD_URL, instagram: INSTAGRAM_URL };
const defaultFaq = marketplaceFaq.slice(0, 4);
const reviewFor = (keyword: string) =>
  marketplaceReviews
    .filter((review) => review.product.toLowerCase().includes(keyword.toLowerCase()))
    .slice(0, 2);

export const products: Product[] = [
  {
    id: "nitro",
    slug: "nitro",
    title: "Discord Nitro",
    category: "discord",
    image: ASSETS.productImages.nitro,
    description: "Premium Nitro subscriptions delivered safely through login or gift links.",
    longDescription:
      "Discord Nitro from Vaultrix combines the existing monthly, yearly, login, gift link and promo-claim options into one dedicated product page with selectable plans.",
    pricing: [
      {
        id: "nitro-m-login",
        label: "Nitro Premium Monthly (Login)",
        price: "580 BDT",
        priceUsd: "$4.3",
        description: "1 month Discord Nitro Premium through secure login delivery.",
      },
      {
        id: "nitro-m-gift",
        label: "Nitro Premium Monthly (GiftLink)",
        price: "800 BDT",
        priceUsd: "$6",
        description: "1 month Discord Nitro Premium delivered as a gift link.",
      },
      {
        id: "nitro-y-login",
        label: "Nitro Premium Yearly (Login)",
        price: "4500 BDT",
        priceUsd: "$34",
        description: "12 months of Nitro Premium through login delivery.",
      },
      {
        id: "nitro-promo",
        label: "Nitro Promo Claims (1m / 3m)",
        price: "Open Ticket",
        description: "Promo claims for eligible accounts at ticket-confirmed pricing.",
      },
    ],
    tags: ["Nitro", "Gift Link", "Login", "Warranty"],
    featured: true,
    features: [
      "Legally purchased",
      "Warranty provided",
      "Prices may change",
      "Account must be 1 month old for Nitro claims",
    ],
    faq: defaultFaq,
    reviews: reviewFor("Nitro"),
    purchaseLinks: defaultLinks,
    relatedProducts: ["server-boost", "decorations", "profile-themes"],
  },
  {
    id: "decorations",
    slug: "decorations",
    title: "Discord Decorations",
    category: "discord",
    image: ASSETS.productImages.decorations,
    description: "All Discord shop avatar decorations at affordable BDT prices.",
    longDescription:
      "Choose the Discord decoration tier you want and order through the same Vaultrix ticket flow with warranty-backed login delivery.",
    pricing: [
      { id: "deco-499", label: "$4.99 Decoration", price: "200 BDT" },
      { id: "deco-599", label: "$5.99 Decoration", price: "250 BDT" },
      { id: "deco-699", label: "$6.99 Decoration", price: "330 BDT" },
      { id: "deco-799", label: "$7.99 Decoration", price: "370 BDT" },
      { id: "deco-899", label: "$8.99 Decoration", price: "440 BDT" },
      { id: "deco-999", label: "$9.99 Decoration", price: "520 BDT" },
    ],
    tags: ["Avatar", "Decoration", "Discord Shop"],
    featured: true,
    features: [
      "Permanent decoration",
      "Delivered via login",
      "Choose any matching tier design",
      "Warranty included",
    ],
    faq: defaultFaq,
    reviews: reviewFor("Decorations"),
    purchaseLinks: defaultLinks,
    relatedProducts: ["nitro", "profile-themes", "server-boost"],
  },
  {
    id: "server-boost",
    slug: "server-boost",
    title: "Server Boost",
    category: "discord",
    image: ASSETS.productImages.boosts,
    description:
      "14x monthly Discord server boosts to unlock perks, better audio and custom emojis.",
    longDescription:
      "Boost any Discord server with 14 active monthly boosts. Pricing is confirmed through ticket because stock and market rates can change.",
    pricing: [{ id: "boost-14x", label: "14x Monthly Server Boosts", price: "Open Ticket" }],
    tags: ["Server", "Boosts", "Level 3"],
    featured: true,
    features: [
      "14 server boosts",
      "Level 3 server perks",
      "Monthly recurring available",
      "Open a ticket for pricing",
    ],
    faq: defaultFaq,
    reviews: reviewFor("Server Boosts"),
    purchaseLinks: defaultLinks,
    relatedProducts: ["nitro", "decorations", "profile-themes"],
  },
  {
    id: "profile-themes",
    slug: "profile-themes",
    title: "Profile Themes",
    category: "discord",
    image: ASSETS.productImages.decorations,
    description: "Discord profile styling support through Vaultrix tickets.",
    longDescription:
      "A dedicated page for Discord profile customization requests. Open a ticket to confirm currently available profile theme options and pricing.",
    pricing: [
      { id: "profile-ticket", label: "Custom Profile Theme Request", price: "Open Ticket" },
    ],
    tags: ["Profile", "Discord", "Customization"],
    features: [
      "Ticket-confirmed options",
      "Discord profile upgrades",
      "Staff-guided ordering",
      "Warranty when applicable",
    ],
    faq: defaultFaq,
    reviews: reviewFor("Decorations"),
    purchaseLinks: defaultLinks,
    relatedProducts: ["decorations", "nitro", "server-boost"],
  },
  {
    id: "robux",
    slug: "robux",
    title: "Robux",
    category: "games",
    image: ASSETS.productImages.robux,
    description: "Custom Robux amounts via Gamepass, Group Payout, Login or in-game gifting.",
    longDescription:
      "Robux orders stay flexible with every current Vaultrix delivery method preserved: Gamepass, Group Payout, Login and in-game gifting.",
    pricing: [
      {
        id: "robux-gp",
        label: "Robux via Gamepass",
        price: "Open Ticket",
        description: "Delivery takes 3-7 days.",
      },
      {
        id: "robux-group",
        label: "Robux via Group Payout",
        price: "Open Ticket",
        description: "Requires 2 weeks in group.",
      },
      {
        id: "robux-login",
        label: "Robux via Login",
        price: "Open Ticket",
        description: "Fast delivery through secure login method.",
      },
      {
        id: "robux-gift",
        label: "Robux via In-game Gifting",
        price: "Open Ticket",
        description: "Supported titles only.",
      },
    ],
    tags: ["Roblox", "Gamepass", "Group Payout", "Gifting"],
    featured: true,
    features: [
      "Any custom amount",
      "Safe and legal method",
      "Group payout requires 2-week membership",
      "Gamepass delivery takes 3-7 days",
    ],
    faq: defaultFaq,
    reviews: reviewFor("Robux"),
    purchaseLinks: defaultLinks,
    relatedProducts: ["minecraft", "vbucks", "steam-gift-card"],
  },
  {
    id: "vbucks",
    slug: "vbucks",
    title: "V-Bucks",
    category: "games",
    image: ASSETS.productImages.vbucks,
    description: "V-Bucks, Crew Pack and Item Shop packs at the best rate in BDT.",
    longDescription:
      "Fortnite V-Bucks and related item shop products with the current Vaultrix rate and ticket-based custom ordering.",
    pricing: [
      { id: "vb-rate", label: "V-Bucks (Custom Amount)", price: "0.7 BDT / V-Buck" },
      { id: "vb-crew", label: "Monthly Crew Pack", price: "500 BDT" },
      { id: "vb-shop", label: "Any Item Shop Pack", price: "Open Ticket" },
    ],
    tags: ["Fortnite", "Crew Pack", "Item Shop"],
    featured: true,
    features: ["Custom amounts", "Best market rate", "Safe delivery", "Warranty provided"],
    faq: defaultFaq,
    reviews: reviewFor("V-Bucks"),
    purchaseLinks: defaultLinks,
    relatedProducts: ["robux", "steam-gift-card", "minecraft"],
  },
  {
    id: "minecraft",
    slug: "minecraft",
    title: "Minecraft",
    category: "games",
    image: ASSETS.productImages.minecraft,
    description: "Minecraft accounts and cape-code offers from the Vaultrix restock catalog.",
    longDescription:
      "The current Vaultrix restock products for Minecraft are now grouped into one dedicated product page with selectable account and cape-code options.",
    pricing: [
      {
        id: "mc-5-capes",
        label: "Minecraft Account - 5 Capes + VIP+",
        price: "2500 BDT",
        description: "Rare account with 5 capes and VIP+ rank.",
      },
      {
        id: "mcfa-special",
        label: "MCFA Account - Special Capes",
        price: "1650 BDT",
        description: "Microsoft full-access account with special capes.",
      },
      {
        id: "mce-cape",
        label: "MCE Cape Code",
        price: "Open Ticket",
        description: "Restocks periodically.",
      },
    ],
    tags: ["Minecraft", "MCFA", "Capes", "Accounts"],
    status: "limited",
    features: [
      "Rare account options",
      "Special cape availability",
      "Restock-based stock",
      "Ticket support",
    ],
    faq: defaultFaq,
    reviews: reviewFor("Minecraft"),
    purchaseLinks: defaultLinks,
    relatedProducts: ["robux", "vbucks", "steam-gift-card"],
  },
  {
    id: "steam-gift-card",
    slug: "steam-gift-card",
    title: "Steam Gift Card",
    category: "games",
    image: "https://dropinblog.net/34253310/files/featured/imagem-2024-09-23-133404744.png",
    description: "Steam Gift Card orders with live BDT calculation at 1 USD = 140 BDT.",
    longDescription:
      "Enter the USD gift card amount you want and Vaultrix calculates the BDT total live before you open a ticket.",
    pricing: [{ id: "steam-rate", label: "Steam Gift Card Rate", price: "1 USD = 140 BDT" }],
    tags: ["Steam", "Gift Card", "USD", "BDT"],
    featured: true,
    features: ["$5 = ৳700", "$10 = ৳1400", "$20 = ৳2800", "Live USD to BDT calculation"],
    faq: defaultFaq,
    reviews: [],
    purchaseLinks: defaultLinks,
    relatedProducts: ["robux", "vbucks", "minecraft"],
    calculator: { type: "usd-bdt", rate: 140, unitLabel: "USD amount" },
  },
  {
    id: "netflix",
    slug: "netflix",
    title: "Netflix",
    category: "subscriptions",
    image: ASSETS.productImages.netflix,
    description: "Premium Netflix with no household restrictions and OTP support.",
    longDescription:
      "Netflix Premium options from the existing Vaultrix catalog, now selectable as private or shared profile plans.",
    pricing: [
      {
        id: "nf-private",
        label: "Netflix Private Profile",
        price: "280 BDT",
        description: "Your own private profile on a Premium plan.",
      },
      {
        id: "nf-shared",
        label: "Netflix Shared Profile",
        price: "150 BDT",
        description: "Affordable shared profile access.",
      },
    ],
    tags: ["Netflix", "4K", "OTP", "Streaming"],
    featured: true,
    features: [
      "4K UHQ streaming",
      "OTP support available",
      "No household issues",
      "Warranty during validity",
    ],
    faq: defaultFaq,
    reviews: reviewFor("Netflix"),
    purchaseLinks: defaultLinks,
    relatedProducts: ["spotify", "youtube-premium", "chatgpt"],
  },
  {
    id: "spotify",
    slug: "spotify",
    title: "Spotify",
    category: "subscriptions",
    image: ASSETS.productImages.spotify,
    description: "Spotify Premium on your personal account with no ads and offline mode.",
    longDescription:
      "Spotify Premium plans from the current product and restock lists, combined into one selectable product page.",
    pricing: [
      { id: "sp-month", label: "Spotify Premium Monthly", price: "130 BDT" },
      { id: "sp-3m", label: "Spotify - 3 Months", price: "200 BDT" },
    ],
    tags: ["Spotify", "Music", "Premium"],
    featured: true,
    features: [
      "Personal account upgrade",
      "Ad-free listening",
      "Offline downloads",
      "High-quality audio",
    ],
    faq: defaultFaq,
    reviews: reviewFor("Spotify"),
    purchaseLinks: defaultLinks,
    relatedProducts: ["netflix", "youtube-premium", "chatgpt"],
  },
  {
    id: "youtube-premium",
    slug: "youtube-premium",
    title: "YouTube Premium",
    category: "subscriptions",
    image: ASSETS.productImages.youtube,
    description: "12 months of YouTube Premium from the Vaultrix restock catalog.",
    longDescription:
      "The existing YouTube Premium 1-year offer now has a dedicated page with preserved pricing and order flow.",
    pricing: [{ id: "yt-year", label: "YouTube Premium - 1 Year", price: "1700 BDT" }],
    tags: ["YouTube", "Premium", "1 Year"],
    featured: true,
    features: ["1-year access", "Ad-free YouTube", "Restock catalog product", "Ticket support"],
    faq: defaultFaq,
    reviews: reviewFor("YouTube"),
    purchaseLinks: defaultLinks,
    relatedProducts: ["netflix", "spotify", "chatgpt"],
  },
  {
    id: "chatgpt",
    slug: "chatgpt",
    title: "ChatGPT Monthly",
    category: "subscriptions",
    image: ASSETS.productImages.chatgpt,
    description: "ChatGPT Plus monthly subscription from the Vaultrix restock catalog.",
    longDescription:
      "ChatGPT Monthly remains available as a dedicated subscription product with the existing Vaultrix restock pricing.",
    pricing: [{ id: "chatgpt-month", label: "ChatGPT Monthly", price: "550 BDT" }],
    tags: ["ChatGPT", "Plus", "AI"],
    status: "in-stock",
    features: [
      "Monthly subscription",
      "Same-day activation positioning",
      "Support through ticket",
      "Restock catalog product",
    ],
    faq: defaultFaq,
    reviews: reviewFor("ChatGPT"),
    purchaseLinks: defaultLinks,
    relatedProducts: ["gemini-pro", "youtube-premium", "spotify"],
  },
  {
    id: "gemini-pro",
    slug: "gemini-pro",
    title: "Google AI Pro / Gemini Pro",
    category: "ai",
    image: ASSETS.productImages.gemini,
    description: "Gemini Pro / Google AI Pro access from the Vaultrix restock catalog.",
    longDescription:
      "Google AI Pro and Gemini Pro access is preserved from the current limited-stock restock section and routed as a marketplace product.",
    pricing: [{ id: "gemini-pro", label: "Google AI Pro / Gemini Pro", price: "270 BDT" }],
    tags: ["Gemini", "Google AI", "AI Pro"],
    status: "limited",
    features: [
      "Limited availability",
      "Google AI Pro access",
      "Gemini Pro access",
      "Ticket-confirmed delivery",
    ],
    faq: defaultFaq,
    reviews: reviewFor("Gemini"),
    purchaseLinks: defaultLinks,
    relatedProducts: ["chatgpt", "youtube-premium", "vps"],
  },
  {
    id: "vps",
    slug: "vps",
    title: "VPS Hosting",
    category: "hosting",
    image: ASSETS.productImages.vps,
    description: "Full-root KVM VPS with DDoS protection and instant deployment.",
    longDescription:
      "Vaultrix VPS Hosting preserves the existing 8GB, 12GB and 16GB KVM plans in a dedicated hosting page with plan selection.",
    pricing: [
      { id: "vps-8", label: "VPS - 8GB RAM", price: "405 BDT" },
      { id: "vps-12", label: "VPS - 12GB RAM", price: "540 BDT" },
      { id: "vps-16", label: "VPS - 16GB RAM", price: "607.5 BDT" },
    ],
    tags: ["KVM", "Root", "DDoS", "Hosting"],
    featured: true,
    features: [
      "Full root access",
      "DDoS protection",
      "Instant deployment",
      "99.9% uptime SLA",
      "KVM virtualization",
    ],
    faq: defaultFaq,
    reviews: reviewFor("VPS"),
    purchaseLinks: defaultLinks,
    relatedProducts: ["gemini-pro", "chatgpt", "minecraft"],
  },
];

export const categories = categoryList.filter((category) =>
  products.some((product) => product.category === category.id),
);

export function getCategory(slug: string | undefined) {
  return categories.find((category) => category.slug === slug);
}

export function getProductsByCategory(category: CategoryKey | string) {
  return products.filter((product) => product.category === category);
}

export function getProduct(category: string | undefined, slug: string | undefined) {
  return products.find((product) => product.category === category && product.slug === slug);
}

export function productPath(product: Product) {
  return `/category/${product.category}/${product.slug}`;
}

export function categoryPath(category: Category) {
  return `/category/${category.slug}`;
}

export function getRelatedProducts(product: Product) {
  return product.relatedProducts
    .map((id) => products.find((candidate) => candidate.id === id))
    .filter(Boolean) as Product[];
}
