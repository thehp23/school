"use client";

const videoData = [
  {
    id: 1,
    title: "Watch Her Blossom: A Mom’s Story of Her Child",
    src: "https://www.youtube.com/embed/HtuWjB0QPzE",
  },
  {
    id: 2,
    title: "Franchise Partner Success Story | Little Millennium",
    src: "https://www.youtube.com/embed/HtuWjB0QPzE",
  },
];

const VoicesOfTrust = () => {
  return (
    <section className="w-full  py-16 px-4 sm:px-6 lg:px-8">
      
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-[#005ca9] text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
          Voices of Trust :
        </h2>
        <p className="text-[#005ca9] text-3xl sm:text-4xl md:text-5xl font-medium mt-3">
          From Parents and Partners
        </p>
      </div>

      {/* Video Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
        {videoData.map((video) => (
          <div
            key={video.id}
            className="relative w-full rounded-3xl overflow-hidden shadow-xl bg-black aspect-video hover:scale-[1.02] transition-transform duration-300"
          >
            
            {/* YouTube Video */}
            <iframe
              className="w-full h-full"
              src={video.src}
              title={video.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>

          </div>
        ))}
      </div>
    </section>
  );
};

export default VoicesOfTrust;