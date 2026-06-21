import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Scale } from 'lucide-react'

const GOLD = '#C9A14A'
const WA_LINK = 'https://wa.me/5579998153411'

export default function CTA() {
  const glowRef = useRef(null)

  useEffect(() => {
    const el = glowRef.current
    if (!el) return
    const onMove = (e) => {
      const rect = el.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      el.style.setProperty('--cx', `${x}px`)
      el.style.setProperty('--cy', `${y}px`)
    }
    el.addEventListener('mousemove', onMove, { passive: true })
    return () => el.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <section className="py-36 relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(201,161,74,0.06), transparent 70%)',
        }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'rgba(201,161,74,0.05)', filter: 'blur(180px)' }}
      />
      <div className="absolute inset-0 grid-bg opacity-20" />

      <div
        ref={glowRef}
        className="relative max-w-4xl mx-auto px-6"
        style={{ '--cx': '50%', '--cy': '50%' }}
      >
        {/* Mouse glow */}
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            background: 'radial-gradient(320px circle at var(--cx) var(--cy), rgba(201,161,74,0.12), transparent 70%)',
          }}
        />

        <div className="text-center relative">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="mb-10"
          >
            <span
              className="inline-flex items-center gap-2 glass rounded-full px-5 py-2 text-xs font-medium border"
              style={{ borderColor: 'rgba(201,161,74,0.3)', color: GOLD }}
            >
              <Scale className="w-3 h-3" />
              Consulta Gratuita e Sem Compromisso
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-3xl sm:text-5xl lg:text-7xl font-semibold leading-tight mb-6"
          >
            Seu direito pode estar mais próximo{' '}
            <span className="gold-gradient">do que você imagina.</span>
          </motion.h2>

          {/* Sub */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="text-lg text-cream/50 max-w-xl mx-auto mb-12"
          >
            Não desista sem antes falar conosco. Muitos benefícios negados podem ser
            revertidos. A consulta inicial é sempre gratuita.
          </motion.p>

          {/* CTA button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.3 }}
          >
            <a
              href={WA_LINK}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-3 font-semibold text-lg px-10 py-5 rounded-2xl text-background transition-all duration-300 hover:scale-[1.03]"
              style={{
                background: GOLD,
                boxShadow: '0 0 50px rgba(201,161,74,0.35), 0 0 100px rgba(201,161,74,0.12)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 0 70px rgba(201,161,74,0.5), 0 0 140px rgba(201,161,74,0.18)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 0 50px rgba(201,161,74,0.35), 0 0 100px rgba(201,161,74,0.12)'
              }}
            >
              Falar com um Advogado Agora
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          {/* Trust line */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-8 text-xs text-cream/30"
          >
            Atendimento humano · Sigilo garantido · Sem compromisso
          </motion.p>
        </div>
      </div>
    </section>
  )
}
