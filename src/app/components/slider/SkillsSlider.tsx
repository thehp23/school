"use client";

import Image from "next/image";
import { useState } from "react";

const images = [
  "cognitiveSkills.png",
  "languageSkill.png",
  "lifeSkill.png",
  "emotional.jpg",
  "nurturingIndividuals.png",
  "fineMotorSkila.png",
  "thinkingSkill.png",
  "grossMotor.png",
  "universalValues.png",
  "personalAwareness.png",
];

const description =
  "Building strong memory foundations for learning, concentration, understanding, speaking, reading, and problem-solving skills, enabling children to become confident communicators.";

// 👉 group into 4 per slide
const chunkArray = (arr: string[], size: number) => {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
};

const slides = chunkArray(images, 4);

const SkillsSlider = () => {
  const [current, setCurrent] = useState(0);

  return (
    <div className="w-full flex justify-center mt-20 px-4">
      <div className="w-full max-w-6xl">

        {/* Slider */}
        <div className="relative overflow-hidden">

          {/* Slides Wrapper */}
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {slides.map((group, i) => (
              <div
                key={i}
                className="min-w-full grid grid-cols-2 md:grid-cols-4 gap-6"
              >
                {group.map((img, index) => (
                  <div
                    key={index}
                    className="group perspective w-full h-[300px]"
                  >
                    <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
                      
                      {/* FRONT */}
                      <div className="absolute inset-0 backface-hidden rounded-2xl overflow-hidden shadow-lg">
                        <Image
                          src={`/intro-images/${img}`}
                          alt=""
                          fill
                          className="object-cover"
                        />
                      </div>

                      {/* BACK */}
                      <div className="absolute inset-0 rotate-y-180 backface-hidden rounded-2xl bg-[#0060aa] text-white flex items-center justify-center p-4 text-center shadow-lg">
                        <p className="text-sm leading-relaxed">
                          {description}
                        </p>
                      </div>

                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* DOTS */}
        <div className="flex justify-center gap-3 mt-6">
          {slides.map((_, index) => (
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
    </div>
  );
};

export default SkillsSlider;