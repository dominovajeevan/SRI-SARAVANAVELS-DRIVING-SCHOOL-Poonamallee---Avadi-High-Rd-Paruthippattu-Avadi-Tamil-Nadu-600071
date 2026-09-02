import React, { useEffect, useState } from 'react';
import { Calendar, Star, MessageSquareQuote, Clock, CheckCircle2, XCircle } from 'lucide-react';
import { getBusinessStatus, type BusinessStatus } from '../utils/businessStatus';
import { ScrollReveal } from './ScrollReveal';

export const HeroStats: React.FC = () => {
  const [status, setStatus] = useState<BusinessStatus>(getBusinessStatus());

  useEffect(() => {
    const timer = setInterval(() => {
      setStatus(getBusinessStatus());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  const stats = [
    {
      value: "2013",
      label: "Established",
      sublabel: "Established 2013",
      icon: Calendar,
      highlight: false
    },
    {
      value: "4.4★",
      label: "Customer Rating",
      sublabel: "High Satisfaction",
      icon: Star,
      highlight: true
    },
    {
      value: "48+",
      label: "Customer Reviews",
      sublabel: "Verified Feedback",
      icon: MessageSquareQuote,
      highlight: false
    },
    {
      value: status.isOpen ? "8:00 PM" : "Closed",
      label: status.isOpen ? "Open Until 8:00 PM" : status.text,
      sublabel: status.nextChangeText,
      icon: Clock,
      isStatus: true,
      isOpen: status.isOpen
    }
  ];

  return (
    <section id="stats" className="relative z-20 -mt-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6">
        {stats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <ScrollReveal key={idx} delay={idx * 75}>
              <div
                className={`relative overflow-hidden rounded-2xl p-4 sm:p-6 transition-all duration-300 transform hover:-translate-y-1 ${
                  stat.highlight
                    ? 'bg-[#4B2E5E] text-[#FAF7F2] border-2 border-[#C9A86A] shadow-glow-purple'
                    : 'bg-white border border-[#E8DEC8] hover:border-[#C9A86A]/60 shadow-celestial-card'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className={`p-2.5 rounded-xl ${stat.highlight ? 'bg-[#C9A86A]/20 text-[#E7D4A8]' : 'bg-[#F3EFE7] text-[#4B2E5E]'}`}>
                    <Icon className="w-5 h-5" />
                  </div>

                  {stat.isStatus && (
                    <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold ${
                      stat.isOpen ? 'bg-emerald-500/15 text-emerald-700 border border-emerald-500/30' : 'bg-rose-500/15 text-rose-700 border border-rose-500/30'
                    }`}>
                      {stat.isOpen ? <CheckCircle2 className="w-3 h-3" /> : <XCircle className="w-3 h-3" />}
                      {stat.isOpen ? 'Active' : 'Offline'}
                    </span>
                  )}
                </div>

                <div className="mt-2">
                  <span className={`block text-2xl sm:text-3xl font-extrabold tracking-tight ${
                    stat.highlight ? 'text-[#C9A86A]' : 'text-[#4B2E5E]'
                  }`}>
                    {stat.value}
                  </span>
                  <span className={`block text-xs sm:text-sm font-semibold mt-0.5 ${
                    stat.highlight ? 'text-[#FAF7F2]' : 'text-[#27232A]'
                  }`}>
                    {stat.label}
                  </span>
                  <span className={`block text-[11px] mt-0.5 truncate ${
                    stat.highlight ? 'text-[#E7D4A8]' : 'text-[#665E6E]'
                  }`}>
                    {stat.sublabel}
                  </span>
                </div>
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </section>
  );
};
