import { motion } from "framer-motion";

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
    <section id="testimonials" className="py-24 lg:py-36 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground mb-6">
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
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-background rounded-2xl p-8 h-full shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-6xl text-primary/20 font-serif leading-none mb-4">"</div>
                <blockquote className="text-muted-foreground leading-relaxed">
                  {testimonial.quote}
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
