"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, Phone, MapPin, Send, Building2, Clock, Globe } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    country: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Contact form:", formData)
    alert("¡Mensaje enviado! Nos pondremos en contacto contigo pronto.")
    setFormData({
      name: "",
      email: "",
      company: "",
      country: "",
      phone: "",
      subject: "",
      message: "",
    })
  }

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Contacta con{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">COLIBIRD</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Estamos aquí para ayudarte a transformar tu negocio con nuestras soluciones fintech innovadoras
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            <div className="glass rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-foreground mb-6">Información de Contacto</h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 gradient-primary rounded-xl">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Email</h4>
                    <p className="text-muted-foreground">info@colibird.com.ar</p>
                    <p className="text-muted-foreground">sales@colibird.com.ar</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 gradient-primary rounded-xl">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Teléfono</h4>
                    <p className="text-muted-foreground">Argentina: +54 911 3375 0788</p>
                    <p className="text-muted-foreground">Colombia: +57 301 661 8412</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 gradient-primary rounded-xl">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Oficinas</h4>
                    <p className="text-muted-foreground">Buenos Aires, Argentina</p>
                    <p className="text-muted-foreground">Bogotá, Colombia</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 gradient-primary rounded-xl">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Horarios</h4>
                    <p className="text-muted-foreground">Lun - Vie: 9:00 - 18:00</p>
                    <p className="text-muted-foreground">GMT-3 (Buenos Aires)</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass rounded-2xl p-8 border border-white/20">
              <h3 className="text-xl font-bold text-foreground mb-4">Soporte Técnico</h3>
              <p className="text-muted-foreground mb-4">
                ¿Necesitas ayuda técnica? Nuestro equipo de soporte está disponible 24/7.
              </p>
              <Button className="w-full gradient-primary text-white">
                <Building2 className="w-4 h-4 mr-2" />
                Portal de Soporte
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="glass rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-foreground mb-6">Envíanos un Mensaje</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="contact-name">Nombre completo *</Label>
                    <Input
                      id="contact-name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Tu nombre"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contact-email">Email *</Label>
                    <Input
                      id="contact-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="tu@empresa.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="contact-company">Empresa</Label>
                    <Input
                      id="contact-company"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Nombre de tu empresa"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contact-country">País</Label>
                    <Select
                      value={formData.country}
                      onValueChange={(value) => setFormData({ ...formData, country: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Selecciona tu país" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="argentina">Argentina</SelectItem>
                        <SelectItem value="colombia">Colombia</SelectItem>
                        <SelectItem value="chile">Chile</SelectItem>
                        <SelectItem value="peru">Perú</SelectItem>
                        <SelectItem value="otro">Otro</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="contact-phone">Teléfono</Label>
                    <Input
                      id="contact-phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+54 911 3375 0788"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contact-subject">Asunto *</Label>
                    <Select
                      value={formData.subject}
                      onValueChange={(value) => setFormData({ ...formData, subject: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Selecciona un asunto" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="demo">Solicitar Demo</SelectItem>
                        <SelectItem value="partnership">Partnership</SelectItem>
                        <SelectItem value="support">Soporte Técnico</SelectItem>
                        <SelectItem value="sales">Consulta Comercial</SelectItem>
                        <SelectItem value="integration">Integración API</SelectItem>
                        <SelectItem value="other">Otro</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contact-message">Mensaje *</Label>
                  <Textarea
                    id="contact-message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Cuéntanos cómo podemos ayudarte..."
                    rows={5}
                    required
                  />
                </div>

                <div className="flex justify-end">
                  <Button type="submit" className="gradient-primary text-white px-8">
                    <Send className="w-4 h-4 mr-2" />
                    Enviar Mensaje
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 glass rounded-2xl border border-white/20">
            <div className="p-4 gradient-primary rounded-2xl w-fit mx-auto mb-4">
              <Globe className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">Presencia Regional</h3>
            <p className="text-muted-foreground">
              Operamos en Argentina y Colombia, enfocados en brindar soluciones fintech especializadas para cada
              mercado.
            </p>
          </div>

          <div className="text-center p-6 glass rounded-2xl border border-white/20">
            <div className="p-4 gradient-primary rounded-2xl w-fit mx-auto mb-4">
              <Building2 className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">Soluciones Enterprise</h3>
            <p className="text-muted-foreground">
              Ofrecemos soluciones personalizadas para grandes empresas con necesidades específicas.
            </p>
          </div>

          <div className="text-center p-6 glass rounded-2xl border border-white/20">
            <div className="p-4 gradient-primary rounded-2xl w-fit mx-auto mb-4">
              <Clock className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">Respuesta Rápida</h3>
            <p className="text-muted-foreground">
              Nos comprometemos a responder todas las consultas en menos de 24 horas.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
