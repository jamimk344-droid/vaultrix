import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  ExternalLink,
  Filter,
  Instagram,
  MessageCircle,
  Search,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Star,
  X,
  Zap,
} from "lucide-react";
import {
  categories,
  categoryPath,
  DISCORD_URL,
  getCategory,
  getProduct,
  getProductsByCategory,
  getRelatedProducts,
  INSTAGRAM_URL,
  marketplaceFaq,
  marketplaceReviews,
  productPath,
  products,
  type Category,
  type PricingOption,
  type Product,
} from "@/data/products";
import { Hero } from "./Hero";
import { WhyChoose } from "./WhyChoose";
import { Reviews } from "./Reviews";
import { Community } from "./Community";
import { FAQ } from "./FAQ";
import { Contact } from "./Contact";
import { Footer } from "./Footer";

type Route =
  | { type: "home" }
  | { type: "category"; categorySlug: string }
  | { type: "product"; categorySlug: string; productSlug: string }
  | { type: "not-found" };

export function parseRoute(pathname = window.location.pathname): Route {
  const parts = pathname.split("/").filter(Boolean);
  if (parts.length === 0) return { type: "home" };
  if (parts[0] === "category" && parts.length === 2)
    return { type: "category", categorySlug: parts[1] };
  if (parts[0] === "category" && parts.length === 3) {
    return { type: "product", categorySlug: parts[1], productSlug: parts[2] };
  }
  return { type: "not-found" };
}

export function useSpaRoute() {
  const [route, setRoute] = useState<Route>(() => parseRoute());

  useEffect(() => {
    const onPop = () => setRoute(parseRoute());
    const onClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const anchor = target?.closest("a");
      if (!anchor) return;
      const href = anchor.getAttribute("href");
      if (!href || href.startsWith("#") || href.startsWith("http") || href.startsWith("mailto:"))
        return;
      if (anchor.target || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      const url = new URL(href, window.location.origin);
      window.history.pushState({}, "", url.pathname + url.hash);
      setRoute(parseRoute(url.pathname));
      if (url.hash) {
        window.requestAnimationFrame(() => {
          document.querySelector(url.hash)?.scrollIntoView({ behavior: "smooth" });
        });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    };
    window.addEventListener("popstate", onPop);
    document.addEventListener("click", onClick);
    return () => {
      window.removeEventListener("popstate", onPop);
      document.removeEventListener("click", onClick);
    };
  }, []);

  return route;
}

function Seo({
  title,
  description,
  image,
  type = "website",
  structuredData,
}: {
  title: string;
  description: string;
  image?: string;
  type?: string;
  structuredData?: object;
}) {
  useEffect(() => {
    document.title = title;
    const setMeta = (selector: string, attr: string, value: string) => {
      let el = document.head.querySelector(selector) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        const match = selector.match(/\[(name|property)="([^"]+)"\]/);
        if (match) el.setAttribute(match[1], match[2]);
        document.head.appendChild(el);
      }
      el.setAttribute(attr, value);
    };
    setMeta('meta[name="description"]', "content", description);
    setMeta('meta[property="og:title"]', "content", title);
    setMeta('meta[property="og:description"]', "content", description);
    setMeta('meta[property="og:type"]', "content", type);
    setMeta('meta[name="twitter:title"]', "content", title);
    setMeta('meta[name="twitter:description"]', "content", description);
    if (image) {
      setMeta('meta[property="og:image"]', "content", image);
      setMeta('meta[name="twitter:image"]', "content", image);
    }
    const old = document.getElementById("vaultrix-structured-data");
    old?.remove();
    if (structuredData) {
      const script = document.createElement("script");
      script.id = "vaultrix-structured-data";
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }
  }, [description, image, structuredData, title, type]);

  return null;
}

export function MarketplaceRouter() {
  const route = useSpaRoute();
  return (
    <AnimatePresence mode="wait">
      <motion.main
        key={JSON.stringify(route)}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -12 }}
        transition={{ duration: 0.25 }}
      >
        {route.type === "home" && <HomePage />}
        {route.type === "category" && <CategoryPage slug={route.categorySlug} />}
        {route.type === "product" && (
          <ProductPage categorySlug={route.categorySlug} productSlug={route.productSlug} />
        )}
        {route.type === "not-found" && <NotFound />}
      </motion.main>
    </AnimatePresence>
  );
}

