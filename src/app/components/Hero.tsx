import React, { useState } from "react";
import { Phone, MessageCircle, Loader2, CheckCircle, ChevronDown } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const HERO_IMG = "https://images.unsplash.com/photo-1594993964054-ea538f381fba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjBtYW4lMjBrbmVlJTIwcGFpbiUyMHBoeXNpb3RoZXJhcHklMjBzZXNzaW9ufGVufDF8fHx8MTc3ODE1MTk3OXww&ixlib=rb-4.1.0&q=80&w=1080";

const VISIT_TYPES = ["Clinic Visit", "Home Visit"];
const CONCERNS = [
  "Back / Spine Pain",
  "Knee / Joint Pain",
  "Sports Injury",
  "Post-Surgery Rehab",
  "Neck / Shoulder Pain",
  "Women's Health",
  "Posture Correction",
  "Other",
];

function BookingForm() {
  const [form, setForm] = useState({ name: "", phone: "", concern: "", location: "", visit: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 1000);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 py-12 text-center">
        <CheckCircle size={40} style={{ color: "#0D9488" }} />
        <p className="text-lg font-semibold text-gray-900">Request Received!</p>
        <p className="text-gray-500 text-sm">We will call you within 24 hours to confirm your appointment.</p>
        <button onClick={() => setSubmitted(false)} className="text-sm underline" style={{ color: "#0D9488" }}>Submit another</button>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="flex flex-col gap-4">
      <div className="grid grid-cols-2 gap-3">
        <div className="col-span-2">
          <input
            required
            type="text"
            placeholder="Your Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full px-4 py-3.5 rounded-xl border border-gray-200 text-gray-800 placeholder-gray-400 text-sm focus:outline-none focus:border-teal-500 bg-gray-50"
          />
        </div>
        <div className="col-span-2">
          <input
            required
            type="tel"
            placeholder="Phone Number"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className="w-full px-4 py-3.5 rounded-xl border border-gray-200 text-gray-800 placeholder-gray-400 text-sm focus:outline-none focus:border-teal-500 bg-[#ffffff]"
          />
        </div>
        <div className="col-span-2">
          <input
            type="text"
            placeholder="Type your concern"
            value={form.concern}
            onChange={(e) => setForm({ ...form, concern: e.target.value })}
            className="w-full px-4 py-3.5 rounded-xl border border-gray-200 text-gray-700 placeholder-gray-400 text-sm focus:outline-none focus:border-teal-500 bg-gray-50"
          />
        </div>
        <div className="col-span-2">
          <input
            type="text"
            placeholder="Your Location (e.g. Delhi)"
            value={form.location}
            onChange={(e) => setForm({ ...form, location: e.target.value })}
            className="w-full px-4 py-3.5 rounded-xl border border-gray-200 text-gray-800 placeholder-gray-400 text-sm focus:outline-none focus:border-teal-500 bg-gray-50"
          />
        </div>
      </div>
      <div className="flex gap-3">
        {VISIT_TYPES.map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => setForm({ ...form, visit: t })}
            className="flex-1 py-3 rounded-xl border text-sm font-medium transition-all"
            style={{
              borderColor: form.visit === t ? "#0D9488" : "#e5e7eb",
              backgroundColor: form.visit === t ? "#f0fdfa" : "#f9fafb",
              color: form.visit === t ? "#0D9488" : "#6b7280",
            }}
          >
            {t}
          </button>
        ))}
      </div>
      <button
        type="submit"
        disabled={loading}
        className="w-full py-4 rounded-xl text-white font-semibold text-base flex items-center justify-center gap-2 transition-all hover:opacity-90"
        style={{ backgroundColor: "#0D9488" }}
      >
        {loading ? <><Loader2 size={18} className="animate-spin" /> Submitting...</> : "Book My Consultation"}
      </button>
      
    </form>
  );
}

export function Hero() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="pt-20 min-h-screen flex items-stretch" style={{ backgroundColor: "#f8fafb" }}>
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-0 flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 w-full items-center">

          {/* Left */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-5">
              <h1
                className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-none tracking-tight"
              >
                
                <span className="block" style={{ color: "#0D9488" }}> <span style={{ color: "black" }}>Move</span> Better</span>
                <span className="block">Live Pain Free</span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-500 font-normal max-w-md" style={{ lineHeight: "1.6" }}>
                 From Pain Relief to Full Recovery,
                <p>NV The Sports Physio Is With You At Every Step.</p>
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => scrollTo("#booking")}
                className="px-8 py-4 rounded-full text-white font-semibold text-base shadow-lg hover:opacity-90 transition-all"
                style={{ backgroundColor: "#0D9488" }}
              >
                Book Appointment
              </button>
              <a
                href="tel:+918076372077"
                className="flex items-center gap-2 px-7 py-4 rounded-full font-semibold text-base border-2 transition-all hover:bg-gray-50"
                style={{ borderColor: "#0D9488", color: "#0D9488" }}
              >
                <Phone size={18} />
                Call Now
              </a>
              <a
                href="https://wa.me/918076372077"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-7 py-4 rounded-full font-semibold text-base border-2 transition-all hover:bg-green-50"
                style={{ borderColor: "#25D366", color: "#25D366" }}
              >
                <MessageCircle size={18} />
                WhatsApp
              </a>
            </div>

            {/* Trust stats */}
            <div className="flex items-stretch gap-0 pt-2 divide-x divide-gray-200 border border-gray-200 rounded-2xl overflow-hidden w-fit">
              {[
                { value: "17+", label: "Years Experience" },
                { value: "BPT, MPT", label: "Qualified" },
                { value: "1,200+", label: "Patients" },
              ].map((s) => (
                <div key={s.label} className="flex flex-col gap-0.5 px-6 py-4 bg-white">
                  <span className="text-2xl font-bold" style={{ color: "#0D9488" }}>{s.value}</span>
                  <span className="text-sm text-gray-500">{s.label}</span>
                </div>
              ))}
            </div>

            {/* Hero image */}
            <div className="rounded-2xl overflow-hidden shadow-xl mt-2">
              
            </div>
          </div>

          {/* Right - Form */}
          <div
            className="rounded-3xl p-8 lg:p-10 shadow-2xl border border-gray-100"
            style={{ backgroundColor: "rgba(67, 146, 135, 0.25)" }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-1">Request a Consultation</h2>
            
            <BookingForm />
          </div>

        </div>
      </div>
    </section>
  );
}