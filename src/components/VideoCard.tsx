interface VideoCardProps {
  videoId: string;
  title: string;
  delay?: number;
}

export default function VideoCard({ videoId, title, delay = 0 }: VideoCardProps) {
  return (
    <div
      className="group opacity-0 animate-fadeIn"
      style={{ animationDelay: `${delay}ms`, animationFillMode: 'forwards' }}
    >
      <div className="bg-[#1a1a1a]/40 backdrop-blur-sm rounded-xl overflow-hidden border border-cyan-500/10 transition-all duration-300 hover:border-cyan-500/40 hover:shadow-[0_0_30px_rgba(0,255,204,0.15)] hover:scale-[1.02]">
        <div className="aspect-video bg-black">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
            loading="lazy"
          ></iframe>
        </div>
        <div className="p-5">
          <h3 className="text-white font-semibold text-lg group-hover:text-cyan-400 transition-colors duration-300">
            {title}
          </h3>
        </div>
      </div>
    </div>
  );
}
