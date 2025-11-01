

"use client";

import React, { useEffect, useRef, useState } from "react";

let audioUnlocked = false;

const Loader = ({ onLoadingComplete }) => {
  const audioRef = useRef(null);
  const [soundReady, setSoundReady] = useState(audioUnlocked);

  useEffect(() => {
    const audioEl = audioRef.current;
    if (!audioEl) return;

    audioEl.load();
    audioEl.loop = false;
    audioEl.volume = 0.85;
    audioEl.currentTime = 0;
    audioEl.muted = false;

    let stopped = false;
    let retryTimer = null;

    const gestureEvents = ["pointerdown", "touchstart", "keydown"];
    const cleanupGestures = () =>
      gestureEvents.forEach((evt) => window.removeEventListener(evt, handleGesture));

    const markUnlocked = () => {
      audioUnlocked = true;
      setSoundReady(true);
      if (retryTimer) clearInterval(retryTimer);
      cleanupGestures();
    };

    const tryPlay = async () => {
      if (!audioEl || stopped) return;
      try {
        await audioEl.play();
        markUnlocked();
      } catch {
        try {
          audioEl.muted = true;
          await audioEl.play();
          setTimeout(() => {
            if (!stopped && audioEl) audioEl.muted = false;
          }, 120);
          markUnlocked();
        } catch {
          /* still blocked */
        }
      }
    };

    function handleGesture() {
      tryPlay();
    }

    if (audioUnlocked) {
      tryPlay();
    } else {
      tryPlay();
      retryTimer = setInterval(tryPlay, 300);
      gestureEvents.forEach((evt) => window.addEventListener(evt, handleGesture, { once: true }));
    }

    const stopTimer = setTimeout(() => {
      stopped = true;
      if (audioEl) {
        audioEl.pause();
        audioEl.currentTime = 0;
      }
      onLoadingComplete();
    }, 3000);

    audioEl.onended = () => {
      if (!stopped && audioEl) {
        audioEl.currentTime = 0;
        audioEl.play().catch(() => {});
      }
    };

    return () => {
      stopped = true;
      clearTimeout(stopTimer);
      if (retryTimer) clearInterval(retryTimer);
      cleanupGestures();
      if (audioEl) {
        audioEl.onended = null;
        audioEl.pause();
        audioEl.currentTime = 0;
      }
    };
  }, [onLoadingComplete]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black overflow-hidden">
      <audio ref={audioRef} preload="auto" playsInline autoPlay>
        <source src="/revolver.mp3" type="audio/mpeg" />
        <source src="/revolver.ogg" type="audio/ogg" />
      </audio>

      <div className="relative w-[120px] h-[120px]">
        <div className="loader">
          <div className="inner"></div>
        </div>
      </div>

      {!soundReady && (
        <p className="absolute bottom-12 text-xs tracking-[0.3em] text-red-400 uppercase animate-pulse">
          tap or press any key to enable sound
        </p>
      )}

      <style jsx>{`
        .loader {
          animation: spin 1.5s linear alternate infinite;
          background: #B73F41;
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
          background: #B73F41;
          border-radius: 50%;
          content: '';
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
          box-shadow: 0em -2.60em #000000,
            2.25em -4.02em #000000,
            2.25em -1.25em #000000,
            4.60em 0em #000000,
            2.25em 1.25em #000000,
            2.25em 4.02em #000000,
            0em 2.60em #000000,
            -2.25em 4.02em #000000,
            -2.25em 1.25em #000000,
            -4.60em 0em #000000,
            -2.25em -1.25em #000000,
            -2.25em -4.02em #000000;
          content: '';
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
          border: solid 1px #B73F41;
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
            box-shadow: 0em -2.60em #000000,
              2.25em -1.25em #000000,
              2.25em 1.25em #000000,
              0em 2.60em #000000,
              -2.25em 1.25em #000000,
              -2.25em -1.25em #000000;
          }
          15% {
            box-shadow: 0em -2.60em #000000,
              2.25em -1.25em #000000,
              2.25em 1.25em #000000,
              0em 2.60em #000000,
              -2.25em 1.25em #000000,
              -2.25em -1.25em #B73F41;
          }
          30% {
            box-shadow: 0em -2.60em #000000,
              2.25em -1.25em #000000,
              2.25em 1.25em #000000,
              0em 2.60em #000000,
              -2.25em 1.25em #B73F41,
              -2.25em -1.25em #B73F41;
          }
          45% {
            box-shadow: 0em -2.60em #000000,
              2.25em -1.25em #000000,
              2.25em 1.25em #000000,
              0em 2.60em #B73F41,
              -2.25em 1.25em #B73F41,
              -2.25em -1.25em #B73F41;
          }
          60% {
            box-shadow: 0em -2.60em #000000,
              2.25em -1.25em #000000,
              2.25em 1.25em #B73F41,
              0em 2.60em #B73F41,
              -2.25em 1.25em #B73F41,
              -2.25em -1.25em #B73F41;
          }
          75% {
            box-shadow: 0em -2.60em #000000,
              2.25em -1.25em #B73F41,
              2.25em 1.25em #B73F41,
              0em 2.60em #B73F41,
              -2.25em 1.25em #B73F41,
              -2.25em -1.25em #B73F41;
          }
          90% {
            box-shadow: 0em -2.60em #B73F41,
              2.25em -1.25em #B73F41,
              2.25em 1.25em #B73F41,
              0em 2.60em #B73F41,
              -2.25em 1.25em #B73F41,
              -2.25em -1.25em #B73F41;
          }
          100% {
            box-shadow: 0em -2.60em #B73F41,
              2.25em -1.25em #B73F41,
              2.25em 1.25em #B73F41,
              0em 2.60em #B73F41,
              -2.25em 1.25em #B73F41,
              -2.25em -1.25em #B73F41;
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
