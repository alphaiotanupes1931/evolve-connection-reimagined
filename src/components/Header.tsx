import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="flex flex-col items-center">
              <svg width="40" height="24" viewBox="0 0 40 24" fill="none" className="text-brand">
                <path d="M20 0C10 0 5 8 5 12C5 16 10 24 20 24C30 24 35 16 35 12C35 8 30 0 20 0ZM20 20C14 20 10 16 10 12C10 8 14 4 20 4C26 4 30 8 30 12C30 16 26 20 20 20Z" fill="currentColor"/>
                <circle cx="20" cy="12" r="4" fill="currentColor"/>
              </svg>
              <span className="text-xs font-serif tracking-[0.2em] text-brand font-medium">EVOLVE</span>
              <span className="text-[8px] tracking-[0.1em] text-muted-foreground">CONNECTION COACHING</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground hover:text-brand transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              asChild
              variant="outline"
              className="rounded-full border-foreground/20 hover:bg-accent"
            >
              <a href="#booking">Book Now</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-foreground hover:text-brand transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button 
                asChild
                variant="outline"
                className="rounded-full border-foreground/20 w-fit"
              >
                <a href="#booking" onClick={() => setIsMenuOpen(false)}>Book Now</a>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
