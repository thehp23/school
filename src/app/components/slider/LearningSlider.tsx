"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const slides = [
  {
    img: "/intro-images/developing-root.png",
    title: "Developing Roots",
    subtitle: "(Age: 2–3 years) / Playgroup",
    desc: "The Developing Roots program is designed to cater to children aged 2–3 years with fun-filled activities supporting early learning.",
  },
  {
    img: "/intro-images/emerging-wings.png",
    title: "Emerging Wings",
    subtitle: "(Age: 3–4 years) / Nursery",
    desc: "This stage builds communication, social interaction, and emotional development through guided play.",
  },
  {
    img: "/intro-images/ready-to-fly-1.jpeg",
    title: "Ready To Fly",
    subtitle: "(Age: 4–5 years) / LKG",
    desc: "Encouraging creativity, curiosity, and foundational learning through structured experiences.",
  },
  {
    img: "/intro-images/ready-to-fly-2.jpeg",
    title: "Flying High",
    subtitle: "(Age: 5–6 years) / UKG",
    desc: "Preparing children for school readiness with strong academic and life skills.",
  },
];

const LearningSlider = () => {
  const [current, setCurrent] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full flex justify-center mt-20 px-4">
      <div className="relative w-full max-w-6xl bg-[#f3dd89] rounded-3xl p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* LEFT CONTENT */}
        <div className="pr-6">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#0b5cab] leading-snug">
            Learning That’s Full of Life
          </h2>

          <p className="mt-6 text-gray-800 leading-relaxed max-w-md">
            From storytelling and singing to messy art and mini science labs,
            our children learn through joy and experience every single day.
          </p>
        </div>

        {/* RIGHT SLIDER */}
        <div className="pl-6">
          <div className="relative w-full h-[260px] md:h-[300px] rounded-2xl overflow-hidden shadow-xl">
            
            <Image
              src={slides[current].img}
              alt={slides[current].title}
              fill
              className="object-cover"
            />

            {/* Overlay Text */}
            <div className="absolute bottom-4 left-4 text-white">
              <p className="font-semibold">
                {slides[current].title}
              </p>
              <p className="text-sm">
                {slides[current].subtitle}
              </p>
            </div>
          </div>

          {/* Description */}
          <p className="mt-4 text-sm text-gray-900 leading-relaxed">
            {slides[current].desc}
          </p>
        </div>

        {/* DOTS - CENTER BETWEEN PANELS */}
        <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex-col gap-3 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                current === index
                  ? "bg-[#0b5cab] scale-125"
                  : "bg-gray-300"
              }`}
            />
          ))}
        </div>

      </div>
    </div>
  );
};

export default LearningSlider;