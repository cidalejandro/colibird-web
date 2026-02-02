import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

const Contact = () => {
  return (
    <section id="contacto" className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-blob-secondary opacity-40 blur-3xl translate-y-1/2 -translate-x-1/2" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-primary rounded-2xl p-8 md:p-12 text-center shadow-medium">
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
              <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center group-hover:bg-secondary transition-all duration-300">
                <Mail className="w-6 h-6 text-muted-foreground group-hover:text-secondary-foreground" />
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
              <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center group-hover:bg-secondary transition-all duration-300">
                <Phone className="w-6 h-6 text-muted-foreground group-hover:text-secondary-foreground" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Teléfono</p>
                <p className="font-medium text-foreground">+54 11 1234-5678</p>
              </div>
            </a>

            <div className="flex items-center gap-4 p-6 bg-card rounded-xl shadow-soft border border-border/50">
              <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center">
                <MapPin className="w-6 h-6 text-muted-foreground" />
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
