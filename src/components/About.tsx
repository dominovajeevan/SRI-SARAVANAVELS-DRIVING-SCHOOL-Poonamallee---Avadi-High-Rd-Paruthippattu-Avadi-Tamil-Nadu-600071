import React, { useState } from 'react';
import { ArrowRight, MapPin, CheckCircle, UserCheck, Sparkles, Maximize2, ChevronLeft, ChevronRight, Camera } from 'lucide-react';
import { LightboxModal, type LightboxImage } from './LightboxModal';
import { ScrollReveal } from './ScrollReveal';

export const GALLERY_IMAGES: LightboxImage[] = [
  {
    src: '/images/img1.avif',
    alt: 'SRI SARAVANAVELS DRIVING SCHOOL Training Vehicle (IMG 1)',
    title: 'Primary Training Vehicle (IMG 1)',
    caption: 'SRI SARAVANAVELS DRIVING SCHOOL dual-control vehicle equipped for safe motor training in Paruthippattu, Avadi.'
  },
  {
    src: '/images/img2.jpeg',
    alt: 'SRI SARAVANAVELS DRIVING SCHOOL Fleet & Facility (IMG 2)',
    title: 'School Fleet & Premises (IMG 2)',
    caption: 'Well-maintained training vehicles and facilities for beginner and refresher driver classes.'
  },
  {
    src: '/images/img3.jpeg',
    alt: 'Practical Road Training Guidance (IMG 3)',
    title: 'Practical Road Instruction (IMG 3)',
    caption: 'Hands-on practical road training under patient, expert supervision on Avadi roads.'
  },
  {
    src: '/images/img4.jpeg',
    alt: 'Learner Practice & Safety Session (IMG 4)',
    title: 'Learner Confidence Session (IMG 4)',
    caption: 'Dedicated training sessions helping male and female learners build lifelong driving confidence.'
  },
  {
    src: '/images/img5.jpeg',
    alt: 'Advanced Training & Maneuvering (IMG 5)',
    title: 'Advanced Training & Maneuvering (IMG 5)',
    caption: 'Comprehensive driving practice covering essential maneuvers, vehicle orientation, and road safety.'
  },
  {
    src: '/images/img6.jpeg',
    alt: 'Instructor-Guided Practice (IMG 6)',
    title: 'Instructor-Guided Practice (IMG 6)',
    caption: 'One-on-one personalized driving instruction to ensure complete learner confidence on the road.'
  }
];

