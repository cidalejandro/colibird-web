import { CheckCircle } from "lucide-react";
import logoBna from "@/assets/logo-bna.png";
import logoInterbanking from "@/assets/logo-interbanking.png";

const differentiators = [
  {
    title: "Consultoría que también opera",
    description: "No solo diseñamos, ejecutamos junto a tu equipo."
  },
  {
    title: "Velocidad con método",
    description: "Sprints ágiles con frameworks probados."
  },
  {
    title: "Enfoque revenue first",
    description: "Cada iniciativa orientada a generar ingresos."
  },
  {
    title: "Involucramiento senior 100% real",
    description: "Los que venden son los que trabajan."
  },
  {
    title: "Resultados visibles en cada sprint",
    description: "Entregables concretos, no solo slides."
  },
  {
    title: "Hablamos tu idioma",
    description: "Negocio, producto, tecnología y regulación."
  },
];

const expertise = [
  {
    title: "Banca & Fintech B2B",
    description: "Pagos, SCF, factoring, e-invoicing"
  },
  {
    title: "Modelos de Negocio",
    description: "Rediseño + revenue boosters"
  },
  {
    title: "Transformación Digital",
    description: "Aceleración comercial y operativa"
  },
  {
    title: "Operating Model",
    description: "Squads, diseño y ejecución"
  },
];

const cases = [
  {
    logo: logoBna,
    name: "Banco Nación Argentina",
    description: "Estructura, modelo orientado a Cliente, roadmap y ejecución."
  },
  {
    logo: logoInterbanking,
    name: "Interbanking",
    description: "Diseño y habilitación del negocio factoring & SCF, RFP/M&A, soporte a Directorio."
  },
];

const WhyMagno = () => {
  return (
    <section id="nosotros" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 tracking-tight">
              Por qué MAGNO
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Cuando todas las consultoras dicen lo mismo, esto es lo que realmente nos diferencia.
            </p>
          </div>

          {/* Differentiators Cards */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-foreground mb-8 tracking-tight text-center">
              Nuestra Diferencia
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {differentiators.map((item, index) => (
                <div 
                  key={index} 
                  className="bg-card rounded-xl p-6 shadow-soft border border-border/50 hover:shadow-medium hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <CheckCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                    <h4 className="font-semibold text-foreground">{item.title}</h4>
                  </div>
                  <p className="text-muted-foreground text-sm pl-8">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Expertise Cards */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-foreground mb-4 tracking-tight text-center">
              Expertise
            </h3>
            <p className="text-muted-foreground text-center mb-8">
              En las industrias donde operamos, el conocimiento técnico importa:
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {expertise.map((item, index) => (
                <div 
                  key={index} 
                  className="bg-gradient-to-br from-secondary/10 to-coral/10 rounded-xl p-6 border border-secondary/20 hover:border-secondary/40 transition-all duration-300"
                >
                  <div className="w-3 h-3 rounded-full bg-secondary mb-4" />
                  <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Cases with Logos */}
          <div className="bg-muted/50 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl font-bold text-foreground mb-8 tracking-tight text-center">
              Casos Destacados
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {cases.map((caseItem, index) => (
                <div 
                  key={index}
                  className="bg-card rounded-xl p-6 shadow-soft border border-border/50 flex flex-col items-center text-center hover:shadow-medium transition-all duration-300"
                >
                  <div className="h-20 flex items-center justify-center mb-6">
                    <img 
                      src={caseItem.logo} 
                      alt={caseItem.name} 
                      className="max-h-16 w-auto object-contain"
                    />
                  </div>
                  <h4 className="font-bold text-foreground text-lg mb-3">{caseItem.name}</h4>
                  <p className="text-muted-foreground text-sm">{caseItem.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyMagno;