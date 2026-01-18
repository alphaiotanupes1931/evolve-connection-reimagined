import { motion } from "framer-motion";
import { Mail } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 lg:py-32 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Have questions or need more information? Reach out directly through our contact form.
          </p>

          <div className="bg-background rounded-2xl p-8 card-shadow inline-block">
            <h3 className="font-serif text-xl text-foreground mb-4">
              Contact Information
            </h3>
            <div className="flex items-center justify-center gap-3">
              <Mail className="w-5 h-5 text-primary" />
              <a 
                href="mailto:danielle@evolveconnectioncoaching.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                danielle@evolveconnectioncoaching.com
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
