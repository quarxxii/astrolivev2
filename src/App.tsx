import Navigation from './components/Navigation';
import Timeline from './components/Timeline';
import VideoCard from './components/VideoCard';
import ParticleBackground from './components/ParticleBackground';

function App() {
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

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <div className="fixed inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>
      <div className="fixed inset-0 bg-gradient-radial from-transparent via-[#0a0a0a]/50 to-[#0a0a0a] pointer-events-none"></div>

      <Navigation />

      <main className="relative z-10">
        <section className="pt-32 pb-20 px-6 relative overflow-hidden">
          <ParticleBackground />
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-16 animate-fadeInDown">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-cyan-300 to-cyan-500 bg-clip-text text-transparent">
                Platzhalter
              </h1>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Tauche ein in das fortschrittlichste Roleplay-Erlebnis.
                Wo deine Geschichte beginnt.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-8">
                <div className="bg-[#1a1a1a]/40 backdrop-blur-sm rounded-2xl overflow-hidden border border-cyan-500/10 shadow-[0_0_50px_rgba(0,255,204,0.1)] animate-fadeIn">
                  <div className="aspect-video bg-black">
                    <iframe
                      src="https://www.youtube.com/watch?v=X85JFedigjc"
                      title="Featured Server Showcase"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    ></iframe>
                  </div>
                  <div className="p-6 border-t border-cyan-500/10">
                    <h2 className="text-2xl font-bold text-white mb-2">
                      Featured: Server Showcase
                    </h2>
                    <p className="text-gray-400">
                      Erlebe die nächste Generation des Roleplay-Gamings
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#1a1a1a]/40 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/10 shadow-[0_0_50px_rgba(0,255,204,0.1)] animate-fadeIn" style={{ animationDelay: '200ms' }}>
                <h2 className="text-3xl font-bold mb-8 text-cyan-400">
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
                  key={index}
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
            <div className="bg-gradient-to-r from-cyan-500/10 via-cyan-400/10 to-cyan-500/10 backdrop-blur-sm rounded-2xl p-12 border border-cyan-500/20 shadow-[0_0_80px_rgba(0,255,204,0.15)]">
              <h2 className="text-4xl font-bold mb-6 text-white">
                Bereit deine Geschichte zu beginnen?
              </h2>
              <p className="text-gray-400 text-lg mb-8">
                Schließe dich Tausenden von Spielern im immersivsten Roleplay-Erlebnis an
              </p>
              <button className="bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 text-black font-bold px-8 py-4 rounded-lg transition-all duration-300 shadow-[0_0_30px_rgba(0,255,204,0.4)] hover:shadow-[0_0_50px_rgba(0,255,204,0.6)] hover:scale-105">
                Server Beitreten
              </button>
            </div>
          </div>
        </section>

        <footer className="py-12 px-6 border-t border-cyan-500/10">
          <div className="max-w-7xl mx-auto text-center text-gray-500">
            <p>&copy; 2025 Astro-Life Roleplay. Alle Rechte vorbehalten.</p>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
