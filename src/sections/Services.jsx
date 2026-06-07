import { motion } from 'framer-motion'
import { Scale, Heart, Users, ShoppingCart, FileText, ArrowRight } from 'lucide-react'
import GlowCard from '../components/GlowCard'

const GOLD = '#C9A14A'
const WA_LINK = 'https://wa.me/5579998143411'

const services = [
  {
    icon: Heart,
    title: 'BPC/LOAS',
    description:
      'Benefício de Prestação Continuada para idosos acima de 65 anos e pessoas com deficiência de baixa renda. Não é necessário ter contribuído ao INSS.',
    highlight: true,
  },
  {
    icon: Scale,
    title: 'Direito Previdenciário',
    description:
      'Aposentadoria por idade, invalidez, especial e por tempo de contribuição. Revisão de benefícios e recursos administrativos.',
    highlight: false,
  },
  {
    icon: FileText,
    title: 'Benefícios do INSS',
    description:
      'Auxílio-doença, pensão por morte, salário-maternidade e demais benefícios previdenciários. Acompanhamento do processo do início ao fim.',
    highlight: false,
  },
  {
    icon: Users,
    title: 'Direito de Família',
    description:
      'Divórcio, guarda e alimentos. Defendemos os interesses das famílias com sensibilidade, responsabilidade e agilidade.',
    highlight: false,
  },
  {
    icon: ShoppingCart,
    title: 'Direito do Consumidor',
    description:
      'Proteção contra práticas abusivas, cobranças indevidas, negativação indevida e problemas com serviços e produtos.',
    highlight: false,
  },
]

export default function Services() {
  return (
    <section id="servicos" className="py-36 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'rgba(201,161,74,0.03)', filter: 'blur(150px)' }}
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
            <Scale className="w-3 h-3" />
            Áreas de Atuação
          </span>
          <h2 className="font-serif text-4xl lg:text-6xl font-semibold mb-4 leading-tight">
            Especialistas em{' '}
            <span className="gold-gradient">suas causas</span>
          </h2>
          <p className="text-cream/50 max-w-xl mx-auto text-lg">
            Atuação focada nas áreas que mais afetam o dia a dia das pessoas. Cada caso tratado com atenção individual.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => {
            const Icon = s.icon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, delay: i * 0.09 }}
              >
                <GlowCard
                  className={`glass rounded-2xl p-7 border h-full transition-all duration-300 hover:-translate-y-1 ${
                    s.highlight
                      ? 'border-gold/30'
                      : 'border-white/[0.06] hover:border-gold/20'
                  }`}
                >
                  {s.highlight && (
                    <div
                      className="absolute top-0 left-0 right-0 h-px rounded-t-2xl"
                      style={{ background: `linear-gradient(90deg, transparent, ${GOLD}60, transparent)` }}
                    />
                  )}

                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 border"
                    style={{
                      background: s.highlight ? 'rgba(201,161,74,0.12)' : 'rgba(201,161,74,0.06)',
                      borderColor: 'rgba(201,161,74,0.2)',
                    }}
                  >
                    <Icon className="w-5 h-5" style={{ color: GOLD }} />
                  </div>

                  <h3 className="font-serif text-xl font-semibold text-cream mb-3">{s.title}</h3>
                  <p className="text-sm text-cream/50 leading-relaxed">{s.description}</p>

                  {s.highlight && (
                    <div
                      className="mt-5 inline-flex items-center gap-1.5 text-xs font-medium rounded-full px-3 py-1.5"
                      style={{ background: 'rgba(201,161,74,0.1)', color: GOLD }}
                    >
                      Especialidade Principal
                    </div>
                  )}
                </GlowCard>
              </motion.div>
            )
          })}

          {/* CTA card */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: services.length * 0.09 }}
          >
            <a
              href={WA_LINK}
              target="_blank"
              rel="noreferrer"
              className="group glass rounded-2xl p-7 border border-white/[0.06] hover:border-gold/30 transition-all duration-300 h-full flex flex-col items-start justify-between hover:-translate-y-1 min-h-[200px]"
              style={{ display: 'flex', flexDirection: 'column' }}
            >
              <div>
                <h3 className="font-serif text-xl font-semibold text-cream mb-3">
                  Não encontrou sua situação?
                </h3>
                <p className="text-sm text-cream/50">
                  Entre em contato e nos conte seu caso. Analisamos gratuitamente e indicamos o melhor caminho.
                </p>
              </div>
              <div
                className="mt-6 flex items-center gap-2 text-sm font-medium group-hover:gap-3 transition-all"
                style={{ color: GOLD }}
              >
                Falar com um advogado
                <ArrowRight className="w-4 h-4" />
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
