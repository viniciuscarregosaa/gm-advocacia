import { useRef } from 'react'

export default function GlowCard({ children, className = '' }) {
  const cardRef = useRef(null)

  const onMove = (e) => {
    const el = cardRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    el.style.setProperty('--gx', `${x}px`)
    el.style.setProperty('--gy', `${y}px`)
    el.style.setProperty('--opacity', '1')
  }

  const onLeave = () => {
    const el = cardRef.current
    if (!el) return
    el.style.setProperty('--opacity', '0')
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`relative overflow-hidden ${className}`}
      style={{ '--gx': '50%', '--gy': '50%', '--opacity': '0' }}
    >
      <div
        className="pointer-events-none absolute inset-0 rounded-[inherit] transition-opacity duration-500"
        style={{
          background:
            'radial-gradient(280px circle at var(--gx) var(--gy), rgba(201,161,74,0.08), transparent 70%)',
          opacity: 'var(--opacity)',
        }}
      />
      {children}
    </div>
  )
}
