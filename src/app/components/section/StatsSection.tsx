"use client";

import Image from "next/image";

const stats = [
  {
    number: "900+",
    label: "Preschools across India",
  },
  {
    number: "175+",
    label: "Cities",
  },
  {
    number: "200K+",
    label: "Happy Children",
  },
  {
    number: "50+",
    label: "Early Childhood Education Experts",
  },
];

const StatsSection = () => {
  return (
    <section className="w-full flex justify-center mt-20 px-4 sm:px-6 lg:px-8">
      <div className="relative w-full max-w-6xl bg-[#8cc4e8] rounded-[40px] overflow-hidden px-6 md:px-10 lg:px-16 py-8 md:py-12">
        
        {/* Decorative Background Shapes */}
        <div className="absolute top-0 right-0 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-white/10 rounded-bl-full"></div>
        <div className="absolute bottom-[-80px] right-[-80px] w-72 sm:w-96 md:w-[500px] h-72 sm:h-96 md:h-[500px] bg-white/10 rounded-full"></div>

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          
          {/* LEFT PANEL */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-xl h-[280px] sm:h-[350px] md:h-[420px]">
              
              {/* Main Image */}
              <Image
                src="/intro-images/map.png"
                alt="India Preschool Map"
                fill
                className="object-contain"
                priority
              />

            </div>
          </div>

          {/* RIGHT PANEL */}
          <div className="flex flex-col justify-center text-center md:text-left">
            
            {/* Heading */}
            <h2 className="text-white text-4xl sm:text-5xl md:text-4xl font-extrabold leading-tight">
              India’s <br />
              Fastest <br />
              Growing <br />
              Preschool <br />
              Brand
            </h2>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-x-8 gap-y-10 mt-10 md:mt-14">
              {stats.map((item, index) => (
                <div key={index}>
                  <h3 className="text-[#005ca9] text-3xl sm:text-4xl md:text-5xl font-bold">
                    {item.number}
                  </h3>
                  <p className="text-black text-sm sm:text-base md:text-lg leading-snug mt-2 max-w-[180px] mx-auto md:mx-0">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;