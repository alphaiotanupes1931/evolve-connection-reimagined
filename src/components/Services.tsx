import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useContent } from "@/contexts/ContentContext";

const defaultServices = [
  {
    title: "Individual Coaching",
    price: "$100 - $200 per session",
    features: [
      "Self-reflection & emotional awareness",
      "Identify patterns that no longer serve you",
      "Cultivate self-love and confidence",
      "Set intentional goals for transformation",
    ],
    cta: "Book a Session",
  },
  {
    title: "Relationship Coaching",
    price: "$120 - $250 per session",
    features: [
      "Develop healthier communication skills",
      "Navigate conflict with honesty and empathy",
      "Repair and restore relationships after harm",
      "Build deeper emotional connections and trust",
    ],
    cta: "Book a Session",
  },
  {
    title: "Life Transitions Coaching",
    price: "$120 - $250 per session",
    features: [
      "Find clarity in uncertain times",
      "Embrace new beginnings with intention",
      "Process and heal from past experiences",
      "Develop a roadmap for your next chapter",
    ],
    cta: "Book a Session",
  },
  {
    title: "Leadership Coaching",
    price: "$150 - $300 per session",
    features: [
      "Lead with integrity, empathy, and accountability",
      "Strengthen emotional intelligence",
      "Foster trust and collaboration in teams",
      "Navigate difficult conversations with confidence",
    ],
    cta: "Book a Session",
  },
  {
    title: "Pre-Marital Coaching",
    price: "Starting at $450 (4 sessions)",
    features: [
      "Communication & active listening",
      "Conflict resolution & restorative dialogue",
      "Values & relationship expectations",
      "Family & cultural dynamics",
    ],
    cta: "Book a Package",
  },
  {
    title: "Wedding Officiating",
    price: "$250 - $500",
    features: [
      "Personalized ceremony script",
      "Assistance with crafting meaningful vows",
      "Professional officiation on your wedding day",
      "Marriage license signing & documentation",
    ],
    cta: "Learn More",
  },
];

const Services = () => {
  const { content } = useContent();
  const servicesContent = content.services || {};
  
  const title = servicesContent.title || "What We Offer";
  const subtitle = servicesContent.subtitle || "Discover the transformative power of restorative coaching for your relationships and personal growth.";
  const services = servicesContent.items || defaultServices;

  return (
    <section id="services" className="py-24 lg:py-36 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground mb-6">
            {title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service: any, index: number) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="group bg-card rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
            >
              <h3 className="text-xl font-serif text-foreground mb-3">
                {service.title}
              </h3>
              
              <p className="text-primary font-semibold mb-6 text-lg">
                {service.price}
              </p>
              
              <ul className="space-y-3 mb-8">
                {service.features?.map((feature: string) => (
                  <li key={feature} className="text-sm text-muted-foreground flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Button 
                asChild
                variant="outline"
                className="w-full rounded-full border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <a href="#booking">{service.cta}</a>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
