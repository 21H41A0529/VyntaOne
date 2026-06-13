import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vynta — The 24/7 Voice of Your Business" },
      { name: "description", content: "AI voice receptionist for high-growth businesses. 24/7 customer booking, policy-intelligent Q&A, and zero-touch CRM/Calendar sync." },
      { property: "og:title", content: "Vynta — The 24/7 Voice of Your Business" },
      { property: "og:description", content: "AI voice receptionist for high-growth businesses." },
    ],
  }),
  component: Landing,
});

const nav = [
  { label: "Process", href: "#process" },
  { label: "Services", href: "#services" },
  { label: "Benefits", href: "#benefits" },
  { label: "About", href: "#about" },
  { label: "Plans", href: "#plans" },
  { label: "FAQ", href: "#faq" },
];

const processSteps = [
  {
    n: "01",
    title: "Intelligent Knowledge Mapping",
    body: "We ingest your specific service details and business FAQs into your assistant's knowledge base. Your AI is trained to answer customer questions accurately based on your provided information.",
  },
  {
    n: "02",
    title: "Calendar & Workflow Integration",
    body: "We connect your AI assistant directly to your existing calendar and CRM. The system is configured to handle appointment bookings and synchronize lead data without any manual work required.",
  },
  {
    n: "03",
    title: "Live Call Management",
    body: "Your AI assistant handles incoming calls and overflow, ensuring every inquiry is addressed. Every appointment booked is pushed to your calendar in real-time — a zero-touch reception experience.",
  },
];

const services = [
  {
    title: "The Core AI Receptionist",
    body: "A professional, business-grade voice assistant that sounds human and never misses a call.",
  },
  {
    title: "24/7 Lead Capture",
    body: "Stop losing leads after 5:00 PM. Vynta stays awake 24/7/365, ensuring that every midnight inquiry is captured and qualified immediately.",
  },
  {
    title: "Smart Scheduling",
    body: "Your AI assistant directly checks your Cal.com availability in real-time and books the appointment for the caller during the conversation. No back-and-forth — just a confirmed slot on your calendar.",
  },
  {
    title: "Instant Data Sync",
    body: "Once the call ends, Vynta instantly pushes all call details — name, phone, and appointment time — to your CRM or email. You get the lead data without ever taking a manual note.",
  },
];

const benefits = [
  { title: "Maximum Efficiency", body: "Free your staff from repetitive phone tasks so they can focus on high-value, in-person operations." },
  { title: "Cost Savings", body: "Get the power of a full-time receptionist for less than the cost of two days of human labor." },
  { title: "Instant Scalability", body: "Handle 1 or 100 simultaneous calls with zero latency and no additional hiring required." },
  { title: "The Safety Net", body: "Never worry about staff turnover, sick days, or lunch breaks affecting your customer experience." },
  { title: "Business-Grade Accuracy", body: "99.8% accuracy in industry-specific terminology and policy-intelligent Q&A." },
  { title: "Real-Time Data", body: "Access instant transcripts and sentiment analysis for every customer interaction." },
];

const planFeatures = [
  "24/7 AI Voice Coverage",
  "120 Answering Minutes Included / Month",
  "Unlimited Q&A Knowledge Base",
  "Real-Time Call Transcripts",
  "Email support",
  "Google Calendar & Cal.com Integration",
  "Priority Live Transfer",
];

const faqs = [
  {
    q: "Does Vynta sound human?",
    a: "Yes. Vynta uses a business-grade voice engine tuned with natural pacing, intonation, and back-channeling — most callers cannot tell they're speaking to AI.",
  },
  {
    q: "Do I need to buy expensive equipment or software?",
    a: "No. Vynta runs entirely on your existing phone number with a simple forwarding setup. No hardware, no installs.",
  },
  {
    q: "What happens if a caller asks a complicated question or the AI gets stuck?",
    a: "Vynta can warm-transfer the call to you or your team in real-time, or capture the question and notify you immediately by email or SMS.",
  },
  {
    q: "Can it book appointments directly onto my calendar?",
    a: "Yes. Vynta integrates with Google Calendar and Cal.com, checks real-time availability, and confirms the booking on the call.",
  },
  {
    q: "How does it know the answers to questions about my specific business?",
    a: "During onboarding we ingest your services, policies, and FAQs into a private knowledge base your assistant uses on every call.",
  },
];

function Landing() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <BackgroundDecor />
      <Header />
      <Hero />
      <Process />
      <Services />
      <Benefits />
      <About />
      <Plans />
      <FAQ />
      <Footer />
    </main>
  );
}

function BackgroundDecor() {
  return (
    <>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[900px]"
        style={{ background: "var(--gradient-radial)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--color-border-subtle) 1px, transparent 1px), linear-gradient(to bottom, var(--color-border-subtle) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          maskImage: "radial-gradient(ellipse 60% 50% at 50% 0%, black, transparent 70%)",
        }}
      />
    </>
  );
}

