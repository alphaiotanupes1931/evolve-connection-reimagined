import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="py-24 lg:py-36 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground mb-6">
            Get in Touch
          </h2>
          <p className="text-lg text-muted-foreground mb-10">
            Have questions or need more information? Reach out directly through our contact form.
          </p>

          <div className="bg-background rounded-2xl p-10 shadow-lg inline-block">
            <h3 className="font-serif text-xl text-foreground mb-6">
              Contact Information
            </h3>
            <a 
              href="mailto:danielle@evolveconnectioncoaching.com"
              className="text-lg text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              danielle@evolveconnectioncoaching.com
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
