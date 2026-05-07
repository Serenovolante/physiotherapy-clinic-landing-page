import image_NV_sports_logo_2 from '@/imports/NV_sports_logo-2.png'
import image_NV_sports_logo_1 from '@/imports/NV_sports_logo-1.png'
import React, { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import nvLogo from "../../imports/NV_sports_logo.png";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Location", href: "#location" },
  { label: "FAQ", href: "#faq" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? "rgba(0,0,0,0.97)" : "#000000",
        boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.3)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-18 lg:h-20" style={{ height: "72px" }}>

          {/* Logo */}
          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="outline-none shrink-0">
            <img src={image_NV_sports_logo_2} alt="NV The Sports Physio Clinic" className="h-16 w-auto" />
          </button>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollTo(link.href)}
                className="text-white/70 hover:text-white transition-colors text-base font-medium"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+919211581728"
              className="flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm font-medium"
            >+91 92115 81728</a>
            <button
              onClick={() => scrollTo("#booking")}
              className="px-6 py-3 rounded-full text-white text-sm font-semibold transition-all hover:opacity-90"
              style={{ backgroundColor: "#0D9488" }}
            >
              Book Appointment
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-white/10" style={{ backgroundColor: "#000" }}>
          <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollTo(link.href)}
                className="text-left px-3 py-3 text-white/80 hover:text-white text-base font-medium transition-colors"
              >
                {link.label}
              </button>
            ))}
            <div className="pt-3 mt-2 border-t border-white/10">
              <button
                onClick={() => scrollTo("#booking")}
                className="w-full py-3.5 rounded-full text-white text-base font-semibold"
                style={{ backgroundColor: "#0D9488" }}
              >
                Book Appointment
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}