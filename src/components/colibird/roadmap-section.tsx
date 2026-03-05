"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, Globe, Shield, Database, Bot, Smartphone, BarChart3, Zap, Link, CreditCard, Brain, Smartphone as Phone } from "lucide-react"

export function RoadmapSection() {
  const roadmapItems = [
    {
      quarter: "Q1 2025",
      status: "Implementado",
      items: [
        {
          icon: Globe,
          title: "Colombia Radian Events API",
          description: "API para eventos y notificaciones en tiempo real para el mercado colombiano",
          priority: "Alta",
        },
      ],
    },
    {
      quarter: "Q2 2025",
      status: "Implementado",
      items: [
        {
          icon: Link,
          title: "End2End Supply Chain Finance",
          description: "Solución completa de financiamiento de cadena de suministro de extremo a extremo",
          priority: "Alta",
        },
      ],
    },
    {
      quarter: "Q3 2025",
      status: "En Desarrollo",
      items: [
        {
          icon: CreditCard,
          title: "eCheqs Argentina",
          description: "Plataforma de cheques electrónicos adaptada para el mercado argentino",
          priority: "Alta",
        },
        {
          icon: Zap,
          title: "Click to Pay",
          description: "Solución de pagos digitales Click to Pay para comercios y usuarios en LATAM",
          priority: "Alta",
        },
      ],
    },
    {
      quarter: "Q4 2025",
      status: "Planificado",
      items: [
        {
          icon: Bot,
          title: "MCP Agents",
          description: "Agentes inteligentes para automatización de procesos financieros",
          priority: "Media",
        },
        {
          icon: Brain,
          title: "Risk Model",
          description: "Modelo avanzado de evaluación y gestión de riesgos crediticios",
          priority: "Alta",
        },
      ],
    },
    {
      quarter: "Q1 2026",
      status: "Planificado",
      items: [
        {
          icon: Phone,
          title: "Mobile Experience",
          description: "Experiencia móvil completa con funcionalidades avanzadas y diseño optimizado",
          priority: "Alta",
        },
      ],
    },
  ]

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "Alta":
        return "bg-red-100 text-red-700"
      case "Media":
        return "bg-yellow-100 text-yellow-700"
      case "Baja":
        return "bg-green-100 text-green-700"
      default:
        return "bg-gray-100 text-gray-700"
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Implementado":
        return "bg-green-100 text-green-700"
      case "En Desarrollo":
        return "bg-blue-100 text-blue-700"
      case "Planificado":
        return "bg-purple-100 text-purple-700"
      case "Investigación":
        return "bg-orange-100 text-orange-700"
      default:
        return "bg-gray-100 text-gray-700"
    }
  }

  return (
    <section id="roadmap" className="py-20 bg-gradient-to-br from-slate-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-purple-100 text-purple-700 hover:bg-purple-200">Roadmap 2025</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            El Futuro de{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Colibird</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Conoce las próximas funcionalidades y mejoras que estamos desarrollando para revolucionar el fintech en
            LATAM
          </p>
        </div>

        <div className="space-y-12">
          {roadmapItems.map((quarter, index) => (
            <div key={index} className="relative">
              {/* Timeline line */}
              {index < roadmapItems.length - 1 && (
                <div className="absolute left-8 top-20 w-0.5 h-32 bg-gradient-to-b from-purple-600 to-pink-600 opacity-30"></div>
              )}

              <div className="flex items-start space-x-8">
                {/* Quarter indicator */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center">
                    <Clock className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center space-x-4 mb-6">
                    <h3 className="text-2xl font-bold text-foreground">{quarter.quarter}</h3>
                    <Badge className={getStatusColor(quarter.status)}>{quarter.status}</Badge>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {quarter.items.map((item, itemIndex) => (
                      <Card key={itemIndex} className="glass border-white/20">
                        <CardContent className="p-6">
                          <div className="flex items-start space-x-4">
                            <div className="p-3 gradient-primary rounded-xl flex-shrink-0">
                              <item.icon className="w-6 h-6 text-white" />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center justify-between mb-2">
                                <h4 className="text-lg font-bold text-foreground">{item.title}</h4>
                                <Badge className={getPriorityColor(item.priority)} variant="secondary">
                                  {item.priority}
                                </Badge>
                              </div>
                              <p className="text-muted-foreground">{item.description}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="mt-16 text-center glass rounded-2xl p-8 border border-white/20">
          <h3 className="text-2xl font-bold text-foreground mb-4">¿Tienes una Sugerencia?</h3>
          <p className="text-muted-foreground mb-6">
            Nos encanta escuchar a nuestra comunidad. Comparte tus ideas para futuras funcionalidades.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contacto"
              className="inline-flex items-center justify-center px-6 py-3 gradient-primary text-white rounded-lg hover:scale-105 transition-transform duration-300"
            >
              Enviar Sugerencia
            </a>
            <a
              href="https://www.linkedin.com/company/colibirdlatam/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 border border-purple-600 text-purple-600 rounded-lg hover:bg-purple-50 transition-colors duration-300"
            >
              Síguenos en LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
