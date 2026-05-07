import React, { useState } from "react";
import { Phone, MessageCircle, Loader2, CheckCircle, ChevronDown } from "lucide-react";

const VISIT_TYPES = ["Clinic Visit", "Home Visit"];
const CONCERNS = [
  "Back / Spine Pain",
  "Knee / Joint Pain",
  "Sports Injury",
  "Post-Surgery Rehab",
  "Neck / Shoulder Pain",
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
      <div className="flex flex-col items-center justify-center gap-4 py-14 text-center">
        <CheckCircle size={44} style={{ color: "#0D9488" }} />
        <p className="text-xl font-bold text-gray-900">Request Received!</p>
        <p className="text-gray-500">We will call you within 24 hours to confirm your appointment.</p>
        <button onClick={() => setSubmitted(false)} className="text-sm underline mt-2" style={{ color: "#0D9488" }}>Submit another</button>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="flex flex-col gap-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          required
          type="text"
          placeholder="Your Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full px-5 py-4 rounded-xl border border-gray-200 text-gray-800 placeholder-gray-400 text-base focus:outline-none focus:border-teal-500 bg-gray-50"
        />
        <input
          required
          type="tel"
          placeholder="Phone Number"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          className="w-full px-5 py-4 rounded-xl border border-gray-200 text-gray-800 placeholder-gray-400 text-base focus:outline-none focus:border-teal-500 bg-gray-50"
        />
        <div className="relative">
          <select
            required
            value={form.concern}
            onChange={(e) => setForm({ ...form, concern: e.target.value })}
            className="w-full px-5 py-4 rounded-xl border border-gray-200 text-gray-700 text-base focus:outline-none focus:border-teal-500 bg-gray-50 appearance-none cursor-pointer"
          >
            <option value="" disabled>Your Concern</option>
            {CONCERNS.map((c) => <option key={c} value={c}>{c}</option>)}
          </select>
          <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
        </div>
        <input
          type="text"
          placeholder="Your Location"
          value={form.location}
          onChange={(e) => setForm({ ...form, location: e.target.value })}
          className="w-full px-5 py-4 rounded-xl border border-gray-200 text-gray-800 placeholder-gray-400 text-base focus:outline-none focus:border-teal-500 bg-gray-50"
        />
      </div>

      <div className="flex gap-3">
        {VISIT_TYPES.map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => setForm({ ...form, visit: t })}
            className="flex-1 py-4 rounded-xl border text-base font-medium transition-all"
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
        className="w-full py-5 rounded-xl text-white font-bold text-lg flex items-center justify-center gap-2 transition-all hover:opacity-90 mt-1"
        style={{ backgroundColor: "#0D9488" }}
      >
        {loading ? <><Loader2 size={20} className="animate-spin" /> Submitting...</> : "Book Your Consultation"}
      </button>
    </form>
  );
}

export function Booking() {
  return (
    <section id="booking" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left */}
          <div className="flex flex-col gap-8">
            <div>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Book Your<br />Consultation
              </h2>
              <p className="text-lg text-gray-500 mt-4" style={{ lineHeight: "1.7" }}>
                Fill in your details and we will confirm your appointment within 24 hours.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <a
                href="tel:+919876543210"
                className="flex items-center gap-4 p-5 rounded-2xl border border-gray-200 hover:border-teal-300 transition-all group bg-[#439287]"
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: "#f0fdfa" }}>
                  <Phone size={22} style={{ color: "#0D9488" }} />
                </div>
                <div>
                  <p className="text-sm text-[#ffffff]"><span className="font-bold">Call us directly</span></p>
                  <p className="text-base font-semibold text-[#ffffff]">+91 80763 72077</p>
                </div>
              </a>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 rounded-2xl border border-gray-200 hover:border-green-300 transition-all group bg-[#439287]"
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: "#f0fdf4" }}>
                  <MessageCircle size={22} style={{ color: "#25D366" }} />
                </div>
                <div>
                  <p className="text-sm text-[#ffffff]"><span className="font-bold">Chat on WhatsApp</span></p>
                  <p className="text-base font-semibold text-[#ffffff]">+91 80763 72077</p>
                </div>
              </a>
            </div>
          </div>

          {/* Form */}
          <div
            className="rounded-3xl p-8 lg:p-10 border border-gray-100 bg-[#4392875e]"
            style={{ boxShadow: "0 8px 40px rgba(13,148,136,0.10)" }}
          >
            <BookingForm />
          </div>

        </div>
      </div>
    </section>
  );
}
