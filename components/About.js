'use client'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const STATS = [
  { n: '3',   l: 'Projects shipped' },
  { n: '10+',  l: 'Technologies' },
  { n: "'24", l: 'Started CS degree' },
]

export default function About() {
  const sectionRef = useRef(null)
  const headRef    = useRef(null)
  const bodyRef    = useRef(null)
  const statsRef   = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading slides up
      gsap.from(headRef.current, {
        scrollTrigger: { trigger: headRef.current, start: 'top 85%' },
        opacity: 0, y: 60, duration: 1, ease: 'power3.out',
      })
      // Body text fades
      gsap.from(bodyRef.current.children, {
        scrollTrigger: { trigger: bodyRef.current, start: 'top 80%' },
        opacity: 0, y: 30, duration: 0.8, stagger: 0.15, ease: 'power3.out',
      })
      // Stats count up feel
      gsap.from(statsRef.current.children, {
        scrollTrigger: { trigger: statsRef.current, start: 'top 85%' },
        opacity: 0, y: 20, duration: 0.6, stagger: 0.1, ease: 'power2.out',
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="about"
      className="px-8 md:px-16 py-20 md:py-32 grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12 md:gap-24 items-start"
    >
      {/* Sidebar */}
      <div className="md:sticky md:top-32">
        
        <div className="font-serif text-6xl md:text-8xl  italic select-none leading-none">About <br/> <span className='text-muted'>Myself</span> </div>
      </div>

      {/* Content */}
      <div>
        <h2
          ref={headRef}
          className="font-serif leading-[1.15] tracking-tight mb-8 text-balance max-w-3xl"
          style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
        >
          I craft digital experiences that are{' '}
          <em className="text-red italic">fast, beautiful,</em>{' '}
          and built to last.
        </h2>

        <div ref={bodyRef}>
          <p className="text-base text-muted leading-relaxed mb-5">
            Frontend-focused developer with hands-on experience building{' '}
            <strong className="text-ink">full-stack web applications</strong>{' '}
            using Next.js, React, Node.js, and MongoDB. Proficient in REST API
            integration, JWT authentication, responsive UI design, and state management.
          </p>
          <p className="text-base text-muted leading-relaxed mb-6">
            Currently pursuing my{' '}
            <strong className="text-ink">BSc in Computer Science & Engineering</strong>{' '}
            at Sylhet Engineering College (2024–2028). I deliver scalable,
            component-based solutions with clean, maintainable code.
          </p>
          <div className="inline-flex items-center gap-2 font-mono text-xs text-red border border-red rounded-full px-4 py-1.5">
            <span className="w-1.5 h-1.5 bg-red rounded-full animate-pulse" />
            Available for work
          </div>
        </div>

        {/* Stats */}
        <div
          ref={statsRef}
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-10 pt-10 border-t border-border"
        >
          {STATS.map(s => (
            <div key={s.l} className="group/stat cursor-default transition-transform duration-300 hover:-translate-y-1">
              <div className="font-serif text-5xl italic text-ink leading-none group-hover/stat:text-red transition-colors duration-500">{s.n}</div>
              <div className="font-mono text-xs text-muted mt-1.5">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}