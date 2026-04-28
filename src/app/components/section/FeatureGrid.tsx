"use client";

import Image from "next/image";
import { useState } from "react";

const FeatureGrid = () => {
  const [active, setActive] = useState("center");

  return (
    <div className="w-full flex justify-center mt-16 px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">

        {/* LEFT COLUMN */}
        <div className="flex flex-col gap-6">
          
          {/* TOP */}
          <div
            onMouseEnter={() => setActive("left-top")}
            className={`transition-all duration-500 rounded-2xl p-4 shadow-md bg-blue-200 cursor-pointer ${
              active === "left-top" ? "h-full" : "h-[120px]"
            }`}
          >
            {active === "left-top" && (
              <div className="relative w-full h-[220px] mb-3">
                <Image
                  src="/intro-images/safety.png"
                  alt="Safety"
                  fill
                  className="object-cover rounded-xl"
                />
              </div>
            )}
            <p className="font-semibold  flex  items-end">
              Safe & Stimulating Learning Spaces
            </p>
          </div>

          {/* BOTTOM */}
          <div
            onMouseEnter={() => setActive("left-bottom")}
            className={`transition-all duration-500 rounded-2xl p-4 shadow-md bg-green-200 cursor-pointer ${
              active === "left-bottom" ? "h-full" : "h-[120px]"
            }`}
          >
            {active === "left-bottom" && (
              <div className="relative w-full h-[220px] mb-3">
                <Image
                  src="/intro-images/caring.png"
                  alt="Caring"
                  fill
                  className="object-cover rounded-xl"
                />
              </div>
            )}
            <p className="font-semibold">
              Small groups for personalized care and attention
            </p>
          </div>
        </div>

        {/* CENTER */}
        <div className="rounded-2xl p-4 shadow-md bg-orange-200 h-[520px]">
          <p className="font-semibold mb-4">
            A trusted space where every milestone shines
          </p>

          <div className="relative w-full h-[420px]">
            <Image
              src="/intro-images/playing.png"
              alt="Playing"
              fill
              className="object-cover rounded-xl"
            />
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="flex flex-col gap-6">
          
          {/* TOP */}
          <div
            onMouseEnter={() => setActive("right-top")}
            className={`transition-all duration-500 rounded-2xl p-4 shadow-md bg-purple-200 cursor-pointer ${
              active === "right-top" ? "h-full" : "h-[120px]"
            }`}
          >
            {active === "right-top" && (
              <div className="relative w-full h-[220px] mb-3">
                <Image
                  src="/intro-images/training.png"
                  alt="Training"
                  fill
                  className="object-cover rounded-xl"
                />
              </div>
            )}
            <p className="font-semibold">
              Expertly trained educators
            </p>
          </div>

          {/* BOTTOM */}
          <div
            onMouseEnter={() => setActive("right-bottom")}
            className={`transition-all duration-500 rounded-2xl p-4 shadow-md bg-yellow-200 cursor-pointer ${
              active === "right-bottom" ? "h-[320px]" : "h-[120px]"
            }`}
          >
            {active === "right-bottom" && (
              <div className="relative w-full h-[220px] mb-3">
                <Image
                  src="/intro-images/parents.png"
                  alt="Parents"
                  fill
                  className="object-cover rounded-xl"
                />
              </div>
            )}
            <p className="font-semibold">
              Structured parent involvement
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default FeatureGrid;