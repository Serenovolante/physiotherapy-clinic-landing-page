import React from "react";
import { MapPin, Clock, Phone } from "lucide-react";

export function Location() {
  return (
    <section id="location" className="py-20 lg:py-28" style={{ backgroundColor: "#f8fafb" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="mb-14">
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">Location</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* Map placeholder */}
          <div
            className="rounded-2xl overflow-hidden border border-gray-200 flex items-center justify-center relative"
            style={{ minHeight: "360px", backgroundColor: "#e8f5f4" }}
          >
            <svg className="absolute inset-0 w-full h-full opacity-15" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="mapgrid" width="48" height="48" patternUnits="userSpaceOnUse">
                  <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#0D9488" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#mapgrid)" />
              <line x1="0" y1="50%" x2="100%" y2="50%" stroke="#0D9488" strokeWidth="3" opacity="0.4" />
              <line x1="40%" y1="0" x2="40%" y2="100%" stroke="#0D9488" strokeWidth="3" opacity="0.4" />
            </svg>
            <div className="relative z-10 flex flex-col items-center gap-3">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center shadow-xl"
                style={{ backgroundColor: "#0D9488" }}
              >
                <MapPin size={28} color="white" />
              </div>
              <div
                className="px-5 py-3 rounded-xl text-center shadow-lg"
                style={{ backgroundColor: "#fff" }}
              >
                <p className="text-sm font-semibold text-gray-900">NV Sports Physio Clinic</p>
                <p className="text-xs text-gray-500 mt-0.5">Greater Kailash 2, New Delhi</p>
              </div>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-full text-white text-sm font-medium mt-1"
                style={{ backgroundColor: "#0D9488" }}
              >
                Open in Google Maps
              </a>
            </div>
          </div>

          {/* Details */}
          <div className="flex flex-col gap-6">
            <div className="rounded-2xl p-8" style={{ backgroundColor: "rgba(13, 148, 136, 0.18)", boxShadow: "0 4px 24px rgba(13,148,136,0.10)" }}>
              <div className="flex items-start gap-4 mb-7">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: "rgba(13,148,136,0.2)" }}>
                  <MapPin size={22} style={{ color: "#0D9488" }} />
                </div>
                <div>
                  <p className="font-semibold uppercase tracking-wider mb-1 text-[16px]" style={{ color: "#0D9488" }}>Clinic Address</p>
                  <p className="text-lg font-bold" style={{ color: "#000" }}>Block S 50, Basement, Greater Kailash Part II, New Delhi 110048</p>
                  <p className="text-sm font-medium mt-1" style={{ color: "#0D9488" }}>Near K R Mangalam School</p>
                </div>
              </div>

              <div className="flex items-start gap-4 mb-7">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: "rgba(13,148,136,0.2)" }}>
                  <Phone size={22} style={{ color: "#0D9488" }} />
                </div>
                <div>
                  <p className="font-semibold uppercase tracking-wider mb-1 text-[16px]" style={{ color: "#0D9488" }}>Phone</p>
                  <a href="tel:+919211581728" className="text-lg font-bold hover:underline" style={{ color: "#000" }}>+91 92115 81728</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: "rgba(13,148,136,0.2)" }}>
                  <Clock size={22} style={{ color: "#0D9488" }} />
                </div>
                <div>
                  <p className="font-semibold uppercase tracking-wider mb-2 text-[16px]" style={{ color: "#0D9488" }}>Clinic Hours</p>
                  <p className="text-lg font-bold" style={{ color: "#000" }}>Mon to Sat: 8:00 AM to 9:00 PM</p>
                  <p className="text-lg font-bold" style={{ color: "#000" }}>Sunday: 11:30 AM to 9:00 PM</p>
                </div>
              </div>
            </div>

            
          </div>

        </div>
      </div>
    </section>
  );
}