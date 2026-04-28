"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const images = [
  {
    src: "/intro-images/first.png",
    alt: "Slide 1",
  },
  {
    src: "/intro-images/second.png",
    alt: "Slide 2",
  },
  {
    src: "/intro-images/third.png",
    alt: "Slide 3",
  },
  {
    src: "/intro-images/desktop-home.webp",
    alt: "Slide 4",
  },
];
const ImageSlider = () => {
  const [current, setCurrent] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full flex flex-col items-center mt-6">
      
      {/* Slider Container */}
      <div className="relative w-[90%] max-w-6xl h-100 overflow-hidden rounded-4xl shadow-lg">
        
        {/* Images */}
        <div
          className="flex transition-transform duration-700 ease-in-out h-full"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {images.map((img, index) => (
            <div key={index} className="min-w-full h-full relative">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
                priority={index === 0}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="flex gap-3 mt-4">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              current === index
                ? "bg-[#0060aa] scale-110"
                : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;