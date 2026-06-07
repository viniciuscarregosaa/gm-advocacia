import { motion } from 'framer-motion'
import { ArrowRight, Shield, Scale } from 'lucide-react'
import { fadeUp } from '../utils/animations'

const GOLD = '#C9A14A'
const WA_LINK = 'https://wa.me/5579998143411'

const ScalesDecoration = () => (
  <svg
    viewBox="0 0 220 220"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-full opacity-15"
  >
    {/* Pole */}
    <line x1="110" y1="20" x2="110" y2="190" stroke="#C9A14A" strokeWidth="2.5" strokeLinecap="round" />
    {/* Base */}
    <line x1="75" y1="190" x2="145" y2="190" stroke="#C9A14A" strokeWidth="3" strokeLinecap="round" />
    {/* Crossbar */}
    <line x1="40" y1="70" x2="180" y2="70" stroke="#C9A14A" strokeWidth="2" strokeLinecap="round" />
    {/* Left chain */}
    <line x1="40" y1="70" x2="40" y2="120" stroke="#C9A14A" strokeWidth="1.5" strokeDasharray="4 3" />
    {/* Right chain */}
    <line x1="180" y1="70" x2="180" y2="120" stroke="#C9A14A" strokeWidth="1.5" strokeDasharray="4 3" />
    {/* Left pan */}
    <ellipse cx="40" cy="124" rx="28" ry="7" stroke="#C9A14A" strokeWidth="1.8" fill="rgba(201,161,74,0.07)" />
    {/* Right pan */}
    <ellipse cx="180" cy="124" rx="28" ry="7" stroke="#C9A14A" strokeWidth="1.8" fill="rgba(201,161,74,0.07)" />
    {/* Top ornament */}
    <circle cx="110" cy="20" r="5" fill="#C9A14A" opacity="0.6" />
    {/* Crossbar center */}
    <circle cx="110" cy="70" r="4" fill="#C9A14A" opacity="0.5" />
  </svg>
)

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[700px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(201,161,74,0.07) 0%, transparent 70%)', filter: 'blur(60px)' }}
      />
      <div
        className="absolute bottom-0 right-0 w-[500px] h-[500px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(201,161,74,0.04), transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-6 py-20 lg:py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div className="space-y-8">
            {/* Badge */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.1 }}
            >
              <span
                className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs font-medium border"
                style={{ borderColor: 'rgba(201,161,74,0.3)', color: GOLD }}
              >
                <Shield className="w-3 h-3" />
                Advocacia Especializada · OAB/SE 17.656 · OAB/SE 15.984
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.2 }}
              className="font-serif text-5xl lg:text-7xl font-semibold leading-[1.08] tracking-tight"
            >
              Seu direito,{' '}
              <span className="gold-gradient">defendido com</span>{' '}
              <em className="not-italic gold-gradient">excelência</em>
            </motion.h1>

            {/* Sub */}
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.3 }}
              className="text-lg text-cream/60 leading-relaxed max-w-lg"
            >
              Advocacia humanizada e especializada em Direito Previdenciário, BPC/LOAS, INSS,
              Direito de Família e Direito do Consumidor. Lutamos pelos seus direitos com
              dedicação e transparência.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href={WA_LINK}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center justify-center gap-3 font-semibold text-sm px-8 py-4 rounded-xl text-background transition-all duration-300 hover:scale-[1.02]"
                style={{
                  background: GOLD,
                  boxShadow: '0 0 30px rgba(201,161,74,0.3)',
                }}
              >
                Consulta Gratuita
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#servicos"
                className="inline-flex items-center justify-center gap-2 font-medium text-sm px-8 py-4 rounded-xl border transition-all duration-300 hover:bg-white/[0.03]"
                style={{ borderColor: 'rgba(201,161,74,0.25)', color: GOLD }}
              >
                Ver Áreas de Atuação
              </a>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.5 }}
              className="flex flex-wrap items-center gap-6 pt-2"
            >
              {[
                { n: '500+', label: 'Casos Atendidos' },
                { n: '87%', label: 'Taxa de Êxito' },
                { n: '5+', label: 'Anos de Experiência' },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span className="font-serif text-2xl font-semibold" style={{ color: GOLD }}>
                    {stat.n}
                  </span>
                  <span className="text-xs text-cream/40">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — scales decoration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            className="hidden lg:flex items-center justify-center relative"
          >
            {/* Glow behind */}
            <div
              className="absolute inset-0 rounded-full pointer-events-none"
              style={{
                background: 'radial-gradient(circle, rgba(201,161,74,0.12), transparent 65%)',
                filter: 'blur(40px)',
              }}
            />

            {/* Foto da equipe — sem corte */}
            <div className="relative z-10 w-full">
              {/* Logo flutuando em cima da foto */}
              <motion.img
                src="/LOGO.jpg"
                alt="GM Advocacia"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-24 left-1/3 -translate-x-1/2 z-20 w-36 h-36 object-contain drop-shadow-2xl"
                style={{ filter: 'drop-shadow(0 0 18px rgba(201,161,74,0.5))' }}
              />
              {/* Glow atrás */}
              <div
                className="absolute -inset-4 rounded-2xl pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(201,161,74,0.15), transparent 70%)', filter: 'blur(30px)' }}
              />
              {/* Cantos dourados */}
              <div className="absolute -top-2 -left-2 w-10 h-10 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-px" style={{ background: GOLD }} />
                <div className="absolute top-0 left-0 h-full w-px" style={{ background: GOLD }} />
              </div>
              <div className="absolute -bottom-2 -right-2 w-10 h-10 pointer-events-none">
                <div className="absolute bottom-0 right-0 w-full h-px" style={{ background: GOLD }} />
                <div className="absolute bottom-0 right-0 h-full w-px" style={{ background: GOLD }} />
              </div>
              <img
                src="/milene_e_gabriel.png"
                alt="Dr. Gabriel Freitas e Dra. Milene Andrade"
                className="relative z-10 w-full h-auto rounded-2xl"
                style={{ border: '1px solid rgba(201,161,74,0.25)' }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: 'linear-gradient(to top, #0A0A0A, transparent)' }}
      />
    </section>
  )
}
