import drVineetPhoto from '@/imports/dr-vineet-aLjLQLIa__1_.jpg'
import drNilimaPhoto from '@/imports/dr-nilima-BLKru97b.jpg'
import React from "react";

const DR_NILIMA_IMG = "https://images.unsplash.com/photo-1644335326474-544fbcf8855f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjBmZW1hbGUlMjBkb2N0b3IlMjBwaHlzaW90aGVyYXBpc3QlMjBwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzgxNTY3OTh8MA&ixlib=rb-4.1.0&q=80&w=1080";

const doctors = [
  {
    img: drVineetPhoto,
    name: "Dr. Vineet Mutneja",
    role: "Founder",
    quals: "MPTh Sports Physiotherapy, BPTh",
    quote: "No X-rays, no guesswork. Just hands-on diagnosis and real recovery.",
    stats: "17 years experience · 99% recommendation",
    bullets: [
      "Sports injuries and ACL rehabilitation",
      "Knee pain and musculoskeletal conditions",
      "Dry needling and manual therapy",
      "Frozen shoulder and chronic pain",
    ],
    bottomText:
      "Get healing that focuses on the root cause & not just symptoms.",
  },
  {
    img: drNilimaPhoto,
    name: "Dr. Nilima Bhatt",
    role: "Director",
    quals: "Dubai Health Authority Registered · CEAS III Ergonomics (USA)",
    quote: "Every patient deserves care that goes beyond symptom management.",
    stats: "IAP Member since 2010 · Ex-Medeor Hospital Dubai",
    bullets: [
      "Sports Injury Management",
      "Musculoskeletal Dysfunction",
      "Chronic Pain Management",
      "Pre and Post-Operative Surgery Rehabilitation",
      "Women’s Health Rehabilitation",
      "Ergonomic and Lifestyle Advice"
    ],
    bottomText:
      "Get compassionate care backed by modern physiotherapy techniques.",
  },
];

export function About() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="mb-14">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">Meet Our Doctors</h2>
          <p className="text-lg text-gray-500 mt-3 max-w-2xl" style={{ lineHeight: "1.7" }}>
            Two highly qualified specialists supported by a skilled team of physiotherapists delivering personalized therapy sessions. One clinic. All committed to helping you recover faster and move better.

          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {doctors.map((doc) => (
            <div key={doc.name} className="flex flex-col rounded-3xl border border-gray-100 shadow-sm p-8 bg-[#43928752]">

              {/* Avatar + name row */}
              <div className="flex items-center gap-5 mb-6">
                <div
                  className="relative w-24 h-24 rounded-full shrink-0 overflow-hidden"
                  style={{ border: "3px solid #0D9488", boxShadow: "0 4px 16px rgba(13,148,136,0.18)" }}
                >
                  <img
                    src={doc.img}
                    alt={doc.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    <h3 className="text-2xl font-bold text-gray-900">{doc.name}</h3>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full" style={{ backgroundColor: "#f0fdfa", color: "#0D9488" }}>{doc.role}</span>
                  </div>
                  <p className="text-sm text-gray-500">{doc.quals}</p>
                  <p className="text-xs mt-1 font-medium" style={{ color: "#0D9488" }}>{doc.stats}</p>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col gap-5">
                <blockquote
                  className="text-base font-medium text-gray-700 border-l-4 pl-4"
                  style={{ borderColor: "#0D9488", lineHeight: "1.6" }}
                >
                  "{doc.quote}"
                </blockquote>

                <div className="flex flex-col gap-2.5">
                  {doc.bullets.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{ backgroundColor: "#f0fdfa" }}>
                        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "#0D9488" }} />
                      </div>
                      <p className="text-gray-700 text-sm">{item}</p>

                    </div>

                  ))}

                </div>
                <p className="text-sm font-medium mt-auto  text-gray-800">
                  {doc.bottomText}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}