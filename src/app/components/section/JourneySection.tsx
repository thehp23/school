"use client";

const JourneySection = () => {
  return (
    <div className="w-full flex justify-center mt-20 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-6xl w-full">

        {/* LEFT - TEXT */}
        <div className="flex flex-col justify-center">
          
          {/* Heading */}
          <h2 className="text-2xl md:text-3xl font-semibold text-[#0060aa] leading-snug">
            Journey Through Joyful Learning Spaces
          </h2>

          {/* Subheading */}
          <p className="mt-3 font-semibold text-gray-700">
            Take a virtual walk through spaces that inspire curiosity and joy.
          </p>

          {/* Description */}
          <p className="mt-4 text-gray-600 leading-relaxed">
            Step inside a Little Millennium centre with our 3D walkthrough
            video. See how thoughtfully designed spaces, vibrant classrooms,
            and child-safe corners create the perfect environment for early
            learning.
          </p>

        </div>

        {/* RIGHT - VIDEO */}
        <div className="w-full aspect-video rounded-2xl overflow-hidden shadow-lg">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/HtuWjB0QPzE"
            title="Inside Little Millennium | A Nurturing Preschool Experience for Young Learners"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

      </div>
    </div>
  );
};

export default JourneySection;