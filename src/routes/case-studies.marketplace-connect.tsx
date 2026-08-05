import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform, useInView, type Variants } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import {
  ArrowLeft,
  ArrowUpRight,
  Compass,
  Search,
  Layers,
  PenTool,
  MousePointer2,
  Sparkles,
  ShieldCheck,
  Eye,
  Gauge,
  Layout,
  Star,
} from "lucide-react";

const imagePath = (filename: string) => `/images/${filename}`;
const imageAsset = (filename: string) => ({ url: imagePath(filename) });

const heroDesktop = imagePath("marketplace-hero-desktop.jpg");
const productDetail = imagePath("marketplace-product-detail.jpg");
const checkoutImg = imagePath("marketplace-checkout.jpg");
const wireframesImg = imageAsset("marketplace-wireframe-sketches.png");
const landingPageImg = imageAsset("marketplace-landing-page.jpg");
const createAccountImg = imageAsset("marketplace-create-account.jpeg");
const searchFilteringImg = imageAsset("marketplace-search-filtering.jpg");
const competitiveAnalysisImg = imageAsset("marketplace-competitive-analysis.jpg");
const paymentProcessingImg = imageAsset("marketplace-payment-processing.jpg");
const reviewSubmissionImg = imageAsset("marketplace-review-submission.jpg");
const userProfileImg = imageAsset("marketplace-user-profile.jpg");
const transactionCommImg = imageAsset("marketplace-transaction-communication.jpg");
const userPersonaImg = imageAsset("marketplace-user-persona.jpg");
const itemServiceDetailsImg = imageAsset("marketplace-item-service-details.jpg");
const userFlowchartImg = imageAsset("marketplace-flow-chart.png");
const titleCardAsset = imageAsset("marketplace-title-card.jpg");

export const Route = createFileRoute("/case-studies/marketplace-connect")({
  head: () => ({
    meta: [
      { title: "MarketPlace Connect — Desktop Marketplace UX | Anusha Chandra" },
      {
        name: "description",
        content:
          "A trust-first desktop marketplace experience designed for seamless buying, selling and discovery. A cinematic UX case study by Anusha Chandra.",
      },
      { property: "og:title", content: "MarketPlace Connect — Desktop Marketplace UX" },
      {
        property: "og:description",
        content:
          "Research, flows, wireframes, design system and high-fidelity screens for a desktop-first marketplace platform.",
      },
    ],
  }),
  component: MarketPlaceConnectCaseStudy,
});

/* --------------------------------- motion --------------------------------- */

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  },
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

/** Word-by-word stagger reveal for cinematic headlines */
function HeadlineReveal({
  text,
  className = "",
  as = "h2",
}: {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3";
}) {
  const words = text.split(" ");
  const Tag = motion[as];
  return (
    <Tag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.06, delayChildren: 0.05 } },
      }}
    >
      {words.map((w, i) => (
        <motion.span
          key={i}
          className="inline-block mr-[0.25em]"
          variants={{
            hidden: { opacity: 0, y: "0.6em", filter: "blur(6px)" },
            show: {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
            },
          }}
        >
          {w}
        </motion.span>
      ))}
    </Tag>
  );
}

/** Count-up number animation */
function CountUp({ end, suffix = "", duration = 1.6 }: { end: number; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    let raf = 0;
    const step = (now: number) => {
      const p = Math.min(1, (now - start) / (duration * 1000));
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(end * eased));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, end, duration]);
  return (
    <span ref={ref}>
      {val}
      {suffix}
    </span>
  );
}

/* ---------------------------------- page ---------------------------------- */

