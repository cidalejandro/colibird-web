import { Mail, MapPin, Phone, Linkedin, FileText, CreditCard, BarChart3, Shield, Zap } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-6">

            <p className="text-muted-foreground text-sm leading-relaxed">
              Automatizamos el procesamiento de facturas con IA para PYMEs en América Latina. Colibird transforma tu
              gestión financiera y accede a capital de trabajo en 24 horas.
            </p>

            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-3">
                <a
                  href="https://www.linkedin.com/company/colibirdlatam/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-muted hover:bg-purple-600 hover:text-white transition-all duration-300 flex items-center justify-center group"
                >
                  <Linkedin className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                </a>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="font-bold text-foreground text-lg">Productos</h4>
            <ul className="space-y-3 text-sm">
              {[
                { name: "ECHEQ - Argentina", icon: FileText, href: "/echeq" },
                { name: "RADIAN - Colombia", icon: Zap, href: "/radian" },
                { name: "Supply Chain Finance LATAM", icon: CreditCard, href: "/scf" },
                { name: "Click to Pay", icon: CreditCard, href: "/click-to-pay" },
                { name: "Captura Inteligente", icon: BarChart3, href: "#soluciones" },
                { name: "Procesamiento IA", icon: Shield, href: "#soluciones" },
                { name: "API Integration", icon: FileText, href: "/desarrolladores" },
              ].map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-muted-foreground hover:text-purple-600 transition-colors duration-300 hover:translate-x-1 inline-flex items-center space-x-2"
                  >
                    {item.icon && <item.icon className="w-3 h-3" />}
                    <span>{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-bold text-foreground text-lg">Recursos</h4>
            <ul className="space-y-3 text-sm">
              {[
                { name: "Documentación API", href: "/desarrolladores" },
                { name: "Guías de Integración", href: "/desarrolladores" },
                { name: "Sandbox", href: "/desarrolladores" },
                { name: "Centro de Ayuda", href: "/contacto" },
                { name: "Nosotros", href: "/nosotros" },
              ].map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-muted-foreground hover:text-purple-600 transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-bold text-foreground text-lg">Contacto</h4>
            <div className="space-y-4 text-sm">
              {[
                { icon: Mail, text: "hola@colibird.com.ar", href: "mailto:hola@colibird.com.ar" },
                { icon: Phone, text: "+54 911 3375 0788", href: "tel:+5491133750788" },
                { icon: MapPin, text: "Buenos Aires, Argentina", href: "/contacto" },
              ].map((contact, index) => (
                <a
                  key={index}
                  href={contact.href}
                  className="flex items-center space-x-3 text-muted-foreground hover:text-purple-600 transition-all duration-300 group"
                >
                  <div className="w-8 h-8 rounded-lg bg-muted group-hover:bg-purple-600/10 flex items-center justify-center transition-colors duration-300">
                    <contact.icon className="w-4 h-4" />
                  </div>
                  <span>{contact.text}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">&copy; 2025 Colibird. Todos los derechos reservados.</p>

          </div>
        </div>
      </div>
    </footer>
  )
}
