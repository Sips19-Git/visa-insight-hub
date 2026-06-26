import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import {
  Plane,
  Briefcase,
  Home,
  Heart,
  FileCheck,
  ShieldCheck,
  Users,
  Clock,
  ArrowRight,
  Check,
  Mail,
  Phone,
  MapPin,
  Search,
  Send,
  Landmark,
} from "lucide-react";
import logo from "@/assets/logo.png";
import passports from "@/assets/passports.jpg";
import img1 from "@/assets/image.png.asset.json";
import img2 from "@/assets/image-2.png.asset.json";
import img4 from "@/assets/image-4.png.asset.json";
import img5 from "@/assets/image-5.png.asset.json";
import img6 from "@/assets/image-6.png.asset.json";
import img7 from "@/assets/image-7.png.asset.json";
import img8 from "@/assets/image-8.png.asset.json";
import img9 from "@/assets/image-9.png.asset.json";
import img11 from "@/assets/image-11.png.asset.json";
import img12 from "@/assets/image-12.png.asset.json";
const heroLeft = img11.url;
const heroRight = img12.url;
const family = img9.url;
const svcTourist = img1.url;
const svcWork = img5.url;
const svcResidency = img7.url;
const svcFamily = img2.url;
const svcCitizenship = img4.url;
const svcBusiness = img8.url;
import processBgAsset from "@/assets/process-bg.jpg.asset.json";
const processBg = processBgAsset.url;
const _unused6 = img6;
import {
  Reveal,
  RevealGroup,
  RevealItem,
  ScrollProgressBar,
} from "@/components/motion-primitives";

function useTypewriter(text: string, duration = 2200) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3); // ease-out cubic
      setCount(Math.round(eased * text.length));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [text, duration]);
  return { count, done: count >= text.length };
}

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Visa Support HB — Trusted Visa & Immigration Consultants" },
      {
        name: "description",
        content:
          "Expert visa, residency and immigration support for individuals, families and businesses. Personal guidance from application to approval.",
      },
      { property: "og:title", content: "Visa Support HB" },
      {
        property: "og:description",
        content: "Expert visa & immigration support with a 98% approval rate.",
      },
    ],
  }),
  component: Index,
});

const services = [
  { icon: Plane, image: svcTourist, title: "Tourist & Visitor Visas", desc: "Short-stay and travel visas for over 90 destinations, prepared and reviewed by specialists." },
  { icon: Briefcase, image: svcWork, title: "Work Permits", desc: "Skilled worker, intra-company and freelance permits — fully managed from offer to arrival." },
  { icon: Home, image: svcResidency, title: "Residency & PR", desc: "Long-term residency pathways, permanent residency and renewals across major countries." },
  { icon: Heart, image: svcFamily, title: "Family Reunification", desc: "Spouse, partner, child and parent visas handled with care and complete documentation." },
  { icon: FileCheck, image: svcCitizenship, title: "Citizenship Support", desc: "Naturalisation files, civic test preparation and dual citizenship guidance." },
  { icon: Landmark, image: svcBusiness, title: "Business & Investor Visas", desc: "Startup, investor and entrepreneur routes with full corporate and tax coordination." },
];

const steps = [
  { n: "01", title: "Free Consultation", desc: "Tell us your goal. We map the most reliable route and timeline within 24 hours." },
  { n: "02", title: "Document Strategy", desc: "We build a tailored checklist and review every translation, certificate and supporting letter." },
  { n: "03", title: "Application Filing", desc: "We submit, track and respond to authorities on your behalf — no missed deadlines." },
  { n: "04", title: "Approval & Arrival", desc: "Interview coaching, biometrics support and a relocation briefing for a smooth landing." },
];

const stats = [
  { k: "12k+", v: "Visas approved" },
  { k: "98%", v: "Approval rate" },
  { k: "90+", v: "Destinations" },
  { k: "15", v: "Years in practice" },
];

