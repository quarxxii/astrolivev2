import { useState } from 'react';
import Navigation from './components/Navigation';
import Timeline from './components/Timeline';
import VideoCard from './components/VideoCard';
import ParticleBackground from './components/ParticleBackground';
import Highlights from './components/Highlights';
import Wiki from './components/Wiki';
import { Github, MessageCircle, Youtube, Twitter } from 'lucide-react';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const timelineData = [
    {
      date: 'PLATZHALTER 2025',
      title: 'Update - Titel kommt bald',
      description:
        'Hier wird der Changelog für das neueste Update erscheinen. Bleib gespannt auf neue Features und Verbesserungen!',
      isCurrent: true,
    },
    {
      date: 'PLATZHALTER 2024',
      title: 'Update - Titel kommt bald',
      description:
        'Hier wird der Changelog für dieses Update erscheinen. Neue Inhalte und Funktionen werden hier beschrieben.',
    },
    {
      date: 'PLATZHALTER 2024',
      title: 'Update - Titel kommt bald',
      description:
        'Hier wird der Changelog für dieses Update erscheinen. Details zu Änderungen und Neuerungen folgen.',
    },
    {
      date: 'PLATZHALTER 2023',
      title: 'Update - Titel kommt bald',
      description:
        'Hier wird der Changelog für dieses Update erscheinen. Informationen zu neuen Features werden hier veröffentlicht.',
    },
    {
      date: 'PLATZHALTER 2023',
      title: 'Server Start',
      description:
        'Der Beginn von Astro-Life Roleplay. Hier startete unsere Reise und die Community begann zu wachsen.',
    },
  ];

  const galleryVideos = [
    { id: 'dQw4w9WgXcQ', title: 'Server Trailer 2025' },
    { id: 'jNQXAC9IVRw', title: 'Community Highlights' },
    { id: '9bZkp7q19f0', title: 'Event Highlights' },
    
  ];

  // ✅ Featured Video nutzt jetzt auch eine Video-ID (z.B. das erste aus der Galerie)
  const featuredVideo = galleryVideos[0]; // oder: { id: 'X85JFedigjc', title: '...' }

  if (currentPage === 'highlights') {
    return (
      <div className="min-h-screen bg-[#0a0a0a] text-white">
        <div className="fixed inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>
        <div className="fixed inset-0 bg-gradient-radial from-transparent via-[#0a0a0a]/50 to-[#0a0a0a] pointer-events-none"></div>
        <Navigation currentPage={currentPage} onPageChange={setCurrentPage} />
        <Highlights />
        <Footer />
      </div>
    );
  }

  if (currentPage === 'wiki') {
    return (
      <div className="min-h-screen bg-[#0a0a0a] text-white">
        <div className="fixed inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>
        <div className="fixed inset-0 bg-gradient-radial from-transparent via-[#0a0a0a]/50 to-[#0a0a0a] pointer-events-none"></div>
        <Navigation currentPage={currentPage} onPageChange={setCurrentPage} />
        <Wiki />
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <div className="fixed inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>
      <div className="fixed inset-0 bg-gradient-radial from-transparent via-[#0a0a0a]/50 to-[#0a0a0a] pointer-events-none"></div>

      <Navigation currentPage={currentPage} onPageChange={setCurrentPage} />

      <main className="relative z-10">
        <section className="pt-32 pb-20 px-6 relative overflow-hidden">
          <ParticleBackground />
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-16 animate-fadeInDown">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#9c35da] via-[#7051d8] to-[#4467db] bg-clip-text text-transparent">
                Platzhalter
              </h1>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Tauche ein in das fortschrittlichste Roleplay-Erlebnis. Wo deine Geschichte beginnt.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-8">
                <div className="bg-[#1a1a1a]/40 backdrop-blur-sm rounded-2xl overflow-hidden border border-[#9c35da]/20 shadow-[0_0_50px_rgba(156,53,218,0.15)] animate-fadeIn">
                  <div className="aspect-video bg-black">
                    <iframe
                      // ✅ korrektes Embed-Format
                      src={`https://www.youtube.com/embed/${featuredVideo.id}`}
                      title={featuredVideo.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    />
                  </div>
                  <div className="p-6 border-t border-[#9c35da]/20">
                    <h2 className="text-2xl font-bold text-white mb-2">
                      Featured: {featuredVideo.title}
                    </h2>
                    <p className="text-gray-400">
                      Erlebe die nächste Generation des Roleplay-Gamings
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="bg-[#1a1a1a]/40 backdrop-blur-sm rounded-2xl p-8 border border-[#9c35da]/20 shadow-[0_0_50px_rgba(156,53,218,0.15)] animate-fadeIn"
                style={{ animationDelay: '200ms' }}
              >
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-[#9c35da] to-[#4467db] bg-clip-text text-transparent">
                  Unsere Reise
                </h2>
                <Timeline items={timelineData} />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                Community Highlights
              </h2>
              <p className="text-gray-400 text-lg">
                Entdecke was unsere Community besonders macht
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {galleryVideos.map((video, index) => (
                <VideoCard
                  key={video.id}
                  videoId={video.id}
                  title={video.title}
                  delay={index * 150}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-[#9c35da]/15 via-[#7051d8]/15 to-[#4467db]/15 backdrop-blur-sm rounded-2xl p-12 border border-[#9c35da]/30 shadow-[0_0_80px_rgba(156,53,218,0.2)]">
              <h2 className="text-4xl font-bold mb-6 text-white">
                Bereit deine Geschichte zu beginnen?
              </h2>
              <p className="text-gray-400 text-lg mb-8">
                Schließe dich Tausenden von Spielern im immersivsten Roleplay-Erlebnis an
              </p>
              <button className="bg-gradient-to-r from-[#9c35da] to-[#4467db] hover:from-[#8828c9] hover:to-[#3756ca] text-white font-bold px-8 py-4 rounded-lg transition-all duration-300 shadow-[0_0_30px_rgba(156,53,218,0.4)] hover:shadow-[0_0_50px_rgba(156,53,218,0.6)] hover:scale-105">
                Server Beitreten
              </button>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
}

function Footer() {
  const socialLinks = [
    { icon: MessageCircle, label: 'Discord', href: '#' },
    { icon: Twitter, label: 'Twitter', href: '#' },
    { icon: Youtube, label: 'YouTube', href: '#' },
    { icon: Github, label: 'GitHub', href: '#' },
  ];

  return (
    <footer className="py-12 px-6 border-t border-[#9c35da]/20 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center gap-6">
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="text-gray-400 hover:text-[#9c35da] transition-all duration-300 hover:scale-110"
              >
                <social.icon className="w-6 h-6" />
              </a>
            ))}
          </div>
          <p className="text-gray-500 text-center">
            &copy; 2025 Astro-Life Roleplay. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default App;
