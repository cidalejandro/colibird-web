import { Search, Rocket, Users2, BarChart2, Wrench, CreditCard, ArrowRight } from "lucide-react";

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
            <stop offset="0%" stopColor="hsl(18 88% 62%)" />
            <stop offset="100%" stopColor="hsl(225 8% 40%)" />
          </linearGradient>
          <linearGradient id="serviceGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(18 88% 65%)" />
            <stop offset="100%" stopColor="hsl(6 78% 58%)" />
          </linearGradient>
          <linearGradient id="serviceGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(6 78% 61%)" />
            <stop offset="100%" stopColor="hsl(225 8% 35%)" />
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

        {/* Click to Pay CTA */}
        <div className="mt-16 max-w-6xl mx-auto">
          <a
            href="/click-to-pay"
            className="group flex flex-col md:flex-row items-center gap-6 bg-gradient-to-r from-[#0F1C3F] to-[#0052CC] rounded-2xl p-8 md:p-10 shadow-medium hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            <div className="w-16 h-16 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
              <CreditCard className="w-8 h-8 text-white" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
                <span className="text-xs font-bold uppercase tracking-widest text-blue-300">Nuevo servicio</span>
                <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                Click to Pay Implementation Consulting
              </h3>
              <p className="text-white/75 text-sm md:text-base max-w-2xl">
                Ayudamos a emisores y comercios a integrar Click to Pay — el nuevo estándar global en checkout digital — con expertos en medios de pago, PMs y developers React especializados.
              </p>
            </div>
            <div className="flex items-center gap-2 text-white font-semibold whitespace-nowrap group-hover:gap-3 transition-all duration-200">
              Ver servicio <ArrowRight className="w-5 h-5" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
