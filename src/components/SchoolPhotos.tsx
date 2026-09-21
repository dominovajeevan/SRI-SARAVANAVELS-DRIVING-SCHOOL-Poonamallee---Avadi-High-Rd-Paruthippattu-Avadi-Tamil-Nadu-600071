import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Camera, Maximize2, ChevronLeft, ChevronRight, X, Building2, Sparkles, Layers } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export interface SchoolPhotoItem {
  id: string;
  src: string;
  alt: string;
  title: string;
  category: string;
}

export const SCHOOL_PHOTOS: SchoolPhotoItem[] = [
  {
    id: 'outlook1',
    src: '/imgs/school/outlook1.jpg',
    alt: 'Radha Driving School main entrance outlook',
    title: 'Driving School Main Exterior',
    category: 'Facility Outlook'
  },
  {
    id: 'reception',
    src: '/imgs/school/reception.jpg',
    alt: 'Driving school front desk reception area',
    title: 'Welcome & Reception Desk',
    category: 'Reception Area'
  },
  {
    id: 'office-room',
    src: '/imgs/school/office-room.jpg',
    alt: 'School administration and student counseling office',
    title: 'Administrative Office',
    category: 'Office Room'
  },
  {
    id: 'office-room1',
    src: '/imgs/school/office-room1.jpg',
    alt: 'Registration and student consultation desk',
    title: 'Student Consultation & Enrollment',
    category: 'Office Room'
  },
  {
    id: 'class-room',
    src: '/imgs/school/class-room.jpg',
    alt: 'Spacious theory classroom with student seating',
    title: 'Theory Lecture Classroom',
    category: 'Classroom'
  },
  {
    id: 'classroom3',
    src: '/imgs/school/classroom3.jpg',
    alt: 'Audio-visual interactive driving instruction classroom',
    title: 'Interactive Learning Facility',
    category: 'Classroom'
  },
  {
    id: 'signalroom',
    src: '/imgs/school/signalroom.jpg',
    alt: 'Traffic signs and signal rules training room',
    title: 'Traffic Signal Training Bay',
    category: 'Signal Room'
  },
  {
    id: 'signalroom1',
    src: '/imgs/school/signalroom1.jpg',
    alt: 'Comprehensive traffic signals demonstration board',
    title: 'Road Safety & Signal Board',
    category: 'Signal Room'
  },
  {
    id: 'signalroom2',
    src: '/imgs/school/signalroom2.jpg',
    alt: 'Interactive traffic rules learning setup',
    title: 'Traffic Rules & Signs Room',
    category: 'Signal Room'
  },
  {
    id: 'engine-in-demonstration-room',
    src: '/imgs/school/engine-in-demonstration-room.jpg',
    alt: 'Cut-section engine model for mechanical training',
    title: 'Engine Demonstration Room',
    category: 'Technical Demo'
  },
  {
    id: 'engine',
    src: '/imgs/school/engine.jpg',
    alt: 'Real vehicle engine component for hands-on learning',
    title: 'Vehicle Mechanical Components',
    category: 'Technical Demo'
  },
  {
    id: 'toolskit',
    src: '/imgs/school/toolskit.jpg',
    alt: 'Professional vehicle toolkit and emergency equipment',
    title: 'Vehicle Maintenance Toolkit',
    category: 'Safety & Tools'
  },
  {
    id: 'puncture-kit',
    src: '/imgs/school/puncture-kit.jpg',
    alt: 'Tyre change and puncture repair demonstration tools',
    title: 'Tyre Maintenance & Repair Kit',
    category: 'Safety & Tools'
  },
  {
    id: 'first-aid-kit',
    src: '/imgs/school/first-aid-kit.jpg',
    alt: 'First aid box and medical response safety kit',
    title: 'First Aid Safety Station',
    category: 'Safety & Tools'
  },
  {
    id: 'fire',
    src: '/imgs/school/fire.jpg',
    alt: 'Fire extinguisher and emergency response setup',
    title: 'Fire Safety Equipment',
    category: 'Safety & Tools'
  }
];

