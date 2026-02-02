import magnoLogo from "@/assets/magno-logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src={magnoLogo} alt="MAGNO Partners Logo" className="w-10 h-10 object-contain bg-white rounded-lg p-1" />
            <div>
              <span className="font-bold text-xl text-primary-foreground tracking-tight">
                MAGNO PARTNERS
              </span>
              <p className="text-primary-foreground/60 text-sm">
                Where strategy becomes execution.
              </p>
            </div>
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
