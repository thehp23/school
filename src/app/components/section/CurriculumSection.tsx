"use client";

import Image from "next/image";

const CurriculumSection = () => {
  return (
    <div className="w-full flex justify-center mt-20 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-6xl w-full">

        {/* LEFT - TEXT */}
        <div className="flex flex-col justify-center h-[350px]">
          
          {/* Heading */}
          <h2 className="text-2xl md:text-3xl font-semibold text-[#0060aa] leading-snug">
            A Scientifically Designed,
            <br />
            Play-Based Curriculum
          </h2>

          {/* Paragraph */}
          <p className="mt-4 text-gray-600 text-base leading-relaxed">
            The Seven Petal Approach is our proprietary learning method that
            supports holistic development, language, logic, creativity,
            physical movement, social-emotional learning, and more, all
            through structured play.
          </p>

        </div>

        {/* RIGHT - IMAGE */}
        <div className="w-full h-[350px] relative">
          <Image
            src="/intro-images/cartoon.png"
            alt="Curriculum"
            fill
            className="object-contain"
          />
        </div>

      </div>
    </div>
  );
};

export default CurriculumSection;