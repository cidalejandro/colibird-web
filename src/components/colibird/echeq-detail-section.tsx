"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  FileCheck,
  Shield,
  Users,
  Database,
  CheckCircle,
  ArrowRight,
  Building2,
  CreditCard,
  BarChart3,
  Settings,
  Globe,
} from "lucide-react"

export function EcheqDetailSection() {
  const features = [
    {
      icon: FileCheck,
      title: "Emisión de Cheques Electrónicos",
      description: "Emisión individual y masiva con validación completa BCRA y firmas digitales",
      details: [
        "Validación automática CBU/CUIT",
        "Carga masiva CSV/Excel",
        "Firmas digitales certificadas",
        "Trazabilidad completa",
      ],
    },
    {
      icon: Shield,
      title: "Custodia Bancaria",
      description: "Gestión segura de custodia con control granular de estados y permisos",
      details: ["Depósito seguro", "Estados de custodia", "Acceso controlado", "Auditoría completa"],
    },
    {
      icon: CreditCard,
      title: "Descuento de Cheques",
      description: "Sistema automatizado de descuento con cálculo de intereses y gestión de riesgo",
      details: ["Cálculo automático", "Tasas variables", "Evaluación de riesgo", "Simulador de descuento"],
    },
    {
      icon: BarChart3,
      title: "Endoso y Transferencia",
      description: "Gestión completa de endosos con validaciones automáticas y trazabilidad",
      details: ["Endoso simple", "Endoso en procuración", "Validación de identidad", "Cadena de endosos"],
    },
  ]

  const roles = [
    {
      type: "BANCOS",
      roles: [
        { name: "SYSTEM_ADMIN", description: "Acceso completo a todos los tenants y funcionalidades" },
        { name: "BANK_ADMIN", description: "Administración completa dentro del banco" },
        { name: "BANK_OPERATOR", description: "Operaciones estándar del banco" },
        { name: "BANK_ANALYST", description: "Análisis y reportes" },
        { name: "BANK_AUDITOR", description: "Auditoría y cumplimiento" },
      ],
    },
    {
      type: "EMPRESAS",
      roles: [{ name: "COMPANY_USER", description: "Usuario corporativo estándar con emisión de cheques" }],
    },
    {
      type: "USUARIOS FINALES",
      roles: [{ name: "END_USER", description: "Usuario final básico con consultas y operaciones básicas" }],
    },
  ]

  const techSpecs = [
    { label: "Backend", value: "Node.js + Express.js + PostgreSQL" },
    { label: "Frontend", value: "Next.js 14 + React 18 + TypeScript" },
    { label: "Base de Datos", value: "PostgreSQL 15+ con optimizaciones" },
    { label: "Cache", value: "Redis para consultas frecuentes" },
    { label: "Autenticación", value: "JWT + OAuth 2.0 + MFA" },
    { label: "Monitoreo", value: "Grafana + Prometheus" },
    { label: "Seguridad", value: "AES-256 + TLS 1.3" },
    { label: "Integración", value: "APIs RESTful + COELSA" },
  ]

  return (
    <section id="echeq" className="py-24 bg-gradient-to-br from-purple-900 via-purple-800 to-pink-800 text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <span className="text-4xl">🇦🇷</span>
            <Badge className="bg-white/20 text-white border-white/30">Argentina</Badge>
          </div>
          <h2 className="text-5xl font-bold mb-6">ECHEQ</h2>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto mb-8">
            Plataforma integral multi-tenant para la gestión profesional de cheques electrónicos. Cumplimiento total con
            regulaciones BCRA y especificaciones COELSA.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge className="bg-green-500/20 text-green-300 border-green-400/30">✓ 100% BCRA Compliant</Badge>
            <Badge className="bg-blue-500/20 text-blue-300 border-blue-400/30">✓ COELSA Integrado</Badge>
            <Badge className="bg-orange-500/20 text-orange-300 border-orange-400/30">✓ Multi-Tenant</Badge>
          </div>
        </div>

        <Tabs defaultValue="features" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-12 bg-white/10 backdrop-blur-sm">
            <TabsTrigger value="features" className="data-[state=active]:bg-white data-[state=active]:text-purple-900">
              Funcionalidades
            </TabsTrigger>
            <TabsTrigger value="roles" className="data-[state=active]:bg-white data-[state=active]:text-purple-900">
              Roles y Permisos
            </TabsTrigger>
            <TabsTrigger value="tech" className="data-[state=active]:bg-white data-[state=active]:text-purple-900">
              Arquitectura
            </TabsTrigger>
            <TabsTrigger value="benefits" className="data-[state=active]:bg-white data-[state=active]:text-purple-900">
              Beneficios
            </TabsTrigger>
          </TabsList>

          <TabsContent value="features" className="space-y-8">
            <div className="grid lg:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="p-2 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500">
                        <feature.icon className="w-5 h-5" />
                      </div>
                      <CardTitle className="text-lg">{feature.title}</CardTitle>
                    </div>
                    <CardDescription className="text-purple-100">{feature.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {feature.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center space-x-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="roles" className="space-y-8">
            <div className="grid gap-8">
              {roles.map((roleGroup, index) => (
                <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                  <CardHeader>
                    <CardTitle className="text-xl flex items-center space-x-2">
                      <Users className="w-5 h-5" />
                      <span>{roleGroup.type}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {roleGroup.roles.map((role, idx) => (
                        <div key={idx} className="p-4 rounded-lg bg-white/5 border border-white/10">
                          <h4 className="font-semibold text-sm mb-2 text-purple-200">{role.name}</h4>
                          <p className="text-xs text-purple-100">{role.description}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="tech" className="space-y-8">
            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Database className="w-5 h-5" />
                    <span>Stack Tecnológico</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {techSpecs.map((spec, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center py-2 border-b border-white/10 last:border-b-0"
                      >
                        <span className="text-sm font-medium text-purple-200">{spec.label}</span>
                        <span className="text-sm text-right">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Globe className="w-5 h-5" />
                    <span>Integración COELSA</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-sm text-purple-100 mb-4">
                      Integración completa con 12+ APIs COELSA para operaciones de cheques electrónicos
                    </p>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      {[
                        "Cuentas",
                        "Cheques",
                        "Endosos",
                        "Custodia",
                        "Devoluciones",
                        "Certificados",
                        "Cesión",
                        "Avales",
                        "Mandatos",
                        "Notificaciones",
                        "Seguridad",
                        "Reportes",
                      ].map((api) => (
                        <div key={api} className="flex items-center space-x-2">
                          <CheckCircle className="w-3 h-3 text-green-400" />
                          <span>{api}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="benefits" className="space-y-8">
            <div className="grid lg:grid-cols-3 gap-8">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Building2 className="w-5 h-5" />
                    <span>Para Bancos</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-green-400">80%</div>
                    <div className="text-sm text-purple-200">Reducción en procesamiento manual</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-blue-400">10x</div>
                    <div className="text-sm text-purple-200">Más rápido que sistemas tradicionales</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-orange-400">60%</div>
                    <div className="text-sm text-purple-200">Reducción de costos operativos</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Users className="w-5 h-5" />
                    <span>Para Empresas</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-green-400">50%</div>
                    <div className="text-sm text-purple-200">Menos costos de procesamiento</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-blue-400">70%</div>
                    <div className="text-sm text-purple-200">Reducción en tiempo de procesamiento</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-orange-400">100%</div>
                    <div className="text-sm text-purple-200">Cumplimiento automático</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Settings className="w-5 h-5" />
                    <span>Características Técnicas</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-green-400">79</div>
                    <div className="text-sm text-purple-200">Permisos granulares</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-blue-400">1M+</div>
                    <div className="text-sm text-purple-200">Transacciones soportadas</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-orange-400">99.9%</div>
                    <div className="text-sm text-purple-200">Disponibilidad garantizada</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        <div className="text-center mt-16">
          <Button
            size="lg"
            className="bg-white text-purple-900 hover:bg-purple-50 px-8 py-3"
            onClick={() => (window.location.href = "/contacto")}
          >
            Contacta a un Experto
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  )
}
