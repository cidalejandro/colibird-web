"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  DollarSign,
  TrendingUp,
  Shield,
  Users,
  Database,
  CheckCircle,
  ArrowRight,
  Building2,
  BarChart3,
  Settings,
  Globe,
  FileText,
  Zap,
} from "lucide-react"

export function ScfDetailSection() {
  const features = [
    {
      icon: DollarSign,
      title: "Evaluación de Riesgo Automática",
      description: "Sistema de scoring avanzado con IA para evaluación crediticia en tiempo real",
      details: [
        "Scoring crediticio automatizado",
        "Análisis de riesgo en tiempo real",
        "Monitoreo continuo de exposición",
        "Alertas tempranas de riesgo",
      ],
    },
    {
      icon: TrendingUp,
      title: "Optimización de Portafolio",
      description: "Gestión inteligente de exposición y diversificación automática de riesgo",
      details: ["Diversificación automática", "Gestión de concentración", "Optimización de retorno", "Control de exposición"],
    },
    {
      icon: Users,
      title: "Onboarding Digital",
      description: "Proceso de incorporación 100% digital con validación automatizada",
      details: ["Verificación de identidad", "Validación de documentos", "Scoring inicial", "Aprobación automática"],
    },
    {
      icon: BarChart3,
      title: "Analytics y Reporting",
      description: "Dashboards avanzados y reportes en tiempo real para toma de decisiones",
      details: ["Dashboards en tiempo real", "Reportes automatizados", "KPIs personalizados", "Análisis predictivo"],
    },
  ]

  const roles = [
    {
      type: "BANCOS",
      icon: Building2,
      color: "from-blue-500 to-cyan-500",
      description: "Instituciones financieras que otorgan el financiamiento",
      permissions: ["Aprobación de límites", "Gestión de riesgo", "Monitoreo de exposición", "Liquidación"],
    },
    {
      type: "CORPORACIONES",
      icon: Users,
      color: "from-green-500 to-emerald-500",
      description: "Empresas que solicitan financiamiento para sus proveedores",
      permissions: ["Solicitud de financiamiento", "Gestión de proveedores", "Monitoreo de transacciones", "Reportes"],
    },
    {
      type: "PROVEEDORES",
      icon: FileText,
      color: "from-purple-500 to-pink-500",
      description: "PYMEs que reciben el financiamiento anticipado",
      permissions: ["Solicitud de adelantos", "Gestión de facturas", "Consulta de estados", "Historial de transacciones"],
    },
    {
      type: "ADMINISTRADORES",
      icon: Settings,
      color: "from-orange-500 to-red-500",
      description: "Personal interno que gestiona la plataforma",
      permissions: ["Configuración del sistema", "Gestión de usuarios", "Monitoreo de operaciones", "Auditoría"],
    },
  ]

  const techSpecs = [
    { label: "Procesamiento", value: "IA/ML en tiempo real" },
    { label: "Seguridad", value: "Bancaria nivel enterprise" },
    { label: "Escalabilidad", value: "Millones de transacciones" },
    { label: "Integración", value: "APIs RESTful + SOAP" },
  ]

  return (
    <section id="scf" className="py-24 bg-gradient-to-br from-green-900 via-blue-800 to-purple-800 text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <span className="text-4xl">🌎</span>
            <Badge className="bg-white/20 text-white border-white/30">Producto LATAM</Badge>
          </div>
          <h2 className="text-5xl font-bold mb-6">Supply Chain Finance</h2>
          <p className="text-xl text-green-100 max-w-3xl mx-auto mb-8">
            Plataforma integral de financiamiento de cadena de suministro para América Latina. Automatización
            completa del proceso de evaluación, aprobación y liquidación de financiamiento para PYMEs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge className="bg-green-500/20 text-green-300 border-green-400/30">✓ Multi-País LATAM</Badge>
            <Badge className="bg-blue-500/20 text-blue-300 border-blue-400/30">✓ IA/ML Integrado</Badge>
            <Badge className="bg-purple-500/20 text-purple-300 border-purple-400/30">✓ Escalable</Badge>
          </div>
        </div>

        <Tabs defaultValue="features" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8 bg-white/10">
            <TabsTrigger value="features">Funcionalidades</TabsTrigger>
            <TabsTrigger value="roles">Roles y Permisos</TabsTrigger>
            <TabsTrigger value="architecture">Arquitectura</TabsTrigger>
            <TabsTrigger value="benefits">Beneficios</TabsTrigger>
          </TabsList>

          <TabsContent value="features" className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3">
                      <div className="p-2 rounded-lg bg-gradient-to-r from-green-500 to-blue-600">
                        <feature.icon className="w-6 h-6" />
                      </div>
                      <span>{feature.title}</span>
                    </CardTitle>
                    <CardDescription className="text-green-200">{feature.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {feature.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-center space-x-2 text-sm">
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {roles.map((role, index) => (
                <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                  <CardHeader className="text-center">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${role.color} flex items-center justify-center mx-auto mb-4`}>
                      <role.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-lg">{role.type}</CardTitle>
                    <CardDescription className="text-green-200 text-sm">{role.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-1">
                      {role.permissions.map((permission, permIndex) => (
                        <li key={permIndex} className="text-sm text-green-200 flex items-center space-x-2">
                          <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0" />
                          <span>{permission}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="architecture" className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Database className="w-6 h-6" />
                    <span>Arquitectura Técnica</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-green-400">Microservicios</div>
                    <div className="text-sm text-green-200">Arquitectura distribuida y escalable</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-blue-400">IA/ML Pipeline</div>
                    <div className="text-sm text-green-200">Procesamiento de datos en tiempo real</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-purple-400">APIs RESTful</div>
                    <div className="text-sm text-green-200">Integración con sistemas externos</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Shield className="w-6 h-6" />
                    <span>Seguridad y Compliance</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-orange-400">Encryption End-to-End</div>
                    <div className="text-sm text-green-200">Cifrado de datos en tránsito y reposo</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-cyan-400">Auditoría Completa</div>
                    <div className="text-sm text-green-200">Logs detallados y trazabilidad</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-yellow-400">Cumplimiento LATAM</div>
                    <div className="text-sm text-green-200">Adherencia a regulaciones locales</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="benefits" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <TrendingUp className="w-6 h-6" />
                    <span>Para Corporaciones</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-green-400">40%</div>
                    <div className="text-sm text-green-200">Reducción en costos de financiamiento</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-blue-400">60%</div>
                    <div className="text-sm text-green-200">Mejora en flujo de caja</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-purple-400">90%</div>
                    <div className="text-sm text-green-200">Automatización de procesos</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Users className="w-6 h-6" />
                    <span>Para PYMEs</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-orange-400">85%</div>
                    <div className="text-sm text-green-200">Mejora en acceso a capital</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-cyan-400">5 min</div>
                    <div className="text-sm text-green-200">Tiempo promedio de aprobación</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-yellow-400">24/7</div>
                    <div className="text-sm text-green-200">Disponibilidad del servicio</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Building2 className="w-6 h-6" />
                    <span>Para Bancos</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-green-400">3x</div>
                    <div className="text-sm text-green-200">Mayor eficiencia operativa</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-blue-400">50%</div>
                    <div className="text-sm text-green-200">Reducción en costos operativos</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-purple-400">99.9%</div>
                    <div className="text-sm text-green-200">Disponibilidad del sistema</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        <div className="text-center mt-16">
          <Button
            size="lg"
            className="bg-white text-green-900 hover:bg-green-50 px-8 py-3"
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
