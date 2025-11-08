"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

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
        "Hackathon begins on 22nd February 2026 at 11:00 AM to 24th February 2026 11:00 AM and the Final Round will be offline on 25th February 2026 at Thadomal Shahani Engineering College, Bandra, Mumbai.",
    },
    {
      question: "⭐ What is the last date for registration?",
      answer:
        "Teams of 2-4 members. Don't have a team? No problem, we got you! Find teammates on our WhatsApp Group.",
    },
    {
      question: "⭐ Can I participate individually?",
      answer:
        "HackSync 2.0 will be hosted on-campus at Thadomal Shahani Engineering College, with an immersive offline experience.",
    },
    {
      question: "⭐ How can I register for 'HackSync 2025' and is there a registration fee?",
      answer:
        "You can register for HackSync 2025 through Devfolio. No participation fees are required; the hackathon is completely free.",
    },
    {
      question: "⭐ Can we form intercollege team?",
      answer: "Yes, intercollege teams are allowed.",
    },
    {
      question: "⭐ Will there be prizes?",
      answer:
        "Yes! Top teams will receive exciting prizes and opportunities from our sponsors.",
    },
  ];

  const [hoverIndex, setHoverIndex] = useState(null);
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section
      id="faq"
      className="min-h-screen bg-black py-20 px-6 flex flex-col items-center text-center"
    >
      {/* --- Styled Heading with White Border PNG --- */}
      <div
        className="relative inline-block mb-12 w-full max-w-[90vw] sm:max-w-[600px]"
        style={{
          backgroundImage: "url('/images/whiteBorder.png')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "100% 100%",
          padding: "1rem 1.5rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1 className="text-[#ffb100] text-2xl sm:text-4xl md:text-5xl font-['Chinese_Rocks'] text-center leading-tight drop-shadow-[0_2px_4px_rgba(255,180,0,0.4)]">
          FREQUENTLY ASKED QUESTIONS
        </h1>
      </div>

      {/* --- FAQ Accordions --- */}
      <div className="w-full max-w-3xl space-y-8">
        {faqs.map((faq, i) => (
          <motion.div
            key={i}
            className={`
              relative bg-[url('/images/GrayBG.png')] bg-cover bg-center 
              overflow-hidden shadow-[0_4px_15px_rgba(0,0,0,0.6)]
              faq-item 
              ${hoverIndex === i || openIndex === i ? "faq-item-active" : ""}
            `}
            onMouseEnter={() => setHoverIndex(i)}
            onMouseLeave={() => setHoverIndex(null)}
          >
        
            {/* Question Button */}
            <button
              className="relative z-20 w-full text-left p-6 focus:outline-none flex justify-between items-center"
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            >
              <h3 className="text-xl text-[#ffb100] font-['Chinese_Rocks'] tracking-wide">
                {faq.question}
              </h3>
              <AccordionIcon isOpen={openIndex === i} />
            </button>

            {/* Expandable Answer */}
            <AnimatePresence>
              {openIndex === i && (
                <motion.div
                  initial={{ opacity: 0, maxHeight: 0 }}
                  animate={{ opacity: 1, maxHeight: "500px" }}
                  exit={{ opacity: 0, maxHeight: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="relative z-20 overflow-hidden px-6 pb-6 text-gray-200 text-base font-serif leading-relaxed text-left"
                >
                  {faq.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
