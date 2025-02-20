"use client";

import React, { useState, useRef } from "react";

interface SliderProps {
  slides: React.ReactNode[];
}

const Slider: React.FC<SliderProps> = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [offset, setOffset] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const nextSlide = () => {
    if (currentIndex < slides.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handleStart = (x: number) => {
    setIsDragging(true);
    setStartX(x);
    setOffset(0);
  };

  const handleMove = (x: number) => {
    if (!isDragging) return;
    const moveX = x - startX;
    setOffset(moveX);
  };

  const handleEnd = () => {
    setIsDragging(false);

    // Move only if dragged enough & within bounds
    if (offset > 50 && currentIndex > 0) {
      prevSlide();
    } else if (offset < -50 && currentIndex < slides.length - 1) {
      nextSlide();
    }
    setOffset(0);
  };

  return (
    <div
      className="relative w-full max-w-4xl mx-auto overflow-hidden select-none"
      ref={containerRef}
      onMouseDown={(e) => handleStart(e.clientX)}
      onMouseMove={(e) => handleMove(e.clientX)}
      onMouseUp={handleEnd}
      onMouseLeave={handleEnd}
      onTouchStart={(e) => handleStart(e.touches[0].clientX)}
      onTouchMove={(e) => handleMove(e.touches[0].clientX)}
      onTouchEnd={handleEnd}
    >
      <div
        className="flex transition-transform duration-300 ease-in-out"
        style={{
          transform: `translateX(calc(-${currentIndex * 100}% + ${offset}px))`,
        }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="min-w-full">
            {slide}
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      {currentIndex > 0 && (
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-2xl"
        >
          ‹
        </button>
      )}
      {currentIndex < slides.length - 1 && (
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-2xl"
        >
          ›
        </button>
      )}
    </div>
  );
};

export default Slider;
