import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import defaultDanielleImage from "@/assets/danielle-woody.jpg";
import certifiedLogo from "@/assets/certified-life-coach-logo.png";
import { useContent } from "@/contexts/ContentContext";

const defaultValues = [
  "Restoration",
  "Authenticity", 
  "Compassion",
  "Empowerment",
  "Connection",
];

const defaultParagraphs = [
  'Hi, I\'m Danielle Woody (she/her), founder of Evolve | Connection Coaching. My journey has been shaped by over a decade of experience in restorative practices, student accountability, conflict resolution, and leadership development.',
  'At Evolve | Connection Coaching, I believe that healing begins with connection, accountability, and love—for ourselves and for those around us. Life\'s challenges can leave us feeling disconnected, but restoration is always possible.',
  'My mission is to help you restore balance, clarity, and love in your life by using restorative practices that encourage self-reflection, honest communication, personal growth, and meaningful change.',
];

const About = () => {
  const { content } = useContent();
  const aboutContent = content.about || {};
  
  const title = aboutContent.title || "Meet Danielle";
  const paragraphs = aboutContent.paragraphs || defaultParagraphs;
  const values = aboutContent.values || defaultValues;
  const danielleImage = aboutContent.imageUrl || defaultDanielleImage;

  return (
    <section id="about" className="py-24 lg:py-36 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground mb-8">
              {title}
            </h2>
            
            <div className="space-y-5 text-muted-foreground leading-relaxed text-base md:text-lg">
              {paragraphs.map((para: string, index: number) => (
                <p key={index} dangerouslySetInnerHTML={{ 
                  __html: para
                    .replace(/Evolve \| Connection Coaching/g, '<span class="text-brand font-medium">Evolve | Connection Coaching</span>')
                }} />
              ))}
            </div>

            {/* Values */}
            <div className="mt-10 mb-10">
              <div className="flex flex-wrap gap-3">
                {values.map((value: string, index: number) => (
                  <motion.span
                    key={value}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
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
              size="lg"
              className="rounded-full px-10 bg-primary hover:bg-primary/90 text-primary-foreground shadow-md hover:shadow-lg transition-all duration-300"
            >
              <a href="#booking">Work With Me</a>
            </Button>
          </motion.div>

          {/* Image & Certification */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-10"
          >
            <div className="relative">
              <img
                src={danielleImage}
                alt="Danielle Woody - Certified Life Coach and founder of Evolve Connection Coaching"
                className="w-full max-w-md rounded-2xl shadow-2xl"
              />
            </div>
            
            {/* Certification Badge - Centered and Larger */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-xl text-center"
            >
              <img
                src={certifiedLogo}
                alt="Certified Life Coach Credential"
                className="h-24 w-auto mx-auto mb-4"
              />
              <p className="text-sm text-muted-foreground font-medium">
                Professionally Certified Life Coach
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
