import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

const pricingItems = [
  { service: "Individual Coaching", price: "$100 - $200" },
  { service: "Relationship Coaching", price: "$120 - $250" },
  { service: "Leadership Coaching", price: "$150 - $300" },
  { service: "Pre-Marital Package (4 sessions)", price: "$450" },
];

const howItWorks = [
  "Complete the booking form with your preferred session type and availability.",
  "Receive confirmation and pre-session materials via email.",
  "Attend your session via our secure virtual platform or in-person.",
  "Receive follow-up materials and next steps after your session.",
];

const sessionTypes = [
  "Individual Coaching",
  "Relationship Coaching",
  "Life Transitions Coaching",
  "Leadership Coaching",
  "Pre-Marital Coaching",
  "Wedding Officiating",
];

const Booking = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    sessionType: "",
    goals: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const subject = `Coaching Consultation Request - ${formData.sessionType}`;
    const body = `Hello Danielle,

I would like to schedule a complimentary consultation for coaching services.

Name: ${formData.name}
Email: ${formData.email}
Session Type: ${formData.sessionType}

My Goals:
${formData.goals}

I look forward to connecting with you!

Best regards,
${formData.name}`;

    const mailtoLink = `mailto:evolveconnectioncoaching@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
    
    toast.success("Your email draft is ready! Just hit send.");
  };

  return (
    <section id="booking" className="py-24 lg:py-36 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground mb-6">
            Book Your Complimentary Consultation
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Take the first step toward transformation with a free, no-obligation consultation to discuss your goals.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-serif text-foreground mb-8">
              How It Works
            </h3>
            <ul className="space-y-5 mb-12">
              {howItWorks.map((step, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary font-semibold text-sm">
                    {index + 1}
                  </div>
                  <span className="text-muted-foreground pt-1">{step}</span>
                </li>
              ))}
            </ul>

            <div className="bg-card rounded-2xl p-8 shadow-lg">
              <h4 className="font-serif text-xl text-foreground mb-6">
                Fee Transparency & Flexibility
              </h4>
              <p className="text-sm text-muted-foreground mb-8">
                I believe in providing clear, transparent pricing while making my services accessible. If you have questions about fees or need a customized payment plan, I'm happy to discuss flexible options.
              </p>
              
              <div className="space-y-4">
                {pricingItems.map((item) => (
                  <div key={item.service} className="flex justify-between items-center">
                    <span className="text-foreground text-sm">{item.service}</span>
                    <span className="text-primary font-semibold">{item.price}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 pt-6 border-t border-border">
                <p className="text-sm text-primary font-medium">
                  First consultation is complimentary! Let's connect and explore how coaching can support your journey.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-8 shadow-lg">
              <div className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-foreground font-medium">
                    Full Name <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="mt-2 rounded-xl h-12"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-foreground font-medium">
                    Email Address <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="mt-2 rounded-xl h-12"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <Label htmlFor="sessionType" className="text-foreground font-medium">
                    Session Type <span className="text-destructive">*</span>
                  </Label>
                  <Select
                    value={formData.sessionType}
                    onValueChange={(value) => setFormData({ ...formData, sessionType: value })}
                    required
                  >
                    <SelectTrigger className="mt-2 rounded-xl h-12">
                      <SelectValue placeholder="Select a Session Type" />
                    </SelectTrigger>
                    <SelectContent>
                      {sessionTypes.map((type) => (
                        <SelectItem key={type} value={type}>
                          {type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="goals" className="text-foreground font-medium">
                    Tell me about your goals <span className="text-destructive">*</span>
                  </Label>
                  <Textarea
                    id="goals"
                    value={formData.goals}
                    onChange={(e) => setFormData({ ...formData, goals: e.target.value })}
                    required
                    className="mt-2 rounded-xl min-h-[140px]"
                    placeholder="Share a bit about what brings you here and what you hope to achieve..."
                  />
                </div>

                <Button 
                  type="submit"
                  size="lg"
                  className="w-full rounded-full py-6 bg-primary hover:bg-primary/90 text-primary-foreground shadow-md hover:shadow-lg transition-all duration-300"
                >
                  Schedule Complimentary Consultation
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
