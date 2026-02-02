import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

const Contact = () => {
  return (
    <section id="contacto" className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Background decoration - curved arcs */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-blob-secondary opacity-50 blur-3xl translate-y-1/2 -translate-x-1/2" />
      
      <svg
        className="absolute left-1/2 top-0 w-[600px] h-[300px] opacity-20 -translate-x-1/2"
        viewBox="0 0 600 300"
        fill="none"
      >
        <path
          d="M 50 250 Q 150 150, 300 180 Q 450 210, 550 100"
          stroke="url(#contactGrad1)"
          strokeWidth="6"
          strokeLinecap="round"
        />
        <path
          d="M 30 280 Q 130 180, 280 210 Q 430 240, 530 130"
          stroke="url(#contactGrad2)"
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray="10 5"
        />
        <defs>
          <linearGradient id="contactGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(30 100% 60%)" />
            <stop offset="50%" stopColor="hsl(5 100% 60%)" />
            <stop offset="100%" stopColor="hsl(350 65% 35%)" />
          </linearGradient>
          <linearGradient id="contactGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(15 100% 65%)" />
            <stop offset="100%" stopColor="hsl(350 60% 45%)" />
          </linearGradient>
        </defs>
      </svg>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-primary via-primary to-secondary/80 rounded-2xl p-8 md:p-12 text-center shadow-medium">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4 tracking-tight">
              ¿Listo para acelerar valor?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-4 max-w-2xl mx-auto">
              Si algo de lo que leíste conecta con una necesidad, hipótesis o intuición:
            </p>
            <p className="text-primary-foreground font-medium text-lg mb-8">
              Agendemos una call y definamos dónde podemos acelerar valor primero.
            </p>
            <Button
              variant="heroOutline"
              size="lg"
              className="bg-card text-foreground border-0 hover:bg-card/90"
            >
              Agendar reunión
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <a
              href="mailto:contacto@magnopartners.com"
              className="flex items-center gap-4 p-6 bg-card rounded-xl shadow-soft hover:shadow-medium transition-all duration-300 group border border-border/50"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-secondary to-coral flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="font-medium text-foreground">contacto@magnopartners.com</p>
              </div>
            </a>

            <a
              href="tel:+541112345678"
              className="flex items-center gap-4 p-6 bg-card rounded-xl shadow-soft hover:shadow-medium transition-all duration-300 group border border-border/50"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-secondary to-coral flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Teléfono</p>
                <p className="font-medium text-foreground">+54 11 1234-5678</p>
              </div>
            </a>

            <div className="flex items-center gap-4 p-6 bg-card rounded-xl shadow-soft border border-border/50">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-secondary to-coral flex items-center justify-center">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Ubicación</p>
                <p className="font-medium text-foreground">Buenos Aires, Argentina</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
