import { useEffect, useRef } from 'react'

const GOLD = '#C9A14A'

// Tamanhos (px) — devem bater com w-* do JSX
const DOT_SIZE = 6   // w-1.5 = 6px
const RING_SIZE = 32 // w-8  = 32px

export default function CustomCursor() {
  // Não renderiza em dispositivos touch
  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null
  }

  const dotRef  = useRef(null)
  const ringRef = useRef(null)
  const mouse   = useRef({ x: -200, y: -200 })
  const ring    = useRef({ x: -200, y: -200 })
  const rafRef  = useRef(null)

  useEffect(() => {
    const onMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY }
      // Dot: centraliza subtraindo metade do tamanho
      if (dotRef.current) {
        dotRef.current.style.transform =
          `translate(${e.clientX - DOT_SIZE / 2}px, ${e.clientY - DOT_SIZE / 2}px)`
      }
    }

    const animate = () => {
      ring.current.x += (mouse.current.x - ring.current.x) * 0.12
      ring.current.y += (mouse.current.y - ring.current.y) * 0.12
      if (ringRef.current) {
        // Ring: centraliza subtraindo metade do tamanho
        ringRef.current.style.transform =
          `translate(${ring.current.x - RING_SIZE / 2}px, ${ring.current.y - RING_SIZE / 2}px)`
      }
      rafRef.current = requestAnimationFrame(animate)
    }
    rafRef.current = requestAnimationFrame(animate)

    window.addEventListener('mousemove', onMove, { passive: true })

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <>
      {/* Dot central */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full pointer-events-none z-[9999]"
        style={{ background: GOLD }}
      />
      {/* Anel externo */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9998] border transition-opacity duration-200"
        style={{ borderColor: `${GOLD}70` }}
      />
    </>
  )
}
