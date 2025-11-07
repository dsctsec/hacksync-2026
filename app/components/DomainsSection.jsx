"use client";
import React from "react";
import Image from "next/image";

const domains = [
  {
    name: "Web / App",
    description: "Coding outlaws of the wild stack",
    image: "/domains/web.png",
  },
  {
    name: "AI / ML",
    description: "Taming thinking machines",
    image: "/domains/ai.png",
  },
  {
    name: "Blockchain",
    description: "Wrangling wild ledgers",
    image: "/domains/blockchain.png",
  },
];

export default function DomainsSection() {
  return (
    <section className="py-20 text-center">
      {/* Heading */}
      <h1 className="font-['Ewert'] text-5xl md:text-6xl text-[#ffb100] mb-16 ">
        Domains
      </h1>

      {/* Posters Grid */}
      <div className="flex flex-wrap justify-center gap-8 md:gap-12 px-4 max-w-7xl mx-auto">
        {domains.map((domain, i) => (
          <div
            key={i}
            className="
              relative w-full max-w-sm h-96
              bg-[url('/domains/wantedposter.jpeg')] bg-center bg-cover bg-no-repeat
              flex flex-col items-center justify-start
              font-['Chinese_Rocks'] text-[#3a1a00]
              transition-transform duration-700 ease-in-out
              hover:scale-105 hover:rotate-1
              overflow-hidden
              shadow-[0_0_20px_rgba(0,0,0,0.6)]
              rounded-md
            "
            style={{ backgroundColor: 'transparent' }}
          >
            {/* Domain Name */}
            <div className="mt-24">
              <p className="text-5xl font-bold text-[#2b1500] tracking-wider animate-flicker">
                {domain.name}
              </p>
            </div>

            {/* Mugshot */}
            <div className="relative w-20 h-20 my-4">
              <Image
                src={domain.image}
                alt={`${domain.name} domain`}
                fill
                className="object-contain filter sepia-[20%] drop-shadow-[0_0_8px_rgba(0,0,0,0.5)]"
              />
            </div>

            {/* Description - Larger Font */}
            <div className="px-6 text-center leading-tight">
              <span className="block font-bold text-2xl text-amber-950 drop-shadow-[1px_1px_6px_#ff9100]">
                For Crimes Of:
              </span>
              <span className="block text-xl md:text-xl font-medium text-amber-950 drop-shadow-[1px_1px_6px_#ff9100] mt-1">
                {domain.description}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}