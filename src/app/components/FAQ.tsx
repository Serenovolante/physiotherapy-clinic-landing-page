import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";

const faqs = [
  {
    q: "What conditions do you treat?",
    a: "Our physiotherapy sessions help treat back pain, neck pain, sports injuries, posture-related issues, joint pain, muscle stiffness, headaches, mobility problems, and more.",
  },
  {
    q: " How do I know which therapy is right for me?",
    a: "NV The Sports Physio has specialists to assess your condition and recommend a personalized physiotherapy plan based on your pain, movement, and recovery goals. You can choose to visit our clinic for the sessions or can opt for home physiotherapy sessions too.",
  },
  {
    q: "Is physiotherapy painful?",
    a: "Most treatments are gentle and designed to reduce pain, improve mobility, and help your body heal naturally. However, based on your condition some therapies may cause mild temporary soreness.",
  },
  {
    q: "How many sessions will I need?",
    a: "The number of physiotherapy sessions needed by a patient depends on your condition, severity, and recovery progress. Many patients start noticing improvement within a few sessions.",
  },
  {
    q: "Is Chiropractic Adjustment safe?",
    a: "Yes. Our adjustments are performed by trained professionals using safe, controlled techniques to improve alignment and mobility.",
  },
  {
    q: "Do I need a doctor’s referral before visiting?",
    a: "No referral is needed. You can directly book an appointment with our clinic. Our specialists will assess your condition and suggest the best treatment.",
  },
  {
    q: "How long does each session take?",
    a: "Most therapy sessions typically last between 30 to 60 minutes depending on the physiotherapy plan being recommended to you.",
  },
  {
    q: "How can I book an appointment?",
    a: "You can easily call us on the mentioned number, send us a whatsapp message or fill out the appointment form to schedule your consultation.",
  },
  {
    q: "Can physiotherapy help prevent future injuries?",
    a: "Yes. Physiotherapy not only treats pain but also improves strength, mobility, posture and other body mechanics to help prevent recurring injuries.",
  },
  {
    q: "Do you offer personalized treatment plans?",
    a: "Absolutely. At NV The Sports Physio, every patient receives a customized physio plan tailored to their condition and recovery goals.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-20 lg:py-28" style={{ backgroundColor: "#f8fafb" }}>
      <div className="max-w-3xl mx-auto px-6 lg:px-10">

        <div className="text-center mb-14">
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">Frequently Asked Questions</h2>
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden" style={{ boxShadow: "0 2px 20px rgba(0,0,0,0.05)" }}>
          <Accordion type="single" collapsible>
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="px-7 border-gray-100 bg-[#4392874a]">
                <AccordionTrigger className="py-6 text-left text-base font-semibold text-gray-900 hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-base text-gray-600 pb-2" style={{ lineHeight: "1.75" }}>{faq.a}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

      </div>
    </section>
  );
}