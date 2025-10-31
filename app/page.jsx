import React from 'react'

const page = () => {
  return (
    <div className="bg-black min-h-screen w-full flex flex-col items-center justify-center text-red-600 overflow-hidden">
      
      {/* Top Section */}
      <div className="flex flex-col md:flex-row items-center justify-around gap-8 md:gap-12 w-full px-6 md:px-10 my-25">
        
        {/* Left Text */}
        <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black bg-gradient-to-b from-red-700 via-red-500 to-yellow-400 bg-clip-text text-transparent text-center md:text-left">
          HackSync 2.0
        </div>

        {/* Right Image */}
        <div className="mt-6 md:mt-0">
          <img
            src="/rdr2-theme.jpg"
            alt="Hack Sync Artwork"
            className="w-56 h-56 sm:w-72 sm:h-72 md:w-96 md:h-96 lg:w-[30rem] lg:h-[30rem] object-contain"
          />
        </div>
      </div>

      {/* Background Section */}
      <div className="relative w-full mt-10 md:mt-16">
        {/* Background Image */}
        <img
          src="/starbg.jpg"
          alt="Background"
          className="w-full h-64 sm:h-80 md:h-96 lg:h-[32rem] object-cover"
        />

        {/* Centered Overlay Text */}
        <h1
          className="absolute inset-0 flex items-center justify-center text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black text-yellow-300 -translate-y-6 md:-translate-y-10 text-center"
          style={{ fontFamily: 'var(--font-maiden-orange)' }}
        >
          COMING SOON...
        </h1>

        {/* Overlay Logo */}
        <div className="absolute bottom-6 sm:bottom-8 md:bottom-10 left-1/2 transform -translate-x-1/2">
          <img
            src="/hacksync.png"
            alt="HackSync Logo"
            className="w-32 h-16 sm:w-40 sm:h-20 md:w-56 md:h-28 lg:w-64 lg:h-32 object-contain"
          />
        </div>
      </div>
    </div>
  )
}

export default page
