
"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

const sponsors = [
  { name: "DEVFOLIO LOGO", logo: "/sponsors/DEVFOLIOLOGO.png", tier: "Platinum" },
  { name: "ETHINDIA", logo: "/sponsors/ETHINDIA.png", tier: "Platinum" },
  { name: "Fragomen", logo: "/sponsors/gold1.png", tier: "Gold" },
  { name: "TheDevArmy", logo: "/sponsors/sponsor1.png", tier: "Other" },
  { name: "Wolfram", logo: "/sponsors/sponsor2.png", tier: "Other" },
  { name: "Fyre Gig", logo: "/sponsors/sponsor3.png", tier: "Other" },
  { name: "TC Global", logo: "/sponsors/sponsor4.png", tier: "Other" },
];

function polarToCartesian(cx, cy, r, angleDeg) {
  const a = ((angleDeg - 90) * Math.PI) / 180.0;
  return { x: cx + r * Math.cos(a), y: cy + r * Math.sin(a) };
}

function describeSlice(cx, cy, rOuter, rInner, startAngle, endAngle) {
  const startOuter = polarToCartesian(cx, cy, rOuter, endAngle);
  const endOuter = polarToCartesian(cx, cy, rOuter, startAngle);
  const startInner = polarToCartesian(cx, cy, rInner, startAngle);
  const endInner = polarToCartesian(cx, cy, rInner, endAngle);
  const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

  return [
    `M ${startOuter.x} ${startOuter.y}`,
    `A ${rOuter} ${rOuter} 0 ${largeArcFlag} 0 ${endOuter.x} ${endOuter.y}`,
    `L ${startInner.x} ${startInner.y}`,
    `A ${rInner} ${rInner} 0 ${largeArcFlag} 1 ${endInner.x} ${endInner.y}`,
    "Z",
  ].join(" ");
}

