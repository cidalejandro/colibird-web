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
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Decorative curves */}
      <svg
        className="absolute left-0 top-1/4 w-[300px] h-[400px] opacity-30"
        viewBox="0 0 300 400"
        fill="none"
      >
        <path
          d="M -50 50 Q 100 100, 50 200 Q 0 300, 100 380"
          stroke="url(#problemGrad1)"
          strokeWidth="6"
          strokeLinecap="round"
        />
        <path
          d="M -30 80 Q 120 130, 70 230 Q 20 330, 120 400"
          stroke="url(#problemGrad2)"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <defs>
          <linearGradient id="problemGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(30 100% 60%)" />
            <stop offset="100%" stopColor="hsl(5 100% 60%)" />
          </linearGradient>
          <linearGradient id="problemGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(5 100% 65%)" />
            <stop offset="100%" stopColor="hsl(350 65% 40%)" />
          </linearGradient>
        </defs>
      </svg>

      <div className="container mx-auto px-4 relative z-10">
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
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-secondary to-coral flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-all duration-300">
                  <problem.icon className="w-6 h-6 text-white" />
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
