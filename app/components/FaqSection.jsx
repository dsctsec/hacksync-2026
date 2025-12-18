// "use client";
// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Image from "next/image";

// // --- Animated Icon Component ---
// const AccordionIcon = ({ isOpen }) => (
//   <motion.div
//     animate={{ rotate: isOpen ? 90 : 0 }}
//     transition={{ duration: 0.3, ease: "easeInOut" }}
//     className="text-2xl text-[#ffb100] font-sans"
//   >
//     {"›"}
//   </motion.div>
// );

// export default function FaqSection() {
//   const faqs = [
//     {
//       question: "⭐ When and where will 'HackSync 2026' take place?",
//       answer:
//         "Hackathon begins on 15th January 2026 at 11:00 AM and ends on 16th January 2026 at 11:00 AM. The Final Round will be conducted offline on 17th January 2026 at Thadomal Shahani Engineering College, Bandra, Mumbai.",
//     },

//     {
//       question:
//         "⭐ How can I register for 'HackSync 2026'? Is there a registration fee?",
//       answer:
//         "You can register through Devfolio. There is no registration fee — HackSync 2026 is completely free.",
//     },
//     {
//       question: "⭐ Can we form inter-college teams?",
//       answer: "Yes! Inter-college teams are allowed and encouraged.",
//     },
//     {
//       question: "⭐ Will there be prizes?",
//       answer:
//         "Yes! Top teams will win exciting prizes, goodies, and internship opportunities from our sponsors.",
//     },
//     {
//       question: "⭐ Is selection based on resume?",
//       answer:
//         "Yes. HackSync shortlists participants based on their resumes and project experience. Shortlisting is merit-based and performed by our review team. Only shortlisted teams will receive confirmation.",
//     },
//   ];

//   const [hoverIndex, setHoverIndex] = useState(null);
//   const [openIndex, setOpenIndex] = useState(null);

//   return (
//     <section
//       id="faq"
//       className="min-h-screen py-20 px-6 flex flex-col items-center text-center relative overflow-hidden"
//     >
//       {/* <div
//         className="relative inline-block mb-12 w-full max-w-[90vw] sm:max-w-[600px]"
//         style={{
//           backgroundImage: "url('/images/whiteBorder.png')",
//           backgroundRepeat: "no-repeat",
//           backgroundPosition: "center",
//           backgroundSize: "100% 100%",
//           padding: "1rem 1.5rem",
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//         }}
//       >
//         <h1 className="text-[#ffb100] text-2xl sm:text-4xl md:text-5xl font-['Chinese_Rocks'] text-center leading-tight drop-shadow-[0_2px_4px_rgba(255,180,0,0.4)]">
//           FREQUENTLY ASKED QUESTIONS
//         </h1>
//       </div> */}
//       {/* --- Background: Dark Wood Texture with Vignette (Crime/Western Theme) --- */}
//       <div className="absolute inset-0 bg-[#1a0f0a]">
//         <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')]" />
//         <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-90" />
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)]" />
//       </div>

//       <div className="relative z-20 mb-10 text-center">
//         <div className="relative inline-block p-8">
//           <h1 className="text-[#ffb100] text-6xl md:text-7xl font-['Chinese_Rocks'] drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)] tracking-wider leading-tight">
//             FAQ
//           </h1>
//           <div className="h-1 w-3/4 mx-auto bg-[#ffb100] mt-2 rounded-full shadow-[0_0_10px_#ffb100]" />
//         </div>
//       </div>

//       {/* --- FAQ Accordions --- */}
//       <div className="w-full max-w-3xl space-y-8 relative z-10">
//         {faqs.map((faq, i) => (
//           <motion.div
//             key={i}
//             className={`
//               relative bg-[url('/images/GrayBG.png')] bg-cover bg-center
//               overflow-hidden shadow-[0_4px_15px_rgba(0,0,0,0.6)]
//               faq-item
//               ${hoverIndex === i || openIndex === i ? "faq-item-active" : ""}
//             `}
//             onMouseEnter={() => setHoverIndex(i)}
//             onMouseLeave={() => setHoverIndex(null)}
//           >
//             {/* Question Button */}
//             <button
//               className="relative z-20 w-full text-left p-6 focus:outline-none flex justify-between items-center"
//               onClick={() => setOpenIndex(openIndex === i ? null : i)}
//             >
//               <h3 className="text-xl text-[#ffb100] font-['Chinese_Rocks'] tracking-wide">
//                 {faq.question}
//               </h3>
//               <AccordionIcon isOpen={openIndex === i} />
//             </button>

