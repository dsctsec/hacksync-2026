"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Timeline() {
  const [activeDay, setActiveDay] = useState(0);
  const [animationKey, setAnimationKey] = useState(0);

  const timelineData = [
    {
      day: "Day 1",
      date: "14th January, 2026",
      events: [
        {
          time: "05:00 – 05:30 PM",
          activity: "Welcome and further instructions",
        },
        {
          time: "6:00 PM",
          activity: "PS Release and PS form Submission",
        },
        {
          time: "6:45 PM",
          activity: "Final PS allocation and Hacking Begins!",
        },
      ],
    },
    {
      day: "Day 2",
      date: "15th January, 2026",
      events: [
        { time: "12:00 PM", activity: "Mentoring Sessions" },
        { time: "7:00 PM", activity: "Hacking Ends! Code Freeze" },
        {
          time: "7:00 PM – 7:30 PM",
          activity: "Project and PPT Submission",
        },
        { time: "7:30 PM", activity: "Judging Starts" },
        { time: "10:00 PM", activity: "Top 10 announcements" },
      ],
    },
    {
      day: "Day 3",
      date: "16th January, 2026",
      events: [
        { time: "11:30 AM", activity: "Final Offline Presentation of Top 10 Teams" },
        { time: "1:30 PM", activity: "Lunch for Top 10 Teams" },
        {
          time: "2:30 PM",
          activity: "Winner Announcement and Prize Distribution",
        },
      ],
    },
  ];

  // Handle day switch - trigger animation
  const handleDaySwitch = (index) => {
    if (index !== activeDay) {
      setActiveDay(index);
      setAnimationKey((prev) => prev + 1);
    }
  };

  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const fadeInDown = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };

  const lineGrow = {
    hidden: { scaleY: 0 },
    visible: { scaleY: 1 },
  };

  // Card animation variants for stagger effect
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const cardVariants = {
    hidden: (isEven) => ({
      opacity: 0,
      x: isEven ? -80 : 80,
      y: 20,
    }),
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
    exit: (isEven) => ({
      opacity: 0,
      x: isEven ? -40 : 40,
      transition: {
        duration: 0.3,
      },
    }),
  };
  const headingFadeIn = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const dotVariants = {
    hidden: {
      opacity: 0,
      scale: 0,
      rotate: -180,
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
        delay: 0.1,
      },
    },
    exit: {
      opacity: 0,
      scale: 0,
      transition: { duration: 0.2 },
    },
  };

  return (
    <section
      id="timeline"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden py-16 sm:py-20 lg:py-28 px-4 sm:px-6"
    >
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        {/* Base Gradient - Dark with Red/Yellow hints */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-red-950/40 to-black"></div>

        {/* Secondary Gradient Layer */}
        <div className="absolute inset-0 bg-gradient-to-tl from-yellow-900/10 via-transparent to-red-900/20"></div>

        {/* RDR2 Map Background */}

        {/* Radial Gradient Center Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(220,38,38,0.15)_0%,transparent_50%)]"></div>

        {/* Top Gradient Fade */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent"></div>

        {/* Bottom Gradient Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>

        {/* Animated Glow Orbs */}
        <motion.div
          className="absolute top-1/4 -left-32 w-80 h-80 sm:w-[500px] sm:h-[500px] rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(220,38,38,0.2) 0%, rgba(220,38,38,0.05) 50%, transparent 70%)",
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 50, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-32 w-80 h-80 sm:w-[500px] sm:h-[500px] rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(234,179,8,0.15) 0%, rgba(234,179,8,0.05) 50%, transparent 70%)",
          }}
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.2, 0.4],
            x: [0, -50, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Center Ambient Glow */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(255,177,0,0.08) 0%, transparent 60%)",
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Noise Texture Overlay */}
        <div
          className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.7)_70%,rgba(0,0,0,0.9)_100%)]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto">
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
              Timeline
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

        {/* Day Tabs */}
        <motion.div
          className="flex justify-center gap-3 sm:gap-6 mb-10 sm:mb-14 lg:mb-16"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {timelineData.map((day, index) => (
            <motion.button
              key={index}
              onClick={() => handleDaySwitch(index)}
              className={`
                relative px-5 sm:px-10 py-3 sm:py-4 
                font-['Chinese_Rocks'] text-lg sm:text-2xl tracking-wider
                border-2 rounded-lg transition-all duration-300
                overflow-hidden backdrop-blur-sm
                ${
                  activeDay === index
                    ? "bg-gradient-to-br from-red-600 to-red-700 border-red-400 text-white shadow-[0_0_40px_rgba(220,38,38,0.6)]"
                    : "bg-black/40 border-yellow-600/40 text-yellow-500/80 hover:border-yellow-500 hover:bg-red-950/40"
                }
              `}
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10 block">{day.day}</span>
              <span className="block text-xs sm:text-sm font-light tracking-normal opacity-70 relative z-10">
                {day.date}
              </span>

              {/* Active Glow Effect */}
              {activeDay === index && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-red-500/20 to-transparent"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* Timeline Content */}
        <motion.div
          className="relative"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.6 }}
        >
          {/* Center Line - Desktop */}
          <motion.div
            className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 origin-top"
            variants={lineGrow}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="w-full h-full bg-gradient-to-b from-red-500/80 via-yellow-500 to-red-500/80 rounded-full shadow-[0_0_20px_rgba(234,179,8,0.6)]"></div>
          </motion.div>

          {/* Left Line - Mobile/Tablet */}
          <motion.div
            className="lg:hidden absolute left-5 sm:left-6 top-0 bottom-0 w-0.5 origin-top"
            variants={lineGrow}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="w-full h-full bg-gradient-to-b from-red-500/60 via-yellow-500/80 to-red-500/60"></div>
          </motion.div>

          {/* Events with AnimatePresence */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeDay}-${animationKey}`}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="space-y-6 sm:space-y-8 lg:space-y-12"
            >
              {timelineData[activeDay].events.map((event, index) => {
                const isEven = index % 2 === 0;

                return (
                  <motion.div
                    key={`${activeDay}-${index}`}
                    custom={isEven}
                    variants={cardVariants}
                    className={`
                      relative flex
                      ${isEven ? "lg:justify-start" : "lg:justify-end"}
                    `}
                  >
                    {/* Dot - Mobile/Tablet */}
                    <motion.div
                      className="lg:hidden absolute left-5 sm:left-6 top-5 sm:top-6 w-3 h-3 sm:w-4 sm:h-4 -translate-x-1/2 z-20"
                      variants={dotVariants}
                    >
                      <div className="w-full h-full bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-full border-2 border-yellow-200 shadow-[0_0_20px_rgba(234,179,8,1)]"></div>
                    </motion.div>

                    {/* Dot - Desktop */}
                    <motion.div
                      className="hidden lg:block absolute top-7 left-1/2 -translate-x-1/2 w-5 h-5 z-20"
                      variants={dotVariants}
                    >
                      <div className="w-full h-full bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-full border-2 border-yellow-200 shadow-[0_0_25px_rgba(234,179,8,1)]"></div>
                    </motion.div>

                    {/* Card */}
                    <div
                      className={`
                      ml-10 sm:ml-14 lg:ml-0 lg:w-[44%] w-full
                      ${isEven ? "lg:pr-8" : "lg:pl-8"}
                    `}
                    >
                      <motion.div
                        className="group relative bg-gradient-to-br from-red-950/70 via-black/90 to-black border border-red-800/50 rounded-xl sm:rounded-2xl p-4 sm:p-5 lg:p-6 backdrop-blur-md overflow-hidden"
                        whileHover={{
                          scale: 1.02,
                          boxShadow: "0 0 50px rgba(220,38,38,0.4)",
                          borderColor: "rgba(234,179,8,0.7)",
                          y: -4,
                        }}
                        transition={{ duration: 0.25 }}
                      >
                        {/* Card Inner Glow */}
                        <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-transparent to-yellow-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                        {/* Shine Effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-500/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />

                        {/* Corner Accents */}
                        <div className="absolute top-0 left-0 w-3 h-3 sm:w-4 sm:h-4 border-t-2 border-l-2 border-yellow-500/70 rounded-tl-lg"></div>
                        <div className="absolute top-0 right-0 w-3 h-3 sm:w-4 sm:h-4 border-t-2 border-r-2 border-yellow-500/70 rounded-tr-lg"></div>
                        <div className="absolute bottom-0 left-0 w-3 h-3 sm:w-4 sm:h-4 border-b-2 border-l-2 border-yellow-500/70 rounded-bl-lg"></div>
                        <div className="absolute bottom-0 right-0 w-3 h-3 sm:w-4 sm:h-4 border-b-2 border-r-2 border-yellow-500/70 rounded-br-lg"></div>

                        {/* Time Badge */}
                        <div className="mb-2 sm:mb-3 relative z-10">
                          <span className="inline-block bg-gradient-to-r from-red-800 to-red-900 border border-red-500/60 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 text-yellow-400 font-mono text-[10px] sm:text-xs tracking-widest uppercase font-bold shadow-[0_0_15px_rgba(220,38,38,0.4)]">
                            {event.time}
                          </span>
                        </div>

                        {/* Activity Text */}
                        <p className="text-white font-medium text-base sm:text-lg lg:text-xl leading-relaxed relative z-10 tracking-wide">
                          {event.activity}
                        </p>

                        {/* Hover Line */}
                        <div className="mt-3 sm:mt-4 h-0.5 sm:h-1 w-0 bg-gradient-to-r from-yellow-400 via-red-500 to-transparent rounded-full group-hover:w-full transition-all duration-500 relative z-10"></div>
                      </motion.div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Bottom Quote */}
        <motion.div
          className="text-center mt-12 sm:mt-16 lg:mt-20"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-gray-400 text-xs sm:text-sm lg:text-base font-serif italic tracking-wide">
            "The <span className="text-yellow-400 font-semibold">frontier</span>{" "}
            awaits those bold enough to{" "}
            <span className="text-red-400 font-semibold">claim</span> it"
          </p>
        </motion.div>
      </div>
    </section>
  );
}
