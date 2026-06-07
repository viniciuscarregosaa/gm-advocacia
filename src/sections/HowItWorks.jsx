import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Phone, Search, FileCheck, Gavel, PartyPopper } from 'lucide-react'

const GOLD = '#C9A14A'

const steps = [
  {
    icon: Phone,
    title: 'Atendimento Inicial',
    description:
      'Entre em contato pelo WhatsApp ou telefone. Faremos uma triagem gratuita para entender sua situação.',
  },
  {
    icon: Search,
    title: 'Análise do Caso',
    description:
      'Analisamos todos os documentos e avaliamos as melhores estratégias jurídicas para o seu caso específico.',
  },
  {
    icon: FileCheck,
    title: 'Protocolo e Acompanhamento',
    description:
      'Protocolamos o processo e acompanhamos cada etapa, mantendo você informado em tempo real.',
  },
  {
    icon: Gavel,
    title: 'Defesa Ativa',
    description:
      'Atuamos com rigor técnico em todas as instâncias, recursos e audiências necessárias para garantir seus direitos.',
  },
  {
    icon: PartyPopper,
    title: 'Resultado',
    description:
      'Trabalhamos até o resultado final. Seu benefício garantido, sua tranquilidade restaurada.',
  },
]

export default function HowItWorks() {
  const lineRef = useRef(null)
  const isLineInView = useInView(lineRef, { once: true, margin: '-100px' })

  return (
    <section id="como-funciona" className="py-36 relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'rgba(201,161,74,0.025)', filter: 'blur(140px)' }}
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
            Como Trabalhamos
          </span>
          <h2 className="font-serif text-4xl lg:text-6xl font-semibold mb-4 leading-tight">
            Do primeiro contato ao{' '}
            <span className="gold-gradient">seu resultado</span>
          </h2>
          <p className="text-cream/50 max-w-xl mx-auto text-lg">
            Um processo transparente e estruturado. Você nunca ficará sem resposta.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line desktop */}
          <div
            ref={lineRef}
            className="hidden lg:block absolute top-10 left-[9%] right-[9%] h-px overflow-hidden"
          >
            <motion.div
              className="h-full origin-left"
              initial={{ scaleX: 0 }}
              animate={isLineInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              style={{ background: `linear-gradient(90deg, ${GOLD}20, ${GOLD}60, ${GOLD}20)` }}
            />
          </div>

          <div className="grid lg:grid-cols-5 gap-8 lg:gap-4">
            {steps.map((step, i) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 36 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.65, delay: i * 0.12 }}
                  className="flex flex-col items-center text-center"
                >
                  {/* Icon circle */}
                  <div className="relative mb-6">
                    <motion.div
                      whileHover={{ scale: 1.06 }}
                      className="w-20 h-20 rounded-2xl glass border flex items-center justify-center relative z-10 transition-all duration-300"
                      style={{ borderColor: 'rgba(201,161,74,0.2)' }}
                    >
                      <Icon className="w-7 h-7" style={{ color: GOLD }} />
                    </motion.div>

                    {/* Step number */}
                    <div
                      className="absolute -top-2.5 -right-2.5 w-7 h-7 rounded-full text-background text-xs font-black flex items-center justify-center z-20"
                      style={{ background: GOLD }}
                    >
                      {i + 1}
                    </div>
                  </div>

                  <h3 className="font-serif font-semibold text-cream mb-2 text-base">{step.title}</h3>
                  <p className="text-sm text-cream/50 leading-relaxed">{step.description}</p>

                  {/* Mobile connector */}
                  {i < steps.length - 1 && (
                    <div
                      className="lg:hidden w-px h-8 mt-6"
                      style={{ background: 'rgba(201,161,74,0.25)' }}
                    />
                  )}
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
