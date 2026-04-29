'use client'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const SKILLS = [
  { title: 'Languages',   items: ['JavaScript','TypeScript','C / C++','HTML5','CSS3'] },
  { title: 'Frameworks',  items: ['Next.js','React.js','Express.js','Node.js'] },
  { title: 'Libraries',   items: ['TanStack Query','Tailwind CSS','Zustand','Axios'] },
  { title: 'Tools & DB',  items: ['MongoDB','MySql','Firebase','Git / GitHub','Figma'] },
]

export default function Skills() {
  const sectionRef = useRef(null)
  const gridRef    = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(gridRef.current.children, {
        scrollTrigger: { trigger: gridRef.current, start: 'top 85%' },
        opacity: 0,
        y: 40,
        duration: 0.7,
        stagger: 0.1,
        ease: 'power3.out',
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="skills" className="px-8 md:px-16 py-20 md:py-32 bg-cream2">

      <h2
        className="font-serif leading-[0.95] tracking-tight mb-12 md:mb-16"
        style={{ fontSize: 'clamp(3rem, 6vw, 6rem)' }}
      >
        My <em className="italic text-red">toolkit</em>
      </h2>

     <div
  ref={gridRef}
  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-border"
>
        {SKILLS.map((group, i) => (
          <div
  key={group.title}
  className={`p-8 md:p-10 bg-cream border-b border-border ${i < SKILLS.length - 1 ? 'border-r' : ''}`}
>
            <div className="font-mono text-[10px] tracking-[0.15em] uppercase text-muted mb-8 pb-4 border-b border-border">
              {group.title}
            </div>
            {group.items.map(item => (
              <div
                key={item}
                className="flex justify-between items-center py-2.5 border-b border-cream2 last:border-0 text-[0.95rem] text-ink hover:text-red hover:translate-x-1 group/item transition-all duration-300 ease-out cursor-default"
              >
                {item}
                <span className="w-1.5 h-1.5 bg-red rounded-full opacity-0 scale-50 group-hover/item:opacity-100 group-hover/item:scale-100 transition-all duration-300 flex-shrink-0" />
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="flex justify-between items-center mt-10 pt-5 border-t border-border">
        <span className="font-mono text-[10px] text-muted tracking-[.2em] uppercase">
          Always learning
        </span>
        <span className="font-mono text-[10px] text-muted tracking-[.2em] uppercase">
          2024 — present
        </span>
      </div>
    </section>
  )
}
