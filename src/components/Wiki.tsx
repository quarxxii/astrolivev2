import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { BookOpen, ChevronRight } from 'lucide-react';

interface WikiPage {
  id: string;
  title: string;
  category: string;
  content: string;
}

interface WikiCategory {
  id: string;
  name: string;
  pages: WikiPage[];
}

const wikiCategories: WikiCategory[] = [
  {
    id: 'getting-started',
    name: 'Platzhalter Getting Started',
    pages: [
      {
        id: 'server-join',
        title: 'Platzhalter Seite 1',
        category: 'Platzhalter Getting Started',
        content: `# Platzhalter Überschrift (H1)

## Platzhalter Voraussetzungen
- Platzhalter Voraussetzung 1
- Platzhalter Voraussetzung 2
- Platzhalter Voraussetzung 3

## Platzhalter Schritte
1. Platzhalter Schritt 1
2. Platzhalter Schritt 2
3. Platzhalter Schritt 3

## Platzhalter Hinweise
- Platzhalter Tipp 1
- Platzhalter Tipp 2
- Platzhalter Tipp 3

## Platzhalter Commands / Links
- \`/platzhalter\`
- [Platzhalter Link](https://example.com)`,
      },
      {
        id: 'character-creation',
        title: 'Platzhalter Seite 2',
        category: 'Platzhalter Getting Started',
        content: `# Platzhalter Charakter (H1)

## Platzhalter Start
Platzhalter Text zur Einführung. Hier kommt später dein echter Text rein.

## Platzhalter Optionen
### Platzhalter Aussehen (H3)
- Platzhalter Punkt A
- Platzhalter Punkt B
- Platzhalter Punkt C

### Platzhalter Infos (H3)
- Platzhalter Name
- Platzhalter Hintergrund

## Platzhalter Tipps
- Platzhalter Tipp A
- Platzhalter Tipp B
- Platzhalter Tipp C`,
      },
    ],
  },
  {
    id: 'gameplay',
    name: 'Platzhalter Gameplay',
    pages: [
      {
        id: 'roleplay-basics',
        title: 'Platzhalter RP Basics',
        category: 'Platzhalter Gameplay',
        content: `# Platzhalter Roleplay (H1)

## Platzhalter Erklärung
Platzhalter Text: Erklärung was Roleplay ist und wie es hier abläuft.

## Platzhalter Kommunikation
### Platzhalter IC (H3)
- Platzhalter Beispiel 1
- Platzhalter Beispiel 2
- Platzhalter Beispiel 3

### Platzhalter OOC (H3)
- OOC Beispiel: \`[[ Platzhalter Text ]]\`
- Platzhalter Hinweis (OOC hat keinen Einfluss IC)

## Platzhalter Regeln
- Platzhalter Regel 1
- Platzhalter Regel 2
- Platzhalter Regel 3

## Platzhalter Commands
- \`/help\`
- \`/me [platzhalter]\`
- \`/do [platzhalter]\``,
      },
      {
        id: 'combat-system',
        title: 'Platzhalter Combat System',
        category: 'Platzhalter Gameplay',
        content: `# Platzhalter Combat (H1)

## Platzhalter Mechaniken
- Platzhalter Mechanik 1
- Platzhalter Mechanik 2
- Platzhalter Mechanik 3

## Platzhalter Waffen
- Platzhalter legal
- Platzhalter illegal

## Platzhalter Injury / Healing
- Platzhalter Damage
- Platzhalter Healing Items
- Platzhalter Krankenhaus

## Platzhalter Konsequenzen
Platzhalter Text zu Konsequenzen und RP-Folgen.`,
      },
    ],
  },
  {
    id: 'economy',
    name: 'Platzhalter Economy',
    pages: [
      {
        id: 'jobs',
        title: 'Platzhalter Jobs',
        category: 'Platzhalter Economy',
        content: `# Platzhalter Job System (H1)

## Platzhalter Legale Jobs
- Platzhalter Job 1
- Platzhalter Job 2
- Platzhalter Job 3

## Platzhalter Illegale Möglichkeiten
- Platzhalter Aktivität A
- Platzhalter Aktivität B
- Platzhalter Aktivität C

## Platzhalter Geld verdienen
Platzhalter Erklärung: wie man Geld bekommt, wie oft, wie viel, etc.`,
      },
      {
        id: 'businesses',
        title: 'Platzhalter Businesses',
        category: 'Platzhalter Economy',
        content: `# Platzhalter Business (H1)

## Platzhalter Typen
- Platzhalter Retail
- Platzhalter Club / Bar
- Platzhalter Property

## Platzhalter Verwaltung
1. Platzhalter Schritt 1
2. Platzhalter Schritt 2
3. Platzhalter Schritt 3

## Platzhalter Profit
Platzhalter Text: wovon Erfolg abhängt (Lage, Preise, Management, etc.).`,
      },
    ],
  },
];

