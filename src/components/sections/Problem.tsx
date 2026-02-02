import { FileX, BarChart3, Clock, DollarSign } from "lucide-react";

const problems = [
  {
    icon: FileX,
    title: "Programas estratégicos sin implementación",
    description: "La estrategia queda en el papel sin ejecución real",
  },
  {
    icon: BarChart3,
    title: "Roadmaps que no capturan revenue",
    description: "Los planes no se traducen en ingresos concretos",
  },
  {
    icon: Clock,
    title: "Time-to-market demasiado largo",
    description: "Los productos tardan demasiado en llegar al mercado",
  },
  {
    icon: DollarSign,
    title: "Costos de ejecución elevados",
    description: "La inversión no se traduce en valor tangible",
  },
];

const Problem = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            El Problema que Resolvemos
          </h2>
          <p className="text-gradient text-xl font-semibold mb-4">
            La oportunidad existe — el desafío está en capturarla a tiempo.
          </p>
          <p className="text-muted-foreground text-lg">
            Muchas fintechs, empresas de pagos y startups con capital disponible
            enfrentan un mismo desafío: la ejecución es más lenta y costosa que la
            visión.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {problems.map((problem, index) => (
            <div
              key={problem.title}
              className="group bg-card rounded-2xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 border border-border/50"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center flex-shrink-0 group-hover:bg-gradient-primary transition-all duration-300">
                  <problem.icon className="w-6 h-6 text-accent-foreground group-hover:text-primary-foreground transition-colors" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-foreground mb-2">
                    {problem.title}
                  </h3>
                  <p className="text-muted-foreground">{problem.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problem;