//             {/* Expandable Answer */}
//             <AnimatePresence>
//               {openIndex === i && (
//                 <motion.div
//                   initial={{ opacity: 0, maxHeight: 0 }}
//                   animate={{ opacity: 1, maxHeight: "500px" }}
//                   exit={{ opacity: 0, maxHeight: 0 }}
//                   transition={{ duration: 0.4, ease: "easeInOut" }}
//                   className="relative z-20 overflow-hidden px-6 pb-6 text-gray-200 text-base font-serif leading-relaxed text-left"
//                 >
//                   {faq.answer}
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }
"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// --- Animated Icon Component ---
const AccordionIcon = ({ isOpen }) => (
  <motion.div
    animate={{ rotate: isOpen ? 90 : 0 }}
    transition={{ duration: 0.3, ease: "easeInOut" }}
    className="text-2xl text-[#ffb100] font-sans"
  >
    {"›"}
  </motion.div>
);

export default function FaqSection() {
  const faqs = [
    {
      question: "⭐ When and where will 'HackSync 2026' take place?",
      answer:
        "Hackathon begins on 15th January 2026 at 11:00 AM and ends on 16th January 2026 at 11:00 AM. The Final Round will be conducted on 17th January 2026 at Thadomal Shahani Engineering College, Bandra, Mumbai.",
    },
    // {
    //   question:
    //     "⭐ How can I register for 'HackSync 2026'? Is there a registration fee?",
    //   answer:
    //     "You can register through Devfolio. There is no registration fee — HackSync 2026 is completely free.",
    // },
    {
      question: "⭐ Can we form inter-college teams?",
      answer: "Yes! Inter-college teams are allowed and encouraged.",
    },
    {
      question: "⭐ Will there be prizes?",
      answer:
        "Yes! Top teams will win exciting prizes and goodies.",
    },
    {
      question: "⭐ Is selection based on resume?",
      answer:
        "Yes. HackSync shortlists participants based on their resumes and project experience. Shortlisting is merit-based and performed by our review team. Only shortlisted teams will receive confirmation.",
    },
  ];

  const [hoverIndex, setHoverIndex] = useState(null);
  const [openIndex, setOpenIndex] = useState(null);

  // Animation Variants
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
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: (i) => ({
      opacity: 0,
      x: i % 2 === 0 ? -60 : 60,
      y: 20,
    }),
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.6,
      },
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section
      id="faq"
      className="min-h-screen py-20 px-6 flex flex-col items-center text-center relative overflow-hidden"
    >
      
      <div className="absolute inset-0 bg-[#1a0f0a]">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-90" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)]" />
      </div>

     
      <motion.div
        className="relative z-20 mb-10 text-center"
        variants={headingFadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        <div className="relative inline-block p-8">
          <motion.h1
            className="text-[#ffb100] text-6xl md:text-7xl font-['Chinese_Rocks'] drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)] tracking-wider leading-tight"
            variants={headingFadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            FAQ
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

      {/* --- FAQ Accordions --- */}
      <motion.div
        className="w-full max-w-3xl space-y-6 relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }}
      >
        {faqs.map((faq, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            className={`
              relative bg-[url('/images/GrayBG.png')] bg-cover bg-center 
              overflow-hidden shadow-[0_4px_15px_rgba(0,0,0,0.6)]
              rounded-lg border border-yellow-900/30
              faq-item 
              ${hoverIndex === i || openIndex === i ? "faq-item-active" : ""}
            `}
            onMouseEnter={() => setHoverIndex(i)}
            onMouseLeave={() => setHoverIndex(null)}
            whileHover={{
              scale: 1.02,
              boxShadow: "0 8px 30px rgba(255, 177, 0, 0.2)",
              borderColor: "rgba(255, 177, 0, 0.4)",
            }}
            transition={{ duration: 0.25 }}
          >
            {/* Question Button */}
            <button
              className="relative z-20 w-full text-left p-6 focus:outline-none flex justify-between items-center"
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            >
              <motion.h3
                className="text-xl text-[#ffb100] font-['Chinese_Rocks'] tracking-wide"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.5 }}
                transition={{ delay: i * 0.1 }}
              >
                {faq.question}
              </motion.h3>
              <AccordionIcon isOpen={openIndex === i} />
            </button>

            {/* Expandable Answer */}
            <AnimatePresence>
              {openIndex === i && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="relative z-20 overflow-hidden"
                >
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    className="px-6 pb-6 text-gray-200 text-base font-serif leading-relaxed text-left"
                  >
                    {faq.answer}
                  </motion.p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Hover Glow Effect */}
            <motion.div
              className="absolute inset-0 rounded-lg pointer-events-none"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,177,0,0.05) 0%, transparent 50%, rgba(255,177,0,0.05) 100%)",
              }}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
