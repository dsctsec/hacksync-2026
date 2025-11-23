"use client";

import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  useInView,
} from "framer-motion";
import { useEffect, useRef } from "react";

// Embed fonts to ensure the exact look is preserved without external CSS
const FontStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Rye&family=Merriweather:wght@300;400;700&display=swap');
  `}</style>
);

function Counter({ value, prefix = "", suffix = "", separator = "" }) {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      animate(motionValue, value, { duration: 2.5, ease: "easeOut" });
    }
  }, [isInView, motionValue, value]);

  const rounded = useTransform(motionValue, (latest) => {
    const num = Math.round(latest);
    return `${prefix}${separator ? num.toLocaleString() : num}${suffix}`;
  });

  return (
    <motion.span
      ref={ref}
      className="font-['Rye'] text-[clamp(1.8rem,4.5vw,3rem)] text-[#b90303] font-bold leading-[1.2] mb-[0.8rem] z-20 break-words text-center inline-block whitespace-normal"
    >
      {rounded}
    </motion.span>
  );
}

export default function StatsSection() {
  const stats = [
    { id: 1, label: "Projects Made", value: 45, suffix: "+" },
    { id: 2, label: "Registration", value: 500, suffix: "+" },
    // { id: 3, label: 'Prize Pool', value: 60000, prefix: '₹', separator: ',' },
    { id: 4, label: "Cities", value: 5, suffix: "+" },
  ];

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
    hidden: { opacity: 0, y: 30 },
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
    <>
      <FontStyles />
      <section
        id="stats-section"
        className="flex flex-col items-center justify-center min-h-[30vh] bg-[#740108] text-[#fffeff]"
      >
        <div className="relative z-20 mb-10 text-center">
          <div className="relative inline-block p-8">
            <motion.h1
              className="
        text-[#ffb100]
        text-6xl md:text-7xl
        font-['Chinese_Rocks']
        drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]
        tracking-wider
        leading-tight
      "
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              Hacksync Ledger
            </motion.h1>

            <div className="h-1 w-3/4 mx-auto bg-[#ffb100] mt-2 rounded-full shadow-[0_0_10px_#ffb100]" />
          </div>
        </div>

        <motion.div
          className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-8 w-full max-w-[1100px]"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.id}
              className="relative overflow-hidden flex flex-col justify-center items-center py-12 px-8 text-center transition-transform duration-300 ease-in-out z-10"
              variants={itemVariants}
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            >
              {/* Frame Background (Replaces CSS ::before) */}
              <div className="absolute inset-0 bg-[url('/grungepage.png')] bg-[length:100%_100%] bg-no-repeat bg-center -z-10 bg-[#740108]" />

              <Counter
                value={stat.value}
                prefix={stat.prefix}
                suffix={stat.suffix}
                separator={stat.separator}
              />
              <span className="font-['Merriweather'] text-[clamp(0.9rem,2vw,1.2rem)] text-[#020002] uppercase tracking-[1px] z-20">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </>
  );
}
