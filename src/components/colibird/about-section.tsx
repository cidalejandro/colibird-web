"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Target, Eye, Heart, Users, Award, TrendingUp, Globe, Linkedin, Mail } from "lucide-react"

export function AboutSection() {
  const teamMembers = [
    {
      name: "Alejandro Cid",
      role: "CEO & Founder",
      description:
        "Seasoned expert in financing and payment systems in LatAm with 27+ years of experience in financial institutions. Former CEO at KLYM, with expertise in Asset-Based Finance and digital transformation.",
      linkedin: "https://www.linkedin.com/in/alejocid/",
      image: "/professional-headshot-of-alejandro-cid-ceo.jpg",
    },
    {
      name: "Dario Lanchuske",
      role: "CPO & CTO",
      description:
        "Fintech executive with international experience leading digital transformation and product strategy in Latin America. Former CPO at KLYM, scaled operations from USD 10M to USD 200M across 4 countries.",
      linkedin: "https://www.linkedin.com/in/lanchuskedario/",
      image: "/professional-headshot-of-dario-lanchuske-cpo.jpg",
    },
  ]

  const values = [
    {
      icon: Target,
      title: "Innovación",
      description: "Desarrollamos tecnología de vanguardia que transforma la industria fintech en LATAM",
    },
    {
      icon: Heart,
      title: "Compromiso",
      description: "Nos comprometemos con el éxito de nuestros clientes y el crecimiento de sus negocios",
    },
    {
      icon: Users,
      title: "Colaboración",
      description: "Creemos en el poder de las alianzas estratégicas para crear valor compartido",
    },
    {
      icon: Award,
      title: "Excelencia",
      description: "Mantenemos los más altos estándares de calidad en todos nuestros productos y servicios",
    },
  ]

  const milestones = [
    {
      year: "2020",
      title: "Fundación de COLIBIRD",
      description: "Inicio de operaciones con foco en soluciones fintech para LATAM",
    },
    {
      year: "2021",
      title: "Lanzamiento de ECHEQ",
      description: "Primera solución de cheques electrónicos en Argentina",
    },
    {
      year: "2022",
      title: "Expansión a Colombia",
      description: "Lanzamiento de RADIAN para facturas electrónicas",
    },
    {
      year: "2023",
      title: "API Platform",
      description: "Apertura de APIs para integraciones empresariales",
    },
    {
      year: "2024",
      title: "Crecimiento Regional",
      description: "Consolidación en Argentina y Colombia con tecnología de vanguardia",
    },
  ]

  return (
    <div className="py-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 via-white to-pink-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-purple-100 text-purple-700 hover:bg-purple-200">Acerca de Nosotros</Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Transformando el{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Futuro Fintech
              </span>{" "}
              de LATAM
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              COLIBIRD nació con la misión de democratizar el acceso a soluciones financieras innovadoras en América
              Latina, combinando inteligencia artificial con deep expertise en regulaciones locales.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="glass border-white/20">
              <CardContent className="p-8 text-center">
                <div className="p-4 gradient-primary rounded-2xl w-fit mx-auto mb-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Nuestra Misión</h3>
                <p className="text-muted-foreground">
                  Empoderar a las empresas de LATAM con tecnología fintech de clase mundial, simplificando procesos
                  complejos y acelerando el crecimiento económico regional.
                </p>
              </CardContent>
            </Card>

            <Card className="glass border-white/20">
              <CardContent className="p-8 text-center">
                <div className="p-4 gradient-primary rounded-2xl w-fit mx-auto mb-4">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Nuestra Visión</h3>
                <p className="text-muted-foreground">
                  Ser la plataforma fintech líder en América Latina, conectando ecosistemas financieros y habilitando la
                  próxima generación de servicios digitales.
                </p>
              </CardContent>
            </Card>

            <Card className="glass border-white/20">
              <CardContent className="p-8 text-center">
                <div className="p-4 gradient-primary rounded-2xl w-fit mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Nuestro Impacto</h3>
                <p className="text-muted-foreground">
                  Procesamos millones de transacciones mensuales, ayudando a empresas de todos los tamaños a optimizar
                  sus operaciones financieras y cumplir con regulaciones.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Nuestro Equipo Directivo</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Líderes con décadas de experiencia en fintech, banca y transformación digital
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {teamMembers.map((member, index) => (
              <Card key={index} className="glass border-white/20 overflow-hidden">
                <CardContent className="p-0">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-foreground mb-2">{member.name}</h3>
                    <p className="text-purple-600 font-semibold mb-4">{member.role}</p>
                    <p className="text-muted-foreground mb-6 leading-relaxed">{member.description}</p>
                    <div className="flex space-x-3">
                      <Button variant="outline" size="sm" asChild>
                        <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                          <Linkedin className="w-4 h-4 mr-2" />
                          LinkedIn
                        </a>
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => window.location.href = "/contacto"}
                      >
                        <Mail className="w-4 h-4 mr-2" />
                        Contactar
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Nuestros Valores</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Los principios que guían cada decisión y definen nuestra cultura organizacional
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="glass border-white/20 text-center">
                <CardContent className="p-8">
                  <div className="p-4 gradient-primary rounded-2xl w-fit mx-auto mb-6">
                    {value.icon && <value.icon className="w-8 h-8 text-white" />}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Nuestra Historia</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              El camino que nos ha llevado a ser líderes en fintech LATAM
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-600 to-pink-600 rounded-full"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}>
                    <Card className="glass border-white/20">
                      <CardContent className="p-6">
                        <div className="text-2xl font-bold text-purple-600 mb-2">{milestone.year}</div>
                        <h3 className="text-xl font-bold text-foreground mb-3">{milestone.title}</h3>
                        <p className="text-muted-foreground">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="relative z-10">
                    <div className="w-6 h-6 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full border-4 border-white shadow-lg"></div>
                  </div>

                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-600 to-pink-600">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">¿Quieres Formar Parte de Nuestra Historia?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Únete a nosotros en la transformación del ecosistema fintech de América Latina
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="bg-white text-purple-600 hover:bg-white/90 px-8"
              onClick={() => window.location.href = "/contacto"}
            >
              <Users className="w-4 h-4 mr-2" />
              Únete al Equipo
            </Button>
            <Button 
              variant="outline" 
              className="border-white text-white hover:bg-white/10 px-8 bg-transparent"
              onClick={() => window.location.href = "/contacto"}
            >
              <Globe className="w-4 h-4 mr-2" />
              Conviértete en Partner
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