function HomePage() {
  const featuredProducts = products.filter((product) => product.featured).slice(0, 8);
  return (
    <>
      <Seo
        title="Vaultrix - Premium Digital Marketplace"
        description="Browse Vaultrix products across Discord, games, subscriptions, hosting and AI tools with dedicated product pages and ticket-based support."
        image={products[0].image}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Vaultrix",
          url: window.location.origin,
          sameAs: [DISCORD_URL, INSTAGRAM_URL],
        }}
      />
      <Hero />
      <FeaturedCategories />
      <MarketplaceSection
        title="Featured Products"
        eyebrow="Marketplace"
        products={featuredProducts}
      />
      <WhyChoose />
      <Reviews />
      <FAQ />
      <Community />
      <Contact />
    </>
  );
}

function FeaturedCategories() {
  return (
    <section id="categories" className="relative py-20">
      <div className="container mx-auto px-4">
        <SectionHeading
          eyebrow="Categories"
          title="Discover by category"
          description="Dedicated storefronts for every product family in the Vaultrix catalog."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-4">
          {categories.map((category, index) => {
            const count = getProductsByCategory(category.id).length;
            return (
              <motion.a
                key={category.id}
                href={categoryPath(category)}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -5 }}
                className="group glass-strong rounded-2xl overflow-hidden"
              >
                <div className="relative h-36 overflow-hidden">
                  <img
                    src={category.heroImage}
                    alt={category.title}
                    loading="lazy"
                    className="h-full w-full object-cover opacity-75 transition duration-500 group-hover:scale-105 group-hover:opacity-90"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-35`}
                  />
                  <div className="absolute left-4 top-4 rounded-full bg-black/45 px-3 py-1 text-xs text-white backdrop-blur">
                    {count} products
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-xl font-semibold">{category.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                    {category.description}
                  </p>
                  <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold gradient-text">
                    Browse category <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CategoryPage({ slug }: { slug: string }) {
  const category = getCategory(slug);
  const [query, setQuery] = useState("");
  const [tag, setTag] = useState("all");

  if (!category) return <NotFound />;

  const categoryProducts = getProductsByCategory(category.id);
  const allTags = Array.from(new Set(categoryProducts.flatMap((product) => product.tags)));
  const filtered = categoryProducts.filter((product) => {
    const matchesQuery = `${product.title} ${product.description} ${product.tags.join(" ")}`
      .toLowerCase()
      .includes(query.toLowerCase());
    const matchesTag = tag === "all" || product.tags.includes(tag);
    return matchesQuery && matchesTag;
  });
  const featured = categoryProducts.filter((product) => product.featured);

  return (
    <>
      <Seo
        title={`${category.title} Products - Vaultrix`}
        description={category.description}
        image={category.heroImage}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: `${category.title} Products`,
          description: category.description,
        }}
      />
      <CategoryHero category={category} productCount={categoryProducts.length} />
      {featured.length > 0 && (
        <MarketplaceSection
          title="Featured in this category"
          eyebrow="Featured"
          products={featured}
          compact
        />
      )}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs text-muted-foreground">
                <Filter className="h-3.5 w-3.5 text-orange" /> Product Grid
              </span>
              <h2 className="mt-4 font-display text-3xl font-bold">Browse {category.title}</h2>
            </div>
            <div className="glass-strong flex min-w-0 items-center gap-2 rounded-2xl p-2 lg:w-[360px]">
              <Search className="ml-2 h-4 w-4 shrink-0 text-muted-foreground" />
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search products..."
                className="min-w-0 flex-1 bg-transparent py-2 text-sm outline-none placeholder:text-muted-foreground"
              />
              {query && (
                <button
                  onClick={() => setQuery("")}
                  className="rounded-lg p-1.5 hover:bg-white/10"
                  aria-label="Clear search"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>
          </div>
          <div className="mb-8 flex flex-wrap gap-2">
            <Chip active={tag === "all"} onClick={() => setTag("all")}>
              All
            </Chip>
            {allTags.map((item) => (
              <Chip key={item} active={tag === item} onClick={() => setTag(item)}>
                {item}
              </Chip>
            ))}
          </div>
          {filtered.length === 0 ? (
            <p className="py-16 text-center text-muted-foreground">
              No products match your filters.
            </p>
          ) : (
            <ProductGrid products={filtered} />
          )}
        </div>
      </section>
      <Community />
    </>
  );
}

function ProductPage({ categorySlug, productSlug }: { categorySlug: string; productSlug: string }) {
  const product = getProduct(categorySlug, productSlug);
  const [selected, setSelected] = useState<PricingOption | undefined>(() => product?.pricing[0]);
  const [usd, setUsd] = useState(5);

  useEffect(() => {
    setSelected(product?.pricing[0]);
  }, [product]);

  if (!product) return <NotFound />;

  const category = getCategory(product.category);
  const related = getRelatedProducts(product);
  const calculated = product.calculator ? Math.max(0, usd) * product.calculator.rate : 0;

  return (
    <>
      <Seo
        title={`${product.title} - Vaultrix`}
        description={product.description}
        image={product.image}
        type="product"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Product",
          name: product.title,
          description: product.description,
          image: product.image,
          brand: { "@type": "Brand", name: "Vaultrix" },
          offers: {
            "@type": "Offer",
            priceCurrency: "BDT",
            availability: "https://schema.org/InStock",
            url: window.location.href,
          },
        }}
      />
      <section className="relative overflow-hidden pt-32 pb-16">
        <div className="absolute inset-0 -z-20">
          <img
            src={product.image}
            alt=""
            aria-hidden
            className="h-full w-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-background/75" />
        </div>
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_10%,rgba(255,138,0,0.18),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(124,58,237,0.22),transparent_35%)]" />
        <div className="container mx-auto px-4">
          <div className="grid gap-10 lg:grid-cols-[1fr_440px] lg:items-start">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <a
                href={category ? categoryPath(category) : "/"}
                className="inline-flex items-center rounded-full glass px-3 py-1 text-xs text-muted-foreground hover:text-foreground"
              >
                {category?.title ?? "Marketplace"}
              </a>
              <h1 className="mt-6 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
                {product.title}
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
                {product.longDescription}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {product.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full glass px-3 py-1 text-xs text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <TrustIndicators />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="glass-strong rounded-3xl p-4 shadow-2xl"
            >
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src={product.image}
                  alt={product.title}
                  className="aspect-[4/3] w-full object-cover"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 rounded-full bg-black/45 px-3 py-1 text-xs font-medium text-white backdrop-blur">
                  {selected?.price ?? product.pricing[0]?.price}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto grid gap-8 px-4 lg:grid-cols-[minmax(0,1fr)_380px]">
          <div className="space-y-8">
            <Panel title="Product Description">
              <p className="leading-relaxed text-muted-foreground">{product.description}</p>
              <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {product.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-start gap-2 rounded-2xl glass p-4 text-sm"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-orange" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </Panel>
            <Panel title="FAQ">
              <div className="space-y-4">
                {product.faq.map((item) => (
                  <div key={item.q} className="rounded-2xl glass p-5">
                    <h3 className="font-semibold">{item.q}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.a}</p>
                  </div>
                ))}
              </div>
            </Panel>
            <Panel title="Reviews">
              <div className="grid gap-4 md:grid-cols-2">
                {(product.reviews.length ? product.reviews : marketplaceReviews.slice(0, 2)).map(
                  (review) => (
                    <div key={review.name + review.product} className="rounded-2xl glass p-5">
                      <div className="mb-3 flex gap-0.5">
                        {[...Array(5)].map((_, index) => (
                          <Star key={index} className="h-4 w-4 fill-orange text-orange" />
                        ))}
                      </div>
                      <p className="text-sm leading-relaxed">{review.text}</p>
                      <p className="mt-4 text-xs text-muted-foreground">
                        {review.name} - {review.product}
                      </p>
                    </div>
                  ),
                )}
              </div>
            </Panel>
          </div>

          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="glass-strong rounded-3xl p-5">
              <h2 className="font-display text-2xl font-semibold">Select Option</h2>
              <div className="mt-4 space-y-2">
                {product.pricing.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => setSelected(option)}
                    className={`w-full rounded-2xl border p-4 text-left transition ${
                      selected?.id === option.id
                        ? "border-orange/60 bg-orange/10"
                        : "border-white/10 bg-white/[0.03] hover:bg-white/[0.06]"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <span className="text-sm font-semibold">{option.label}</span>
                      <span className="shrink-0 text-sm font-bold gradient-text">
                        {option.price}
                      </span>
                    </div>
                    {option.description && (
                      <p className="mt-2 text-xs text-muted-foreground">{option.description}</p>
                    )}
                    {option.priceUsd && (
                      <p className="mt-1 text-xs text-muted-foreground">{option.priceUsd}</p>
                    )}
                  </button>
                ))}
              </div>
              {product.calculator && (
                <div className="mt-5 rounded-2xl glass p-4">
                  <label className="text-xs font-medium text-muted-foreground">
                    {product.calculator.unitLabel}
                  </label>
                  <input
                    type="number"
                    min={0}
                    value={usd}
                    onChange={(event) => setUsd(Number(event.target.value))}
                    className="mt-2 w-full rounded-xl border border-white/10 bg-black/25 px-4 py-3 outline-none focus:border-orange/60"
                  />
                  <div className="mt-4 rounded-xl bg-black/25 p-4">
                    <div className="text-xs text-muted-foreground">Calculated price</div>
                    <div className="mt-1 font-display text-3xl font-bold gradient-text">
                      ৳{calculated.toLocaleString("en-US")}
                    </div>
                    <div className="mt-1 text-xs text-muted-foreground">
                      ${usd || 0} x {product.calculator.rate} BDT
                    </div>
                  </div>
                </div>
              )}
              <div className="mt-5 flex flex-col gap-2">
                <a
                  href={product.purchaseLinks.discord}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl gradient-orange-purple px-5 py-3 font-semibold text-white glow-both"
                >
                  <MessageCircle className="h-4 w-4" /> Buy on Discord
                </a>
                <a
                  href={product.purchaseLinks.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl glass px-5 py-3 font-semibold hover:bg-white/10"
                >
                  <Instagram className="h-4 w-4" /> Message Instagram
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <CommunityCta />
      {related.length > 0 && (
        <MarketplaceSection
          title="Related Products"
          eyebrow="Keep Browsing"
          products={related}
          compact
        />
      )}
    </>
  );
}

function CategoryHero({ category, productCount }: { category: Category; productCount: number }) {
  return (
    <section className="relative overflow-hidden pt-32 pb-20">
      <div className="absolute inset-0 -z-20">
        <img
          src={category.heroImage}
          alt=""
          aria-hidden
          className="h-full w-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-background/75" />
      </div>
      <div className={`absolute inset-0 -z-10 bg-gradient-to-br ${category.gradient} opacity-15`} />
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs text-muted-foreground">
            <ShoppingBag className="h-3.5 w-3.5 text-orange" /> {productCount} products
          </span>
          <h1 className="mt-6 font-display text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            {category.title}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            {category.description}
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {category.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full glass px-3 py-1 text-xs text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function MarketplaceSection({
  title,
  eyebrow,
  products,
  compact = false,
}: {
  title: string;
  eyebrow: string;
  products: Product[];
  compact?: boolean;
}) {
  return (
    <section id="products" className={`relative ${compact ? "py-14" : "py-20"}`}>
      <div className="container mx-auto px-4">
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          description="Curated digital goods with dedicated pages, pricing options and Vaultrix support."
        />
        <ProductGrid products={products} />
      </div>
    </section>
  );
}

function ProductGrid({ products }: { products: Product[] }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product, index) => (
        <ProductCard key={product.id} product={product} index={index} />
      ))}
    </div>
  );
}