export const SchoolPhotos: React.FC = () => {
  const [activeSlotIndex, setActiveSlotIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const openLightboxAt = (index: number) => {
    setActiveSlotIndex(index);
    setIsLightboxOpen(true);
    setIsClosing(false);
  };

  const handleClose = useCallback(() => {
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      setIsLightboxOpen(false);
    }, 200);
  }, []);

  const handlePrevSlot = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setActiveSlotIndex((prev) => (prev === 0 ? SCHOOL_PHOTOS.length - 1 : prev - 1));
  };

  const handleNextSlot = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setActiveSlotIndex((prev) => (prev === SCHOOL_PHOTOS.length - 1 ? 0 : prev + 1));
  };

  // Keyboard Navigation & Body Scroll Locking
  useEffect(() => {
    if (!isLightboxOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleClose();
      else if (e.key === 'ArrowLeft') handlePrevSlot();
      else if (e.key === 'ArrowRight') handleNextSlot();
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isLightboxOpen, handleClose]);

  // Touch Swipe Handlers for Mobile Lightbox
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchEndX.current = null;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 40;

    if (distance > minSwipeDistance) {
      handleNextSlot();
    } else if (distance < -minSwipeDistance) {
      handlePrevSlot();
    }
  };

  const currentPhoto = SCHOOL_PHOTOS[activeSlotIndex];

  return (
    <section
      id="school-photos"
      className="py-20 lg:py-28 bg-[#FAF7F2] relative overflow-hidden border-t border-[#E8DEC8]"
    >
      {/* Background Decorative Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#0E3B2E]/5 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#C9A86A]/8 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#0E3B2E] bg-[#E8F2EE] px-4 py-1.5 rounded-full border border-[#0E3B2E]/25 shadow-sm inline-flex items-center gap-2">
              <Building2 className="w-4 h-4 text-[#0E3B2E]" />
              SCHOOL PHOTO ALBUM &bull; 15 PHOTOS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#27232A] tracking-tight">
              OUR DRIVING <span className="text-[#0E3B2E]">SCHOOL</span>
            </h2>
            <p className="text-lg font-semibold text-[#0E3B2E]/90">
              Take a look at Radha Driving School
            </p>
            <p className="text-[#665E6E] text-base sm:text-lg max-w-2xl mx-auto">
              Explore our driving school and training environment.
            </p>
          </div>
        </ScrollReveal>

        {/* SINGLE FEATURED HERO ALBUM SLOT CONTAINER (Matching Gallery Showcase Format) */}
        <ScrollReveal delay={100}>
          <div className="max-w-4xl mx-auto bg-white border-2 border-[#C9A86A]/70 rounded-3xl p-4 sm:p-6 shadow-2xl relative overflow-hidden group mb-14">
            
            {/* Top Info Bar inside the Single Slot */}
            <div className="flex items-center justify-between gap-3 mb-4 pb-3 border-b border-[#E8DEC8]">
              <div className="flex items-center gap-2">
                <span className="bg-[#0E3B2E] text-white border border-[#C9A86A]/60 text-xs font-extrabold uppercase tracking-wider px-3.5 py-1 rounded-full shadow-sm flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#C9A86A]" />
                  FEATURED SCHOOL ALBUM
                </span>
                <span className="bg-[#F3EFE7] text-[#0E3B2E] border border-[#C9A86A]/40 text-xs font-mono font-bold px-3 py-1 rounded-full">
                  PHOTO {activeSlotIndex + 1} OF {SCHOOL_PHOTOS.length}
                </span>
              </div>

              <button
                onClick={() => openLightboxAt(activeSlotIndex)}
                className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#0E3B2E] bg-[#F3EFE7] hover:bg-[#C9A86A] hover:text-[#27232A] px-3.5 py-1.5 rounded-full border border-[#C9A86A]/50 transition-all cursor-pointer shadow-sm"
                aria-label="Open Fullscreen Lightbox Album"
              >
                <Maximize2 className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Fullscreen View</span>
              </button>
            </div>

            {/* Main Featured Media Display Stage */}
            <div
              onClick={() => openLightboxAt(activeSlotIndex)}
              className="relative w-full h-[320px] sm:h-[460px] rounded-2xl overflow-hidden cursor-pointer border border-[#E8DEC8] shadow-inner bg-[#0E3B2E]"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  openLightboxAt(activeSlotIndex);
                }
              }}
              aria-label={`Click to view ${currentPhoto.title}`}
            >
              <img
                key={activeSlotIndex}
                src={currentPhoto.src}
                alt={currentPhoto.alt}
                className="w-full h-full object-cover img-hover-zoom filter brightness-95 group-hover:brightness-100 transition-all duration-500"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent pointer-events-none" />

              {/* Arrow Prev Button */}
              <button
                onClick={(e) => handlePrevSlot(e)}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 hover:bg-[#0E3B2E] text-white border border-[#C9A86A]/60 shadow-lg backdrop-blur-md transition-all duration-200 active:scale-90 hover:scale-105 z-10 cursor-pointer"
                aria-label="Previous Photo in Album"
              >
                <ChevronLeft className="w-6 h-6 stroke-[2.5]" />
              </button>

              {/* Arrow Next Button */}
              <button
                onClick={(e) => handleNextSlot(e)}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 hover:bg-[#0E3B2E] text-white border border-[#C9A86A]/60 shadow-lg backdrop-blur-md transition-all duration-200 active:scale-90 hover:scale-105 z-10 cursor-pointer"
                aria-label="Next Photo in Album"
              >
                <ChevronRight className="w-6 h-6 stroke-[2.5]" />
              </button>

              {/* Expand Hint Overlay */}
              <div className="absolute top-4 right-4 bg-black/60 text-white px-3 py-1.5 rounded-full text-xs font-semibold backdrop-blur-md flex items-center gap-1.5 opacity-90 group-hover:bg-[#C9A86A] group-hover:text-[#27232A] transition-all">
                <Maximize2 className="w-4 h-4" />
                <span>Tap to Expand Lightbox</span>
              </div>

              {/* Photo Title & Category Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7 text-white pointer-events-none space-y-1">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#E7D4A8]">
                  <Camera className="w-4 h-4 text-[#C9A86A]" />
                  <span>PHOTO {activeSlotIndex + 1} &bull; {currentPhoto.category}</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold leading-snug drop-shadow-md">
                  {currentPhoto.title}
                </h3>
              </div>
            </div>

            {/* Bottom 15-Thumbnail Selection Strip */}
            <div className="mt-4 pt-4 border-t border-[#E8DEC8] flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-xs font-bold text-[#0E3B2E] uppercase tracking-wider flex items-center gap-1.5 shrink-0">
                <Layers className="w-4 h-4 text-[#C9A86A]" />
                Select Photo Slot (15 Photos):
              </span>

              {/* 15 Thumbnail Buttons */}
              <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-2 scrollbar-none">
                {SCHOOL_PHOTOS.map((photo, idx) => (
                  <button
                    key={photo.id}
                    onClick={() => setActiveSlotIndex(idx)}
                    className={`relative rounded-xl overflow-hidden border-2 transition-all duration-200 h-14 w-14 sm:h-16 sm:w-16 shrink-0 group/thumb cursor-pointer ${
                      activeSlotIndex === idx
                        ? 'border-[#C9A86A] ring-4 ring-[#C9A86A]/30 scale-105 shadow-glow-gold'
                        : 'border-[#E8DEC8] opacity-70 hover:opacity-100 hover:border-[#0E3B2E]'
                    }`}
                    aria-label={`Switch to Photo ${idx + 1}`}
                  >
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      className="w-full h-full object-cover"
                    />
                    <span className={`absolute bottom-0.5 left-1/2 -translate-x-1/2 text-[8px] font-black uppercase px-1 rounded shadow-sm ${
                      activeSlotIndex === idx
                        ? 'bg-[#C9A86A] text-[#27232A]'
                        : 'bg-[#0E3B2E]/85 text-white'
                    }`}>
                      {idx + 1}
                    </span>
                  </button>
                ))}
              </div>
            </div>

          </div>
        </ScrollReveal>

      </div>

      {/* FULLSCREEN COMPLETE PHOTO ALBUM LIGHTBOX MODAL */}
      {(isLightboxOpen || isClosing) && currentPhoto && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/95 backdrop-blur-md transition-opacity duration-200 ${
            isClosing ? 'opacity-0' : 'animate-lightboxBackdrop'
          }`}
          onClick={handleClose}
          role="dialog"
          aria-modal="true"
          aria-label="Radha Driving School Fullscreen Photo Album"
        >
          {/* Lightbox Album Container */}
          <div
            className={`relative w-full max-w-5xl h-full max-h-[92vh] flex flex-col items-center justify-between transition-all duration-200 ${
              isClosing ? 'scale-95 opacity-0' : 'animate-lightboxScale'
            }`}
            onClick={(e) => e.stopPropagation()}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Top Control Bar */}
            <div className="w-full flex items-center justify-between text-white py-3 px-4 sm:px-6 bg-gradient-to-b from-black/85 to-transparent rounded-t-2xl z-20">
              <div className="flex items-center gap-3">
                <span className="text-xs sm:text-sm font-mono font-bold bg-[#C9A86A] text-[#27232A] px-3.5 py-1 rounded-full shadow-md">
                  Photo {activeSlotIndex + 1} / {SCHOOL_PHOTOS.length}
                </span>
                <div className="hidden sm:flex flex-col">
                  <span className="text-xs font-bold text-gray-200 truncate max-w-xs">
                    {currentPhoto.title}
                  </span>
                  <span className="text-[10px] text-[#C9A86A] uppercase tracking-wider font-semibold">
                    Radha Driving School Album
                  </span>
                </div>
              </div>

              {/* Close Button */}
              <button
                onClick={handleClose}
                className="p-2.5 rounded-xl bg-white/10 hover:bg-white/25 text-white border border-white/20 transition-all active:scale-95 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#C9A86A]"
                aria-label="Close Album Viewer (ESC)"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Main Center Image Display */}
            <div className="relative flex-1 w-full flex items-center justify-center overflow-hidden my-2">
              <img
                key={currentPhoto.src}
                src={currentPhoto.src}
                alt={currentPhoto.alt}
                className="max-w-full max-h-[73vh] object-contain rounded-xl shadow-2xl transition-all duration-300 transform"
              />

              {/* Previous Arrow Button */}
              <button
                onClick={(e) => handlePrevSlot(e)}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/70 hover:bg-[#0E3B2E] text-white border border-[#C9A86A]/60 shadow-xl backdrop-blur-sm transition-all duration-200 active:scale-90 focus:outline-none focus:ring-2 focus:ring-[#C9A86A] z-20 cursor-pointer"
                aria-label="Previous Photo (Left Arrow)"
              >
                <ChevronLeft className="w-7 h-7 stroke-[2.5]" />
              </button>

              {/* Next Arrow Button */}
              <button
                onClick={(e) => handleNextSlot(e)}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/70 hover:bg-[#0E3B2E] text-white border border-[#C9A86A]/60 shadow-xl backdrop-blur-sm transition-all duration-200 active:scale-90 focus:outline-none focus:ring-2 focus:ring-[#C9A86A] z-20 cursor-pointer"
                aria-label="Next Photo (Right Arrow)"
              >
                <ChevronRight className="w-7 h-7 stroke-[2.5]" />
              </button>
            </div>

            {/* Bottom Album Caption & 15-Thumbnail Carousel */}
            <div className="w-full flex flex-col items-center gap-2 bg-gradient-to-t from-black/90 to-transparent py-3 px-4 rounded-b-2xl z-20">
              <p className="text-xs sm:text-sm text-gray-200 text-center font-medium max-w-xl">
                <span className="font-bold text-white">{currentPhoto.title}</span> &bull; <span className="text-[#C9A86A]">{currentPhoto.category}</span>
              </p>

              {/* 15 Photo Thumbnails */}
              <div className="flex items-center gap-2 overflow-x-auto max-w-full pb-1 pt-1 scrollbar-none">
                {SCHOOL_PHOTOS.map((photo, idx) => (
                  <button
                    key={photo.id}
                    onClick={() => setActiveSlotIndex(idx)}
                    className={`relative w-12 h-12 sm:w-14 sm:h-14 rounded-lg overflow-hidden border-2 transition-all duration-200 shrink-0 cursor-pointer ${
                      activeSlotIndex === idx
                        ? 'border-[#C9A86A] scale-105 ring-2 ring-[#C9A86A]/50 shadow-glow-gold'
                        : 'border-white/20 opacity-50 hover:opacity-100'
                    }`}
                    aria-label={`Switch to Photo ${idx + 1}`}
                  >
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute bottom-0 left-0 right-0 bg-black/60 text-[8px] font-mono text-white text-center">
                      {idx + 1}
                    </span>
                  </button>
                ))}
              </div>

              <span className="text-[10px] text-gray-400 sm:hidden">
                Swipe left/right to navigate &bull; Tap close or outside to exit
              </span>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};

export default SchoolPhotos;
