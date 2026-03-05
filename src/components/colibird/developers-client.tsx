import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Code,
  Zap,
  Shield,
  Globe,
  Database,
  CheckCircle,
  ArrowRight,
  Copy,
  Play,
  ExternalLink,
  Terminal,
  FileText,
  Settings,
  Bell,
  Mail,
  BarChart3,
} from "lucide-react"
import { useState } from "react"
import { Navigation } from "@/components/colibird/navigation"
import { Footer } from "@/components/colibird/footer"
import { APIPlatformSection } from "@/components/colibird/api-platform-section"

export default function DevelopersClientPage() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null)

  const copyToClipboard = (code: string, id: string) => {
    navigator.clipboard.writeText(code)
    setCopiedCode(id)
    setTimeout(() => setCopiedCode(null), 2000)
  }

  const sandboxExamples = {
    auth: `// Obtener token de autenticación
const response = await fetch('https://echeq-sandbox-local.up.railway.app/api/coelsa/Seguridad/Token', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    client_id: 'entidad_demo',
    client_secret: '12345'
  })
})

const { data } = await response.json()
const token = data.access_token`,

    echeq: `// Crear cheque electrónico
const response = await fetch('https://echeq-sandbox-local.up.railway.app/api/coelsa/Cheques/Cheque', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer ' + token,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    emisor_cuit: '20123456789',
    emisor_cbu: '1234567890123456789012',
    beneficiario_documento: '30123456789',
    beneficiario_cbu: '9876543210987654321098',
    monto: 100000,
    fecha_vencimiento: '2025-12-31',
    concepto: 'Pago por servicios'
  })
})

const cheque = await response.json()
console.log('Cheque creado:', cheque.data.cheque_id)`,

    validate: `// Validar estado de eCheq
const response = await fetch('https://echeq-sandbox-local.up.railway.app/api/coelsa/consulta/estado', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer ' + token,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    numero_echeq: 'ECHEQ-1756617584299-GWTFGI'
  })
})

const estado = await response.json()
console.log('Estado:', estado.data.estado)`,
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-24 bg-gradient-to-br from-slate-50 via-white to-purple-50">

        <APIPlatformSection />

        {/* Quick Start */}
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Inicio Rápido</h2>
              <p className="text-lg text-muted-foreground">Comienza a integrar ECHEQ en minutos con nuestro sandbox</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <Card className="glass border border-white/20">
                <CardHeader>
                  <div className="p-3 gradient-primary rounded-2xl w-fit mb-4">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle>1. Autenticación</CardTitle>
                  <CardDescription>Obtén tu token JWT para acceder a las APIs</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-slate-900 rounded-lg p-4 text-sm text-green-400 font-mono">
                    POST /api/coelsa/Seguridad/Token
                  </div>
                </CardContent>
              </Card>

              <Card className="glass border border-white/20">
                <CardHeader>
                  <div className="p-3 gradient-primary rounded-2xl w-fit mb-4">
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle>2. Crear eCheq</CardTitle>
                  <CardDescription>Emite tu primer cheque electrónico</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-slate-900 rounded-lg p-4 text-sm text-green-400 font-mono">
                    POST /api/coelsa/Cheques/Cheque
                  </div>
                </CardContent>
              </Card>

              <Card className="glass border border-white/20">
                <CardHeader>
                  <div className="p-3 gradient-primary rounded-2xl w-fit mb-4">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle>3. Validar Estado</CardTitle>
                  <CardDescription>Consulta el estado de tus eCheqs</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-slate-900 rounded-lg p-4 text-sm text-green-400 font-mono">
                    POST /api/coelsa/consulta/estado
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Sandbox Environment */}
        <section className="py-16 px-6 bg-white/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">ECHEQ Sandbox</h2>
              <p className="text-lg text-muted-foreground">
                Entorno completo de desarrollo con gestión de credenciales, monitoreo en tiempo real y documentación interactiva
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              <Card className="glass border border-white/20">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Terminal className="w-5 h-5" />
                    <span>URLs del Sandbox</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                      <div>
                        <p className="font-medium text-sm">Sandbox Principal</p>
                        <code className="text-xs text-muted-foreground">https://echeq-sandbox-local.up.railway.app</code>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => window.open("https://echeq-sandbox-local.up.railway.app", "_blank")}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                      <div>
                        <p className="font-medium text-sm">Swagger UI</p>
                        <code className="text-xs text-muted-foreground">
                          https://echeq-sandbox-local.up.railway.app/api-docs
                        </code>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => window.open("https://echeq-sandbox-local.up.railway.app/api-docs", "_blank")}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                      <div>
                        <p className="font-medium text-sm">Health Check</p>
                        <code className="text-xs text-muted-foreground">
                          https://echeq-sandbox-local.up.railway.app/health
                        </code>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => window.open("https://echeq-sandbox-local.up.railway.app/health", "_blank")}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass border border-white/20">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Settings className="w-5 h-5" />
                    <span>Credenciales de Prueba</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 bg-slate-900 rounded-lg text-sm">
                      <div className="text-green-400 mb-2">// Cliente COELSA Demo</div>
                      <div className="text-white">
                        <div>
                          Client ID: <span className="text-yellow-400">"entidad_demo"</span>
                        </div>
                        <div>
                          Client Secret: <span className="text-yellow-400">"12345"</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 bg-blue-50 rounded-lg">
                      <p className="text-sm text-blue-800">
                        <Shield className="w-4 h-4 inline mr-2" />
                        Estas credenciales son solo para el entorno sandbox y no funcionan en producción.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Code Examples */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-foreground text-center mb-8">Ejemplos de Código</h3>

              <Tabs defaultValue="auth" className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-8">
                  <TabsTrigger value="auth">Autenticación</TabsTrigger>
                  <TabsTrigger value="echeq">Crear eCheq</TabsTrigger>
                  <TabsTrigger value="validate">Validar Estado</TabsTrigger>
                </TabsList>

                <TabsContent value="auth" className="space-y-4">
                  <div className="glass rounded-2xl border border-white/20 overflow-hidden">
                    <div className="flex items-center justify-between p-4 border-b border-white/10">
                      <div className="flex items-center space-x-3">
                        <Code className="w-5 h-5 text-purple-600" />
                        <span className="font-medium text-foreground">Obtener Token JWT</span>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => copyToClipboard(sandboxExamples.auth, "auth")}
                        className="text-muted-foreground hover:text-foreground"
                      >
                        {copiedCode === "auth" ? <CheckCircle className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                      </Button>
                    </div>
                    <pre className="p-6 text-sm text-foreground overflow-x-auto">
                      <code>{sandboxExamples.auth}</code>
                    </pre>
                  </div>
                </TabsContent>

                <TabsContent value="echeq" className="space-y-4">
                  <div className="glass rounded-2xl border border-white/20 overflow-hidden">
                    <div className="flex items-center justify-between p-4 border-b border-white/10">
                      <div className="flex items-center space-x-3">
                        <Code className="w-5 h-5 text-purple-600" />
                        <span className="font-medium text-foreground">Crear Cheque Electrónico</span>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => copyToClipboard(sandboxExamples.echeq, "echeq")}
                        className="text-muted-foreground hover:text-foreground"
                      >
                        {copiedCode === "echeq" ? <CheckCircle className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                      </Button>
                    </div>
                    <pre className="p-6 text-sm text-foreground overflow-x-auto">
                      <code>{sandboxExamples.echeq}</code>
                    </pre>
                  </div>
                </TabsContent>

                <TabsContent value="validate" className="space-y-4">
                  <div className="glass rounded-2xl border border-white/20 overflow-hidden">
                    <div className="flex items-center justify-between p-4 border-b border-white/10">
                      <div className="flex items-center space-x-3">
                        <Code className="w-5 h-5 text-purple-600" />
                        <span className="font-medium text-foreground">Validar Estado de eCheq</span>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => copyToClipboard(sandboxExamples.validate, "validate")}
                        className="text-muted-foreground hover:text-foreground"
                      >
                        {copiedCode === "validate" ? <CheckCircle className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                      </Button>
                    </div>
                    <pre className="p-6 text-sm text-foreground overflow-x-auto">
                      <code>{sandboxExamples.validate}</code>
                    </pre>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        {/* API Features */}
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Características de la API</h2>
              <p className="text-lg text-muted-foreground">APIs robustas diseñadas para integraciones empresariales</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <Card className="glass border border-white/20 text-center">
                <CardContent className="p-6">
                  <div className="p-4 gradient-primary rounded-2xl w-fit mx-auto mb-4">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Ultra Rápido</h3>
                  <p className="text-sm text-muted-foreground">
                    Respuestas en menos de 200ms con 99.9% de uptime garantizado
                  </p>
                </CardContent>
              </Card>

              <Card className="glass border border-white/20 text-center">
                <CardContent className="p-6">
                  <div className="p-4 gradient-primary rounded-2xl w-fit mx-auto mb-4">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Seguro</h3>
                  <p className="text-sm text-muted-foreground">
                    Encriptación end-to-end y cumplimiento con estándares PCI DSS
                  </p>
                </CardContent>
              </Card>

              <Card className="glass border border-white/20 text-center">
                <CardContent className="p-6">
                  <div className="p-4 gradient-primary rounded-2xl w-fit mx-auto mb-4">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Multi-País</h3>
                  <p className="text-sm text-muted-foreground">
                    Soporte nativo para regulaciones de Argentina y Colombia
                  </p>
                </CardContent>
              </Card>

              <Card className="glass border border-white/20 text-center">
                <CardContent className="p-6">
                  <div className="p-4 gradient-primary rounded-2xl w-fit mx-auto mb-4">
                    <Database className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Escalable</h3>
                  <p className="text-sm text-muted-foreground">
                    Maneja millones de transacciones con arquitectura cloud-native
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Sandbox Features */}
        <section className="py-16 px-6 bg-white/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Características Avanzadas del Sandbox</h2>
              <p className="text-lg text-muted-foreground">Herramientas completas para desarrollo y testing</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              <Card className="glass border border-white/20">
                <CardHeader>
                  <div className="p-3 gradient-primary rounded-2xl w-fit mb-4">
                    <Settings className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle>Gestión de Credenciales</CardTitle>
                  <CardDescription>Genera y administra API keys de forma segura</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Creación automática de tenants</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Generación de API keys</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Validación de credenciales</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="glass border border-white/20">
                <CardHeader>
                  <div className="p-3 gradient-primary rounded-2xl w-fit mb-4">
                    <BarChart3 className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle>Monitoreo en Tiempo Real</CardTitle>
                  <CardDescription>Logs y métricas de todas las operaciones</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Logs de API requests</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Estadísticas de transacciones</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Filtros por nivel de log</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="glass border border-white/20">
                <CardHeader>
                  <div className="p-3 gradient-primary rounded-2xl w-fit mb-4">
                    <Database className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle>Datos de Tenant</CardTitle>
                  <CardDescription>Visualiza y gestiona información de tenants</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Información de cuentas</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Historial de transacciones</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Administración avanzada</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <Button
                className="gradient-primary text-white px-8"
                onClick={() => window.open("https://echeq-sandbox-local.up.railway.app", "_blank")}
              >
                <Play className="w-4 h-4 mr-2" />
                Explorar Sandbox Completo
              </Button>
            </div>
          </div>
        </section>

        {/* API Modules */}
        <section className="py-16 px-6 bg-white/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Módulos de API Disponibles</h2>
              <p className="text-lg text-muted-foreground">13 módulos completos documentados en Swagger UI</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: "Cuentas COELSA", desc: "Gestión de cuentas emisoras", icon: Database },
                { name: "Cheques COELSA", desc: "Operaciones con cheques electrónicos", icon: FileText },
                { name: "Endosos COELSA", desc: "Gestión de endosos", icon: ArrowRight },
                { name: "Custodia COELSA", desc: "Operaciones de custodia", icon: Shield },
                { name: "Devoluciones COELSA", desc: "Gestión de devoluciones", icon: ArrowRight },
                { name: "Certificados COELSA", desc: "Emisión de certificados CAC", icon: CheckCircle },
                { name: "Cesión COELSA", desc: "Cesión de derechos", icon: ArrowRight },
                { name: "Avales COELSA", desc: "Gestión de avales", icon: Shield },
                { name: "Mandatos COELSA", desc: "Creación de mandatos", icon: FileText },
                { name: "Notificaciones COELSA", desc: "Sistema de notificaciones", icon: Bell },
                { name: "Seguridad COELSA", desc: "Autenticación y tokens", icon: Shield },
                { name: "Anexos COELSA", desc: "Reportes y conciliaciones", icon: BarChart3 },
              ].map((module, index) => (
                <Card key={index} className="glass border border-white/20 hover:border-purple-200 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-2 bg-purple-100 rounded-lg">
                        <module.icon className="w-5 h-5 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-foreground mb-1">{module.name}</h3>
                        <p className="text-sm text-muted-foreground">{module.desc}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Card className="glass border border-white/20 p-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">¿Listo para Integrar?</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Comienza a usar nuestro sandbox gratuito y explora todas las funcionalidades de ECHEQ con documentación
                completa y ejemplos interactivos
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  className="gradient-primary text-white px-8"
                  onClick={() => window.open("https://echeq-sandbox-local.up.railway.app", "_blank")}
                >
                  <Play className="w-4 h-4 mr-2" />
                  Comenzar con Sandbox
                </Button>
                <Button
                  variant="outline"
                  className="px-8 bg-transparent"
                  onClick={() => (window.location.href = "/contacto")}
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Contacta a un Experto
                </Button>
              </div>
            </Card>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  )
}
