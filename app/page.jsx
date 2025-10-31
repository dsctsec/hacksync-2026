import React from 'react'

const page = () => {
  return (
    <div className="bg-black w-full h-screen  items-center justify-center text-red-600">
      {/* Container for the two divs */}
      <div className="flex items-center justify-around gap-8">
        
        {/* Left Div - Text */}
        <div className="text-8xl font-black bg-gradient-to-b from-red-700 via-red-500 to-yellow-400 bg-clip-text text-transparent">
    HackSync 2.0
  </div>


        {/* Right Div - Image */}
        <div>
          <img
            src="/rdr2-theme.jpg"  // <-- replace with your image path
            alt="Hack Sync Logo"
            className="w-150 h-150 object-contain"
          />
        </div>

      </div>

      <div>
          <img
            src="/rdr2-theme.jpg"  // <-- replace with your image path
            alt="Hack Sync Logo"
            className="w-150 h-150 object-contain"
          />
        </div>
    </div>
  )
}

export default page
