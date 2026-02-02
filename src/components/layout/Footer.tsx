const Footer = () => {
  return (
    <footer className="bg-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center">
              <span className="text-primary-foreground font-display font-bold text-xl">M</span>
            </div>
            <span className="font-display font-bold text-xl text-background">
              Magno
            </span>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            <a href="#inicio" className="text-background/70 hover:text-background transition-colors">
              Inicio
            </a>
            <a href="#que-hacemos" className="text-background/70 hover:text-background transition-colors">
              Qué Hacemos
            </a>
            <a href="#servicios" className="text-background/70 hover:text-background transition-colors">
              Servicios
            </a>
            <a href="#contacto" className="text-background/70 hover:text-background transition-colors">
              Contacto
            </a>
          </nav>

          {/* Copyright */}
          <p className="text-background/50 text-sm">
            © 2024 Magno. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
