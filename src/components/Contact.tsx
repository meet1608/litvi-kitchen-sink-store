
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you as soon as possible.",
        variant: "default",
      });
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1500);
  };
  
  return (
    <section id="contact" className="py-20 bg-litvi-lightCream">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 mb-4 rounded-full bg-white border border-litvi-brown/20">
            <span className="text-sm font-medium text-litvi-brown">Get In Touch</span>
          </span>
          <h2 className="section-title text-gradient-modern">Contact Us</h2>
          <p className="section-subtitle">
            Have questions about our products or need assistance? 
            We're here to help you create the kitchen of your dreams.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="bg-white p-8 rounded-xl shadow-sm border border-litvi-brown/10">
              <h3 className="text-2xl font-bold text-litvi-darkBrown mb-6">Send Us a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-litvi-brown mb-1">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                    className="w-full border-litvi-brown/20 focus:border-litvi-brown focus:ring-litvi-brown"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-litvi-brown mb-1">
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
                    className="w-full border-litvi-brown/20 focus:border-litvi-brown focus:ring-litvi-brown"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-litvi-brown mb-1">
                    Your Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="How can we help you?"
                    required
                    className="w-full min-h-[150px] border-litvi-brown/20 focus:border-litvi-brown focus:ring-litvi-brown"
                  />
                </div>
                
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-litvi-brown hover:bg-litvi-darkBrown text-white"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col justify-between"
          >
            <div className="bg-white p-8 rounded-xl shadow-sm mb-8 border border-litvi-brown/10">
              <h3 className="text-2xl font-bold text-litvi-darkBrown mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <motion.div 
                  className="flex items-start"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <MapPin className="h-6 w-6 text-litvi-brown mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-litvi-darkBrown">Our Location</h4>
                    <p className="text-litvi-brown/80">123 Design Street, Suite 456<br />New York, NY 10001</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Phone className="h-6 w-6 text-litvi-brown mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-litvi-darkBrown">Phone Number</h4>
                    <p className="text-litvi-brown/80">+1 (555) 123-4567</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Mail className="h-6 w-6 text-litvi-brown mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-litvi-darkBrown">Email Address</h4>
                    <p className="text-litvi-brown/80">hello@litvi.com</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Clock className="h-6 w-6 text-litvi-brown mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-litvi-darkBrown">Business Hours</h4>
                    <p className="text-litvi-brown/80">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 10:00 AM - 4:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm border border-litvi-brown/10">
              <h3 className="text-2xl font-bold text-litvi-darkBrown mb-4">Our Showroom</h3>
              <p className="text-litvi-brown/80 mb-4">
                Visit our showroom to experience our premium kitchen sinks in person.
                Our experts are ready to help you find the perfect solution for your space.
              </p>
              <div className="rounded-lg overflow-hidden h-[200px] bg-litvi-cream">
                <img 
                  src="https://images.unsplash.com/photo-1523359366921-4c14294ff5bd?w=800&auto=format&fit=crop&q=60" 
                  alt="Litvi showroom" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
