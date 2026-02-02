import { Lightbulb, Users, Package, TrendingUp, Settings } from "lucide-react";

const pillars = [
  { icon: Lightbulb, label: "Estrategia", color: "from-primary to-secondary" },
  { icon: Users, label: "Organización", color: "from-secondary to-primary" },
  { icon: Package, label: "Producto", color: "from-primary to-secondary" },
  { icon: TrendingUp, label: "Revenue", color: "from-secondary to-primary" },
  { icon: Settings, label: "Ejecución (PMO)", color: "from-primary to-secondary" },
];

const WhatWeDo = () => {
  return (
    <section id="que-hacemos" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            ¿Qué es Magno?
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Magno es una consultora boutique que combina pensamiento estratégico,
            entendimiento profundo del negocio financiero y capacidad operativa en
            campo. Trabajamos junto a bancos, fintechs y empresas de pagos para
            crear, habilitar y escalar negocios con una mirada revenue-first.
          </p>
        </div>

        <div className="bg-card rounded-3xl p-8 md:p-12 shadow-soft max-w-4xl mx-auto">
          <h3 className="font-display text-2xl font-bold text-foreground mb-8 text-center">
            Nuestra Propuesta de Valor
          </h3>
          <p className="text-muted-foreground text-center mb-10">
            Si el problema es la distancia entre visión y resultados, nuestra
            propuesta existe para cerrar ese gap.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {pillars.map((pillar, index) => (
              <div
                key={pillar.label}
                className="flex items-center gap-3 bg-accent/50 rounded-full px-6 py-3 transition-all duration-300 hover:shadow-soft hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${pillar.color} flex items-center justify-center`}>
                  <pillar.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="font-medium text-foreground">{pillar.label}</span>
              </div>
            ))}
          </div>

          <p className="text-center text-gradient font-semibold text-lg">
            No entregamos un plan. Acompañamos hasta que el valor sucede.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
