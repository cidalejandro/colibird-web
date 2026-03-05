"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { FileCheck, CreditCard, ArrowRight, CheckCircle, Globe, Building2 } from "lucide-react"

export function ProductsSection() {
  const products = [
    {
      id: "echeq",
      name: "ECHEQ",
      country: "Argentina",
      flag: "🇦🇷",
      description: "Plataforma integral para gestión de cheques electrónicos BCRA con integración bancaria completa",
      category: "Cheques Electrónicos",
      status: "Disponible",
      features: [
        "Emisión y gestión de cheques electrónicos BCRA",
        "Validación automática con sistema bancario argentino",
        "Procesamiento instantáneo 24/7",
        "Integración con principales bancos argentinos",
        "Cumplimiento total con normativas BCRA",
      ],
      metrics: {
        clients: "15 Bancos",
        transactions: "1.5M+ Cheques",
        compliance: "99.9% Uptime",
      },
      icon: FileCheck,
      gradient: "from-blue-500 to-cyan-600",
    },
    {
      id: "radian",
      name: "RADIAN Local Orchestrator",
      country: "Colombia",
      flag: "🇨🇴",
      description: "Solución líder en procesamiento inteligente de facturas electrónicas DIAN con IA avanzada",
      category: "Facturación Electrónica DIAN",
      status: "Disponible",
      features: [
        "Procesamiento automático de facturas electrónicas DIAN",
        "Validación en tiempo real con regulaciones colombianas",
        "Extracción de datos con IA avanzada",
        "Integración directa con sistemas ERP",
        "Cumplimiento 100% con normativas fiscales",
      ],
      metrics: {
        throughput: "2M+ Facturas",
        latency: "<200ms",
        compliance: "99.9% Uptime",
      },
      icon: CreditCard,
      gradient: "from-yellow-500 to-blue-600",
    },
  ]

  const countries = [
    {
      name: "Colombia",
      flag: "🇨🇴",
      products: ["RADIAN Local Orchestrator", "Procesamiento IA Facturas"],
      market: "$64B SCF Market",
      regulation: "DIAN Compliant",
      status: "Activo",
    },
    {
      name: "Argentina",
      flag: "🇦🇷",
      products: ["ECHEQ", "Cheques Digitales"],
      market: "$12B Cheques Market",
      regulation: "BCRA Compliant",
      status: "Activo",
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Products Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 border-purple-200">
            Nuestros Productos
          </Badge>
          <h2 className="text-4xl font-bold mb-6 gradient-text-brand">Soluciones Especializadas por País</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Tecnología adaptada a las regulaciones y necesidades específicas de cada mercado en América Latina
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {products.map((product) => (
            <Card
              key={product.id}
              className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm"
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${product.gradient} text-white`}>
                    <product.icon className="w-6 h-6" />
                  </div>
                  <div className="text-right">
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="text-2xl">{product.flag}</span>
                      <span className="text-sm font-medium text-muted-foreground">{product.country}</span>
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {product.status}
                    </Badge>
                  </div>
                </div>
                <CardTitle className="text-2xl font-bold mb-2">{product.name}</CardTitle>
                <CardDescription className="text-base">{product.description}</CardDescription>
                <Badge className="w-fit mt-2 bg-purple-100 text-purple-700 border-purple-200">{product.category}</Badge>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">
                    Características Principales
                  </h4>
                  <ul className="space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start space-x-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-100">
                  {Object.entries(product.metrics).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="font-bold text-lg gradient-text">{value}</div>
                      <div className="text-xs text-muted-foreground capitalize">
                        {key === "throughput"
                          ? "Rendimiento"
                          : key === "latency"
                            ? "Latencia"
                            : key === "compliance"
                              ? "Cumplimiento"
                              : key === "clients"
                                ? "Clientes"
                                : key === "transactions"
                                  ? "Transacciones"
                                  : key === "documents"
                                    ? "Documentos"
                                    : key}
                      </div>
                    </div>
                  ))}
                </div>

                <Button className="w-full group-hover:scale-105 transition-transform duration-300 gradient-primary">
                  Ver Detalles de {product.name}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Countries Section */}
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-gradient-to-r from-orange-100 to-pink-100 text-orange-700 border-orange-200">
            Presencia Regional
          </Badge>
          <h3 className="text-3xl font-bold mb-6 gradient-text">Cobertura en América Latina</h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Expandiendo el acceso al capital para PYMEs a través de soluciones tecnológicas especializadas
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {countries.map((country) => (
            <Card
              key={country.name}
              className="text-center hover:shadow-xl transition-all duration-300 border-0 bg-white/60 backdrop-blur-sm"
            >
              <CardHeader className="pb-4">
                <div className="text-4xl mb-3">{country.flag}</div>
                <CardTitle className="text-xl mb-2">{country.name}</CardTitle>
                <Badge
                  variant={country.status === "Activo" ? "default" : "secondary"}
                  className={country.status === "Activo" ? "bg-green-100 text-green-700 border-green-200" : ""}
                >
                  {country.status}
                </Badge>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-center space-x-2 text-sm">
                    <Building2 className="w-4 h-4 text-muted-foreground" />
                    <span className="font-medium">
                      {country.name === "Colombia"
                        ? "RADIAN Local Orchestrator, Procesamiento IA Facturas"
                        : country.products.join(", ")}
                    </span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                    <Globe className="w-4 h-4" />
                    <span>{country.market}</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4" />
                    <span>{country.regulation}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
