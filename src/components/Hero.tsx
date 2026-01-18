import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen hero-gradient flex items-center justify-center pt-20">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-foreground mb-6 leading-tight">
            Evolve. Heal. Transform.
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-4 font-light italic">
            Restoration is always possible.
          </p>
          
          <p className="text-base md:text-lg text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Deep, meaningful connections are the foundation of growth, healing, and transformation. Let's build a path forward together.
          </p>
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Button 
              asChild
              size="lg"
              className="rounded-full px-8 py-6 text-base bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              <a href="#booking">Book a Complimentary Consultation</a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
