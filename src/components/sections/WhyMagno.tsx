import { CheckCircle } from "lucide-react";

const differentiators = [
  "Consultoría que también opera",
  "Velocidad con método",
  "Enfoque revenue first",
  "Involucramiento senior 100% real",
  "Resultados visibles en cada sprint",
  "Hablamos negocio, producto, tecnología y regulación en el mismo idioma",
];

const expertise = [
  "Banca, pagos, SCF, factoring, e-invoicing, fintech B2B",
  "Rediseño de modelos de negocio + revenue boosters",
  "Transformación digital y aceleración comercial",
  "Operating model design, squads y ejecución",
];

const WhyMagno = () => {
  return (
    <section id="nosotros" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 tracking-tight">
              Por qué MAGNO
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Cuando todas las consultoras dicen lo mismo, esto es lo que realmente nos diferencia.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6 tracking-tight">
                Nuestra Diferencia
              </h3>
              <div className="space-y-4">
                {differentiators.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                    <p className="text-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6 tracking-tight">
                Expertise
              </h3>
              <p className="text-muted-foreground mb-6">
                En las industrias donde operamos, el conocimiento técnico importa:
              </p>
              <div className="space-y-4">
                {expertise.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0" />
                    <p className="text-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Cases */}
          <div className="mt-16 p-8 bg-muted/50 rounded-xl">
            <h3 className="text-xl font-bold text-foreground mb-4 tracking-tight">
              Casos Destacados
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0" />
                <p className="text-foreground">
                  <span className="font-semibold">Banco Nación Argentina:</span> estructura, modelo orientado a cliente, roadmap y ejecución.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0" />
                <p className="text-foreground">
                  <span className="font-semibold">Interbanking:</span> diseño y habilitación del negocio factoring & SCF, RFP/M&A, soporte a Directorio.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyMagno;
