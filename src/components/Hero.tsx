import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useContent } from "@/contexts/ContentContext";

const Hero = () => {
  const { content, isLoading } = useContent();
  const heroContent = content.hero || {};
  
  const words = heroContent.words || ["Evolve.", "Heal.", "Transform."];

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.6,
        delayChildren: 0.3,
      },
    },
  };

  const wordVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section className="min-h-screen hero-gradient flex items-center justify-center pt-20">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-3xl mx-auto"
        >
          <motion.h1 
            className="text-5xl md:text-6xl lg:text-7xl font-serif text-foreground mb-6 leading-tight"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {words.map((word: string, index: number) => (
              <motion.span
                key={index}
                variants={wordVariants}
                className="inline-block mr-4 last:mr-0"
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.2 }}
            className="text-lg md:text-xl text-muted-foreground mb-4 font-light italic"
          >
            {heroContent.subtitle || "Restoration is always possible."}
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.5 }}
            className="text-base md:text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            {heroContent.description || "Deep, meaningful connections are the foundation of growth, healing, and transformation. Let's build a path forward together."}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.8 }}
          >
            <Button 
              asChild
              size="lg"
              className="rounded-full px-10 py-6 text-base bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
            >
              <a href="#booking">{heroContent.ctaText || "Book a Complimentary Consultation"}</a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
