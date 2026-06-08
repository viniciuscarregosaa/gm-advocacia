import { motion } from 'framer-motion'
import { Scale, BookOpen, CheckCircle2 } from 'lucide-react'
import { slideInLeft, slideInRight } from '../utils/animations'

const GOLD = '#C9A14A'

const advocates = [
  {
    name: 'Dr. Gabriel Freitas',
    oab: 'OAB/SE 17.656',
    photo: '/gabriel-advogado.png',
  },
  {
    name: 'Dra. Milene Andrade',
    oab: 'OAB/SE 15.984',
    photo: '/milene-advogada.png',
  },
]

export default function About() {
  return (
    <section id="sobre" className="py-36 relative overflow-hidden">
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'rgba(201,161,74,0.03)', filter: 'blur(150px)' }}
      />

      <div className="max-w-7xl mx-auto px-6">

        {/* — Sobre o escritório — */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          {/* Logo */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center gap-6"
          >
            {/* Logo com cantos decorativos */}
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-px" style={{ background: GOLD }} />
                <div className="absolute top-0 left-0 h-full w-px" style={{ background: GOLD }} />
              </div>
              <div className="absolute -bottom-4 -right-4 w-12 h-12 pointer-events-none">
                <div className="absolute bottom-0 right-0 w-full h-px" style={{ background: GOLD }} />
                <div className="absolute bottom-0 right-0 h-full w-px" style={{ background: GOLD }} />
              </div>
              <div
                className="absolute inset-0 rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(201,161,74,0.2), transparent 70%)', filter: 'blur(40px)', transform: 'scale(1.5)' }}
              />
              <motion.img
                src="/LOGO.jpg"
                alt="GM Advocacia"
                className="relative z-10 w-56 h-56 object-contain"
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              />
            </div>

            {/* Badge — no fluxo normal, sem absolute, sem overflow */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
              className="glass rounded-xl px-5 py-2.5 border text-center"
              style={{ borderColor: 'rgba(201,161,74,0.25)' }}
            >
              <div className="font-serif text-sm font-semibold" style={{ color: GOLD }}>
                Advocacia Especializada
              </div>
              <div className="text-[10px] text-cream/40 tracking-widest uppercase mt-0.5">
                Com Excelência e Humanidade
              </div>
            </motion.div>
          </motion.div>

          {/* Texto */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-7"
          >
            <div>
              <span
                className="inline-flex items-center gap-1.5 glass rounded-full px-4 py-1.5 text-xs font-medium border mb-6"
                style={{ borderColor: 'rgba(201,161,74,0.25)', color: GOLD }}
              >
                Sobre o Escritório
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold mb-5 leading-[1.1]">
                Advocacia com{' '}
                <span className="gold-gradient">propósito e</span>{' '}
                dedicação
              </h2>
              <p className="text-cream/55 leading-relaxed mb-4">
                O escritório Gabriel Freitas & Milene Andrade nasceu da convicção de que todos
                merecem acesso a uma defesa jurídica de qualidade, independentemente de sua
                condição financeira.
              </p>
              <p className="text-cream/55 leading-relaxed">
                Somos especializados nas áreas que mais impactam a vida das pessoas: benefícios
                previdenciários, BPC/LOAS, direito de família e direito do consumidor. Nossa
                missão é lutar com determinação para que cada cliente receba o que é seu por
                direito.
              </p>
            </div>
            <div className="flex items-center gap-6 flex-wrap">
              {[
                { icon: Scale, label: 'Ética e Transparência' },
                { icon: BookOpen, label: 'Especialização Técnica' },
                { icon: CheckCircle2, label: 'Resultados Concretos' },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2">
                  <Icon className="w-4 h-4 flex-shrink-0" style={{ color: GOLD }} />
                  <span className="text-sm text-cream/60">{label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* — Quem vai lutar por você — */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="text-center mb-16"
        >
          <span
            className="inline-flex items-center gap-1.5 glass rounded-full px-4 py-1.5 text-xs font-medium border mb-6"
            style={{ borderColor: 'rgba(201,161,74,0.25)', color: GOLD }}
          >
            Nossa Equipe
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight">
            Quem vai{' '}
            <span className="gold-gradient">lutar por você</span>
          </h2>
          <p className="text-cream/50 max-w-lg mx-auto mt-4 text-lg">
            Profissionais dedicados, preparados e comprometidos com o seu caso do início ao fim.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {advocates.map((adv, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="group relative"
            >
              {/* Card */}
              <div
                className="glass rounded-3xl overflow-hidden border transition-all duration-500 group-hover:border-gold/30"
                style={{ borderColor: 'rgba(201,161,74,0.1)' }}
              >
                {/* Top gold line */}
                <div
                  className="h-px w-full"
                  style={{ background: `linear-gradient(90deg, transparent, ${GOLD}50, transparent)` }}
                />

                {/* Foto */}
                <div className="relative overflow-hidden">
                  <img
                    src={adv.photo}
                    alt={adv.name}
                    className="w-full h-72 object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Gradient overlay bottom */}
                  <div
                    className="absolute bottom-0 left-0 right-0 h-28 pointer-events-none"
                    style={{ background: 'linear-gradient(to top, rgba(10,10,10,0.95), transparent)' }}
                  />
                </div>

                {/* Info */}
                <div className="px-7 pb-7 -mt-6 relative z-10 text-center">
                  <div className="font-serif text-2xl font-semibold text-cream mb-1">
                    {adv.name}
                  </div>
                  <div
                    className="inline-flex items-center gap-1.5 text-xs font-medium rounded-full px-3 py-1 mt-1"
                    style={{ background: 'rgba(201,161,74,0.1)', color: GOLD }}
                  >
                    {adv.oab}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
