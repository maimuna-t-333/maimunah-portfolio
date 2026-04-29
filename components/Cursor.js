'use client'
import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dot  = useRef(null)
  const ring = useRef(null)

  useEffect(() => {
        let x = 0, y = 0

    const move = e => { x = e.clientX; y = e.clientY }
    window.addEventListener('mousemove', move)

    const grow   = () => ring.current?.classList.add('!w-16', '!h-16', '!opacity-20')
    const shrink = () => ring.current?.classList.remove('!w-16', '!h-16', '!opacity-20')

    // Use Event Delegation to handle dynamic elements
    const onOver = e => { if (e.target.closest('a, button')) grow() }
    const onOut  = e => { if (e.target.closest('a, button')) shrink() }

    const animate = () => {
      if (dot.current) {
        dot.current.style.left = x + 'px'
        dot.current.style.top  = y + 'px'
      }
      if (ring.current) {
        ring.current.style.left = x + 'px'
        ring.current.style.top  = y + 'px'
      }
      requestAnimationFrame(animate)
    }
    animate()

    window.addEventListener('mouseover', onOver)
    window.addEventListener('mouseout', onOut)

    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseover', onOver)
      window.removeEventListener('mouseout', onOut)
      cancelAnimationFrame(animate)
    }
  }, [])

  return (
    <>
      {/* Small dot — follows mouse exactly */}
      <div
        ref={dot}
        className="fixed z-[9999] w-2 h-2 bg-red rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2"
      />
      {/* Lagging ring */}
      <div
        ref={ring}
        className="fixed z-[9998] w-9 h-9 border border-red rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2 opacity-50 transition-[width,height,opacity] duration-300"
      />
    </>
  )
}