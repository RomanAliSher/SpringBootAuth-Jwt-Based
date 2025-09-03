const Footer = () => {
  return (
    <footer className="relative z-20 border-t-2 border-yellow-400 bg-gradient-to-r from-black via-gray-900 to-black backdrop-blur-sm mt-auto">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          {/* Left Side */}
          <div className="flex items-center space-x-4">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-yellow-400 to-amber-500 relative shadow-lg">
              <div className="absolute inset-2 rounded-full bg-black flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-yellow-400 to-amber-500 animate-pulse"></div>
              </div>
            </div>
            <div className="text-yellow-400">
              <p className="text-sm font-semibold tracking-wide">SPRINGAUTH SYSTEM</p>
              <p className="text-xs opacity-75">v2.0.0 - GOLDEN EDITION</p>
            </div>
          </div>

       

          {/* Right Side */}
          <div className="text-right">
            <p className="text-xs text-yellow-400 opacity-75 font-mono">
              © {new Date().getFullYear()} SPRINGAUTH CORP
            </p>
            <p className="text-xs text-yellow-400 opacity-50 font-mono">
              MADE BY ROMAN
            </p>
          </div>
        </div>

        {/* Animated Elements */}
        <div className="flex justify-center mt-6 space-x-3">
          <div className="w-2 h-2 rounded-full bg-yellow-400 animate-ping opacity-60"></div>
          <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse opacity-40"></div>
          <div className="w-2 h-2 rounded-full bg-yellow-400 animate-bounce opacity-80"></div>
          <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse opacity-50"></div>
          <div className="w-2 h-2 rounded-full bg-yellow-400 animate-ping opacity-30"></div>
        </div>
      </div>

      {/* Animated Top Border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent animate-pulse"></div>
    </footer>
  )
}

export default Footer
