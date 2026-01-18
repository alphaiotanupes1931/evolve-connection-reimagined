import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin } from "lucide-react";

const workshops = [
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
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-4">
            Upcoming Workshops
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join transformative group experiences focused on healing, growth, and connection.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {workshops.map((workshop, index) => (
            <motion.div
              key={workshop.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl p-8 card-shadow"
            >
              <div className="flex items-center gap-2 text-sm text-primary mb-4">
                <Calendar className="w-4 h-4" />
                <span>{workshop.date} | {workshop.time}</span>
              </div>

              <h3 className="text-2xl font-serif text-foreground mb-3">
                {workshop.title}
              </h3>

              <p className="text-muted-foreground mb-4">
                {workshop.description}
              </p>

              <div className="mb-4">
                <p className="font-medium text-foreground mb-2">What you'll learn:</p>
                <ul className="space-y-1">
                  {workshop.highlights.map((item) => (
                    <li key={item} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
                <MapPin className="w-4 h-4" />
                <span>{workshop.location}</span>
              </div>

              <Button 
                asChild
                className="rounded-full px-8 bg-primary hover:bg-primary/90 text-primary-foreground"
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
