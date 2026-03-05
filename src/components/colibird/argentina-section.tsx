"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, CreditCard, Shield, Zap, TrendingUp, Building2, Users, Globe, Settings } from "lucide-react"

export function ArgentinaSection() {
  const [activeTab, setActiveTab] = useState("beneficios")

  const echeqFeatures = [
    "Emisión y gestión de cheques electrónicos BCRA",
    "Validación automática con sistema bancario argentino",
    "Procesamiento instantáneo 24/7",
    "Integración con principales bancos argentinos",
    "Cumplimiento total con normativas BCRA",
    "Trazabilidad completa de transacciones",
  ]

  const benefits = [
    {
      icon: Zap,
      title: "Procesamiento Inmediato",
      description: "Cheques procesados en tiempo real sin demoras bancarias",
    },
    {
      icon: Shield,
      title: "Cumplimiento BCRA",
      description: "100% compatible con regulaciones del Banco Central argentino",
    },
    {
      icon: TrendingUp,
      title: "Reducción de Riesgos",
      description: "Eliminación de riesgos asociados a cheques físicos",
    },
    {
      icon: Building2,
      title: "Integración Bancaria",
      description: "Conectado con todos los principales bancos de Argentina",
    },
  ]

  const stats = [
    { value: "1.5M+", label: "Cheques Procesados" },
    { value: "300+", label: "Empresas Activas" },
    { value: "99.9%", label: "Disponibilidad" },
    { value: "15", label: "Bancos Integrados" },
  ]

  const productBenefits = [
    {
      icon: Building2,
      title: "Para Bancos",
      value: "80%",
      description: "Reducción en procesamiento manual",
      details:
        "Automatización completa del flujo de cheques electrónicos, eliminando intervención manual y reduciendo errores operativos.",
    },
    {
      icon: Users,
      title: "Para Empresas",
      value: "50%",
      description: "Menos costos de procesamiento",
      details:
        "Reducción significativa en costos operativos mediante digitalización y automatización de procesos de cheques.",
    },
    {
      icon: Settings,
      title: "Características Técnicas",
      value: "79",
      description: "Permisos granulares",
      details:
        "Sistema de permisos altamente configurable que permite control granular sobre funcionalidades y accesos.",
    },
  ]

  const tabContent = {
    funcionalidades: [
      "Emisión digital de cheques electrónicos",
      "Validación automática con BCRA",
      "Integración con 15+ bancos argentinos",
      "Procesamiento en tiempo real 24/7",
      "Trazabilidad completa de transacciones",
      "Notificaciones automáticas de estado",
      "Dashboard ejecutivo con métricas",
      "API REST para integraciones",
    ],
    roles: [
      "Administrador del Sistema - Control total",
      "Operador Bancario - Gestión de cheques",
      "Tesorero Empresarial - Emisión y consultas",
      "Auditor - Solo lectura y reportes",
      "Usuario Final - Operaciones básicas",
      "Supervisor - Aprobaciones y validaciones",
    ],
    arquitectura: [
      "Arquitectura cloud-native en AWS",
      "Microservicios con alta disponibilidad",
      "Base de datos distribuida PostgreSQL",
      "API Gateway con rate limiting",
      "Encriptación end-to-end AES-256",
      "Backup automático cada 4 horas",
      "CDN global para baja latencia",
      "Monitoreo 24/7 con alertas",
    ],
    beneficios: productBenefits,
  }

  return (
    <div className="py-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <img src="/argentina-flag.png" alt="Bandera de Argentina" className="w-12 h-8 rounded" />
                <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200">Argentina</Badge>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                <span className="bg-gradient-to-r from-blue-500 to-cyan-600 bg-clip-text text-transparent">ECHEQ</span>{" "}
                para Argentina
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                La plataforma líder en cheques electrónicos de Argentina, totalmente integrada con el sistema bancario y
                las regulaciones BCRA.
              </p>
            </div>
            <div className="relative">
              <div className="glass rounded-2xl p-8 border border-white/20">
                <img
                  src="/echeq-argentina-dashboard-interface.jpg"
                  alt="ECHEQ Dashboard Argentina"
                  className="w-full rounded-xl"
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
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Características de ECHEQ Argentina</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Tecnología avanzada diseñada específicamente para el mercado financiero argentino
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Funcionalidades Principales</h3>
              <div className="space-y-4">
                {echeqFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <Card key={index} className="glass border-white/20">
                  <CardContent className="p-6 text-center">
                    <div className="p-3 gradient-primary rounded-xl w-fit mx-auto mb-4">
                      <benefit.icon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-foreground mb-3">{benefit.title}</h4>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* Regulatory Compliance */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Cumplimiento Regulatorio BCRA</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              ECHEQ cumple con todas las normativas del Banco Central de la República Argentina
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="glass border-white/20 text-center">
              <CardContent className="p-8">
                <div className="p-4 bg-green-100 rounded-2xl w-fit mx-auto mb-6">
                  <Shield className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Comunicación A 6578</h3>
                <p className="text-muted-foreground">
                  Normativa principal que autoriza el libramiento, aval, circulación y presentación al cobro de cheques por medios electrónicos
                </p>
              </CardContent>
            </Card>

            <Card className="glass border-white/20 text-center">
              <CardContent className="p-8">
                <div className="p-4 bg-blue-100 rounded-2xl w-fit mx-auto mb-6">
                  <CreditCard className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Firma Electrónica</h3>
                <p className="text-muted-foreground">
                  Métodos electrónicos que aseguran la voluntad del librador y la integridad del instrumento
                </p>
              </CardContent>
            </Card>

            <Card className="glass border-white/20 text-center">
              <CardContent className="p-8">
                <div className="p-4 bg-purple-100 rounded-2xl w-fit mx-auto mb-6">
                  <Users className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Endosos y Avales</h3>
                <p className="text-muted-foreground">
                  Endoso y aval electrónicos sin límite, con mecanismos de autenticación y seguridad
                </p>
              </CardContent>
            </Card>

            <Card className="glass border-white/20 text-center">
              <CardContent className="p-8">
                <div className="p-4 bg-orange-100 rounded-2xl w-fit mx-auto mb-6">
                  <Globe className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">COELSA Integrado</h3>
                <p className="text-muted-foreground">
                  Sistema de almacenamiento, compensación y liquidación operado por COELSA para garantizar trazabilidad
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

    </div>
  )
}
