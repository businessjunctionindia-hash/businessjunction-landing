import { useState } from "react";
import logo from "./assets/logo.jpeg";


const trackLead = () => {
  if (window.fbq) {
    window.fbq("track", "Lead");
  }
};


export default function App() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 overflow-x-hidden">

      {/* ================= NAVBAR ================= */}
      <header className="fixed top-0 inset-x-0 z-50">
  <div className="mx-auto max-w-7xl px-4 pt-4">
    <div className="flex items-center justify-between">

      {/* Left: Logo + Name */}
      <div className="flex items-center gap-2">
        <img
          src={logo}
          alt="Business Junction Logo"
          className="h-6 sm:h-7 w-auto object-contain"
        />
        <span className="text-sm sm:text-base font-semibold tracking-tight text-white">
          Business Junction
        </span>
      </div>

      {/* Right: CTA */}
      <a
        href="#lead-form"
        onClick={trackLead}
        className="
          relative inline-flex items-center
          px-4 py-1.5 sm:px-5 sm:py-2
          text-xs sm:text-sm font-semibold
          rounded-full
          bg-white text-black
          transition-all duration-300
          hover:scale-[1.03]
          hover:shadow-[0_8px_30px_rgba(255,255,255,0.25)]
          active:scale-95
        "
      >
        Get Started
        <span className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500/30 to-violet-500/30 blur-xl opacity-0 hover:opacity-100 transition"></span>
      </a>

    </div>
  </div>
</header>


      {/* ================= HERO ================= */}
<section className="relative overflow-hidden pt-36 pb-32 px-6 bg-[#0B0D12] text-white">

  {/* mesh background */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(99,102,241,0.18),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(139,92,246,0.16),transparent_40%),radial-gradient(circle_at_50%_80%,rgba(34,211,238,0.14),transparent_40%)]"></div>

  {/* noise overlay */}
  <div className="absolute inset-0 opacity-[0.12] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

  <div className="relative max-w-4xl mx-auto text-center">

    {/* badge */}
    <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 bg-white/5 backdrop-blur mb-10 text-sm font-semibold text-white/80">
      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
      Opportunities Open — Limited Intake
    </div>

    {/* headline */}
    <h1 className="text-4xl md:text-6xl font-extrabold leading-[1.05] tracking-tight mb-8">
      Your First Step Toward a
      <br />
      <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
        Better Income & Secure Future
      </span>
    </h1>

    {/* description */}
    <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-12">
      Looking for an opportunity to earn without stress?
      Whether you are unemployed, retired, a homemaker, or a student,
      Business Junction enables ethical business opportunities you can start immediately.
    </p>

    {/* highlights */}
    <div className="flex flex-col sm:flex-row justify-center gap-6 text-white/85 mb-14">
      <div className="flex items-center gap-3">
        <span className="text-emerald-400 text-xl">✓</span>
        Part-time or Full-time
      </div>
      <div className="flex items-center gap-3">
        <span className="text-emerald-400 text-xl">✓</span>
        Work from home or locally
      </div>
      <div className="flex items-center gap-3">
        <span className="text-emerald-400 text-xl">✓</span>
        No prior experience required
      </div>
    </div>

    {/* CTA */}
    <div className="flex justify-center">
      <a
        href="#lead-form"
        onClick={trackLead}
        className="group relative inline-flex items-center justify-center px-10 py-5 rounded-2xl font-bold text-lg bg-white text-black transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_20px_60px_rgba(255,255,255,0.25)]"
      >
        Get Started Today
        <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500/30 to-cyan-500/30 blur-xl opacity-0 group-hover:opacity-100 transition"></span>
      </a>
    </div>

    {/* trust note */}
    <p className="mt-6 text-sm text-white/50">
      No pressure • No hidden fees • Guided support
    </p>

  </div>
</section>
    
      {/* ================= FORM ================= */}
<section
  id="lead-form"
  className="relative py-28 px-6 bg-slate-50 scroll-mt-32 overflow-hidden"
