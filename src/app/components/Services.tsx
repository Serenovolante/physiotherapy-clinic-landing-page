import React from "react";
import { Activity, Bone, Dumbbell, Zap } from "lucide-react";

const services = [
  { icon: <Activity size={26} />, title: "Sports Injury Rehab", desc: "For athletes recovering from sprains, tears, and overuse injuries." },
  { icon: <Bone size={26} />, title: "Back and Spine Pain", desc: "Manual therapy and targeted exercise for chronic and acute back pain." },
  { icon: <Dumbbell size={26} />, title: "Post-Surgery Recovery", desc: "Structured rehab after knee, hip, or spinal surgeries." },
  { icon: <Zap size={26} />, title: "Dry Needling", desc: "Targeted pain relief and muscle release using fine needles." },
];

export function Services() {
  return (
    <section id="services" className="py-20 lg:py-28" style={{ backgroundColor: "#f8fafb" }}>
      <div className="max-w-5xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Our Services
          </h2>
        </div>

        {/* 2x2 horizontal cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {services.map((s) => (
            <div
              key={s.title}
              className="flex flex-row items-start gap-5 p-6 rounded-2xl bg-white shadow-sm border border-gray-100 border-l-4 transition-all hover:shadow-md cursor-default"
              style={{ borderLeftColor: "#0D9488" }}
            >
              <div
                className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center mt-0.5"
                style={{ backgroundColor: "#f0fdfa", color: "#0D9488" }}
              >
                {s.icon}
              </div>
              <div>
                <h3 className="text-base font-semibold text-gray-900 mb-1">{s.title}</h3>
                <p className="text-sm text-gray-500" style={{ lineHeight: "1.65" }}>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}