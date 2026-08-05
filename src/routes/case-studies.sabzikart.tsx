import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, type Variants } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Leaf,
  Truck,
  Users,
  Heart,
  Search,
  Mic,
  Languages,
  ShoppingBasket,
  MapPin,
  CreditCard,
  PackageCheck,
  Clock,
  Frown,
  Meh,
  Smile,
  Target,
  Compass,
  Hammer,
  Beaker,
  Send,
  Mail,
  ImageIcon,
} from "lucide-react";

const imagePath = (filename: string) => `/images/${filename}`;
const imageAsset = (filename: string) => ({ url: imagePath(filename) });

const userJourneyImg = imagePath("sabzikart-user-journey.png");
const designSystemImg = imagePath("sabzikart-design-system.png");
const researchJourneyAsset = imageAsset("sabzikart-research-journey.png");
const featuresRequiredAsset = imageAsset("sabzikart-features-required.png");
const splashScreen = imageAsset("sabzikart-splash.png");
const welcomeScreen = imageAsset("sabzikart-welcome.png");
const welcomeHeroScreen = imageAsset("sabzikart-welcome-hero.png");
const loginScreen = imageAsset("sabzikart-login.png");
const signupScreen = imageAsset("sabzikart-signup.png");
const homeScreen = imageAsset("sabzikart-home.png");
const homeHeroScreen = imageAsset("sabzikart-home-hero.png");
const struggleSketch = imageAsset("sabzikart-struggle.jpg");
const researchSketch = imageAsset("sabzikart-research-data.png");
const categoriesScreen = imageAsset("sabzikart-categories.png");
const vegetablesScreen = imageAsset("sabzikart-vegetables.png");
const checkoutScreen = imageAsset("sabzikart-checkout.png");
const paymentScreen = imageAsset("sabzikart-payment.png");
const paymentSuccessScreen = imageAsset("sabzikart-payment-success.png");
const trackOrderScreen = imageAsset("sabzikart-track-order.png");
const myOrdersScreen = imageAsset("sabzikart-my-orders.png");
const profileScreen = imageAsset("sabzikart-profile.png");
const voiceScreen = imageAsset("sabzikart-voice.png");
const sabzibotScreen = imageAsset("sabzikart-sabzibot.png");

export const Route = createFileRoute("/case-studies/sabzikart")({
  head: () => ({
    meta: [
      { title: "SabziKart — Farm-to-Consumer UX Case Study | Anusha Chandra" },
      {
        name: "description",
        content:
          "SabziKart connects farmers directly to consumers with fresh, accessible, multilingual grocery delivery. A premium UX case study by Anusha Chandra.",
      },
      { property: "og:title", content: "SabziKart — Farm-to-Consumer UX Case Study" },
      {
        property: "og:description",
        content:
          "Research, personas, journey mapping and UI design for a fresh, sustainable grocery delivery experience.",
      },
    ],
  }),
  component: SabziKartCaseStudy,
});

/* ----------------------------- helpers ----------------------------- */

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/** Placeholder image container — soft, on-brand, with a clear label */
function PlaceholderImage({
  label,
  ratio = "aspect-[4/3]",
  className = "",
  icon: Icon = ImageIcon,
}: {
  label: string;
  ratio?: string;
  className?: string;
  icon?: React.ComponentType<{ className?: string }>;
}) {
  return (
    <div
      className={`${ratio} ${className} relative w-full overflow-hidden rounded-2xl border border-[color:var(--sk-leaf)]/30 bg-gradient-to-br from-[color:var(--sk-mint)]/40 via-white to-[color:var(--sk-sage)]/30`}
    >
      <div className="absolute inset-0 [background-image:radial-gradient(rgba(158,199,131,0.35)_1px,transparent_1px)] [background-size:14px_14px] opacity-50" />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-center px-6">
        <div className="grid place-items-center rounded-full bg-white p-3 shadow-sm">
          <Icon className="size-5 text-[color:var(--sk-deep)]" />
        </div>
        <p className="text-[11px] uppercase tracking-[0.18em] text-[color:var(--sk-deep)]/70">
          Placeholder
        </p>
        <p className="text-sm font-medium text-[color:var(--sk-deep)] max-w-[24ch]">{label}</p>
      </div>
    </div>
  );
}

/** Phone screen — borderless, displayed at natural mobile aspect */
function PhoneMock({ label, src }: { label: string; src?: string }) {
  if (!src) {
    return (
      <div className="relative mx-auto w-full max-w-[420px] aspect-[9/19]">
        <PlaceholderImage label={label} ratio="aspect-auto h-full" />
      </div>
    );
  }
  return (
    <img
      src={src}
      alt={label}
      className="mx-auto block w-full max-w-[520px] h-auto object-contain"
    />
  );
}

/* ------------------------------ data ------------------------------- */

const overviewCards = [
  {
    icon: Target,
    title: "Goal",
    body:
      "Remove middlemen and connect farmers directly with consumers — fair pricing, fresher produce, fewer hands.",
  },
  {
    icon: Hammer,
    title: "Challenge",
    body:
      "Designing for first-time smartphone users and elderly buyers across languages, literacy levels and geographies.",
  },
  {
    icon: Sparkles,
    title: "Impact",
    body:
      "+35% user trust perception, +40% efficiency in the purchase flow, multilingual + voice access across 9 languages.",
  },
  {
    icon: Heart,
    title: "Problem",
    body:
      "Spoilage, long travel, vendor dependency and storage — daily grocery shopping is broken for both farmers and buyers.",
  },
];

