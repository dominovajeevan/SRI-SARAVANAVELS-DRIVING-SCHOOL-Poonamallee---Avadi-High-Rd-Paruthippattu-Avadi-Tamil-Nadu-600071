import React, { useState } from 'react';
import { Sparkles, Maximize2, Camera, ChevronLeft, ChevronRight, Layers } from 'lucide-react';
import { LightboxModal, type LightboxImage } from './LightboxModal';
import { ScrollReveal } from './ScrollReveal';

export const GALLERY_IMAGES: LightboxImage[] = [
  {
    src: '/imgs/img1.avif',
    alt: 'SRI SARAVANAVELS DRIVING SCHOOL Training Vehicle (IMG 1)',
    title: 'Primary Training Vehicle (IMG 1)',
    caption: 'SRI SARAVANAVELS DRIVING SCHOOL dual-control vehicle equipped for safe motor training in Paruthippattu, Avadi.'
  },
  {
    src: '/imgs/img2.jpeg',
    alt: 'SRI SARAVANAVELS DRIVING SCHOOL Fleet & Facility (IMG 2)',
    title: 'School Fleet & Premises (IMG 2)',
    caption: 'Well-maintained training vehicles and facilities for beginner and refresher driver classes.'
  },
  {
    src: '/imgs/img3.jpeg',
    alt: 'Practical Road Training Guidance (IMG 3)',
    title: 'Practical Road Instruction (IMG 3)',
    caption: 'Hands-on practical road training under patient, expert supervision on Avadi roads.'
  },
  {
    src: '/imgs/img4.jpeg',
    alt: 'Learner Practice & Safety Session (IMG 4)',
    title: 'Learner Confidence Session (IMG 4)',
    caption: 'Dedicated training sessions helping male and female learners build lifelong driving confidence.'
  },
  {
    src: '/imgs/img5.jpeg',
    alt: 'SRI SARAVANAVELS DRIVING SCHOOL Training Session (IMG 5)',
    title: 'Advanced Training & Maneuvering (IMG 5)',
    caption: 'Comprehensive driving practice covering essential maneuvers, vehicle orientation, and road safety.'
  },
  {
    src: '/imgs/img6.jpeg',
    alt: 'SRI SARAVANAVELS DRIVING SCHOOL Instructor Guidance (IMG 6)',
    title: 'Instructor-Guided Practice (IMG 6)',
    caption: 'One-on-one personalized driving instruction to ensure complete learner confidence on the road.'
  }
];

