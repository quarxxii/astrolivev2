export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/70 backdrop-blur-md border-b border-cyan-500/10">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="w-10 h-10 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(0,255,204,0.3)] group-hover:shadow-[0_0_30px_rgba(0,255,204,0.5)] transition-all duration-300 overflow-hidden bg-white">
              <img
                src="/astro-removebg-preview copy.png"
                alt="Astro-Life Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-white font-bold text-xl tracking-tight">
              Astro-Life Roleplay
            </span>
          </div>

          <div className="hidden md:flex items-center gap-1">
            <a
              href="#"
              className="group relative px-4 py-2 text-gray-400 hover:text-cyan-400 transition-all duration-300 font-medium"
            >
              <span className="flex items-center gap-1.5">
                Home
              </span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300 shadow-[0_0_10px_rgba(0,255,204,0.6)]"></span>
            </a>
          </div>

          <button className="md:hidden text-cyan-400">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
