"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  FileCheck,
  Shield,
  Zap,
  Settings,
  CheckCircle,
  ArrowRight,
  Code,
  Globe,
  Lock,
  BarChart3,
  Workflow,
  Server,
  Clock,
  Users,
  Building2,
  CreditCard,
} from "lucide-react"

export function RadianDetailSection() {
  const radianEvents = [
    {
      code: "036",
      name: "Inscripción de Factura como Título Valor",
      description: "Registro inicial de factura en el sistema RADIAN",
    },
    { code: "037", name: "Endoso en Propiedad", description: "Transferencia de propiedad del título valor" },
    { code: "038", name: "Endoso en Garantía", description: "Constitución de garantía sobre el título" },
    { code: "039", name: "Endoso en Procuración", description: "Otorgamiento de poder para gestión del título" },
    { code: "043", name: "Mandato", description: "Autorización para actuar en nombre del titular" },
    { code: "044", name: "Terminación de Mandato", description: "Finalización de autorización otorgada" },
    { code: "045", name: "Pago de Factura", description: "Registro de pago del título valor" },
    { code: "046", name: "Informe para el Pago", description: "Notificación de intención de pago" },
    { code: "047", name: "Aceptación Expresa", description: "Aceptación formal del título por el deudor" },
    { code: "048", name: "Aceptación Tácita", description: "Aceptación implícita por comportamiento" },
  ]

  const techStack = [
    { category: "Backend", technologies: ["Node.js", "Express.js", "Camunda BPM", "PostgreSQL", "Redis", "Kafka"] },
    { category: "Frontend", technologies: ["HTML5/CSS3", "JavaScript ES6+", "Responsive Design", "Font Awesome"] },
    { category: "Infraestructura", technologies: ["Docker", "Docker Compose", "Kong Gateway", "Zookeeper"] },
    { category: "Estándares", technologies: ["UBL 2.1", "XAdES-EPES", "XSD", "SOAP", "REST APIs"] },
  ]

  const businessBenefits = [
    {
      icon: Shield,
      title: "Reducción de Riesgos",
      description: "Desarrollo seguro sin afectar producción, cumplimiento normativo DIAN y validación temprana",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: Zap,
      title: "Aceleración del Desarrollo",
      description: "Entorno completo, simulación realista y APIs listas para integración inmediata",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: BarChart3,
      title: "Reducción de Costos",
      description: "Tecnologías open source, desarrollo eficiente y menos errores de implementación",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: CheckCircle,
      title: "Mejora de Calidad",
      description: "Testing automatizado, validaciones exhaustivas y monitoreo continuo",
      gradient: "from-orange-500 to-red-500",
    },
  ]

  const useCases = [
    {
      title: "Empresas Facturadoras",
      description: "Desarrollo de integraciones con RADIAN, validación de procesos y capacitación técnica",
      icon: Building2,
      features: ["Integración RADIAN", "Validación de procesos", "Capacitación técnica"],
    },
    {
      title: "Plataformas de Factoring",
      description: "Simulación de endosos, validación de flujos de pago y desarrollo de funcionalidades",
      icon: CreditCard,
      features: ["Simulación de endosos", "Flujos de pago", "Nuevas funcionalidades"],
    },
    {
      title: "Desarrolladores de Software",
      description: "Entorno completo de desarrollo con APIs, documentación y herramientas de debugging",
      icon: Code,
      features: ["APIs completas", "Documentación técnica", "Herramientas debugging"],
    },
    {
      title: "Consultores y Auditores",
      description: "Validación de conformidad, análisis de procesos y auditoría de implementaciones",
      icon: Users,
      features: ["Conformidad normativa", "Análisis de procesos", "Auditoría técnica"],
    },
  ]

  return (
    <section id="radian" className="py-24 bg-gradient-to-br from-orange-50 via-red-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-to-r from-orange-100 to-red-100 text-orange-700 border-orange-200">
            🇨🇴 Producto Colombia
          </Badge>
          <h2 className="text-4xl font-bold mb-6 gradient-text">RADIAN Local Orchestrator</h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Plataforma integral de orquestación y automatización para el procesamiento de eventos de facturación
            electrónica como títulos valores, conforme a las especificaciones de la DIAN de Colombia
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <Card className="text-center border-0 bg-white/60 backdrop-blur-sm">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold gradient-text mb-2">1000</div>
              <div className="text-sm text-muted-foreground">Eventos por minuto</div>
            </CardContent>
          </Card>
          <Card className="text-center border-0 bg-white/60 backdrop-blur-sm">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold gradient-text mb-2">&lt;500ms</div>
              <div className="text-sm text-muted-foreground">Latencia por evento</div>
            </CardContent>
          </Card>
          <Card className="text-center border-0 bg-white/60 backdrop-blur-sm">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold gradient-text mb-2">99.9%</div>
              <div className="text-sm text-muted-foreground">Disponibilidad</div>
            </CardContent>
          </Card>
          <Card className="text-center border-0 bg-white/60 backdrop-blur-sm">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold gradient-text mb-2">10</div>
              <div className="text-sm text-muted-foreground">Eventos RADIAN</div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="overview" className="space-y-8">
          <TabsList className="grid w-full grid-cols-5 bg-white/60 backdrop-blur-sm">
            <TabsTrigger value="overview">Resumen</TabsTrigger>
            <TabsTrigger value="events">Eventos RADIAN</TabsTrigger>
            <TabsTrigger value="architecture">Arquitectura</TabsTrigger>
            <TabsTrigger value="benefits">Beneficios</TabsTrigger>
            <TabsTrigger value="use-cases">Casos de Uso</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-8">
            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="border-0 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-orange-500 to-red-500 text-white">
                      <Workflow className="w-5 h-5" />
                    </div>
                    <CardTitle>Capacidades Principales</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                      <div>
                        <div className="font-medium">Gestión Completa de Eventos RADIAN</div>
                        <div className="text-sm text-muted-foreground">10 eventos oficiales soportados (036-048)</div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                      <div>
                        <div className="font-medium">Validaciones Avanzadas</div>
                        <div className="text-sm text-muted-foreground">
                          Estructural, lógica, secuencia y firma digital
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                      <div>
                        <div className="font-medium">Simulación Realista</div>
                        <div className="text-sm text-muted-foreground">Latencia y códigos de error oficiales</div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                      <div>
                        <div className="font-medium">Monitoreo y Trazabilidad</div>
                        <div className="text-sm text-muted-foreground">Logging detallado y auditoría completa</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 text-white">
                      <Settings className="w-5 h-5" />
                    </div>
                    <CardTitle>Características Técnicas</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <Server className="w-5 h-5 text-blue-500 mt-0.5" />
                      <div>
                        <div className="font-medium">Arquitectura de Microservicios</div>
                        <div className="text-sm text-muted-foreground">Camunda BPM, Node.js, PostgreSQL, Redis</div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Lock className="w-5 h-5 text-green-500 mt-0.5" />
                      <div>
                        <div className="font-medium">Seguridad Avanzada</div>
                        <div className="text-sm text-muted-foreground">XAdES-EPES, certificados ONAC</div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Globe className="w-5 h-5 text-orange-500 mt-0.5" />
                      <div>
                        <div className="font-medium">APIs RESTful y SOAP</div>
                        <div className="text-sm text-muted-foreground">Integración completa documentada</div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Clock className="w-5 h-5 text-purple-500 mt-0.5" />
                      <div>
                        <div className="font-medium">Alto Rendimiento</div>
                        <div className="text-sm text-muted-foreground">
                          Escalabilidad horizontal y cache inteligente
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="events" className="space-y-6">
            <Card className="border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <FileCheck className="w-6 h-6 text-orange-500" />
                  <span>Eventos RADIAN Soportados</span>
                </CardTitle>
                <CardDescription>
                  Implementación completa de los 10 eventos oficiales del sistema RADIAN de la DIAN
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {radianEvents.map((event) => (
                    <div key={event.code} className="p-4 rounded-lg border border-gray-200 bg-gray-50/50">
                      <div className="flex items-start space-x-3">
                        <Badge className="bg-orange-100 text-orange-700 border-orange-200 font-mono">
                          {event.code}
                        </Badge>
                        <div className="flex-1">
                          <div className="font-medium text-sm mb-1">{event.name}</div>
                          <div className="text-xs text-muted-foreground">{event.description}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="architecture" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-8">
              {techStack.map((stack) => (
                <Card key={stack.category} className="border-0 bg-white/80 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-lg">{stack.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {stack.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="benefits" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {businessBenefits.map((benefit) => (
                <Card
                  key={benefit.title}
                  className="border-0 bg-white/80 backdrop-blur-sm group hover:shadow-lg transition-all duration-300"
                >
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${benefit.gradient} text-white`}>
                        <benefit.icon className="w-6 h-6" />
                      </div>
                      <CardTitle className="text-xl">{benefit.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="use-cases" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {useCases.map((useCase) => (
                <Card key={useCase.title} className="border-0 bg-white/80 backdrop-blur-sm">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="p-2 rounded-lg bg-gradient-to-br from-orange-500 to-red-500 text-white">
                        <useCase.icon className="w-5 h-5" />
                      </div>
                      <CardTitle className="text-lg">{useCase.title}</CardTitle>
                    </div>
                    <CardDescription>{useCase.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {useCase.features.map((feature, index) => (
                        <li key={index} className="flex items-center space-x-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

      </div>
    </section>
  )
}
