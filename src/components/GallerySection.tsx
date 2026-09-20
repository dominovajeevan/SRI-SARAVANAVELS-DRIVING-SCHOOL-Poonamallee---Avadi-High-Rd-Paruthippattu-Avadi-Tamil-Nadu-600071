import React, { useState } from 'react';
import { Sparkles, Maximize2, Camera, ChevronLeft, ChevronRight, Layers, Play, Video, Image as ImageIcon } from 'lucide-react';
import { LightboxModal, type LightboxItem } from './LightboxModal';
import { ScrollReveal } from './ScrollReveal';

export const GALLERY_ITEMS: LightboxItem[] = [];

export const GallerySection: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'photos' | 'videos'>('all');
  const [activeSlotIndex, setActiveSlotIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const filteredItems = GALLERY_ITEMS.filter(item => {
    if (filter === 'photos') return item.type === 'image';
    if (filter === 'videos') return item.type === 'video';
    return true;
  });

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setIsLightboxOpen(true);
  };

  const handlePrevSlot = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveSlotIndex((prev) => (prev === 0 ? GALLERY_ITEMS.length - 1 : prev - 1));
  };

  const handleNextSlot = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveSlotIndex((prev) => (prev === GALLERY_ITEMS.length - 1 ? 0 : prev + 1));
  };

  const currentItem = GALLERY_ITEMS[activeSlotIndex];
  const isCurrentVideo = currentItem?.type === 'video';

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-[#FAF7F2] bg-celestial-pattern relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#4B2E5E] bg-[#F3EFE7] px-3.5 py-1.5 rounded-full border border-[#C9A86A]/40 shadow-sm inline-flex items-center gap-1.5">
              <Camera className="w-3.5 h-3.5 text-[#C9A86A]" />
              ACADEMY MEDIA GALLERY & SHOWCASE
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#4B2E5E] tracking-tight">
              Our Training <span className="gradient-text-gold">Showcase</span>
            </h2>
            <p className="text-[#665E6E] text-base sm:text-lg">
              Explore our complete training photos (IMG 1 to IMG 6) and practical videos in a single interactive gallery showcase. Click any photo or video to open fullscreen!
            </p>

            {/* Category Filter Tabs */}
            <div className="pt-4 flex items-center justify-center gap-2 sm:gap-3 flex-wrap">
              <button
                onClick={() => setFilter('all')}
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  filter === 'all'
                    ? 'bg-[#4B2E5E] text-[#FAF7F2] border border-[#C9A86A] shadow-md'
                    : 'bg-white text-[#665E6E] border border-[#E8DEC8] hover:border-[#C9A86A]'
                }`}
              >
                All Media ({GALLERY_ITEMS.length})
              </button>
              <button
                onClick={() => setFilter('photos')}
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center gap-1.5 ${
                  filter === 'photos'
                    ? 'bg-[#4B2E5E] text-[#FAF7F2] border border-[#C9A86A] shadow-md'
                    : 'bg-white text-[#665E6E] border border-[#E8DEC8] hover:border-[#C9A86A]'
                }`}
              >
                <ImageIcon className="w-3.5 h-3.5 text-[#C9A86A]" />
                <span>Photos (6)</span>
              </button>
              <button
                onClick={() => setFilter('videos')}
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center gap-1.5 ${
                  filter === 'videos'
                    ? 'bg-[#4B2E5E] text-[#FAF7F2] border border-[#C9A86A] shadow-md'
                    : 'bg-white text-[#665E6E] border border-[#E8DEC8] hover:border-[#C9A86A]'
                }`}
              >
                <Video className="w-3.5 h-3.5 text-[#C9A86A]" />
                <span>Videos (4)</span>
              </button>
            </div>
          </div>
        </ScrollReveal>

        {/* SINGLE FEATURED HERO SLOT CONTAINER */}
        <ScrollReveal delay={100}>
          <div className="max-w-4xl mx-auto bg-white border-2 border-[#C9A86A]/70 rounded-3xl p-4 sm:p-6 shadow-2xl relative overflow-hidden group mb-14">
            
            {/* Top Info Bar inside the Single Slot */}
            <div className="flex items-center justify-between gap-3 mb-4 pb-3 border-b border-[#E8DEC8]">
              <div className="flex items-center gap-2">
                <span className="bg-[#4B2E5E] text-[#FAF7F2] border border-[#C9A86A]/60 text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full shadow-sm flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#C9A86A]" />
                  FEATURED SHOWCASE
                </span>
                <span className="bg-[#F3EFE7] text-[#4B2E5E] border border-[#C9A86A]/40 text-xs font-mono font-bold px-3 py-1 rounded-full">
                  {isCurrentVideo ? 'VIDEO' : 'IMG'} {activeSlotIndex + 1} OF {GALLERY_ITEMS.length}
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

            {/* Main Featured Media Display */}
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
              aria-label={`Click to view ${currentItem.title}`}
            >
              {isCurrentVideo ? (
                <div className="relative w-full h-full">
                  <video
                    key={activeSlotIndex}
                    src={currentItem.src}
                    poster={currentItem.poster}
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover filter brightness-90 group-hover:brightness-100 transition-all duration-500"
                  />
                  {/* Subtle Play Overlay */}
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/20 transition-colors">
                    <div className="w-16 h-16 rounded-full bg-[#4B2E5E]/90 border-2 border-[#C9A86A] flex items-center justify-center text-[#C9A86A] shadow-glow-purple transform group-hover:scale-110 transition-transform">
                      <Play className="w-8 h-8 fill-[#C9A86A] ml-1" />
                    </div>
                  </div>
                </div>
              ) : (
                <img
                  key={activeSlotIndex}
                  src={currentItem.src}
                  alt={currentItem.alt}
                  className="w-full h-full object-cover img-hover-zoom filter brightness-95 group-hover:brightness-100 transition-all duration-500"
                />
              )}

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

              {/* Arrow Prev Button */}
              <button
                onClick={handlePrevSlot}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 hover:bg-[#4B2E5E] text-white border border-[#C9A86A]/60 shadow-lg backdrop-blur-md transition-all duration-200 active:scale-90 hover:scale-105 z-10"
                aria-label="Previous Media Slot"
              >
                <ChevronLeft className="w-6 h-6 stroke-[2.5]" />
              </button>

              {/* Arrow Next Button */}
              <button
                onClick={handleNextSlot}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 hover:bg-[#4B2E5E] text-white border border-[#C9A86A]/60 shadow-lg backdrop-blur-md transition-all duration-200 active:scale-90 hover:scale-105 z-10"
                aria-label="Next Media Slot"
              >
                <ChevronRight className="w-6 h-6 stroke-[2.5]" />
              </button>

              {/* Expand Hint Overlay */}
              <div className="absolute top-4 right-4 bg-black/60 text-white px-3 py-1.5 rounded-full text-xs font-semibold backdrop-blur-md flex items-center gap-1.5 opacity-90 group-hover:bg-[#C9A86A] group-hover:text-[#27232A] transition-all">
                <Maximize2 className="w-4 h-4" />
                <span>Tap to Expand Lightbox</span>
              </div>

              {/* Image / Video Title & Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7 text-white pointer-events-none space-y-1">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#E7D4A8]">
                  <Layers className="w-4 h-4 text-[#C9A86A]" />
                  <span>{isCurrentVideo ? 'VIDEO' : 'IMG'} {activeSlotIndex + 1}: {currentItem.title}</span>
                </div>
                <p className="text-xs sm:text-sm text-gray-200 line-clamp-2 leading-relaxed max-w-2xl">
                  {currentItem.caption}
                </p>
              </div>
            </div>

            {/* Bottom 10-Thumbnail Strip */}
            <div className="mt-4 pt-4 border-t border-[#E8DEC8] flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-xs font-bold text-[#4B2E5E] uppercase tracking-wider flex items-center gap-1.5">
                <Layers className="w-4 h-4 text-[#C9A86A]" />
                Select Media Slot (10 Items):
              </span>

              {/* 10 Thumbnail Buttons */}
              <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-2 scrollbar-none">
                {GALLERY_ITEMS.map((item, idx) => {
                  const isVid = item.type === 'video';
                  return (
                    <button
                      key={idx}
                      onClick={() => setActiveSlotIndex(idx)}
                      className={`relative rounded-xl overflow-hidden border-2 transition-all duration-200 h-14 w-14 sm:h-16 sm:w-16 shrink-0 group/thumb cursor-pointer ${
                        activeSlotIndex === idx
                          ? 'border-[#C9A86A] ring-4 ring-[#C9A86A]/30 scale-105 shadow-glow-gold'
                          : 'border-[#E8DEC8] opacity-70 hover:opacity-100 hover:border-[#4B2E5E]'
                      }`}
                      aria-label={`Switch to ${item.title}`}
                    >
                      <img
                        src={isVid ? (item.poster || item.src) : item.src}
                        alt={item.alt}
                        className="w-full h-full object-cover"
                      />
                      {isVid && (
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                          <Play className="w-3.5 h-3.5 text-[#C9A86A] fill-[#C9A86A]" />
                        </div>
                      )}
                      <span className={`absolute bottom-0.5 left-1/2 -translate-x-1/2 text-[8px] font-black uppercase px-1 rounded shadow-sm ${
                        activeSlotIndex === idx
                          ? 'bg-[#C9A86A] text-[#27232A]'
                          : 'bg-[#4B2E5E]/80 text-white'
                      }`}>
                        {isVid ? 'VID' : 'IMG'} {idx + 1}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>
        </ScrollReveal>

        {/* FULL RESPONSIVE GRID SHOWCASE FOR ALL MEDIA ITEMS */}
        <ScrollReveal delay={200}>
          <div className="mt-8">
            <div className="flex items-center justify-between mb-6 border-b border-[#E8DEC8] pb-4">
              <h3 className="text-xl font-bold text-[#4B2E5E]">
                All Gallery Media ({filteredItems.length})
              </h3>
              <span className="text-xs text-[#665E6E]">
                Click any item to view in full resolution lightbox
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredItems.map((item) => {
                const originalIndex = GALLERY_ITEMS.findIndex(g => g.src === item.src);
                const isItemVideo = item.type === 'video';

                return (
                  <div
                    key={item.src}
                    onClick={() => openLightbox(originalIndex)}
                    className="group relative bg-white border border-[#E8DEC8] hover:border-[#C9A86A] rounded-2xl overflow-hidden shadow-celestial-card hover:shadow-2xl transition-all duration-300 cursor-pointer flex flex-col justify-between"
                  >
                    {/* Media Thumbnail Container */}
                    <div className="relative w-full h-48 overflow-hidden bg-[#4B2E5E]/10">
                      <img
                        src={isItemVideo ? (item.poster || item.src) : item.src}
                        alt={item.alt}
                        className="w-full h-full object-cover img-hover-zoom transition-transform duration-500"
                        loading="lazy"
                      />

                      {/* Video Play Overlay */}
                      {isItemVideo && (
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/25 transition-colors">
                          <div className="w-12 h-12 rounded-full bg-[#4B2E5E]/90 border border-[#C9A86A] flex items-center justify-center text-[#C9A86A] shadow-md group-hover:scale-110 transition-transform">
                            <Play className="w-6 h-6 fill-[#C9A86A] ml-0.5" />
                          </div>
                        </div>
                      )}

                      {/* Type Badge Overlay */}
                      <span className="absolute top-3 left-3 text-[10px] font-extrabold uppercase tracking-wider text-white bg-[#4B2E5E]/90 backdrop-blur-md px-2.5 py-1 rounded-md border border-[#C9A86A]/40 flex items-center gap-1 shadow-sm">
                        {isItemVideo ? (
                          <>
                            <Video className="w-3 h-3 text-[#C9A86A]" />
                            <span>VIDEO {originalIndex + 1}</span>
                          </>
                        ) : (
                          <>
                            <ImageIcon className="w-3 h-3 text-[#C9A86A]" />
                            <span>IMG {originalIndex + 1}</span>
                          </>
                        )}
                      </span>
                    </div>

                    {/* Card Information */}
                    <div className="p-4 flex flex-col flex-1 justify-between">
                      <div>
                        <h4 className="text-sm font-bold text-[#4B2E5E] group-hover:text-[#72548C] transition-colors leading-snug mb-1">
                          {item.title}
                        </h4>
                        <p className="text-xs text-[#665E6E] line-clamp-2 leading-relaxed">
                          {item.caption}
                        </p>
                      </div>

                      <div className="mt-3 pt-3 border-t border-[#E8DEC8] flex items-center justify-between text-[11px] font-bold text-[#4B2E5E] group-hover:text-[#C9A86A] transition-colors">
                        <span>{isItemVideo ? 'Play Video' : 'View Full Image'}</span>
                        <Maximize2 className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </ScrollReveal>

      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        isOpen={isLightboxOpen}
        currentIndex={lightboxIndex}
        images={GALLERY_ITEMS}
        onClose={() => setIsLightboxOpen(false)}
        onNavigate={(newIdx) => setLightboxIndex(newIdx)}
      />
    </section>
  );
};
