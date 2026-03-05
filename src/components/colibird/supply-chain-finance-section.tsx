"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  FileText,
  Globe,
  TrendingUp,
  Shield,
  Users,
  Zap,
  CheckCircle,
  ArrowRight,
  Building2,
  BarChart3,
  Settings,
  DollarSign,
} from "lucide-react"

export function SupplyChainFinanceSection() {
  const [activeTab, setActiveTab] = useState("beneficios")

  const productBenefits = [
    {
      icon: TrendingUp,
      title: "Optimización de Flujo de Caja",
      description: "Mejora el flujo de caja de proveedores y compradores mediante financiamiento automatizado",
    },
    {
      icon: Shield,
      title: "Reducción de Riesgos",
      description: "Evaluación de riesgo avanzada y diversificación automática de exposición crediticia",
    },
    {
      icon: Users,
      title: "Inclusión Financiera PYMEs",
      description: "Acceso a capital de trabajo para PYMEs que tradicionalmente tienen dificultades de financiamiento",
    },
    {
      icon: Zap,
      title: "Automatización Completa",
      description: "Procesamiento automatizado desde validación hasta liquidación, eliminando procesos manuales",
    },
  ]

  const regulatoryCompliance = [
    {
      icon: Shield,
      title: "Cumplimiento Regulatorio",
      description: "Adherencia total a regulaciones financieras de cada país LATAM",
    },
    {
      icon: CheckCircle,
      title: "Anti-Lavado de Dinero",
      description: "Sistemas AML/KYC integrados para cumplimiento normativo",
    },
    {
      icon: Globe,
      title: "Multi-País",
      description: "Operación en múltiples jurisdicciones con adaptación local",
    },
    {
      icon: Building2,
      title: "Integración Bancaria",
      description: "Conectividad directa con bancos y entidades financieras locales",
    },
  ]

  const tabContent = {
    beneficios: productBenefits,
    cumplimiento: regulatoryCompliance,
  }

  return (
    <div className="py-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 via-white to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <Globe className="w-8 h-8 text-green-600" />
                <Badge className="bg-green-100 text-green-700 hover:bg-green-200">LATAM</Badge>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                <span className="bg-gradient-to-r from-green-500 to-blue-600 bg-clip-text text-transparent">
                  Supply Chain Finance
                </span>{" "}
                LATAM
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                La solución líder en financiamiento de cadena de suministro para América Latina, diseñada para
                automatizar y optimizar el acceso al capital de trabajo para PYMEs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  className="gradient-primary text-white px-8"
                  onClick={() => (window.location.href = "/contacto")}
                >
                  <DollarSign className="w-4 h-4 mr-2" />
                  Contacta a un Experto
                </Button>
                <Button
                  variant="outline"
                  className="px-8 bg-transparent"
                  onClick={() => (window.location.href = "/contacto")}
                >
                  <Globe className="w-4 h-4 mr-2" />
                  Contacta a un Experto
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="glass rounded-2xl p-8 border border-white/20">
                <img
                  src="/scf-latam-dashboard-interface.jpg"
                  alt="SCF Dashboard LATAM"
                  className="w-full h-auto rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">$2.5B</div>
              <div className="text-sm text-muted-foreground">Volumen Procesado</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">1,200+</div>
              <div className="text-sm text-muted-foreground">PYMEs Activas</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">99.8%</div>
              <div className="text-sm text-muted-foreground">Precisión IA</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">15</div>
              <div className="text-sm text-muted-foreground">Países LATAM</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Características de SCF LATAM
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Tecnología de vanguardia adaptada para las necesidades específicas del mercado latinoamericano
              </p>

              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">Funcionalidades Principales</h3>
                  <div className="space-y-4">
                    {[
                      {
                        icon: FileText,
                        title: "Evaluación Automática de Riesgo",
                        description: "IA avanzada para evaluación crediticia y scoring en tiempo real",
                      },
                      {
                        icon: DollarSign,
                        title: "Financiamiento Automático",
                        description: "Aprobación y desembolso automático basado en criterios predefinidos",
                      },
                      {
                        icon: TrendingUp,
                        title: "Optimización de Portafolio",
                        description: "Diversificación automática y gestión de exposición de riesgo",
                      },
                      {
                        icon: Shield,
                        title: "Cumplimiento Regulatorio",
                        description: "Adherencia automática a regulaciones locales de cada país",
                      },
                      {
                        icon: Users,
                        title: "Onboarding Digital",
                        description: "Proceso de incorporación 100% digital y automatizado",
                      },
                      {
                        icon: BarChart3,
                        title: "Analytics Avanzados",
                        description: "Dashboards y reportes en tiempo real para toma de decisiones",
                      },
                    ].map((feature, index) => (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-r from-green-500 to-blue-600 flex items-center justify-center">
                          <feature.icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground">{feature.title}</h4>
                          <p className="text-muted-foreground text-sm">{feature.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              {[
                {
                  icon: TrendingUp,
                  title: "Procesamiento Instantáneo",
                  description: "Evaluación y aprobación de solicitudes en menos de 5 minutos",
                },
                {
                  icon: Shield,
                  title: "Seguridad Bancaria",
                  description: "Estándares de seguridad equivalentes a instituciones financieras",
                },
                {
                  icon: Users,
                  title: "Inclusión Financiera",
                  description: "Acceso democratizado al capital para PYMEs tradicionalmente excluidas",
                },
                {
                  icon: Globe,
                  title: "Cobertura Regional",
                  description: "Operación unificada en 15 países de América Latina",
                },
              ].map((benefit, index) => (
                <Card key={index} className="glass border-white/20 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-r from-green-500 to-blue-600 flex items-center justify-center">
                        <benefit.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-foreground mb-2">{benefit.title}</h4>
                        <p className="text-muted-foreground">{benefit.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Regulatory Compliance Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Cumplimiento Regulatorio LATAM
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              SCF LATAM cumple con todas las normativas financieras de los países de América Latina
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: "Regulaciones Locales",
                description: "Cumplimiento específico con regulaciones de cada país LATAM",
              },
              {
                icon: CheckCircle,
                title: "AML/KYC Integrado",
                description: "Sistemas anti-lavado y conocimiento del cliente automatizados",
              },
              {
                icon: Building2,
                title: "Supervisión Bancaria",
                description: "Adherencia a estándares de supervisión financiera local",
              },
              {
                icon: Globe,
                title: "Interoperabilidad",
                description: "Integración con sistemas financieros y regulatorios locales",
              },
            ].map((item, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-green-500 to-blue-600 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Casos de Uso</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Soluciones específicas para diferentes tipos de empresas y sectores
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="glass border-white/20 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-r from-green-500 to-blue-600 flex items-center justify-center mx-auto mb-6">
                  <Building2 className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Para Corporaciones</h3>
                <div className="text-3xl font-bold text-green-600 mb-2">40%</div>
                <div className="text-sm text-muted-foreground mb-4">Reducción en costos de financiamiento</div>
                <p className="text-muted-foreground">
                  Optimización del capital de trabajo para grandes corporaciones con cadenas de suministro complejas.
                </p>
              </CardContent>
            </Card>

            <Card className="glass border-white/20 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center mx-auto mb-6">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Para PYMEs</h3>
                <div className="text-3xl font-bold text-blue-600 mb-2">85%</div>
                <div className="text-sm text-muted-foreground mb-4">Mejora en acceso a capital</div>
                <p className="text-muted-foreground">
                  Acceso democratizado al capital de trabajo para pequeñas y medianas empresas.
                </p>
              </CardContent>
            </Card>

            <Card className="glass border-white/20 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-600 flex items-center justify-center mx-auto mb-6">
                  <BarChart3 className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Para Bancos</h3>
                <div className="text-3xl font-bold text-purple-600 mb-2">3x</div>
                <div className="text-sm text-muted-foreground mb-4">Mayor eficiencia operativa</div>
                <p className="text-muted-foreground">
                  Automatización completa de procesos de financiamiento para instituciones financieras.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-green-500 to-blue-600">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex justify-center">
            <Button
              className="bg-white text-blue-600 hover:bg-white/90 px-8 py-4 text-lg font-semibold"
              onClick={() => (window.location.href = "/contacto")}
            >
              <DollarSign className="w-5 h-5 mr-2" />
              Contacta a un Experto
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
