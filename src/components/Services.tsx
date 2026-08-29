import React from 'react';
import { Car, Bike, Compass, FileCheck2, Users, ArrowUpRight } from 'lucide-react';
import type { ServiceItem } from '../types';

export const Services: React.FC = () => {
  const services: (ServiceItem & { icon: React.ElementType })[] = [
    {
      id: "motor-training",
      number: "01",
      title: "Motor Training",
      description: "Professional motor training designed to help learners understand vehicle control, road awareness and safe driving practices.",
      iconName: "Car",
      icon: Car,
      badge: "Four Wheeler"
    },
    {
      id: "two-wheeler-training",
      number: "02",
      title: "Motor Training for Two Wheelers",
      description: "Training designed to teach individuals how to safely operate motorcycles or scooters, with guidance focused on vehicle handling and road safety.",
      iconName: "Bike",
      icon: Bike,
      badge: "Two Wheeler"
    },
    {
      id: "auto-rickshaw-training",
      number: "03",
      title: "Auto Rickshaw Motor Training",
      description: "Specialized motor training for learners interested in auto-rickshaw driving and commercial three-wheeler vehicle maneuvering.",
      iconName: "Compass",
      icon: Compass,
      badge: "Three Wheeler"
    },
    {
      id: "license-consultation",
      number: "04",
      title: "Driving License Consultation",
      description: "Guidance and consultation related to the driving license process and licensing requirements.",
      iconName: "FileCheck2",
      icon: FileCheck2,
      badge: "RTO Guidance"
    },
    {
      id: "women-driver-training",
      number: "05",
      title: "Women Driver Training",
      description: "Training and support for women learners, with a focus on confidence, practical skills and safe driving.",
      iconName: "Users",
      icon: Users,
      badge: "Specialized Focus"
    }
  ];

  return (
    <section id="services" className="py-20 lg:py-28 bg-[#F3EFE7] border-y border-[#E8DEC8] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#4B2E5E] bg-[#FAF7F2] px-3.5 py-1 rounded-full border border-[#C9A86A]/40 shadow-sm">
            PRACTICAL MOTOR INSTRUCTION
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#4B2E5E] tracking-tight">
            Training & <span className="gradient-text-gold">Services</span>
          </h2>
          <p className="text-[#665E6E] text-base sm:text-lg">
            Practical training designed around your learning needs.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                className="group relative bg-white hover:bg-[#FAF7F2] border border-[#E8DEC8] hover:border-[#C9A86A] rounded-2xl p-6 sm:p-8 transition-all duration-300 shadow-celestial-card flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar inside Card */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-black text-[#4B2E5E]/15 group-hover:text-[#4B2E5E]/30 transition-colors">
                      SERVICE {service.number}
                    </span>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#4B2E5E] bg-[#F3EFE7] border border-[#C9A86A]/40 px-2.5 py-1 rounded-md">
                      {service.badge}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-[#4B2E5E] border border-[#C9A86A]/60 flex items-center justify-center text-[#C9A86A] mb-5 group-hover:scale-110 transition-transform duration-300 shadow-glow-purple">
                    <IconComponent className="w-7 h-7" />
                  </div>

                  {/* Card Title & Description */}
                  <h3 className="text-xl font-bold text-[#4B2E5E] mb-3 group-hover:text-[#72548C] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[#665E6E] leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Card Action */}
                <a
                  href="#courses"
                  className="w-full mt-2 inline-flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#4B2E5E] group-hover:text-[#C9A86A] pt-4 border-t border-[#E8DEC8] transition-colors"
                >
                  <span>View Training Modules</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
