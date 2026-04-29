const TECHS = [
  'Next.js','React.js','Node.js','MongoDB','TypeScript',
  'Tailwind CSS','Stripe','Firebase','REST APIs','JWT Auth',
  'Express.js','Zustand','TanStack Query','Figma','Vercel',
]

export default function Marquee() {
  const items = [...TECHS, ...TECHS]

  return (
    <div 
      className="bg-dark py-3.5 overflow-hidden border-y border-[#2a2a27] group"
      aria-hidden="true"
    >
      <div className="flex w-max animate-[marquee_22s_linear_infinite] group-hover:[animation-play-state:paused] cursor-default">
        {items.map((tech, i) => (
          <span
            key={i}
            className="font-mono text-xs text-[#555] tracking-widest whitespace-nowrap px-8"
          >
            <span className="text-red2 mr-4">★</span>
            {tech}
          </span>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  )
}