export default function Wiki() {
  const [selectedCategory, setSelectedCategory] = useState(wikiCategories[0].id);
  const [selectedPage, setSelectedPage] = useState(wikiCategories[0].pages[0].id);

  const currentCategory = wikiCategories.find((cat) => cat.id === selectedCategory);
  const currentPage = currentCategory?.pages.find((page) => page.id === selectedPage);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <div className="fixed inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>
      <div className="fixed inset-0 bg-gradient-radial from-transparent via-[#0a0a0a]/50 to-[#0a0a0a] pointer-events-none"></div>

      <div className="relative z-10 pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8 flex items-center gap-3 animate-fadeInDown">
            <BookOpen className="w-8 h-8 text-[#9c35da]" />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-[#9c35da] to-[#4467db] bg-clip-text text-transparent">
              Wiki &amp; Guide
            </h1>
          </div>

          <div className="grid lg:grid-cols-4 gap-6">
            <div className="lg:col-span-1">
              <div className="bg-[#1a1a1a]/40 backdrop-blur-sm rounded-lg border border-[#9c35da]/20 overflow-hidden sticky top-32">
                <div className="p-4 border-b border-[#9c35da]/20">
                  <h2 className="text-sm font-bold text-[#9c35da] uppercase tracking-wide">Categories</h2>
                </div>

                <div className="max-h-96 overflow-y-auto">
                  {wikiCategories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => {
                        setSelectedCategory(category.id);
                        setSelectedPage(category.pages[0].id);
                      }}
                      className={`w-full text-left px-4 py-3 transition-all duration-300 border-l-2 ${
                        selectedCategory === category.id
                          ? 'bg-[#9c35da]/10 border-l-[#9c35da] text-[#9c35da]'
                          : 'border-l-transparent text-gray-400 hover:text-[#9c35da]'
                      }`}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                {currentCategory?.pages.map((page) => (
                  <button
                    key={page.id}
                    onClick={() => setSelectedPage(page.id)}
                    className={`p-4 rounded-lg border transition-all duration-300 text-left group ${
                      selectedPage === page.id
                        ? 'bg-[#9c35da]/20 border-[#9c35da] shadow-[0_0_30px_rgba(156,53,218,0.2)]'
                        : 'bg-[#1a1a1a]/40 border-[#9c35da]/20 hover:border-[#9c35da]/40 hover:bg-[#1a1a1a]/60'
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <h3 className="font-semibold text-sm text-white group-hover:text-[#9c35da] transition-colors">
                        {page.title}
                      </h3>
                      <ChevronRight
                        className={`w-4 h-4 transition-transform ${
                          selectedPage === page.id ? 'text-[#9c35da]' : 'text-gray-500'
                        }`}
                      />
                    </div>
                  </button>
                ))}
              </div>

              <div className="bg-[#1a1a1a]/40 backdrop-blur-sm rounded-lg border border-[#9c35da]/20 p-8 animate-fadeIn">
                {currentPage && (
                  <article className="prose prose-invert max-w-none">
                    <ReactMarkdown
                      components={{
                        h1: ({ node, ...props }) => (
                          <h1 className="text-3xl font-bold mb-6 text-[#9c35da]" {...props} />
                        ),
                        h2: ({ node, ...props }) => (
                          <h2 className="text-2xl font-bold mt-6 mb-4 text-[#7051d8]" {...props} />
                        ),
                        h3: ({ node, ...props }) => (
                          <h3 className="text-xl font-semibold mt-4 mb-3 text-white" {...props} />
                        ),
                        p: ({ node, ...props }) => (
                          <p className="mb-4 text-gray-300 leading-relaxed" {...props} />
                        ),
                        ul: ({ node, ...props }) => (
                          <ul className="list-disc list-inside mb-4 text-gray-300 space-y-2" {...props} />
                        ),
                        li: ({ node, ...props }) => <li className="ml-2" {...props} />,
                        code: ({ node, ...props }) => (
                          <code
                            className="bg-[#0a0a0a]/60 px-2 py-1 rounded text-[#9c35da] font-mono text-sm"
                            {...props}
                          />
                        ),
                        a: ({ node, ...props }) => (
                          <a
                            className="text-[#9c35da] hover:text-[#7051d8] underline transition-colors"
                            {...props}
                          />
                        ),
                      }}
                    >
                      {currentPage.content}
                    </ReactMarkdown>
                  </article>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
