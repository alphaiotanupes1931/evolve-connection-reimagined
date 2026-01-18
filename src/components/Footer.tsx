const Footer = () => {
  return (
    <footer className="py-8 bg-background border-t border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="flex flex-col items-center">
              <svg width="32" height="20" viewBox="0 0 40 24" fill="none" className="text-brand">
                <path d="M20 0C10 0 5 8 5 12C5 16 10 24 20 24C30 24 35 16 35 12C35 8 30 0 20 0ZM20 20C14 20 10 16 10 12C10 8 14 4 20 4C26 4 30 8 30 12C30 16 26 20 20 20Z" fill="currentColor"/>
                <circle cx="20" cy="12" r="4" fill="currentColor"/>
              </svg>
              <span className="text-xs font-serif tracking-[0.15em] text-brand font-medium">EVOLVE</span>
            </div>
          </div>

          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Evolve | Connection Coaching. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
