import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const Hero = () => {
  const words = ["Evolve.", "Heal.", "Transform."];
  const [displayedWords, setDisplayedWords] = useState<string[]>([]);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (!isTyping) return;

    if (currentWordIndex >= words.length) {
      setIsTyping(false);
      return;
    }

    const currentWord = words[currentWordIndex];
    
    if (currentCharIndex < currentWord.length) {
      const timeout = setTimeout(() => {
        setDisplayedWords(prev => {
          const newWords = [...prev];
          if (newWords.length <= currentWordIndex) {
            newWords.push(currentWord.slice(0, currentCharIndex + 1));
          } else {
            newWords[currentWordIndex] = currentWord.slice(0, currentCharIndex + 1);
          }
          return newWords;
        });
        setCurrentCharIndex(prev => prev + 1);
      }, 80);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCurrentWordIndex(prev => prev + 1);
        setCurrentCharIndex(0);
      }, 300);
      return () => clearTimeout(timeout);
    }
  }, [currentWordIndex, currentCharIndex, isTyping, words]);

  return (
    <section className="min-h-screen hero-gradient flex items-center justify-center pt-20">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-foreground mb-6 leading-tight min-h-[1.2em]">
            {displayedWords.map((word, index) => (
              <span key={index}>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="inline-block"
                >
                  {word}
                </motion.span>
                {index < displayedWords.length - 1 && " "}
              </span>
            ))}
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
              className="inline-block w-[3px] h-[0.8em] bg-primary ml-1 align-middle"
            />
          </h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.5 }}
            className="text-lg md:text-xl text-muted-foreground mb-4 font-light italic"
          >
            Restoration is always possible.
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.8 }}
            className="text-base md:text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Deep, meaningful connections are the foundation of growth, healing, and transformation. Let's build a path forward together.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 3.1 }}
          >
            <Button 
              asChild
              size="lg"
              className="rounded-full px-10 py-6 text-base bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
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