const pains = [
  { icon: Clock, title: "No time to visit markets", body: "Working families can’t spare 2–3 hours mid-week." },
  { icon: Users, title: "Dependency on vendors", body: "Quality and pricing controlled by middlemen." },
  { icon: Leaf, title: "Lack of fresh vegetables", body: "Shelves restocked from cold storage, not farms." },
  { icon: Frown, title: "Vegetable spoilage", body: "Almost half wasted before it reaches the plate." },
  { icon: PackageCheck, title: "Storage problems", body: "Small kitchens, no segregation, fast rotting." },
  { icon: CreditCard, title: "Travel expenses", body: "Bus fares and fuel eat into the food budget." },
  { icon: MapPin, title: "No nearby fresh stores", body: "Most fresh markets are 4–8 km away from home." },
];

const processSteps = [
  {
    n: "01",
    label: "Discover",
    icon: Compass,
    items: ["Secondary research", "Market scan", "Trend mapping"],
  },
  {
    n: "02",
    label: "Define",
    icon: Target,
    items: ["Primary research", "Interviews", "Field visits"],
  },
  {
    n: "03",
    label: "Build",
    icon: Hammer,
    items: ["Personas", "Journey mapping", "Feature identification"],
  },
  {
    n: "04",
    label: "Develop",
    icon: Beaker,
    items: ["Wireframes", "Iterations", "Prototype evaluation"],
  },
  {
    n: "05",
    label: "Deliver",
    icon: Send,
    items: ["Final UI", "Design system", "Handoff"],
  },
];

const insights = [
  { tag: "Behavior", text: "Users want quick, fresh delivery — same day, ideally same hour." },
  { tag: "Supply", text: "Farmers need a direct line to consumers without middlemen taking 40%." },
  { tag: "Accessibility", text: "Elderly users struggle carrying vegetables back from the market." },
  { tag: "Language", text: "Regional language access dramatically improves adoption in tier-2 cities." },
  { tag: "Trust", text: "Freshness, sourcing transparency and packaging build long-term trust." },
];

const personas = [
  {
    name: "Annanya Baruwa",
    role: "Housewife · Kolkata",
    bio:
      "Loves cooking for her family. Visits the market once a week — 6–7 km away — and needs help carrying bags back home.",
    traits: ["Quiet", "Passionate", "Detail-oriented"],
    goals: ["Cook fresh meals daily", "Avoid dependence on family for trips", "Buy seasonal produce"],
    frustrations: ["Travels 6–7 km", "Heavy bags", "Freshness concerns"],
  },
  {
    name: "Aarti Roy",
    role: "Student · Hyderabad",
    bio:
      "Walks 1–2 km daily to the local market, prefers buying small quantities of green vegetables and fruits over storing.",
    traits: ["Enthusiastic", "Energetic", "Conscious buyer"],
    goals: ["Eat fresh, never frozen", "Quick daily ordering", "Fair pricing for farmers"],
    frustrations: ["Long walks alone", "Difficulty carrying bags", "Limited variety"],
  },
  {
    name: "Maruthi M",
    role: "Retired Bank Manager · Karimnagar",
    bio:
      "Goes to the market every morning by bike. Loves cooking experiments and wants organic, locally sourced produce.",
    traits: ["Enthusiastic", "Positive", "Curious"],
    goals: ["Try new recipes", "Eat organic", "Stay active without exhausting trips"],
    frustrations: ["Daily 3–4 km trips", "Carrying bags on a bike", "Inconsistent availability"],
  },
];

const journey = [
  { stage: "Making a list", emotion: "neutral", pain: "Forgets items", op: "Smart recurring lists" },
  { stage: "Allocating time", emotion: "sad", pain: "Loses 2–3 hours", op: "1-hour delivery slots" },
  { stage: "Travelling", emotion: "sad", pain: "Fuel + traffic", op: "Doorstep delivery" },
  { stage: "Searching products", emotion: "neutral", pain: "Walks between stalls", op: "Search + voice" },
  { stage: "Carrying bags", emotion: "sad", pain: "Physically hard", op: "We carry it for them" },
  { stage: "Storage & segregation", emotion: "neutral", pain: "Mixed bags spoil fast", op: "Pre-segregated packaging" },
];

const solutions = [
  { icon: Leaf, t: "Direct farmer connection", d: "Cut middlemen, fair pricing on both ends." },
  { icon: Truck, t: "Delivery tracking", d: "Live ETA, driver contact, smooth handoff." },
  { icon: PackageCheck, t: "Better packaging", d: "Segregated, breathable, biodegradable wraps." },
  { icon: Search, t: "Freshness visibility", d: "Harvest date and farm origin on every item." },
  { icon: Sparkles, t: "Organic produce", d: "Verified organic tag with farm story." },
  { icon: Users, t: "Farming communities", d: "Groups, talks and crop calendars for farmers." },
  { icon: Mic, t: "Voice support", d: "Search and navigate in your own voice." },
  { icon: Languages, t: "Multi-language", d: "Available across 9 Indian languages." },
  { icon: Compass, t: "E-learning", d: "Books and videos on modern, organic farming." },
  { icon: ShoppingBasket, t: "Harvest day sales", d: "Same-day deals on freshly harvested crops." },
];

const accessibilitySnippets = [
  { q: "How do I use it?", a: "Voice-guided onboarding walks new users through every step." },
  { q: "Can I use it in my own language?", a: "Yes — 9 Indian languages with full UI + voice support." },
  { q: "I am not educated.", a: "Iconography, large tap targets, voice search and audio prompts." },
];

const finalUI = [
  { label: "Onboarding", icon: Sparkles, src: welcomeScreen.url },
  { label: "Sign In / Register", icon: Users, src: loginScreen.url },
  { label: "Shopping", icon: ShoppingBasket, src: homeScreen.url },
  { label: "Cart", icon: ShoppingBasket, src: categoriesScreen.url },
  { label: "Payment", icon: CreditCard, src: paymentScreen.url },
  { label: "Delivery Tracking", icon: Truck, src: trackOrderScreen.url },
  { label: "Checkout", icon: PackageCheck, src: checkoutScreen.url },
];

