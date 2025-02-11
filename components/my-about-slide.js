import React, { useState, useEffect } from "react";
import { Carousel, CarouselContent } from "./ui/carousel";
import Image from "next/image";
import { BASE_API_URL, IMAGE_SLIDE_URL } from "@/env";

export default function MyAboutSlider() {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fetch slides from the API
  useEffect(() => {
    const fetchSlides = async () => {
      try {
        const response = await fetch(
          `${BASE_API_URL}/slides?position=about_slide`
        );
        const result = await response.json();
        setImages(result.slides || []);
      } catch (error) {
        console.error("Failed to fetch slides:", error);
      }
    };
    fetchSlides();
  }, []);

  // Auto-slide every 4 seconds
  useEffect(() => {
    if (images.length > 0) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [images]);

  // Show a loading indicator while images are being fetched
  if (images.length === 0) {
    return <div>Loading slides...</div>;
  }

  return (
    <div className="max-w-screen-2xl mt-2 mx-auto px-2 xl:px-16">
      <Carousel className="w-full" selectedindex={currentIndex}>
        <CarouselContent>
          {/* Slides */}
          <div
            className="flex transition-transform duration-500 relative"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {images.map((src, index) => (
              <div key={index} className="min-w-full">
                <Image
                  src={`${IMAGE_SLIDE_URL}${src.image}`}
                  alt={`Slide ${index + 1}`}
                  width={2100}
                  height={1280}
                  className="w-full object-cover aspect-[21/9]"
                />
              </div>
            ))}
          </div>

          {/* Dot Indicators */}
          <div className="flex justify-center space-x-3 absolute bottom-3 left-1/2 transform -translate-x-1/2 items-center">
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
