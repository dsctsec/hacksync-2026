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
        "Hackathon begins on 15th January 2026 at 11:00 AM and ends on 16th January 2026 at 11:00 AM. The Final Round will be conducted offline on 17th January 2026 at Thadomal Shahani Engineering College, Bandra, Mumbai.",
    },
    {
      question: "⭐ What is the last date for registration?",
      answer:
        "The registration deadline will be announced on Devfolio and our social media pages. We recommend applying early as shortlisting happens on a rolling basis.",
    },
    {
      question: "⭐ Can I participate individually?",
      answer:
        "No, HackSync requires teams of 2–4 members. If you don't have a team, you can find teammates through our WhatsApp Community.",
    },
    {
      question:
        "⭐ How can I register for 'HackSync 2026'? Is there a registration fee?",
      answer:
        "You can register through Devfolio. There is no registration fee — HackSync 2026 is completely free.",
    },
    {
      question: "⭐ Can we form inter-college teams?",
      answer: "Yes! Inter-college teams are allowed and encouraged.",
    },
    {
      question: "⭐ Will there be prizes?",
      answer:
        "Yes! Top teams will win exciting prizes, goodies, and internship opportunities from our sponsors.",
    },
    {
      question: "⭐ Is selection based on resume?",
      answer:
        "Yes. HackSync shortlists participants based on their resumes and project experience. Shortlisting is merit-based and performed by our review team. Only shortlisted teams will receive confirmation.",
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
      {/* <div
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
      </div> */}

      <div className="relative z-20 mb-10 text-center">
        <div className="relative inline-block p-8">
          <h1 className="text-[#ffb100] text-6xl md:text-7xl font-['Chinese_Rocks'] drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)] tracking-wider leading-tight">
            FAQ
          </h1>
          <div className="h-1 w-3/4 mx-auto bg-[#ffb100] mt-2 rounded-full shadow-[0_0_10px_#ffb100]" />
        </div>
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