function ProductCard({ product, index }: { product: Product; index: number }) {
  const category = getCategory(product.category);
  return (
    <motion.a
      href={productPath(product)}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.035 }}
      whileHover={{ y: -5, rotateX: 1, rotateY: -1 }}
      className="group glass-strong flex min-h-[360px] flex-col overflow-hidden rounded-2xl"
    >
      <div className="relative h-40 overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          loading="lazy"
          className="h-full w-full object-cover opacity-75 transition duration-500 group-hover:scale-105 group-hover:opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
        <span className="absolute left-4 top-4 rounded-full bg-black/45 px-2.5 py-1 text-[10px] uppercase tracking-wide text-white backdrop-blur">
          {category?.title}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-lg font-semibold leading-snug">{product.title}</h3>
        <p className="mt-2 line-clamp-2 flex-1 text-sm text-muted-foreground">
          {product.description}
        </p>
        <div className="mt-4 flex items-end justify-between gap-3">
          <div>
            <div className="text-xs text-muted-foreground">From</div>
            <div className="font-display text-xl font-bold gradient-text">
              {product.pricing[0]?.price}
            </div>
          </div>
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl gradient-orange-purple text-white">
            <ArrowRight className="h-4 w-4" />
          </span>
        </div>
      </div>
    </motion.a>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mx-auto mb-12 max-w-2xl text-center"
    >
      <span className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs font-medium text-muted-foreground">
        <Sparkles className="h-3.5 w-3.5 text-orange" /> {eyebrow}
      </span>
      <h2 className="mt-4 font-display text-4xl font-bold tracking-tight md:text-5xl">{title}</h2>
      <p className="mt-4 text-muted-foreground">{description}</p>
    </motion.div>
  );
}

