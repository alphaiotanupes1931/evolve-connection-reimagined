import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is a Life Coach?",
    answer: "A Life Coach is trained to listen, to observe, and to customize their approach to each individual client's needs. Certified Life Coaches complete extensive training that teaches them how to ask the right questions, communicate effectively and get to the heart of your needs and desires in life. Coaching is not just limited to helping you achieve your personal or professional goals, it can be so much more.",
  },
  {
    question: "What is the difference between life coaching and therapy?",
    answer: "Life Coaching focuses on helping clients achieve specific goals, improve communication skills, and foster personal growth. It is goal-oriented, present and future-focused, and emphasizes actionable steps toward desired changes. Therapy focuses on healing from past trauma, managing mental health conditions, and developing coping mechanisms. It is often past, present, and future-focused, using clinical techniques to address emotional distress, trauma, or mental health disorders.",
  },
  {
    question: "Can I do life coaching and therapy at the same time?",
    answer: "Yes! Many people benefit from both approaches simultaneously. Therapy addresses mental health needs and emotional healing, while coaching focuses on growth, accountability, and achieving personal or relational goals.",
  },
  {
    question: "How is restorative coaching different from traditional life coaching?",
    answer: "Our approach focuses on meaningful conversations, deep accountability, and tools for lasting transformation. Unlike traditional coaching, we integrate restorative practices to not only inspire change but to rebuild trust, repair relationships, and foster lifelong personal and professional growth.",
  },
];

const FAQ = () => {
  return (
    <section className="py-20 lg:py-32 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about our coaching services and approach.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-background rounded-xl px-6 border-none card-shadow"
              >
                <AccordionTrigger className="text-left font-serif text-lg text-foreground hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
