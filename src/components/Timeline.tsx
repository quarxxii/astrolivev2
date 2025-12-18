import { useEffect, useRef, useState } from 'react';

interface TimelineItem {
  date: string;
  title: string;
  description: string;
  isCurrent?: boolean;
}

interface TimelineProps {
  items: TimelineItem[];
}

export default function Timeline({ items }: TimelineProps) {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = itemRefs.current.map((ref, index) => {
      if (!ref) return null;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleItems((prev) => new Set(prev).add(index));
            }
          });
        },
        { threshold: 0.3 }
      );

      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, []);

  return (
    <div className="relative">
      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500/20 via-cyan-500/60 to-cyan-500/20"></div>

      <div className="space-y-8">
        {items.map((item, index) => (
          <div
            key={index}
            ref={(el) => (itemRefs.current[index] = el)}
            className={`relative pl-12 transition-all duration-700 ${
              visibleItems.has(index)
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-8'
            }`}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <div
              className={`absolute left-0 w-8 h-8 rounded-full border-4 border-[#0a0a0a] ${
                item.isCurrent
                  ? 'bg-cyan-400 shadow-[0_0_20px_rgba(0,255,204,0.6)]'
                  : 'bg-cyan-500 shadow-[0_0_15px_rgba(0,255,204,0.4)]'
              } transition-all duration-300`}
            ></div>

            <div className="space-y-2">
              <p className="text-cyan-400 text-sm font-semibold tracking-wider">
                {item.date}
              </p>
              <h3
                className={`text-xl font-bold text-white ${
                  item.isCurrent ? 'text-cyan-400' : ''
                }`}
              >
                {item.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
