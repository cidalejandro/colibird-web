import { Lightbulb, Target, Package, TrendingUp, Shield } from "lucide-react";

const pillars = [
  { icon: Lightbulb, label: "Business Discovery & Blueprint" },
  { icon: Target, label: "Go-to-Market & New Business" },
  { icon: Package, label: "Organizational Transformation" },
  { icon: TrendingUp, label: "Execution PMO" },
  { icon: Shield, label: "Value Assurance" },
];

const howWeWork = [
  "Execution First: La estrategia solo es valiosa si se implementa",
  "Skin in the Game: Nos involucramos como parte del equipo",
  "Rigor + Pragmatismo: Frameworks sólidos, decisiones prácticas",
  "Ecosystem Mindset: Pensamos en plataformas, partners y escalabilidad",
  "Long-Term Value: Impacto sostenible por sobre resultados cosméticos",
];

const WhatWeDo = () => {
  return (
    <section id="que-hacemos" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 tracking-tight">
            Quiénes Somos
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            MAGNO es una firma de consultoría estratégica especializada en transformación 
            de modelos de negocio, plataformas financieras y ejecución de iniciativas 
            complejas en bancos, fintechs y organizaciones del ecosistema financiero.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed mt-4">
            Trabajamos donde la estrategia, el producto, la tecnología, la operación 
            y la regulación se cruzan. Nuestro foco no está en el diagnóstico aislado, 
            sino en llevar las decisiones a producción y generar impacto real y medible.
          </p>
        </div>

        <div className="bg-card rounded-2xl p-8 md:p-12 shadow-soft max-w-4xl mx-auto mb-16 border border-border/50">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center tracking-tight">
            Del diagnóstico a la ejecución
          </h3>

          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {pillars.map((pillar, index) => (
              <div
                key={pillar.label}
                className="flex items-center gap-3 bg-muted rounded-full px-5 py-3 transition-all duration-300 hover:shadow-soft hover:scale-105"
              >
                <div className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center">
                  <pillar.icon className="w-4 h-4 text-secondary-foreground" />
                </div>
                <span className="font-medium text-foreground text-sm">{pillar.label}</span>
              </div>
            ))}
          </div>

          <p className="text-center text-gradient font-semibold text-lg">
            No entregamos un plan. Acompañamos hasta que el valor sucede.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center tracking-tight">
            Nuestro ADN
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {howWeWork.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 bg-card rounded-xl border border-border/50"
              >
                <div className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0" />
                <p className="text-foreground">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
