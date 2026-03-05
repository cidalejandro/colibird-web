"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import {
  CheckCircle,
  FileText,
  Shield,
  Zap,
  TrendingUp,
  Building2,
  Users,
  Globe,
  Settings,
  Lock,
  Database,
} from "lucide-react"

export function ColombiaSection() {
  const [activeTab, setActiveTab] = useState("beneficios")

  const radianFeatures = [
    "Procesamiento automático de facturas electrónicas DIAN",
    "Validación en tiempo real con regulaciones colombianas",
    "Extracción de datos con IA avanzada",
    "Integración directa con sistemas ERP",
    "Cumplimiento 100% con normativas fiscales",
    "Soporte para todos los tipos de documento DIAN",
  ]

  const benefits = [
    {
      icon: Zap,
      title: "Procesamiento Instantáneo",
      description: "Procesa miles de facturas en segundos con precisión del 99.8%",
    },
    {
      icon: Shield,
      title: "Cumplimiento DIAN",
      description: "100% compatible con todas las regulaciones de la DIAN colombiana",
    },
    {
      icon: TrendingUp,
      title: "Reducción de Costos",
      description: "Hasta 80% de reducción en costos operativos de procesamiento",
    },
    {
      icon: Building2,
      title: "Escalabilidad Enterprise",
      description: "Maneja volúmenes empresariales con arquitectura cloud-native",
    },
  ]

  const stats = [
    { value: "2M+", label: "Facturas Procesadas" },
    { value: "500+", label: "Empresas Activas" },
    { value: "99.9%", label: "Uptime Garantizado" },
    { value: "<200ms", label: "Tiempo de Respuesta" },
  ]

  const productBenefits = [
    {
      icon: Building2,
      title: "Para Empresas",
      value: "85%",
      description: "Reducción en tiempo de procesamiento",
      details:
        "Automatización completa del procesamiento de facturas electrónicas, eliminando tareas manuales y acelerando flujos de trabajo.",
    },
    {
      icon: Users,
      title: "Para Contadores",
      value: "70%",
      description: "Menos errores de validación",
      details:
        "IA avanzada que detecta y corrige automáticamente errores comunes en facturas, mejorando la precisión contable.",
    },
    {
      icon: Settings,
      title: "Características Técnicas",
      value: "95",
      description: "Tipos de documento soportados",
      details: "Soporte completo para todos los tipos de documento electrónico requeridos por la DIAN colombiana.",
    },
  ]

  const tabContent = {
    funcionalidades: [
      "Procesamiento automático con IA",
      "Validación DIAN en tiempo real",
      "Extracción de datos estructurados",
      "Integración ERP empresarial",
      "Soporte UBL 2.1 completo",
      "Notificaciones automáticas",
      "Dashboard analítico avanzado",
      "API REST para desarrolladores",
    ],
    roles: [
      "Administrador DIAN - Control total del sistema",
      "Contador Principal - Gestión fiscal completa",
      "Operador Contable - Procesamiento diario",
      "Auditor Fiscal - Solo lectura y reportes",
      "Usuario Empresarial - Consultas básicas",
      "Supervisor - Aprobaciones y validaciones",
    ],
    arquitectura: [
      "Arquitectura cloud-native en Google Cloud",
      "Microservicios con auto-scaling",
      "Base de datos distribuida MongoDB",
      "API Gateway con autenticación OAuth2",
      "Encriptación TLS 1.3 end-to-end",
      "Backup incremental cada 2 horas",
      "CDN multi-región para Colombia",
      "Monitoreo proactivo 24/7",
    ],
    beneficios: productBenefits,
  }

  return (
    <div className="py-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-yellow-50 via-white to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <img src="/colombian-flag.png" alt="Bandera de Colombia" className="w-12 h-8 rounded" />
                <Badge className="bg-yellow-100 text-yellow-700 hover:bg-yellow-200">Colombia</Badge>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                <span className="bg-gradient-to-r from-yellow-500 to-blue-600 bg-clip-text text-transparent">
                  RADIAN
                </span>{" "}
                para Colombia
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                La solución líder en procesamiento inteligente de facturas electrónicas, diseñada específicamente para
                el mercado colombiano y las regulaciones DIAN.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  className="gradient-primary text-white px-8"
                  onClick={() => (window.location.href = "/contacto")}
                >
                  <FileText className="w-4 h-4 mr-2" />
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
                  src="/radian-colombia-dashboard-interface.jpg"
                  alt="RADIAN Dashboard Colombia"
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
      <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-yellow-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Características de RADIAN Colombia</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Tecnología de vanguardia adaptada a las necesidades específicas del mercado colombiano
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-8">Funcionalidades Principales</h3>
              <div className="space-y-4">
                {radianFeatures.map((feature, index) => (
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
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Cumplimiento Regulatorio DIAN</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              RADIAN está certificado y cumple con todas las normativas de la DIAN colombiana
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="glass border-white/20 text-center">
              <CardContent className="p-8">
                <div className="p-4 bg-green-100 rounded-2xl w-fit mx-auto mb-6">
                  <Shield className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Resolución 000013</h3>
                <p className="text-muted-foreground">
                  Cumplimiento total con los estándares técnicos para facturación electrónica
                </p>
              </CardContent>
            </Card>

            <Card className="glass border-white/20 text-center">
              <CardContent className="p-8">
                <div className="p-4 bg-blue-100 rounded-2xl w-fit mx-auto mb-6">
                  <FileText className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">UBL 2.1</h3>
                <p className="text-muted-foreground">Soporte completo para el estándar UBL 2.1 requerido por la DIAN</p>
              </CardContent>
            </Card>

            <Card className="glass border-white/20 text-center">
              <CardContent className="p-8">
                <div className="p-4 bg-purple-100 rounded-2xl w-fit mx-auto mb-6">
                  <Users className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Habilitación DIAN</h3>
                <p className="text-muted-foreground">
                  Proceso completo de habilitación ante la DIAN para nuevos usuarios
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Product Details Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {activeTab === "beneficios" && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {productBenefits.map((benefit, index) => (
                <Card key={index} className="glass border-white/20 p-8">
                  <CardContent className="p-0">
                    <div className="flex items-center space-x-3 mb-4">
                      <benefit.icon className="w-6 h-6 text-purple-600" />
                      <h3 className="text-lg font-bold text-foreground">{benefit.title}</h3>
                    </div>
                    <div className="text-4xl font-bold text-purple-600 mb-2">{benefit.value}</div>
                    <div className="text-sm text-muted-foreground mb-4">{benefit.description}</div>
                    <p className="text-sm text-muted-foreground">{benefit.details}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {activeTab === "funcionalidades" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">Funcionalidades Principales</h3>
                <div className="space-y-4">
                  {tabContent.funcionalidades.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="glass rounded-2xl p-8 border border-white/20">
                  <img
                    src="/radian-colombia-dashboard-interface.jpg"
                    alt="RADIAN Dashboard Colombia"
                    className="w-full rounded-xl"
                  />
                </div>
              </div>
            </div>
          )}

          {activeTab === "roles" && (
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Roles y Permisos</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tabContent.roles.map((role, index) => (
                  <Card key={index} className="glass border-white/20">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-3">
                        <Lock className="w-5 h-5 text-purple-600" />
                        <span className="font-medium text-foreground">{role}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {activeTab === "arquitectura" && (
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Arquitectura Técnica</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {tabContent.arquitectura.map((item, index) => (
                  <Card key={index} className="glass border-white/20">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-3">
                        <Database className="w-5 h-5 text-purple-600" />
                        <span className="text-muted-foreground">{item}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-yellow-500 to-blue-600">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex justify-center">
            <Button
              className="bg-white text-blue-600 hover:bg-white/90 px-8 py-4 text-lg font-semibold"
              onClick={() => (window.location.href = "/contacto")}
            >
              <FileText className="w-5 h-5 mr-2" />
              Contacta a un Experto
            </Button>
          </div>
        </div>
      </section>

    </div>
  )
}