>
  {/* Decorative accent */}
  <div className="absolute -top-24 left-1/3 w-[420px] h-[420px] bg-indigo-300/30 rounded-full blur-3xl"></div>

  <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">

    {/* LEFT CONTENT */}
    <div>
      <p className="text-sm font-semibold tracking-wide text-indigo-600 uppercase mb-3">
        Get Started
      </p>

      <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-5 leading-tight">
        Submit Your Details for{" "}
        <span className="bg-gradient-to-r from-indigo-700 to-violet-700 bg-clip-text text-transparent">
          Personal Guidance
        </span>
      </h2>

      <p className="text-lg text-slate-600 mb-8 max-w-lg">
        Complete the form and our team will reach out to understand your goals
        and guide you through suitable, ethical income opportunities.
      </p>

      {/* Trust Points */}
      <div className="space-y-4 text-slate-600">
        <div className="flex items-center gap-3">
          <span className="w-9 h-9 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold">
            ✓
          </span>
          <span>No pressure or hidden commitments</span>
        </div>

        <div className="flex items-center gap-3">
          <span className="w-9 h-9 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold">
            ✓
          </span>
          <span>One-to-one guidance from experienced mentors</span>
        </div>

        <div className="flex items-center gap-3">
          <span className="w-9 h-9 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold">
            ✓
          </span>
          <span>Your information remains secure and confidential</span>
        </div>
      </div>
    </div>

    {/* FORM CONTAINER */}
    <div className="relative">
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-400/30 to-cyan-400/30 blur-xl"></div>

      <div className="relative rounded-2xl border border-slate-200/60 bg-white/90 backdrop-blur-md shadow-2xl overflow-hidden">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSedPlnL6oD0Tdc1G05N-QOYETWXAZcl1hRUyW84F4z8lIK9IA/viewform?embedded=true"
          className="w-full h-[540px] border-0"
          title="Business Junction Lead Form"
        />
      </div>
    </div>

  </div>
</section>
      {/* ================= STATS ================= */}
<section className="relative py-24 px-6 bg-white overflow-hidden">
  
  {/* Decorative background blur */}
  <div className="absolute -top-24 left-1/3 w-[420px] h-[420px] bg-indigo-200/40 rounded-full blur-3xl"></div>

  <div className="relative max-w-6xl mx-auto">

    {/* Section Heading */}
    <div className="text-center mb-14">
      <p className="text-sm font-semibold tracking-wide text-indigo-600 uppercase mb-3">
        Trusted Performance
      </p>
      <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900">
        Proven Results That Build Confidence
      </h3>
    </div>

    {/* Stats Grid */}
    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4 text-center">
      {[
        { n: "10K+", l: "People Guided" },
        { n: "5+", l: "Years Experience" },
        { n: "100%", l: "Transparent Process" },
        { n: "24/7", l: "Dedicated Support" },
      ].map((s, i) => (
        <div
          key={i}
          className="group rounded-2xl border border-slate-200/60 bg-white/70 backdrop-blur-md p-10 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
        >
          <p className="text-4xl md:text-5xl font-extrabold mb-3 bg-gradient-to-r from-indigo-700 to-violet-700 bg-clip-text text-transparent">
            {s.n}
          </p>
          <p className="text-slate-600 font-medium group-hover:text-slate-800 transition">
            {s.l}
          </p>
        </div>
      ))}
    </div>

  </div>
</section>

      {/* ================= ABOUT ================= */}
<section
  id="about"
  className="relative py-28 px-6 bg-slate-50 scroll-mt-32 overflow-hidden"
