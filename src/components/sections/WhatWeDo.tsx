import { Lightbulb, Target, Package, TrendingUp, Shield, Zap, Users, Layers, Globe, Award, ExternalLink } from "lucide-react";

const pillars = [
  { icon: Lightbulb, label: "Business Discovery & Blueprint" },
  { icon: Target, label: "Go-to-Market & New Business" },
  { icon: Package, label: "Organizational Transformation" },
  { icon: TrendingUp, label: "Execution PMO" },
  { icon: Shield, label: "Value Assurance" },
];

const howWeWork = [
  { 
    icon: Zap, 
    title: "Execution First", 
    description: "La estrategia solo es valiosa si se implementa" 
  },
  { 
    icon: Users, 
    title: "Skin in the Game", 
    description: "Nos involucramos como parte del equipo" 
  },
  { 
    icon: Layers, 
    title: "Rigor + Pragmatismo", 
    description: "Frameworks sólidos, decisiones prácticas" 
  },
  { 
    icon: Globe, 
    title: "Ecosystem Mindset", 
    description: "Pensamos en plataformas, partners y escalabilidad" 
  },
  { 
    icon: Award, 
    title: "Long-Term Value", 
    description: "Impacto sostenible por sobre resultados cosméticos" 
  },
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
            MAGNO es la <strong className="text-foreground">firma de consultoría estratégica</strong> del ecosistema{" "}
            <a
              href="https://colibird.com.ar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gradient-colibird font-semibold hover:opacity-80 transition-opacity"
            >
              Colibird
            </a>
            , especializada en transformación de modelos de negocio, plataformas financieras y ejecución de iniciativas complejas en bancos, fintechs y organizaciones del ecosistema financiero.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed mt-4">
            Trabajamos donde la estrategia, el producto, la tecnología, la operación 
            y la regulación se cruzan. Nuestro foco no está en el diagnóstico aislado, 
            sino en llevar las decisiones a producción y generar impacto real y medible.
          </p>
        </div>

        {/* Ecosystem Banner */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="rounded-2xl p-[1.5px] bg-gradient-colibird">
            <div className="rounded-2xl bg-white p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-center sm:text-left">
                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">Ecosistema</p>
                <p className="text-foreground font-semibold">
                  <span className="text-gradient-colibird">Colibird</span> es la infraestructura digital de liquidez para LATAM.{" "}
                  <span className="text-muted-foreground font-normal">MAGNO es su brazo consultivo.</span>
                </p>
              </div>
              <a
                href="https://colibird.com.ar"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-colibird text-white text-sm font-semibold whitespace-nowrap hover:opacity-90 transition-opacity shadow-md"
              >
                Conocer Colibird <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
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

        {/* Nuestro ADN - Cards */}
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl font-bold text-foreground mb-10 text-center tracking-tight">
            Nuestro ADN
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {howWeWork.map((item, index) => (
              <div
                key={index}
                className="group p-6 bg-card rounded-2xl border border-border/50 shadow-soft hover:shadow-medium hover:border-secondary/30 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary to-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-bold text-foreground text-lg mb-2">{item.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
