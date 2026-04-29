'use client'
import { useEffect, useRef } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const PROJECTS = [
  {
    num: '01',
    name: 'SmartShop',
    desc: 'AI-powered e-commerce platform with role-based dashboards for buyers, sellers, admins & delivery agents. Integrated AI chatbot, voice recognition, and real-time order tracking.',
    tags: ['Next.js','NextAuth','React','Node.js','Express','MongoDB','Stripe','Axios'],
    image: '/Smartshop.jpeg',
    
    demo:   'https://smartshop-indol.vercel.app/',
    client: 'https://github.com/NazmulhaqueD/smart-shop',
    server: 'https://github.com/NazmulhaqueD/smart-shop-server',
    year:   '2025',
  },
  {
    num: '02',
    name: 'Blockwise',
    desc: 'Full-stack apartment rental & management platform with JWT auth, Stripe payments for rent and memberships, and a full admin dashboard with CRUD over users and properties.',
    tags: ['React','Vite','Firebase','Node.js','Express','MongoDB','Stripe','Axios'],
    image: '/Blockwise.jpeg',
    demo:   'https://blockwise-client.web.app/',
    client: 'https://github.com/maimuna-t-333/blockwise-client',
    server: 'https://github.com/maimuna-t-333/blockwise-server',
    year:   '2025',
  },
  {
    num: '03',
    name: 'Share A Bite',
    desc: 'Community food sharing platform reducing waste. Users post, browse, filter and claim surplus food locally. Firebase auth with protected routes and real-time availability.',
    tags: ['React','Vite','Firebase','Node.js','MongoDB','Axios'],
    image: '/ShareABite.jpeg',
    demo:   'https://food-sharing-platform-client.web.app/',
    client: 'https://github.com/maimuna-t-333/food-sharing-platform-client',
    server: 'https://github.com/maimuna-t-333/food-sharing-platform-server',
    year:   '2025',
  },
  {
    num: '04',
    name: 'Hobby Hub',
    desc: 'Community platform for hobby enthusiasts to connect & share interests',
    tags: ['React','Vite','Firebase','Node.js','MongoDB','Axios'],
    image: '/HobbyHub.jpeg',
    demo:   'https://hobby-hub-4cfce.web.app/',
    client: 'https://github.com/maimuna-t-333/hobby-hub-client',
    server: 'https://github.com/maimuna-t-333/hobby-hub-server',
    year:   '2025',
  },
]

export default function Work() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Each project row animates in
      gsap.utils.toArray('.proj-row').forEach((row, i) => {
        gsap.from(row, {
          scrollTrigger: { trigger: row, start: 'top 88%' },
          opacity: 0,
          y: 50,
          duration: 0.8,
          delay: i * 0.05,
          ease: 'power3.out',
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="work" className="bg-dark px-8 md:px-16 pt-10 pb-20 md:pt-16  md:pb-32">

      {/* Header */}
      <div className="flex justify-between items-baseline mb-10 border-b border-[#2a2a27] pb-6">
        <h2
          className="font-serif text-cream leading-[0.95] tracking-tight"
          style={{ fontSize: 'clamp(3rem, 6vw, 6rem)' }}
        >
          Selected<br />
          <em className="text-red2 italic">Work</em>
        </h2>
        <span className="font-mono text-xs text-[#555]">({PROJECTS.length} projects)</span>
      </div>

      {/* Project rows */}
      <div>
        {PROJECTS.map(p => (
          <article
            key={p.num}
            className="
              proj-row
              border-t border-[#2a2a27] py-12
              grid grid-cols-1 md:grid-cols-[3.5rem_1fr_280px_14rem] gap-8 items-start
              group
              transition-all duration-300 ease-out
              md:hover:pl-6 -ml-1
            "
          >
            {/* Number */}
            <div className="font-mono text-xs text-[#444] pt-1 group-hover:text-red2 transition-colors hidden md:block">
              {p.num}
            </div>

            {/* Text */}
            <div>
              <h3 className="font-serif text-cream text-4xl leading-tight mb-3 group-hover:text-red2 transition-colors duration-200">
                <span className="md:hidden text-xs font-mono text-red2 mr-2 align-middle">{p.num}</span>{p.name}
              </h3>
              <p className="text-sm text-[#666] leading-relaxed max-w-lg mb-5">
                {p.desc}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {p.tags.map(t => (
                  <span
                    key={t}
                    className="font-mono text-[10px] text-[#555] border border-[#2a2a27] rounded-full px-2.5 py-0.5 group-hover:border-[#3a3a37] group-hover:text-[#888] transition-colors"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Screenshot */}
            {/* ✅ Add screenshots to public/projects/ */}
            <div className="overflow-hidden rounded border border-[#2a2a27] h-48 md:h-40 relative">
              <Image
                src={p.image}
                alt={p.name}
                width={400}
                height={240}
                className="w-full h-full object-cover grayscale-[50%] brightness-75 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-105 transition-all duration-500"
              />
            </div>

            {/* Links */}
            <div className="flex flex-row md:flex-col items-center md:items-end gap-6 md:gap-3 border-t border-[#2a2a27] md:border-0 mt-4 md:mt-0 pt-6 md:pt-1">
              {[
                { label: 'Live demo ↗',   href: p.demo   },
                { label: 'Client repo ↗', href: p.client },
                { label: 'Server repo ↗', href: p.server },
              ].map(l => (
                <a
                  key={l.label}
                  href={l.href}
                  target="_blank"
                  rel="noreferrer"
                  className="font-mono text-xs text-[#555] hover:text-red2 transition-colors tracking-wide"
                >
                  {l.label}
                </a>
              ))}
              <span className="font-mono text-xs text-[#333] mt-auto">{p.year}</span>
            </div>
          </article>
        ))}

        {/* Last border */}
        <div className="border-t border-[#2a2a27]" />
      </div>
    </section>
  )
}