export const GallerySection: React.FC = () => {
  const [activeSlotIndex, setActiveSlotIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setIsLightboxOpen(true);
  };

  const handlePrevSlot = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveSlotIndex((prev) => (prev === 0 ? GALLERY_IMAGES.length - 1 : prev - 1));
  };

  const handleNextSlot = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveSlotIndex((prev) => (prev === GALLERY_IMAGES.length - 1 ? 0 : prev + 1));
  };

  const currentImage = GALLERY_IMAGES[activeSlotIndex];

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-[#FAF7F2] bg-celestial-pattern relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#4B2E5E] bg-[#F3EFE7] px-3.5 py-1.5 rounded-full border border-[#C9A86A]/40 shadow-sm inline-flex items-center gap-1.5">
              <Camera className="w-3.5 h-3.5 text-[#C9A86A]" />
              VISUAL ACADEMY GALLERY
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#4B2E5E] tracking-tight">
              Our Training <span className="gradient-text-gold">Gallery</span>
            </h2>
            <p className="text-[#665E6E] text-base sm:text-lg">
              Explore all 6 training photos in a single interactive gallery showcase. Click any image to view in fullscreen lightbox!
            </p>
          </div>
        </ScrollReveal>

        {/* SINGLE UNIFIED GALLERY SLOT CONTAINER */}
        <ScrollReveal delay={100}>
          <div className="max-w-4xl mx-auto bg-white border-2 border-[#C9A86A]/70 rounded-3xl p-4 sm:p-6 shadow-2xl relative overflow-hidden group">
            
            {/* Top Info Bar inside the Single Slot */}
            <div className="flex items-center justify-between gap-3 mb-4 pb-3 border-b border-[#E8DEC8]">
              <div className="flex items-center gap-2">
                <span className="bg-[#4B2E5E] text-[#FAF7F2] border border-[#C9A86A]/60 text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full shadow-sm flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#C9A86A]" />
                  FLEET & TRAINING GALLERY
                </span>
                <span className="bg-[#F3EFE7] text-[#4B2E5E] border border-[#C9A86A]/40 text-xs font-mono font-bold px-3 py-1 rounded-full">
                  IMG {activeSlotIndex + 1} OF {GALLERY_IMAGES.length}
                </span>
              </div>

              <button
                onClick={() => openLightbox(activeSlotIndex)}
                className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#4B2E5E] bg-[#F3EFE7] hover:bg-[#C9A86A] hover:text-[#27232A] px-3.5 py-1.5 rounded-full border border-[#C9A86A]/50 transition-all cursor-pointer"
                aria-label="Open Fullscreen Lightbox"
              >
                <Maximize2 className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Fullscreen View</span>
              </button>
            </div>

            {/* Main Featured Image Display within the Single Slot */}
            <div
              onClick={() => openLightbox(activeSlotIndex)}
              className="relative w-full h-[320px] sm:h-[460px] rounded-2xl overflow-hidden cursor-pointer border border-[#E8DEC8] shadow-inner bg-[#4B2E5E]"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  openLightbox(activeSlotIndex);
                }
              }}
              aria-label={`Click to open fullscreen view for ${currentImage.title}`}
            >
              <img
                key={activeSlotIndex}
                src={currentImage.src}
                alt={currentImage.alt}
                className="w-full h-full object-cover img-hover-zoom filter brightness-95 group-hover:brightness-100 transition-all duration-500"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

              {/* Arrow Prev Button Inside Slot */}
              <button
                onClick={handlePrevSlot}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 hover:bg-[#4B2E5E] text-white border border-[#C9A86A]/60 shadow-lg backdrop-blur-md transition-all duration-200 active:scale-90 hover:scale-105 z-10"
                aria-label="Previous Image Slot"
              >
                <ChevronLeft className="w-6 h-6 stroke-[2.5]" />
              </button>

              {/* Arrow Next Button Inside Slot */}
              <button
                onClick={handleNextSlot}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 hover:bg-[#4B2E5E] text-white border border-[#C9A86A]/60 shadow-lg backdrop-blur-md transition-all duration-200 active:scale-90 hover:scale-105 z-10"
                aria-label="Next Image Slot"
              >
                <ChevronRight className="w-6 h-6 stroke-[2.5]" />
              </button>

              {/* Expand Hint Overlay */}
              <div className="absolute top-4 right-4 bg-black/60 text-white px-3 py-1.5 rounded-full text-xs font-semibold backdrop-blur-md flex items-center gap-1.5 opacity-90 group-hover:bg-[#C9A86A] group-hover:text-[#27232A] transition-all">
                <Maximize2 className="w-4 h-4" />
                <span>Tap to Expand Lightbox</span>
              </div>

              {/* Image Title & Caption Inside Main View */}
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7 text-white pointer-events-none space-y-1">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#E7D4A8]">
                  <Layers className="w-4 h-4 text-[#C9A86A]" />
                  <span>IMG {activeSlotIndex + 1}: {currentImage.title}</span>
                </div>
                <p className="text-xs sm:text-sm text-gray-200 line-clamp-2 leading-relaxed max-w-2xl">
                  {currentImage.caption}
                </p>
              </div>
            </div>

            {/* Bottom 6-Thumbnail Strip Inside the SAME Slot */}
            <div className="mt-4 pt-4 border-t border-[#E8DEC8] flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-xs font-bold text-[#4B2E5E] uppercase tracking-wider flex items-center gap-1.5">
                <Layers className="w-4 h-4 text-[#C9A86A]" />
                Select Photo Slot (6 Images):
              </span>

              {/* 6 Thumbnail Buttons */}
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 sm:gap-3 w-full sm:w-auto">
                {GALLERY_IMAGES.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveSlotIndex(idx)}
                    className={`relative rounded-xl overflow-hidden border-2 transition-all duration-200 h-16 sm:h-20 w-full sm:w-24 group/thumb cursor-pointer ${
                      activeSlotIndex === idx
                        ? 'border-[#C9A86A] ring-4 ring-[#C9A86A]/30 scale-105 shadow-glow-gold'
                        : 'border-[#E8DEC8] opacity-70 hover:opacity-100 hover:border-[#4B2E5E]'
                    }`}
                    aria-label={`Switch to ${img.title}`}
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-full object-cover"
                    />
                    <span className={`absolute bottom-1 left-1/2 -translate-x-1/2 text-[9px] font-black uppercase px-1.5 py-0.5 rounded shadow-sm ${
                      activeSlotIndex === idx
                        ? 'bg-[#C9A86A] text-[#27232A]'
                        : 'bg-[#4B2E5E]/80 text-white'
                    }`}>
                      IMG {idx + 1}
                    </span>
                  </button>
                ))}
              </div>
            </div>

          </div>
        </ScrollReveal>

      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        isOpen={isLightboxOpen}
        currentIndex={lightboxIndex}
        images={GALLERY_IMAGES}
        onClose={() => setIsLightboxOpen(false)}
        onNavigate={(newIdx) => setLightboxIndex(newIdx)}
      />
    </section>
  );
};
