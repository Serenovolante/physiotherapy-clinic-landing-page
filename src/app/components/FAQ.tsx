import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";

const faqs = [
  {
    q: "How do I book an appointment?",
    a: "Fill out the form on this page, call us on +91 92115 81728, or message us on WhatsApp. We confirm appointments within 24 hours.",
  },
  {
    q: "Do you offer home visits?",
    a: "Yes. We provide home visits across Delhi. The quality of treatment is the same as the clinic. Call +91 92115 81728 for home visit pricing.",
  },
  {
    q: "What conditions do you treat?",
    a: "Sports injuries, ACL rehab, back and neck pain, post-surgical rehab, knee and joint pain, frozen shoulder, women's health physio, neurological conditions, posture correction, and more.",
  },
  {
    q: "Do I need X-rays or MRIs before coming?",
    a: "No. Dr. Vineet and Dr. Nilima use hands-on clinical diagnosis. You do not need to bring any scans or reports for your first visit.",
  },
  {
    q: "What is the session fee?",
    a: "Clinic sessions with Dr. Vineet or Dr. Nilima are priced at Rs. 1,200 per session. Home visit pricing is available on request.",
  },
  {
    q: "How many sessions will I need?",
    a: "After your assessment, we give you a personalised treatment plan with a clear timeline. Most conditions show significant improvement within 4 to 8 sessions.",
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