function MarketPlaceConnectCaseStudy() {
  return (
    <main className="bg-background text-foreground min-h-screen antialiased selection:bg-primary/40">
      {/* top nav */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-background/70 border-b border-border">
        <div className="mx-auto max-w-7xl px-6 h-14 flex items-center justify-between">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition"
          >
            <ArrowLeft className="size-3.5" />
            Back to work
          </Link>
          <div className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
            Case Study · 2025
          </div>
        </div>
      </header>

      <TitleCardSection />
      <HeroSection />
      <MetaStrip />
      <ProblemSection />
      <ImpactSection />
      <ProcessSection />
      <UserFlowSection />
      <WireframesSection />
      <HiFiSection />
      <DesignSystemSection />
      <FinalShowcaseSection />
      <FooterCta />
    </main>
  );
}

/* ------------------------------- title card ------------------------------- */

function TitleCardSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.3]);

  return (
    <section ref={ref} className="relative overflow-hidden border-b border-border">
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-24 md:pt-24 md:pb-32">
        <Reveal>
          <div className="text-[11px] uppercase tracking-[0.3em] text-primary">
            Title Card · 01
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <h2 className="mt-4 max-w-3xl font-display text-2xl md:text-3xl tracking-tight text-foreground/90">
            MarketPlace Connect
          </h2>
        </Reveal>
        <Reveal delay={0.25}>
          <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
            The opening frame — a study in geometry, color and confidence.
          </p>
        </Reveal>

        <motion.div style={{ y, opacity }} className="mt-12 md:mt-16">
          <Reveal delay={0.2}>
            <div className="relative group">
              <div className="absolute -inset-x-8 -inset-y-12 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.15),transparent_65%)] pointer-events-none" />
              <div className="relative overflow-hidden border border-border bg-white">
                <img
                  src={titleCardAsset.url}
                  alt="MarketPlace Connect — title card by Anusha Chandra"
                  width={1920}
                  height={1080}
                  className="w-full h-auto block"
                />
              </div>
              <div className="mt-4 flex items-center justify-between text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                <span>E-commerce Platform</span>
                <span>Presented by Anusha Chandra</span>
              </div>
            </div>
          </Reveal>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------------------------- hero ---------------------------------- */

function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.4]);

  return (
    <section ref={ref} className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 pt-24 pb-8 md:pt-36 md:pb-12">
        <Reveal>
          <div className="text-[11px] uppercase tracking-[0.3em] text-primary">
            MarketPlace Connect
          </div>
        </Reveal>
        <HeadlineReveal
          as="h1"
          text="Marketplace Experiences Built for Trust & Simplicity."
          className="mt-6 max-w-5xl font-display text-[40px] md:text-[72px] leading-[1.02] tracking-tight text-primary"
        />
        <Reveal delay={0.2}>
          <p className="mt-8 max-w-2xl text-lg md:text-xl text-foreground/80 leading-relaxed">
            A desktop-first marketplace platform focused on intuitive browsing, trust, and
            seamless user interactions.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <p className="mt-4 max-w-2xl text-sm md:text-base text-muted-foreground leading-relaxed">
            Designed to simplify online marketplace experiences through structured navigation,
            trust signals, accessibility, and modern interaction patterns.
          </p>
        </Reveal>
      </div>
    </section>
  );
}


/* ---------------------------- meta strip ---------------------------- */

