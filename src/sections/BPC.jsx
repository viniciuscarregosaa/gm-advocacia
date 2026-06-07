import { motion } from 'framer-motion'
import { UserCheck, Accessibility, Wallet, ArrowRight } from 'lucide-react'
import GlowCard from '../components/GlowCard'

const GOLD = '#C9A14A'
const WA_LINK = 'https://wa.me/5579998143411'

const eligibility = [
  {
    icon: UserCheck,
    title: 'Idosos com 65 anos ou mais',
    description:
      'Pessoas com 65 anos ou mais que não possuem meios de prover a própria subsistência ou de tê-la provida pela família.',
  },
  {
    icon: Accessibility,
    title: 'Pessoas com Deficiência',
    description:
      'Pessoas com impedimentos de longo prazo (físico, mental, intelectual ou sensorial) que dificultem a participação plena na sociedade.',
  },
  {
    icon: Wallet,
    title: 'Baixa Renda Familiar',
    description:
      'Renda familiar per capita inferior a 1/4 do salário mínimo. Em alguns casos, renda de até 1/2 salário mínimo pode ser considerada.',
  },
]

export default function BPC() {
  return (
    <section id="bpc" className="py-36 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-25" />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'rgba(201,161,74,0.04)', filter: 'blur(180px)' }}
      />

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Header */}
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
            BPC / LOAS
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-6xl font-semibold mb-4 leading-tight">
            Quem tem direito ao{' '}
            <span className="gold-gradient">BPC?</span>
          </h2>
          <p className="text-cream/50 max-w-2xl mx-auto text-lg">
            O Benefício de Prestação Continuada é um direito garantido pela Constituição Federal.
            Muitas pessoas que têm direito não o recebem por falta de informação ou por terem o pedido negado indevidamente.
          </p>
        </motion.div>

        {/* BIG highlight box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75 }}
          className="relative rounded-2xl p-8 lg:p-12 mb-14 text-center overflow-hidden"
          style={{
            background: 'rgba(201,161,74,0.05)',
            border: '1px solid rgba(201,161,74,0.3)',
          }}
        >
          {/* Corner accents */}
          <div className="absolute top-0 left-0 w-16 h-16 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-px" style={{ background: GOLD }} />
            <div className="absolute top-0 left-0 h-full w-px" style={{ background: GOLD }} />
          </div>
          <div className="absolute bottom-0 right-0 w-16 h-16 pointer-events-none">
            <div className="absolute bottom-0 right-0 w-full h-px" style={{ background: GOLD }} />
            <div className="absolute bottom-0 right-0 h-full w-px" style={{ background: GOLD }} />
          </div>

          <div
            className="absolute top-0 left-0 right-0 h-px"
            style={{ background: `linear-gradient(90deg, transparent, ${GOLD}50, transparent)` }}
          />

          <p className="font-serif text-2xl lg:text-4xl font-semibold leading-snug mb-4" style={{ color: GOLD }}>
            NÃO É NECESSÁRIO TER CONTRIBUÍDO AO INSS
          </p>
          <p className="text-cream/60 text-lg max-w-2xl mx-auto">
            O BPC/LOAS <strong className="text-cream">não é aposentadoria</strong> e não exige tempo de contribuição.
            É um benefício assistencial voltado para quem mais precisa.
          </p>
        </motion.div>

        {/* Eligibility cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {eligibility.map((e, i) => {
            const Icon = e.icon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, delay: i * 0.1 }}
              >
                <GlowCard className="glass rounded-2xl p-7 border border-white/[0.06] hover:border-gold/20 transition-all duration-300 h-full">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 border"
                    style={{ background: 'rgba(201,161,74,0.08)', borderColor: 'rgba(201,161,74,0.2)' }}
                  >
                    <Icon className="w-5 h-5" style={{ color: GOLD }} />
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-cream mb-3">{e.title}</h3>
                  <p className="text-sm text-cream/50 leading-relaxed">{e.description}</p>
                </GlowCard>
              </motion.div>
            )
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.3 }}
          className="text-center"
        >
          <p className="text-cream/50 mb-6 text-base">
            Teve o BPC negado? Seu caso pode ter sido avaliado incorretamente. Podemos recorrer.
          </p>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-3 font-semibold text-sm px-8 py-4 rounded-xl text-background transition-all duration-300 hover:scale-[1.02]"
            style={{
              background: GOLD,
              boxShadow: '0 0 30px rgba(201,161,74,0.25)',
            }}
          >
            Verificar Meu Direito Gratuitamente
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
