import { forwardRef } from "react";
import logo from "@/assets/logo.jpg";

const Footer = forwardRef<HTMLElement>((props, ref) => {
  return (
    <footer className="py-10 bg-background border-t border-border" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img 
              src={logo} 
              alt="Evolve Connection Coaching" 
              className="h-12 w-auto rounded-lg mix-blend-multiply"
            />
          </div>

          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Evolve | Connection Coaching. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = "Footer";

export default Footer;