function MetaStrip() {
  const items = [
    { label: "Category", value: "Desktop Marketplace Platform" },
    { label: "Timeline", value: "4 Weeks" },
    { label: "Role", value: "UX Research · Product Design · Desktop" },
    { label: "Year", value: "2025" },
  ];
  return (
    <section className="border-y border-border">
      <div className="mx-auto max-w-7xl px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
        {items.map((it, i) => (
          <Reveal key={it.label} delay={i * 0.05}>
            <div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                {it.label}
              </div>
              <div className="mt-3 text-sm md:text-base text-foreground">{it.value}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ---------------------------------- problem ---------------------------------- */

function ProblemSection() {
  return (
    <section className="relative py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
            01 — The Problem
          </div>
        </Reveal>
        <HeadlineReveal
          text="Digital marketplaces often overwhelm users with cluttered experiences, low trust, and poor navigation."
          className="mt-10 max-w-5xl font-display text-3xl md:text-6xl leading-[1.05] tracking-tight text-primary"
        />
        <Reveal delay={0.2}>
          <div className="mt-12 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        </Reveal>
        <Reveal delay={0.3}>
          <p className="mt-12 max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed">
            Users struggled with discovering products efficiently, evaluating trustworthiness,
            and completing actions confidently. The experience lacked emotional clarity, visual
            hierarchy, and intuitive interaction flow.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------------------------- impact ---------------------------------- */

function ImpactSection() {
  const stats = [
    { value: 42, suffix: "%", label: "Improved browsing clarity" },
    { value: 38, suffix: "%", label: "Reduced cognitive overload" },
    { value: 55, suffix: "%", label: "Faster product discovery" },
    { value: 47, suffix: "%", label: "Better visual hierarchy" },
    { value: 61, suffix: "%", label: "More trustworthy interactions" },
  ];
  return (
    <section className="relative py-16 md:py-24 border-t border-border">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="text-[11px] uppercase tracking-[0.3em] text-destructive">
            02 — Impact
          </div>
        </Reveal>
        <HeadlineReveal
          text="Designing Clarity Into Marketplace Interactions."
          className="mt-10 max-w-5xl font-display text-3xl md:text-6xl leading-[1.05] tracking-tight text-primary"
        />

        <div className="mt-20 grid grid-cols-1 md:grid-cols-5 border-t border-border">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <div className="border-b md:border-b-0 md:border-r border-border last:border-r-0 px-6 py-12">
                <div className="font-display text-5xl md:text-6xl tracking-tight text-primary">
                  <CountUp end={s.value} suffix={s.suffix} />
                </div>
                <div className="mt-4 text-xs uppercase tracking-[0.18em] text-muted-foreground leading-relaxed">
                  {s.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------- process ---------------------------------- */

function ProcessSection() {
  const steps = [
    {
      n: "01",
      title: "Research",
      icon: Search,
      body: "Competitive teardowns, marketplace heuristics, and trust-pattern audits across 12 platforms.",
    },
    {
      n: "02",
      title: "User Flow",
      icon: Compass,
      body: "Mapped browse-to-buy paths and decision points where trust collapses.",
    },
    {
      n: "03",
      title: "Low Fidelity Wireframes",
      icon: PenTool,
      body: "Hand-drawn explorations to interrogate navigation and discovery rhythm.",
    },
    {
      n: "04",
      title: "High Fidelity Design",
      icon: Layout,
      body: "Editorial dark interface, blue trust accents, restrained red signaling.",
    },
    {
      n: "05",
      title: "Prototype",
      icon: MousePointer2,
      body: "Interactive desktop prototype validated with five marketplace users.",
    },
    {
      n: "06",
      title: "Final Experience",
      icon: Sparkles,
      body: "A premium, confidence-led marketplace journey from landing to checkout.",
    },
  ];
  return (
    <section id="process" className="relative py-16 md:py-24 border-t border-border">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
            03 — Design Process
          </div>
        </Reveal>
        <HeadlineReveal
          text="Six stages, one continuous story."
          className="mt-10 max-w-4xl font-display text-3xl md:text-5xl leading-[1.05] tracking-tight text-primary"
        />

        <div className="mt-20 space-y-px">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.04}>
              <div className="grid grid-cols-12 gap-6 items-start border-t border-border py-10 md:py-14 group">
                <div className="col-span-12 md:col-span-2 text-primary text-sm tracking-[0.25em]">
                  {s.n}
                </div>
                <div className="col-span-12 md:col-span-5">
                  <div className="flex items-center gap-3">
                    <s.icon className="size-5 text-muted-foreground group-hover:text-primary transition" />
                    <h3 className="font-display text-3xl md:text-5xl tracking-tight text-primary">
                      {s.title}
                    </h3>
                  </div>
                </div>
                <p className="col-span-12 md:col-span-5 text-muted-foreground text-base leading-relaxed">
                  {s.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------- user flow ---------------------------------- */

function UserFlowSection() {
  const nodes = [
    "Landing",
    "Browse Products",
    "Product Details",
    "Add to Cart",
    "Checkout",
    "Order Confirmation",
  ];
  return (
    <section className="relative py-16 md:py-24 border-t border-border overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
            04 — User Flow
          </div>
        </Reveal>
        <HeadlineReveal
          text="A blueprint for confident decisions."
          className="mt-10 max-w-4xl font-display text-3xl md:text-5xl leading-[1.05] tracking-tight text-primary"
        />

        <Reveal delay={0.2}>
          <div className="mt-20 relative bg-card border border-border p-10 md:p-16">
            <div className="absolute inset-0 [background-image:linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:48px_48px] pointer-events-none" />
            <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-10 md:gap-4">
              {nodes.map((n, i) => (
                <div key={n} className="flex md:flex-col items-center gap-4 md:gap-0">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.6, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                    className="relative grid place-items-center size-14 border border-foreground/40 text-[11px] text-foreground/80 bg-background"
                  >
                    <span>{String(i + 1).padStart(2, "0")}</span>
                    <motion.span
                      className="absolute inset-0 border border-primary"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: [0, 1, 0] }}
                      viewport={{ once: true }}
                      transition={{ duration: 2.4, delay: i * 0.12, repeat: Infinity, repeatDelay: 3 }}
                    />
                  </motion.div>
                  <div className="md:mt-4 text-xs uppercase tracking-[0.2em] text-muted-foreground text-center md:max-w-[110px]">
                    {n}
                  </div>
                  {i < nodes.length - 1 && (
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7, delay: i * 0.12 + 0.2, ease: "easeOut" }}
                      className="hidden md:block flex-1 h-px bg-gradient-to-r from-foreground/20 via-primary/60 to-foreground/20 origin-left mx-2"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-10 relative border border-border bg-white">
            <img
              src={userFlowchartImg.url}
              alt="Marketplace Platform User Flowchart"
              className="w-full h-auto"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------------------------- wireframes ---------------------------------- */

function WireframesSection() {
  const labels = [
    "Navigation Exploration",
    "Product Discovery",
    "Product Detail Structure",
    "Checkout Experience",
  ];
  return (
    <section className="relative py-16 md:py-24 border-t border-border">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
            05 — Low Fidelity Wireframes
          </div>
        </Reveal>
        <HeadlineReveal
          text="Thinking on paper, in monochrome."
          className="mt-10 max-w-4xl font-display text-3xl md:text-5xl leading-[1.05] tracking-tight text-primary"
        />

        <Reveal delay={0.2}>
          <div className="mt-20 relative">
            <div className="absolute -inset-x-10 -inset-y-10 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.05),transparent_70%)] pointer-events-none" />
            <img
              src={wireframesImg.url}
              alt="Hand-drawn marketplace wireframes"
              width={1920}
              height={1080}
              className="relative w-full h-auto border border-border"
            />
          </div>
        </Reveal>

        <Reveal delay={0.25}>
          <div className="mt-10 relative">
            <div className="flex items-baseline justify-between gap-6 mb-6">
              <div className="text-primary text-xs tracking-[0.25em]">HI-FI</div>
              <div className="h-px flex-1 bg-border" />
              <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                Landing Page
              </div>
            </div>
            <img
              src={landingPageImg.url}
              alt="High fidelity landing page wireframe"
              className="relative w-full h-auto border border-border bg-white"
            />
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-10 relative">
            <div className="flex items-baseline justify-between gap-6 mb-6">
              <div className="text-primary text-xs tracking-[0.25em]">HI-FI</div>
              <div className="h-px flex-1 bg-border" />
              <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                Create Account
              </div>
            </div>
            <img
              src={createAccountImg.url}
              alt="High fidelity create account wireframe"
              className="relative w-full h-auto border border-border bg-white"
            />
          </div>
        </Reveal>

        {[
          { src: searchFilteringImg.url, label: "Search & Filtering", alt: "Search and filtering wireframe" },
          { src: itemServiceDetailsImg.url, label: "Product Details", alt: "Product details wireframe" },
          { src: userProfileImg.url, label: "User Profile", alt: "User profile wireframe" },
          { src: transactionCommImg.url, label: "Transaction & Communication", alt: "Transaction and communication wireframe" },
          { src: paymentProcessingImg.url, label: "Payment Processing", alt: "Payment processing wireframe" },
          { src: reviewSubmissionImg.url, label: "Review Submission", alt: "Review submission wireframe" },
          { src: userPersonaImg.url, label: "User Persona", alt: "User persona wireframe" },
          { src: competitiveAnalysisImg.url, label: "Competitive Analysis", alt: "Competitive analysis wireframe" },
        ].map((w, i) => (
          <Reveal key={w.label} delay={0.35 + i * 0.05}>
            <div className="mt-10 relative">
              <div className="flex items-baseline justify-between gap-6 mb-6">
                <div className="text-primary text-xs tracking-[0.25em]">HI-FI</div>
                <div className="h-px flex-1 bg-border" />
                <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  {w.label}
                </div>
              </div>
              <img
                src={w.src}
                alt={w.alt}
                className="relative w-full h-auto border border-border bg-white"
              />
            </div>
          </Reveal>
        ))}

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-px bg-border">
          {labels.map((l, i) => (
            <Reveal key={l} delay={i * 0.05}>
              <div className="bg-background p-6">
                <div className="text-primary text-xs">{String(i + 1).padStart(2, "0")}</div>
                <div className="mt-3 text-sm text-foreground">{l}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------- hi-fi ---------------------------------- */

function HiFiScreen({
  src,
  title,
  body,
  index,
}: {
  src: string;
  title: string;
  body: string;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);
  return (
    <div ref={ref} className="py-24 md:py-40">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="flex items-baseline justify-between gap-6 mb-12">
            <div className="text-primary text-xs tracking-[0.25em]">
              {String(index).padStart(2, "0")}
            </div>
            <div className="h-px flex-1 bg-border" />
            <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Screen</div>
          </div>
        </Reveal>
        <HeadlineReveal
          text={title}
          className="font-display text-3xl md:text-5xl tracking-tight max-w-3xl text-primary"
        />
        <Reveal delay={0.15}>
          <p className="mt-6 max-w-xl text-muted-foreground leading-relaxed">{body}</p>
        </Reveal>
      </div>
      <motion.div style={{ y }} className="mt-16 mx-auto max-w-[1400px] px-6">
        <Reveal>
          <div className="relative">
            <div className="absolute -inset-y-16 -inset-x-10 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.10),transparent_60%)] pointer-events-none" />
            <img
              src={src}
              alt={title}
              width={1920}
              height={1080}
              className="relative w-full h-auto"
            />
          </div>
        </Reveal>
      </motion.div>
    </div>
  );
}

function HiFiSection() {
  return (
    <section className="relative border-t border-border">
      <div className="mx-auto max-w-7xl px-6 pt-32 md:pt-48">
        <Reveal>
          <div className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
            06 — High Fidelity
          </div>
        </Reveal>
        <HeadlineReveal
          text="One screen at a time. No noise."
          className="mt-10 max-w-4xl font-display text-3xl md:text-5xl leading-[1.05] tracking-tight text-primary"
        />
      </div>

      <HiFiScreen
        index={1}
        src={heroDesktop}
        title="Landing — first impression of trust."
        body="Editorial typography, restrained palette, and breathing room signal a marketplace worth slowing down for."
      />
      <HiFiScreen
        index={2}
        src={productDetail}
        title="Product detail — clarity over decoration."
        body="Hierarchy guides the eye from object to value to action. Trust badges live inline, never as ornament."
      />
      <HiFiScreen
        index={3}
        src={checkoutImg}
        title="Checkout — calm at the most decisive moment."
        body="A focused two-column flow with a single blue commitment and quiet confirmations."
      />
    </section>
  );
}

/* ---------------------------------- prototype ---------------------------------- */

const FIGMA_PROTOTYPE_URL =
  "https://www.figma.com/proto/c7B5vhmIFOiU0tAihyge8n/COURSE-PROJECT--05-FINAL?page-id=0%3A1&node-id=1-2035&p=f&viewport=241%2C215%2C0.02&t=LCds9mSkRLQkOlLg-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=44%3A11255&show-proto-sidebar=1";


function PrototypeSection() {
  const screens = [heroDesktop, productDetail, checkoutImg, heroDesktop, productDetail];
  return (
    <section id="prototype" className="relative py-16 md:py-24 border-t border-border overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="text-[11px] uppercase tracking-[0.3em] text-destructive">
            07 — Prototype
          </div>
        </Reveal>
        <HeadlineReveal
          text="Designing Fluid Marketplace Interactions."
          className="mt-10 max-w-5xl font-display text-3xl md:text-6xl leading-[1.05] tracking-tight text-primary"
        />
        <Reveal delay={0.2}>
          <p className="mt-8 max-w-xl text-muted-foreground leading-relaxed">
            A continuous walkthrough — landing, search, detail, cart, checkout — paced like a
            product film.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <a
            href={FIGMA_PROTOTYPE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 bg-primary text-white px-6 py-3 text-sm hover:bg-primary/90 transition"
          >
            View Full Case Study <ArrowUpRight className="size-4" />
          </a>
        </Reveal>
      </div>

      <Reveal delay={0.2}>
        <div className="mt-20 overflow-x-auto no-scrollbar [scrollbar-width:none]">
          <div className="flex gap-6 px-6 pb-6 min-w-max">
            {screens.map((s, i) => (
              <motion.a
                key={i}
                href={FIGMA_PROTOTYPE_URL}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="group relative w-[80vw] md:w-[60vw] lg:w-[48vw] shrink-0 block"
              >
                <div className="absolute top-4 left-4 z-10 text-[10px] uppercase tracking-[0.2em] text-foreground/70">
                  Frame {String(i + 1).padStart(2, "0")}
                </div>
                <div className="absolute top-4 right-4 z-10 inline-flex items-center gap-1.5 bg-foreground/60 backdrop-blur px-2.5 py-1 text-[10px] uppercase tracking-[0.2em] text-white opacity-0 group-hover:opacity-100 transition">
                  Open in Figma <ArrowUpRight className="size-3" />
                </div>
                <img
                  src={s}
                  alt={`Prototype frame ${i + 1}`}
                  className="w-full h-auto border border-border transition group-hover:border-primary/60"
                />
              </motion.a>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}

/* ---------------------------------- design system ---------------------------------- */

function Swatch({ name, hex }: { name: string; hex: string }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className="group bg-card border border-border hover:border-primary/40 transition"
    >
      <div className="h-28" style={{ backgroundColor: hex }} />
      <div className="px-4 py-3 flex items-center justify-between">
        <div className="text-xs text-foreground">{name}</div>
        <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">{hex}</div>
      </div>
    </motion.div>
  );
}

function DesignSystemSection() {
  const blue = [
    { name: "Blue 50", hex: "#EFF6FF" },
    { name: "Blue 200", hex: "#BFDBFE" },
    { name: "Blue 400", hex: "#60A5FA" },
    { name: "Blue 500", hex: "#3B82F6" },
    { name: "Blue 600", hex: "#2563EB" },
    { name: "Blue 800", hex: "#1E40AF" },
  ];
  const grey = [
    { name: "Grey 50", hex: "#F5F5F5" },
    { name: "Grey 200", hex: "#E5E5E5" },
    { name: "Grey 400", hex: "#A3A3A3" },
    { name: "Grey 600", hex: "#525252" },
    { name: "Grey 800", hex: "#262626" },
    { name: "Grey 950", hex: "#0D0D0D" },
  ];
  const red = [
    { name: "Red 100", hex: "#FEE2E2" },
    { name: "Red 300", hex: "#FCA5A5" },
    { name: "Red 500", hex: "#EF4444" },
    { name: "Red 600", hex: "#DC2626" },
    { name: "Red 800", hex: "#991B1B" },
    { name: "Red 950", hex: "#450A0A" },
  ];

  const groups = [
    { label: "Primary · Blue", set: blue },
    { label: "Neutral · Grey", set: grey },
    { label: "Accent · Red", set: red },
  ];

  return (
    <section className="relative py-16 md:py-24 border-t border-border">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
            08 — Design System
          </div>
        </Reveal>
        <HeadlineReveal
          text="A system tuned for trust."
          className="mt-10 max-w-4xl font-display text-3xl md:text-5xl leading-[1.05] tracking-tight text-primary"
        />

        <div className="mt-20 space-y-16">
          {groups.map((g) => (
            <Reveal key={g.label}>
              <div>
                <div className="flex items-baseline justify-between border-b border-border pb-4">
                  <div className="text-sm text-foreground">{g.label}</div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    {g.set.length} tokens
                  </div>
                </div>
                <div className="mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-border">
                  {g.set.map((s) => (
                    <Swatch key={s.name} {...s} />
                  ))}
                </div>
              </div>
            </Reveal>
          ))}

          {/* typography */}
          <Reveal>
            <div>
              <div className="flex items-baseline justify-between border-b border-border pb-4">
                <div className="text-sm text-foreground">Typography</div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  Inter · Plus Jakarta Sans
                </div>
              </div>
              <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    Display / 72
                  </div>
                  <div className="mt-3 font-display text-6xl tracking-tight">
                    Discover. Trust. Buy.
                  </div>
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    Body / 16
                  </div>
                  <p className="mt-3 text-foreground/85 leading-relaxed">
                    Body type stays calm and editorial. Long-form reading remains effortless even
                    inside dense marketplace views.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* buttons */}
          <Reveal>
            <div>
              <div className="flex items-baseline justify-between border-b border-border pb-4">
                <div className="text-sm text-foreground">Button States</div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  Primary · Secondary · Destructive
                </div>
              </div>
              <div className="mt-10 flex flex-wrap gap-4">
                <button className="bg-primary hover:bg-primary/90 text-white px-6 py-3 text-sm transition">
                  Add to Cart
                </button>
                <button className="border border-border hover:border-primary/60 text-foreground px-6 py-3 text-sm transition">
                  View Details
                </button>
                <button className="bg-destructive hover:bg-destructive/90 text-white px-6 py-3 text-sm transition">
                  Remove
                </button>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------- final showcase ---------------------------------- */

function FinalShowcaseSection() {
  const pillars = [
    { icon: ShieldCheck, label: "Trust-built" },
    { icon: Eye, label: "Clarity-first" },
    { icon: Gauge, label: "Performance-minded" },
    { icon: Star, label: "Premium-felt" },
    { icon: Layers, label: "System-driven" },
  ];
  return (
    <section className="relative py-16 md:py-24 border-t border-border">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
            09 — Final Experience
          </div>
        </Reveal>
        <HeadlineReveal
          text="A Marketplace Experience Designed for Confidence."
          className="mt-10 max-w-5xl font-display text-3xl md:text-6xl leading-[1.05] tracking-tight text-primary"
        />
      </div>

      <Reveal delay={0.2}>
        <div className="relative mt-24 mx-auto max-w-[1500px] px-6">
          <div className="absolute -inset-y-20 -inset-x-10 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.10),transparent_60%)] pointer-events-none" />
          <img
            src={heroDesktop}
            alt="MarketPlace Connect — final"
            width={1920}
            height={1080}
            className="relative w-full h-auto"
          />
        </div>
      </Reveal>

      <div className="mx-auto max-w-7xl px-6 mt-24 grid grid-cols-2 md:grid-cols-5 gap-px bg-border">
        {pillars.map((p, i) => (
          <Reveal key={p.label} delay={i * 0.05}>
            <div className="bg-background p-8 flex flex-col items-start gap-4">
              <p.icon className="size-5 text-primary" />
              <div className="text-sm text-foreground">{p.label}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ---------------------------------- footer cta ---------------------------------- */

function FooterCta() {
  return (
    <section className="relative py-16 md:py-24 border-t border-border">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <HeadlineReveal
          text="Next case study."
          className="font-display text-3xl md:text-5xl tracking-tight text-primary"
        />
        <Reveal delay={0.15}>
          <p className="mt-6 text-muted-foreground">
            Browse the rest of the portfolio for more research-led product work.
          </p>
        </Reveal>
        <Reveal delay={0.25}>
          <div className="mt-10">
            <Link
              to="/"
              className="inline-flex items-center gap-2 border border-border hover:border-primary/60 px-6 py-3 text-sm transition"
            >
              <ArrowLeft className="size-4" /> Back to all work
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
