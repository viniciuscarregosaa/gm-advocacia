import { useState, useEffect } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const GOLD = '#C9A14A'
const WA_LINK = 'https://wa.me/5579998143411'

const links = [
  { label: 'Início', href: '#inicio' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'BPC/LOAS', href: '#bpc' },
  { label: 'Resultados', href: '#resultados' },
  { label: 'Sobre', href: '#sobre' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled
          ? 'rgba(10,10,10,0.92)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(201,161,74,0.12)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 lg:h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-3 group">
          <img src="/LOGO.jpg" alt="GM Advocacia" className="w-10 h-10 object-contain" />
          <div className="hidden sm:block">
            <div className="font-serif text-sm font-semibold text-cream leading-none">
              Gabriel Freitas <span style={{ color: GOLD }}>&</span> Milene Andrade
            </div>
            <div className="text-[10px] text-cream/40 tracking-widest uppercase mt-0.5">
              Advocacia e Consultoria Jurídica
            </div>
          </div>
        </a>

        {/* Desktop links */}
        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm text-cream/60 hover:text-cream transition-colors duration-200 relative group"
            >
              {l.label}
              <span
                className="absolute -bottom-0.5 left-0 w-0 h-px group-hover:w-full transition-all duration-300"
                style={{ background: GOLD }}
              />
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-lg transition-all duration-300 hover:opacity-90"
            style={{
              background: GOLD,
              color: '#0A0A0A',
            }}
          >
            <Phone className="w-3.5 h-3.5" />
            Agendar Atendimento
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="lg:hidden p-2 text-cream/60 hover:text-cream"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden overflow-hidden"
            style={{ background: 'rgba(10,10,10,0.97)', borderTop: '1px solid rgba(201,161,74,0.1)' }}
          >
            <nav className="px-6 py-6 flex flex-col gap-5">
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-sm text-cream/70 hover:text-cream transition-colors"
                >
                  {l.label}
                </a>
              ))}
              <a
                href={WA_LINK}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 text-sm font-semibold px-5 py-3 rounded-lg mt-2"
                style={{ background: GOLD, color: '#0A0A0A' }}
              >
                <Phone className="w-3.5 h-3.5" />
                Agendar Atendimento
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
