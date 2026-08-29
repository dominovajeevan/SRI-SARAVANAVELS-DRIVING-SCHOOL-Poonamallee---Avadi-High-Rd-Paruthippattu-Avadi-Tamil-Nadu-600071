import React from 'react';
import { CheckCircle2, MapPin, Sparkles } from 'lucide-react';
import type { CourseItem } from '../types';
import { MAPS_DIRECTIONS_URL } from '../utils/businessStatus';

export const Courses: React.FC = () => {
  const courses: CourseItem[] = [
    {
      id: 'beginner-training',
      title: 'Beginner Training',
      subtitle: 'For first-time learners',
      recommendedFor: 'Complete beginners starting from scratch',
      priceLabel: 'Ask for Price',
      features: [
        'Basic vehicle controls',
        'Steering and braking fundamentals',
        'Gear and clutch familiarization',
        'Starting and stopping techniques',
        'Road awareness & signal basics',
        'Practical guided driving sessions'
      ]
    },
    {
      id: 'practical-driving-training',
      title: 'Practical Driving Training',
      subtitle: 'Build real-world driving confidence',
      recommendedFor: 'Learners preparing for daily road traffic',
      priceLabel: 'Ask for Price',
      features: [
        'Practical road training in traffic',
        'Traffic awareness & lane discipline',
        'Vehicle handling under guidance',
        'Turning, reversing & maneuvering',
        'Parking practice (Parallel & Perpendicular)',
        'Safe driving habits & defensive driving'
      ]
    },
    {
      id: 'refresher-training',
      title: 'Refresher Training',
      subtitle: 'For existing drivers who want to improve',
      recommendedFor: 'License holders returning to driving',
      priceLabel: 'Ask for Price',
      features: [
        'Confidence building on busy roads',
        'Vehicle control polish & gear timing',
        'Real-world Chennai road practice',
        'Tight space parking & slope driving',
        'Heavy traffic handling skills',
        'Safe driving techniques & safety tips'
      ]
    }
  ];

  return (
    <section id="courses" className="py-20 lg:py-28 bg-[#FAF7F2] bg-celestial-pattern relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#4B2E5E] bg-[#F3EFE7] px-3.5 py-1 rounded-full border border-[#C9A86A]/40 shadow-sm">
            TAILORED INSTRUCTION TIERS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#4B2E5E] tracking-tight">
            Driving Classes & <span className="gradient-text-gold">Training</span>
          </h2>
          <p className="text-[#665E6E] text-base sm:text-lg">
            Choose the training that fits your learning needs.
          </p>
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map((course, index) => {
            const isFeatured = index === 1; // Highlight middle card
            return (
              <div
                key={course.id}
                className={`relative rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                  isFeatured
                    ? 'bg-[#4B2E5E] text-[#FAF7F2] border-2 border-[#C9A86A] shadow-glow-purple scale-102'
                    : 'bg-white text-[#27232A] border border-[#E8DEC8] hover:border-[#C9A86A]/60 shadow-celestial-card'
                }`}
              >
                {isFeatured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#C9A86A] text-[#27232A] text-[11px] font-black uppercase tracking-wider px-3.5 py-1 rounded-full shadow-md flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5 fill-[#27232A]" />
                    POPULAR TRAINING LEVEL
                  </div>
                )}

                <div>
                  {/* Card Title & Subtitle */}
                  <div className="mb-6">
                    <span className={`text-xs font-bold uppercase tracking-wider block mb-1 ${
                      isFeatured ? 'text-[#E7D4A8]' : 'text-[#72548C]'
                    }`}>
                      {course.subtitle}
                    </span>
                    <h3 className={`text-2xl font-bold mb-2 ${
                      isFeatured ? 'text-white' : 'text-[#4B2E5E]'
                    }`}>
                      {course.title}
                    </h3>
                    <p className={`text-xs italic ${
                      isFeatured ? 'text-[#FAF7F2]/80' : 'text-[#665E6E]'
                    }`}>
                      Recommended for: {course.recommendedFor}
                    </p>
                  </div>

                  {/* Price Banner */}
                  <div className={`p-4 rounded-xl mb-6 flex items-center justify-between border ${
                    isFeatured 
                      ? 'bg-[#FAF7F2]/10 border-[#C9A86A]/40' 
                      : 'bg-[#F3EFE7] border-[#E8DEC8]'
                  }`}>
                    <div>
                      <span className={`text-[11px] uppercase font-semibold block ${
                        isFeatured ? 'text-[#FAF7F2]/70' : 'text-[#665E6E]'
                      }`}>Training Fee</span>
                      <span className={`text-xl font-bold ${
                        isFeatured ? 'text-[#C9A86A]' : 'text-[#4B2E5E]'
                      }`}>{course.priceLabel}</span>
                    </div>
                    <span className={`text-[10px] px-2.5 py-1 rounded ${
                      isFeatured ? 'bg-white/10 text-white' : 'bg-white text-[#4B2E5E] border border-[#E8DEC8]'
                    }`}>Paruthippattu Branch</span>
                  </div>

                  {/* Feature Checklist */}
                  <div className="space-y-3 mb-8">
                    <span className={`text-xs font-semibold uppercase tracking-wider block mb-2 ${
                      isFeatured ? 'text-[#E7D4A8]' : 'text-[#4B2E5E]'
                    }`}>
                      Included Modules:
                    </span>
                    {course.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5">
                        <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${
                          isFeatured ? 'text-[#C9A86A]' : 'text-[#72548C]'
                        }`} />
                        <span className={`text-xs sm:text-sm ${
                          isFeatured ? 'text-[#FAF7F2]' : 'text-[#27232A]'
                        }`}>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <a
                  href={MAPS_DIRECTIONS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3.5 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all ${
                    isFeatured
                      ? 'bg-[#C9A86A] hover:bg-[#B89657] text-[#27232A] shadow-glow-gold'
                      : 'bg-[#4B2E5E] hover:bg-[#674080] text-[#FAF7F2] shadow-sm'
                  }`}
                >
                  <MapPin className="w-4 h-4" />
                  <span>Get Directions To School</span>
                </a>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