export default function SponsorsWheel({ size = 800 }) {
  const headingFadeIn = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };
  const [hoverIndex, setHoverIndex] = useState(null);
  const [rotation, setRotation] = useState(0);

  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });

  const requestRef = useRef();
  const previousTimeRef = useRef();

  const speedRef = useRef(25);
  const isIntroRef = useRef(true);

  const animate = (time) => {
    if (previousTimeRef.current !== undefined) {
      if (isInView) {
        if (isIntroRef.current) {
          speedRef.current *= 0.95;

          if (speedRef.current <= 0.15) {
            speedRef.current = 0.15;
            isIntroRef.current = false;
          }
        }

        if (isIntroRef.current || hoverIndex === null) {
          setRotation((prev) => (prev + speedRef.current) % 360);
        }
      }
    }
    previousTimeRef.current = time;
    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, [hoverIndex, isInView]);

  const cx = size / 2;
  const cy = size / 2;
  const rOuter = size * 0.42;
  const rInner = size * 0.18;
  const sliceCount = sponsors.length;
  const gap = 3;
  const sliceAngle = 360 / sliceCount - gap;

  const activeSponsor = hoverIndex !== null ? sponsors[hoverIndex] : null;

  const getTierStyles = (tier, isHover) => {
    let strokeColor = "#333";
    let strokeWidth = 1;
    let logoFilter = "none";
    let logoScale = 1;
    let tintColor = "transparent";
    let tintOpacity = 0;

    const platinumColor = "#FFD700";
    const goldColor = "#C0C0C0";

    if (tier === "Platinum") {
      strokeColor = platinumColor;
      strokeWidth = isHover ? 8 : 3;
      logoFilter = isHover
        ? "brightness(1.2) drop-shadow(0 0 12px rgba(255,215,0,0.6))"
        : "none";
      logoScale = isHover ? 1.3 : 1.05;
      tintColor = platinumColor;
      tintOpacity = 0.08;
    } else if (tier === "Gold") {
      strokeColor = goldColor;
      strokeWidth = isHover ? 7 : 2.5;
      logoFilter = isHover
        ? "brightness(1.2) drop-shadow(0 0 10px rgba(192,192,192,0.5))"
        : "none";
      logoScale = isHover ? 1.25 : 1.02;
      tintColor = goldColor;
      tintOpacity = 0.07;
    } else {
      strokeColor = "#555";
      strokeWidth = isHover ? 6 : 1;
      logoFilter = isHover
        ? "brightness(1.2) drop-shadow(0 0 8px rgba(255,255,255,0.3))"
        : "none";
      logoScale = isHover ? 1.2 : 1;
    }

    const finalStrokeColor = isHover ? "#ff2a2a" : strokeColor;
    const finalTintOpacity = isHover ? 0.15 : tintOpacity;

    return {
      finalStrokeColor,
      strokeWidth,
      logoFilter,
      logoScale,
      tintColor,
      finalTintOpacity,
    };
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full min-h-[140vh] flex flex-col items-center justify-center bg-neutral-900 overflow-hidden pt-20 pb-20"
      id="sponsors"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-center bg-cover opacity-80"
        style={{ backgroundImage: "url('/sponsors/CampFire.jpg')" }}
      />

      {/* Ember Glow */}
      <div
        className="absolute inset-0 animate-flicker"
        style={{
          background:
            "radial-gradient(circle at 50% 120%, rgba(255,140,0,0.25) 0%, rgba(0,0,0,0) 60%)",
          opacity: 0.8,
        }}
      />

      {/* --- TITLE SECTION --- */}
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
            Previous partners
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

      {/* SVG Wheel */}
      <svg
        viewBox={`0 0 ${size} ${size}`}
        className="relative z-10 w-[min(90vw,800px)] h-auto drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]"
        style={{ overflow: "visible" }}
      >
        <defs>
          <radialGradient id="sliceGradient" cx="50%" cy="50%" r="50%">
            <stop offset="30%" stopColor="#3a3a3a" />
            <stop offset="100%" stopColor="#1a1a1a" />
          </radialGradient>
          <clipPath id="centerHubClip">
            <circle cx={cx} cy={cy} r={rInner} />
          </clipPath>
        </defs>

        {/* --- ROTATING GROUP (CLOCKWISE) --- */}
        <g transform={`rotate(${rotation}, ${cx}, ${cy})`}>
          {sponsors.map((s, i) => {
            const startAngle = i * (sliceAngle + gap) + gap / 2;
            const endAngle = startAngle + sliceAngle;
            const pathD = describeSlice(
              cx,
              cy,
              rOuter,
              rInner,
              startAngle,
              endAngle
            );

            const midAngle = startAngle + sliceAngle / 2;
            const logoRadius = (rInner + rOuter) / 2;
            const logoPos = polarToCartesian(cx, cy, logoRadius, midAngle);
            const isHover = hoverIndex === i;

            const {
              finalStrokeColor,
              strokeWidth,
              logoFilter,
              logoScale,
              tintColor,
              finalTintOpacity,
            } = getTierStyles(s.tier, isHover);

            return (
              <g
                key={i}
                onMouseEnter={() => setHoverIndex(i)}
                onMouseLeave={() => setHoverIndex(null)}
              >
                {/* Base Slice */}
                <path
                  d={pathD}
                  fill="url(#sliceGradient)"
                  style={{ cursor: "pointer" }}
                />
                

                <image
                  href="/sponsors/GrungeOverlay.png"
                  x="0"
                  y="0"
                  width={size}
                  height={size}
                  clipPath={`path('${pathD}')`}
                  role="img"
                  aria-label="Grunge overlay"
                  alt="Grunge overlay"
                  style={{
                    pointerEvents: "none",
                    mixBlendMode: "overlay",
                    opacity: 0.3,
                  }}
                />

                {/* Hover/Tier-Specific Stroke */}
                {(() => {
                  const startOuter = polarToCartesian(cx, cy, rOuter, endAngle);
                  const endOuter = polarToCartesian(cx, cy, rOuter, startAngle);
                  const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
                  const arcPath = `M ${startOuter.x} ${startOuter.y} A ${rOuter} ${rOuter} 0 ${largeArcFlag} 0 ${endOuter.x} ${endOuter.y}`;
                  return (
                    <path
                      d={arcPath}
                      fill="none"
                      stroke={finalStrokeColor}
                      strokeWidth={strokeWidth}
                      strokeLinecap="round"
                      style={{ transition: "all 0.2s ease" }}
                    />
                  );
                })()}

                {/* Hover/Tier-Specific Inner Highlight/Tint */}
                <path
                  d={pathD}
                  fill={tintColor}
                  style={{
                    pointerEvents: "none",
                    opacity: finalTintOpacity,
                    transition: "opacity 0.3s ease",
                  }}
                />

                {/* --- SPONSOR LOGO --- */}
                {/* LOGO stays Vertical (Counter-rotated) */}
                <g
                  transform={`rotate(${-rotation}, ${logoPos.x}, ${logoPos.y})`}
                >
                  <image
                    href={s.logo}
                    x={logoPos.x - size * 0.07}
                    y={logoPos.y - size * 0.07}
                    width={size * 0.14}
                    height={size * 0.14}
                    preserveAspectRatio="xMidYMid contain"
                    role="img"
                    aria-label={`${s.name} LOGO`}
                    alt={`${s.name} LOGO`}
                    style={{
                      pointerEvents: "none",
                      transition: "transform 0.3s ease, filter 0.3s ease",
                      transformOrigin: `${logoPos.x}px ${logoPos.y}px`,
                      transform: `scale(${logoScale})`,
                      filter: logoFilter,
                    }}
                  />
                </g>
              </g>
            );
          })}
        </g>

        {/* --- STATIC CENTER GROUP --- */}
        <circle
          cx={cx}
          cy={cy}
          r={rInner}
          fill="#1a1a1a"
          stroke="#444"
          strokeWidth="2"
        />

        <image
          href="/sponsors/GrungeOverlay.png"
          x="0"
          y="0"
          width={size}
          height={size}
          clipPath="url(#centerHubClip)"
          role="img"
          aria-label="Center grunge overlay"
          alt="Center grunge overlay"
          style={{
            pointerEvents: "none",
            mixBlendMode: "overlay",
            opacity: 0.2,
          }}
        />

        {/* --- 3. TOP FRAME (Rough Ring) - ROTATING COUNTER-CLOCKWISE --- */}
        <g transform={`rotate(${-rotation}, ${cx}, ${cy})`}>
          <image
            href="/sponsors/GrungeOverlay.png"
            x="0"
            y="0"
            width={size}
            height={size}
            role="img"
            aria-label="Top grunge overlay"
            alt="Top grunge overlay"
            style={{
              pointerEvents: "none",
              mixBlendMode: "normal",
              transform: "scale(1.01)",
              filter: "contrast(1.1)",
            }}
          />
        </g>

        {/* --- 4. CENTER TEXT (Static) --- */}
        <AnimatePresence mode="wait">
          <motion.g
            key={activeSponsor ? activeSponsor.name : "default"}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.15 }}
          >
            {activeSponsor ? (
              <text
                x={cx}
                y={cy}
                textAnchor="middle"
                dominantBaseline="middle"
                style={{
                  pointerEvents: "none",
                  textShadow: "0 4px 12px black",
                }}
              >
                {/* TOP LINE: Tier Name */}
                <tspan
                  x={cx}
                  dy="-0.2em"
                  fill={
                    activeSponsor.tier === "Platinum"
                      ? "#FFD700"
                      : activeSponsor.tier === "Gold"
                      ? "#ffb100"
                      : "#C0C0C0"
                  }
                  fontSize={size * 0.045}
                  fontWeight="bold"
                  style={{
                    fontFamily: "'Chinese_Rocks', serif",
                    letterSpacing: "0.05em",
                  }}
                >
                  {activeSponsor.tier.toUpperCase()}
                </tspan>

                {/* BOTTOM LINE: Sponsor Name */}
                <tspan
                  x={cx}
                  dy="1.4em"
                  fill="#ffffff"
                  fontSize={size * 0.025}
                  style={{ fontFamily: "Georgia, serif" }}
                >
                  {activeSponsor.name}
                </tspan>
              </text>
            ) : (
              <text
                x={cx}
                y={cy}
                textAnchor="middle"
                dominantBaseline="middle"
                fill="#ffffff"
                fontSize={size * 0.04}
                fontWeight="bold"
                style={{
                  fontFamily: "'Chinese_Rocks', serif",
                  pointerEvents: "none",
                  textShadow: "0 2px 8px black",
                }}
              >
                OUR SPONSORS
              </text>
            )}
          </motion.g>
        </AnimatePresence>
      </svg>
    </div>
  );
}
// ...existing code...