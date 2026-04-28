import Image from "next/image";

const Trustt = () => {
  return (
    <div className="w-full flex justify-center mt-20 px-4">
      
      <div className="relative w-full max-w-5xl flex items-center justify-center">
        
        {/* Left Image (Bird) */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2">
          <Image
            src="/intro-images/bird.png"
            alt="bird"
            width={80}   // increased from 60
            height={80}
            className="object-contain"
          />
        </div>

        {/* Text */}
        <h2 className="text-center text-2xl md:text-3xl font-semibold text-[#0060aa] px-16 leading-snug">
          Why thousands of families trust Little Millennium
        </h2>

        {/* Right Image (Clouds) */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2">
          <Image
            src="/intro-images/clouds.png"
            alt="clouds"
            width={110}  // increased from 80
            height={80}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Trustt;