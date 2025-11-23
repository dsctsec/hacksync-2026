"use client";

import React, { useEffect, useRef, useState } from "react";

let audioUnlocked = false;

const Loader = ({ onLoadingComplete }) => {
  const audioRef = useRef(null);
  const [soundReady, setSoundReady] = useState(audioUnlocked);
  const [userInteracted, setUserInteracted] = useState(false);

  const handleInteraction = async () => {
    setUserInteracted(true);
    const audioEl = audioRef.current;
    if (audioEl) {
      try {
        audioEl.currentTime = 0;
        audioEl.volume = 0.85;
        audioEl.muted = false;
        await audioEl.play();
        audioUnlocked = true;
        setSoundReady(true);
        console.log("✅ Audio playing");
      } catch (err) {
        console.error("❌ Audio error:", err);
      }
    }
  };

  useEffect(() => {
    if (!userInteracted) return;

    const stopTimer = setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
      onLoadingComplete();
    }, 3000);

    return () => {
      clearTimeout(stopTimer);
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    };
  }, [userInteracted, onLoadingComplete]);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black overflow-hidden">
      <audio ref={audioRef} preload="auto" playsInline>
        <source src="/revolver.mp3" type="audio/mpeg" />
        <source src="/revolver.ogg" type="audio/ogg" />
      </audio>

      {!userInteracted ? (
        <div className="flex flex-col items-center justify-center space-y-8 px-6">
          <div className="text-center space-y-6">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black font-['Chinese_Rocks'] bg-gradient-to-b from-red-700 via-red-500 to-yellow-400 bg-clip-text text-transparent">
              HackSync II
            </h1>
            
          </div>

          <button
            onClick={handleInteraction}
            className="mt-6 px-12 py-5 bg-red-600 hover:bg-red-700 text-white font-bold text-xl rounded-lg transition-all duration-300 shadow-lg hover:shadow-red-500/50 uppercase tracking-widest transform hover:scale-105 active:scale-95"
          >
            Start Experience
          </button>
        </div>
      ) : (
        <div className="relative w-[120px] h-[120px]">
          <div className="loader">
            <div className="inner"></div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.4s ease-out forwards;
          opacity: 0;
        }

        .loader {
          animation: spin 1.5s linear alternate infinite;
          background: #b73f41;
          border-radius: 50%;
          height: 120px;
          width: 120px;
          bottom: 0;
          left: 0;
          margin: auto;
          position: absolute;
          right: 0;
          top: 0;
        }

        .loader:before {
          background: #b73f41;
          border-radius: 50%;
          content: "";
          display: block;
          height: 0.5em;
          width: 0.5em;
          z-index: 2;
          bottom: 0;
          left: 0;
          margin: auto;
          position: absolute;
          right: 0;
          top: 0;
        }

        .loader:after {
          background: #000000;
          border-radius: 50%;
          box-shadow: 0em -2.6em #000000, 2.25em -4.02em #000000,
            2.25em -1.25em #000000, 4.6em 0em #000000, 2.25em 1.25em #000000,
            2.25em 4.02em #000000, 0em 2.6em #000000, -2.25em 4.02em #000000,
            -2.25em 1.25em #000000, -4.6em 0em #000000, -2.25em -1.25em #000000,
            -2.25em -4.02em #000000;
          content: "";
          display: block;
          height: 2em;
          width: 2em;
          bottom: 0;
          left: 0;
          margin: auto;
          position: absolute;
          right: 0;
          top: 0;
        }

        .inner {
          animation: load 1.5s linear alternate infinite;
          border: solid 1px #b73f41;
          border-radius: 50%;
          height: 1.75em;
          width: 1.75em;
          z-index: 1;
          bottom: 0;
          left: 0;
          margin: auto;
          position: absolute;
          right: 0;
          top: 0;
        }

        @keyframes load {
          0% {
            box-shadow: 0em -2.6em #000000, 2.25em -1.25em #000000,
              2.25em 1.25em #000000, 0em 2.6em #000000, -2.25em 1.25em #000000,
              -2.25em -1.25em #000000;
          }
          15% {
            box-shadow: 0em -2.6em #000000, 2.25em -1.25em #000000,
              2.25em 1.25em #000000, 0em 2.6em #000000, -2.25em 1.25em #000000,
              -2.25em -1.25em #b73f41;
          }
          30% {
            box-shadow: 0em -2.6em #000000, 2.25em -1.25em #000000,
              2.25em 1.25em #000000, 0em 2.6em #000000, -2.25em 1.25em #b73f41,
              -2.25em -1.25em #b73f41;
          }
          45% {
            box-shadow: 0em -2.6em #000000, 2.25em -1.25em #000000,
              2.25em 1.25em #000000, 0em 2.6em #b73f41, -2.25em 1.25em #b73f41,
              -2.25em -1.25em #b73f41;
          }
          60% {
            box-shadow: 0em -2.6em #000000, 2.25em -1.25em #000000,
              2.25em 1.25em #b73f41, 0em 2.6em #b73f41, -2.25em 1.25em #b73f41,
              -2.25em -1.25em #b73f41;
          }
          75% {
            box-shadow: 0em -2.6em #000000, 2.25em -1.25em #b73f41,
              2.25em 1.25em #b73f41, 0em 2.6em #b73f41, -2.25em 1.25em #b73f41,
              -2.25em -1.25em #b73f41;
          }
          90% {
            box-shadow: 0em -2.6em #b73f41, 2.25em -1.25em #b73f41,
              2.25em 1.25em #b73f41, 0em 2.6em #b73f41, -2.25em 1.25em #b73f41,
              -2.25em -1.25em #b73f41;
          }
          100% {
            box-shadow: 0em -2.6em #b73f41, 2.25em -1.25em #b73f41,
              2.25em 1.25em #b73f41, 0em 2.6em #b73f41, -2.25em 1.25em #b73f41,
              -2.25em -1.25em #b73f41;
          }
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          15% {
            transform: rotate(60deg);
          }
          30% {
            transform: rotate(120deg);
          }
          45% {
            transform: rotate(180deg);
          }
          60% {
            transform: rotate(240deg);
          }
          75% {
            transform: rotate(300deg);
          }
          90% {
            transform: rotate(360deg);
          }
          100% {
            transform: rotate(0deg);
          }
        }
      `}</style>
    </div>
  );
};

export default Loader;
