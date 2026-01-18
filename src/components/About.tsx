import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import danielleImage from "@/assets/danielle-woody.jpg";
import certifiedLogo from "@/assets/certified-life-coach-logo.png";

const values = [
  "Restoration",
  "Authenticity", 
  "Compassion",
  "Empowerment",
  "Connection",
];

const About = () => {
  return (
    <section id="about" className="py-20 lg:py-32 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-6">
              Meet Danielle
            </h2>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Hi, I'm Danielle Woody (she/her), founder of <em className="text-brand">Evolve | Connection Coaching</em>. My journey has been shaped by over a decade of experience in <strong>restorative practices, student accountability, conflict resolution, and leadership development</strong>.
              </p>
              
              <p>
                At <em className="text-brand">Evolve | Connection Coaching</em>, I believe that healing begins with connection, accountability, and love—for ourselves and for those around us. Life's challenges can leave us feeling disconnected, but restoration is always possible.
              </p>
              
              <p>
                My mission is to help you restore balance, clarity, and love in your life by using restorative practices that encourage self-reflection, honest communication, personal growth, and meaningful change.
              </p>
            </div>

            {/* Values */}
            <div className="mt-8 mb-8">
              <div className="flex flex-wrap gap-3">
                {values.map((value, index) => (
                  <motion.span
                    key={value}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="value-pill"
                  >
                    {value}
                  </motion.span>
                ))}
              </div>
            </div>

            <Button 
              asChild
              className="rounded-full px-8 bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              <a href="#booking">Work With Me</a>
            </Button>
          </motion.div>

          {/* Image & Certification */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative">
              <img
                src={danielleImage}
                alt="Danielle Woody - Certified Life Coach and founder of Evolve Connection Coaching"
                className="w-full max-w-md mx-auto rounded-2xl soft-shadow"
              />
              
              {/* Certification Badge */}
              <div className="absolute -bottom-6 -left-6 lg:left-0 bg-card rounded-xl p-4 card-shadow">
                <img
                  src={certifiedLogo}
                  alt="Certified Life Coach Credential"
                  className="h-16 w-auto"
                />
                <p className="text-xs text-muted-foreground mt-2 text-center">
                  Professionally Certified<br />Life Coach
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
