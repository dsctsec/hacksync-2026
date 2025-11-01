
// "use client";

// import React, { useEffect, useRef, useState } from "react";

// let audioUnlocked = false;

// const Loader = ({ onLoadingComplete }) => {
//   const audioRef = useRef(null);
//   const [soundReady, setSoundReady] = useState(audioUnlocked);
//   const [userInteracted, setUserInteracted] = useState(false);

//   const handleInteraction = async () => {
//     setUserInteracted(true);
//     const audioEl = audioRef.current;
//     if (audioEl) {
//       try {
//         audioEl.currentTime = 0;
//         audioEl.volume = 0.85;
//         audioEl.muted = false;
//         await audioEl.play();
//         audioUnlocked = true;
//         setSoundReady(true);
//         console.log("✅ Audio playing");
//       } catch (err) {
//         console.error("❌ Audio error:", err);
//       }
//     }
//   };

//   useEffect(() => {
//     if (!userInteracted) return;

//     const stopTimer = setTimeout(() => {
//       if (audioRef.current) {
//         audioRef.current.pause();
//         audioRef.current.currentTime = 0;
//       }
//       onLoadingComplete();
//     }, 3000);

//     return () => {
//       clearTimeout(stopTimer);
//       if (audioRef.current) {
//         audioRef.current.pause();
//         audioRef.current.currentTime = 0;
//       }
//     };
//   }, [userInteracted, onLoadingComplete]);

//   return (
//     <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black overflow-hidden">
//       <audio ref={audioRef} preload="auto" playsInline>
//         <source src="/revolver.mp3" type="audio/mpeg" />
//         <source src="/revolver.ogg" type="audio/ogg" />
//       </audio>

//       {!userInteracted ? (
//         // Show only button before interaction
//         <button
//           onClick={handleInteraction}
//           className="px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold text-lg rounded-lg transition-all duration-300 shadow-[0_0_30px_rgba(220,38,38,0.5)] hover:shadow-[0_0_50px_rgba(220,38,38,0.8)] uppercase tracking-wider transform hover:scale-105"
//         >
//           Click to Start Experience
//         </button>
//       ) : (
//         // Show loader only after interaction
//         <div className="relative w-[120px] h-[120px]">
//           <div className="loader">
//             <div className="inner"></div>
//           </div>
//         </div>
//       )}

//       <style jsx>{`
//         .loader {
//           animation: spin 1.5s linear alternate infinite;
//           background: #B73F41;
//           border-radius: 50%;
//           height: 120px;
//           width: 120px;
//           bottom: 0;
//           left: 0;
//           margin: auto;
//           position: absolute;
//           right: 0;
//           top: 0;
//         }
        
//         .loader:before {
//           background: #B73F41;
//           border-radius: 50%;
//           content: '';
//           display: block;
//           height: 0.5em;
//           width: 0.5em;
//           z-index: 2;
//           bottom: 0;
//           left: 0;
//           margin: auto;
//           position: absolute;
//           right: 0;
//           top: 0;
//         }
        
//         .loader:after {
//           background: #000000;
//           border-radius: 50%;
//           box-shadow: 0em -2.60em #000000,
//             2.25em -4.02em #000000,
//             2.25em -1.25em #000000,
//             4.60em 0em #000000,
//             2.25em 1.25em #000000,
//             2.25em 4.02em #000000,
//             0em 2.60em #000000,
//             -2.25em 4.02em #000000,
//             -2.25em 1.25em #000000,
//             -4.60em 0em #000000,
//             -2.25em -1.25em #000000,
//             -2.25em -4.02em #000000;
//           content: '';
//           display: block;
//           height: 2em;
//           width: 2em;
//           bottom: 0;
//           left: 0;
//           margin: auto;
//           position: absolute;
//           right: 0;
//           top: 0;
//         }
        
