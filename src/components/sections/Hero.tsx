import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-hero"
    >
      {/* Decorative Blobs */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] rounded-full bg-blob-primary opacity-60 blur-3xl animate-float" />
      <div className="absolute bottom-20 left-0 w-[400px] h-[400px] rounded-full bg-blob-secondary opacity-50 blur-3xl animate-float-slow" />
      <div className="absolute top-1/2 left-1/3 w-[300px] h-[300px] rounded-full bg-blob-accent blur-2xl animate-pulse-soft" />
      
      {/* Decorative Lines */}
      <svg
        className="absolute right-10 top-1/3 w-[400px] h-[200px] opacity-30"
        viewBox="0 0 400 200"
        fill="none"
      >
        <path
          d="M0 100 Q 100 50, 200 100 T 400 100"
          stroke="hsl(var(--secondary))"
          strokeWidth="2"
          strokeDasharray="8 4"
          className="animate-pulse-soft"
        />
        <circle cx="100" cy="75" r="8" fill="hsl(var(--secondary))" />
        <circle cx="250" cy="90" r="6" fill="hsl(var(--primary))" />
        <circle cx="350" cy="105" r="8" fill="hsl(var(--secondary))" />
      </svg>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 animate-fade-in-up tracking-tight">
            MAGNO PARTNERS
          </h1>
          <h2 className="text-2xl md:text-3xl text-muted-foreground mb-6 animate-fade-in-up font-medium" style={{ animationDelay: '0.1s' }}>
            Strategy. Execution. Impact.
          </h2>
          <p className="text-gradient text-xl md:text-2xl font-semibold mb-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Where strategy becomes execution.
          </p>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mb-10 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            Transformamos complejidad en ejecución concreta y valor sostenible. 
            Cerramos la brecha entre las ideas estratégicas y los resultados que efectivamente ocurren.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <Button variant="hero" size="lg">
              Agendar una call
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button variant="heroOutline" size="lg">
              Conocer más
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
