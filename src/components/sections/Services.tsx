import { Target, Rocket, Users2, BarChart2, Wrench } from "lucide-react";

const services = [
  {
    icon: Target,
    title: "Estrategia Comercial",
    description:
      "Definimos la visión comercial y el camino para alcanzar objetivos de crecimiento sostenible.",
  },
  {
    icon: Rocket,
    title: "Lanzamiento de Productos",
    description:
      "Acompañamos desde la conceptualización hasta el go-to-market con foco en resultados.",
  },
  {
    icon: Users2,
    title: "Transformación Organizacional",
    description:
      "Diseñamos estructuras ágiles y procesos que permiten escalar sin perder eficiencia.",
  },
  {
    icon: BarChart2,
    title: "Revenue Operations",
    description:
      "Optimizamos el funnel comercial para maximizar conversión y valor de vida del cliente.",
  },
  {
    icon: Wrench,
    title: "PMO y Ejecución",
    description:
      "Nos integramos como equipo extendido para garantizar que los proyectos se ejecuten.",
  },
];

const Services = () => {
  return (
    <section id="servicios" className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-blob-primary opacity-40 blur-3xl -translate-y-1/2 translate-x-1/2" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Nuestros Servicios
          </h2>
          <p className="text-muted-foreground text-lg">
            Ofrecemos un acompañamiento integral que va más allá de la consultoría
            tradicional.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-card rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-2 border border-border/50"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-display font-bold text-xl text-foreground mb-3">
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
