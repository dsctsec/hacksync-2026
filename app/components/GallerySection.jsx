"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const imageFiles = [
  "/images/pic1.jpg",
  "/images/pic2.jpg",
  "/images/pic3.jpg",
  "/images/pic4.jpg",
  "/images/pic7.jpg",
  "/images/pic8.jpg",
];

export default function GallerySection() {
  const headingFadeIn = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="gallery"
      className="min-h-screen flex flex-col items-center justify-center py-16 px-6 relative overflow-hidden"
    >
      {/* Background: Black Brick Wall Crime Scene */}
      <div className="absolute inset-0 bg-black">
        {/* Black Brick Wall Texture */}
        <div
          className="absolute inset-0 opacity-40 bg-[url('https://www.transparenttextures.com/patterns/brick-wall.png')]"
          style={{ filter: "brightness(0.3) contrast(1.2)" }}
        />

        {/* Dark Grunge Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/80" />

        {/* Spotlight Effect from Top */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.05)_0%,transparent_70%)]" />

        {/* Graffiti/Stain Texture */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/black-linen.png')]" />

        {/* Police Tape Crossing */}
        <div
          className="absolute top-[15%] left-0 right-0 h-12 bg-yellow-400 opacity-20 transform -rotate-3 z-0"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(0,0,0,0.3) 35px, rgba(0,0,0,0.3) 70px)",
          }}
        />
        <div
          className="absolute bottom-[25%] left-0 right-0 h-12 bg-yellow-400 opacity-20 transform rotate-2 z-0"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(0,0,0,0.3) 35px, rgba(0,0,0,0.3) 70px)",
          }}
        />
      </div>

      {/* Title */}
      <motion.div
        className="relative z-20 mb-10 text-center"
        variants={headingFadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        <div className="relative inline-block p-8">
          <motion.h1
            className="text-[#ffb100] text-6xl md:text-7xl font-['Chinese_Rocks'] drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)] tracking-wider"
            variants={headingFadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            Gallery
          </motion.h1>
          <motion.div
            className="h-1 w-3/4 mx-auto bg-[#ffb100] mt-2 rounded-full shadow-[0_0_10px_#ffb100]"
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          />
        </div>
      </motion.div>

      {/* Gallery Grid */}
      <motion.div
        className="
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          md:grid-cols-3 
          gap-8
          w-full
          max-w-[1200px]
          relative z-10
        "
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {imageFiles.map((filename, index) => (
          <motion.div
            key={filename}
            variants={itemVariants}
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            className="
              relative 
              w-full 
              overflow-hidden 
              rounded-xl 
              border-4 
              border-[#020002]
              shadow-[0_5px_15px_rgba(0,0,0,0.3)]
              cursor-pointer
              transition-transform 
              hover:shadow-[0_8px_20px_rgba(0,0,0,0.4)]
            "
          >
            {/* Main Image (sepia + contrast + vignette) */}
            <Image
              src={filename}
              alt={`Hacksync gallery image ${index + 1}`}
              width={800}
              height={500}
              className="
                w-full 
                h-auto 
                object-cover 
                sepia-[30%] 
                contrast-125 
                brightness-95
              "
            />

            {/* Rough grunge frame overlay */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                maskImage: "url('/grunge-frame.png')",
                WebkitMaskImage: "url('/grunge-frame.png')",
                maskSize: "cover",
                WebkitMaskSize: "contain",
                backgroundColor: "black",
              }}
            ></div>

            {/* Caption */}
            <p
              className="
              text-white 
              text-center 
              font-western 
              mt-3 
              text-lg 
              tracking-wider
            "
            >
              Weaponry {index + 1}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
