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
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-blob-primary opacity-40 blur-3xl -translate-y-1/2 translate-x-1/2" />
      
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
              <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center mb-6 group-hover:bg-secondary transition-all duration-300">
                <service.icon className="w-6 h-6 text-primary-foreground" />
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
