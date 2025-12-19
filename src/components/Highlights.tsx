import { Zap, Users, Coins, Briefcase, Gamepad2, Shield, AlignHorizontalDistributeEnd} from 'lucide-react';

interface HighlightCard {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const highlightCards: HighlightCard[] = [
  {
    icon: <AlignHorizontalDistributeEnd className="w-8 h-8" />,
    title: "Platzhalter",
    description: "Hier wird noch was anderes stehen aber vorübergehend sind das die Highlights",
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Platzhalter",
    description: "Hier wird noch was anderes stehen aber vorübergehend sind das die Highlights",
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Platzhalter",
    description: "Hier wird noch was anderes stehen aber vorübergehend sind das die Highlights",
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Platzhalter",
    description: "Hier wird noch was anderes stehen aber vorübergehend sind das die Highlights",
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Platzhalter",
    description: "Hier wird noch was anderes stehen aber vorübergehend sind das die Highlights",
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Platzhalter",
    description: "Hier wird noch was anderes stehen aber vorübergehend sind das die Highlights",
  },
];

export default function Highlights() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <div className="fixed inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>
      <div className="fixed inset-0 bg-gradient-radial from-transparent via-[#0a0a0a]/50 to-[#0a0a0a] pointer-events-none"></div>

      <div className="relative z-10 pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fadeInDown">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#9c35da] via-[#7051d8] to-[#4467db] bg-clip-text text-transparent">
              Server Highlights
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Discover what makes Astro-Life Roleplay the premier RP experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlightCards.map((card, index) => (
              <div
                key={index}
                className="bg-[#1a1a1a]/40 backdrop-blur-sm rounded-xl border border-[#9c35da]/20 p-8 hover:border-[#9c35da]/40 transition-all duration-300 hover:shadow-[0_0_40px_rgba(156,53,218,0.15)] group cursor-pointer animate-fadeIn"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-[#9c35da] mb-4 group-hover:scale-110 transition-transform duration-300">
                  {card.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-[#9c35da] transition-colors duration-300">
                  {card.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