//         .inner {
//           animation: load 1.5s linear alternate infinite;
//           border: solid 1px #B73F41;
//           border-radius: 50%;
//           height: 1.75em;
//           width: 1.75em;
//           z-index: 1;
//           bottom: 0;
//           left: 0;
//           margin: auto;
//           position: absolute;
//           right: 0;
//           top: 0;
//         }
        
//         @keyframes load {
//           0% {
//             box-shadow: 0em -2.60em #000000,
//               2.25em -1.25em #000000,
//               2.25em 1.25em #000000,
//               0em 2.60em #000000,
//               -2.25em 1.25em #000000,
//               -2.25em -1.25em #000000;
//           }
//           15% {
//             box-shadow: 0em -2.60em #000000,
//               2.25em -1.25em #000000,
//               2.25em 1.25em #000000,
//               0em 2.60em #000000,
//               -2.25em 1.25em #000000,
//               -2.25em -1.25em #B73F41;
//           }
//           30% {
//             box-shadow: 0em -2.60em #000000,
//               2.25em -1.25em #000000,
//               2.25em 1.25em #000000,
//               0em 2.60em #000000,
//               -2.25em 1.25em #B73F41,
//               -2.25em -1.25em #B73F41;
//           }
//           45% {
//             box-shadow: 0em -2.60em #000000,
//               2.25em -1.25em #000000,
//               2.25em 1.25em #000000,
//               0em 2.60em #B73F41,
//               -2.25em 1.25em #B73F41,
//               -2.25em -1.25em #B73F41;
//           }
//           60% {
//             box-shadow: 0em -2.60em #000000,
//               2.25em -1.25em #000000,
//               2.25em 1.25em #B73F41,
//               0em 2.60em #B73F41,
//               -2.25em 1.25em #B73F41,
//               -2.25em -1.25em #B73F41;
//           }
//           75% {
//             box-shadow: 0em -2.60em #000000,
//               2.25em -1.25em #B73F41,
//               2.25em 1.25em #B73F41,
//               0em 2.60em #B73F41,
//               -2.25em 1.25em #B73F41,
//               -2.25em -1.25em #B73F41;
//           }
//           90% {
//             box-shadow: 0em -2.60em #B73F41,
//               2.25em -1.25em #B73F41,
//               2.25em 1.25em #B73F41,
//               0em 2.60em #B73F41,
//               -2.25em 1.25em #B73F41,
//               -2.25em -1.25em #B73F41;
//           }
//           100% {
//             box-shadow: 0em -2.60em #B73F41,
//               2.25em -1.25em #B73F41,
//               2.25em 1.25em #B73F41,
//               0em 2.60em #B73F41,
//               -2.25em 1.25em #B73F41,
//               -2.25em -1.25em #B73F41;
//           }
//         }
        
//         @keyframes spin {
//           0% {
//             transform: rotate(0deg);
//           }
//           15% {
//             transform: rotate(60deg);
//           }
//           30% {
//             transform: rotate(120deg);
//           }
//           45% {
//             transform: rotate(180deg);
//           }
//           60% {
//             transform: rotate(240deg);
//           }
//           75% {
//             transform: rotate(300deg);
//           }
//           90% {
//             transform: rotate(360deg);
//           }
//           100% {
//             transform: rotate(0deg);
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Loader;
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
        // Simple Start Screen
        <div className="flex flex-col items-center justify-center space-y-12">
          {/* Title */}
          <h1 className="text-7xl md:text-9xl font-black bg-gradient-to-b from-red-600 via-red-500 to-orange-400 bg-clip-text text-transparent">
            HackSync 2.0
          </h1>

          {/* Start Button */}
          <button
            onClick={handleInteraction}
            className="px-12 py-5 bg-red-600 hover:bg-red-700 text-white font-bold text-xl rounded-lg transition-all duration-300 shadow-lg hover:shadow-red-500/50 uppercase tracking-widest transform hover:scale-105 active:scale-95"
          >
            Start Experience
          </button>
        </div>
      ) : (
        // Show loader only after interaction
        <div className="relative w-[120px] h-[120px]">
          <div className="loader">
            <div className="inner"></div>
          </div>
        </div>
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