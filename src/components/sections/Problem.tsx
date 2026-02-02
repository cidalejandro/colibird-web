import { FileX, BarChart3, Clock, DollarSign, Users } from "lucide-react";

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
    icon: DollarSign,
    title: "Pricing desconectado del negocio",
    description: "Modelos comerciales que no reflejan la realidad del mercado",
  },
  {
    icon: Clock,
    title: "Falta de accountability",
    description: "Equipos sin bandwidth para ejecutar mientras operan el día a día",
  },
];

const Problem = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 tracking-tight">
            El Problema que Resolvemos
          </h2>
          <p className="text-gradient text-xl font-semibold mb-4">
            La oportunidad existe — el desafío está en capturarla a tiempo.
          </p>
          <p className="text-muted-foreground text-lg">
            Muchas fintechs, empresas de pagos y startups con capital disponible
            enfrentan un mismo desafío: la ejecución es más lenta y costosa que la
            visión. Existe claridad sobre "qué hacer", pero el valor no se captura a tiempo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {problems.map((problem, index) => (
            <div
              key={problem.title}
              className="group bg-card rounded-xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 border border-border/50"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center flex-shrink-0 group-hover:bg-secondary transition-all duration-300">
                  <problem.icon className="w-6 h-6 text-muted-foreground group-hover:text-secondary-foreground transition-colors" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-foreground mb-2">
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
