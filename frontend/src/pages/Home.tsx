import Header from "./Header";
import "../style/Home.css";
import { useEffect, useRef, useState } from "react";

// ─── Framer Motion ────────────────────────────────────────────────────────────
import {
  motion,
  AnimatePresence,
  useInView,
  useAnimation,
  useMotionValue,
  useSpring,
} from "motion/react";
import type { Variants } from "motion/react";

// ─── Shared animation variants ───────────────────────────────────────────────
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: (delay = 0) => ({
    opacity: 1,
    transition: { duration: 0.55, ease: "easeOut", delay },
  }),
};

const slideLeft: Variants = {
  hidden: { opacity: 0, x: -48 },
  visible: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

const slideRight: Variants = {
  hidden: { opacity: 0, x: 48 },
  visible: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.88 },
  visible: (delay = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const staggerItem: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

// ─── Reusable scroll-triggered wrapper ───────────────────────────────────────
function InView({
  children,
  variants = fadeUp,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  variants?: Variants;
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px 0px" } as Parameters<typeof useInView>[1]);
  const controls = useAnimation();

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={controls}
      variants={variants}
      custom={delay}
    >
      {children}
    </motion.div>
  );
}

// ─── Animated counting number ─────────────────────────────────────────────────
function AnimatedCounter({
  value,
  prefix = "",
}: {
  value: string;
  prefix?: string;
}) {
  // Parse out the raw integer and any suffix like '+' or '%'
  const suffix = value.replace(/[\d,]/g, ""); // e.g. '+' or '%'
  const raw = parseInt(value.replace(/[^\d]/g, ""), 10); // numeric part

  const motionVal = useMotionValue(0);
  const spring = useSpring(motionVal, { stiffness: 60, damping: 20, mass: 0.8 });
  const [display, setDisplay] = useState("0");

  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px 0px" } as Parameters<typeof useInView>[1]);

  useEffect(() => {
    if (inView) motionVal.set(raw);
  }, [inView, motionVal, raw]);

  useEffect(() => {
    const unsubscribe = spring.on("change", (latest) => {
      setDisplay(
        Math.round(latest).toLocaleString("en-IN")
      );
    });
    return unsubscribe;
  }, [spring]);

  return (
    <span
      ref={ref}
      style={{
        fontSize: "inherit",
        fontWeight: "inherit",
        color: "inherit",
        fontFamily: "inherit",
        lineHeight: "inherit",
        letterSpacing: "inherit",
      }}
    >
      {prefix}{display}{suffix}
    </span>
  );
}

// ─── Data ─────────────────────────────────────────────────────────────────────
type Voice = {
  name: string;
  role: string;
  quote: string;
  photo: string;
  photoAlt: string;
};

const voices: Voice[] = [
  {
    name: "Mayur Deshmukh",
    role: "IFS · Worked with NCF during Covid",
    quote:
      "The kind of work which NCF does serves the most needy people and helps the ones at the bottom of the pyramid. Their job has the potential to really bring change at the ground level.",
    photo: "./images/mayur-deshmukh.webp",
    photoAlt: "Mayur Deshmukh and a colleague smiling together",
  },
  {
    name: "Deepak Kumar",
    role: "AGM (Engg - Civil), Airports Authority of India, Kolkata Airport · Visited our classrooms",
    quote:
      "Visiting their ground-level classrooms allowed me to see firsthand the incredible impact they have on underprivileged children in mining and tribal communities. I am incredibly proud to support an organization that brings real education, nutrition, and hope.",
    photo: "./images/deepak-kumar.webp",
    photoAlt: "Deepak Kumar",
  },
];

const photos = [
  {
    src: "./images/download-28ac8326.webp",
    alt: "An elderly woman smiling with folded hands among community members",
  },
  {
    src: "./images/download-90f18b6b.webp",
    alt: "A girl holding a steel plate in a queue for food",
  },
  {
    src: "./images/download-491d82b5.webp",
    alt: "A child holding a blue basin as food is served",
  },
  {
    src: "./images/download-316413a0.webp",
    alt: "A smiling girl holding a steel plate",
  },
  {
    src: "./images/download-1931452f.webp",
    alt: "A smiling girl holding a steel plate",
  },
  {
    src: "./images/download-c77ea9b1.webp",
    alt: "A smiling girl holding a steel plate",
  },
  {
    src: "./images/download-c6556126.webp",
    alt: "A smiling girl holding a steel plate",
  },
  {
    src: "./images/download-ce126438.webp",
    alt: "A smiling girl holding a steel plate",
  },
  {
    src: "./images/download-de79fbc1.webp",
    alt: "A smiling girl holding a steel plate",
  },
];

const corporate = {
  title: "CSR and corporate partnerships",
  lede: "A corporate partnership with NCF can help companies channel their CSR efforts towards community-led programmes that address real needs on the ground.",
  facts: [
    {
      label: "Focus areas",
      value: "Education, hunger and nutrition, elderly care and livelihoods",
    },
    {
      label: "Ways to support",
      value:
        "Programme funding, long-term projects, employee engagement, in-kind support",
    },
  ],
  cta: { label: "Partner with us", href: "/partner" },
};

const volunteer = {
  title: "Volunteer with NCF",
  lede: "Experience community work at the grassroots level and understand the realities faced by underserved communities. Through field activities, education, elderly care, livelihood initiatives, content, research or outreach, your time and skills can create meaningful change.",
  intro: "As an NCF volunteer, you will",
  benefits: [
    "Gain hands-on grassroots experience with communities and field initiatives",
    "Understand how community-based programmes are planned and implemented",
    "Develop skills in communication, teamwork, leadership and community engagement",
    "Work alongside a team committed to sustainable impact",
    "Receive a Certificate of Service recognising your contribution to NCF",
  ],
  cta: { label: "Join us as a volunteer", href: "/volunteer" },
};

const faqs = [
  {
    q: "What is Nand Care Foundation?",
    a: "Nand Care Foundation is a grassroots organisation working with tribal communities and coal-mining families on education, hunger relief, healthcare and livelihoods, and responding to the needs of children, families and elderly people.",
  },
  {
    q: "How are donations used?",
    a: "Donations help us run and strengthen our grassroots programmes. Depending on the programme and community needs, contributions may support nutritious food and cooked meals, elderly care and healthcare support, education, livelihood training, essential supplies and other programme-related activities.", // TODO
  },
  {
    q: "Will I receive a receipt for my donation?",
    a: "Yes. A digital donation receipt will be issued for successful donations and sent to the email address provided during the donation process.", // TODO
  },
  {
    q: "Is my donation eligible for an 80G tax deduction?",
    a: "Yes. Nand Care Foundation is registered under Section 80G of the Income Tax Act, and eligible donations made to NCF qualify for tax benefits as per the applicable provisions and prevailing rules.Please retain your donation receipt for your tax records.",
  },
  {
    q: "What if my payment is deducted but my donation is not confirmed?",
    a: "If the amount has been deducted from your account but you have not received a confirmation or receipt, please contact our team with your transaction details, payment date and registered email or phone number. We will verify the transaction and assist you.", // TODO
  },
];

const columns = [
  {
    title: "Causes",
    links: [{ label: "Elderly care", href: "/causes/elderly-care" }],
  },
  {
    title: "About us",
    links: [
      { label: "The entity", href: "/about" },
      { label: "Vision & mission", href: "/vision-mission" },
      { label: "Reach & scale", href: "/reach" },
    ],
  },
  {
    title: "Discover",
    links: [
      { label: "Home", href: "/" },
      { label: "Impact stories", href: "/impact-stories" },
      { label: "Areas we work", href: "/areas" },
      { label: "Blog", href: "/blog" },
      { label: "Donor dashboard", href: "/dashboard" },
      { label: "Contact us", href: "/contact" },
    ],
  },
];

const legal = [
  { label: "Privacy policy", href: "/privacy" },
  { label: "Terms of use", href: "/terms" },
  { label: "Refund & cancellation", href: "/refund" },
  { label: "Donation policy", href: "/donation-policy" },
];

const socials = [
  {
    label: "Facebook",
    href: "#", // TODO: add your Facebook URL
    icon: (
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    ),
  },
  {
    label: "Instagram",
    href: "#", // TODO: add your Instagram URL
    icon: (
      <>
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <path d="M17.5 6.5h.01" />
      </>
    ),
  },
  {
    label: "LinkedIn",
    href: "#", // TODO: add your LinkedIn URL
    icon: (
      <>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </>
    ),
  },
];

const stats = [
  { number: "50,000+", label: "Families reached" },
  { number: "15+", label: "Coaching centres" },
  { number: "1,200+", label: "Children impacted" },
  { number: "5,000+", label: "Elderly people reached" },
];

const trustItems = [
  { title: "Section 80G", sub: "50% tax exemption" },
  { title: "12A registered", sub: "Income Tax Department" },
  { title: "NITI Aayog Darpan", sub: "Govt. of India portal" },
  { title: "MCA compliant", sub: "CIN U85320DL2019NPL358219" },
];

// ─── Component ────────────────────────────────────────────────────────────────
export default function Home() {
  const [amount, setAmount] = useState(2500);
  const [customAmount, setCustomAmount] = useState("");

  const presetAmounts = [1000, 2500, 5000];

  const [active, setActive] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const voice = voices[active];

  const stripRef = useRef<HTMLUListElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const update = () => {
    const el = stripRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 2);
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 2);
  };

  useEffect(() => {
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const step = (dir: 1 | -1) => {
    const el = stripRef.current;
    const card = el?.firstElementChild as HTMLElement | null;
    if (!el || !card) return;
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    el.scrollBy({
      left: dir * (card.getBoundingClientRect().width + 16),
      behavior: reduce ? "auto" : "smooth",
    });
  };

  const move = (next: number) => {
    setActive(next);
    tabRefs.current[next]?.focus();
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      move((active + 1) % voices.length);
    }
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      move((active + voices.length - 1) % voices.length);
    }
  };

  const handlePresetAmount = (value: any) => {
    setAmount(value);
    setCustomAmount("");
  };

  const handleCustomAmount = (e: any) => {
    const value = e.target.value.replace(/\D/g, "");
    setCustomAmount(value);
    setAmount(value ? Number(value) : 0);
  };

  const formattedAmount = amount ? amount.toLocaleString("en-IN") : "";

  const handleDonate = () => {
    if (!amount || amount <= 0) {
      alert("Please enter a valid donation amount.");
      return;
    }
    console.log("Donation Amount:", amount);
    // Integrate payment gateway here (Razorpay, etc.)
  };

  const buttonRef = useRef<HTMLButtonElement>(null);

  return (
    <>
      <Header />

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="HeroSection">
        <div className="heroSectionContainer">
          <motion.img
            src="./images/ncf_logo_nobg.webp"
            alt="Nand Care Foundation"
            className="heroSectionLogo"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          />
          <motion.h1
            className="heroTitle"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          >
            Where others don't reach, we do.
          </motion.h1>
          <motion.p
            className="heroSubtitle"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          >
            Food, education and livelihoods for families in Jharkhand, and
            dignity and care for children and elders across India.
          </motion.p>
          <motion.button
            className="cta-but"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.45 }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            Donate Now
          </motion.button>
          <motion.div
            className="photo"
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.55 }}
          >
            <img src="./images/skybg.jpg" alt="Nand Care Foundation" />
          </motion.div>
        </div>
      </section>

      {/* ── Stats Section ─────────────────────────────────────────────────── */}
      <section className="SecondSection">
        <div className="secondSectionContainera">
          <InView variants={fadeUp}>
            <h2 className="secondTitle">Where compassion meets the last mile.</h2>
          </InView>
          <InView variants={fadeUp} delay={0.1}>
            <p className="secondSubtitle">
              Fighting hunger, enabling education and livelihoods in Jharkhand,
              and bringing care to elders across India.
            </p>
          </InView>
        </div>

        <motion.div
          className="SecondSectionNumberContainer"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px 0px" }}
        >
          {stats.map((s) => (
            <motion.div
              className="secondSectionNumberBox"
              key={s.label}
              variants={staggerItem}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
            >
              <p className="secondSectinoNumber">
                <AnimatedCounter value={s.number} />
              </p>
              <p className="secondSectinoLabel">{s.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ── Campaigns Section ─────────────────────────────────────────────── */}
      <section className="ThirdSection">
        <InView variants={fadeIn}>
          <p className="livenowLabel">Live Now</p>
        </InView>
        <div className="thirdSectionHeader">
          <InView variants={slideLeft} delay={0.05}>
            <h2 className="secondTitle">Support a campaign</h2>
          </InView>
          <InView variants={slideRight} delay={0.05}>
            <p className="thirdSectionNavp">All Campaigns</p>
          </InView>
        </div>

        <div className="thirdSectionMain">
          <InView variants={slideLeft} className="thirdImgBox">
            <img
              src="./images/hunger-hero-6f0505eb.webp"
              alt="A Meal of Dignity for Elders"
              className="thirdImg"
            />
          </InView>

          <motion.div
            className="thirdSectionMainBody"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.13, delayChildren: 0.15 } },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px 0px" }}
          >
            {/* Category tag */}
            <motion.p
              className="thirdSectionMainBodyp"
              variants={{
                hidden: { opacity: 0, y: 18 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
              }}
            >
              Elderly care
            </motion.p>

            {/* Campaign title */}
            <motion.p
              className="thirdSectionMainh1"
              variants={{
                hidden: { opacity: 0, y: 22 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
              }}
            >
              A meal of dignity for elders
            </motion.p>

            {/* Description */}
            <motion.p
              className="thirdSectionMainBodyp"
              variants={{
                hidden: { opacity: 0, y: 18 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
              }}
            >
              Nutritious daily meals and essential food support for elderly
              people living in extreme hardship.
            </motion.p>

            {/* Fundraising stats + donate button */}
            <motion.div
              className="thirdSectionMainBodyDonateTrackContainer"
              variants={{
                hidden: { opacity: 0, y: 18 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
              }}
            >
              <p className="thirdRaised">
                <span className="thirdamountSpan">
                  <AnimatedCounter value="11,75,489" prefix="₹" />
                </span>{" "}raised of{" "}
                <AnimatedCounter value="25,00,000" prefix="₹" />
              </p>
              <div className="thirdSectionProgessBar">
                <div className="progressBarThird"></div>
              </div>
              <div className="thirdxbox">
                <p className="thirdxboxp">
                  <AnimatedCounter value="47%" /> of goal
                </p>
                <p className="thirdxboxp">
                  <AnimatedCounter value="1,346" /> donors
                </p>
              </div>
              <motion.button
                className="cta-but thirdDonateBtn"
                variants={{
                  hidden: { opacity: 0, y: 14 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
                }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Donate to this Campaign
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        <InView variants={scaleIn} delay={0.1}>
          <div className="thirdMoreContainer">
            <div className="thirdMoreImgBox">
              <img
                src="./images/img-2.jpg"
                alt="More Campaigns"
                className="thirdMoreImg"
              />
            </div>
            <div className="thirdMoreContainerBody">
              <div className="thirdMoreContainerBox">
                <p className="thirdMoretitle">More ways to give</p>
                <p className="thirdSectionMainBodyp">
                  Support education, healthcare, hunger relief and elder care
                  across India.
                </p>
              </div>
              <p className="thirdSectionNavp">View All Campaigns</p>
            </div>
          </div>
        </InView>
      </section>

      {/* ── Intro / About ─────────────────────────────────────────────────── */}
      <section className="intro" aria-labelledby="intro-title">
        <div className="introGrid">
          <InView variants={slideLeft}>
            <div>
              <h2 id="intro-title" className="secondTitle">
                A grassroots organisation working beside the families others
                don't reach.
              </h2>
              <p className="introLead">
                Nand Care Foundation works with tribal communities and
                coal-mining families on the issues that shape their everyday
                lives and opportunities.
              </p>
              <p className="introBody">
                Our work spans education, hunger relief, healthcare and
                livelihoods, and responds to the needs of children, families and
                elders. We work closely with communities to understand what they
                need and to create opportunities for long-term progress.
              </p>
              <blockquote>
                With the right support, people can overcome challenges, rebuild
                their lives and become self-reliant.
              </blockquote>
              <div className="introActions">
                <motion.p
                  className="cta-but"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                >
                  About our foundation
                </motion.p>
                <p className="thirdSectionNavp">Our programs</p>
              </div>
            </div>
          </InView>
          <InView variants={slideRight} delay={0.15}>
            <figure>
              <img
                src="./images/nand-care-foundation-community.webp"
                alt="A volunteer smiling with a child in his arms"
              />
            </figure>
          </InView>
        </div>
      </section>

      {/* ── Donation Section ──────────────────────────────────────────────── */}
      <section className="donation-wrap">
        {/* Trust badges – staggered fade-up */}
        <motion.ul
          className="trust"
          aria-label="Registrations and compliance"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px 0px" }}
        >
          {trustItems.map((t) => (
            <motion.li key={t.title} variants={staggerItem}>
              <b>{t.title}</b>
              <span>{t.sub}</span>
            </motion.li>
          ))}
        </motion.ul>

        <section className="donate" aria-labelledby="give-title">
          {/* Left – slides in from left */}
          <InView variants={slideLeft} className="left">
            <h2 id="give-title">Your support can change lives.</h2>
            <p>
              Every contribution helps Nand Care Foundation support children,
              elderly people and vulnerable families in Dhanbad through
              education, nutrition and essential food support.
            </p>
            <figure>
              <img
                src="/images/ncf-donation-bg.jpg"
                alt="Smiling children from the community Nand Care Foundation supports"
              />
            </figure>
          </InView>

          {/* Donation card – slides in from right */}
          <InView variants={slideRight} delay={0.1} className="card">
            <h3>Make a donation</h3>
            <p>
              Your support provides nutritious meals, learning opportunities and
              essential supplies to the communities that need them most.
            </p>

            <div className="amts">
              {presetAmounts.map((value) => (
                <motion.button
                  key={value}
                  type="button"
                  aria-pressed={!customAmount && amount === value}
                  onClick={() => handlePresetAmount(value)}
                  whileHover={{ scale: 1.06 }}
                  whileTap={{ scale: 0.95 }}
                >
                  ₹{value.toLocaleString("en-IN")}
                </motion.button>
              ))}
            </div>

            <label className="field">
              <span aria-hidden="true">₹</span>
              <input
                type="text"
                inputMode="numeric"
                placeholder="Enter custom amount"
                aria-label="Custom amount in rupees"
                value={customAmount}
                onChange={handleCustomAmount}
              />
            </label>

            <motion.button
              className="go"
              type="button"
              onClick={handleDonate}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Proceed to donate
              {amount > 0 ? ` ₹${formattedAmount}` : ""}
            </motion.button>
          </InView>
        </section>
      </section>

      {/* ── Voices / Testimonials ─────────────────────────────────────────── */}
      <section className="voices" aria-labelledby="voices-title">
        <InView variants={fadeUp}>
          <h2 id="voices-title">People who saw the work first-hand</h2>
        </InView>

        <div className="voicesStage">
          {/* Photo cross-fades when switching testimonial */}
          <AnimatePresence mode="wait">
            <motion.figure
              key={`photo-${active}`}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 30 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              <img src={voice.photo} alt={voice.photoAlt} />
            </motion.figure>
          </AnimatePresence>

          <div>
            {/* Quote panel fades + slides on tab change */}
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                role="tabpanel"
                id="voices-panel"
                aria-labelledby={`voice-tab-${active}`}
                className="voicesPanel"
                tabIndex={0}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                <blockquote>{voice.quote}</blockquote>
                <div className="voicesWho">
                  <b>{voice.name}</b>
                  <span>{voice.role}</span>
                </div>
              </motion.div>
            </AnimatePresence>

            <div
              className="voicesTabs"
              role="tablist"
              aria-label="Choose a story"
              onKeyDown={onKeyDown}
            >
              {voices.map((v, i) => (
                <button
                  key={v.name}
                  ref={buttonRef}
                  role="tab"
                  id={`voice-tab-${i}`}
                  aria-selected={active === i}
                  aria-controls="voices-panel"
                  tabIndex={active === i ? 0 : -1}
                  onClick={() => setActive(i)}
                >
                  {v.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        <InView variants={fadeUp} delay={0.1}>
          <div className="voicesFoot">
            <a className="voicesBtn" href="/donor-wall">
              See our donor wall
            </a>
          </div>
        </InView>
      </section>

      {/* ── Work / Gallery ────────────────────────────────────────────────── */}
      <section className="work" aria-labelledby="work-title">
        <InView variants={fadeUp} className="workIntro">
          <h2 id="work-title">
            Education, hunger and food security, elderly care and livelihoods.
          </h2>
          <p>
            At Nand Care Foundation, we work with some of the most marginalised
            communities across India to create opportunities, ensure basic needs
            and build a secure future for tomorrow.
          </p>
        </InView>

        {/* Gallery images – each card animates into view individually */}
        <ul
          className="workStrip"
          ref={stripRef}
          onScroll={update}
          tabIndex={0}
          aria-label="Photos from our work"
        >
          {photos.map((p, i) => (
            <motion.li
              key={p.src}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px 0px" }}
              transition={{
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
                delay: (i % 4) * 0.08,
              }}
              whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
            >
              <img src={p.src} alt={p.alt} loading="lazy" />
            </motion.li>
          ))}
        </ul>

        <InView variants={fadeIn} delay={0.05}>
          <div className="workCtrl">
            <button
              type="button"
              aria-label="Previous photos"
              disabled={!canPrev}
              onClick={() => step(-1)}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M15 5l-7 7 7 7" />
              </svg>
            </button>
            <button
              type="button"
              aria-label="Next photos"
              disabled={!canNext}
              onClick={() => step(1)}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </InView>
      </section>

      {/* ── Get Involved ──────────────────────────────────────────────────── */}
      <section className="involved" aria-labelledby="involved-title">
        <InView variants={fadeUp} className="involvedIntro">
          <h2 id="involved-title">Get involved: partner or volunteer</h2>
          <p>
            Whether for verifiable CSR implementation or grassroots
            volunteering, join us in empowering tribal and mining communities.
          </p>
        </InView>

        <div className="involvedCols">
          <InView variants={slideLeft} delay={0.05}>
            <article className="involvedCol">
              <h3>{corporate.title}</h3>
              <p className="involvedLede">{corporate.lede}</p>
              <ul className="involvedRows">
                {corporate.facts.map((f) => (
                  <li key={f.label} className="involvedKv">
                    <span>{f.label}</span>
                    <span>{f.value}</span>
                  </li>
                ))}
              </ul>
              <div className="involvedCta">
                <motion.a
                  className="involvedBtn"
                  style={{ backgroundColor: "var(--cta-color)" }}
                  href={corporate.cta.href}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                >
                  {corporate.cta.label}
                </motion.a>
              </div>
            </article>
          </InView>

          <InView variants={slideRight} delay={0.1}>
            <article className="involvedCol">
              <h3>{volunteer.title}</h3>
              <p className="involvedLede">{volunteer.lede}</p>
              <p className="involvedSub">{volunteer.intro}</p>
              <ul className="involvedRows">
                {volunteer.benefits.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
              <div className="involvedCta">
                <motion.a
                  className="involvedBtn"
                  href={volunteer.cta.href}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                >
                  {volunteer.cta.label}
                </motion.a>
              </div>
            </article>
          </InView>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────────── */}
      <section className="faq" aria-labelledby="faq-title">
        <div className="faqGrid">
          <InView variants={slideLeft} className="faqSide">
            <h2 id="faq-title">Everything you need to know about giving</h2>
            <p>
              Clear answers to common questions about donating and 80G tax
              benefits.
            </p>
          </InView>

          <div>
            <motion.ul
              className="faqList"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px 0px" }}
            >
              {faqs.map((item, i) => {
                const open = openIndex === i;
                return (
                  <motion.li
                    key={item.q}
                    className="faqItem"
                    variants={staggerItem}
                  >
                    <h3>
                      <button
                        type="button"
                        className="faqQ"
                        id={`faq-q-${i}`}
                        aria-expanded={open}
                        aria-controls={`faq-a-${i}`}
                        onClick={() => setOpenIndex(open ? null : i)}
                      >
                        <span>{item.q}</span>
                        <span className="faqIcon" aria-hidden="true" />
                      </button>
                    </h3>

                    {/* Animated expand/collapse */}
                    <AnimatePresence initial={false}>
                      {open && (
                        <motion.div
                          id={`faq-a-${i}`}
                          role="region"
                          aria-labelledby={`faq-q-${i}`}
                          className="faqA open"
                          key="answer"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{
                            duration: 0.35,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                          style={{ overflow: "hidden" }}
                        >
                          <div>
                            <p>{item.a}</p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                    {/* Keep DOM node when closed for aria-controls */}
                    {!open && (
                      <div
                        id={`faq-a-${i}`}
                        role="region"
                        aria-labelledby={`faq-q-${i}`}
                        className="faqA"
                        hidden
                      />
                    )}
                  </motion.li>
                );
              })}
            </motion.ul>
            <InView variants={fadeUp} delay={0.1}>
              <div className="faqMore">
                <a className="faqBtn" href="/faqs">
                  View all FAQs
                </a>
              </div>
            </InView>
          </div>
        </div>
      </section>

      {/* ── Footer ────────────────────────────────────────────────────────── */}
      <footer className="footer">
        <div className="footerInner">

          {/* ── Top row: brand + social ───────────────────────────────────── */}
          <div className="footerTop">

            {/* Brand logo — slides in from left */}
            <div>
              <motion.a
                className="footerBrand"
                href="/"
                initial={{ opacity: 0, x: -32 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px 0px" }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <img
                  src="./images/ncf_logo_nobg.webp"
                  alt=""
                  width={34}
                  height={30}
                />
                Nand Care Foundation
              </motion.a>

              {/* About paragraph — fades up with slight delay */}
              <motion.p
                className="footerAbout"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px 0px" }}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
              >
                Nand Care Foundation is a grassroots non-profit organisation
                based in Dhanbad, dedicated to improving the lives of
                underprivileged communities. We work closely with local families
                to address critical challenges in education, hunger relief,
                healthcare and livelihood empowerment.
              </motion.p>
            </div>

            {/* Social icons — each pops in with scale + stagger */}
            <motion.div
              className="footerSocial"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px 0px" }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.1, delayChildren: 0.25 } },
              }}
            >
              {socials.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  target="_blank"
                  rel="noreferrer"
                  variants={{
                    hidden: { opacity: 0, scale: 0.5, y: 10 },
                    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
                  }}
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    {s.icon}
                  </svg>
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Divider — scales in from left to right */}
          <motion.hr
            className="footerRule"
            initial={{ scaleX: 0, originX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-40px 0px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            style={{ transformOrigin: "left" }}
          />

          {/* ── Nav columns — each column slides up with stagger ─────────── */}
          <motion.div
            className="footerCols"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px 0px" }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
            }}
          >
            {columns.map((col) => (
              <motion.div
                key={col.title}
                variants={{
                  hidden: { opacity: 0, y: 28 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
                }}
              >
                {/* Column heading — slight extra pop */}
                <motion.h3
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, ease: "easeOut", delay: 0.1 }}
                >
                  {col.title}
                </motion.h3>
                <ul>
                  {col.links.map((l, li) => (
                    <motion.li
                      key={l.label}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, ease: "easeOut", delay: 0.15 + li * 0.07 }}
                    >
                      <a href={l.href}>{l.label}</a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}

            {/* Contact column — slides up from below */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 28 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
              }}
            >
              <motion.h3
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, ease: "easeOut", delay: 0.1 }}
              >
                Contact us
              </motion.h3>
              <address>
                {/* Each address line fades + slides up with individual delays */}
                <motion.span
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
                >
                  <b>Registered office</b>
                  <br />
                  2-A/3 Second Floor Front Side Asaf Ali Road, Turkman Gate,
                  New Delhi, Delhi 110002
                </motion.span>

                <motion.span
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.22 }}
                >
                  <b>Working area</b>
                  <br />
                  Dhanbad, Jharkhand
                </motion.span>

                <motion.a
                  href="tel:+917909054585"
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, ease: "easeOut", delay: 0.3 }}
                >
                  +91 7909054585
                </motion.a>

                <motion.a
                  href="mailto:Nandcarefoundation@gmail.com"
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, ease: "easeOut", delay: 0.37 }}
                >
                  Nandcarefoundation@gmail.com
                </motion.a>

                <motion.span
                  className="footerCin"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: 0.44 }}
                >
                  CIN U85320DL2019NPL358219
                </motion.span>

                <motion.span
                  className="footerBadges"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
                >
                  <span>80G certified</span>
                  <span>Razorpay verified</span>
                </motion.span>
              </address>
            </motion.div>
          </motion.div>

          {/* Second divider */}
          <motion.hr
            className="footerRule footerRuleSm"
            initial={{ scaleX: 0, originX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-20px 0px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformOrigin: "left" }}
          />

          {/* ── Legal row — links slide up, copyright fades ───────────────── */}
          <div className="footerLegal">
            <motion.ul
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
              }}
            >
              {legal.map((l) => (
                <motion.li
                  key={l.label}
                  variants={{
                    hidden: { opacity: 0, y: 12 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
                  }}
                >
                  <a href={l.href}>{l.label}</a>
                </motion.li>
              ))}
            </motion.ul>

            {/* Copyright — fades in last */}
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.35 }}
            >
              © {new Date().getFullYear()} Nand Care Foundation. All rights
              reserved.
            </motion.span>
          </div>

        </div>
      </footer>
    </>
  );
}
