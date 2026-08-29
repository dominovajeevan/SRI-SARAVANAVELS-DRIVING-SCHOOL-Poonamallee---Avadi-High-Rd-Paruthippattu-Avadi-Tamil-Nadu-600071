import React from 'react';
import { BookOpen, Key, TrendingUp, CheckCheck } from 'lucide-react';

export const LearningProcess: React.FC = () => {
  const steps = [
    {
      number: "01",
      title: "Understand",
      description: "Learn the fundamentals of vehicle controls and road safety.",
      icon: BookOpen
    },
    {
      number: "02",
      title: "Practice",
      description: "Build practical skills with guided training.",
      icon: Key
    },
    {
      number: "03",
      title: "Improve",
      description: "Develop confidence through repeated practical driving.",
      icon: TrendingUp
    },
    {
      number: "04",
      title: "Drive Confidently",
      description: "Apply safe driving habits and become more comfortable on the road.",
      icon: CheckCheck
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#F3EFE7] border-t border-[#E8DEC8] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#4B2E5E] bg-[#FAF7F2] px-3 py-1 rounded-full border border-[#C9A86A]/40 shadow-sm">
            STEP-BY-STEP METHODOLOGY
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#4B2E5E] tracking-tight">
            Safety & <span className="gradient-text-gold">Learning Process</span>
          </h2>
          <p className="text-[#665E6E] text-base sm:text-lg">
            Structured road training designed to build lifelong driving confidence.
          </p>
        </div>

        {/* 4-Step Timeline Container */}
        <div className="relative">
          
          {/* Horizontal Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-12 right-12 h-0.5 bg-gradient-to-r from-[#C9A86A]/30 via-[#4B2E5E] to-[#C9A86A]/30 -translate-y-6 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, idx) => {
              const IconComponent = step.icon;
              return (
                <div
                  key={idx}
                  className="bg-white border border-[#E8DEC8] hover:border-[#C9A86A] rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 shadow-celestial-card group text-center flex flex-col items-center"
                >
                  {/* Step Badge Icon */}
                  <div className="relative mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-[#4B2E5E] text-[#C9A86A] font-extrabold flex items-center justify-center shadow-glow-purple group-hover:scale-110 transition-transform">
                      <IconComponent className="w-8 h-8 stroke-[2.2]" />
                    </div>
                    <span className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 bg-[#C9A86A] text-[#27232A] text-[10px] font-black uppercase px-2 py-0.5 rounded-full shadow-sm">
                      STEP {step.number}
                    </span>
                  </div>

                  {/* Step Title & Description */}
                  <h3 className="text-xl font-bold text-[#4B2E5E] mb-2 group-hover:text-[#72548C] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#665E6E] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
