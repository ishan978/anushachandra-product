import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useInView, type Variants } from "framer-motion";
import { useRef, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Compass,
  Users,
  Lightbulb,
  Layers,
  Sparkles,
  Heart,
  Target,
  Gauge,
  BarChart3,
  Palette,
  PenTool,
  ClipboardCheck,
  FileText,
  Search,
  Crosshair,
  Network,
  PencilLine,
  CheckCircle2,
  Check,
  X,
  CircleDot,
  Briefcase,
  MapPin,
  CalendarDays,
  Rocket,
  AlertTriangle,
  MessageSquare,
  Cog,
  Quote,
  Home,
} from "lucide-react";

const imagePath = (filename: string) => `/images/${filename}`;
const coverLogo = imagePath("margadarshak-cover-logo.png");
const screenSplash = imagePath("splash-screen.png");
const screenOnboarding = imagePath("select-state-screen.png");
const screenWelcome = imagePath("welcome-screen.png");
const screenHome = imagePath("home-screen.png");
const screenSchemes = imagePath("schemes-screen.png");
const screenGuide1 = imagePath("guide-nearby-screen.png");
const screenGuide2 = imagePath("book-guide-screen.png");
const screenEditProfile = imagePath("edit-profile-screen.png");
const screenDashboard = imagePath("guide-dashboard-screen.png");
const screenDashboardEdit = imagePath("guide-profile-screen.png");
const lowFiCollage = imagePath("margadarshak-low-fi-collage.jpg");
const flowChart = imagePath("margadarshak-flow-chart.png");




export const Route = createFileRoute("/case-studies/margadarshak")({
  head: () => ({
    meta: [
      { title: "Margadarshak — Behavioral UX for Social Impact | Anusha Chandra" },
      {
        name: "description",
        content:
          "A behavioral UX case study reducing cognitive load and stress for low-income families navigating government schemes in India.",
      },
      { property: "og:title", content: "Margadarshak — Behavioral UX for Social Impact" },
      {
        property: "og:description",
        content: "Research, empathy mapping, user flow, wireframes and key screens for Margadarshak.",
      },
    ],
  }),
  component: MargadarshakCaseStudy,
});

// Brand palette (from the deck)
const BRAND = "#FF6B01";
const BRAND_DEEP = "#E85E00";
const imageSrc = (src: string) => src;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  },
};

function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
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
  const MotionTag = motion[as];
  return (
    <MotionTag
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
    </MotionTag>
  );
}

function SectionLabel({ icon: Icon, children }: { icon: any; children: React.ReactNode; variant?: "blue" | "orange" }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="inline-flex items-center gap-2 rounded-full border-2 px-4 py-1.5 text-sm font-bold uppercase tracking-[0.16em] shadow-sm"
      style={{
        borderColor: "#93c5fd",
        background: "#eff6ff",
        color: "#60a5fa",
      }}
    >
      <Icon className="h-4 w-4" />
      {children}
    </motion.div>
  );
}

function H2({ children }: { children: React.ReactNode }) {
  if (typeof children === "string") {
    return (
      <HeadlineReveal
        text={children}
        className="mt-4 max-w-3xl font-sans text-3xl font-semibold leading-snug text-foreground md:text-4xl"
      />
    );
  }
  return (
    <motion.h2
      initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="mt-4 max-w-3xl font-sans text-3xl font-semibold leading-snug text-foreground md:text-4xl"
    >
      {children}
    </motion.h2>
  );
}