export const About: React.FC = () => {
  const [activeSlotIdx, setActiveSlotIdx] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxIdx, setLightboxIdx] = useState(0);

  const handleOpenLightbox = (idx: number = activeSlotIdx) => {
    setLightboxIdx(idx);
    setIsLightboxOpen(true);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveSlotIdx((prev) => (prev === 0 ? GALLERY_IMAGES.length - 1 : prev - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveSlotIdx((prev) => (prev === GALLERY_IMAGES.length - 1 ? 0 : prev + 1));
  };

  const activeImg = GALLERY_IMAGES[activeSlotIdx];

  return (
    <section id="about" className="py-20 lg:py-28 bg-[#FAF7F2] bg-celestial-pattern relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: 6 Images in 1 Single Showcase Area Slot */}
          <div className="lg:col-span-6 relative">
            <ScrollReveal delay={100}>
              <div className="relative mx-auto max-w-lg lg:max-w-none">
                
                {/* Frame Glow Effect */}
                <div className="absolute -inset-2 bg-gradient-to-r from-[#C9A86A]/30 to-[#72548C]/25 rounded-3xl blur-xl pointer-events-none" />

                {/* Single Showcase Area Container */}
                <div className="relative bg-white border-2 border-[#C9A86A]/70 rounded-3xl p-4 sm:p-5 shadow-2xl overflow-hidden group">
                  
                  {/* Top Bar inside Showcase Area */}
                  <div className="flex items-center justify-between gap-2 mb-3 pb-2.5 border-b border-[#E8DEC8]">
                    <div className="flex items-center gap-2">
                      <span className="bg-[#4B2E5E] text-[#FAF7F2] border border-[#C9A86A]/60 text-[11px] sm:text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full flex items-center gap-1.5 shadow-sm">
                        <Camera className="w-3.5 h-3.5 text-[#C9A86A]" />
                        GALLERY SHOWCASE
                      </span>
                      <span className="bg-[#F3EFE7] text-[#4B2E5E] border border-[#C9A86A]/40 text-xs font-mono font-bold px-2.5 py-0.5 rounded-full">
                        {activeSlotIdx + 1} / {GALLERY_IMAGES.length}
                      </span>
                    </div>

                    <button
                      onClick={() => handleOpenLightbox(activeSlotIdx)}
                      className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-[#4B2E5E] bg-[#F3EFE7] hover:bg-[#C9A86A] hover:text-[#27232A] px-3 py-1 rounded-full border border-[#C9A86A]/40 transition-colors cursor-pointer"
                      aria-label="Open Fullscreen Lightbox"
                    >
                      <Maximize2 className="w-3 h-3 text-[#C9A86A]" />
                      <span>Fullscreen</span>
                    </button>
                  </div>

                  {/* Main Display Image inside Single Area */}
                  <div
                    onClick={() => handleOpenLightbox(activeSlotIdx)}
                    className="relative w-full h-[260px] sm:h-[340px] rounded-2xl overflow-hidden cursor-pointer border border-[#E8DEC8] bg-[#4B2E5E]"
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        handleOpenLightbox(activeSlotIdx);
                      }
                    }}
                    aria-label={`Click to open fullscreen view for ${activeImg.title}`}
                  >
                    <img
                      key={activeSlotIdx}
                      src={activeImg.src}
                      alt={activeImg.alt}
                      className="w-full h-full object-cover img-hover-zoom filter brightness-95 group-hover:brightness-100 transition-all duration-500"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent pointer-events-none" />

                    {/* Previous Arrow Button */}
                    <button
                      onClick={handlePrev}
                      className="absolute left-2 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-[#4B2E5E] text-white border border-[#C9A86A]/60 shadow-lg backdrop-blur-md transition-all duration-200 active:scale-90 z-10"
                      aria-label="Previous Image"
                    >
                      <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
                    </button>

                    {/* Next Arrow Button */}
                    <button
                      onClick={handleNext}
                      className="absolute right-2 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-[#4B2E5E] text-white border border-[#C9A86A]/60 shadow-lg backdrop-blur-md transition-all duration-200 active:scale-90 z-10"
                      aria-label="Next Image"
                    >
                      <ChevronRight className="w-5 h-5 stroke-[2.5]" />
                    </button>

                    {/* Expand Badge Prompt */}
                    <div className="absolute top-3 right-3 bg-black/60 text-white px-2.5 py-1 rounded-full text-[10px] font-bold backdrop-blur-md flex items-center gap-1 group-hover:bg-[#C9A86A] group-hover:text-[#27232A] transition-colors">
                      <Maximize2 className="w-3 h-3" />
                      <span>Click to Expand</span>
                    </div>

                    {/* Image Title inside slot */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white pointer-events-none">
                      <span className="block text-xs font-extrabold text-[#E7D4A8]">
                        {activeImg.title}
                      </span>
                    </div>
                  </div>

                  {/* 6 Clean Thumbnail Selectors in the SAME SINGLE AREA */}
                  <div className="mt-3 pt-3 border-t border-[#E8DEC8]">
                    <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 sm:gap-2.5 w-full">
                      {GALLERY_IMAGES.map((img, idx) => (
                        <button
                          key={idx}
                          onClick={() => setActiveSlotIdx(idx)}
                          className={`relative rounded-xl overflow-hidden border-2 transition-all duration-200 h-16 sm:h-20 w-full cursor-pointer ${
                            activeSlotIdx === idx
                              ? 'border-[#C9A86A] ring-2 ring-[#C9A86A]/40 scale-105 shadow-glow-gold'
                              : 'border-[#E8DEC8] opacity-70 hover:opacity-100'
                          }`}
                          aria-label={`View Image ${idx + 1}`}
                        >
                          <img
                            src={img.src}
                            alt={img.alt}
                            className="w-full h-full object-cover"
                          />
                        </button>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Floating Experience Badge */}
                <div className="absolute -bottom-5 -right-3 sm:bottom-4 sm:-right-4 bg-white border-2 border-[#C9A86A] p-3 sm:p-4 rounded-2xl shadow-glow-gold backdrop-blur-md animate-celestial z-20 pointer-events-none">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-xl bg-[#4B2E5E] text-[#C9A86A] font-black text-lg flex items-center justify-center shadow-sm">
                      10+
                    </div>
                    <div>
                      <span className="block text-xs font-bold text-[#4B2E5E] uppercase tracking-wider">Since 2013</span>
                      <span className="block text-[10px] text-[#665E6E]">Paruthippattu, Avadi</span>
                    </div>
                  </div>
                </div>

              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Detailed Narrative */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F3EFE7] border border-[#C9A86A]/50 text-[#4B2E5E] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#C9A86A]" />
              <span>ABOUT SRI SARAVANAVELS DRIVING SCHOOL</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#4B2E5E] tracking-tight leading-tight">
              A Trusted Driving School in{' '}
              <span className="gradient-text-gold">Paruthippattu</span>
            </h2>

            <p className="text-base sm:text-lg text-[#27232A]/85 leading-relaxed font-medium">
              <strong>SRI SARAVANAVELS DRIVING SCHOOL</strong> (ஶ்ரீ சரவணவேல்ஸ் டிரைவிங் ஸ்கூல்) in Paruthippattu, Chennai is a well-established motor training school providing professional driving instruction with personalized attention. Established in 2013, the school focuses on helping learners develop the knowledge, practical skills and confidence required to drive safely.
            </p>

            <p className="text-base text-[#665E6E] leading-relaxed">
              Whether you are a first-time learner or looking to refresh your driving skills, the training approach is designed to support learners at different experience levels while emphasizing practical driving and road safety.
            </p>

            {/* Key Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-2">
              <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-[#E8DEC8] shadow-sm">
                <CheckCircle className="w-5 h-5 text-[#C9A86A] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-sm font-bold text-[#4B2E5E]">Personalized Instruction</span>
                  <span className="block text-xs text-[#665E6E]">Paced according to learner comfort</span>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-[#E8DEC8] shadow-sm">
                <UserCheck className="w-5 h-5 text-[#C9A86A] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-sm font-bold text-[#4B2E5E]">Women Learner Support</span>
                  <span className="block text-xs text-[#665E6E]">Encouraging & patient guidance</span>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#services"
                className="inline-flex items-center gap-2 bg-[#4B2E5E] hover:bg-[#674080] text-[#FAF7F2] font-bold text-sm px-6 py-3.5 rounded-xl shadow-glow-purple transition-all"
              >
                <span>Explore Our Training</span>
                <ArrowRight className="w-4 h-4 text-[#C9A86A]" />
              </a>

              <div className="inline-flex items-center gap-2 text-xs text-[#4B2E5E] font-medium bg-[#F3EFE7] px-4 py-3 rounded-xl border border-[#E8DEC8]">
                <MapPin className="w-4 h-4 text-[#C9A86A]" />
                <span>No 3, PH Road, Iyyankulam, Paruthipattu, Avadi, Chennai 71</span>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        isOpen={isLightboxOpen}
        currentIndex={lightboxIdx}
        images={GALLERY_IMAGES}
        onClose={() => setIsLightboxOpen(false)}
        onNavigate={(newIdx) => setLightboxIdx(newIdx)}
      />
    </section>
  );
};
