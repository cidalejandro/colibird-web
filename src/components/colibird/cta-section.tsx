"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, CheckCircle, Sparkles, Star } from "lucide-react"

const benefits = [
  "Implementación API-first en días",
  "Cumplimiento regulatorio automático LATAM",
  "Escalabilidad para millones de transacciones",
  "Soporte técnico especializado 24/7",
]

export function CTASection() {
  return (
    <section className="py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-r from-primary to-secondary rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-r from-secondary to-accent rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="absolute inset-0 pointer-events-none">
        <Star className="absolute top-32 left-1/4 w-6 h-6 text-primary/20 animate-pulse" />
        <Sparkles
          className="absolute bottom-32 right-1/3 w-8 h-8 text-secondary/20 animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <Star
          className="absolute top-1/2 right-20 w-4 h-4 text-accent/30 animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <Card className="gradient-card border-border/50 shadow-2xl hover:shadow-3xl transition-all duration-500 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <CardContent className="p-16 text-center relative z-10">
            <div className="mb-8">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full px-6 py-3 mb-6">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-primary">Partnership Estratégico</span>
              </div>

              <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance leading-tight">
                ¿Listo para Escalar
                <br />
                <span className="gradient-text">tu Operación?</span>
              </h2>
            </div>

            <p className="text-xl text-muted-foreground mb-12 text-pretty max-w-3xl mx-auto leading-relaxed">
              Únete a jugadores líderes de SCF y Factoring que ya están transformando el acceso al capital para PYMEs
              LATAM con nuestra tecnología de procesamiento de facturas impulsada por IA.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 max-w-2xl mx-auto">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-4 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors duration-300 group/item"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center group-hover/item:scale-110 transition-transform duration-300">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-muted-foreground font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="flex justify-center mb-8">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white px-12 py-6 text-lg font-semibold rounded-2xl transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-primary/25 group/btn"
                onClick={() => (window.location.href = "/contacto")}
              >
                <span>Contacta a un Experto</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
              </Button>
            </div>

          </CardContent>
        </Card>
      </div>
    </section>
  )
}
