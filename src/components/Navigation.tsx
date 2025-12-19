interface NavigationProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

export default function Navigation({ currentPage, onPageChange }: NavigationProps) {
  const navLinks = [
    { label: 'Home', id: 'home' },
    { label: 'Highlights', id: 'highlights' },
    { label: 'Wiki', id: 'wiki' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/70 backdrop-blur-md border-b border-[#9c35da]/20">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 group cursor-pointer" onClick={() => onPageChange('home')}>
            <div className="w-10 h-10 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(156,53,218,0.4)] group-hover:shadow-[0_0_30px_rgba(156,53,218,0.6)] transition-all duration-300 overflow-hidden bg-white">
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
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => onPageChange(link.id)}
                className={`group relative px-4 py-2 transition-all duration-300 font-medium ${
                  currentPage === link.id
                    ? 'text-[#9c35da]'
                    : 'text-gray-400 hover:text-[#9c35da]'
                }`}
              >
                <span className="flex items-center gap-1.5">
                  {link.label}
                </span>
                <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#9c35da] to-[#4467db] transition-all duration-300 shadow-[0_0_10px_rgba(156,53,218,0.6)] ${
                  currentPage === link.id ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </button>
            ))}
          </div>

          <button className="md:hidden text-[#9c35da]">
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
