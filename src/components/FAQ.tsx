import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import type { FAQItem } from '../types';
import { ScrollReveal } from './ScrollReveal';

export const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const faqs: FAQItem[] = [
    {
      id: "faq-1",
      question: "What are the various modes of payment accepted?",
      answer: "Payment can be made via Cash or UPI only."
    },
    {
      id: "faq-2",
      question: "Where is SRI SARAVANAVELS DRIVING SCHOOL located?",
      answer: "No 3, PH Road, Iyyankulam, Paruthipattu, Avadi, Chennai 71."
    },
    {
      id: "faq-3",
      question: "What are the operating hours?",
      answer: "Monday to Saturday: 9:00 AM – 8:00 PM. Sunday: Closed."
    },
    {
      id: "faq-4",
      question: "Does the school provide motor training?",
      answer: "Yes. Motor training is one of the primary services provided by the school."
    },
    {
      id: "faq-5",
      question: "Is training available for women?",
      answer: "Yes. The supplied business information lists training for women learners."
    },
    {
      id: "faq-6",
      question: "How much do the driving classes cost?",
      answer: "Pricing should be confirmed directly with the driving school. We display 'Ask for Price' rather than inventing unverified course fees."
    },
    {
      id: "faq-7",
      question: "Does the school provide driving license consultation?",
      answer: "Yes. Driving license consultation is listed among the services offered."
    }
  ];

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-[#FAF7F2] bg-celestial-pattern relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#4B2E5E] bg-[#F3EFE7] px-3.5 py-1 rounded-full border border-[#C9A86A]/40 shadow-sm">
              COMMON QUESTIONS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#4B2E5E] tracking-tight">
              Frequently Asked <span className="gradient-text-gold">Questions</span>
            </h2>
            <p className="text-[#665E6E] text-base">
              Everything you need to know about SRI SARAVANAVELS DRIVING SCHOOL.
            </p>
          </div>
        </ScrollReveal>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openId === faq.id;
            return (
              <ScrollReveal key={faq.id} delay={idx * 50}>
                <div
                  className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? 'bg-white border-[#C9A86A] shadow-glow-gold'
                      : 'bg-white hover:bg-[#FAF7F2] border-[#E8DEC8]'
                  }`}
                >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4"
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle className={`w-5 h-5 shrink-0 ${isOpen ? 'text-[#C9A86A]' : 'text-[#72548C]'}`} />
                    <span className="text-base sm:text-lg font-bold text-[#4B2E5E] leading-snug">
                      {faq.question}
                    </span>
                  </div>
                  <div className={`p-1.5 rounded-lg bg-[#F3EFE7] text-[#4B2E5E] transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#4B2E5E] bg-[#E7D4A8]/60' : ''}`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-[#27232A]/85 border-t border-[#E8DEC8] leading-relaxed animate-fadeIn">
                    <p className="pl-8">{faq.answer}</p>
                  </div>
                )}
              </div>
            </ScrollReveal>
          );
        })}
        </div>

      </div>
    </section>
  );
};
