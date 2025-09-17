"use client";
import React, { useState, useEffect } from "react";
import { Carousel, CarouselContent } from "./ui/carousel";
import Image from "next/image";

export default function MySlider() {
  // Static sample images
  const images = [
    { image: "https://picsum.photos/2100/1280?random=1" },
    { image: "https://picsum.photos/2100/1280?random=2" },
    { image: "https://picsum.photos/2100/1280?random=3" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 4 seconds
  useEffect(() => {
    if (images.length > 0) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [images]);

  return (
    <div className="relative px-2 mx-auto mt-2 max-w-screen-2xl xl:px-16">
      <Carousel className="w-full" selectedindex={currentIndex}>
        <CarouselContent>
          {/* Slides */}
          <div
            className="relative flex transition-transform duration-500"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {images.map((src, index) => (
              <div key={index} className="min-w-full">
                <Image
                  src={src.image}
                  alt={`Slide ${index + 1}`}
                  width={2100}
                  height={1280}
                  className="w-full object-cover aspect-[21/7]"
                />
              </div>
            ))}
          </div>

          {/* Dot Indicators */}
          <div className="absolute flex items-center justify-center space-x-3 transform -translate-x-1/2 bottom-3 left-1/2">
            {images.map((_, index) => (
              <div
                key={index}
                className={`transition-all duration-300 ${
                  currentIndex === index
                    ? "h-1 w-4 sm:w-9 sm:h-2 bg-white scale-125 shadow-md"
                    : "h-1 w-2 sm:w-3 sm:h-3 bg-gray-400 opacity-70"
                } rounded-full`}
              ></div>
            ))}
          </div>
        </CarouselContent>
      </Carousel>
    </div>
  );
}
