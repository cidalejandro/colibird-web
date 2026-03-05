"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Code, Zap, Shield, Globe, Database, CheckCircle, ArrowRight, Copy, Play, Book, Download } from "lucide-react"

export function APIPlatformSection() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null)

  const copyToClipboard = (code: string, id: string) => {
    navigator.clipboard.writeText(code)
    setCopiedCode(id)
    setTimeout(() => setCopiedCode(null), 2000)
  }

  const codeExamples = {
    echeq: `// Crear un cheque electrónico
const response = await fetch('/api/echeq/create', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    amount: 50000,
    currency: 'ARS',
    payee: 'Empresa ABC S.A.',
    dueDate: '2024-12-31',
    concept: 'Pago de servicios'
  })
})

const cheque = await response.json()
console.log('Cheque creado:', cheque.id)`,

    radian: `// Procesar factura electrónica
const response = await fetch('/api/radian/process', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    invoiceXML: invoiceData,
    validateDIAN: true,
    extractData: true
  })
})

const result = await response.json()
console.log('Factura procesada:', result.status)`,

    webhook: `// Configurar webhook para notificaciones
const webhook = await fetch('/api/webhooks/configure', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    url: 'https://tu-app.com/webhook',
    events: ['payment.completed', 'invoice.processed'],
    secret: 'webhook_secret_key'
  })
})

console.log('Webhook configurado:', webhook.id)`,
  }

  return (
    <section id="api" className="py-20 bg-gradient-to-br from-slate-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-purple-100 text-purple-700 hover:bg-purple-200">API Platform</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Integra{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Colibird</span>{" "}
            en tu Sistema
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            APIs RESTful robustas y documentación completa para integrar nuestras soluciones fintech en tu plataforma
            existente
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="text-center p-6 glass rounded-2xl border border-white/20">
            <div className="p-4 gradient-primary rounded-2xl w-fit mx-auto mb-4">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2">Ultra Rápido</h3>
            <p className="text-sm text-muted-foreground">
              Respuestas en menos de 200ms con 99.9% de uptime garantizado
            </p>
          </div>

          <div className="text-center p-6 glass rounded-2xl border border-white/20">
            <div className="p-4 gradient-primary rounded-2xl w-fit mx-auto mb-4">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2">Seguro</h3>
            <p className="text-sm text-muted-foreground">
              Encriptación end-to-end y cumplimiento con estándares PCI DSS
            </p>
          </div>

          <div className="text-center p-6 glass rounded-2xl border border-white/20">
            <div className="p-4 gradient-primary rounded-2xl w-fit mx-auto mb-4">
              <Globe className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2">Multi-País</h3>
            <p className="text-sm text-muted-foreground">
              Soporte nativo para regulaciones de Argentina, Colombia y más
            </p>
          </div>

          <div className="text-center p-6 glass rounded-2xl border border-white/20">
            <div className="p-4 gradient-primary rounded-2xl w-fit mx-auto mb-4">
              <Database className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2">Escalable</h3>
            <p className="text-sm text-muted-foreground">
              Maneja millones de transacciones con arquitectura cloud-native
            </p>
          </div>
        </div>

        {/* API Examples */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-foreground text-center mb-8">Ejemplos de Integración</h3>

          <Tabs defaultValue="echeq" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="echeq">ECHEQ API</TabsTrigger>
              <TabsTrigger value="radian">RADIAN API</TabsTrigger>
              <TabsTrigger value="webhook">Webhooks</TabsTrigger>
            </TabsList>

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
                    onClick={() => copyToClipboard(codeExamples.echeq, "echeq")}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    {copiedCode === "echeq" ? <CheckCircle className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  </Button>
                </div>
                <pre className="p-6 text-sm text-foreground overflow-x-auto">
                  <code>{codeExamples.echeq}</code>
                </pre>
              </div>
            </TabsContent>

            <TabsContent value="radian" className="space-y-4">
              <div className="glass rounded-2xl border border-white/20 overflow-hidden">
                <div className="flex items-center justify-between p-4 border-b border-white/10">
                  <div className="flex items-center space-x-3">
                    <Code className="w-5 h-5 text-purple-600" />
                    <span className="font-medium text-foreground">Procesar Factura Electrónica</span>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => copyToClipboard(codeExamples.radian, "radian")}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    {copiedCode === "radian" ? <CheckCircle className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  </Button>
                </div>
                <pre className="p-6 text-sm text-foreground overflow-x-auto">
                  <code>{codeExamples.radian}</code>
                </pre>
              </div>
            </TabsContent>

            <TabsContent value="webhook" className="space-y-4">
              <div className="glass rounded-2xl border border-white/20 overflow-hidden">
                <div className="flex items-center justify-between p-4 border-b border-white/10">
                  <div className="flex items-center space-x-3">
                    <Code className="w-5 h-5 text-purple-600" />
                    <span className="font-medium text-foreground">Configurar Webhooks</span>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => copyToClipboard(codeExamples.webhook, "webhook")}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    {copiedCode === "webhook" ? <CheckCircle className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  </Button>
                </div>
                <pre className="p-6 text-sm text-foreground overflow-x-auto">
                  <code>{codeExamples.webhook}</code>
                </pre>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Endpoints Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="glass rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-foreground mb-6">Endpoints Principales</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <Badge className="bg-green-100 text-green-700">POST</Badge>
                  <code className="text-sm font-mono">/api/echeq/create</code>
                </div>
                <span className="text-sm text-muted-foreground">Crear cheque</span>
              </div>

              <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <Badge className="bg-blue-100 text-blue-700">GET</Badge>
                  <code className="text-sm font-mono">/api/echeq/{"{id}"}</code>
                </div>
                <span className="text-sm text-muted-foreground">Consultar cheque</span>
              </div>

              <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <Badge className="bg-green-100 text-green-700">POST</Badge>
                  <code className="text-sm font-mono">/api/radian/process</code>
                </div>
                <span className="text-sm text-muted-foreground">Procesar factura</span>
              </div>

              <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <Badge className="bg-purple-100 text-purple-700">PUT</Badge>
                  <code className="text-sm font-mono">/api/webhooks/config</code>
                </div>
                <span className="text-sm text-muted-foreground">Configurar webhook</span>
              </div>
            </div>
          </div>

          <div className="glass rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-foreground mb-6">Recursos de Desarrollo</h3>
            <div className="space-y-4">
              <Button
                variant="outline"
                className="w-full justify-start bg-transparent"
                onClick={() => (window.location.href = "/contacto")}
              >
                <Book className="w-4 h-4 mr-3" />
                Documentación Completa
                <ArrowRight className="w-4 h-4 ml-auto" />
              </Button>

              <Button
                variant="outline"
                className="w-full justify-start bg-transparent"
                onClick={() => (window.location.href = "/contacto")}
              >
                <Play className="w-4 h-4 mr-3" />
                Playground Interactivo
                <ArrowRight className="w-4 h-4 ml-auto" />
              </Button>

              <Button
                variant="outline"
                className="w-full justify-start bg-transparent"
                onClick={() => (window.location.href = "/contacto")}
              >
                <Download className="w-4 h-4 mr-3" />
                SDKs y Librerías
                <ArrowRight className="w-4 h-4 ml-auto" />
              </Button>

              <Button
                variant="outline"
                className="w-full justify-start bg-transparent"
                onClick={() => (window.location.href = "/contacto")}
              >
                <Code className="w-4 h-4 mr-3" />
                Ejemplos de Código
                <ArrowRight className="w-4 h-4 ml-auto" />
              </Button>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center glass rounded-2xl p-12 border border-white/20">
          <h3 className="text-3xl font-bold text-foreground mb-4">¿Listo para Integrar?</h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Obtén tu API key gratuita y comienza a integrar nuestras soluciones en minutos
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="gradient-primary text-white px-8" onClick={() => (window.location.href = "/contacto")}>
              <Play className="w-4 h-4 mr-2" />
              Contacta a un Experto
            </Button>
            <Button
              variant="outline"
              className="px-8 bg-transparent"
              onClick={() => (window.location.href = "/contacto")}
            >
              <Book className="w-4 h-4 mr-2" />
              Contacta a un Experto
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
