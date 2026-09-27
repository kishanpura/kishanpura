"use client";

import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

const pics = [
  { id: 1, bg: "assets/pic1.jpg", text: "Slide1" },
  { id: 2, bg: "assets/pic2.jpg", text: "Slide2" },
  { id: 3, bg: "assets/pic3.jpg", text: "Slide3" },
  { id: 4, bg: "assets/pic4.jpg", text: "Slide4" },
  { id: 5, bg: "assets/pic5.jpg", text: "Slide5" },
  { id: 6, bg: "assets/pic6.jpg", text: "Slide6" },
  { id: 7, bg: "assets/pic7.jpg", text: "Slide7" },
  { id: 8, bg: "assets/pic8.jpg", text: "Slide8" },
  { id: 9, bg: "assets/pic9.jpg", text: "Slide9" },
  { id: 10, bg: "assets/pic10.jpg", text: "Slide10" },
];

const slides = [
  { ...pics[pics.length - 1], id: "clone-end" },
  ...pics,
  { ...pics[0], id: "clone-start" },
];

export const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [isAutoPlayEnabled, setIsAutoPlayEnabled] = useState(true);

  const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const transitionDuration = 500;

  const nextSlide = useCallback(() => {
    if (!isTransitioning) setIsTransitioning(true);
    setCurrentIndex((prevIndex) => prevIndex + 1);
  }, [isTransitioning]);

  const prevSlide = useCallback(() => {
    if (!isTransitioning) setIsTransitioning(true);
    setCurrentIndex((prevIndex) => prevIndex - 1);
  }, [isTransitioning]);

  const goToSlide = (index: number) => {
    if (!isTransitioning) setIsTransitioning(true);
    setCurrentIndex(index);
  };

  const handleTransitionEnd = () => {
    if (currentIndex === slides.length - 1) {
      setIsTransitioning(false);
      setCurrentIndex(1);
    } else if (currentIndex === 0) {
      setIsTransitioning(false);
      setCurrentIndex(slides.length - 2);
    }
  };

  useEffect(() => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }

    if (isAutoPlayEnabled && !isHovered) {
      autoPlayRef.current = setInterval(() => {
        nextSlide();
      }, 3000);
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isHovered, isAutoPlayEnabled, nextSlide]);

  const getActiveDotIndex = () => {
    if (currentIndex === 0) return pics.length - 1;
    if (currentIndex === slides.length - 1) return 0;
    return currentIndex - 1;
  };

  return (
    <div
      className="relative mx-2 md:mx-16 my-2 md:my-5 aspect-video md:aspect-27/10 rounded-3xl overflow-hidden shadow-2xl bg-neutral-900 border border-neutral-200/20"
      onMouseEnter={() => setIsHovered(true)}
      onTouchStart={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchEnd={() => setIsHovered(false)}
    >
      <div
        className="flex w-full h-full"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          transition: isTransitioning
            ? `transform ${transitionDuration}ms cubic-bezier(0.4,0,0.2,1)`
            : `none`,
        }}
        onTransitionEnd={handleTransitionEnd}
      >
        {slides.map((slide, index) => (
          <div
            key={`${slide.id}-${index}`}
            className={`min-w-full h-full flex items-center justify-center`}
          >
            <div className="text-center transform transition-transform duration-500 hover:scale-105">
              <img src={slide.bg} />
              <div className="w-full flex items-center justify-center z-50 absolute bottom-12">
                <span className="text-white text-bold md:text-3xl">
                  {slide.text}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Navigation Controls */}
      <div className="absolute inset-0 flex items-center justify-between p-4 pointer-events-none">
        <button
          onClick={prevSlide}
          className="pointer-events-auto w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-md border border-white/30 text-white transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/50"
          aria-label="Previous Slide"
        >
          <ChevronLeft size={28} strokeWidth={2.5} />
        </button>
        <button
          onClick={nextSlide}
          className="pointer-events-auto w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-md border border-white/30 text-white transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/50"
          aria-label="Next Slide"
        >
          <ChevronRight size={28} strokeWidth={2.5} />
        </button>
      </div>

      {/* Auto-play indicator */}
      <div className="absolute top-6 left-6 pointer-events-auto">
        <button
          onClick={() => setIsAutoPlayEnabled(!isAutoPlayEnabled)}
          className="px-4 py-2 flex items-center gap-2 rounded-full bg-black/30 hover:bg-black/50 backdrop-blur-md border border-white/10 text-white text-sm font-semibold transition-all duration-300 opacity-0 group-hover:opacity-100"
        >
          {isAutoPlayEnabled ? <Pause size={16} /> : <Play size={16} />}
          {isAutoPlayEnabled ? "Auto-play On" : "Paused"}
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center items-center gap-3">
        {pics.map((_, index) => {
          const isActive = getActiveDotIndex() === index;
          return (
            <button
              key={index}
              onClick={() => goToSlide(index + 1)} // +1 because index 0 is a clone
              className={`transition-all duration-500 rounded-full bg-white shadow-[0_0_8px_rgba(0,0,0,0.3)] focus:outline-none focus:ring-2 focus:ring-white/50 ${
                isActive
                  ? "w-8 h-3 opacity-100"
                  : "w-3 h-3 opacity-50 hover:opacity-80"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          );
        })}
      </div>
    </div>
  );
};
