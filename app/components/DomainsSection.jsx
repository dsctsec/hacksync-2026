"use client";

import React from "react";
import { motion } from "framer-motion";

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
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const posterVariants = {
    hidden: { opacity: 0, y: 100, rotate: -10, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      rotate: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 80, damping: 15, duration: 0.8 },
    },
    hover: {
      scale: 1.08,
      rotate: 2,
      y: -10,
      transition: { type: "spring", stiffness: 300, damping: 20 },
    },
  };

  const flickerKeyframes = {
    "0%, 100%": { opacity: 1 },
    "50%": { opacity: 0.7 },
    "20%, 40%, 60%, 80%": { opacity: 0.9 },
  };

  return (
    <section id="domains" className="py-12 md:py-20 text-center relative overflow-hidden">
      
      {/* Heading */}
      <div className="relative z-20 mb-8 md:mb-10 text-center">
        <div className="relative inline-block p-4 md:p-8">
          <h1 className="text-[#ffb100] text-4xl sm:text-5xl md:text-7xl font-['Chinese_Rocks'] drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)] tracking-wider">
            Domains
          </h1>
          <div className="h-1 w-3/4 mx-auto bg-[#ffb100] mt-2 rounded-full shadow-[0_0_10px_#ffb100]" />
        </div>
      </div>

      {/* Posters Grid */}
      <motion.div
        className="
          flex flex-wrap justify-center 
          gap-10         /* ⬅ MOBILE: Increased gap to avoid overlap */
          md:gap-12 
          px-4 max-w-7xl mx-auto
        "
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {domains.map((domain, i) => (
          <motion.div
            key={i}
            className="
              relative w-full 
              max-w-[280px] sm:max-w-sm 
              h-72 sm:h-96
              bg-[url('/domains/wantedposter.jpeg')] bg-center bg-cover bg-no-repeat
              flex flex-col items-center justify-start
              font-['Chinese_Rocks'] text-[#3a1a00]
              overflow-hidden shadow-[0_0_20px_rgba(0,0,0,0.6)]
              rounded-md cursor-pointer
            "
            style={{ backgroundColor: "transparent" }}
            variants={posterVariants}
            whileHover="hover"
            whileTap={{ scale: 0.98 }}
          >
            {/* Domain Name */}
            <motion.div
              className="
                mt-18
                sm:mt-24
              "
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 + i * 0.2 }}
              viewport={{ once: true }}
            >
              <p
                className="text-3xl sm:text-5xl font-bold text-[#2b1500] tracking-wider"
                style={{
                  animation: "flicker 2s infinite",
                  textShadow: "2px 2px 8px rgba(255,145,0,0.6)",
                }}
              >
                {domain.name}
              </p>
            </motion.div>

            {/* Mugshot */}
            <motion.div
              className="relative w-16 h-16 sm:w-20 sm:h-20 my-2 sm:my-4"
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{
                delay: 0.7 + i * 0.2,
                type: "spring",
                stiffness: 200,
                damping: 10,
              }}
              viewport={{ once: true }}
            >
              <img
                src={domain.image}
                alt={`${domain.name} domain`}
                className="w-full h-full object-contain filter sepia-[20%] drop-shadow-[0_0_8px_rgba(0,0,0,0.5)]"
              />
            </motion.div>

            {/* Description */}
            <motion.div
              className="px-3 sm:px-6 text-center leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 + i * 0.2 }}
              viewport={{ once: true }}
            >
              <span className="block font-bold text-lg sm:text-2xl text-amber-950 drop-shadow-[1px_1px_6px_#ff9100]">
                For Crimes Of:
              </span>
              <span className="block text-base sm:text-xl font-medium text-amber-950 drop-shadow-[1px_1px_6px_#ff9100] mt-1">
                {domain.description}
              </span>
            </motion.div>

            {/* Glow */}
            <motion.div
              className="absolute inset-0 rounded-md pointer-events-none"
              initial={{ boxShadow: "0 0 0px rgba(255,145,0,0)" }}
              whileHover={{
                boxShadow:
                  "0 0 40px rgba(255,145,0,0.6), inset 0 0 30px rgba(0,0,0,0.3)",
              }}
              transition={{ duration: 0.4 }}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Flicker Animation */}
      <style>{`
        @keyframes flicker {
          ${Object.entries(flickerKeyframes)
            .map(
              ([key, value]) =>
                `${key} { ${Object.entries(value)
                  .map(([k, v]) => `${k}: ${v};`)
                  .join(" ")} }`
            )
            .join("\n")}
        }
      `}</style>
    </section>
  );
}