>
  {/* Decorative accent */}
  <div className="absolute -top-24 right-1/4 w-[420px] h-[420px] bg-indigo-300/30 rounded-full blur-3xl"></div>

  <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

    {/* Left Content */}
    <div>
      <p className="text-sm font-semibold tracking-wide text-indigo-600 uppercase mb-3">
        About Us
      </p>

      <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 leading-tight">
        Why Choose{" "}
        <span className="bg-gradient-to-r from-indigo-700 to-violet-700 bg-clip-text text-transparent">
          Business Junction
        </span>
        ?
      </h2>

      <p className="text-slate-600 text-lg mb-10 max-w-xl">
        We believe income opportunities should be simple, ethical, and accessible.
        Our approach is built on guidance, transparency, and long-term value —
        never pressure.
      </p>

      {/* Value Points */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {[
          "Personal mentoring",
          "Proven income models",
          "Long-term growth mindset",
          "Supportive community",
        ].map((item, idx) => (
          <div
            key={idx}
            className="flex items-start gap-4 p-5 rounded-xl bg-white shadow-sm hover:shadow-md transition"
          >
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 font-bold">
              ✔
            </span>
            <span className="text-slate-700 font-medium">{item}</span>
          </div>
        ))}
      </div>
    </div>

    {/* Right Card */}
    <div className="relative">
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-400/40 to-cyan-400/40 blur-xl"></div>

      <div className="relative bg-white/80 backdrop-blur-md p-12 rounded-2xl shadow-xl border border-slate-200/60">
        <h3 className="text-2xl font-extrabold text-slate-900 mb-4">
          Who Can Join?
        </h3>
        <p className="text-slate-700 text-lg leading-relaxed">
          Students, working professionals, homemakers, and retirees —
          anyone motivated to build income ethically with proper guidance
          and a long-term vision.
        </p>
      </div>
    </div>

  </div>
</section>

      {/* ================= What You Get  ================= */}
      <section
  id="what-you-get"
  className="relative py-32 px-6 bg-white overflow-hidden"
>
  {/* soft background accents */}
  <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-indigo-100/60 rounded-full blur-[120px]"></div>
  <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-violet-100/60 rounded-full blur-[120px]"></div>

  <div className="relative max-w-6xl mx-auto">

    {/* heading */}
    <div className="max-w-3xl mb-24">
      <p className="text-sm font-semibold tracking-widest text-indigo-600 uppercase mb-4">
        What You Get
      </p>

      <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
        Simple. Honest.{" "}
        <span className="bg-gradient-to-r from-indigo-700 to-violet-700 bg-clip-text text-transparent">
          Built for Everyone.
        </span>
      </h2>
    </div>

    {/* content layout */}
    <div className="grid lg:grid-cols-2 gap-x-24 gap-y-20">

      {/* left: benefits */}
      <div className="space-y-10">
        {[
          "Trusted income opportunities",
          "Guidance & training provided",
          "Suitable for all age groups",
          "Ethical and transparent system",
          "Growth-oriented ecosystem",
        ].map((item, i) => (
          <div key={i} className="flex items-start gap-6">
            <div className="mt-1 flex-shrink-0">
              <span className="block w-10 h-10 rounded-full bg-gradient-to-br from-indigo-600 to-violet-600 text-white flex items-center justify-center font-bold shadow-md">
                ✓
              </span>
            </div>
            <p className="text-xl text-slate-700 leading-relaxed">
              {item}
            </p>
          </div>
        ))}
      </div>

      {/* right: closing message */}
      <div className="flex items-center">
        <div>
          <h3 className="text-3xl font-extrabold text-slate-900 mb-6">
            Don’t Miss This Opportunity
          </h3>

          <p className="text-lg text-slate-600 mb-10">
            Thousands have already taken the first step.
            <br />
            <span className="font-semibold text-slate-800">
              Now it’s your turn.
            </span>
          </p>

          <div className="space-y-4 text-lg text-slate-700">
            <p className="flex items-center gap-3">
              <span className="text-indigo-600 text-xl">→</span>
              Submit your details today
            </p>
            <p className="flex items-center gap-3">
              <span className="text-indigo-600 text-xl">→</span>
              Get guidance from Business Junction experts
            </p>
            <p className="flex items-center gap-3">
              <span className="text-indigo-600 text-xl">→</span>
              Start building your income journey
            </p>
          </div>
        </div>
      </div>

    </div>

  </div>
</section>

     {/* ================= TESTIMONIALS ================= */}
      <section
  id="testimonials"
  className="relative py-28 px-6 bg-white scroll-mt-32 overflow-hidden"
>
  {/* Decorative accent */}
  <div className="absolute -top-24 right-1/4 w-[420px] h-[420px] bg-indigo-200/40 rounded-full blur-3xl"></div>

  <div className="relative max-w-6xl mx-auto text-center">

    {/* Section Heading */}
    <div className="mb-20">
      <p className="text-sm font-semibold tracking-wide text-indigo-600 uppercase mb-3">
        Testimonials
      </p>
      <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
        Real People.{" "}
        <span className="bg-gradient-to-r from-indigo-700 to-violet-700 bg-clip-text text-transparent">
          Real Results
        </span>
      </h2>
      <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
        Hear from individuals who have taken the first step and experienced
        clarity, confidence, and steady progress.
      </p>
    </div>

    {/* Testimonials Grid */}
    <div className="grid gap-8 md:grid-cols-2 text-left">
      <Testimonial name="Ramesh" role="Retired" />
      <Testimonial name="Lakshmi" role="Homemaker" />
      <Testimonial name="Rahul" role="Student" />
      <Testimonial name="Suresh" role="Job Seeker" />
    </div>

  </div>
</section>

      {/* ================= FAQ ================= */}
<section
  id="faq"
  className="relative py-28 px-6 bg-slate-50 scroll-mt-32 overflow-hidden"
>
  {/* Decorative accent */}
  <div className="absolute -top-24 left-1/3 w-[420px] h-[420px] bg-indigo-300/30 rounded-full blur-3xl"></div>

  <div className="relative max-w-4xl mx-auto">

    {/* Section Heading */}
    <div className="text-center mb-16">
      <p className="text-sm font-semibold tracking-wide text-indigo-600 uppercase mb-3">
        Help Center
      </p>
      <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
        Frequently Asked{" "}
        <span className="bg-gradient-to-r from-indigo-700 to-violet-700 bg-clip-text text-transparent">
          Questions
        </span>
      </h2>
      <p className="mt-4 text-slate-600">
        Clear answers to common questions before you get started.
      </p>
    </div>

    {/* FAQ Items */}
    <div className="space-y-4">
      {[
        {
          q: "Is prior experience required?",
          a: "No prior experience is needed. You will receive complete guidance and structured support from our team.",
        },
        {
          q: "Is this part-time or full-time?",
          a: "You can participate part-time or full-time, depending on your availability and goals.",
        },
        {
          q: "Is the process ethical and transparent?",
          a: "Yes. Our approach is fully ethical, transparent, and focused on long-term sustainability.",
        },
      ].map((f, i) => (
        <div
          key={i}
          className="rounded-2xl border border-slate-200/60 bg-white shadow-sm"
        >
          <button
            onClick={() => setOpenFaq(openFaq === i ? null : i)}
            className="w-full flex items-center justify-between px-6 py-5 text-left font-semibold text-slate-900"
          >
            <span>{f.q}</span>
            <span
              className={`text-xl transition-transform ${
                openFaq === i ? "rotate-45" : ""
              }`}
            >
              +
            </span>
          </button>

          {openFaq === i && (
            <div className="px-6 pb-5 text-slate-600 leading-relaxed">
              {f.a}
            </div>
          )}
        </div>
      ))}
    </div>

  </div>
</section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-slate-900 text-slate-300 py-14 px-6 text-center">
  <p className="text-xl font-extrabold mb-2">
    <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
      Business Junction
    </span>
  </p>

  <p className="text-slate-400 mb-6">
    Ethical Income Opportunities with Guidance and Transparency
  </p>

  <div className="w-24 h-px bg-slate-700 mx-auto mb-6"></div>

  <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-400 mb-6">
    <a href="#about" className="hover:text-white transition">About</a>
    <a href="#faq" className="hover:text-white transition">FAQ</a>
    <a href="#lead-form"    onClick={trackLead} className="hover:text-white transition">Contact</a>
  </div>

  <p className="text-xs text-slate-500">
    © {new Date().getFullYear()} Business Junction. All rights reserved.
  </p>
</footer>

    </div>
  );
}

/* ================= COMPONENT ================= */

function Testimonial({ name, role }) {
  return (
    <div className="group bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition">

      <p className="text-slate-600 leading-relaxed mb-6">
        “Business Junction provided clear guidance, ethical practices, and the
        confidence to move forward with a structured income path.”
      </p>

      <div className="flex items-center gap-4">
        <div className="w-11 h-11 rounded-full bg-gradient-to-br from-indigo-600 to-violet-600 text-white flex items-center justify-center font-bold">
          {name.charAt(0)}
        </div>

        <div>
          <p className="font-semibold text-slate-900">{name}</p>
          <p className="text-sm text-slate-500">{role}</p>
        </div>
      </div>

    </div>
  );
}