function Header() {
  return (
    <header className="relative z-20">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <a href="#" className="flex items-center gap-2">
          <span className="grid h-8 w-8 place-items-center rounded-full border border-border bg-surface-elevated">
            <span className="h-2 w-2 rounded-full bg-primary shadow-[0_0_12px_var(--color-primary)]" />
          </span>
          <span className="font-display text-2xl">Vynta</span>
        </a>
        <nav className="hidden items-center gap-1 rounded-full border border-border bg-surface/60 px-2 py-1.5 backdrop-blur-md md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-1.5 text-sm text-muted-foreground transition hover:bg-secondary hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href="#plans"
          className="hidden rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition hover:opacity-90 md:inline-block"
        >
          Get started
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative z-10 mx-auto max-w-6xl px-6 pb-24 pt-16 md:pt-28">
      <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
        <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 text-xs uppercase tracking-[0.18em] text-muted-foreground backdrop-blur-md">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          Now answering calls in 47 industries
        </span>
        <h1 className="font-display text-5xl leading-[1.05] md:text-7xl lg:text-[5.5rem]">
          The <em className="italic text-gradient">24/7 voice</em>
          <br />
          of your business
        </h1>
        <p className="mt-8 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
          Capture thousands in missed lead value annually. Vynta is the AI voice receptionist engineered
          for high-growth businesses — 24/7 customer booking, policy-intelligent Q&amp;A, and zero-touch
          CRM and calendar synchronization.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#plans"
            className="group relative inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition hover:opacity-90"
            style={{ boxShadow: "var(--shadow-glow)" }}
          >
            Start your free trial
            <span aria-hidden className="transition group-hover:translate-x-0.5">→</span>
          </a>
          <a
            href="#process"
            className="rounded-full border border-border bg-surface/60 px-6 py-3 text-sm text-foreground backdrop-blur-md transition hover:bg-secondary"
          >
            See how it works
          </a>
        </div>

        <div className="mt-20 grid w-full grid-cols-3 gap-4 border-t border-border-subtle pt-10 text-left md:gap-10">
          {[
            { k: "99.8%", v: "Industry accuracy" },
            { k: "24/7", v: "Always available" },
            { k: "<1s", v: "Response latency" },
          ].map((m) => (
            <div key={m.k}>
              <div className="font-display text-3xl md:text-5xl">{m.k}</div>
              <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{m.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-muted-foreground">
      <span className="h-px w-8 bg-border" />
      {children}
    </div>
  );
}

function Process() {
  return (
    <section id="process" className="relative z-10 mx-auto max-w-6xl px-6 py-24">
      <div className="mb-16 max-w-2xl">
        <SectionLabel>Process</SectionLabel>
        <h2 className="font-display text-4xl md:text-6xl">
          Our <em className="italic text-gradient">proven</em> process
        </h2>
        <p className="mt-4 max-w-lg text-muted-foreground">
          From concept to execution, see how we bring AI to life in your business.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {processSteps.map((s) => (
          <article
            key={s.n}
            className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 transition hover:border-primary/40"
            style={{ boxShadow: "var(--shadow-card)" }}
          >
            <div className="font-display text-6xl text-primary/80">{s.n}</div>
            <h3 className="mt-6 text-xl font-medium">{s.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
            <div
              aria-hidden
              className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-0 blur-3xl transition group-hover:opacity-60"
              style={{ background: "var(--color-primary)" }}
            />
          </article>
        ))}
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="relative z-10 mx-auto max-w-6xl px-6 py-24">
      <div className="mb-16 max-w-2xl">
        <SectionLabel>Services</SectionLabel>
        <h2 className="font-display text-4xl md:text-6xl">
          Vynta<em className="italic text-gradient">One</em> AI solutions
        </h2>
        <p className="mt-4 max-w-lg text-muted-foreground">
          Innovative solutions tailored to meet your unique business needs.
        </p>
      </div>

      <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
        {services.map((s, i) => (
          <div key={s.title} className="group relative bg-card p-8 transition hover:bg-surface-elevated md:p-10">
            <div className="mb-6 font-mono text-xs text-muted-foreground">
              {String(i + 1).padStart(2, "0")} / {String(services.length).padStart(2, "0")}
            </div>
            <h3 className="font-display text-3xl md:text-4xl">{s.title}</h3>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">{s.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Benefits() {
  return (
    <section id="benefits" className="relative z-10 mx-auto max-w-6xl px-6 py-24">
      <div className="mb-16 max-w-2xl">
        <SectionLabel>Benefits</SectionLabel>
        <h2 className="font-display text-4xl md:text-6xl">
          Experience the <em className="italic text-gradient">AI advantage</em>
        </h2>
        <p className="mt-4 max-w-lg text-muted-foreground">
          Discover the advantages of partnering with our AI automation agency.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {benefits.map((b) => (
          <div
            key={b.title}
            className="rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-0.5 hover:border-primary/40"
          >
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
              <span className="h-2 w-2 rounded-full bg-primary" />
            </div>
            <h3 className="text-lg font-medium">{b.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="relative z-10 mx-auto max-w-6xl px-6 py-24">
      <div className="grid items-start gap-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <SectionLabel>About</SectionLabel>
          <h2 className="font-display text-4xl md:text-6xl">
            Meet Vynta:
            <br />
            your new <em className="italic text-gradient">front desk</em>
          </h2>
        </div>
        <div className="md:col-span-7">
          <p className="font-display text-2xl leading-snug text-foreground md:text-3xl">
            Vynta was engineered to solve the Receptionist Paradox — the choice between serving the
            customer in front of you and answering the phone.
          </p>
          <p className="mt-6 text-muted-foreground">
            We provide business-grade AI voice reception that acts as a force multiplier for high-growth
            teams. Our mission is to ensure that no business ever loses a high-value lead to a voicemail
            box again.
          </p>
        </div>
      </div>
    </section>
  );
}

function Plans() {
  return (
    <section id="plans" className="relative z-10 mx-auto max-w-6xl px-6 py-24">
      <div className="mb-16 max-w-2xl">
        <SectionLabel>Plans</SectionLabel>
        <h2 className="font-display text-4xl md:text-6xl">
          Flexible pricing, <em className="italic text-gradient">maximum impact</em>
        </h2>
        <p className="mt-4 max-w-lg text-muted-foreground">
          Choose the perfect plan for your business with no hidden costs.
        </p>
      </div>

      <div className="mx-auto max-w-xl">
        <div
          className="relative overflow-hidden rounded-3xl border border-primary/30 bg-card p-10"
          style={{ boxShadow: "var(--shadow-glow)" }}
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-40"
            style={{ background: "var(--gradient-radial)" }}
          />
          <div className="relative">
            <div className="flex items-center justify-between">
              <span className="rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs uppercase tracking-widest text-primary">
                Premium
              </span>
              <span className="font-mono text-xs text-muted-foreground">Solo Pro Plan</span>
            </div>
            <div className="mt-6 flex items-baseline gap-2">
              <span className="font-display text-7xl">$159</span>
              <span className="text-muted-foreground">/ month</span>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              Everything a single-location business needs to never miss a lead.
            </p>

            <div className="my-8 hairline" />

            <ul className="space-y-3">
              {planFeatures.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm">
                  <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-primary/15 text-primary">
                    ✓
                  </span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            <a
              href="https://stripe.com/"
              className="mt-10 flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition hover:opacity-90"
            >
              Get started
              <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="relative z-10 mx-auto max-w-6xl px-6 py-24">
      <div className="grid gap-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <SectionLabel>FAQ</SectionLabel>
          <h2 className="font-display text-4xl md:text-6xl">
            Your questions,
            <br />
            <em className="italic text-gradient">answered</em>
          </h2>
          <p className="mt-4 max-w-sm text-muted-foreground">
            Answers to your most common questions about our AI services.
          </p>
        </div>
        <div className="md:col-span-7">
          <div className="overflow-hidden rounded-2xl border border-border bg-card">
            {faqs.map((item, i) => {
              const isOpen = open === i;
              return (
                <div key={item.q} className={i > 0 ? "border-t border-border-subtle" : ""}>
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left transition hover:bg-surface-elevated"
                  >
                    <span className="text-base font-medium md:text-lg">{item.q}</span>
                    <span
                      className={`flex h-7 w-7 flex-none items-center justify-center rounded-full border border-border text-muted-foreground transition ${
                        isOpen ? "rotate-45 border-primary text-primary" : ""
                      }`}
                      aria-hidden
                    >
                      +
                    </span>
                  </button>
                  <div
                    className={`grid overflow-hidden transition-all duration-300 ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="min-h-0">
                      <p className="px-6 pb-6 text-sm leading-relaxed text-muted-foreground">{item.a}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative z-10 border-t border-border-subtle">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 px-6 py-12 md:flex-row md:items-center">
        <div>
          <div className="flex items-center gap-2">
            <span className="grid h-8 w-8 place-items-center rounded-full border border-border bg-surface-elevated">
              <span className="h-2 w-2 rounded-full bg-primary" />
            </span>
            <span className="font-display text-2xl">Vynta</span>
          </div>
          <p className="mt-3 max-w-xs text-sm text-muted-foreground">
            The 24/7 AI voice receptionist for high-growth businesses.
          </p>
        </div>
        <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm text-muted-foreground">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="transition hover:text-foreground">
              {n.label}
            </a>
          ))}
          <Link to="/terms-of-service" className="transition hover:text-foreground">Terms</Link>
          <Link to="/privacy-policy" className="transition hover:text-foreground">Privacy</Link>
          <Link to="/refund-policy" className="transition hover:text-foreground">Refunds</Link>
        </div>
        <div className="font-mono text-xs text-muted-foreground">
          © {new Date().getFullYear()} Vynta. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
