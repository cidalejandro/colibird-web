import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import magnoLogoFull from "@/assets/magno-logo-full.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Inicio", href: "#inicio" },
    { label: "Quiénes Somos", href: "#que-hacemos" },
    { label: "Servicios", href: "#servicios" },
    { label: "Por qué MAGNO", href: "#nosotros" },
  ];


  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-card/98 backdrop-blur-lg shadow-soft"
          : "bg-card/90 backdrop-blur-md"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-36 md:h-44 lg:h-48">
          {/* Logo - extra grande */}
          <a href="#inicio" className="flex items-center">
            <img 
              src={magnoLogoFull} 
              alt="MAGNO Partners - Strategy. Execution. Impact." 
              className="h-28 md:h-36 lg:h-44 w-auto object-contain" 
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/click-to-pay"
              className="flex items-center gap-1.5 text-sm font-semibold text-secondary border border-secondary/40 rounded-full px-4 py-1.5 hover:bg-secondary hover:text-secondary-foreground transition-all duration-200"
            >
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              Click to Pay
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="hero" size="default">
              Agendar Call
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground transition-colors font-medium py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button variant="hero" className="mt-4">
                Agendar Call
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
