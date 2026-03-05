import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Bot, Sparkles, Shield, CreditCard, BarChart3, Zap, Database } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "AI Identity Shield",
    description:
      "Onboarding seguro y a prueba de fraude en solo 5 minutos. Validación en tiempo real y detección de fraude para escalabilidad sin límites.",
    badge: "5 Minutos",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Database,
    title: "DataSense AI Framework",
    description:
      "Orquesta todo el ciclo de vida de datos: adquisición, enriquecimiento, análisis y ejecución. Convierte datos en inteligencia accionable.",
    badge: "Insights IA",
    color: "from-pink-500 to-orange-500",
  },
  {
    icon: CreditCard,
    title: "AI Invoice Trading Engine",
    description:
      "Trading de facturas en 1 click con sistemas de recomendación IA. Acceso instantáneo a oportunidades óptimas con liquidez y confianza.",
    badge: "1 Click",
    color: "from-orange-500 to-purple-500",
  },
  {
    icon: BarChart3,
    title: "Core Reg AI Engine",
    description:
      "Registro en tiempo real para transacciones y cumplimiento regulatorio. Automatiza reconciliación y garantiza eficiencia operacional.",
    badge: "Tiempo Real",
    color: "from-purple-600 to-pink-600",
  },
  {
    icon: Zap,
    title: "InstaDeploy AI Framework",
    description:
      "Implementación rápida con arquitectura API-first. Integración modular sin fricción para impacto operacional inmediato.",
    badge: "API-First",
    color: "from-pink-600 to-orange-600",
  },
  {
    icon: Bot,
    title: "AI-Powered Analytics",
    description:
      "Evaluación de riesgo avanzada, scoring de empresas y facturas, motor de recomendaciones para trading óptimo con información de facturas.",
    badge: "ML Avanzado",
    color: "from-orange-600 to-purple-600",
  },
]

export function FeaturesSection() {
  return (
    <section id="soluciones" className="py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full px-6 py-3 mb-6">
            <Sparkles className="w-4 h-4 text-purple-600" />
            <span className="text-sm font-semibold text-purple-600">Tecnología Colibird</span>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-8 text-balance leading-tight">
            Procesamiento End-to-End
            <br />
            <span className="gradient-text-brand">Impulsado por IA</span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-4xl mx-auto text-pretty leading-relaxed">
            Nuestra solución integral automatiza flujos de trabajo, acelera onboarding y garantiza escalabilidad
            mientras entrega procesamiento inteligente de facturas para desbloquear liquidez y habilitar soluciones de
            financiamiento.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-border/50 gradient-card relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <CardHeader className="pb-4 relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div
                    className={`p-4 rounded-2xl bg-gradient-to-br ${feature.color} group-hover:scale-110 transition-all duration-500 shadow-lg`}
                  >
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  <Badge variant="outline" className="text-xs font-medium border-purple-500/20 text-purple-600">
                    {feature.badge}
                  </Badge>
                </div>

                <CardTitle className="text-xl font-bold text-card-foreground group-hover:text-purple-600 transition-colors duration-300 mb-3">
                  {feature.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="relative z-10">
                <CardDescription className="text-muted-foreground leading-relaxed mb-4">
                  {feature.description}
                </CardDescription>

              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  )
}
