'use client'
import { useEffect, useState } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = ['About', 'Work', 'Skills', 'Contact']

  return (
    <nav className={`
      fixed top-0 left-0 right-0 z-[100]
      flex justify-between items-center
      px-6 py-4 md:px-16 md:py-6
      transition-all duration-300
      ${scrolled ? 'bg-cream/100 backdrop-blur-lg border-b border-border' : ''}
    `}>

      {/* Logo */}
      <div className="font-mono text-sm md:text-xl text-muted tracking-widest">
        MAIMUNAH.DEV
      </div>

      {/* Desktop links */}
      <div className="hidden md:flex items-center gap-6 lg:gap-10">
        <ul className="flex gap-6 lg:gap-8 list-none">
          {links.map(l => (
            <li key={l}>
              <a
                href={`#${l.toLowerCase()}`}
                className="font-mono text-sm lg:text-lg tracking-widest uppercase text-muted hover:text-ink transition-colors duration-200"
              >
                {l}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2 font-mono text-sm lg:text-base text-red">
          <span className="w-1.5 h-1.5 bg-red rounded-full animate-pulse" />
          Available
        </div>
        <a
          href="/FRONTEND.pdf"
          download="FRONTEND.pdf"
          className="group flex items-center gap-2 font-mono text-xs lg:text-sm border-2 border-black px-3 py-1.5 lg:px-4 lg:py-2 rounded-full hover:bg-gray-700 hover:text-white transition-all duration-200 hover:border-white cursor-pointer whitespace-nowrap"
        >
          Download CV
          <span>
            <img
              src="/download.png"
              alt="CV Icon"
              className="w-3 h-3 lg:w-4 lg:h-4 group-hover:invert transition-all duration-200"
            />
          </span>
        </a>
      </div>

      {/* Mobile right side — available dot + hamburger */}
      <div className="flex md:hidden items-center gap-4">
        <div className="flex items-center gap-1.5 font-mono text-xs text-red">
          <span className="w-1.5 h-1.5 bg-red rounded-full animate-pulse" />
          Available
        </div>
        <button
          className="flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-px bg-ink transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-px bg-ink transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-px bg-ink transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu dropdown */}
      {menuOpen && (
        <div className="absolute top-full left-0 right-0 bg-cream backdrop-blur-lg border-b border-border px-6 py-6 flex flex-col gap-5 md:hidden">
          {links.map(l => (
            
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="font-mono text-sm tracking-widest uppercase text-muted hover:text-ink transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {l}
            </a>
          ))}
          {/* Download CV inside mobile menu too */}
          <a
            href="/FRONTEND.pdf"
            download="FRONTEND.pdf"
            className="inline-flex items-center gap-2 font-mono text-sm border-2 border-black px-4 py-2 rounded-full w-fit hover:bg-gray-700 hover:text-white hover:border-white transition-all duration-200"
            onClick={() => setMenuOpen(false)}
          >
            Download CV
            <img src="/download.png" alt="CV Icon" className="w-4 h-4" />
          </a>
        </div>
      )}

    </nav>
  )
}