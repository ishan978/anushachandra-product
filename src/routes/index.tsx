import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import {
  ArrowUpRight,
  Mail,
  Linkedin,
  FileDown,
  MapPin,
  Sparkles,
  Compass,
  Lightbulb,
  Beaker,
  FolderOpen,
  Palette,
} from "lucide-react";
import marketplaceTitleVideo from "@/assets/marketplace/title-card-video.mp4.asset.json";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const imagePath = (filename: string) => `/images/${filename}`;
const imageAsset = (filename: string) => ({ url: imagePath(filename) });

const portrait = imagePath("anusha-portrait.jpg");
const mindeaseImg = imagePath("project-mindease.jpg");
const mindeaseOnboarding = imageAsset("mindease-onboarding-welcome.png");
const mindeaseAnalytics = imageAsset("mindease-progress-analytics.png");
const mindeaseSettings = imageAsset("mindease-settings.png");
const mindeaseBooking = imageAsset("mindease-therapist-booking.png");
const mindeaseProfile = imageAsset("mindease-user-profile.png");
const mindeaseSplash = imageAsset("mindease-splash-screen.png");
const mindeaseMoodDashboard = imageAsset("mindease-mood-dashboard.png");
const mindeaseMoodDashboardMobile = imageAsset("mindease-mood-dashboard-mobile.png");
const mindeaseMeditation = imageAsset("mindease-meditation-breathing.png");
const mindeaseNotifications = imageAsset("mindease-notifications-reminders.png");
const mindeaseWellnessDashboard = imageAsset("mindease-wellness-dashboard.png");
const mindeaseWellnessReminders = imageAsset("mindease-wellness-reminders.png");
const mindeaseTherapistSearch = imageAsset("mindease-therapist-search.png");
const mindeaseAiAssistant = imageAsset("mindease-ai-assistant.png");
const mindeaseCheckin = imageAsset("mindease-emotional-checkin.png");
const mindeaseBoxBreathing = imageAsset("mindease-box-breathing.png");
const mindeaseLowFiSketches = imageAsset("mindease-low-fidelity-sketches.png");

const margadarshakImg = imagePath("margadarshak-project-logo.jpg");
const sabziTitleCard = imageAsset("sabzikart-title-card.png");
const unpaidMaidCover = imageAsset("unpaid-maid-cover.png");
const unpaidMaidAnatomy = imageAsset("unpaid-maid-anatomy.png");
const pencilSketches = imageAsset("pencil-sketches.png");
const siddeshPhoto = imageAsset("siddesh-shimpi.png");
const marketplaceTitleCard = imageAsset("marketplace-title-card-main.jpg");
const aboutDesignImg = imageAsset("about-design-philosophy.png");
const marketplaceLandingPage = imageAsset("marketplace-landing-page.jpg");
const marketplaceFlowChart = imageAsset("marketplace-flow-chart.png");
const marketplaceWireframeSketches = imageAsset("marketplace-wireframe-sketches.png");
const marketplaceItemCoffee = imageAsset("marketplace-item-detail-coffee-table.png");
const marketplaceItemLamp = imageAsset("marketplace-item-detail-desk-lamp.png");
const sabziWfSketches = imagePath("sabzikart-wireframes-sketches.png");
const sabziWfLofi = imagePath("sabzikart-wireframes-lofi.png");
const sabziUserFlow = imagePath("sabzikart-user-journey-flow.png");
const sabziSplash = imageAsset("sabzikart-splash.png");
const sabziWelcome = imageAsset("sabzikart-welcome.png");
const sabziLogin = imageAsset("sabzikart-login.png");
const sabziSignup = imageAsset("sabzikart-signup.png");
const sabziHome = imageAsset("sabzikart-home.png");
const sabziCategories = imageAsset("sabzikart-categories.png");
const sabziVegetables = imageAsset("sabzikart-vegetables.png");
const sabziCheckout = imageAsset("sabzikart-checkout.png");
const sabziPayment = imageAsset("sabzikart-payment.png");
const sabziPaymentSuccess = imageAsset("sabzikart-payment-success.png");
const sabziMyOrders = imageAsset("sabzikart-my-orders.png");
const sabziProfile = imageAsset("sabzikart-profile.png");
const sabziSabzibot = imageAsset("sabzikart-sabzibot.png");
const sabziVoice = imageAsset("sabzikart-voice.png");
const sabziTrackOrder = imageAsset("sabzikart-track-order.png");
const sabziResearchJourney = imageAsset("sabzikart-research-journey.png");
const sabziFeaturesRequired = imageAsset("sabzikart-features-required.png");

const mSplash = imagePath("margadarshak-01-splash.png");
const mChooseLang = imagePath("margadarshak-02-choose-language.png");
const mLangSelected = imagePath("margadarshak-03-language-selected.png");
const mWelcome1 = imagePath("margadarshak-04-welcome-1.png");
const mWelcome2 = imagePath("margadarshak-05-welcome-2.png");
const mWelcome3 = imagePath("margadarshak-06-welcome-3.png");
const mWelcome4 = imagePath("margadarshak-07-welcome-4.png");
const mOnb01 = imagePath("margadarshak-08-onboarding-01.png");
const mOnb02 = imagePath("margadarshak-09-onboarding-02.png");
const mOnb03 = imagePath("margadarshak-10-onboarding-03.png");
const mOnb04 = imagePath("margadarshak-11-onboarding-04.png");
const mOnb05 = imagePath("margadarshak-12-onboarding-05.png");
const mOnb06 = imagePath("margadarshak-13-onboarding-06.png");
const mOnb07 = imagePath("margadarshak-14-onboarding-07.png");
const mOnb08 = imagePath("margadarshak-15-onboarding-08.png");
const mOnb09 = imagePath("margadarshak-16-onboarding-09.png");
const mOnb10 = imagePath("margadarshak-17-onboarding-10.png");
const mHome01 = imagePath("margadarshak-18-home-01.png");
const mHome02 = imagePath("margadarshak-19-home-02.png");
const mHome03 = imagePath("margadarshak-20-home-03.png");
const mHome04 = imagePath("margadarshak-21-home-04.png");
const mHome05 = imagePath("margadarshak-22-home-05.png");
const mHome06 = imagePath("margadarshak-23-home-06.png");
const mSch01 = imagePath("margadarshak-24-schemes-01.png");
const mSch02 = imagePath("margadarshak-25-schemes-02.png");
const mSch03 = imagePath("margadarshak-26-schemes-03.png");
const mSch04 = imagePath("margadarshak-27-schemes-04.png");
const mSch05 = imagePath("margadarshak-28-schemes-05.png");
const mSch06 = imagePath("margadarshak-29-schemes-06.png");
const mSch07 = imagePath("margadarshak-30-schemes-07.png");
const mSch08 = imagePath("margadarshak-31-schemes-08.png");
const mSch09 = imagePath("margadarshak-32-schemes-09.png");
const mSch10 = imagePath("margadarshak-33-schemes-10.png");
const mGuide01 = imagePath("margadarshak-34-guide-01.png");
const mGuide02 = imagePath("margadarshak-35-guide-02.png");
const mGuide03 = imagePath("margadarshak-36-guide-03.png");
const mGuide04 = imagePath("margadarshak-37-guide-04.png");
const mProf01 = imagePath("margadarshak-38-profile-01.png");
const mProf02 = imagePath("margadarshak-39-profile-02.png");
const mGd01 = imagePath("margadarshak-40-gd-01-splash.png");
const mGd02 = imagePath("margadarshak-41-gd-02-lang.png");
const mGd03 = imagePath("margadarshak-42-gd-03-lang-selected.png");
const mGd04 = imagePath("margadarshak-43-gd-04-phone-01.png");
const mGd05 = imagePath("margadarshak-44-gd-05-phone-02.png");
const mGd06 = imagePath("margadarshak-45-gd-06-phone-03.png");
const mGd07 = imagePath("margadarshak-46-gd-07-phone-04.png");
const mGd08 = imagePath("margadarshak-47-gd-08-area.png");
const mGd09 = imagePath("margadarshak-48-gd-09-verify-identity.png");
const bWelcome = imagePath("margadarshak-banner-welcome.png");
const bOnboarding = imagePath("margadarshak-banner-onboarding.png");
const bHome = imagePath("margadarshak-banner-home.png");
const bSchemes = imagePath("margadarshak-banner-schemes.png");
const bGuide = imagePath("margadarshak-banner-guide.png");
const bProfile = imagePath("margadarshak-banner-profile.png");
const bGuideDashboard = imagePath("margadarshak-banner-guide-dashboard.png");
const mUserFlow = imagePath("margadarshak-user-flow.png");
const sketchAsset = imageAsset("pencil-sketches.png");

type WireframeGroup = {
  category: string;
  banner: string;
  screens: { src: string; label: string }[];
};

