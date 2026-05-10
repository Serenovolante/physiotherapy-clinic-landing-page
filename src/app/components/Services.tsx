import React from "react";
import { Droplets, Zap, Bone, AlignCenter, Brain } from "lucide-react";

const services = [
  {
    icon: <Droplets size={26} />,
    title: "Sports Injury Rehab",
    desc: "Expert physiotherapy for sports injuries and recovery from sprains, muscle tears and more.",
  },
  {
    icon: <Zap size={26} />,
    title: "Back & Spine Pain",
    desc: "Targeted manual physiotherapy for acute and chronic back pain.",
  },
  {
    icon: <Bone size={26} />,
    title: "Cupping Therapy",
    desc: "Helps improve blood circulation, reduce muscle tightness, and promote natural healing.",
  },
  {
    icon: <AlignCenter size={26} />,
    title: "Shockwave Therapy",
    desc: "A non-invasive treatment under physiotherapy plans designed to relieve chronic pain and accelerate tissue recovery.",
  },
  {
    icon: <Brain size={26} />,
    title: "Advanced Manipulative Osteopathy & Chiropractic Adjustment",
    desc: "Restores joint mobility, improves alignment, and reduces spine and muscle discomfort.",
  },
  {
    icon: <Brain size={26} />,
    title: "Posture Correction",
    desc: "Helps correct body alignment issues caused by poor posture, long sitting hours, and daily strain.",
  },
  {
    icon: <Brain size={26} />,
    title: "Craniosacral Therapy",
    desc: "A gentle therapy under physiotherapy that relieves stress, releases tension, and supports overall body balance and relaxation.",
  }
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
              className="flex flex-row items-start gap-5 p-6 rounded-2xl bg-white transition-all cursor-default"
              style={{
                outline: "1px solid #f3f4f6",
                boxShadow: "inset 4px 0 0 #0D9488, 0 1px 3px 0 rgba(0,0,0,0.07)",
              }}
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