"use client";
import React from "react";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="relative min-h-[120vh] flex flex-col items-center justify-center overflow-hidden py-12">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full h-full object-cover "
      >
        <source src="/about-bg-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-75 -z-10"></div>

      {/* Content Box */}
      <div
        className="
          relative max-w-4xl mx-4 p-8 md:p-12 text-center
          border-4 border-red-800 rounded-xl
          bg-gradient-to-b from-black/80 to-black/50
          backdrop-blur-lg
          animate-pulse-glow z-10
          shadow-2xl
        "
        style={{
          boxShadow: `
            0 0 20px rgba(220,38,38,.7),
            0 0 40px rgba(220,38,38,.5),
            0 0 60px rgba(220,38,38,.3),
            inset 0 0 30px rgba(0,0,0,.7)
          `,
        }}
      >
        {/* Main Title */}
        <h1 className="font-['Rye'] text-4xl md:text-6xl font-normal text-red-500 tracking-widest mb-4 drop-shadow-2xl uppercase">
          HACKSYNC 2026
        </h1>

        {/* Subtitle - RDR Style */}
        <p className="font-['Hepta_Slab'] text-xl md:text-3xl text-amber-100 mb-8 drop-shadow-xl italic">
          GDG-TSEC, 2025. <br />
          <span className="text-yellow-400 font-bold not-italic">Outlaws of Code Hunt the Frontier.</span>
        </p>

        {/* Event Details */}
        <div className="font-['Hepta_Slab'] text-amber-50 mb-3 space-y-4 text-sm md:text-base">
          <p className="text-red-300 font-semibold">
            <span className="text-yellow-400">24 Hours • Offline • Thadomal Shahani Engineering College</span>
          </p>
          <p className="text-amber-200">
            15th - 16th January 2026
          </p>
          <p className="text-red-400 italic">
            50 Teams Shortlisted • GitHub + Resume • No Travel Reimbursement
          </p>
        </div>

        {/* Domains - Wanted Badges */}
        <div className="mb-5">
          
          <p className="mt-4 text-lg text-red-300">
            Problem Statements Coming Soon
          </p>
        </div>

        {/* Prize Bounty */}
        <div className="space-y-4 font-['Hepta_Slab'] text-amber-50">
          <div className="inline-block bg-gradient-to-r from-amber-900/60 to-red-900/60 border-4 border-yellow-600 rounded-lg p-6 shadow-2xl mx-5 max-w-sm ">
            <p className="text-2xl md:text-3xl font-bold text-yellow-400 drop-shadow-2xl tracking-wide">
              ₹15,000 BOUNTY
            </p>
            <p className="text-base italic text-amber-100 font-semibold">
              Winner - Each Domain
            </p>
          </div>
          <div className="inline-block bg-gradient-to-r from-amber-900/60 to-red-900/60 border-4 border-orange-600 rounded-lg p-6 shadow-2xl mx-5 max-w-sm ">
            <p className="text-2xl md:text-3xl font-bold text-yellow-400 drop-shadow-2xl tracking-wide">
              ₹5,000 BOUNTY
            </p>
            <p className="text-base italic text-amber-100 font-semibold">
              Runner Up - Each Domain
            </p>
          </div>
          <p className="text-center text-lg text-yellow-300 font-bold drop-shadow-lg">
            TOTAL: ₹60,000
          </p>
        </div>

        {/* Treasure Box */}
        <div className="my-2 flex justify-center">
          <div className="relative group cursor-pointer">
            <Image
              src="/treasurebox.png"
              alt="Treasure Chest - ₹60,000 Prize Pool"
              width={180}
              height={180}
              className="
                drop-shadow-2xl
                transition-all duration-700
                group-hover:scale-110 group-hover:rotate-6
                group-hover:drop-shadow-[0_0_50px_rgba(255,215,0,1)]
                animate-bounce-slow
              "
              priority
            />
            <div className="absolute inset-0 bg-gradient-radial from-yellow-400/50 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none"></div>
          </div>
        </div>

        {/* Final Call - RDR Quote Inspired */}
        <p className="font-['Hepta_Slab'] text-lg md:text-xl text-red-200 italic mb-8 drop-shadow-xl leading-relaxed">
          "We can't always fight nature, John. <br />
          <span className="text-yellow-400 font-bold not-italic text-lg md:text-2xl block">
            Build your legacy. Claim the frontier.
          </span>
        </p>

        {/* CTA */}
        <button className="px-10 py-4 bg-gradient-to-r from-red-800 to-red-900 hover:from-red-700 hover:to-red-800 text-amber-100 font-['Hepta_Slab'] font-bold text-xl rounded-lg transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-red-500/60 border-2 border-yellow-500 hover:border-yellow-400">
          FORM YOUR GANG
        </button>

        {/* Details Note */}
        <p className="mt-8 text-xs text-amber-400 font-['Hepta_Slab']">
          Details Forthcoming • Ride In or Ride Out
        </p>
      </div>
    </section>
  );
}