import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { User, Heart, Compass, Briefcase, Users, Sparkles } from "lucide-react";

const services = [
  {
    icon: User,
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
    icon: Heart,
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
    icon: Compass,
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
    icon: Briefcase,
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
    icon: Users,
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
    icon: Sparkles,
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
  return (
    <section id="services" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-4">
            What We Offer
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the transformative power of restorative coaching for your relationships and personal growth.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card rounded-2xl p-6 card-shadow hover:soft-shadow transition-shadow duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-brand" />
                </div>
                
                <h3 className="text-xl font-serif text-foreground mb-2">
                  {service.title}
                </h3>
                
                <p className="text-primary font-medium mb-4">
                  {service.price}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button 
                  asChild
                  variant="outline"
                  className="w-full rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <a href="#booking">{service.cta}</a>
                </Button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
