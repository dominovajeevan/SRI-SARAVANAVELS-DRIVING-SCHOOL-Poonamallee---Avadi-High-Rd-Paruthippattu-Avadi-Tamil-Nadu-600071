import React from 'react';
import { Car, Bike, Compass, FileCheck2, Users, ArrowUpRight } from 'lucide-react';
import type { ServiceItem } from '../types';

export const Services: React.FC = () => {
  const services: (ServiceItem & { icon: React.ElementType; imageSrc: string; altText: string })[] = [
    {
      id: "motor-training",
      number: "01",
      title: "Motor Training",
      description: "Professional motor training designed to help learners understand vehicle control, road awareness and safe driving practices.",
      iconName: "Car",
      icon: Car,
      badge: "Four Wheeler",
      imageSrc: "/imgs/four-wheeler-training.webp",
      altText: "Four wheeler driving training with instructor"
    },
    {
      id: "two-wheeler-training",
      number: "02",
      title: "Motor Training for Two Wheelers",
      description: "Training designed to teach individuals how to safely operate motorcycles or scooters, with guidance focused on vehicle handling and road safety.",
      iconName: "Bike",
      icon: Bike,
      badge: "Two Wheeler",
      imageSrc: "/imgs/two-wheeler-training.webp",
      altText: "Two wheeler motor training"
    },
    {
      id: "auto-rickshaw-training",
      number: "03",
      title: "Auto Rickshaw Motor Training",
      description: "Specialized motor training for learners interested in auto-rickshaw driving and commercial three-wheeler vehicle maneuvering.",
      iconName: "Compass",
      icon: Compass,
      badge: "Three Wheeler",
      imageSrc: "/imgs/three-wheeler-training.webp",
      altText: "Auto rickshaw motor training"
    },
    {
      id: "license-consultation",
      number: "04",
      title: "Driving License Consultation",
      description: "Guidance and consultation related to the driving license process and licensing requirements.",
      iconName: "FileCheck2",
      icon: FileCheck2,
      badge: "RTO Guidance",
      imageSrc: "/imgs/rto-license-consultation.webp",
      altText: "Driving license consultation and RTO guidance"
    },
    {
      id: "women-driver-training",
      number: "05",
      title: "Women Driver Training",
      description: "Training and support for women learners, with a focus on confidence, practical skills and safe driving.",
      iconName: "Users",
      icon: Users,
      badge: "Specialized Focus",
      imageSrc: "/imgs/women-driver-training.webp",
      altText: "Women driver training with professional instructor"
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

        {/* Services Cards Flex Layout (Centered bottom row) */}
        <div className="flex flex-wrap justify-center gap-8">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                className="group relative bg-white hover:bg-[#FAF7F2] border border-[#E8DEC8] hover:border-[#C9A86A] rounded-2xl overflow-hidden transition-all duration-300 shadow-celestial-card flex flex-col justify-between w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] max-w-md lg:max-w-none"
              >
                {/* Top Image Banner */}
                <div className="relative w-full h-52 overflow-hidden bg-[#4B2E5E]/10">
                  <img
                    src={service.imageSrc}
                    alt={service.altText}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 pointer-events-none" />

                  {/* Overlay: Service Number */}
                  <span className="absolute top-3 left-4 text-xs font-black tracking-widest text-white/95 bg-[#4B2E5E]/85 backdrop-blur-md px-3 py-1 rounded-full border border-[#C9A86A]/40 shadow-sm">
                    SERVICE {service.number}
                  </span>

                  {/* Overlay: Badge */}
                  <span className="absolute top-3 right-4 text-[11px] font-bold uppercase tracking-wider text-[#27232A] bg-[#C9A86A] px-2.5 py-1 rounded-md shadow-sm font-sans">
                    {service.badge}
                  </span>
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between">
                  <div>
                    {/* Title with Icon */}
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-xl bg-[#4B2E5E] border border-[#C9A86A]/60 flex items-center justify-center text-[#C9A86A] shrink-0 group-hover:scale-105 transition-transform duration-300 shadow-sm">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <h3 className="text-lg font-bold text-[#4B2E5E] group-hover:text-[#72548C] transition-colors leading-snug">
                        {service.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-[#665E6E] leading-relaxed mb-6">
                      {service.description}
                    </p>
                  </div>

                  {/* Card Action */}
                  <a
                    href="#courses"
                    className="w-full inline-flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#4B2E5E] group-hover:text-[#C9A86A] pt-4 border-t border-[#E8DEC8] transition-colors mt-auto"
                  >
                    <span>View Training Modules</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
