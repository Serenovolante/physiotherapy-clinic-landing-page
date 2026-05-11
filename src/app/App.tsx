import React from "react";
import { Routes, Route } from "react-router-dom";

import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Testimonials } from "./components/Testimonials";
import { Location } from "./components/Location";
import { Booking } from "./components/Booking";
import { FAQ } from "./components/FAQ";
import { Footer } from "./components/Footer";
import PrivacyPolicy from "./components/PrivacyPolicy";

function HomePage() {
  return (
    <div
      className="min-h-screen antialiased"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <Header />

      <main>
        <Hero />
        <About />
        <Services />
        <Testimonials />
        <Location />
        <Booking />
        <FAQ />
      </main>

      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
    </Routes>
  );
}