// ————— Animated impact circle card —————
function ImpactBarCard({
  v,
  l,
  pct,
  direction,
}: {
  v: string;
  l: string;
  pct: number;
  direction: "up" | "down";
  before: number;
  after: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [hovered, setHovered] = useState(false);
  const animate = inView || hovered;

  const size = 128;
  const stroke = 8;
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const target = c * (1 - pct / 100);

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      className="group relative overflow-hidden rounded-2xl border bg-card p-6 md:p-8 transition-shadow hover:shadow-[0_20px_50px_-20px_hsl(var(--accent)/0.35)]"
      style={{ borderColor: "hsl(var(--accent) / 0.25)" }}
    >
      <div className="flex items-center justify-between gap-6">
        <div className="flex-1 min-w-0">
          <p className="font-sans text-4xl font-semibold text-accent md:text-5xl">{v}</p>
          <p className="mt-3 text-sm text-muted-foreground">{l}</p>
          <div
            className="mt-4 inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider"
            style={{
              borderColor: "hsl(var(--accent) / 0.3)",
              color: "hsl(var(--accent))",
              background: "hsl(var(--accent) / 0.06)",
            }}
          >
            {direction === "up" ? "▲" : "▼"} {direction === "up" ? "Increase" : "Reduction"}
          </div>
        </div>

        {/* Animated circle */}
        <div className="relative shrink-0" style={{ width: size, height: size }} aria-hidden>
          <svg width={size} height={size} className="-rotate-90">
            <circle
              cx={size / 2}
              cy={size / 2}
              r={r}
              fill="none"
              stroke="hsl(var(--accent) / 0.14)"
              strokeWidth={stroke}
            />
            <motion.circle
              cx={size / 2}
              cy={size / 2}
              r={r}
              fill="none"
              stroke="hsl(var(--accent))"
              strokeWidth={stroke}
              strokeLinecap="round"
              strokeDasharray={c}
              initial={{ strokeDashoffset: c }}
              animate={{ strokeDashoffset: animate ? target : c }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            />
          </svg>
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <span className="text-sm font-medium text-muted-foreground">{pct}%</span>
          </div>
        </div>
      </div>
    </div>
  );
}



// ————— Competitor data —————
const platforms = ["UMANG", "MyScheme", "JanSamarth", "DigiLocker", "CSC Digital Seva", "Margadarshak"] as const;
type Cell = "yes" | "no" | "partial";
const compRows: { feature: string; values: Cell[] }[] = [
  { feature: "Scheme Discovery", values: ["yes", "yes", "partial", "no", "partial", "yes"] },
  { feature: "Eligibility Checker", values: ["partial", "yes", "partial", "no", "partial", "yes"] },
  { feature: "Personalized Recommendation", values: ["no", "yes", "yes", "no", "no", "yes"] },
  { feature: "Multilingual Support", values: ["yes", "yes", "partial", "yes", "yes", "yes"] },
  { feature: "Voice Assistance", values: ["no", "no", "no", "no", "no", "yes"] },
  { feature: "Document Support", values: ["yes", "no", "yes", "yes", "yes", "yes"] },
  { feature: "Human Guide Assistance", values: ["no", "no", "no", "no", "no", "yes"] },
  { feature: "Application Tracking", values: ["partial", "yes", "partial", "no", "partial", "yes"] },
];

function CellIcon({ v }: { v: Cell }) {
  if (v === "yes") return <Check className="mx-auto h-4 w-4" style={{ color: "#0A8A5F" }} />;
  if (v === "no") return <X className="mx-auto h-4 w-4 text-muted-foreground/70" />;
  return <CircleDot className="mx-auto h-4 w-4" style={{ color: "hsl(var(--primary))" }} />;
}


function MargadarshakCaseStudy() {
  const keyScreens = [
    { label: "Splash" },
    { label: "Welcome — Find schemes" },
    { label: "Welcome — Required documents" },
    { label: "Onboarding — State" },
    { label: "Onboarding — Income" },
    { label: "Onboarding — Complete" },
    { label: "Home — Recommended" },
    { label: "Smart Guide" },
    { label: "All Schemes" },
    { label: "Scheme Overview" },
    { label: "Eligibility" },
    { label: "Guides Nearby" },
    { label: "Profile" },
  ];

  const processSteps = [
    { n: "01", t: "Research", icon: Search, items: ["User Interviews", "Secondary Research", "Competitive Analysis"] },
    { n: "02", t: "Define", icon: Crosshair, items: ["Problem Statement", "User Needs", "Key Insights"] },
    { n: "03", t: "Structure", icon: Network, items: ["Information Architecture", "User Flows", "Journey Mapping"] },
    { n: "04", t: "Design", icon: PencilLine, items: ["Wireframing", "Visual Design", "Design System"] },
    { n: "05", t: "Validate", icon: CheckCircle2, items: ["Usability Testing", "Iterative Improvements", "Final Recommendations"] },
  ];


  const colors = [
    { hex: "#FF6B01", name: "Primary" },
    { hex: "#E85E00", name: "Primary Deep" },
    { hex: "#05AA6F", name: "Success" },
    { hex: "#048A5A", name: "Success Deep" },
    { hex: "#E5E7EB", name: "Surface" },
    { hex: "#4B5563", name: "Text" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground" style={{ "--accent": "25 100% 50%" } as React.CSSProperties}>
      {/* Top bar */}
      <nav className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 lg:px-10 py-4">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
            <ArrowLeft className="h-4 w-4" />
            Back to work
          </Link>
          <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Case Study · 2024</span>
        </div>
      </nav>

      {/* Hero */}
      <section className="mx-auto max-w-[1400px] px-6 lg:px-10 pt-16 pb-8 md:pt-24 md:pb-12">
        <Reveal>
          <SectionLabel icon={Compass}>Behavioral UX · Social Impact</SectionLabel>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="mt-6 font-sans text-4xl font-semibold leading-tight text-accent md:text-5xl lg:text-6xl">
            Margadarshak
          </h1>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Reducing cognitive load and emotional stress for low-income families navigating high-stakes government
            schemes — designed around empathy, clarity, and trust.
          </p>
        </Reveal>

        <Reveal delay={0.35}>
          <div className="mt-8">
            <img
              src={imageSrc(coverLogo)}
              alt="Margadarshak logo — Empowering the Common Man"
              className="w-full rounded-none object-cover aspect-[21/9]"
              loading="eager"
              decoding="async"
            />
          </div>
        </Reveal>

      </section>

      {/* Project Overview */}
      <section className="mx-auto max-w-[1400px] px-6 lg:px-10 py-14 md:py-20">
        <Reveal>
          <SectionLabel icon={FileText}>Project Overview</SectionLabel>
        </Reveal>
        <Reveal delay={0.1}>
          <H2>A welfare assistance platform for every citizen.</H2>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Margadarshak is a government welfare assistance platform designed to help citizens discover, understand, and
            apply for relevant government schemes with ease. By combining personalized recommendations, eligibility
            checks, multilingual support, and community guide assistance, the platform simplifies access to public
            welfare programs and bridges the gap between citizens and government services.
          </p>
        </Reveal>

        <Reveal delay={0.25}>
          <div className="mt-6 grid grid-cols-2 gap-6 border-t border-border/60 pt-8 md:grid-cols-4">
            {[
              { l: "Role", v: "Product Designer — end-to-end UX/UI" },
              { l: "Duration", v: "8 Weeks (Research → Design → Testing)" },
              { l: "Tools", v: "Figma · Photoshop · Illustrator · FigJam · Miro" },
              { l: "Methodology", v: "Empathy-led · User-Centered" },
            ].map((s) => (
              <div key={s.l}>
                <p className="text-xs uppercase tracking-[0.18em] text-accent">{s.l}</p>
                <p className="mt-2 text-sm text-foreground">{s.v}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Design Process */}
      <section className="mx-auto max-w-[1400px] px-6 lg:px-10 py-14 md:py-20">
        <Reveal>
          <SectionLabel icon={Layers} variant="orange">Design Process</SectionLabel>
        </Reveal>
        <Reveal delay={0.1}>
          <H2>Five stages, one calm outcome.</H2>
        </Reveal>
        <div className="relative mt-8 grid grid-cols-2 gap-4 md:flex md:items-stretch md:gap-4">
          {processSteps.map(({ n, t, icon: Icon, items }, idx) => (
            <>
              <Reveal key={n} delay={0.05} className="md:flex-1">
                <div
                  className="relative h-full rounded-2xl border p-5"
                  style={{
                    borderColor: "hsl(var(--accent) / 0.35)",
                    background: "hsl(var(--accent) / 0.06)",
                  }}
                >
                  <p className="text-xs font-semibold" style={{ color: "hsl(var(--accent))" }}>{n}</p>
                  <div
                    className="mt-3 flex h-10 w-10 items-center justify-center rounded-full"
                    style={{ background: "hsl(var(--accent) / 0.12)", color: "hsl(var(--accent))" }}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <p className="mt-3 font-sans text-base font-semibold text-foreground">{t}</p>
                  <ul className="mt-2 space-y-1 text-xs text-muted-foreground">
                    {items.map((i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="mt-1 h-1 w-1 shrink-0 rounded-full" style={{ background: BRAND }} />
                        {i}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
              {idx < processSteps.length - 1 && (
                <div
                  key={`arrow-${n}`}
                  className="hidden items-center justify-center self-center md:flex"
                  aria-hidden="true"
                >
                  <ArrowRight className="h-5 w-5 shrink-0" style={{ color: "hsl(var(--accent))" }} />
                </div>
              )}
            </>
          ))}
        </div>

      </section>


      {/* Problem */}
      <section className="mx-auto max-w-[1400px] px-6 lg:px-10 py-14 md:py-20">
        <Reveal>
          <SectionLabel icon={Target}>Problem Statement</SectionLabel>
        </Reveal>
        <Reveal delay={0.1}>
          <H2>Millions of citizens miss welfare benefits they qualify for.</H2>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Millions of citizens miss out on <span className="font-medium text-foreground">government welfare benefits</span>{" "}
            due to low awareness, complex application processes, language barriers, and lack of guidance. Users often
            struggle to <span className="font-medium text-foreground">discover relevant schemes</span>, verify
            eligibility, and complete applications successfully. Margadarshak simplifies this journey through
            personalized scheme discovery, eligibility checks, multilingual support, and community-driven guidance.
          </p>
        </Reveal>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {[
            { t: "Fragmented information", d: "Scheme details are scattered across portals, PDFs and language barriers." },
            { t: "Cognitive overload", d: "Eligibility criteria, documents and forms feel overwhelming to first-time users." },
            { t: "Low trust", d: "Users fear rejection, scams, or mistakes that cost them benefits they qualify for." },
          ].map((c) => (
            <Reveal key={c.t} delay={0.1}>
              <div className="h-full rounded-xl border bg-card p-6" style={{ borderColor: "hsl(var(--accent) / 0.20)" }}>
                <p className="font-sans text-sm font-semibold text-accent">{c.t}</p>
                <p className="mt-2 text-sm text-muted-foreground">{c.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Competitor Analysis */}
      <section className="mx-auto max-w-[1400px] px-6 lg:px-10 py-14 md:py-20">
        <Reveal>
          <SectionLabel icon={BarChart3} variant="blue">Competitor Analysis</SectionLabel>
        </Reveal>
        <Reveal delay={0.1}>
          <H2>Where existing platforms fall short.</H2>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mt-3 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Comparing existing government platforms with Margadarshak's citizen-centric experience.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-8 overflow-x-auto rounded-2xl border border-border/60 bg-card">
            <table className="w-full min-w-[720px] text-sm">
              <thead>
                <tr style={{ background: "hsl(var(--accent))" }}>
                  <th className="p-4 text-left font-sans font-medium text-white">Features</th>
                  {platforms.map((p) => (
                    <th key={p} className="p-4 text-left font-sans font-medium text-white">
                      {p}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {compRows.map((row, i) => {
                  const isBrand = i % 2 === 1;
                  return (
                    <tr key={row.feature} className="border-t border-border/60" style={isBrand ? { background: "hsl(var(--accent) / 0.06)" } : undefined}>
                      <td className="p-4 text-foreground">{row.feature}</td>
                      {row.values.map((v, j) => {
                        const isLast = j === row.values.length - 1;
                        return (
                          <td
                            key={j}
                            className="p-4 text-center"
                            style={isLast ? { background: "hsl(var(--accent) / 0.10)" } : undefined}
                          >
                            <CellIcon v={v} />
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="mt-3 flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1.5"><Check className="h-3.5 w-3.5" style={{ color: "#0A8A5F" }} /> Full support</span>
            <span className="inline-flex items-center gap-1.5"><CircleDot className="h-3.5 w-3.5" style={{ color: "hsl(var(--accent))" }} /> Partial</span>
            <span className="inline-flex items-center gap-1.5"><X className="h-3.5 w-3.5" /> Not available</span>
          </div>
        </Reveal>
      </section>

      {/* User Persona */}
      <section className="mx-auto max-w-[1400px] px-6 lg:px-10 py-14 md:py-20">
        <Reveal>
          <SectionLabel icon={Users}>User Persona</SectionLabel>
        </Reveal>
        <Reveal delay={0.1}>
          <H2>Meet Ramesh — our primary user.</H2>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-8 overflow-hidden rounded-2xl border border-border/60 bg-card">
            {/* Header */}
            <div className="p-6 md:p-8">
              <p className="font-sans text-sm font-semibold text-primary">User Persona</p>
              <h3 className="mt-1 font-sans text-2xl font-semibold text-foreground md:text-3xl">
                Ramesh Kumar <span className="text-base font-normal text-muted-foreground">(Primary User)</span>
              </h3>
              <div className="mt-5 rounded-2xl border border-border/60 bg-muted p-6 text-foreground">
                <div className="grid gap-2 text-sm">
                  <div className="flex items-center gap-2"><CalendarDays className="h-4 w-4 text-primary" /> Age · 38 Years Old</div>
                  <div className="flex items-center gap-2"><Briefcase className="h-4 w-4 text-primary" /> Occupation · Farmer</div>
                  <div className="flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" /> Location · Rural Telangana</div>
                </div>
                <div className="mt-4 border-t border-border/60 pt-4">
                  <p className="font-sans text-sm font-semibold text-foreground">About</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Ramesh is a small-scale farmer who depends on government welfare schemes for financial support and
                    agricultural benefits. He owns a smartphone but has limited digital literacy and often relies on
                    others to complete online applications.
                  </p>
                </div>
              </div>
              <div className="mt-4 flex items-start gap-2 text-sm text-muted-foreground">
                <Quote className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <p className="italic">
                  "I just want to know which schemes I qualify for and how to apply without confusion."
                </p>
              </div>
            </div>


            {/* Grid of goals/habits/motivations/frustrations */}
            <div className="grid gap-px border-t border-border/60 bg-border/60 md:grid-cols-2">
              {[
                { icon: Target, t: "Goals", items: ["Discover relevant government schemes", "Check eligibility quickly", "Apply without visiting multiple offices", "Track application status easily"] },
                { icon: CalendarDays, t: "Habits", items: ["Uses smartphone for WhatsApp and YouTube", "Visits local government offices for information", "Relies on friends and community members for guidance"] },
                { icon: Rocket, t: "Motivations", items: ["Improve family financial stability", "Access farming subsidies and benefits", "Save time and travel costs", "Receive government support efficiently"] },
                { icon: AlertTriangle, t: "Frustrations", items: ["Unaware of available schemes", "Complex eligibility criteria", "Language barriers", "Difficult documentation process", "Lack of trusted guidance"] },
              ].map(({ icon: Icon, t, items }) => (
                <div key={t} className="bg-card p-6">
                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Icon className="h-4 w-4" />
                    </div>
                    <p className="font-sans text-sm font-semibold text-primary">{t}</p>
                  </div>
                  <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                    {items.map((i) => (
                      <li key={i} className="flex gap-2">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />

                        {i}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* Empathy Mapping */}
      <section className="mx-auto max-w-[1400px] px-6 lg:px-10 py-14 md:py-20">
        <Reveal>
          <SectionLabel icon={Heart} variant="orange">Empathy Mapping</SectionLabel>
        </Reveal>
        <Reveal delay={0.1}>
          <H2>Understanding how Ramesh thinks, acts, feels and does.</H2>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mt-3 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
            The empathy map surfaces the internal experience behind every tap — anchoring design decisions in real
            emotion, not assumptions.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: MessageSquare, t: "Thinks", items: ["Which schemes am I eligible for?", "Will my application get rejected?"] },
              { icon: Heart, t: "Feels", items: ["Confused about eligibility", "Worried about making mistakes"] },
              { icon: Quote, t: "Says", items: ['"I don\'t know which scheme is right for me."', '"The process feels difficult."'] },
              { icon: Cog, t: "Does", items: ["Checks schemes on phone", "Visits government offices"] },
            ].map(({ icon: Icon, t, items }, idx) => {
              const isOrange = true;
              return (
                <div key={t} className="rounded-2xl border bg-card" style={{ borderColor: "hsl(var(--accent) / 0.25)" }}>
                  <div className="flex items-center gap-2 rounded-t-2xl px-5 py-3 text-white" style={{ background: BRAND }}>
                    <Icon className="h-4 w-4" />
                    <p className="font-sans text-sm font-semibold">{t}</p>
                  </div>
                  <ul className="space-y-2 p-5 text-sm text-muted-foreground">
                    {items.map((i) => (
                      <li key={i} className="flex gap-2">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full" style={{ background: BRAND }} />
                        {i}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </Reveal>
      </section>

      {/* User Flow */}
      <section className="mx-auto max-w-[1400px] px-6 lg:px-10 py-14 md:py-20">
        <Reveal>
          <SectionLabel icon={Layers}>User Flow</SectionLabel>
        </Reveal>
        <Reveal delay={0.1}>
          <H2>A single, calm path from confusion to confidence.</H2>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="mt-6 rounded-2xl border border-border/60 bg-card p-6 md:p-10">
            <motion.div
              className="flex flex-col items-stretch gap-3 md:flex-row md:items-center md:gap-2 md:overflow-x-auto"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              variants={{ show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } } }}
            >
              {[
                { t: "Onboarding", d: "Language & state" },
                { t: "Profile Setup", d: "Age, income, occupation" },
                { t: "Recommendations", d: "Personalized schemes" },
                { t: "Eligibility", d: "Instant check" },
                { t: "Apply", d: "Guided documents" },
                { t: "Track", d: "Status & guides" },
              ].map((s, i, arr) => (
                <motion.div
                  key={s.t}
                  className="flex items-center gap-2 md:flex-1"
                  variants={{
                    hidden: { opacity: 0, y: 18, filter: "blur(6px)" },
                    show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
                  }}
                >
                  <div
                    className="flex-1 rounded-xl p-4 text-center transition-transform duration-300 hover:-translate-y-0.5"
                    style={{ background: "hsl(var(--accent) / 0.10)" }}
                  >
                    <p className="text-xs font-semibold" style={{ color: "hsl(var(--accent))" }}>{`0${i + 1}`}</p>
                    <p className="mt-1 font-sans text-sm font-semibold text-foreground">{s.t}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{s.d}</p>
                  </div>
                  {i < arr.length - 1 && (
                    <motion.div
                      className="hidden md:block"
                      variants={{
                        hidden: { opacity: 0, x: -6 },
                        show: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } },
                      }}
                    >
                      <ArrowUpRight
                        className="h-5 w-5 shrink-0 rotate-45"
                        style={{ color: "hsl(var(--accent))" }}
                      />
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </Reveal>

        <Reveal delay={0.25}>
          <div className="mt-6 overflow-hidden rounded-2xl border border-border/60 bg-white p-6 md:p-10">
            <img
              src={imageSrc(flowChart)}
              alt="Detailed user flow diagram for Margadarshak — from onboarding to application tracking"
              className="h-auto w-full object-contain"
              decoding="async"
            />
          </div>
        </Reveal>
      </section>

      {/* Design Principles */}
      <section className="mx-auto max-w-[1400px] px-6 lg:px-10 py-14 md:py-20">
        <Reveal>
          <SectionLabel icon={Lightbulb} variant="orange">Design Principles</SectionLabel>
        </Reveal>
        <Reveal delay={0.1}>
          <H2>Three commitments shaped every screen.</H2>
        </Reveal>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {[
            { icon: Heart, t: "Empathy first", d: "Tone, language and pacing meet users where they are." },
            { icon: Sparkles, t: "One thing at a time", d: "Reduce choice, reveal information progressively." },
            { icon: Gauge, t: "Trust through clarity", d: "Show eligibility, status and consent transparently." },
          ].map(({ icon: Icon, t, d }) => (
            <Reveal key={t} delay={0.1}>
              <div className="h-full rounded-xl border bg-card p-6" style={{ borderColor: "hsl(var(--accent) / 0.20)" }}>
                <Icon className="h-5 w-5" style={{ color: "hsl(var(--accent))" }} />
                <p className="mt-4 font-sans text-base font-semibold text-accent">{t}</p>
                <p className="mt-2 text-sm text-muted-foreground">{d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Low-Fidelity Wireframes */}
      <section className="mx-auto max-w-[1400px] px-6 lg:px-10 py-14 md:py-20">
        <Reveal>
          <SectionLabel icon={PenTool}>Low-Fidelity Wireframes</SectionLabel>
        </Reveal>
        <Reveal delay={0.1}>
          <H2>Fast sketches to validate structure and flow.</H2>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mt-3 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Low-fidelity wireframes focused on defining the app's structure, navigation, and user flow — helping test
            interactions, validate usability, and improve the experience through quick iterations before visual design.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-6">
            <p className="font-sans text-lg font-semibold" style={{ color: BRAND }}>Low Fidelity</p>
            <img
              src={imageSrc(lowFiCollage)}
              alt="Low-fidelity wireframe sketches showing overview, plan, groceries, evaluator, eligibility, scheme details, home, daily updates, alerts, financial dashboard, decision maker, budget reminders, profile, login and create-new-ID screens"
              className="mt-8 h-auto w-full object-contain"
              decoding="async"
            />
          </div>
        </Reveal>


      </section>

      {/* Design System */}
      <section className="mx-auto max-w-[1400px] px-6 lg:px-10 py-14 md:py-20">
        <Reveal>
          <SectionLabel icon={Palette} variant="orange">Design System</SectionLabel>
        </Reveal>
        <Reveal delay={0.1}>
          <H2>A unified system — logo, colors, icons and type.</H2>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mt-3 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
            The system combines visual identity, color guidelines, typography, and reusable components to deliver a
            seamless experience for citizens accessing government welfare services.
          </p>
        </Reveal>

        {/* Logo card */}
        <Reveal delay={0.2}>
          <p className="mt-6 font-sans text-lg font-semibold" style={{ color: "#0A8A5F" }}>Logo</p>
          <p className="mt-2 max-w-3xl text-sm text-muted-foreground">
            The Margadarshak logo represents guidance, trust and inclusivity — a tricolor identity that reinforces its
            connection to social impact and national accessibility.
          </p>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {/* Original logo */}
            <div
              className="relative flex aspect-[16/10] items-center justify-center overflow-hidden rounded-2xl"
              style={{ background: BRAND }}
            >
              <img
                src="/images/margadarshak-logo.png"
                alt="Margdarshak original logo — Empowering the Common Man"
                className="h-full w-full"
                style={{ objectFit: "cover", display: "block" }}
                decoding="async"
              />
            </div>

            {/* App icon in phone dock mockup */}
            <div
              className="relative flex aspect-[16/10] items-center justify-center overflow-hidden rounded-2xl"
              style={{ background: BRAND }}
            >
              <img
                src="/images/margadarshak-app-icon.png"
                alt="Margdarshak app icon shown in a phone dock next to a calculator app"
                className="h-full w-full"
                style={{ objectFit: "cover", display: "block" }}
                decoding="async"
              />

            </div>
          </div>


        </Reveal>

        {/* Colors */}
        <Reveal delay={0.25}>
          <p className="mt-8 font-sans text-lg font-semibold text-accent">Colors</p>
          <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
            {colors.map((c) => (
              <div key={c.hex} className="overflow-hidden rounded-xl border border-border/60 bg-card">
                <div className="aspect-square" style={{ background: c.hex }} />
                <div className="p-3">
                  <p className="text-xs font-medium text-foreground">{c.name}</p>
                  <p className="mt-0.5 text-[11px] text-muted-foreground">{c.hex}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Icons */}
        <Reveal delay={0.3}>
          <p className="mt-8 font-sans text-lg font-semibold text-accent">Icons</p>
          <div className="mt-4 rounded-2xl border p-6" style={{ borderColor: "hsl(var(--accent) / 0.35)", background: "hsl(var(--accent) / 0.08)" }}>
            <div className="grid grid-cols-6 gap-6 sm:grid-cols-8">
              {[Search, FileText, BarChart3, Users, Compass, Heart, Layers, ArrowUpRight, Briefcase, Rocket, MessageSquare, Cog, MapPin, CalendarDays, Sparkles, Target].map((Icon, i) => (
                <div key={i} className="flex items-center justify-center">
                  <Icon className="h-6 w-6" style={{ color: "hsl(var(--accent))" }} />
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Typography */}
        <Reveal delay={0.35}>
          <p className="mt-8 font-sans text-lg font-semibold text-accent">Typography</p>
          <div className="mt-4 rounded-2xl border border-border/60 bg-card p-8">
            <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="text-5xl font-semibold md:text-6xl" style={{ color: "hsl(var(--accent))", fontFamily: "Poppins, sans-serif" }}>
                  Poppins
                </p>
                <p className="mt-2 text-sm text-muted-foreground">Regular · Medium · Semi Bold · Bold</p>
              </div>
              <div className="text-right text-sm text-muted-foreground" style={{ fontFamily: "Poppins, sans-serif" }}>
                <p>ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
                <p>abcdefghijklmnopqrstuvwxyz</p>
                <p>0 1 2 3 4 5 6 7 8 9</p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Key Screens */}
      <section className="mx-auto max-w-[1400px] px-6 lg:px-10 py-14 md:py-20">
        <Reveal>
          <SectionLabel icon={Layers}>Key Screens</SectionLabel>
        </Reveal>
        <Reveal delay={0.1}>
          <H2>From splash to scheme application — designed end-to-end.</H2>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mt-3 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
            The full user journey — onboarding, discovery, scheme browsing, guide booking, and profile management —
            crafted for clarity, trust, and accessibility.
          </p>
        </Reveal>
        <div className="mt-8 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5">
          {[
            { src: imageSrc(screenSplash), label: "Splash" },
            { src: imageSrc(screenOnboarding), label: "Select State" },
            { src: imageSrc(screenWelcome), label: "Welcome" },
            { src: imageSrc(screenHome), label: "Home" },
            { src: imageSrc(screenSchemes), label: "Schemes" },
            { src: imageSrc(screenGuide1), label: "Guides Nearby" },
            { src: imageSrc(screenGuide2), label: "Book Guide" },
            { src: imageSrc(screenEditProfile), label: "Edit Profile" },
            { src: imageSrc(screenDashboard), label: "Guide Dashboard" },
            { src: imageSrc(screenDashboardEdit), label: "Guide Profile" },
          ].map((s, i) => (
            <Reveal key={s.label} delay={0.05 * i}>
              <div className="aspect-[9/19.5] overflow-hidden rounded-[2rem] border border-border/60 bg-white shadow-sm">
                <img src={s.src} alt={`${s.label} screen`} className="h-full w-full object-cover" decoding="async" />
              </div>
              <p className="mt-3 text-center font-sans text-xs font-medium text-muted-foreground">{s.label}</p>
            </Reveal>

          ))}
        </div>
      </section>


      {/* Usability Testing */}
      <section className="mx-auto max-w-[1400px] px-6 lg:px-10 py-14 md:py-20">
        <Reveal>
          <div className="text-center">
            <h2 className="font-sans text-3xl font-semibold text-foreground md:text-4xl">
              <span style={{ color: BRAND }}>Usability</span> Testing
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              I conducted usability testing on the Margdarshak app prototype to evaluate how easily
              users can discover welfare schemes and complete key actions.
            </p>
          </div>
        </Reveal>

        {/* Task + SUS score */}
        <Reveal delay={0.15}>
          <div className="mt-8 grid items-center gap-10 md:grid-cols-2">
            {/* Left: task */}
            <div>
              <p className="text-base text-muted-foreground">
                To complete the process I gave a task<br />to potential users which is as below :
              </p>
              <div className="mt-6 space-y-5">
                <div className="flex items-start gap-4">
                  <div
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full"
                    style={{ background: `${BRAND}1F` }}
                  >
                    <Target className="h-5 w-5" style={{ color: BRAND }} />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    <span className="font-semibold" style={{ color: BRAND }}>Objective :</span>{" "}
                    Find and apply for a relevant welfare scheme.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full"
                    style={{ background: `${BRAND}1F` }}
                  >
                    <FileText className="h-5 w-5" style={{ color: BRAND }} />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    <span className="font-semibold" style={{ color: BRAND }}>Description :</span>{" "}
                    Go to the homepage, search or browse a scheme, view its details, check eligibility
                    and start the application process.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: SUS gauge */}
            <div className="flex items-center justify-center gap-8">
              <div className="relative h-56 w-56">
                <svg viewBox="0 0 120 120" className="h-full w-full -rotate-90">
                  <circle cx="60" cy="60" r="52" fill="none" stroke={`${BRAND}25`} strokeWidth="12" />
                  <circle
                    cx="60" cy="60" r="52" fill="none" stroke={BRAND} strokeWidth="12"
                    strokeLinecap="round"
                    strokeDasharray={`${(84 / 100) * 2 * Math.PI * 52} ${2 * Math.PI * 52}`}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-6xl font-bold" style={{ color: BRAND }}>84</span>
                </div>
              </div>
              <div>
                <p className="text-4xl font-bold" style={{ color: BRAND }}>SUS</p>
                <p className="mt-2 text-sm font-semibold text-foreground">System Usability Scale</p>
                <p className="mt-1 text-sm text-muted-foreground">Excellent Usability</p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Screen results grid */}
        <Reveal delay={0.2}>
          <div className="mt-8 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
            {[
              { src: imageSrc(screenHome), label: "Homepage", icon: Compass },
              { src: imageSrc(screenSchemes), label: "Search Screen", icon: Search },
              { src: imageSrc(screenGuide1), label: "Category Screen", icon: Layers },
              { src: imageSrc(screenGuide2), label: "Scheme Details", icon: FileText },
              { src: imageSrc(screenEditProfile), label: "Eligibility Screen", icon: ClipboardCheck },
              { src: imageSrc(screenDashboard), label: "Success Screen", icon: CheckCircle2 },
            ].map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.label} className="flex flex-col items-center">
                  <div className="aspect-[9/19.5] w-full overflow-hidden rounded-[1.5rem] border border-border/60 bg-white shadow-sm">
                    <img src={s.src} alt={`${s.label}`} className="h-full w-full object-cover" decoding="async" />
                  </div>
                  <div className="mt-3 flex items-center gap-2 font-sans text-sm font-semibold" style={{ color: BRAND }}>
                    <Icon className="h-4 w-4" />
                    {s.label}
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </section>


      {/* Impact */}
      <section className="mx-auto max-w-[1400px] px-6 lg:px-10 py-14 md:py-20">
        <Reveal>
          <SectionLabel icon={Gauge}>Impact</SectionLabel>
        </Reveal>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {[
            { v: "−30%", l: "Cognitive overload during scheme discovery", pct: 30, direction: "down" as const, before: 100, after: 70 },
            { v: "+45%", l: "Improved task clarity across onboarding", pct: 45, direction: "up" as const, before: 55, after: 100 },
          ].map((m) => (
            <Reveal key={m.l} delay={0.1}>
              <ImpactBarCard {...m} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Footer CTA */}
      <section className="mx-auto max-w-[1400px] px-6 lg:px-10 py-14 md:py-20">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-6 rounded-2xl border border-border/60 bg-card p-8 md:flex-row md:items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Next</p>
              <p className="mt-2 font-sans text-xl font-semibold text-accent md:text-2xl">Explore more work</p>
            </div>
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-medium text-white"
            >
              Back to portfolio
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </section>

      {/* Footer */}
      <footer className="mx-auto max-w-[1400px] px-6 lg:px-10 py-10 text-xs text-muted-foreground border-t border-border/60">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            © {new Date().getFullYear()} <span className="font-name text-muted-foreground">Anusha Chandra</span> · Margadarshak case study
          </div>
          <div className="flex gap-6">
            <span>Healthcare Product Designer</span>
            <span>Hyderabad, India</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
