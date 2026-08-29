import React from 'react';
import { Calendar, UserCheck, ShieldCheck, HeartHandshake, MapPin, Award } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const features = [
    {
      title: "Experienced Training",
      description: "Established in 2011 with years of motor training experience.",
      icon: Calendar,
      badge: "Since 2011"
    },
    {
      title: "Personalized Attention",
      description: "Training focused on individual learner needs and learning pace.",
      icon: UserCheck,
      badge: "Paced Training"
    },
    {
      title: "Practical Learning",
      description: "Focus on developing real-world driving skills in real traffic scenarios.",
      icon: Award,
      badge: "Hands-on Focus"
    },
    {
      title: "Safety First",
      description: "Strong emphasis on responsible, defensive, and safe driving habits.",
      icon: ShieldCheck,
      badge: "Road Safety"
    },
    {
      title: "Women-Friendly Training",
      description: "Dedicated training and guidance support available for women learners.",
      icon: HeartHandshake,
      badge: "Supportive Environment"
    },
    {
      title: "Convenient Location",
      description: "Conveniently located near the RTO Office, Paruthippattu, Avadi.",
      icon: MapPin,
      badge: "Near RTO Office"
    }
  ];

  return (
    <section id="why-us" className="py-20 lg:py-28 bg-[#FAF7F2] bg-celestial-pattern relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#4B2E5E] bg-[#F3EFE7] px-3.5 py-1 rounded-full border border-[#C9A86A]/40 shadow-sm">
            PROVEN DEDICATION TO QUALITY
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#4B2E5E] tracking-tight">
            Why Choose <span className="gradient-text-gold">Sri Saravana Vels</span>
          </h2>
          <p className="text-[#665E6E] text-base sm:text-lg">
            Built on trust, safety, and personalized motor training experience in Avadi, Chennai.
          </p>
        </div>

        {/* 6 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div
                key={idx}
                className="bg-white hover:bg-[#FAF7F2] border border-[#E8DEC8] hover:border-[#C9A86A] rounded-2xl p-6 sm:p-8 transition-all duration-300 shadow-celestial-card flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#F3EFE7] border border-[#C9A86A]/40 flex items-center justify-center text-[#4B2E5E] group-hover:scale-110 transition-transform shadow-sm">
                      <IconComponent className="w-6 h-6 text-[#4B2E5E]" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#4B2E5E] bg-[#F3EFE7] border border-[#E8DEC8] px-2.5 py-1 rounded-md">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#4B2E5E] mb-2 group-hover:text-[#72548C] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#665E6E] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
