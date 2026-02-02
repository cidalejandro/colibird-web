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
      
      {/* Decorative Curved Lines - matching logo style */}
      <svg
        className="absolute right-10 top-1/4 w-[500px] h-[400px] opacity-40"
        viewBox="0 0 500 400"
        fill="none"
      >
        {/* Multiple curved arcs like the logo */}
        <path
          d="M 450 50 Q 500 150, 400 250 Q 300 350, 150 350"
          stroke="url(#warmGradient1)"
          strokeWidth="8"
          strokeLinecap="round"
          className="animate-pulse-soft"
        />
        <path
          d="M 480 80 Q 520 180, 420 280 Q 320 380, 180 370"
          stroke="url(#warmGradient2)"
          strokeWidth="6"
          strokeLinecap="round"
          className="animate-pulse-soft"
          style={{ animationDelay: '0.2s' }}
        />
        <path
          d="M 420 30 Q 470 120, 380 220 Q 280 320, 120 330"
          stroke="url(#warmGradient3)"
          strokeWidth="4"
          strokeLinecap="round"
          className="animate-pulse-soft"
          style={{ animationDelay: '0.4s' }}
        />
        <defs>
          <linearGradient id="warmGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(25 100% 63%)" />
            <stop offset="100%" stopColor="hsl(358 100% 68%)" />
          </linearGradient>
          <linearGradient id="warmGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(358 100% 68%)" />
            <stop offset="100%" stopColor="hsl(350 50% 35%)" />
          </linearGradient>
          <linearGradient id="warmGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(25 100% 70%)" />
            <stop offset="100%" stopColor="hsl(358 80% 60%)" />
          </linearGradient>
        </defs>
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
