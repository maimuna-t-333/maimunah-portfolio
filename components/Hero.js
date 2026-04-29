'use client'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'

// ── Scramble Text ─────────────────────────────────────────────
function useScramble(ref, text, delay = 0) {
  useEffect(() => {
    const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    let iter = 0
    let interval

    const timeout = setTimeout(() => {
      interval = setInterval(() => {
        if (!ref.current) return
        ref.current.textContent = text
          .split('')
          .map((char, i) => {
            if (char === ' ') return ' '
            if (i < iter) return text[i]
            return CHARS[Math.floor(Math.random() * CHARS.length)]
          })
          .join('')

        if (iter >= text.length) clearInterval(interval)
        iter += 0.5
      }, 60)
    }, delay)

    return () => { clearTimeout(timeout); clearInterval(interval) }
  }, [ref, text, delay])
}

// ── Magnetic Button ───────────────────────────────────────────
function MagneticBtn({ href, children }) {
  const btn = useRef(null)

  const onMove = e => {
    const b = btn.current.getBoundingClientRect()
    const x = e.clientX - b.left - b.width  / 2
    const y = e.clientY - b.top  - b.height / 2
    gsap.to(btn.current, { x: x * 0.3, y: y * 0.3, duration: 0.3, ease: 'power2.out' })
  }

  const onLeave = () => {
    gsap.to(btn.current, { x: 0, y: 0, duration: 0.6, ease: 'elastic.out(1, 0.4)' })
  }

  return (
    <a
      ref={btn}
      href={href}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="
        relative inline-block overflow-hidden
        bg-dark text-cream
        font-sans font-bold text-sm tracking-widest uppercase
        px-8 py-3 md:px-10 md:py-4 rounded-full
        group
      "
    >
      <span className="
        absolute inset-0 bg-red rounded-full
        scale-x-0 group-hover:scale-x-100
        origin-left transition-transform duration-300
        ease-[cubic-bezier(0.16,1,0.3,1)]
      " />
      <span className="relative z-10">{children}</span>
    </a>
  )
}

// ── Hero ──────────────────────────────────────────────────────
export default function Hero() {
  const sectionRef = useRef(null)
  const eyebrowRef = useRef(null)
  const line1Ref   = useRef(null)
  const line2Ref   = useRef(null)
  const bottomRef  = useRef(null)
  const ringRef    = useRef(null)
  const circleRef  = useRef(null)

  useScramble(line1Ref, 'Maimunah', 300)
  useScramble(line2Ref, 'Tabassum', 500)

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

    tl.from(eyebrowRef.current, { opacity: 0, y: 20, duration: 0.6 })
      .from([ringRef.current, circleRef.current], { opacity: 0, scale: 0.8, duration: 1.5, stagger: 0.2 }, '-=0.4')
      .from(line1Ref.current, { opacity: 0, x: -20, duration: 0.8 }, '-=1.2')
      .from(line2Ref.current, { opacity: 0, x: 20, duration: 0.8 }, '-=1.0')
      .from(bottomRef.current.children, { opacity: 0, y: 30, duration: 0.7, stagger: 0.15 }, '-=0.4')
  }, [])

  return (
    <section
      ref={sectionRef}
      // pt-14 on mobile (was pt-24) for less top breathing room
      className="min-h-screen grid grid-rows-[1fr_auto] px-6 md:px-16 pt-14 md:pt-32 relative overflow-hidden"
    >
      {/* Decorative circles — hidden on mobile for cleaner look */}
      <div ref={circleRef} className="
        hidden md:block
        absolute right-24 top-1/2 -translate-y-2/3
        w-64 h-64 lg:w-96 lg:h-96 rounded-full bg-red opacity-[0.07]
        animate-[float_6s_ease-in-out_infinite]
        pointer-events-none
      " />
      <div ref={ringRef} className="
        hidden md:block
        absolute right-12 top-1/2 -translate-y-2/3
        w-[380px] h-[380px] lg:w-[560px] lg:h-[560px]
        rounded-full border border-border
        animate-[spin_24s_linear_infinite]
        pointer-events-none
      " />

      {/* ── TOP: text ── */}
      <div className="relative z-10 flex flex-col items-center text-center justify-center">
        <div className="flex flex-col items-center">
          <p
            ref={eyebrowRef}
            // mb-3 on mobile (was mb-6) — less gap between designation and name
            className="font-mono text-xs md:text-sm lg:text-lg text-muted tracking-[0.12em] md:tracking-[0.15em] mb-3 md:mb-8 px-4 md:px-0"
          >
            {/* Short version on mobile, full on desktop */}
            <span className="md:hidden">Frontend Dev — MERN Stack — Sylhet</span>
            <span className="hidden md:inline">Frontend Developer — MERN Stack — Sylhet, Bangladesh</span>
          </p>

          <h1
            className="font-serif leading-[0.9] tracking-tight"
            aria-label="Maimunah Tabassum"
            style={{ fontSize: 'clamp(3.5rem, 11vw, 11rem)' }}
          >
            <span ref={line1Ref} className="block">Maimunah</span>
            <span ref={line2Ref} className="block italic text-red">Tabassum</span>
          </h1>
        </div>
      </div>

      {/* ── BOTTOM strip ── */}
      <div
        ref={bottomRef}
        className="
          border-t border-border
          py-6 md:py-8
          grid grid-cols-1 md:grid-cols-3
          gap-5 md:gap-8
          items-center md:items-end
          relative z-10
        "
      >
        {/* Bio */}
        <p className="text-sm text-muted leading-relaxed text-center md:text-left">
          <strong className="text-ink text-base md:text-xl font-bold block mb-1">
            Frontend-focused MERN Stack Developer
          </strong>
          Building full-stack web applications with clean code and thoughtful UX.
          Open to freelance &amp; collaboration.
        </p>

        {/* CTA Button */}
        <div className="flex justify-center">
          <MagneticBtn href="#work">View my work ↓</MagneticBtn>
        </div>

        {/* Location / contact */}
        <div className="font-mono text-xs text-muted text-center md:text-right leading-loose">
          Sylhet, Bangladesh<br />
          maimuna.tabr@gmail.com<br />
          +880 1736 788394
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(-66%) scale(1); }
          50%       { transform: translateY(calc(-66% - 20px)) scale(1.03); }
        }
      `}</style>
    </section>
  )
}