import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Working with Danielle completely transformed how my partner and I communicate. We've developed tools to navigate conflict in a way that brings us closer rather than pushing us apart. Her restorative approach helped us break old patterns and build a stronger foundation.",
  },
  {
    quote: "The leadership coaching I received has profoundly changed how I approach my role as a team manager. Danielle taught me to lead with both accountability and compassion, resulting in improved team dynamics and a more positive work environment.",
  },
  {
    quote: "After facing a major life transition, I felt completely lost. Through Danielle's coaching, I developed clarity, confidence, and a renewed sense of purpose. Her guidance helped me transform what felt like an ending into a beautiful new beginning.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 lg:py-32 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-4">
            What Clients Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from individuals and couples who have experienced transformation through our coaching services.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-background rounded-2xl p-8 h-full card-shadow">
                <Quote className="w-8 h-8 text-primary/40 mb-4" />
                <blockquote className="text-muted-foreground leading-relaxed italic">
                  "{testimonial.quote}"
                </blockquote>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
