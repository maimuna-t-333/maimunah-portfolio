'use client'
import { useEffect, useState } from 'react'

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false)
  const [menuOpen,  setMenuOpen]  = useState(false)

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
      px-8 py-6 md:px-16
      transition-all duration-300
      ${scrolled ? 'bg-cream/100 backdrop-blur-lg border-b border-border' : ''}
    `}>
      {/* Logo */}
      <div className="font-mono text-xl text-muted tracking-widest">
        MAIMUNAH.DEV
      </div>

      {/* Desktop links */}
      <div className="hidden md:flex items-center gap-10">
        <ul className="flex gap-8 list-none">
          {links.map(l => (
            <li key={l}>
              <a
                href={`#${l.toLowerCase()}`}
                className="font-mono text-lg tracking-widest uppercase text-muted hover:text-ink transition-colors duration-200"
              >
                {l}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2 font-mono text-l text-red">
          <span className="w-1.5 h-1.5 bg-red rounded-full animate-pulse" />
          Available
        </div>
        <a 
          href="/FRONTEND.pdf"
          download="FRONTEND.pdf"
          className="group flex items-center gap-2 font-mono text-sm border-2 border-black px-4 py-2 rounded-full hover:bg-gray-700 hover:text-white transition-all duration-200 hover:border-white cursor-pointer"
        >
          Download CV 
          <span><img src="/download.png" alt="CV Icon" className="w-4 h-4 group-hover:invert transition-all duration-200" /></span>
        </a>
      </div>
      

      {/* Mobile hamburger */}
      <button
        className="md:hidden flex flex-col gap-1.5 p-1"
        onClick={() => setMenuOpen(o => !o)}
        aria-label="Toggle menu"
      >
        <span className={`block w-6 h-px bg-ink transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
        <span className={`block w-6 h-px bg-ink transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
        <span className={`block w-6 h-px bg-ink transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 right-0 bg-cream/97 backdrop-blur-lg border-b border-border px-8 py-6 flex flex-col gap-5 md:hidden">
          {links.map(l => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="font-mono text-sm tracking-widest uppercase text-muted hover:text-ink"
              onClick={() => setMenuOpen(false)}
            >
              {l}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}