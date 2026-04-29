'use client'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Contact() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Stagger info elements on the left
      gsap.from('.contact-left > div', {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 85%' },
        opacity: 0, y: 30, duration: 1, stagger: 0.15, ease: 'power3.out',
      })
      // Stagger form elements on the right
      gsap.from('.contact-right > div, form > div', {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 85%' },
        opacity: 0, 
        y: 20, 
        duration: 0.8, 
        stagger: 0.1, 
        ease: 'power3.out', 
        delay: 0.2,
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="grid grid-cols-1 md:grid-cols-2 border-t border-border"
    >

      {/* ── LEFT — dark info panel ── */}
      <div className="contact-left bg-dark px-8 md:px-20 py-16 flex flex-col justify-between relative overflow-hidden min-h-[50vh] md:min-h-[70vh]">

   

        {/* Top */}
        <div>
          <div className="flex items-center gap-3 font-mono text-[11px] text-[#555] tracking-[.15em] uppercase mb-12">
            <span className="w-6 h-px bg-[#555]" />
            Get in touch
          </div>
          <h2
            className="font-serif text-cream leading-[.92] tracking-tight"
            style={{ fontSize: 'clamp(3.5rem, 6vw, 6rem)' }}
          >
            Let&apos;s work
            <em className="block italic text-red2">together</em>
          </h2>
        </div>

        {/* Mid */}
        <div className="py-8 border-t border-b border-[#2a2a27]">
          <div className="flex items-center gap-2 font-mono text-xs text-red2 mb-4">
            <span className="w-1.5 h-1.5 bg-red2 rounded-full animate-pulse" />
            Available for work
          </div>
          <p className="text-sm text-[#666] leading-relaxed max-w-xs">
            Open to freelance, collaboration, and full-time opportunities.
            Based in Sylhet — working globally.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-col relative z-10">
          {[
            // ✅ Replace with your real URLs
            { label: 'GitHub',          href: 'https://github.com/maimuna-t-333/', icon: '↗' },
            { label: 'LinkedIn',        href: 'https://www.linkedin.com/in/maimunah-tabassum/', icon: '↗' },
            { label: '+880 1736 788394',href: 'tel:+8801736788394', icon: '→' },
          ].map(l => (
            <a
              key={l.label}
              href={l.href}
              target={l.href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              className="
                font-mono text-xs text-[#555] tracking-wider
                flex items-center justify-between
                py-3.5 border-b border-[#1a1a17]
                hover:text-red2 transition-colors duration-200
                last:border-0
              "
            >
              {l.label}
              <span className="opacity-40 text-[10px]">{l.icon}</span>
            </a>
          ))}
        </div>
      </div>

      {/* ── RIGHT — form ── */}
      <div className="contact-right bg-cream2 px-8 md:px-20 py-16 flex flex-col justify-center">

        <div className="font-mono text-[10px] text-muted tracking-[.2em] uppercase mb-8">
          Send a message
        </div>

        <form className="flex flex-col gap-6" onSubmit={e => e.preventDefault()}>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { label: 'Name',  type: 'text',  placeholder: 'Your name' },
              { label: 'Email', type: 'email', placeholder: 'your@email.com' },
            ].map(f => (
              <div key={f.label} className="flex flex-col gap-2">
                <label className="font-mono text-[10px] text-muted tracking-[.12em] uppercase">
                  {f.label}
                </label>
                <input
                  type={f.type}
                  placeholder={f.placeholder}
                  className="
                    bg-transparent border-0 border-b border-border
                    py-3 text-[.95rem] text-ink outline-none
                    placeholder:text-border
                    focus:border-red transition-colors duration-200
                  "
                />
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-mono text-[10px] text-muted tracking-[.12em] uppercase">
              Message
            </label>
            <textarea
              rows={5}
              placeholder="Tell me about your project..."
              className="
                bg-transparent border-0 border-b border-border
                py-3 text-[.95rem] text-ink outline-none resize-none
                placeholder:text-border
                focus:border-red transition-colors duration-200
              "
            />
          </div>

          <div className="flex items-center justify-between mt-2">
            <button
              type="submit"
              className="
                relative overflow-hidden
                bg-dark text-cream
                font-bold text-sm tracking-widest uppercase
                px-8 py-3.5 rounded-full
                group transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-red/10
              "
            >
              <span className="
                absolute inset-0 bg-red rounded-full
                scale-x-0 group-hover:scale-x-100
                origin-left transition-transform duration-300
                ease-[cubic-bezier(0.16,1,0.3,1)]
              " />
              <span className="relative z-10">Send message →</span>
            </button>
          </div>
        </form>

        {/* Email fallback */}
        <div className="mt-10 pt-8 border-t border-border">
          <a
            href="mailto:maimuna.tabr@gmail.com"
            className="font-serif italic text-muted hover:text-red transition-colors duration-200"
            style={{ fontSize: 'clamp(.9rem, 2vw, 1.1rem)' }}
          >
            maimuna.tabr@gmail.com
          </a>
        </div>

      </div>
    </section>
  )
}