const margadarshakWireframeGroups: WireframeGroup[] = [
  {
    category: "Welcome Screens",
    banner: bWelcome,
    screens: [
      { src: mSplash, label: "Splash" },
      { src: mChooseLang, label: "Choose Language" },
      { src: mLangSelected, label: "Language Selected" },
      { src: mWelcome1, label: "Find schemes you're eligible for" },
      { src: mWelcome2, label: "Know required documents" },
      { src: mWelcome3, label: "Save and track applications" },
      { src: mWelcome4, label: "Available in 9 Indian languages" },
    ],
  },
  {
    category: "Onboarding Screens",
    banner: bOnboarding,
    screens: [
      { src: mOnb01, label: "Select your State" },
      { src: mOnb02, label: "State Selected" },
      { src: mOnb03, label: "Occupation" },
      { src: mOnb04, label: "Occupation Selected" },
      { src: mOnb05, label: "Annual Income" },
      { src: mOnb06, label: "Phone Number" },
      { src: mOnb07, label: "Phone Number Entered" },
      { src: mOnb08, label: "OTP Entry" },
      { src: mOnb09, label: "OTP Filled" },
      { src: mOnb10, label: "Congratulations!" },
    ],
  },
  {
    category: "Home Screens",
    banner: bHome,
    screens: [
      { src: mHome01, label: "Home — Recommended" },
      { src: mHome02, label: "All Categories" },
      { src: mHome03, label: "Healthcare Schemes" },
      { src: mHome04, label: "Smart Guide — Quick Actions" },
      { src: mHome05, label: "Smart Guide — Chat" },
      { src: mHome06, label: "Smart Guide — Listening" },
    ],
  },
  {
    category: "Scheme Screens",
    banner: bSchemes,
    screens: [
      { src: mSch01, label: "All Schemes" },
      { src: mSch02, label: "Eligible Schemes" },
      { src: mSch03, label: "PM Awas Yojana — Overview" },
      { src: mSch04, label: "PM Awas Yojana — Eligibility" },
      { src: mSch05, label: "Aadhaar Consent" },
      { src: mSch06, label: "Phone Verification — OTP" },
      { src: mSch07, label: "Personal Details" },
      { src: mSch08, label: "Family Member Details — Empty" },
      { src: mSch09, label: "Family Member Details — Form" },
      { src: mSch10, label: "Household Details" },
    ],
  },
  {
    category: "Guide Screens",
    banner: bGuide,
    screens: [
      { src: mGuide01, label: "Guides Nearby" },
      { src: mGuide02, label: "Guide — Book" },
      { src: mGuide03, label: "Guide — Requested" },
      { src: mGuide04, label: "Guide — Accepted" },
    ],
  },
  {
    category: "Profile Screens",
    banner: bProfile,
    screens: [
      { src: mProf01, label: "Profile — Menu" },
      { src: mProf02, label: "Edit Profile" },
    ],
  },
  {
    category: "Guide Dashboard Screens",
    banner: bGuideDashboard,
    screens: [
      { src: mGd01, label: "Guide Dashboard — Splash" },
      { src: mGd02, label: "Guide — Choose Language" },
      { src: mGd03, label: "Guide — Language Selected" },
      { src: mGd04, label: "Guide — Phone Number" },
      { src: mGd05, label: "Guide — Phone Entered" },
      { src: mGd06, label: "Guide — OTP Entry" },
      { src: mGd07, label: "Guide — OTP Filled" },
      { src: mGd08, label: "Guide — Area of Work" },
      { src: mGd09, label: "Guide — Verify Identity" },
    ],
  },
];

export const Route = createFileRoute("/")({
  component: Index,
});

const RESUME_URL = "/anusha-resume.pdf";
const LINKEDIN_URL = "https://www.linkedin.com/in/anushachnadra986/";
const EMAIL = "anushachandra986@gmail.com";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};
const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={fadeUp}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

function Nav() {
  const links = [
    ["Work", "#work"],
    ["About", "#about"],
    ["Words", "#testimonials"],
  ];
  return (
    <header className="sticky top-0 z-50 bg-background border-b border-primary/10">
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <a href="#top" className="font-name tracking-tight text-base">
          Anusha Chandra
        </a>
        <nav className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
          {links.map(([l, h]) => (
            <a
              key={h}
              href={h}
              className="hover:text-foreground hover:opacity-80 focus:bg-transparent focus-visible:bg-transparent active:bg-transparent focus:outline-none rounded-full px-3 py-1 transition"
            >
              {l}
            </a>
          ))}
        </nav>
        <a
          href={`mailto:${EMAIL}`}
          className="inline-flex items-center gap-1.5 rounded-full gradient-orange text-white px-4 py-2 text-sm font-medium transition hover:opacity-90"
        >
          Contact <ArrowUpRight className="size-3.5" />
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">

      <div className="mx-auto max-w-6xl px-6 pt-12 pb-12 md:pt-16 md:pb-16 grid md:grid-cols-12 gap-12 items-center">
        <motion.div
          className="md:col-span-7"
          initial="hidden"
          animate="show"
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 rounded-full bg-card border border-border shadow-sm px-3 py-1 text-xs text-muted-foreground">
            <span className="size-1.5 rounded-full bg-primary animate-pulse" />
            Available for Product UX & Product Design Roles
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="mt-6 font-display text-5xl md:text-7xl font-semibold leading-[1.02] tracking-tight text-balance"
          >
            Designing products people{" "}
            <span className="font-hand text-gradient-orange text-6xl md:text-8xl">love to use.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-7 text-lg text-muted-foreground max-w-xl leading-relaxed"
          >
            I&apos;m <span className="font-name text-foreground text-xl">Anusha Chandra</span> — a
            Product Designer crafting intuitive, research-driven digital systems for the
            future of medical and patient experiences.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full gradient-orange text-white px-6 py-3 text-sm font-medium transition hover:opacity-90"
            >
              Contact me <ArrowUpRight className="size-4" />
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-12 flex items-center gap-2 text-xs text-muted-foreground"
          >
            <MapPin className="size-3.5" />
            Hyderabad, India · Open to remote
          </motion.div>
        </motion.div>

        <motion.div
          className="md:col-span-5 relative"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        >
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-background border border-border shadow-lg">
            <img
              src={portrait}
              alt="Portrait of Anusha Chandra, Product Designer"
              className="size-full object-cover scale-110"
              width={896}
              height={1152}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
          </div>
          <motion.div
            className="absolute -bottom-6 -left-6 bg-card border border-border shadow-lg rounded-2xl p-4 hidden sm:block"
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="text-[11px] uppercase tracking-widest text-primary">Currently</div>
            <div className="mt-1 font-display font-medium">Healthcare UX research</div>
          </motion.div>
        </motion.div>
      </div>

      {/* Stats */}
      <StatsStrip />
    </section>
  );
}

