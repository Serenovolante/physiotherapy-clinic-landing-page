import React from "react";
import { MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react";
import nvLogo from "../../imports/NV_sports_logo.png";
import { Link } from "react-router-dom";

export function Footer() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer style={{ backgroundColor: "#0F172A" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-14 bg-[#ffffff]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="flex flex-col gap-5 lg:col-span-2">

            <p className="text-sm max-w-xs text-[#000000]" style={{ lineHeight: "1.7" }}>Professional sports physiotherapy and rehabilitation in Delhi. </p>
            <div className="flex gap-3">
              {[{ Icon: Instagram, href: "https://www.instagram.com/nvthesportsphysio" }, { Icon: Facebook, href: "https://www.facebook.com/share/1BpV88adv6/" }].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-opacity hover:opacity-70 px-[1px] p-[0px]"
                  style={{ backgroundColor: "#1E293B" }}
                >
                  <Icon size={15} color="#94A3B8" />
                </a>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div className="flex flex-col gap-4 bg-[#ffffff]">
            <h4 className="text-xs font-bold tracking-widest uppercase text-white">
              Navigation
            </h4>

            <ul className="flex flex-col gap-3 bg-[#ffffff]">
              {[
                ["About", "#about"],
                ["Services", "#services"],
                ["Testimonials", "#testimonials"],
                ["Location", "#location"],
                ["FAQ", "#faq"],
                ["Book Appointment", "#booking"],
              ].map(([label, href]) => (
                <li className="bg-white" key={label}>
                  <button
                    onClick={() => scrollTo(href)}
                    className="text-sm text-black hover:text-gray-600 transition-colors text-left"
                  >
                    {label}
                  </button>
                </li>
              ))}

              <li className="bg-white">
                <Link
                  to="/privacy-policy"
                  className="text-sm text-black hover:text-gray-600 transition-colors text-left"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-bold tracking-widest uppercase text-white">Contact</h4>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-2.5">
                <MapPin size={15} className="mt-0.5 shrink-0" style={{ color: "#0D9488" }} />
                <p className="text-sm text-[#000000]" style={{ lineHeight: "1.6" }}>Block S 50, Basement,<br />Greater Kailash Part II, New Delhi 110048</p>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone size={15} className="shrink-0" style={{ color: "#0D9488" }} />
                <a href="tel:+918076372077" className="text-sm hover:text-white transition-colors text-[#000000]">+91 80763 72077</a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail size={15} className="shrink-0" style={{ color: "#0D9488" }} />
                <a href="mailto:hello@nvsportsphysio.com" className="text-sm hover:text-white transition-colors text-[#000000]">nvthesportsphysio@gmail.com</a>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-5 flex items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} NV The Sports Physio Clinic. All rights reserved.
          </p>
        </div>
      </div>
      <div className="h-1 w-full" style={{ backgroundColor: "#0D9488" }} />
    </footer>
  );
}