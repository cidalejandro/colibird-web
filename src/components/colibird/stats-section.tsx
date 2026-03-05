import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, Users, Clock, DollarSign } from "lucide-react"

const stats = [
  {
    number: "$210B",
    label: "Oportunidad de Mercado TAM",
    description: "Mercado total direccionable LATAM",
    icon: DollarSign,
    color: "from-green-500 to-emerald-500",
  },
  {
    number: "20%",
    label: "CAGR Esperado",
    description: "Crecimiento anual compuesto",
    icon: TrendingUp,
    color: "from-blue-500 to-cyan-500",
  },
  {
    number: "12M",
    label: "PYMEs Objetivo",
    description: "Pequeñas y medianas empresas LATAM",
    icon: Users,
    color: "from-purple-500 to-pink-500",
  },
  {
    number: "100-200",
    label: "Basis Points Take Rate",
    description: "Comisión sobre volumen procesado",
    icon: Clock,
    color: "from-orange-500 to-red-500",
  },
]

export function StatsSection() {
  return (
    <section id="analytics" className="py-32 gradient-primary relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-2xl animate-float" />
        <div
          className="absolute bottom-10 right-10 w-48 h-48 bg-white rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 w-24 h-24 bg-white rounded-full blur-xl animate-float"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 text-balance leading-tight">
            Oportunidad de Mercado
            <br />
            <span className="text-white/80">Transformadora</span>
          </h2>
          <p className="text-xl text-white/80 max-w-4xl mx-auto text-pretty leading-relaxed">
            El mercado de SCF y Factoring en LATAM presenta una oportunidad masiva. Solo el 30% de las PYMEs tienen
            acceso al capital que necesitan para crecer, creando un mercado de $210B esperando ser desbloqueado.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="glass-dark border-white/20 hover:bg-white/20 transition-all duration-500 hover:scale-105 group relative overflow-hidden"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
              />

              <CardContent className="p-8 text-center relative z-10">
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${stat.color} mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <stat.icon className="w-8 h-8 text-white" />
                </div>

                <div className="text-5xl md:text-6xl font-bold text-white mb-3 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>

                <div className="text-lg font-semibold text-white mb-3">{stat.label}</div>

                <div className="text-sm text-white/70 leading-relaxed">{stat.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-20">
          <div className="glass-dark rounded-2xl p-8 max-w-3xl mx-auto">
            <p className="text-white/90 text-lg italic mb-4">
              "COLIBIRD nos permitió escalar nuestras operaciones de factoring 3x más rápido, procesando $200M en
              volumen mensual con total confianza y cumplimiento regulatorio."
            </p>
            <div className="text-white/70 text-sm">— Carlos Mendoza, Director de Operaciones, FactorPlus Colombia</div>
          </div>
        </div>
      </div>
    </section>
  )
}
