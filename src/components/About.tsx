import React, { useState } from 'react';
import { ArrowRight, MapPin, CheckCircle, UserCheck, Sparkles, Maximize2, ChevronLeft, ChevronRight, Camera, Play } from 'lucide-react';
import { LightboxModal, type LightboxItem } from './LightboxModal';
import { ScrollReveal } from './ScrollReveal';

export const ABOUT_MEDIA_ITEMS: LightboxItem[] = [
  {
    src: '/images/1.mp4',
    alt: 'Practical Driving Guidance (Item 1)',
    title: '1. Practical Driving Guidance (Video)',
    caption: 'Hands-on video demonstration of vehicle control and smooth acceleration.',
    type: 'video'
  },
  {
    src: '/images/2.mp4',
    alt: 'Traffic Navigation & Steering (Item 2)',
    title: '2. Traffic Navigation & Steering (Video)',
    caption: 'Real-world traffic handling and steering control under expert guidance.',
    type: 'video'
  },
  {
    src: '/images/3.mp4',
    alt: 'Steering & Reverse Parking (Item 3)',
    title: '3. Steering & Reverse Parking (Video)',
    caption: 'Guided video lesson covering reverse maneuvers and parking precision.',
    type: 'video'
  },
  {
    src: '/images/4.mp4',
    alt: 'Clutch & Gear Synchronization (Item 4)',
    title: '4. Clutch & Gear Synchronization (Video)',
    caption: 'Step-by-step practical video on smooth gear shift and clutch balance.',
    type: 'video'
  },
  {
    src: '/images/5.jpeg',
    alt: 'Learner Practice & Safety Session (Item 5)',
    title: '5. Learner Safety Session (Photo)',
    caption: 'Dedicated practical session building confidence and road awareness.',
    type: 'image'
  },
  {
    src: '/images/6.jpeg',
    alt: 'Instructor-Guided Practice (Item 6)',
    title: '6. Instructor-Guided Practice (Photo)',
    caption: 'One-on-one personalized driving instruction for complete road confidence.',
    type: 'image'
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
    setActiveSlotIdx((prev) => (prev === 0 ? ABOUT_MEDIA_ITEMS.length - 1 : prev - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveSlotIdx((prev) => (prev === ABOUT_MEDIA_ITEMS.length - 1 ? 0 : prev + 1));
  };

  const activeItem = ABOUT_MEDIA_ITEMS[activeSlotIdx];
  const isVideo = activeItem.type === 'video';

  return (
    <section id="about" className="py-20 lg:py-28 bg-[#FAF7F2] bg-celestial-pattern relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: 6 Media Items (1, 2, 3, 4, 5, 6) Showcase */}
          <div className="lg:col-span-6 relative">
            <ScrollReveal delay={100}>
              <div className="relative mx-auto max-w-lg lg:max-w-none">
                
                {/* Frame Glow Effect */}
                <div className="absolute -inset-2 bg-gradient-to-r from-[#C9A86A]/30 to-[#72548C]/25 rounded-3xl blur-xl pointer-events-none" />

                {/* Media Showcase Container */}
                <div className="relative bg-white border-2 border-[#C9A86A]/70 rounded-3xl p-4 sm:p-5 shadow-2xl overflow-hidden group">
                  
                  {/* Top Bar inside Showcase Area */}
                  <div className="flex items-center justify-between gap-2 mb-3 pb-2.5 border-b border-[#E8DEC8]">
                    <div className="flex items-center gap-2">
                      <span className="bg-[#4B2E5E] text-[#FAF7F2] border border-[#C9A86A]/60 text-[11px] sm:text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full flex items-center gap-1.5 shadow-sm">
                        <Camera className="w-3.5 h-3.5 text-[#C9A86A]" />
                        TRAINING MEDIA SHOWCASE
                      </span>
                      <span className="bg-[#F3EFE7] text-[#4B2E5E] border border-[#C9A86A]/40 text-xs font-mono font-bold px-2.5 py-0.5 rounded-full">
                        {isVideo ? 'VIDEO' : 'IMG'} {activeSlotIdx + 1} / 6
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

                  {/* Main Display Area (Video or Image) */}
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
                    aria-label={`Click to open view for ${activeItem.title}`}
                  >
                    {isVideo ? (
                      <div className="relative w-full h-full">
                        <video
                          key={activeSlotIdx}
                          src={activeItem.src}
                          muted
                          loop
                          autoPlay
                          playsInline
                          className="w-full h-full object-cover filter brightness-95 group-hover:brightness-100 transition-all duration-500"
                        />
                        {/* Play Overlay Badge */}
                        <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/20 transition-colors">
                          <div className="w-14 h-14 rounded-full bg-[#4B2E5E]/90 border-2 border-[#C9A86A] flex items-center justify-center text-[#C9A86A] shadow-glow-purple transform group-hover:scale-110 transition-transform">
                            <Play className="w-7 h-7 fill-[#C9A86A] ml-0.5" />
                          </div>
                        </div>
                      </div>
                    ) : (
                      <img
                        key={activeSlotIdx}
                        src={activeItem.src}
                        alt={activeItem.alt}
                        className="w-full h-full object-cover img-hover-zoom filter brightness-95 group-hover:brightness-100 transition-all duration-500"
                      />
                    )}

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent pointer-events-none" />

                    {/* Previous Arrow Button */}
                    <button
                      onClick={handlePrev}
                      className="absolute left-2 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-[#4B2E5E] text-white border border-[#C9A86A]/60 shadow-lg backdrop-blur-md transition-all duration-200 active:scale-90 z-10"
                      aria-label="Previous Media Item"
                    >
                      <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
                    </button>

                    {/* Next Arrow Button */}
                    <button
                      onClick={handleNext}
                      className="absolute right-2 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-[#4B2E5E] text-white border border-[#C9A86A]/60 shadow-lg backdrop-blur-md transition-all duration-200 active:scale-90 z-10"
                      aria-label="Next Media Item"
                    >
                      <ChevronRight className="w-5 h-5 stroke-[2.5]" />
                    </button>

                    {/* Expand Badge Prompt */}
                    <div className="absolute top-3 right-3 bg-black/60 text-white px-2.5 py-1 rounded-full text-[10px] font-bold backdrop-blur-md flex items-center gap-1 group-hover:bg-[#C9A86A] group-hover:text-[#27232A] transition-colors">
                      <Maximize2 className="w-3 h-3" />
                      <span>Click to Expand</span>
                    </div>

                    {/* Media Title inside slot */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white pointer-events-none">
                      <span className="block text-xs font-extrabold text-[#E7D4A8]">
                        {activeItem.title}
                      </span>
                    </div>
                  </div>

                  {/* 6 Clean Thumbnail Selectors (1, 2, 3, 4, 5, 6 in Order) */}
                  <div className="mt-3 pt-3 border-t border-[#E8DEC8]">
                    <div className="grid grid-cols-6 gap-1.5 sm:gap-2 w-full">
                      {ABOUT_MEDIA_ITEMS.map((item, idx) => {
                        const isThumbVideo = item.type === 'video';
                        return (
                          <button
                            key={idx}
                            onClick={() => setActiveSlotIdx(idx)}
                            className={`relative rounded-xl overflow-hidden border-2 transition-all duration-200 h-14 sm:h-16 w-full cursor-pointer flex flex-col items-center justify-center bg-[#4B2E5E] ${
                              activeSlotIdx === idx
                                ? 'border-[#C9A86A] ring-2 ring-[#C9A86A]/40 scale-105 shadow-glow-gold'
                                : 'border-[#E8DEC8] opacity-75 hover:opacity-100'
                            }`}
                            aria-label={`View Item ${idx + 1}`}
                          >
                            {isThumbVideo ? (
                              <div className="relative w-full h-full flex items-center justify-center bg-[#4B2E5E]">
                                <video src={item.src} className="w-full h-full object-cover" muted />
                                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                                  <Play className="w-3.5 h-3.5 text-[#C9A86A] fill-[#C9A86A]" />
                                </div>
                              </div>
                            ) : (
                              <img
                                src={item.src}
                                alt={item.alt}
                                className="w-full h-full object-cover"
                              />
                            )}
                            <span className={`absolute bottom-0.5 left-1/2 -translate-x-1/2 text-[8px] font-black uppercase px-1 rounded shadow-sm ${
                              activeSlotIdx === idx
                                ? 'bg-[#C9A86A] text-[#27232A]'
                                : 'bg-[#4B2E5E]/90 text-white'
                            }`}>
                              {idx + 1}
                            </span>
                          </button>
                        );
                      })}
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
        images={ABOUT_MEDIA_ITEMS}
        onClose={() => setIsLightboxOpen(false)}
        onNavigate={(newIdx) => setLightboxIdx(newIdx)}
      />
    </section>
  );
};
