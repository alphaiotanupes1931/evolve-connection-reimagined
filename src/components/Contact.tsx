import { forwardRef } from "react";
import { motion } from "framer-motion";
import { useContent } from "@/contexts/ContentContext";

const Contact = forwardRef<HTMLElement>((props, ref) => {
  const { content } = useContent();
  const contactContent = content.contact || {};
  
  const title = contactContent.title || "Get in Touch";
  const subtitle = contactContent.subtitle || "Have questions or need more information? Reach out directly through our contact form.";
  const email = contactContent.email || "danielle@evolveconnectioncoaching.com";

  return (
    <section id="contact" className="py-24 lg:py-36 bg-card" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground mb-6">
            {title}
          </h2>
          <p className="text-lg text-muted-foreground mb-10">
            {subtitle}
          </p>

          <div className="bg-background rounded-2xl p-10 shadow-lg inline-block">
            <h3 className="font-serif text-xl text-foreground mb-6">
              Contact Information
            </h3>
            <a 
              href={`mailto:${email}`}
              className="text-lg text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              {email}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
});

Contact.displayName = "Contact";

export default Contact;
