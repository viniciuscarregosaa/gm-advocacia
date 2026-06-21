import { Instagram, Facebook, Phone } from 'lucide-react'

const GOLD = '#C9A14A'
const WA_LINK = 'https://wa.me/5579998153411'

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.149-.67.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.173.198-.297.298-.497.099-.198.05-.372-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.58-.487-.5-.67-.51a2.34 2.34 0 0 0-.523-.025c-.173 0-.47.074-.716.347-.247.297-.94.917-.94 2.242 0 1.326.963 2.608 1.097 2.788.134.198 1.9 2.9 4.6 4.062.644.278 1.146.444 1.538.568.646.205 1.235.176 1.7.107.519-.082 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.269-.198-.566-.347z" />
    <path d="M12.004 2.003C6.477 2.003 2 6.48 2 12.006c0 2.127.626 4.096 1.707 5.76L2 22l4.406-1.16A9.94 9.94 0 0 0 12.004 22c5.527 0 10.004-4.478 10.004-9.994C22.008 6.48 17.531 2.003 12.004 2.003zm0 18.329a8.31 8.31 0 0 1-4.41-1.23l-.316-.187-2.62.691.7-2.556-.205-.42A8.285 8.285 0 0 1 3.71 12.01c0-4.57 3.717-8.288 8.294-8.288 4.573 0 8.29 3.717 8.29 8.288 0 4.57-3.718 8.288-8.29 8.288z" />
  </svg>
)

const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'BPC/LOAS', href: '#bpc' },
  { label: 'Como Funciona', href: '#como-funciona' },
  { label: 'Resultados', href: '#resultados' },
  { label: 'Sobre', href: '#sobre' },
]

const socials = [
  { icon: Instagram, label: 'Instagram', href: 'https://instagram.com/' },
  { icon: Facebook, label: 'Facebook', href: 'https://facebook.com/' },
  { icon: WhatsAppIcon, label: 'WhatsApp', href: WA_LINK },
]

export default function Footer() {
  return (
    <footer
      className="border-t pt-20 pb-10 relative overflow-hidden"
      style={{ borderColor: 'rgba(201,161,74,0.1)' }}
    >
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px pointer-events-none"
        style={{ background: `linear-gradient(90deg, transparent, ${GOLD}40, transparent)` }}
      />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <a href="#inicio" className="flex items-center gap-3">
              <img src="/LOGO.jpg" alt="GM Advocacia" className="w-10 h-10 object-contain" />
              <div>
                <div className="font-serif text-sm font-semibold text-cream leading-none">
                  Gabriel Freitas <span style={{ color: GOLD }}>&</span> Milene Andrade
                </div>
                <div className="text-[10px] text-cream/30 tracking-widest uppercase mt-1">
                  Advocacia e Consultoria Jurídica
                </div>
              </div>
            </a>

            <p className="text-sm text-cream/40 leading-relaxed max-w-[280px]">
              Advocacia especializada, humanizada e comprometida com o seu direito. Desde o primeiro
              atendimento até o resultado final.
            </p>

            {/* Contact info */}
            <div className="space-y-2">
              <a
                href="tel:+5579998153411"
                className="flex items-center gap-2.5 text-sm text-cream/40 hover:text-cream transition-colors"
              >
                <Phone className="w-3.5 h-3.5 flex-shrink-0" style={{ color: GOLD }} />
                Gabriel: (79) 9 9815-3411
              </a>
              <a
                href="tel:+5579999031159"
                className="flex items-center gap-2.5 text-sm text-cream/40 hover:text-cream transition-colors"
              >
                <Phone className="w-3.5 h-3.5 flex-shrink-0" style={{ color: GOLD }} />
                Milene: (79) 9 9903-1159
              </a>
              <a
                href="mailto:gabrielfreitasadv@gmail.com"
                className="flex items-center gap-2.5 text-sm text-cream/40 hover:text-cream transition-colors"
              >
                <span className="text-xs" style={{ color: GOLD }}>@</span>
                gabrielfreitasadv@gmail.com
              </a>
              <a
                href="mailto:adv.mileneandrade@gmail.com"
                className="flex items-center gap-2.5 text-sm text-cream/40 hover:text-cream transition-colors"
              >
                <span className="text-xs" style={{ color: GOLD }}>@</span>
                adv.mileneandrade@gmail.com
              </a>
            </div>

            {/* Socials */}
            <div className="flex items-center gap-2">
              {socials.map((s) => {
                const Icon = s.icon
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="w-9 h-9 glass rounded-xl border border-white/[0.06] flex items-center justify-center text-cream/40 transition-all duration-200 hover:text-gold hover:border-gold/30"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Nav links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-cream/40 mb-6">
              Navegação
            </h4>
            <ul className="space-y-3">
              {navLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-sm text-cream/40 hover:text-cream transition-colors duration-200"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA block */}
          <div className="glass rounded-2xl p-7 border" style={{ borderColor: 'rgba(201,161,74,0.15)' }}>
            <div
              className="absolute top-0 left-0 right-0 h-px rounded-t-2xl"
              style={{ background: `linear-gradient(90deg, transparent, ${GOLD}40, transparent)` }}
            />
            <div className="font-serif text-lg font-semibold text-cream mb-2">
              Precisa de ajuda?
            </div>
            <p className="text-sm text-cream/40 mb-5 leading-relaxed">
              A consulta inicial é gratuita. Fale conosco e descubra se você tem direito ao benefício.
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold px-5 py-3 rounded-xl text-background transition-all duration-200 hover:opacity-90 w-full justify-center"
              style={{ background: GOLD }}
            >
              <WhatsAppIcon />
              Falar pelo WhatsApp
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="border-t pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ borderColor: 'rgba(201,161,74,0.08)' }}
        >
          <p className="text-xs text-cream/25">
            © {new Date().getFullYear()} Gabriel Freitas & Milene Andrade Advocacia e Consultoria Jurídica.
            Todos os direitos reservados.
          </p>
          <p className="text-xs text-cream/20">
            Advocacia com ética, dedicação e transparência.
          </p>
        </div>
      </div>
    </footer>
  )
}
