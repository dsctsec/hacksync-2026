"use client";
import React from "react";

export default function DomainsSection() {
  const domains = [
    {
      name: "AI / ML",
      subheading: "Built or Busted",
      description: "Automating the Frontier & Thinking Machines",
      reward: "$50,000",
      image: "/domains/ai.png",
    },
    {
      name: "Blockchain",
      subheading: "Built or Busted",
      description: "Forging Unbreakable Ledgers & Staking Digital Claims",
      reward: "$40,000",
      image: "/domains/blockchain.png",
    },
    {
      name: "Web / App",
      subheading: "Built or Busted",
      description: "Engineering New Territories & Running the Full Stack",
      reward: "$30,000",
      image: "/domains/web.png",
    },
  ];

  return (
    <section id="domains" className="bg-black text-[#291200] min-h-screen py-20 text-center">
      <h1 className="font-['Ewert'] text-5xl md:text-6xl text-[#ffb100] mb-12 drop-shadow-[2px_2px_6px_black]">
        WANTED: DOMAINS
      </h1>

      <div className="flex flex-wrap justify-center gap-8">
        {domains.map((domain, i) => (
          <div
            key={i}
            className="
              relative w-80 h-[42rem] bg-[url('/domains/parchment.jpg')] bg-center bg-cover 
              text-center font-['Chinese_Rocks'] transition-transform duration-700 ease-in-out 
              hover:scale-105 overflow-hidden

              before:content-[''] 
              before:absolute 
              before:inset-0 
              before:bg-[url('/domains/grunge-frame.png')] 
              before:bg-[length:100%_100%]
              before:z-10
            "
          >
            
            {/* Title */}
            <h1 className="relative z-20 font-['Chinese_Rocks'] text-5xl mt-6 text-[#291200]">WANTED</h1>

            {/* Domain Name */}
            <p className="relative z-20 font-['Chinese_Rocks'] text-2xl font-bold mt-4">{domain.name}</p>

            {/* Subheading */}
            <p className="relative z-20 font-['Chinese_Rocks'] text-xl italic mt-2 mb-4">{domain.subheading}</p>

            {/* Mugshot */}
            <div
              className="relative z-20 mx-auto border-2 border-[#291200] w-56 h-72 bg-contain bg-no-repeat bg-center filter sepia-[70%] opacity-90"
              style={{ backgroundImage: `url(${domain.image})` }}
              role="img"
              aria-label={`${domain.name} image`}
            ></div>

            {/* Description */}
            <em className="relative z-20 block mt-4 mx-4 text-xl">
              <span className="font-semibold">For Crimes Of:</span>
              <br />
              {domain.description}
            </em>

            {/* Reward */}
            <h2 className="relative z-20 font-['Chinese_Rocks'] text-2xl mt-6">Reward</h2>
            <u className="relative z-20 font-['Chinese_Rocks'] text-3xl font-bold underline decoration-double decoration-[#291200]">
              {domain.reward}
            </u>
          </div>
        ))}
      </div>
    </section>
  );
}