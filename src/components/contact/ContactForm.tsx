
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useContactForm } from "@/hooks/use-contact-form";
import { motion } from "framer-motion";

const ContactForm = () => {
  const { formData, isSubmitting, handleChange, handleSubmit } = useContactForm();
  
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.2 }}
      className="order-2 lg:order-1"
    >
      <div className="neo-blur p-8 rounded-xl shadow-sm">
        <h3 className="text-2xl font-bold text-white mb-6">Send an Enquiry</h3>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-white/70 mb-1">
              Your Name
            </label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
              className="dark-input"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white/70 mb-1">
              Your Email
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
              className="dark-input"
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-white/70 mb-1">
              Enquiry Details
            </label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Please provide details about the product, quantity, and any specific requirements."
              required
              className="dark-input min-h-[150px]"
            />
          </div>
          
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-litvi-purple hover:bg-litvi-magenta text-white"
          >
            {isSubmitting ? "Sending..." : "Send Enquiry"}
          </Button>
        </form>
      </div>
    </motion.div>
  );
};

export default ContactForm;