const testimonials = [
  { name: "Aarav S.", role: "Skilled Worker, Germany", quote: "They turned a 9-month nightmare into a 6-week approval. Every email got answered the same day." },
  { name: "Lina M.", role: "Family Visa, Canada", quote: "We were rejected once before. Visa Support HB rebuilt the file and we were reunited within months." },
  { name: "Tomas K.", role: "Student Visa, Netherlands", quote: "Genuinely felt like having a friend in the embassy. The interview prep was the difference." },
];

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#stories", label: "Stories" },
  { href: "#contact", label: "Contact" },
];

function TypewriterHeadline() {
  const text = "Find your passport";
  const { count, done } = useTypewriter(text, 2200);
  const shown = text.slice(0, count);
  const findPart = shown.slice(0, Math.min(count, "Find your ".length));
  const passportPart = count > "Find your ".length ? shown.slice("Find your ".length) : "";
  return (
    <h1
      aria-label={text}
      className="font-display text-white text-6xl md:text-8xl font-semibold tracking-tight drop-shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
    >
      {findPart}
      <span className="italic">{passportPart}</span>
      <span
        className="caret"
        style={{ opacity: done ? 0 : undefined, transition: "opacity 0.6s ease-out" }}
        aria-hidden
      >
        &nbsp;
      </span>
    </h1>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <ScrollProgressBar />

      {/* FLOATING NAV */}
      <motion.header
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[min(96%,1100px)]"
      >
        <motion.div
          whileHover={{ y: -2 }}
          transition={{ type: "spring", stiffness: 260, damping: 22 }}
          className="rounded-full border border-border/60 bg-background/70 backdrop-blur-xl shadow-[0_10px_40px_-15px_rgba(20,20,40,0.25)] px-3 py-2 flex items-center justify-between gap-2"
        >
          <a href="#top" className="flex items-center gap-2 pl-3 pr-2 py-1 rounded-full hover:bg-accent transition-colors">
            <img src={logo} alt="Visa Support HB" className="h-7 w-7 object-contain" />
            <span className="font-display text-base font-semibold tracking-tight">
              Visa Support <span className="text-gold">HB</span>
            </span>
          </a>
          <nav className="hidden md:flex items-center gap-1 text-sm">
            {navLinks.map((l) => (
              <motion.a
                key={l.href}
                href={l.href}
                whileHover={{ y: -1 }}
                className="relative px-4 py-2 rounded-full text-muted-foreground hover:text-foreground transition-colors group"
              >
                {l.label}
                <span className="absolute left-3 right-3 -bottom-0.5 h-px bg-gold scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300" />
              </motion.a>
            ))}
          </nav>
          <motion.a
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            href="#contact"
            className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Book a call <ArrowRight className="h-4 w-4" />
          </motion.a>
        </motion.div>
      </motion.header>

      {/* HERO — edge-to-edge split */}
      <section id="top" className="relative">
        <div className="relative grid grid-cols-2 h-screen min-h-[720px] w-full overflow-hidden">
          <motion.img
            initial={{ scale: 1.08, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.4, ease: "easeOut" }}
            src={heroLeft}
            alt="Travellers holding passports at the airport"
            className="absolute inset-0 left-0 w-1/2 h-full object-cover"
          />
          <motion.img
            initial={{ scale: 1.08, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.4, ease: "easeOut", delay: 0.1 }}
            src={heroRight}
            alt="View from an aircraft window above the clouds"
            className="absolute inset-0 left-1/2 w-1/2 h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/35 to-black/55" />

          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-10">
            <TypewriterHeadline />
            <Reveal delay={1.6} className="w-full max-w-2xl mt-10">
              <div className="flex items-center gap-2 bg-card rounded-full pl-5 pr-2 py-2 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)]">
                <Search className="h-5 w-5 text-muted-foreground shrink-0" />
                <input
                  className="flex-1 bg-transparent py-2 text-sm outline-none placeholder:text-muted-foreground"
                  placeholder="Search by destination, visa type, or program"
                />
                <button className="hidden sm:inline-flex items-center gap-1 rounded-full bg-primary text-primary-foreground px-5 py-2 text-sm font-medium hover:bg-primary/90 transition-colors">
                  Search
                </button>
              </div>
            </Reveal>
            <Reveal delay={0.3}>
              <a href="#services" className="mt-6 inline-block text-white underline underline-offset-4 text-sm hover:text-gold transition-colors">
                Explore popular pathways
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ABOUT / SPLIT */}
      <RevealGroup id="about" className="mx-auto max-w-7xl px-6 py-24 grid lg:grid-cols-12 gap-12 items-center">
        <RevealItem className="lg:col-span-6">
          <motion.img
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.6 }}
            src={family}
            alt="Family receiving approved visa documents"
            loading="lazy"
            width={1200}
            height={900}
            className="rounded-2xl object-cover w-full aspect-[4/3] shadow-[var(--shadow-elegant)]"
          />
        </RevealItem>
        <RevealItem className="lg:col-span-6">
          <span className="text-xs uppercase tracking-[0.2em] text-gold-foreground/70">About HB</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-semibold tracking-tight">
            A practice built around real people, not file numbers.
          </h2>
          <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
            We started Visa Support HB after watching too many strong applications fail
            on small mistakes. Today, every client works with a dedicated consultant who
            knows their case by name — and answers within hours, not weeks.
          </p>
          <ul className="mt-6 space-y-3">
            {[
              "Licensed and regulated immigration consultants",
              "Transparent fixed fees, no hidden charges",
              "Dedicated case manager from day one",
              "Multilingual: English, Arabic, Spanish, French",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-base">
                <Check className="h-5 w-5 text-gold-foreground flex-shrink-0 mt-0.5" />
                {item}
              </li>
            ))}
          </ul>
        </RevealItem>
      </RevealGroup>


      {/* STATS — continuous marquee */}
      <section className="border-y border-border bg-card overflow-hidden py-5">
        <div className="marquee-track flex w-max gap-16 whitespace-nowrap">
          {[...stats, ...stats, ...stats, ...stats].map((s, i) => (
            <div key={i} className="flex items-baseline gap-3 px-6">
              <span className="font-display text-3xl md:text-4xl font-semibold text-gold tracking-tight">{s.k}</span>
              <span className="text-sm uppercase tracking-[0.2em] text-muted-foreground">{s.v}</span>
              <span className="text-gold/40 ml-10">✦</span>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES — large image cards */}
      <RevealGroup id="services" className="mx-auto max-w-7xl px-6 py-24">
        <RevealItem className="max-w-2xl">
          <span className="text-xs uppercase tracking-[0.2em] text-gold-foreground/70">Services</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-semibold tracking-tight">
            Every visa pathway, one trusted team.
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            From a two-week tourist trip to a decade of residency, we run the paperwork so you can focus on the move.
          </p>
        </RevealItem>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s) => (
            <RevealItem key={s.title}>
              <motion.a
                href="#contact"
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 220, damping: 20 }}
                className="group block rounded-3xl overflow-hidden bg-card border border-border shadow-sm hover:shadow-[0_30px_80px_-30px_rgba(20,20,40,0.35)] transition-shadow"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <motion.img
                    src={s.image}
                    alt={s.title}
                    loading="lazy"
                    width={800}
                    height={600}
                    className="w-full h-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute top-4 left-4 h-11 w-11 rounded-2xl bg-card/95 backdrop-blur flex items-center justify-center shadow-md">
                    <s.icon className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <div className="p-7">
                  <h3 className="font-display text-2xl font-semibold tracking-tight">{s.title}</h3>
                  <p className="mt-3 text-base text-muted-foreground leading-relaxed">{s.desc}</p>
                  <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary group-hover:text-gold-foreground transition-colors">
                    Learn more
                    <motion.span className="inline-block" animate={{}} whileHover={{}}>
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </motion.span>
                  </div>
                </div>
              </motion.a>
            </RevealItem>
          ))}
        </div>
      </RevealGroup>

      {/* PROCESS */}
      <section id="process" className="relative bg-primary text-primary-foreground py-36 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img src={processBg} alt="" className="w-full h-full object-cover opacity-40" loading="lazy" />
          <div className="absolute inset-0 bg-primary/80" />
        </div>
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.2em] text-gold">Our process</span>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-semibold tracking-tight">
              Four calm steps. No surprises.
            </h2>
          </div>

          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.n}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.05 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                className="rounded-2xl border border-primary-foreground/10 p-6 h-full bg-primary-foreground/[0.02] hover:bg-primary-foreground/[0.05] transition-colors"
              >
                <div className="font-display text-3xl text-gold">{step.n}</div>
                <h3 className="mt-4 font-display text-xl font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm text-primary-foreground/70 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* WHY */}
      <RevealGroup className="bg-secondary py-24">
        <div className="mx-auto max-w-7xl px-6">
          <RevealItem className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.2em] text-gold-foreground/70">Why HB</span>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-semibold tracking-tight">
              Built for outcomes you can plan around.
            </h2>
          </RevealItem>
          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {[
              { icon: ShieldCheck, t: "Regulated practice", d: "ICCRC and OISC affiliated consultants accountable to professional bodies." },
              { icon: Clock, t: "Speed without shortcuts", d: "Average preparation time of 14 days — half the industry standard." },
              { icon: Users, t: "Real human support", d: "WhatsApp, email, calls. Your case manager is one message away." },
            ].map((b) => (
              <RevealItem key={b.t}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 220, damping: 20 }}
                  className="rounded-2xl bg-card border border-border p-8 h-full hover:shadow-[var(--shadow-elegant)] hover:border-gold/40 transition-all"
                >
                  <b.icon className="h-7 w-7 text-gold-foreground" />
                  <h3 className="mt-5 font-display text-xl font-semibold">{b.t}</h3>
                  <p className="mt-2 text-base text-muted-foreground leading-relaxed">{b.d}</p>
                </motion.div>
              </RevealItem>
            ))}
          </div>
        </div>
      </RevealGroup>

      {/* TESTIMONIALS */}
      <RevealGroup id="stories" className="mx-auto max-w-7xl px-6 py-24">
        <RevealItem className="max-w-2xl">
          <span className="text-xs uppercase tracking-[0.2em] text-gold-foreground/70">Client stories</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-semibold tracking-tight">
            Approvals that changed lives.
          </h2>
        </RevealItem>
        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <RevealItem key={t.name}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 220, damping: 20 }}
                className="rounded-2xl border border-border bg-card p-8 h-full flex flex-col hover:shadow-[var(--shadow-elegant)] hover:border-gold/40 transition-all"
              >
                <p className="font-display text-lg leading-snug flex-1">"{t.quote}"</p>
                <div className="mt-6 pt-6 border-t border-border">
                  <div className="font-medium text-sm">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </motion.div>
            </RevealItem>
          ))}
        </div>
      </RevealGroup>

      {/* CTA */}
      <RevealGroup id="contact" className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src={passports}
            alt=""
            loading="lazy"
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-secondary" />
        </div>
        <div className="mx-auto max-w-4xl px-6 text-center">
          <RevealItem>
            <h2 className="font-display text-4xl md:text-6xl font-semibold tracking-tight">
              Let's get you <span className="italic text-gold">there.</span>
            </h2>
          </RevealItem>
          <RevealItem>
            <p className="mt-5 text-lg text-muted-foreground">
              Book a free 20-minute consultation. We'll tell you honestly if we can help.
            </p>
          </RevealItem>
          <RevealItem>
            <form className="mt-10 max-w-xl mx-auto grid sm:grid-cols-2 gap-3 text-left">
              <input className="rounded-lg border border-border bg-card px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring" placeholder="Full name" />
              <input className="rounded-lg border border-border bg-card px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring" placeholder="Email address" type="email" />
              <input className="sm:col-span-2 rounded-lg border border-border bg-card px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring" placeholder="Destination country" />
              <textarea rows={3} className="sm:col-span-2 rounded-lg border border-border bg-card px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring" placeholder="Tell us briefly about your goal" />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="button"
                className="sm:col-span-2 inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Request my free consultation <ArrowRight className="h-4 w-4" />
              </motion.button>
            </form>
          </RevealItem>
        </div>
      </RevealGroup>

      {/* LARGE FOOTER */}
      <footer className="bg-primary text-primary-foreground pt-24 pb-10">
        <div className="mx-auto max-w-7xl px-6">
          <RevealGroup className="grid lg:grid-cols-12 gap-12 pb-16 border-b border-primary-foreground/15">
            <RevealItem className="lg:col-span-5">
              <div className="flex items-center gap-3">
                <img src={logo} alt="" className="h-10 w-10 object-contain" />
                <span className="font-display text-2xl font-semibold tracking-tight">
                  Visa Support <span className="text-gold">HB</span>
                </span>
              </div>
              <p className="mt-6 font-display text-3xl md:text-4xl leading-tight max-w-md">
                Quiet expertise for the biggest moves of your life.
              </p>
              <p className="mt-6 text-primary-foreground/70 max-w-md leading-relaxed">
                A boutique immigration practice handling visas, residency and citizenship for individuals,
                families and businesses across 90+ destinations since 2010.
              </p>
              <div className="mt-8 flex items-center gap-3">
                {[Send, Mail, Phone, MapPin].map((Icon, i) => (
                  <motion.a
                    key={i}
                    href="#"
                    whileHover={{ y: -3, scale: 1.05 }}
                    className="h-10 w-10 rounded-full border border-primary-foreground/20 flex items-center justify-center hover:border-gold hover:text-gold transition-colors"
                  >
                    <Icon className="h-4 w-4" />
                  </motion.a>
                ))}
              </div>
            </RevealItem>

            <RevealItem className="lg:col-span-2">
              <div className="text-xs uppercase tracking-[0.2em] text-gold mb-5">Services</div>
              <ul className="space-y-3 text-sm text-primary-foreground/75">
                {services.slice(0, 6).map((s) => (
                  <li key={s.title}>
                    <a href="#services" className="hover:text-gold transition-colors">{s.title}</a>
                  </li>
                ))}
              </ul>
            </RevealItem>

            <RevealItem className="lg:col-span-2">
              <div className="text-xs uppercase tracking-[0.2em] text-gold mb-5">Company</div>
              <ul className="space-y-3 text-sm text-primary-foreground/75">
                <li><a href="#about" className="hover:text-gold transition-colors">About</a></li>
                <li><a href="#process" className="hover:text-gold transition-colors">Our process</a></li>
                <li><a href="#stories" className="hover:text-gold transition-colors">Client stories</a></li>
                <li><a href="#" className="hover:text-gold transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-gold transition-colors">Press</a></li>
              </ul>
            </RevealItem>

            <RevealItem className="lg:col-span-3">
              <div className="text-xs uppercase tracking-[0.2em] text-gold mb-5">Reach us</div>
              <ul className="space-y-4 text-sm text-primary-foreground/75">
                <li className="flex items-start gap-3"><Mail className="h-4 w-4 text-gold mt-0.5" /> hello@visasupporthb.com</li>
                <li className="flex items-start gap-3"><Phone className="h-4 w-4 text-gold mt-0.5" /> +1 (555) 010-2024</li>
                <li className="flex items-start gap-3"><MapPin className="h-4 w-4 text-gold mt-0.5" /> Toronto · Dubai · Berlin</li>
              </ul>
              <div className="mt-8">
                <div className="text-xs uppercase tracking-[0.2em] text-gold mb-3">Newsletter</div>
                <form className="flex items-center gap-2 bg-primary-foreground/5 border border-primary-foreground/15 rounded-full pl-4 pr-1 py-1">
                  <input className="flex-1 bg-transparent py-2 text-sm outline-none placeholder:text-primary-foreground/40" placeholder="Your email" />
                  <button type="button" className="rounded-full bg-gold text-gold-foreground px-4 py-2 text-xs font-medium hover:opacity-90 transition-opacity">
                    Join
                  </button>
                </form>
              </div>
            </RevealItem>
          </RevealGroup>

          <div className="pt-10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-primary-foreground/55">
            <p>© {new Date().getFullYear()} Visa Support HB. All rights reserved. Licensed immigration consultancy.</p>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-gold transition-colors">Privacy</a>
              <a href="#" className="hover:text-gold transition-colors">Terms</a>
              <a href="#" className="hover:text-gold transition-colors">Cookies</a>
              <a href="#" className="hover:text-gold transition-colors">Regulatory disclosures</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
