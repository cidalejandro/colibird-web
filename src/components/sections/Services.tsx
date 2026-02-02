import { Search, Rocket, Users2, BarChart2, Wrench } from "lucide-react";

const services = [
  {
    icon: Search,
    title: "Business Discovery & Blueprint",
    description:
      "Diagnóstico, benchmark y rediseño del modelo de negocio. Discovery estratégico y blueprints de producto y plataforma.",
  },
  {
    icon: Rocket,
    title: "Go-to-Market & New Business",
    description:
      "Pricing, monetización, propuesta de valor y aceleración del time-to-market. Habilitación de nuevos negocios.",
  },
  {
    icon: Users2,
    title: "Organizational Transformation",
    description:
      "Roles, accountability, estructura lista para escalar. Operating model design, squads y capacidades digitales.",
  },
  {
    icon: BarChart2,
    title: "Execution PMO",
    description:
      "KPIs, cadencias, shadow coaching. Trabajo por sprints con involucramiento senior 100% real.",
  },
  {
    icon: Wrench,
    title: "Value Assurance",
    description:
      "Gobernanza, métricas, roadmap y aseguramiento de resultados. Acompañamos hasta que el valor se materializa.",
  },
];

const Services = () => {
  return (
    <section id="servicios" className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Background decoration - curved arcs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-blob-primary opacity-50 blur-3xl -translate-y-1/2 translate-x-1/2" />
      
      <svg
        className="absolute right-0 bottom-0 w-[400px] h-[500px] opacity-25"
        viewBox="0 0 400 500"
        fill="none"
      >
        <path
          d="M 450 100 Q 350 200, 400 300 Q 450 400, 350 480"
          stroke="url(#serviceGrad1)"
          strokeWidth="8"
          strokeLinecap="round"
        />
        <path
          d="M 480 130 Q 380 230, 430 330 Q 480 430, 380 500"
          stroke="url(#serviceGrad2)"
          strokeWidth="5"
          strokeLinecap="round"
          strokeDasharray="12 6"
        />
        <path
          d="M 420 70 Q 320 170, 370 270 Q 420 370, 320 450"
          stroke="url(#serviceGrad3)"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <defs>
          <linearGradient id="serviceGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(30 100% 60%)" />
            <stop offset="100%" stopColor="hsl(350 65% 35%)" />
          </linearGradient>
          <linearGradient id="serviceGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(15 100% 60%)" />
            <stop offset="100%" stopColor="hsl(5 100% 55%)" />
          </linearGradient>
          <linearGradient id="serviceGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(5 100% 65%)" />
            <stop offset="100%" stopColor="hsl(350 65% 40%)" />
          </linearGradient>
        </defs>
      </svg>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 tracking-tight">
            Qué Hacemos
          </h2>
          <p className="text-muted-foreground text-lg">
            Pilares de impacto: del diagnóstico a la ejecución, estructuramos el trabajo 
            para que cada etapa construya valor.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-card rounded-xl p-8 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-2 border border-border/50"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-secondary to-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300">
                <service.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-xl text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