const impactStats = [
  { v: "+35%", l: "User trust perception" },
  { v: "+40%", l: "Purchase flow efficiency" },
  { v: "9", l: "Languages supported" },
  { v: "−60%", l: "Cognitive load" },
];

/* ----------------------------- component ----------------------------- */

function SabziKartCaseStudy() {
  return (
    <div
      className="min-h-screen text-[color:var(--sk-deep)] font-[Open_Sans,Inter,sans-serif]"
      style={
        {
          // SabziKart palette — scoped to this page only
          ["--sk-mint" as string]: "#c8e1b6",
          ["--sk-leaf" as string]: "#9ec783",
          ["--sk-sage" as string]: "#a5aaa1",
          ["--sk-deep" as string]: "#2f4a26",
          ["--sk-cream" as string]: "#fbfaf3",
          backgroundColor: "#ffffff",
          backgroundImage: "none",
        } as React.CSSProperties
      }
    >
      {/* Top nav */}
      <header className="sticky top-0 z-40 bg-white border-b border-[color:var(--sk-leaf)]/30">
        <div className="mx-auto max-w-6xl px-6 h-14 flex items-center justify-between">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-[color:var(--sk-deep)] hover:opacity-80"
          >
            <ArrowLeft className="size-4" /> Back to portfolio
          </Link>
          <div className="text-xs uppercase tracking-[0.22em] text-[color:var(--sk-deep)]/70">
            Case Study · SabziKart
          </div>
        </div>
      </header>

      {/* 1 — HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 pt-16 md:pt-24 pb-16 grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-5">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full bg-[color:var(--sk-leaf)]/15 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-[color:var(--sk-deep)]">
                <Leaf className="size-3" /> AgriTech · E-commerce
              </div>
              <h1 className="mt-5 font-[Open_Sans] text-5xl md:text-7xl font-extrabold leading-[1.02] tracking-tight text-neutral-900">
                SabziKart
              </h1>
              <p className="mt-5 text-lg md:text-xl text-[color:var(--sk-deep)]/80 max-w-2xl leading-relaxed">
                Connecting farmers directly to consumers through fresh & sustainable grocery delivery.
              </p>

              <dl className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl">
                <div>
                  <dt className="text-[11px] uppercase tracking-widest text-[color:var(--sk-deep)]/60">Role</dt>
                  <dd className="mt-1 font-semibold">UI/UX Designer</dd>
                </div>
                <div>
                  <dt className="text-[11px] uppercase tracking-widest text-[color:var(--sk-deep)]/60">Duration</dt>
                  <dd className="mt-1 font-semibold">4 weeks</dd>
                </div>
                <div>
                  <dt className="text-[11px] uppercase tracking-widest text-[color:var(--sk-deep)]/60">Tools</dt>
                  <dd className="mt-1 font-semibold">Figma · Illustrator</dd>
                </div>
                <div>
                  <dt className="text-[11px] uppercase tracking-widest text-[color:var(--sk-deep)]/60">Platform</dt>
                  <dd className="mt-1 font-semibold">iOS · Android</dd>
                </div>
              </dl>

              <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://www.figma.com/proto/wYThvQaz9U8XoCtQ9MNoYY/SabziKart---Mobile-App-Design-System?node-id=17-680&p=f&viewport=40%2C97%2C0.12&t=LUqc3ap6mbj623t0-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=17%3A680&page-id=6%3A2"
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => { e.preventDefault(); window.open(e.currentTarget.href, "_blank", "noopener,noreferrer"); }}
                className="inline-flex items-center gap-2 rounded-full bg-[color:var(--sk-deep)] text-white px-5 py-2.5 text-sm font-medium hover:opacity-95 transition shadow-[0_15px_30px_-15px_rgba(47,74,38,0.55)]"
              >
                View Prototype <ArrowUpRight className="size-4" />
              </a>
                <a
                  href="#overview"
                  className="inline-flex items-center gap-2 rounded-full border border-[color:var(--sk-deep)]/30 bg-white px-5 py-2.5 text-sm font-medium hover:bg-white transition"
                >
                  Read Case Study
                </a>
              </div>
            </Reveal>
          </div>

          <div className="md:col-span-7">
            <Reveal delay={0.15}>
              <div className="relative">
                <div className="relative grid grid-cols-2 gap-6 md:gap-8 items-start">
                  <PhoneMock label="SabziKart Onboarding" src={welcomeHeroScreen.url} />
                  <div className="mt-8 md:mt-10">
                    <PhoneMock label="Shopping screen" src={homeHeroScreen.url} />
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 2 — PROJECT OVERVIEW */}
      <section id="overview" className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.22em] text-[color:var(--sk-deep)]/70">01 — Project Overview</div>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight text-neutral-900 max-w-3xl">
              A farm-to-home marketplace built around <span className="text-[color:var(--sk-deep)]/70 italic">trust</span>.
            </h2>
            <p className="mt-5 text-base md:text-lg text-[color:var(--sk-deep)]/75 max-w-3xl leading-relaxed">
              SabziKart was created to remove middlemen and connect farmers directly with consumers,
              while delivering fresh vegetables to homes efficiently — better prices for farmers,
              fresher produce for families.
            </p>
          </Reveal>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {overviewCards.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.06}>
                <div className="h-full rounded-3xl bg-white border border-[color:var(--sk-leaf)]/30 p-6 hover:-translate-y-1 hover:shadow-[0_25px_50px_-25px_rgba(60,90,40,0.35)] transition">
                  <div className="grid place-items-center size-11 rounded-2xl bg-[color:var(--sk-leaf)]/15 text-[color:var(--sk-deep)]">
                    <c.icon className="size-5" />
                  </div>
                  <h3 className="mt-4 font-semibold text-lg">{c.title}</h3>
                  <p className="mt-2 text-sm text-[color:var(--sk-deep)]/75 leading-relaxed">{c.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3 — PROBLEM STATEMENT */}
      <section className="py-20 md:py-28 bg-white">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.22em] text-[color:var(--sk-deep)]/70">02 — Problem Statement</div>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight text-neutral-900 max-w-3xl">
              Buying vegetables today is exhausting — for everyone.
            </h2>
            <p className="mt-5 max-w-3xl text-[color:var(--sk-deep)]/75 leading-relaxed">
              Across interviews and field visits, the same friction kept surfacing: time, distance, freshness and waste.
              Farmers receive a fraction of what consumers pay, while households spend hours and rupees just to get to a market.
            </p>
          </Reveal>

          <div className="mt-12 grid md:grid-cols-12 gap-6">
            <div className="md:col-span-5">
              <Reveal>
                <div className="overflow-hidden rounded-3xl border border-[color:var(--sk-leaf)]/30 bg-white aspect-[4/5]">
                  <img
                    src={struggleSketch.url}
                    alt="Sketch of a tired shopper carrying heavy vegetable bags home from the market"
                    className="w-full h-full object-cover"
                  />
                </div>
              </Reveal>
            </div>
            <div className="md:col-span-7">
              <div className="grid sm:grid-cols-2 gap-4">
                {pains.map((p, i) => (
                  <Reveal key={p.title} delay={i * 0.04}>
                    <div className="h-full rounded-2xl bg-white border border-[color:var(--sk-sage)]/40 p-5">
                      <div className="flex items-center gap-3">
                        <div className="grid place-items-center size-9 rounded-xl bg-[color:var(--sk-leaf)]/15 text-[color:var(--sk-deep)]">
                          <p.icon className="size-4" />
                        </div>
                        <h3 className="font-semibold">{p.title}</h3>
                      </div>
                      <p className="mt-2 text-sm text-[color:var(--sk-deep)]/75 leading-relaxed">{p.body}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 — UX DESIGN PROCESS */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.22em] text-[color:var(--sk-deep)]/70">03 — UX Process</div>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight text-neutral-900">A five-step path from empathy to ship.</h2>
          </Reveal>

          <div className="relative mt-14">
            <div className="hidden lg:block absolute top-12 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[color:var(--sk-leaf)] to-transparent" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
              {processSteps.map((s, i) => (
                <Reveal key={s.n} delay={i * 0.08}>
                  <div className="relative rounded-3xl bg-white border border-[color:var(--sk-leaf)]/30 p-6 h-full">
                    <div className="flex items-center justify-between">
                      <div className="grid place-items-center size-12 rounded-2xl bg-[color:var(--sk-deep)] text-white">
                        <s.icon className="size-5" />
                      </div>
                      <span className="text-xs font-mono text-[color:var(--sk-deep)]/50">{s.n}</span>
                    </div>
                    <h3 className="mt-4 font-semibold text-lg">{s.label}</h3>
                    <ul className="mt-3 space-y-1.5 text-sm text-[color:var(--sk-deep)]/75">
                      {s.items.map((it) => (
                        <li key={it} className="flex items-start gap-2">
                          <span className="mt-1.5 size-1.5 rounded-full bg-[color:var(--sk-leaf)]" />
                          {it}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5 — RESEARCH & INSIGHTS */}
      <section className="py-20 md:py-28 bg-white">

        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.22em] text-[color:var(--sk-deep)]/70">04 — Research & Insights</div>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight text-neutral-900 max-w-3xl">
              What people told us, and what the data confirmed.
            </h2>
          </Reveal>

          {/* Bento grid */}
          <div className="mt-14 grid grid-cols-1 md:grid-cols-6 gap-5">
            <Reveal className="md:col-span-4">
              <div className="rounded-3xl bg-white border border-[color:var(--sk-leaf)]/30 p-6 h-full">
                <h3 className="font-semibold text-lg">Behavioural snapshot</h3>
                <p className="text-sm text-[color:var(--sk-deep)]/70 mt-1">
                  Synthesised from 14 interviews and 6 field visits across Hyderabad, Kolkata & Karimnagar.
                </p>
                <div className="mt-5 aspect-[4/3] relative w-full overflow-hidden rounded-2xl border border-[color:var(--sk-leaf)]/30 bg-white">
                  <img
                    src={researchSketch.url}
                    alt="Research data: state-wise farmer suicides in India and 2021 farming sector breakdown"
                    className="absolute inset-0 w-full h-full object-contain bg-white p-2"
                  />
                </div>
              </div>
            </Reveal>

            <Reveal className="md:col-span-2" delay={0.1}>
              <div className="grid grid-rows-2 gap-5 h-full">
                <div className="rounded-3xl bg-white border border-[color:var(--sk-leaf)]/40 p-6">
                  <div className="text-5xl font-extrabold text-[color:var(--sk-deep)]">62%</div>
                  <p className="mt-2 text-sm text-[color:var(--sk-deep)]/80">Buyers cite freshness as the #1 reason to switch.</p>
                </div>
                <div className="rounded-3xl bg-white border border-[color:var(--sk-leaf)]/40 p-6">
                  <div className="text-5xl font-extrabold text-[color:var(--sk-deep)]">9</div>
                  <p className="mt-2 text-sm text-[color:var(--sk-deep)]/80">Languages required for nationwide reach.</p>
                </div>
              </div>
            </Reveal>

            {insights.map((it, i) => (
              <Reveal key={it.text} className="md:col-span-2" delay={i * 0.05}>
                <div className="h-full rounded-3xl bg-white border border-[color:var(--sk-leaf)]/40 p-5 -rotate-[0.6deg] hover:rotate-0 transition shadow-[0_15px_30px_-20px_rgba(60,90,40,0.45)]">
                  <div className="text-[10px] uppercase tracking-[0.22em] text-[color:var(--sk-deep)]/70">
                    {it.tag}
                  </div>
                  <p className="mt-2 text-sm text-[color:var(--sk-deep)] font-medium leading-relaxed">{it.text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Research & exploration journey illustration */}
          <Reveal className="mt-10">
            <div className="rounded-3xl bg-white border border-[color:var(--sk-leaf)]/30 p-4 md:p-6">
              <div className="text-[11px] uppercase tracking-[0.22em] text-[color:var(--sk-deep)]/70">Exploration journey</div>
              <p className="mt-1 text-sm text-[color:var(--sk-deep)]/80 max-w-2xl">
                Field sketches capturing user voices, language barriers and the need for voice-first interactions.
              </p>
              <div className="mt-5 relative overflow-hidden rounded-2xl border border-[color:var(--sk-leaf)]/30 bg-white">
                <img
                  src={researchJourneyAsset.url}
                  alt="Research and exploration journey sketches with user quotes about language, voice search and smartphone use"
                  className="w-full h-auto block"
                />
                {/* Numbered step badges */}
                {[
                  { n: 1, x: 18, y: 30 },
                  { n: 2, x: 50, y: 30 },
                  { n: 3, x: 82, y: 30 },
                  { n: 4, x: 12, y: 78 },
                  { n: 5, x: 32, y: 68 },
                  { n: 6, x: 58, y: 82 },
                  { n: 7, x: 86, y: 82 },
                ].map((s) => (
                  <div
                    key={s.n}
                    className="absolute -translate-x-1/2 -translate-y-1/2 flex items-center justify-center rounded-full bg-[color:var(--sk-deep)] text-white text-[10px] md:text-xs font-semibold shadow-md ring-2 ring-white"
                    style={{ left: `${s.x}%`, top: `${s.y}%`, width: 24, height: 24 }}
                  >
                    {s.n}
                  </div>
                ))}
              </div>
              <p className="mt-3 text-xs text-[color:var(--sk-deep)]/70">
                Follow the steps 1 → 7 to see how concerns evolve from “How do I use it?” to “Can I use it in my own language?”
              </p>
            </div>
          </Reveal>

          {/* Identifying the features required */}
          <Reveal className="mt-10">
            <div className="rounded-3xl bg-white border border-[color:var(--sk-leaf)]/30 p-4 md:p-6">
              <div className="text-[11px] uppercase tracking-[0.22em] text-[color:var(--sk-deep)]/70">Identifying the features required</div>
              <p className="mt-1 text-sm text-[color:var(--sk-deep)]/80 max-w-2xl">
                With the ideal customer journey mapped out, we identified the core features required to deliver it.
              </p>
              <div className="mt-5 overflow-hidden rounded-2xl border border-[color:var(--sk-leaf)]/30 bg-white">
                <img
                  src={featuresRequiredAsset.url}
                  alt="Sketched feature breakdown: payment options, supportive delivery boy, packaging, delivery tracking system and delivery"
                  className="w-full h-auto block"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 6 — USER PERSONAS */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.22em] text-[color:var(--sk-deep)]/70">05 — Personas</div>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight text-neutral-900">Three people. One shared frustration.</h2>
          </Reveal>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {personas.map((p, i) => (
              <Reveal key={p.name} delay={i * 0.08}>
                <div className="h-full rounded-3xl bg-white border border-[color:var(--sk-leaf)]/30 overflow-hidden hover:-translate-y-1 transition">
                  <div className="relative h-40 bg-[color:var(--sk-cream)] border-b border-[color:var(--sk-leaf)]/30">
                    <div className="absolute -bottom-8 left-6">
                      <div className="size-20 rounded-full ring-4 ring-white bg-[color:var(--sk-cream)] grid place-items-center text-[color:var(--sk-deep)] font-bold text-2xl">
                        {p.name.charAt(0)}
                      </div>
                    </div>
                  </div>
                  <div className="pt-12 p-6">
                    <h3 className="font-semibold text-lg">{p.name}</h3>
                    <p className="text-xs uppercase tracking-widest text-[color:var(--sk-deep)]/60 mt-1">{p.role}</p>
                    <p className="mt-3 text-sm text-[color:var(--sk-deep)]/75 leading-relaxed">{p.bio}</p>

                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {p.traits.map((t) => (
                        <span
                          key={t}
                          className="text-[11px] rounded-full bg-white px-2.5 py-0.5 text-[color:var(--sk-deep)]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="mt-5 grid gap-3">
                      <div>
                        <div className="text-[11px] uppercase tracking-widest text-[color:var(--sk-deep)]/60">Goals</div>
                        <ul className="mt-1 text-sm space-y-1">
                          {p.goals.map((g) => (
                            <li key={g} className="flex items-start gap-2">
                              <span className="mt-1.5 size-1.5 rounded-full bg-[color:var(--sk-leaf)]" />
                              {g}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <div className="text-[11px] uppercase tracking-widest text-[color:var(--sk-deep)]/60">Frustrations</div>
                        <ul className="mt-1 text-sm space-y-1">
                          {p.frustrations.map((g) => (
                            <li key={g} className="flex items-start gap-2">
                              <span className="mt-1.5 size-1.5 rounded-full bg-[color:var(--sk-sage)]" />
                              {g}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 7 — CUSTOMER JOURNEY MAP */}
      <section className="py-20 md:py-28 bg-white">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.22em] text-[color:var(--sk-deep)]/70">06 — Journey Map</div>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight text-neutral-900 max-w-3xl">
              From a Sunday list to a stocked kitchen — mapped end to end.
            </h2>
          </Reveal>

          <Reveal delay={0.05}>
            <figure className="mt-12 rounded-3xl bg-white border border-[color:var(--sk-leaf)]/30 p-4 md:p-6 shadow-[0_25px_50px_-30px_rgba(60,90,40,0.4)]">
              <img
                src={userJourneyImg}
                alt="SabziKart hand-drawn user journey — making a list, allocating time, travelling, carrying heavy bags, searching & purchase, travelling, segregation of vegetables, storage"
                className="w-full h-auto rounded-2xl"
              />
              <figcaption className="mt-3 text-center text-xs uppercase tracking-[0.22em] text-[color:var(--sk-deep)]/60">
                Hand-drawn user journey · field research artifact
              </figcaption>
            </figure>
          </Reveal>


          <div className="mt-12 overflow-x-auto">
            <div className="min-w-[760px] grid grid-cols-6 gap-4">
              {journey.map((j, i) => {
                const Emo = j.emotion === "sad" ? Frown : j.emotion === "neutral" ? Meh : Smile;
                return (
                  <Reveal key={j.stage} delay={i * 0.05}>
                    <div className="rounded-2xl bg-white border border-[color:var(--sk-leaf)]/30 p-4 h-full flex flex-col">
                      <div className="text-[10px] font-mono text-[color:var(--sk-deep)]/50">STAGE 0{i + 1}</div>
                      <h3 className="mt-1 font-semibold text-sm">{j.stage}</h3>
                      <div className="mt-3 grid place-items-center rounded-xl bg-white py-3">
                        <Emo
                          className={`size-6 ${
                            j.emotion === "sad"
                              ? "text-red-500/80"
                              : j.emotion === "neutral"
                              ? "text-amber-600/80"
                              : "text-emerald-600"
                          }`}
                        />
                      </div>
                      <div className="mt-3 text-[11px] uppercase tracking-widest text-[color:var(--sk-deep)]/60">Pain</div>
                      <p className="text-xs leading-relaxed">{j.pain}</p>
                      <div className="mt-3 text-[11px] uppercase tracking-widest text-[color:var(--sk-deep)]/60">Opportunity</div>
                      <p className="text-xs leading-relaxed text-[color:var(--sk-deep)] font-medium">{j.op}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 8 — OPPORTUNITIES & SOLUTIONS */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.22em] text-[color:var(--sk-deep)]/70">07 — Solutions</div>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight text-neutral-900 max-w-3xl">
              Ten features that turn pain points into product.
            </h2>
          </Reveal>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {solutions.map((s, i) => (
              <Reveal key={s.t} delay={i * 0.04}>
                <div className="h-full rounded-2xl bg-white border border-[color:var(--sk-leaf)]/30 p-5 hover:-translate-y-1 hover:shadow-[0_20px_40px_-25px_rgba(60,90,40,0.45)] transition">
                  <div
                    className={`grid place-items-center size-10 rounded-xl ${
                      i % 2 === 0 ? "bg-white border border-[color:var(--sk-leaf)]/30" : "bg-[color:var(--sk-cream)] border border-[color:var(--sk-leaf)]/20"
                    } text-[color:var(--sk-deep)]`}
                  >
                    <s.icon className="size-5" />
                  </div>
                  <h3 className="mt-3 font-semibold text-sm">{s.t}</h3>
                  <p className="mt-1 text-xs text-[color:var(--sk-deep)]/75 leading-relaxed">{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 9 — ACCESSIBILITY */}
      <section className="py-20 md:py-28 bg-white">
        <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-5">
            <Reveal>
              <div className="text-xs uppercase tracking-[0.22em] text-[color:var(--sk-deep)]/70">08 — Accessibility</div>
              <h2 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight text-neutral-900">
                Designed for every hand and every voice.
              </h2>
              <p className="mt-5 text-[color:var(--sk-deep)]/75 leading-relaxed">
                Voice search, 9 Indian languages, large tap targets and an audio-guided onboarding bring the
                app to first-time smartphone users, elderly buyers and non-literate shoppers alike.
              </p>

              <ul className="mt-6 grid grid-cols-2 gap-3 text-sm">
                {["Voice search", "Multiple languages", "Simple navigation", "Elderly-friendly", "Minimal interface", "Audio prompts"].map(
                  (f) => (
                    <li key={f} className="flex items-center gap-2 rounded-full bg-white px-3 py-1.5 border border-[color:var(--sk-leaf)]/30">
                      <span className="size-1.5 rounded-full bg-[color:var(--sk-leaf)]" /> {f}
                    </li>
                  ),
                )}
              </ul>
            </Reveal>
          </div>

          <div className="md:col-span-7">
            <div className="space-y-3">
              {accessibilitySnippets.map((c, i) => (
                <Reveal key={c.q} delay={i * 0.08}>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="rounded-2xl bg-white border border-[color:var(--sk-sage)]/40 p-4 md:mr-12">
                      <div className="text-[11px] uppercase tracking-widest text-[color:var(--sk-deep)]/60">User</div>
                      <p className="mt-1 font-medium">“{c.q}”</p>
                    </div>
                    <div className="rounded-2xl bg-[color:var(--sk-mint)]/30 border border-[color:var(--sk-leaf)]/40 text-neutral-800 p-4 md:ml-12">
                      <div className="text-[11px] uppercase tracking-widest text-neutral-500">SabziKart</div>
                      <p className="mt-1 text-sm">{c.a}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 10 — WIREFRAMES */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.22em] text-[color:var(--sk-deep)]/70">09 — Wireframes</div>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight text-neutral-900 max-w-3xl">
              From grid-paper sketches to a polished interface.
            </h2>
          </Reveal>

          <div className="mt-12">
            <div className="rounded-3xl border border-[color:var(--sk-leaf)]/30 bg-white p-6">
              <div className="text-[11px] uppercase tracking-widest text-[color:var(--sk-deep)]/60">High fidelity</div>
              <h3 className="mt-1 font-semibold text-lg">Screen flow — in sequence</h3>
              <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                {[
                  { src: splashScreen.url, label: "1. Splash" },
                  { src: welcomeScreen.url, label: "2. Welcome" },
                  { src: loginScreen.url, label: "3. Login" },
                  { src: signupScreen.url, label: "4. Sign up" },
                  { src: homeScreen.url, label: "5. Home" },
                  { src: categoriesScreen.url, label: "6. Categories" },
                  { src: vegetablesScreen.url, label: "7. Vegetables" },
                  { src: checkoutScreen.url, label: "8. Checkout" },
                  { src: paymentScreen.url, label: "9. Payment" },
                  { src: paymentSuccessScreen.url, label: "10. Success" },
                  { src: myOrdersScreen.url, label: "11. Orders" },
                  { src: profileScreen.url, label: "12. Profile" },
                  { src: sabzibotScreen.url, label: "13. SabziBot" },
                  { src: voiceScreen.url, label: "14. Voice" },
                  { src: trackOrderScreen.url, label: "15. Track Order" },
                ].map((s, i) => (
                  <div key={i} className="flex flex-col">
                    <div className="aspect-[9/19] w-full rounded-xl overflow-hidden border border-[color:var(--sk-sage)]/40 bg-[color:var(--sk-cream)]">
                      <img
                        src={s.src}
                        alt={`SabziKart ${s.label} screen`}
                        className="block w-full h-full object-cover"
                      />
                    </div>
                    <p className="mt-2 text-[10px] md:text-xs text-center text-[color:var(--sk-deep)]/70">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 11 — FINAL UI SHOWCASE */}
      <section id="prototype" className="py-20 md:py-28 bg-white">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.22em] text-[color:var(--sk-deep)]/70">10 — Final UI</div>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight text-neutral-900 max-w-3xl">
              The shipped experience, screen by screen.
            </h2>
          </Reveal>


          <Reveal delay={0.08}>
            <a
              href="https://www.figma.com/proto/wYThvQaz9U8XoCtQ9MNoYY/SabziKart---Mobile-App-Design-System?node-id=17-680&p=f&viewport=40%2C97%2C0.12&t=LUqc3ap6mbj623t0-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=17%3A680&page-id=6%3A2"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => { e.preventDefault(); window.open(e.currentTarget.href, "_blank", "noopener,noreferrer"); }}
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-[color:var(--sk-deep)] text-white px-5 py-2.5 text-sm font-medium hover:opacity-95 transition shadow-[0_15px_30px_-15px_rgba(47,74,38,0.55)]"
            >
              View Interactive Prototype <ArrowUpRight className="size-4" />
            </a>
          </Reveal>

          <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4">
            {finalUI.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.04}>
                <div className="group">
                  <div className="relative transition duration-500 group-hover:-translate-y-2">
                    <PhoneMock label={s.label} src={s.src} />
                  </div>
                  <div className="mt-3 flex items-center justify-center gap-1.5 text-xs text-[color:var(--sk-deep)]/75">
                    <s.icon className="size-3.5" /> {s.label}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 12 — DESIGN SYSTEM */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.22em] text-[color:var(--sk-deep)]/70">11 — Design System</div>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight text-neutral-900">A small, opinionated system.</h2>
          </Reveal>

          <Reveal delay={0.05}>
            <figure className="mt-12 rounded-3xl bg-white border border-[color:var(--sk-leaf)]/30 p-4 md:p-6 shadow-[0_25px_50px_-30px_rgba(60,90,40,0.4)]">
              <img
                src={designSystemImg}
                alt="SabziKart design system — process, typography (Open Sans) and color palette"
                className="w-full h-auto rounded-2xl"
              />
              <figcaption className="mt-3 text-center text-xs uppercase tracking-[0.22em] text-[color:var(--sk-deep)]/60">
                Design system overview · process, type & color
              </figcaption>
            </figure>
          </Reveal>


          <div className="mt-12 grid md:grid-cols-12 gap-6">
            {/* Typography */}
            <Reveal className="md:col-span-5">
              <div className="rounded-3xl bg-white border border-[color:var(--sk-leaf)]/30 p-6 h-full">
                <div className="text-[11px] uppercase tracking-widest text-[color:var(--sk-deep)]/60">Typography</div>
                <div className="mt-4 space-y-3">
                  <div className="text-5xl font-extrabold tracking-tight">Open Sans</div>
                  <div className="text-2xl font-semibold">The freshest food, delivered.</div>
                  <div className="text-sm text-[color:var(--sk-deep)]/75 leading-relaxed">
                    Body — 14/22, neutral weight. Used across cards, lists and forms for readability across literacy
                    levels and screen sizes.
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Colors */}
            <Reveal className="md:col-span-4" delay={0.05}>
              <div className="rounded-3xl bg-white border border-[color:var(--sk-leaf)]/30 p-6 h-full">
                <div className="text-[11px] uppercase tracking-widest text-[color:var(--sk-deep)]/60">Palette</div>
                <div className="mt-4 grid grid-cols-3 gap-3">
                  {[
                    { c: "#c8e1b6", n: "Mint" },
                    { c: "#9ec783", n: "Leaf" },
                    { c: "#a5aaa1", n: "Sage" },
                  ].map((s) => (
                    <div key={s.c} className="text-center">
                      <div
                        className="aspect-square rounded-2xl border border-[color:var(--sk-deep)]/10"
                        style={{ backgroundColor: s.c }}
                      />
                      <div className="mt-2 text-xs font-medium">{s.n}</div>
                      <div className="text-[10px] font-mono text-[color:var(--sk-deep)]/60">{s.c}</div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Components */}
            <Reveal className="md:col-span-3" delay={0.1}>
              <div className="rounded-3xl bg-white border border-[color:var(--sk-leaf)]/30 p-6 h-full">
                <div className="text-[11px] uppercase tracking-widest text-[color:var(--sk-deep)]/60">Buttons</div>
                <div className="mt-4 space-y-2.5">
                  <button className="w-full rounded-full bg-[color:var(--sk-deep)] text-white py-2.5 text-sm font-medium">
                    Primary
                  </button>
                  <button className="w-full rounded-full bg-[color:var(--sk-leaf)] text-[color:var(--sk-deep)] py-2.5 text-sm font-medium">
                    Secondary
                  </button>
                  <button className="w-full rounded-full border border-[color:var(--sk-deep)]/30 py-2.5 text-sm font-medium">
                    Ghost
                  </button>
                </div>
              </div>
            </Reveal>

            {/* Inputs + Cards + Iconography */}
            <Reveal className="md:col-span-7" delay={0.05}>
              <div className="rounded-3xl bg-white border border-[color:var(--sk-leaf)]/30 p-6 h-full">
                <div className="text-[11px] uppercase tracking-widest text-[color:var(--sk-deep)]/60">Inputs & cards</div>
                <div className="mt-4 grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs text-[color:var(--sk-deep)]/70">Search produce</label>
                    <div className="flex items-center gap-2 rounded-xl border border-[color:var(--sk-sage)]/50 bg-white px-3 py-2.5">
                      <Search className="size-4 text-[color:var(--sk-deep)]/60" />
                      <span className="text-sm text-[color:var(--sk-deep)]/60">Tomatoes, spinach…</span>
                    </div>
                  </div>
                  <div className="rounded-xl bg-white border border-[color:var(--sk-leaf)]/30 p-3 flex items-center gap-3">
                    <div className="size-12 rounded-lg bg-white grid place-items-center">
                      <Leaf className="size-5 text-[color:var(--sk-deep)]" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold">Organic Spinach</div>
                      <div className="text-xs text-[color:var(--sk-deep)]/70">₹40 · 250g · 2 hr fresh</div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal className="md:col-span-5" delay={0.1}>
              <div className="rounded-3xl bg-white border border-[color:var(--sk-leaf)]/30 p-6 h-full">
                <div className="text-[11px] uppercase tracking-widest text-[color:var(--sk-deep)]/60">Iconography</div>
                <div className="mt-4 grid grid-cols-5 gap-3">
                  {[Leaf, Truck, ShoppingBasket, CreditCard, MapPin, Mic, Languages, Search, PackageCheck, Users].map(
                    (Ic, i) => (
                      <div
                        key={i}
                        className="aspect-square grid place-items-center rounded-xl bg-white text-[color:var(--sk-deep)]"
                      >
                        <Ic className="size-5" />
                      </div>
                    ),
                  )}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 13 — IMPACT */}
      <section className="py-20 md:py-28 bg-white">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.22em] text-[color:var(--sk-deep)]/70">12 — Impact & Takeaways</div>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight text-neutral-900 max-w-3xl">
              What shipped — and what I learned along the way.
            </h2>
          </Reveal>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {impactStats.map((s, i) => (
              <Reveal key={s.l} delay={i * 0.06}>
                <div className="rounded-3xl bg-[color:var(--sk-mint)]/30 border border-[color:var(--sk-leaf)]/40 text-neutral-800 p-6 h-full">
                  <div className="text-5xl font-extrabold tracking-tight text-[color:var(--sk-deep)]">{s.v}</div>
                  <p className="mt-2 text-sm text-neutral-600">{s.l}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-10 grid md:grid-cols-3 gap-5">
            {[
              { t: "Human-centered design", b: "Real interviews changed my mental model more than any persona template ever did." },
              { t: "Accessibility first", b: "Voice and language aren’t features — they’re the difference between adoption and abandonment." },
              { t: "Designing for trust", b: "Showing farm origin and harvest dates moved freshness from a claim to a signal." },
            ].map((c, i) => (
              <Reveal key={c.t} delay={i * 0.06}>
                <div className="rounded-3xl bg-white border border-[color:var(--sk-leaf)]/30 p-6 h-full">
                  <h3 className="font-semibold">{c.t}</h3>
                  <p className="mt-2 text-sm text-[color:var(--sk-deep)]/75 leading-relaxed">{c.b}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 14 — FINAL CTA */}
      <section className="relative overflow-hidden bg-white border-t border-[color:var(--sk-leaf)]/20">
        <div className="relative mx-auto max-w-5xl px-6 py-24 md:py-32 text-center">
          <Reveal>
            <h2 className="font-[Open_Sans] text-3xl md:text-5xl font-extrabold tracking-tight text-neutral-900 leading-tight max-w-3xl mx-auto">
              Designing technology that empowers farmers and simplifies grocery experiences.
            </h2>
            <p className="mt-5 text-[color:var(--sk-deep)]/75 max-w-xl mx-auto">
              Have a product that needs the same care? Let’s build something together.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href="mailto:hello@anushachandra.com"
                className="inline-flex items-center gap-2 rounded-full bg-[color:var(--sk-deep)] text-white px-6 py-3 text-sm font-medium hover:opacity-95 transition shadow-[0_20px_40px_-20px_rgba(47,74,38,0.6)]"
              >
                <Mail className="size-4" /> Get in touch
              </a>
              <Link
                to="/"
                hash="work"
                className="inline-flex items-center gap-2 rounded-full bg-white text-[color:var(--sk-deep)] px-6 py-3 text-sm font-medium border border-[color:var(--sk-deep)]/15 hover:bg-white transition"
              >
                View more projects <ArrowUpRight className="size-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <footer className="py-10 text-center text-xs text-[color:var(--sk-deep)]/60">
        © {new Date().getFullYear()} Anusha Chandra · SabziKart case study
      </footer>
    </div>
  );
}
