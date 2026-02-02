import magnoLogoFull from "@/assets/magno-logo-full.png";

const Footer = () => {
  return (
    <footer className="bg-primary py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo completo */}
          <div className="flex items-center">
            <img 
              src={magnoLogoFull} 
              alt="MAGNO Partners - Strategy. Execution. Impact." 
              className="h-16 md:h-20 w-auto object-contain bg-white rounded-lg p-2" 
            />
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            <a href="#inicio" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
              Inicio
            </a>
            <a href="#que-hacemos" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
              Quiénes Somos
            </a>
            <a href="#servicios" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
              Servicios
            </a>
            <a href="#contacto" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
              Contacto
            </a>
          </nav>

          {/* Copyright */}
          <p className="text-primary-foreground/50 text-sm">
            © 2024 MAGNO Partners. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
