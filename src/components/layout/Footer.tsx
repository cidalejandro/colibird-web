import magnoLogo from "@/assets/magno-logo.png";

const Footer = () => {
  return (
    <footer className="bg-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src={magnoLogo} alt="Magno Logo" className="w-10 h-10 object-contain bg-white rounded-lg p-1" />
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
