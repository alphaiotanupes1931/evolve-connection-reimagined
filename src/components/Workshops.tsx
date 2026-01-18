import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useContent } from "@/contexts/ContentContext";

const defaultWorkshops = [
  {
    date: "April 15, 2025",
    time: "9:00 AM - 4:00 PM",
    title: "Restorative Communication Workshop",
    description: "A one-day immersive workshop focused on building effective communication skills through restorative practices.",
    highlights: [
      "Non-judgmental listening techniques",
      '"I feel" statements and constructive dialogue',
      "Conflict resolution strategies",
      "Building healthier, more open lines of communication",
    ],
    location: "Virtual via Zoom",
    cta: "Register Now",
  },
  {
    date: "May 20-22, 2025",
    time: "Weekend Retreat",
    title: "Healing & Empowerment Retreat",
    description: "An immersive weekend retreat for individuals seeking personal growth and restoration.",
    highlights: [
      "Restorative circles for sharing and reflection",
      "Guided meditations and mindfulness practices",
      "Workshops on forgiveness and embracing self-love",
      "Building meaningful connections with like-minded individuals",
    ],
    location: "Serenity Retreat Center, Maryland",
    cta: "Learn More",
  },
];

const Workshops = () => {
  const { content } = useContent();
  const workshopsContent = content.workshops || {};
  
  const title = workshopsContent.title || "Upcoming Workshops";
  const subtitle = workshopsContent.subtitle || "Join transformative group experiences focused on healing, growth, and connection.";
  const workshops = workshopsContent.items || defaultWorkshops;

  return (
    <section className="py-24 lg:py-36 bg-background">
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

        <div className="grid lg:grid-cols-2 gap-8">
          {workshops.map((workshop: any, index: number) => (
            <motion.div
              key={workshop.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="text-sm text-primary font-semibold mb-4 tracking-wide uppercase">
                {workshop.date} | {workshop.time}
              </div>

              <h3 className="text-2xl font-serif text-foreground mb-4">
                {workshop.title}
              </h3>

              <p className="text-muted-foreground mb-6">
                {workshop.description}
              </p>

              <div className="mb-6">
                <p className="font-medium text-foreground mb-3 text-sm uppercase tracking-wide">What you'll learn:</p>
                <ul className="space-y-2">
                  {workshop.highlights?.map((item: string) => (
                    <li key={item} className="text-sm text-muted-foreground flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="text-sm text-muted-foreground mb-6">
                {workshop.location}
              </div>

              <Button 
                asChild
                className="rounded-full px-8 bg-primary hover:bg-primary/90 text-primary-foreground shadow-md hover:shadow-lg transition-all duration-300"
              >
                <a href="#booking">{workshop.cta}</a>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Workshops;