function TrustIndicators() {
  const items = [
    { Icon: ShieldCheck, label: "Legal sourcing" },
    { Icon: BadgeCheck, label: "Warranty support" },
    { Icon: Zap, label: "Fast delivery" },
  ];
  return (
    <div className="mt-8 flex flex-wrap gap-3">
      {items.map(({ Icon, label }) => (
        <div
          key={label}
          className="inline-flex items-center gap-2 rounded-2xl glass px-4 py-3 text-sm"
        >
          <Icon className="h-4 w-4 text-orange" /> {label}
        </div>
      ))}
    </div>
  );
}

function Panel({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="glass-strong rounded-3xl p-6 md:p-8"
    >
      <h2 className="font-display text-2xl font-semibold">{title}</h2>
      <div className="mt-5">{children}</div>
    </motion.div>
  );
}

function CommunityCta() {
  return (
    <section className="py-14">
      <div className="container mx-auto px-4">
        <div className="glass-strong rounded-3xl p-6 md:p-8">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="font-display text-2xl font-semibold">Need help choosing?</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Open a Discord ticket or message Instagram for current stock, latest pricing and
                order support.
              </p>
            </div>
            <div className="flex flex-col gap-2 sm:flex-row">
              <a
                href={DISCORD_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-2xl gradient-orange-purple px-5 py-3 font-semibold text-white"
              >
                <MessageCircle className="h-4 w-4" /> Discord CTA
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-2xl glass px-5 py-3 font-semibold hover:bg-white/10"
              >
                <ExternalLink className="h-4 w-4" /> Instagram CTA
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Chip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full px-4 py-2 text-xs font-medium transition ${
        active
          ? "gradient-orange-purple text-white glow-both"
          : "glass text-muted-foreground hover:bg-white/10"
      }`}
    >
      {children}
    </button>
  );
}

function NotFound() {
  return (
    <>
      <Seo
        title="Page Not Found - Vaultrix"
        description="The Vaultrix marketplace page could not be found."
      />
      <section className="flex min-h-screen items-center justify-center px-4 pt-24 text-center">
        <div>
          <h1 className="font-display text-5xl font-bold">Page not found</h1>
          <p className="mt-4 text-muted-foreground">This marketplace route does not exist.</p>
          <a
            href="/"
            className="mt-8 inline-flex items-center gap-2 rounded-2xl gradient-orange-purple px-6 py-3 font-semibold text-white"
          >
            Back home <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>
    </>
  );
}

export function SiteFooter() {
  return <Footer />;
}