function AnimatedNumber({ value, delay = 0 }: { value: string; delay?: number }) {
  const chars = value.split("");
  return (
    <span className="inline-flex font-display text-5xl md:text-6xl font-semibold tracking-tight leading-none tabular-nums text-accent" aria-label={value}>
      {chars.map((c, idx) => (
        <span key={idx} className="relative inline-block h-[1em] overflow-hidden align-bottom" aria-hidden="true">
          <motion.span
            className="block h-[2em] text-accent will-change-transform"
            initial={{ y: "0%" }}
            whileInView={{ y: "-50%" }}
            viewport={{ once: true, amount: 0.4, margin: "0px 0px -12% 0px" }}
            transition={{
              duration: 0.85,
              delay: delay + idx * 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <span className="flex h-[1em] items-center">{c}</span>
            <span className="flex h-[1em] items-center">{c}</span>
          </motion.span>
        </span>
      ))}
    </span>
  );
}

function StatsStrip() {
  const stats = [
    { n: "05", l: "Years of experience" },
    { n: "04", l: "Shipped case studies" },
    { n: "06", l: "Domains designed for" },
    { n: "12+", l: "Tools & methods" },
  ];
  return (
    <div id="stats" className="scroll-mt-20 border-y border-border">
      <div className="mx-auto max-w-6xl px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
        {stats.map((s, i) => (
          <motion.div
            key={s.l}
            className="group relative min-h-28"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35, margin: "0px 0px -12% 0px" }}
          >
            {/* top accent bar */}
            <motion.div
              aria-hidden
              className="h-[2px] w-10 rounded-full gradient-orange origin-left mb-4"
              variants={{ hidden: { scaleX: 0, opacity: 0 }, show: { scaleX: 1, opacity: 1 } }}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
            />

            <AnimatedNumber value={s.n} delay={0.2 + i * 0.12} />

            <motion.div
              variants={{ hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.6, delay: 0.55 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="mt-3 text-sm text-muted-foreground"
            >
              {s.l}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function AboutImageSection() {
  return (
    <section className="py-12 md:py-16 relative">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,oklch(0.78_0.16_55/0.08),transparent_60%)]" />
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <img
            src={aboutDesignImg.url}
            alt="About — Human first. Systems second. Pixels last."
            className="w-full rounded-3xl overflow-hidden shadow-lg"
          />
        </Reveal>
      </div>
    </section>
  );
}

function StorySection() {
  return (
    <section id="story" className="py-10 md:py-12">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="max-w-2xl">
          <div className="text-xs uppercase tracking-[0.2em] text-primary">
            Connecting the dots
          </div>
          <h2 className="mt-4 font-display text-4xl md:text-5xl font-semibold leading-tight">
            From visual storytelling to human-centered systems.
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            I grew up in creative visual design — storytelling, color, and craft. Working
            on real-world problems in healthcare, mental wellness, and financial stress, I
            realised thoughtful design can reduce confusion, improve access, and create
            meaningful impact in people&apos;s lives.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

type Project = {
  id: string;
  title: string;
  tag: string;
  blurb: string;
  role: string;
  timeline: string;
  tools: string;
  image: string;
  video?: string;
  metrics: { label: string; value: string }[];
  deliverables: string[];
  prototypeUrl?: string;
  wireframeGroups?: WireframeGroup[];
  wireframeImages?: { src: string; label: string }[];
  researchImages?: { src: string; label: string }[];
  userFlow?: string;
  caseStudyUrl?: string;
  hasDesignSystem?: boolean;
};

const projects: Project[] = [
  {
    id: "margadarshak",
    title: "Margadarshak",
    tag: "Behavioral UX · Social Impact",
    blurb:
      "Reducing cognitive load and emotional stress for low-income families making high-stakes daily financial decisions.",
    role: "UX Designer",
    timeline: "5 weeks",
    tools: "Figma · FigJam",
    image: margadarshakImg,
    metrics: [
      { label: "Cognitive overload", value: "−30%" },
      { label: "Task clarity", value: "+45%" },
    ],
    deliverables: ["Research", "User Flow", "Wireframes", "Prototype"],
    prototypeUrl:
      "https://www.figma.com/proto/oKryn0vKJGZ8oZw63x1drX/Margdarshak?node-id=2285-32311&p=f&t=6q1l6AoSkKOpKAPL-0&scaling=scale-down&content-scaling=fixed&starting-point-node-id=2285%3A32298&show-proto-sidebar=1&page-id=1972%3A1741",
    wireframeGroups: margadarshakWireframeGroups,
    userFlow: mUserFlow,
    caseStudyUrl: "/case-studies/margadarshak",
  },
  {
    id: "marketplace-connect",
    title: "MarketPlace Connect",
    tag: "Desktop Marketplace Platform",
    blurb:
      "A trust-first marketplace experience designed for seamless buying, selling, and discovery.",
    role: "UX Research · Product Design · Desktop Experience",
    timeline: "4 weeks",
    tools: "Figma · FigJam",
    image: marketplaceTitleCard.url,
    video: marketplaceTitleVideo.url,
    metrics: [
      { label: "Browsing clarity", value: "+42%" },
      { label: "Discovery speed", value: "+55%" },
    ],
    deliverables: ["Research", "Flows", "Wireframes", "Prototype", "Design system"],
    caseStudyUrl: "/case-studies/marketplace-connect",
    prototypeUrl:
      "https://www.figma.com/proto/c7B5vhmIFOiU0tAihyge8n/COURSE-PROJECT--05-FINAL?page-id=0%3A1&node-id=1-2035&p=f&viewport=241%2C215%2C0.02&t=LCds9mSkRLQkOlLg-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=44%3A11255&show-proto-sidebar=1",
    userFlow: marketplaceFlowChart.url,
    wireframeImages: [
      { src: marketplaceWireframeSketches.url, label: "Hand-drawn wireframe explorations" },
      { src: marketplaceLandingPage.url, label: "High-fidelity landing page wireframe" },
      { src: marketplaceItemCoffee.url, label: "Item detail — coffee table" },
      { src: marketplaceItemLamp.url, label: "Item detail — desk lamp" },
    ],
    hasDesignSystem: true,
  },
  {
    id: "sabzikart",
    title: "SabziKart",
    tag: "AgriTech · E-commerce",
    blurb:
      "A farm-to-consumer marketplace connecting farmers directly to buyers — transparent, accessible, and trust-led.",
    role: "UI/UX Designer",
    timeline: "4 weeks",
    tools: "Figma · Illustrator",
    image: sabziTitleCard.url,
    metrics: [
      { label: "User trust perception", value: "+35%" },
      { label: "Purchase flow efficiency", value: "+40%" },
    ],
    deliverables: ["Research", "Flows", "Wireframes", "Prototype", "Design system"],
    caseStudyUrl: "/case-studies/sabzikart",
    prototypeUrl:
      "https://www.figma.com/proto/wYThvQaz9U8XoCtQ9MNoYY/SabziKart---Mobile-App-Design-System?node-id=17-680&p=f&viewport=40%2C97%2C0.12&t=LUqc3ap6mbj623t0-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=17%3A680&page-id=6%3A2",
    userFlow: sabziUserFlow,
    researchImages: [
      { src: sabziResearchJourney.url, label: "Exploration journey — field sketches" },
      { src: sabziFeaturesRequired.url, label: "Identifying the features required" },
    ],
    wireframeImages: [
      { src: sabziWfSketches, label: "Hand-drawn wireframe explorations" },
      { src: sabziWfLofi, label: "Low-fidelity wireframe flow" },
      { src: sabziSplash.url, label: "1. Splash — high fidelity" },
      { src: sabziWelcome.url, label: "2. Welcome — high fidelity" },
      { src: sabziLogin.url, label: "3. Login — high fidelity" },
      { src: sabziSignup.url, label: "4. Sign up — high fidelity" },
      { src: sabziHome.url, label: "5. Home — high fidelity" },
      { src: sabziCategories.url, label: "6. Categories — high fidelity" },
      { src: sabziVegetables.url, label: "7. Vegetables — high fidelity" },
      { src: sabziCheckout.url, label: "8. Checkout — high fidelity" },
      { src: sabziPayment.url, label: "9. Payment — high fidelity" },
      { src: sabziPaymentSuccess.url, label: "10. Payment success — high fidelity" },
      { src: sabziMyOrders.url, label: "11. My orders — high fidelity" },
      { src: sabziProfile.url, label: "12. Profile — high fidelity" },
      { src: sabziSabzibot.url, label: "13. SabziBot — high fidelity" },
      { src: sabziVoice.url, label: "14. Voice shopping — high fidelity" },
      { src: sabziTrackOrder.url, label: "15. Track order — high fidelity" },
    ],

    hasDesignSystem: true,
  },
  {
    id: "mindease",
    title: "MindEase",
    tag: "Mental Wellness · Healthcare",
    blurb:
      "A calm, accessible wellness platform helping students and professionals manage stress, anxiety, and burnout.",
    role: "UI/UX Designer",
    timeline: "6 weeks",
    tools: "Figma · FigJam",
    image: mindeaseImg,
    metrics: [
      { label: "User clarity", value: "+40%" },
      { label: "Navigation confusion", value: "−35%" },
      { label: "Emotional accessibility", value: "↑" },
    ],
    deliverables: ["Research", "Flows", "Wireframes", "Prototype", "Design system"],
    hasDesignSystem: true,
    wireframeImages: [
      { src: mindeaseLowFiSketches.url, label: "Low-fidelity sketches — Pen & paper exploration" },
      { src: mindeaseSplash.url, label: "1. Splash Screen" },
      { src: mindeaseOnboarding.url, label: "2. Onboarding — Welcome" },
      { src: mindeaseMoodDashboard.url, label: "3. Home — Mood Dashboard" },
      { src: mindeaseMoodDashboardMobile.url, label: "4. Home — Mood Dashboard (Alt)" },
      { src: mindeaseWellnessDashboard.url, label: "5. Wellness Dashboard" },
      { src: mindeaseCheckin.url, label: "6. Daily Emotional Check-in" },
      { src: mindeaseMeditation.url, label: "7. Meditation & Breathing" },
      { src: mindeaseBoxBreathing.url, label: "8. Box Breathing" },
      { src: mindeaseNotifications.url, label: "9. Daily Pulse — Notifications" },
      { src: mindeaseWellnessReminders.url, label: "10. Wellness Reminders" },
      { src: mindeaseAiAssistant.url, label: "11. AI Wellness Assistant" },
      { src: mindeaseTherapistSearch.url, label: "12. Therapist Search" },
      { src: mindeaseBooking.url, label: "13. Therapist Booking" },
      { src: mindeaseAnalytics.url, label: "14. Progress Analytics" },
      { src: mindeaseProfile.url, label: "15. User Profile" },
      { src: mindeaseSettings.url, label: "16. Settings" },
    ],
  },
];

function ProjectsSection() {
  return (
    <section id="work" className="py-12 md:py-16 relative">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="flex items-end justify-between flex-wrap gap-4">
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-primary">Selected work</div>
              <h2 className="mt-4 font-display text-4xl md:text-5xl font-semibold leading-tight">
                Case studies in clarity & care.
              </h2>
            </div>
            <p className="max-w-sm text-sm text-muted-foreground">
              Four projects across healthcare wellness, behavioral UX, AgriTech, and desktop marketplace platforms —
              each shaped by research, systems thinking, and human behavior.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 space-y-10">
          {projects.map((p, i) => (
            <Reveal key={p.id} delay={0.05}>
              <motion.article
                whileHover={{ y: -2 }}
                className={`grid md:grid-cols-12 gap-8 items-center glass rounded-3xl p-6 md:p-10 transition ${
                  i % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""
                }`}
              >
                <div className="md:col-span-7">
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden ring-hairline">
                    {p.video ? (
                      <video
                        src={p.video}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="size-full object-cover transition duration-700 hover:scale-[1.04]"
                      />
                    ) : (
                      <img
                        src={p.image}
                        alt={`${p.title} case study preview`}
                        width={1280}
                        height={960}
                        className="size-full object-cover transition duration-700 hover:scale-[1.04]"
                      />
                    )}
                  </div>
                </div>
                <div className="md:col-span-5">
                  <div className="text-[11px] uppercase tracking-widest text-primary">
                    {p.tag}
                  </div>
                  <h3 className="mt-3 font-display text-3xl font-semibold">{p.title}</h3>
                  <p className="mt-3 text-muted-foreground leading-relaxed">{p.blurb}</p>

                  <dl className="mt-6 grid grid-cols-2 gap-y-3 gap-x-6 text-sm">
                    <div>
                      <dt className="text-muted-foreground text-xs">Role</dt>
                      <dd>{p.role}</dd>
                    </div>
                    <div>
                      <dt className="text-muted-foreground text-xs">Timeline</dt>
                      <dd>{p.timeline}</dd>
                    </div>
                    <div className="col-span-2">
                      <dt className="text-muted-foreground text-xs">Tools</dt>
                      <dd>{p.tools}</dd>
                    </div>
                  </dl>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {p.metrics.map((m) => (
                      <div
                        key={m.label}
                        className="rounded-full glass px-3 py-1 text-xs"
                      >
                        <span className="font-semibold text-gradient-orange">{m.value}</span>{" "}
                        <span className="text-muted-foreground">{m.label}</span>
                      </div>
                    ))}
                  </div>




                  {(p.caseStudyUrl || p.prototypeUrl) && (
                    <a
                      href={p.caseStudyUrl || p.prototypeUrl}
                      target={p.caseStudyUrl && p.caseStudyUrl.startsWith("/") ? "_self" : "_blank"}
                      rel="noreferrer"
                      className={`mt-6 inline-flex items-center gap-2 rounded-full text-white px-5 py-2.5 text-sm font-medium hover:opacity-90 transition ${
                        p.id === "marketplace-connect"
                          ? "gradient-blue"
                          : p.id === "sabzikart"
                            ? "gradient-green"
                            : "gradient-orange"
                      }`}
                    >
                      View Full Case Study <ArrowUpRight className="size-4" />
                    </a>
                  )}
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------- Marketplace Design System ---------------------------- */

const dsPalettes: { name: string; shades: { label: string; hex: string; rgb: string }[] }[] = [
  {
    name: "Red",
    shades: [
      { label: "Light", hex: "#ffe6ee", rgb: "rgb(255, 230, 238)" },
      { label: "Light :hover", hex: "#ffd9e5", rgb: "rgb(255, 217, 229)" },
      { label: "Light :active", hex: "#ffb0c9", rgb: "rgb(255, 176, 201)" },
      { label: "Normal", hex: "#ff0051", rgb: "rgb(255, 0, 81)" },
      { label: "Normal :hover", hex: "#e60049", rgb: "rgb(230, 0, 73)" },
      { label: "Normal :active", hex: "#cc0041", rgb: "rgb(204, 0, 65)" },
      { label: "Dark", hex: "#bf003d", rgb: "rgb(191, 0, 61)" },
      { label: "Dark :hover", hex: "#990031", rgb: "rgb(153, 0, 49)" },
      { label: "Dark :active", hex: "#730024", rgb: "rgb(115, 0, 36)" },
      { label: "Darker", hex: "#59001c", rgb: "rgb(89, 0, 28)" },
    ],
  },
  {
    name: "Grey",
    shades: [
      { label: "Light", hex: "#fafafa", rgb: "rgb(250, 250, 250)" },
      { label: "Light :hover", hex: "#f8f8f8", rgb: "rgb(248, 248, 248)" },
      { label: "Light :active", hex: "#f1f1f1", rgb: "rgb(241, 241, 241)" },
      { label: "Normal", hex: "#d1d1d1", rgb: "rgb(209, 209, 209)" },
      { label: "Normal :hover", hex: "#bcbcbc", rgb: "rgb(188, 188, 188)" },
      { label: "Normal :active", hex: "#a7a7a7", rgb: "rgb(167, 167, 167)" },
      { label: "Dark", hex: "#9d9d9d", rgb: "rgb(157, 157, 157)" },
      { label: "Dark :hover", hex: "#7d7d7d", rgb: "rgb(125, 125, 125)" },
      { label: "Dark :active", hex: "#5e5e5e", rgb: "rgb(94, 94, 94)" },
      { label: "Darker", hex: "#494949", rgb: "rgb(73, 73, 73)" },
    ],
  },
  {
    name: "Blue",
    shades: [
      { label: "Light", hex: "#e6efff", rgb: "rgb(230, 239, 255)" },
      { label: "Light :hover", hex: "#d9e7ff", rgb: "rgb(217, 231, 255)" },
      { label: "Light :active", hex: "#b0cdff", rgb: "rgb(176, 205, 255)" },
      { label: "Normal", hex: "#005dff", rgb: "rgb(0, 93, 255)" },
      { label: "Normal :hover", hex: "#0054e6", rgb: "rgb(0, 84, 230)" },
      { label: "Normal :active", hex: "#004acc", rgb: "rgb(0, 74, 204)" },
      { label: "Dark", hex: "#0046bf", rgb: "rgb(0, 70, 191)" },
      { label: "Dark :hover", hex: "#003899", rgb: "rgb(0, 56, 153)" },
      { label: "Dark :active", hex: "#002a73", rgb: "rgb(0, 42, 115)" },
      { label: "Darker", hex: "#002159", rgb: "rgb(0, 33, 89)" },
    ],
  },
];

const dsTypeScale = [
  { name: "Display / H1", family: "Archivo Bold", size: 64, line: 84 },
  { name: "Display / H2", family: "Archivo Bold", size: 48, line: 68 },
  { name: "Heading / H3", family: "Inter Semi Bold", size: 48, line: 58 },
  { name: "Heading / H4", family: "Archivo Regular", size: 40, line: 56 },
  { name: "Subtitle", family: "Archivo Regular", size: 24, line: 36 },
  { name: "Body", family: "Inter Regular", size: 16, line: 24 },
];

function MarketplaceDesignSystem() {
  return (
    <div className="mt-2 space-y-10">
      {/* Fonts */}
      <section>
        <div className="text-[11px] uppercase tracking-[0.18em] text-neutral-500 mb-3">Fonts</div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {[
            { n: "1", name: "Archivo", css: "'Archivo', sans-serif" },
            { n: "2", name: "Inter", css: "'Inter', sans-serif" },
            { n: "3", name: "Nunito", css: "'Nunito', sans-serif" },
          ].map((f) => (
            <div key={f.name} className="rounded-xl border border-neutral-200 p-5 bg-white">
              <div className="text-[10px] uppercase tracking-[0.2em] text-neutral-400">Font: {f.n}</div>
              <div className="text-sm font-semibold text-neutral-700">{f.name}</div>
              <div className="mt-3 text-4xl text-neutral-900" style={{ fontFamily: f.css }}>
                AaBbCc
              </div>
              <p className="mt-3 text-[11px] text-neutral-500 leading-relaxed" style={{ fontFamily: f.css }}>
                Juxtaposing sleek typography with vibrant hues, the quirky zebra dances amidst carefully crafted patterns. 0123456789
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Type scale */}
      <section>
        <div className="text-[11px] uppercase tracking-[0.18em] text-neutral-500 mb-3">Typography Scale</div>
        <div className="space-y-2">
          {dsTypeScale.map((t) => (
            <div key={t.name} className="rounded-lg border border-neutral-200 bg-white p-5">
              <div className="text-[10px] uppercase tracking-[0.2em] text-neutral-400">{t.name}</div>
              <div
                className="mt-2 text-neutral-900 font-semibold leading-tight"
                style={{ fontSize: Math.min(t.size, 56), lineHeight: `${Math.min(t.line, 72)}px` }}
              >
                AABBCC
              </div>
              <div className="mt-3 flex flex-wrap gap-x-6 gap-y-1 text-[11px] text-neutral-500">
                <span>Font Family: <strong className="text-neutral-700">{t.family}</strong></span>
                <span>Font Size: <strong className="text-neutral-700">{t.size}px</strong></span>
                <span>Line Height: <strong className="text-neutral-700">{t.line}px</strong></span>
                <span>Letter Spacing: <strong className="text-neutral-700">0%</strong></span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Color palettes */}
      <section>
        <div className="text-[11px] uppercase tracking-[0.18em] text-neutral-500 mb-3">Color Palette</div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {dsPalettes.map((pal) => (
            <div key={pal.name} className="rounded-xl border border-neutral-200 p-5 bg-white">
              <h4 className="text-2xl font-semibold text-neutral-900 mb-4">{pal.name}</h4>
              <div className="space-y-2">
                {pal.shades.map((s) => (
                  <div key={s.label} className="flex items-center gap-3">
                    <div
                      className="h-10 w-28 rounded-md shrink-0 border border-neutral-200"
                      style={{ background: s.hex }}
                    />
                    <div className="min-w-0">
                      <div className="text-xs font-medium text-neutral-800 truncate">{s.label}</div>
                      <div className="text-[10px] text-neutral-500 font-mono">{s.hex}</div>
                      <div className="text-[10px] text-neutral-400 font-mono truncate">{s.rgb}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}


/* ---------------------------- SabziKart Design System ---------------------------- */

const sabziPalettes: { name: string; shades: { label: string; hex: string; rgb: string }[] }[] = [
  {
    name: "Sprout Green",
    shades: [
      { label: "Light", hex: "#eef6e6", rgb: "rgb(238, 246, 230)" },
      { label: "Light :hover", hex: "#e0eed3", rgb: "rgb(224, 238, 211)" },
      { label: "Light :active", hex: "#d4e8c4", rgb: "rgb(212, 232, 196)" },
      { label: "Normal", hex: "#c8e1b6", rgb: "rgb(200, 225, 182)" },
      { label: "Normal :hover", hex: "#b6d6a0", rgb: "rgb(182, 214, 160)" },
      { label: "Normal :active", hex: "#a3c98a", rgb: "rgb(163, 201, 138)" },
      { label: "Dark", hex: "#8fb976", rgb: "rgb(143, 185, 118)" },
      { label: "Dark :hover", hex: "#739a5c", rgb: "rgb(115, 154, 92)" },
      { label: "Dark :active", hex: "#577a44", rgb: "rgb(87, 122, 68)" },
      { label: "Darker", hex: "#3d5a2f", rgb: "rgb(61, 90, 47)" },
    ],
  },
  {
    name: "Harvest Green",
    shades: [
      { label: "Light", hex: "#eaf3e1", rgb: "rgb(234, 243, 225)" },
      { label: "Light :hover", hex: "#d7e9c6", rgb: "rgb(215, 233, 198)" },
      { label: "Light :active", hex: "#c3dfa9", rgb: "rgb(195, 223, 169)" },
      { label: "Normal", hex: "#9ec783", rgb: "rgb(158, 199, 131)" },
      { label: "Normal :hover", hex: "#8bb86f", rgb: "rgb(139, 184, 111)" },
      { label: "Normal :active", hex: "#78a85b", rgb: "rgb(120, 168, 91)" },
      { label: "Dark", hex: "#5f8c45", rgb: "rgb(95, 140, 69)" },
      { label: "Dark :hover", hex: "#4b7035", rgb: "rgb(75, 112, 53)" },
      { label: "Dark :active", hex: "#385428", rgb: "rgb(56, 84, 40)" },
      { label: "Darker", hex: "#26391b", rgb: "rgb(38, 57, 27)" },
    ],
  },
  {
    name: "Stone Grey",
    shades: [
      { label: "Light", hex: "#f4f5f3", rgb: "rgb(244, 245, 243)" },
      { label: "Light :hover", hex: "#e9ebe8", rgb: "rgb(233, 235, 232)" },
      { label: "Light :active", hex: "#d8dbd6", rgb: "rgb(216, 219, 214)" },
      { label: "Normal", hex: "#a5aaa1", rgb: "rgb(165, 170, 161)" },
      { label: "Normal :hover", hex: "#919690", rgb: "rgb(145, 150, 144)" },
      { label: "Normal :active", hex: "#7d827c", rgb: "rgb(125, 130, 124)" },
      { label: "Dark", hex: "#686d68", rgb: "rgb(104, 109, 104)" },
      { label: "Dark :hover", hex: "#525652", rgb: "rgb(82, 86, 82)" },
      { label: "Dark :active", hex: "#3d403d", rgb: "rgb(61, 64, 61)" },
      { label: "Darker", hex: "#272927", rgb: "rgb(39, 41, 39)" },
    ],
  },
];

const sabziTypeScale = [
  { name: "Display / H1", family: "Open Sans Bold", size: 64, line: 80 },
  { name: "Display / H2", family: "Open Sans Bold", size: 48, line: 60 },
  { name: "Heading / H3", family: "Open Sans SemiBold", size: 36, line: 48 },
  { name: "Heading / H4", family: "Open Sans SemiBold", size: 28, line: 38 },
  { name: "Subtitle", family: "Open Sans Regular", size: 20, line: 30 },
  { name: "Body", family: "Open Sans Regular", size: 16, line: 24 },
  { name: "Caption", family: "Open Sans Regular", size: 12, line: 18 },
];

function SabziDesignSystem() {
  const openSans = "'Open Sans', sans-serif";
  return (
    <div className="mt-2 space-y-10">
      {/* Brief */}
      <section className="rounded-xl border border-neutral-200 bg-[#f7faf3] p-6">
        <div className="text-[11px] uppercase tracking-[0.18em] text-[#5f8c45] mb-2">Design Brief</div>
        <p className="text-neutral-800 leading-relaxed" style={{ fontFamily: openSans }}>
          Assisting farmers in getting better gains by minimizing the gap between
          the farmers' market and consumers through direct purchase. The system is
          minimal, lively and rooted in nature — built to feel trustworthy at a glance.
        </p>
      </section>

      {/* Fonts */}
      <section>
        <div className="text-[11px] uppercase tracking-[0.18em] text-neutral-500 mb-3">Typography</div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="rounded-xl border border-neutral-200 p-5 bg-white">
            <div className="text-[10px] uppercase tracking-[0.2em] text-neutral-400">Primary Font</div>
            <div className="text-sm font-semibold text-neutral-700">Open Sans</div>
            <div className="mt-3 text-5xl text-neutral-900" style={{ fontFamily: openSans, fontWeight: 700 }}>
              AaBbCc
            </div>
            <p className="mt-3 text-xs text-neutral-500 leading-relaxed" style={{ fontFamily: openSans }}>
              A minimal and standard sans-serif font. Best suited for minimal,
              modern content — chosen for its simple, decent interface and high
              legibility across product, marketing, and dashboard surfaces.
            </p>
          </div>
          <div className="rounded-xl border border-neutral-200 p-5 bg-white">
            <div className="text-[10px] uppercase tracking-[0.2em] text-neutral-400">Weights</div>
            <div className="text-sm font-semibold text-neutral-700">Open Sans family</div>
            <div className="mt-3 space-y-1" style={{ fontFamily: openSans }}>
              <div className="text-lg text-neutral-900" style={{ fontWeight: 300 }}>Light · The quick brown fox</div>
              <div className="text-lg text-neutral-900" style={{ fontWeight: 400 }}>Regular · The quick brown fox</div>
              <div className="text-lg text-neutral-900" style={{ fontWeight: 600 }}>SemiBold · The quick brown fox</div>
              <div className="text-lg text-neutral-900" style={{ fontWeight: 700 }}>Bold · The quick brown fox</div>
              <div className="text-lg text-neutral-900" style={{ fontWeight: 800 }}>ExtraBold · The quick brown fox</div>
            </div>
          </div>
        </div>
      </section>

      {/* Type scale */}
      <section>
        <div className="text-[11px] uppercase tracking-[0.18em] text-neutral-500 mb-3">Typography Scale</div>
        <div className="space-y-2">
          {sabziTypeScale.map((t) => (
            <div key={t.name} className="rounded-lg border border-neutral-200 bg-white p-5">
              <div className="text-[10px] uppercase tracking-[0.2em] text-neutral-400">{t.name}</div>
              <div
                className="mt-2 text-neutral-900 leading-tight"
                style={{ fontFamily: openSans, fontSize: Math.min(t.size, 56), lineHeight: `${Math.min(t.line, 72)}px`, fontWeight: t.family.includes("Bold") ? 700 : t.family.includes("SemiBold") ? 600 : 400 }}
              >
                Fresh from the farm
              </div>
              <div className="mt-3 flex flex-wrap gap-x-6 gap-y-1 text-[11px] text-neutral-500">
                <span>Font Family: <strong className="text-neutral-700">{t.family}</strong></span>
                <span>Font Size: <strong className="text-neutral-700">{t.size}px</strong></span>
                <span>Line Height: <strong className="text-neutral-700">{t.line}px</strong></span>
                <span>Letter Spacing: <strong className="text-neutral-700">0%</strong></span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Core palette */}
      <section>
        <div className="text-[11px] uppercase tracking-[0.18em] text-neutral-500 mb-3">Core Palette</div>
        <p className="text-xs text-neutral-500 mb-4">
          Selected to maintain the minimal and liveliness of the app. Greens carry
          freshness and trust; the stone grey grounds the interface.
        </p>
        <div className="grid grid-cols-3 gap-3">
          {[
            { hex: "#c8e1b6", name: "Sprout" },
            { hex: "#9ec783", name: "Harvest" },
            { hex: "#a5aaa1", name: "Stone" },
          ].map((c) => (
            <div key={c.hex} className="rounded-xl border border-neutral-200 overflow-hidden bg-white">
              <div className="h-24" style={{ background: c.hex }} />
              <div className="p-3">
                <div className="text-sm font-semibold text-neutral-900">{c.name}</div>
                <div className="text-[11px] font-mono text-neutral-500">{c.hex}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Extended palettes */}
      <section>
        <div className="text-[11px] uppercase tracking-[0.18em] text-neutral-500 mb-3">Extended Palette</div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {sabziPalettes.map((pal) => (
            <div key={pal.name} className="rounded-xl border border-neutral-200 p-5 bg-white">
              <h4 className="text-2xl font-semibold text-neutral-900 mb-4" style={{ fontFamily: openSans }}>{pal.name}</h4>
              <div className="space-y-2">
                {pal.shades.map((s) => (
                  <div key={s.label} className="flex items-center gap-3">
                    <div
                      className="h-10 w-28 rounded-md shrink-0 border border-neutral-200"
                      style={{ background: s.hex }}
                    />
                    <div className="min-w-0">
                      <div className="text-xs font-medium text-neutral-800 truncate">{s.label}</div>
                      <div className="text-[10px] text-neutral-500 font-mono">{s.hex}</div>
                      <div className="text-[10px] text-neutral-400 font-mono truncate">{s.rgb}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}


/* ---------------------------- MindEase Design System ---------------------------- */

const mindeasePalettes: { name: string; shades: { label: string; hex: string; rgb: string }[] }[] = [
  {
    name: "Primary Lavender",
    shades: [
      { label: "Lightest", hex: "#f4eefb", rgb: "rgb(244, 238, 251)" },
      { label: "Light", hex: "#e9def5", rgb: "rgb(233, 222, 245)" },
      { label: "Light :hover", hex: "#d8c6ef", rgb: "rgb(216, 198, 239)" },
      { label: "Light :active", hex: "#c1a7e8", rgb: "rgb(193, 167, 232)" },
      { label: "Container", hex: "#8455ef", rgb: "rgb(132, 85, 239)" },
      { label: "Normal", hex: "#6b38d4", rgb: "rgb(107, 56, 212)" },
      { label: "Normal :hover", hex: "#5b2bbf", rgb: "rgb(91, 43, 191)" },
      { label: "Dark", hex: "#4a23a0", rgb: "rgb(74, 35, 160)" },
      { label: "Dark :active", hex: "#371b7a", rgb: "rgb(55, 27, 122)" },
      { label: "Darker", hex: "#241253", rgb: "rgb(36, 18, 83)" },
    ],
  },
  {
    name: "Surface Lavender",
    shades: [
      { label: "Lightest", hex: "#fbfaff", rgb: "rgb(251, 250, 255)" },
      { label: "Light", hex: "#f5f1f9", rgb: "rgb(245, 241, 249)" },
      { label: "Soft", hex: "#efe9f3", rgb: "rgb(239, 233, 243)" },
      { label: "Highest", hex: "#e7e0ed", rgb: "rgb(231, 224, 237)" },
      { label: "Tint", hex: "#d9d0e1", rgb: "rgb(217, 208, 225)" },
      { label: "Border", hex: "#c4b8ce", rgb: "rgb(196, 184, 206)" },
      { label: "Outline", hex: "#a89cb3", rgb: "rgb(168, 156, 179)" },
      { label: "Muted", hex: "#857a90", rgb: "rgb(133, 122, 144)" },
      { label: "Subtle", hex: "#5e5567", rgb: "rgb(94, 85, 103)" },
      { label: "Inverse", hex: "#2a2430", rgb: "rgb(42, 36, 48)" },
    ],
  },
  {
    name: "Mindful Neutral",
    shades: [
      { label: "Canvas", hex: "#ffffff", rgb: "rgb(255, 255, 255)" },
      { label: "Paper", hex: "#fafafb", rgb: "rgb(250, 250, 251)" },
      { label: "Stone Light", hex: "#f1f1f3", rgb: "rgb(241, 241, 243)" },
      { label: "Stone", hex: "#e4e4e8", rgb: "rgb(228, 228, 232)" },
      { label: "Stone :hover", hex: "#cfcfd5", rgb: "rgb(207, 207, 213)" },
      { label: "Ash", hex: "#a4a4ad", rgb: "rgb(164, 164, 173)" },
      { label: "Slate", hex: "#6c6c75", rgb: "rgb(108, 108, 117)" },
      { label: "Charcoal", hex: "#3f3f47", rgb: "rgb(63, 63, 71)" },
      { label: "Ink", hex: "#1f1f24", rgb: "rgb(31, 31, 36)" },
      { label: "Obsidian", hex: "#0d0d10", rgb: "rgb(13, 13, 16)" },
    ],
  },
];

const mindeaseTypeScale = [
  { name: "Display / H1", family: "Inter Bold", size: 64, line: 76 },
  { name: "Headline LG / H2", family: "Inter Bold", size: 48, line: 58 },
  { name: "Headline MD / H3", family: "Inter SemiBold", size: 32, line: 42 },
  { name: "Headline SM / H4", family: "Inter SemiBold", size: 24, line: 32 },
  { name: "Subtitle", family: "Inter Medium", size: 18, line: 28 },
  { name: "Body MD", family: "Inter Regular", size: 16, line: 24 },
  { name: "Body SM", family: "Inter Regular", size: 14, line: 22 },
  { name: "Caption", family: "Inter Regular", size: 12, line: 18 },
];

const mindeaseSpacing = [
  { token: "8px (sm)", px: 8 },
  { token: "16px (md)", px: 16 },
  { token: "24px (lg / margin)", px: 24 },
  { token: "32px (xl)", px: 32 },
  { token: "48px (2xl)", px: 48 },
  { token: "64px (3xl)", px: 64 },
];

function MindEaseDesignSystem() {
  const inter = "'Inter', sans-serif";
  return (
    <div className="mt-2 space-y-10">
      {/* Brief */}
      <section className="rounded-xl border border-neutral-200 bg-[#f5f1f9] p-6">
        <div className="text-[11px] uppercase tracking-[0.18em] text-[#6b38d4] mb-2">Design Brief</div>
        <p className="text-neutral-800 leading-relaxed" style={{ fontFamily: inter }}>
          Core identity tokens for the MindEase wellness sanctuary ecosystem. The
          system is calm, soft, and emotionally accessible — built to reduce
          cognitive load for students and professionals managing stress, anxiety,
          and burnout. Lavender anchors trust and serenity; generous whitespace
          and rounded geometry create breathing room.
        </p>
      </section>

      {/* Fonts */}
      <section>
        <div className="text-[11px] uppercase tracking-[0.18em] text-neutral-500 mb-3">Typography</div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="rounded-xl border border-neutral-200 p-5 bg-white">
            <div className="text-[10px] uppercase tracking-[0.2em] text-neutral-400">Primary Font</div>
            <div className="text-sm font-semibold text-neutral-700">Inter</div>
            <div className="mt-3 text-5xl text-neutral-900" style={{ fontFamily: inter, fontWeight: 700 }}>
              AaBbCc
            </div>
            <p className="mt-3 text-xs text-neutral-500 leading-relaxed" style={{ fontFamily: inter }}>
              A neutral, highly-legible humanist sans-serif. Inter sets a calm,
              non-clinical tone across onboarding, mood tracking, and therapist
              flows — accessible at small sizes and confident at display scale.
            </p>
          </div>
          <div className="rounded-xl border border-neutral-200 p-5 bg-white">
            <div className="text-[10px] uppercase tracking-[0.2em] text-neutral-400">Weights</div>
            <div className="text-sm font-semibold text-neutral-700">Inter family</div>
            <div className="mt-3 space-y-1" style={{ fontFamily: inter }}>
              <div className="text-lg text-neutral-900" style={{ fontWeight: 300 }}>Light · The quick brown fox</div>
              <div className="text-lg text-neutral-900" style={{ fontWeight: 400 }}>Regular · The quick brown fox</div>
              <div className="text-lg text-neutral-900" style={{ fontWeight: 500 }}>Medium · The quick brown fox</div>
              <div className="text-lg text-neutral-900" style={{ fontWeight: 600 }}>SemiBold · The quick brown fox</div>
              <div className="text-lg text-neutral-900" style={{ fontWeight: 700 }}>Bold · The quick brown fox</div>
            </div>
          </div>
        </div>
      </section>

      {/* Type scale */}
      <section>
        <div className="text-[11px] uppercase tracking-[0.18em] text-neutral-500 mb-3">Typography Scale</div>
        <div className="space-y-2">
          {mindeaseTypeScale.map((t) => (
            <div key={t.name} className="rounded-lg border border-neutral-200 bg-white p-5">
              <div className="text-[10px] uppercase tracking-[0.2em] text-neutral-400">{t.name}</div>
              <div
                className="mt-2 text-neutral-900 leading-tight"
                style={{
                  fontFamily: inter,
                  fontSize: Math.min(t.size, 56),
                  lineHeight: `${Math.min(t.line, 72)}px`,
                  fontWeight: t.family.includes("Bold") ? 700 : t.family.includes("SemiBold") ? 600 : t.family.includes("Medium") ? 500 : 400,
                }}
              >
                Calm Mind, Clear Spirit
              </div>
              <div className="mt-3 flex flex-wrap gap-x-6 gap-y-1 text-[11px] text-neutral-500">
                <span>Font Family: <strong className="text-neutral-700">{t.family}</strong></span>
                <span>Font Size: <strong className="text-neutral-700">{t.size}px</strong></span>
                <span>Line Height: <strong className="text-neutral-700">{t.line}px</strong></span>
                <span>Letter Spacing: <strong className="text-neutral-700">0%</strong></span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Core palette */}
      <section>
        <div className="text-[11px] uppercase tracking-[0.18em] text-neutral-500 mb-3">Core Palette</div>
        <p className="text-xs text-neutral-500 mb-4">
          Lavender carries serenity and trust; soft surfaces ground the interface
          without competing with content. Each token is tuned for emotional
          accessibility and high contrast on light backgrounds.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { hex: "#6b38d4", name: "Primary Lavender" },
            { hex: "#8455ef", name: "Primary Container" },
            { hex: "#e9def5", name: "Soft Lavender" },
            { hex: "#e7e0ed", name: "Surface Highest" },
          ].map((c) => (
            <div key={c.hex} className="rounded-xl border border-neutral-200 overflow-hidden bg-white">
              <div className="h-24" style={{ background: c.hex }} />
              <div className="p-3">
                <div className="text-sm font-semibold text-neutral-900">{c.name}</div>
                <div className="text-[11px] font-mono text-neutral-500">{c.hex}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Extended palettes */}
      <section>
        <div className="text-[11px] uppercase tracking-[0.18em] text-neutral-500 mb-3">Extended Palette</div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {mindeasePalettes.map((pal) => (
            <div key={pal.name} className="rounded-xl border border-neutral-200 p-5 bg-white">
              <h4 className="text-2xl font-semibold text-neutral-900 mb-4" style={{ fontFamily: inter }}>{pal.name}</h4>
              <div className="space-y-2">
                {pal.shades.map((s) => (
                  <div key={s.label} className="flex items-center gap-3">
                    <div
                      className="h-10 w-28 rounded-md shrink-0 border border-neutral-200"
                      style={{ background: s.hex }}
                    />
                    <div className="min-w-0">
                      <div className="text-xs font-medium text-neutral-800 truncate">{s.label}</div>
                      <div className="text-[10px] text-neutral-500 font-mono">{s.hex}</div>
                      <div className="text-[10px] text-neutral-400 font-mono truncate">{s.rgb}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Spacing system */}
      <section>
        <div className="text-[11px] uppercase tracking-[0.18em] text-neutral-500 mb-3">8px Spacing System</div>
        <p className="text-xs text-neutral-500 mb-4">
          Every spatial decision is a multiple of 8px — creating predictable
          rhythm across cards, buttons, and section padding.
        </p>
        <div className="rounded-xl border border-neutral-200 bg-white p-5 space-y-3">
          {mindeaseSpacing.map((s) => (
            <div key={s.token} className="flex items-center gap-4">
              <div className="rounded-sm bg-[#6b38d4]" style={{ width: s.px, height: s.px }} />
              <div className="text-sm text-neutral-800" style={{ fontFamily: inter }}>{s.token}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Core actions */}
      <section>
        <div className="text-[11px] uppercase tracking-[0.18em] text-neutral-500 mb-3">Core Actions</div>
        <div className="rounded-xl border border-neutral-200 bg-white p-5 space-y-3" style={{ fontFamily: inter }}>
          <button type="button" className="w-full rounded-full bg-[#6b38d4] text-white py-3 text-sm font-semibold hover:bg-[#5b2bbf] transition">
            Start Session
          </button>
          <button type="button" className="w-full rounded-full bg-[#e9def5] text-[#6b38d4] py-3 text-sm font-semibold hover:bg-[#d8c6ef] transition">
            View History
          </button>
          <button type="button" className="w-full rounded-full bg-[#f1f1f3] text-neutral-600 py-3 text-sm hover:bg-[#e4e4e8] transition text-left px-5">
            How are you feeling?
          </button>
        </div>
      </section>
    </div>
  );
}



function AboutSection() {
  return (
    <section id="about" className="py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-12 gap-12">
        <Reveal className="md:col-span-5">
          <div className="text-xs uppercase tracking-[0.2em] text-primary">About</div>
          <h2 className="mt-4 font-display text-4xl md:text-5xl font-semibold leading-tight">
            Human first. Systems second. Pixels last.
          </h2>
          <div className="mt-8 flex flex-wrap gap-2">
            {["Empathy", "Curiosity", "Accessibility", "Systems thinking", "Research-led"].map((t) => (
              <span key={t} className="rounded-full glass px-3 py-1 text-xs">{t}</span>
            ))}
          </div>
        </Reveal>

        <Reveal className="md:col-span-7" delay={0.1}>
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              My design education introduced me to color theory, gestalt, and the
              principles that quietly shape how humans interact with the world. I became
              curious about how people use digital surfaces in real life — at a local
              store, a bus stop, an airport — and whether the signs and screens around
              them were actually helping.
            </p>
            <p>
              I started interviewing strangers — elderly users, people in a rush, parents
              in crowded waiting rooms — and putting myself into those situations. The
              crucial problems weren&apos;t the obvious ones. Watching an elderly person
              struggle with a small phone screen permanently changed how I see
              &ldquo;simple&rdquo; interfaces.
            </p>
            <p>
              I work through observation, research, and iterative problem-solving —
              simplifying complex experiences into intuitive solutions. I&apos;m most at
              home in collaborative, research-driven teams building in healthcare,
              wellness, fintech, and other human-centered domains.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const passions = [
  { key: "philosophy", label: "Design Philosophy", icon: Compass,
    why: "Good design should simplify complexity, reduce cognitive stress, and feel intuitive, calm, and human-centered.",
    how: "It keeps me focused on clarity, accessibility, usability, and emotional comfort while solving real user problems." },
  { key: "learning", label: "Learning", icon: Lightbulb,
    why: "I constantly explore user behavior, healthcare systems, accessibility, and psychology to improve how I think.",
    how: "Continuous learning helps me make more informed, research-driven, empathetic design decisions." },
  { key: "experiments", label: "Experiments", icon: Beaker,
    why: "I experiment with interactions, storytelling, motion, and interface systems to find creative ways to solve problems.",
    how: "Experimentation pushes me beyond conventional solutions and creates more engaging experiences." },
  { key: "side", label: "Side Projects", icon: FolderOpen,
    why: "Side projects let me explore social-impact, healthcare, and human-centered ideas without structured constraints.",
    how: "They strengthen my ability to research, identify problems, and build meaningful solutions independently." },
  { key: "non-design", label: "Beyond Design", icon: Palette,
    why: "Sketching, illustration, fashion, cooking, photography — I stay creative and connected to human experiences.",
    how: "These interests sharpen storytelling, attention to detail, and emotional aesthetic in my work." },
];

function SketchesGallery() {
  return (
    <div className="pt-2">
      <div className="text-xs uppercase tracking-widest text-primary">Explore my sketches</div>
      <div className="mt-3 rounded-2xl overflow-hidden border border-border bg-background">
        <img
          src={sketchAsset.url}
          alt="Pencil sketches and illustrations by Anusha"
          className="w-full h-auto block"
        />
      </div>
      <p className="mt-3 text-xs text-muted-foreground">
        A glimpse of pencil work — portraits, observation studies and quiet everyday moments.
      </p>
    </div>
  );
}

function PassionsSection() {
  const [active, setActive] = useState(passions[0].key);
  const current = passions.find((p) => p.key === active)!;
  const Icon = current.icon;
  return (
    <section id="passions" className="py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="max-w-2xl">
          <div className="text-xs uppercase tracking-[0.2em] text-primary">What fuels me</div>
          <h2 className="mt-4 font-display text-4xl md:text-5xl font-semibold leading-tight">
            Passions that shape my practice.
          </h2>
        </Reveal>

        <div className="mt-12 flex flex-wrap gap-2">
          {passions.map((p) => (
            <button
              key={p.key}
              onClick={() => setActive(p.key)}
              className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm border transition hover:opacity-90 ${
                active === p.key
                  ? "bg-background text-foreground border-border"
                  : "bg-background text-muted-foreground border-border hover:text-foreground"
              }`}
            >
              <p.icon className="size-3.5" />
              {p.label}
            </button>
          ))}
        </div>

        <motion.div
          key={current.key}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 grid md:grid-cols-12 gap-8 glass rounded-3xl p-8 md:p-12"
        >
          <div className="md:col-span-4 flex md:flex-col items-start gap-4">
            <div className="size-14 rounded-2xl gradient-orange grid place-items-center text-white shadow-glow">
              <Icon className="size-6" />
            </div>
            <div className="font-display text-2xl font-semibold">{current.label}</div>
          </div>
          <div className="md:col-span-8 space-y-6">
            <div>
              <div className="text-xs uppercase tracking-widest text-primary">Why it matters</div>
              <p className="mt-2 text-muted-foreground leading-relaxed">{current.why}</p>
            </div>
            <div>
              <div className="text-xs uppercase tracking-widest text-primary">How it shapes my decisions</div>
              <p className="mt-2 text-muted-foreground leading-relaxed">{current.how}</p>
            </div>
            {current.key === "non-design" && <SketchesGallery />}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function SideProjectsSection() {
  return (
    <section id="side-projects" className="py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="max-w-2xl">
          <div className="text-xs uppercase tracking-[0.2em] text-primary">Side projects</div>
          <h2 className="mt-4 font-display text-4xl md:text-5xl font-semibold leading-tight">
            Work beyond the brief.
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Independent explorations in print, illustration, and storytelling — where I
            get to honour ideas that don't fit inside a product backlog.
          </p>
        </Reveal>
        <div className="mt-12 space-y-10">
          <UnpaidMaidShowcase />
          <SketchbookShowcase />
        </div>
      </div>
    </section>
  );
}

function UnpaidMaidShowcase() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="overflow-hidden rounded-3xl border border-border/60"
      style={{ background: "#faf6ec" }}
    >
      <div className="grid md:grid-cols-12 gap-0">
        {/* Cover image */}
        <div className="md:col-span-7 relative flex items-center justify-center p-6 md:p-8">
          <img
            src={unpaidMaidCover.url}
            alt="The Unpaid Maid — book cover design by Anusha Chandra"
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Story panel */}
        <div className="md:col-span-5 p-8 md:p-10 flex flex-col gap-5" style={{ color: "#111111" }}>
          <div className="flex items-center gap-3">
            <span
              className="inline-block px-3 py-1 rounded-full text-[10px] uppercase tracking-[0.2em]"
              style={{ background: "#e5bd00", color: "#000000" }}
            >
              Side Project — Print
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] opacity-70">2024</span>
          </div>

          <h3
            className="font-display text-4xl md:text-5xl italic leading-[1.05]"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            the unpaid<br />maid.
          </h3>

          <p className="text-sm leading-relaxed" style={{ color: "#3a3a3a" }}>
            A book cover design honouring Radha — and every homemaker whose labour goes
            unseen. The rough white brushstroke tears through the black field like a quiet
            rebellion: a housewife's work, finally visible. Yellow carries the warmth she
            pours into the home; black holds the weight of everything she carries without
            applause. The hand-drawn illustration of a woman cooking sits at the heart of
            the composition — small, devotional, ordinary, monumental.
          </p>

          <div className="grid grid-cols-2 gap-4 pt-2">
            <div>
              <div className="text-[10px] uppercase tracking-[0.2em] opacity-70">Palette</div>
              <div className="mt-2 flex items-center gap-2">
                <span className="size-5 rounded-sm border border-black/10" style={{ background: "#e5bd00" }} />
                <span className="size-5 rounded-sm border border-black/10" style={{ background: "#000000" }} />
                <span className="text-xs opacity-80">#e5bd00 · #000000</span>
              </div>
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-[0.2em] opacity-70">Typography</div>
              <div className="mt-2 text-xs opacity-80 leading-relaxed">
                Chapaza Italic<br />Times New Roman
              </div>
            </div>
          </div>

          <div className="pt-2">
            <div className="text-[10px] uppercase tracking-[0.2em] opacity-70 mb-3">Visual language</div>
            <ul className="text-xs space-y-1.5 opacity-90">
              <li>— Brushstroke as metaphor for unseen labour</li>
              <li>— Yellow title as the quiet act of being noticed</li>
              <li>— Black field as strength, mystery, and barrier</li>
              <li>— Hand illustration anchoring the cultural narrative</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Anatomy strip */}
      <div className="border-t" style={{ borderColor: "rgba(0,0,0,0.08)", background: "#f3ecd9" }}>
        <div className="p-6 md:p-8">
          <div className="flex items-center justify-between mb-4">
            <div className="text-[10px] uppercase tracking-[0.2em]" style={{ color: "#111111" }}>
              Anatomy of the cover
            </div>
            <div className="text-[10px] uppercase tracking-[0.2em] opacity-50" style={{ color: "#111111" }}>
              Annotated breakdown
            </div>
          </div>
          <img
            src={unpaidMaidAnatomy.url}
            alt="Annotated anatomy of The Unpaid Maid cover design"
            className="w-full rounded-xl"
          />
        </div>
      </div>
    </motion.div>
  );
}

function SketchbookShowcase() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="overflow-hidden rounded-3xl border border-border/60 bg-card"
    >
      <div className="grid md:grid-cols-12 gap-0">
        <div className="md:col-span-4 p-8 md:p-10 flex flex-col gap-5 border-b md:border-b-0 md:border-r border-border/60">
          <div className="flex items-center gap-3">
            <span className="inline-block px-3 py-1 rounded-full text-[10px] uppercase tracking-[0.2em] bg-foreground text-background">
              Sketchbook
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              Pencil
            </span>
          </div>
          <h3 className="font-display text-3xl md:text-4xl font-semibold leading-[1.1]">
            Quiet hours with a pencil.
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Observational studies — birds, portraits, animals. Drawing is where I slow
            down, study proportion, and train the eye that later shows up in every
            interface I design.
          </p>
          <div className="pt-2">
            <div className="text-[10px] uppercase tracking-[0.2em] text-primary mb-2">Medium</div>
            <div className="text-xs text-muted-foreground">Graphite on paper</div>
          </div>
        </div>

        <div className="md:col-span-8 p-4 md:p-6 bg-muted/30 flex items-center justify-center">
          <img
            src={pencilSketches.url}
            alt="Pencil sketches by Anusha Chandra — peacock, surreal portrait, pug"
            className="w-full h-auto object-contain rounded-2xl"
          />
        </div>
      </div>
    </motion.div>
  );
}

// __PASSIONS_END__

const testimonials = [
  {
    quote:
      "I had an opportunity to work with Anusha, She is a highly empathetic designer who genuinely cares about understanding people and their needs. This quality makes her an excellent UX designer. She also inspires and motivates other designers to stay consistent and keep growing. Wishing her all the best for a bright and successful future in UX Design.",
    result: "Built a culture of empathy-driven design and team-wide growth.",
    name: "Siddesh Shimpi",
    designation: "UI/UX Designer",
    photo: siddeshPhoto.url,
  },
  {
    quote:
      "Demonstrates strong empathy-driven thinking and approaches design problems with curiosity, research, and attention to user behavior. Her ability to simplify complex challenges stands out.",
    result: "Improved user clarity and accessibility across healthcare, wellness, and fintech concepts.",
    name: "Peer review",
    designation: "UI/UX Designer",
    photo: null,
  },
  {
    quote:
      "Her work reflects a strong understanding of human-centered design and systems thinking. She consistently transforms real-world problems into intuitive, meaningful experiences.",
    result: "Developed impactful UX concepts in mental wellness, financial trust, and social impact.",
    name: "Mentor",
    designation: "Product Design",
    photo: null,
  },
];

function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="flex items-end justify-between flex-wrap gap-4">
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-primary">
                Words from collaborators
              </div>
              <h2 className="mt-4 font-display text-4xl md:text-5xl font-semibold leading-tight">
                What people say about working with me.
              </h2>
            </div>
            <Sparkles className="size-6 text-primary hidden md:block" />
          </div>
        </Reveal>

        <motion.div
          className="mt-14 grid md:grid-cols-3 gap-6"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          {testimonials.map((t, i) => (
            <motion.figure
              key={i}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              className="glass rounded-3xl p-7 flex flex-col gap-5 transition"
            >
              <div className="text-primary font-display text-4xl leading-none">&ldquo;</div>
              <blockquote className="text-sm leading-relaxed text-foreground">
                {t.quote}
              </blockquote>
              <div className="mt-auto pt-4 border-t border-border">
                <div className="text-xs text-primary font-medium">Result</div>
                <div className="mt-1 text-xs text-muted-foreground leading-relaxed">
                  {t.result}
                </div>
                <div className="mt-4 flex items-center gap-3">
                  {t.photo && (
                    <img
                      src={t.photo}
                      alt={t.name}
                      className="size-10 rounded-full object-cover ring-2 ring-primary/20"
                    />
                  )}
                  <div>
                    <div className="text-sm font-medium text-foreground">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.designation}</div>
                  </div>
                </div>
              </div>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="py-12 md:py-16 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,oklch(0.78_0.16_55/0.15),transparent_60%)]" />
      <div className="mx-auto max-w-5xl px-6 text-center">
        <Reveal>
          <div className="text-xs uppercase tracking-[0.2em] text-primary">Let&apos;s build</div>
          <h2 className="mt-4 font-display text-5xl md:text-7xl font-semibold leading-[1.05] tracking-tight text-balance">
            Looking to invite a thoughtful
            <br /> designer to the{" "}
            <span className="text-gradient-orange">interview table?</span>
          </h2>
          <p className="mt-6 text-muted-foreground max-w-xl mx-auto">
            I&apos;m open to Product Designer, UI/UX Designer, Healthcare UX, and UX
            Researcher roles — remote or based in Hyderabad. Happy to walk you through my
            process.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center gap-2 rounded-full gradient-orange text-white px-6 py-3 text-sm font-medium transition hover:opacity-90"
            >
              <Mail className="size-4" /> {EMAIL}
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-medium hover:text-foreground hover:opacity-90 transition"
            >
              <Linkedin className="size-4" /> LinkedIn
            </a>
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-medium hover:text-foreground hover:opacity-90 transition"
            >
              <FileDown className="size-4" /> Resume
            </a>
          </div>
        </Reveal>

        <div className="mt-20 pt-10 border-t border-border flex flex-wrap items-center justify-between gap-4 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} <span className="font-name text-muted-foreground">Anusha Chandra</span>. Designed with care.</div>
          <div className="flex gap-6">
            <span>Hyderabad, India</span>
            <span>Open to remote</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Index() {
  return (
    <main className="min-h-screen">
      <Nav />
      <Hero />
      
      <ProjectsSection />
      <StorySection />
      <AboutSection />
      <SideProjectsSection />
      
      <PassionsSection />
      <TestimonialsSection />
      <ContactSection />
    </main>
  );
}
