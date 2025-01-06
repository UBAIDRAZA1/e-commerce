'use client'
import { useState } from 'react';
import Image from 'next/image';

const ChairGallery = () => {
  const chairImages = [
    {
      src: "/milestone2/chair3.png",
      alt: "Main Chair",
      main: true,
      details: "This premium chair offers an ergonomic design, making it perfect for long hours of sitting. It combines durability with a modern aesthetic to fit any environment."
    },
    {
      src: "/milestone2/chair2.png",
      alt: "Chair 2",
      main: false,
      details: "A classic chair designed with high-quality wood and a smooth finish. Ideal for dining or office spaces, it adds a touch of elegance to your interior."
    },
    {
      src: "/milestone2/chair.png",
      alt: "Chair 3",
      main: false,
      details: "Chair 3 stands out for its plush cushions and breathable fabric. Perfect for a cozy corner, it blends comfort with style effortlessly."
    },
    {
      src: "/milestone2/chair4.png",
      alt: "Chair 4",
      main: false,
      details: "Minimalist and sleek, this chair is designed for small spaces. Lightweight yet sturdy, it complements any modern living area."
    },
    {
      src: "/milestone2/card.png",
      alt: "Chair 5",
      main: false,
      details: "An industrial-style chair built to last. Its robust frame and contemporary design make it a great choice for both indoor and outdoor use."
    },
    {
      src: "/milestone2/chair6.png",
      alt: "Chair 6",
      main: false,
      details: "This modern chair features a unique design and lightweight material, perfect for contemporary interiors."
    }
  ];

  const [selectedChair, setSelectedChair] = useState(chairImages[0]);

  return (
    <div className="mt-12 flex flex-col items-center relative">
      {/* Rotated Text Section */}
      <div className="absolute top-1/2 -translate-y-1/2 -left-32 rotate-90">
        <p className="text-sm md:text-lg text-gray-700 font-semibold tracking-wide whitespace-nowrap">
          EXPLORE NEW AND POPULAR STYLES
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center ml-10">
        {/* Main Chair with Details */}
        <div className="md:w-1/2 flex flex-col justify-center items-center">
          <Image
            src={selectedChair.src}
            alt={selectedChair.alt}
            width={400}
            height={400}
            className="object-contain max-w-full max-h-[400px] transition-transform duration-300 hover:scale-105"
            priority
          />
          <p className="mt-4 text-gray-600 text-sm md:text-base text-center">{selectedChair.details}</p>
        </div>

        {/* Right Section - Gallery Images */}
        <div className="md:w-1/2 grid grid-cols-2 gap-4 ml-4">
          {chairImages.slice(0, 4).map((chair, index) => (
            <div
              key={index}
              className="group relative cursor-pointer"
              onClick={() => setSelectedChair(chair)}
            >
              <Image
                src={chair.src}
                alt={chair.alt}
                width={200}
                height={200}
                className="object-cover w-full h-full rounded-lg transition-transform duration-300 hover:scale-105"
              />
              {/* Hover Details */}
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300 rounded-lg">
                <p className="text-white text-xs md:text-sm px-2 text-center">{chair.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChairGallery;
