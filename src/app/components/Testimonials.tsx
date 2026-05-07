import React from "react";

const testimonials = [
  {
    initials: "SA",
    name: "Shashank A.",
    condition: "ACL Recovery",
    quote: "Dr. Vineet helped me recover from an ACL injury without surgery. His hands-on approach and clear rehab plan made all the difference. Back to full activity now.",
    color: "#0D9488",
  },
  {
    initials: "RA",
    name: "Rashi A.",
    condition: "Frozen Shoulder",
    quote: "Our family has been coming to Dr. Nilima for 6 years. The improvement in my frozen shoulder has been remarkable. She genuinely cares about long-term recovery, not just short-term relief.",
    color: "#0F172A",
  },
  {
    initials: "MS",
    name: "Monali S.",
    condition: "Knee Pain",
    quote: "If I could give 10 stars, I would. The treatment was precise, the results were fast, and the entire team made me feel heard at every step.",
    color: "#0D9488",
  },
  {
    initials: "MT",
    name: "Manasi T.",
    condition: "Children's Fitness",
    quote: "I noticed a real improvement in my children's fitness, concentration, and emotional management after sessions here. Truly a holistic approach to health.",
    color: "#0F172A",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5">
      {[1,2,3,4,5].map((i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#FBBF24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">What Our Patients Say</h2>
          <p className="text-base text-gray-500 mt-3">5.0★ on Practo (62 reviews) · 4.9★ on Justdial (163 reviews)</p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="flex flex-col gap-4 p-7 rounded-2xl border border-gray-100 bg-[#43928742]"
              style={{ boxShadow: "0 2px 16px rgba(0,0,0,0.05)" }}
            >
              <Stars />
              <p className="text-base text-gray-700 flex-1" style={{ lineHeight: "1.7" }}>
                "{t.quote}"
              </p>
              <div className="flex items-center gap-3 pt-2 border-t border-gray-100">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0"
                  style={{ backgroundColor: t.color }}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">{t.name}</p>
                  <p className="text-xs mt-0.5" style={{ color: "#0D9488" }}>{t.condition}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}