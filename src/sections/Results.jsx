import { motion } from 'framer-motion'
import { TrendingUp, Users, Scale, Award } from 'lucide-react'
import AnimatedCounter from '../components/AnimatedCounter'

const GOLD = '#C9A14A'

const metrics = [
  {
    icon: Scale,
    prefix: '+',
    value: 500,
    suffix: '',
    label: 'Casos Atendidos',
    sub: 'Processos conduzidos com excelência',
  },
  {
    icon: TrendingUp,
    prefix: '',
    value: 87,
    suffix: '%',
    label: 'Taxa de Êxito',
    sub: 'Em processos previdenciários',
  },
  {
    icon: Users,
    prefix: '+',
    value: 300,
    suffix: '',
    label: 'Clientes Atendidos',
    sub: 'Famílias que recuperaram seus direitos',
  },
  {
    icon: Award,
    prefix: '',
    value: 5,
    suffix: '',
    label: 'Áreas de Atuação',
    sub: 'Especialização focada e aprofundada',
  },
]

export default function Results() {
  return (
    <section id="resultados" className="py-36 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'rgba(201,161,74,0.04)', filter: 'blur(180px)' }}
      />

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="text-center mb-20"
        >
          <span
            className="inline-flex items-center gap-1.5 glass rounded-full px-4 py-1.5 text-xs font-medium border mb-6"
            style={{ borderColor: 'rgba(201,161,74,0.25)', color: GOLD }}
          >
            <TrendingUp className="w-3 h-3" />
            Nossos Resultados
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-6xl font-semibold mb-4 leading-tight">
            Números que{' '}
            <span className="gold-gradient">comprovam</span>
          </h2>
          <p className="text-cream/50 max-w-xl mx-auto text-lg">
            Cada número representa uma família que recuperou seus direitos e sua dignidade.
          </p>
        </motion.div>

        {/* Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((m, i) => {
            const Icon = m.icon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, delay: i * 0.1 }}
                className="glass rounded-2xl p-7 border border-white/[0.06] hover:border-gold/20 transition-all duration-300 text-center group"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 border mx-auto group-hover:scale-110 transition-transform duration-300"
                  style={{ background: 'rgba(201,161,74,0.08)', borderColor: 'rgba(201,161,74,0.2)' }}
                >
                  <Icon className="w-5 h-5" style={{ color: GOLD }} />
                </div>

                <div className="font-serif text-4xl font-semibold mb-2" style={{ color: GOLD }}>
                  <AnimatedCounter end={m.value} prefix={m.prefix} suffix={m.suffix} />
                </div>
                <div className="text-sm font-medium text-cream mb-1">{m.label}</div>
                <div className="text-xs text-cream/40">{m.sub}</div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
