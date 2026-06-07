import { motion } from 'framer-motion'
import { Heart, MessageCircle, Eye, Award, Lock, HandCoins } from 'lucide-react'
import GlowCard from '../components/GlowCard'

const GOLD = '#C9A14A'

const differentials = [
  {
    icon: Heart,
    title: 'Atendimento Humanizado',
    description:
      'Cada cliente é tratado com respeito e atenção individual. Entendemos que por trás de cada processo existe uma pessoa com uma história.',
  },
  {
    icon: MessageCircle,
    title: 'Comunicação Clara',
    description:
      'Traduzimos o juridiquês para uma linguagem simples. Você sempre saberá o que está acontecendo no seu processo.',
  },
  {
    icon: Eye,
    title: 'Acompanhamento Próximo',
    description:
      'Mantemos você informado em todas as etapas. Nenhuma decisão é tomada sem que você esteja ciente.',
  },
  {
    icon: Award,
    title: 'Experiência Comprovada',
    description:
      'Anos de atuação focada em Direito Previdenciário e BPC/LOAS. Conhecemos cada detalhe que faz diferença no resultado.',
  },
  {
    icon: Lock,
    title: 'Total Transparência',
    description:
      'Honorários claros, sem surpresas. Apresentamos todas as possibilidades e riscos antes de assumir seu caso.',
  },
  {
    icon: HandCoins,
    title: 'Honorários Acessíveis',
    description:
      'Acreditamos que todos têm direito a uma boa defesa. Trabalhamos com honorários justos e condições de pagamento flexíveis.',
  },
]

export default function Differentials() {
  return (
    <section id="diferenciais" className="py-36 relative overflow-hidden">
      <div
        className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'rgba(201,161,74,0.03)', filter: 'blur(140px)' }}
      />

      <div className="max-w-7xl mx-auto px-6">
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
            Por que nos escolher
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-6xl font-semibold mb-4 leading-tight">
            O que nos{' '}
            <span className="gold-gradient">diferencia</span>
          </h2>
          <p className="text-cream/50 max-w-xl mx-auto text-lg">
            Mais do que um escritório de advocacia — somos parceiros na busca pelos seus direitos.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {differentials.map((d, i) => {
            const Icon = d.icon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, delay: i * 0.09 }}
              >
                <GlowCard className="glass rounded-2xl p-7 border border-white/[0.06] hover:border-gold/20 transition-all duration-300 h-full group">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 border transition-all duration-300 group-hover:scale-110"
                    style={{
                      background: 'rgba(201,161,74,0.07)',
                      borderColor: 'rgba(201,161,74,0.18)',
                    }}
                  >
                    <Icon className="w-5 h-5" style={{ color: GOLD }} />
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-cream mb-3">{d.title}</h3>
                  <p className="text-sm text-cream/50 leading-relaxed">{d.description}</p>
                </GlowCard>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
