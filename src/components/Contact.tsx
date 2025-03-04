
import { motion } from "framer-motion";
import ContactForm from "./contact/ContactForm";
import ContactInfo from "./contact/ContactInfo";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-litvi-darkCharcoal">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 mb-4 rounded-full glass-effect">
            <span className="text-sm font-medium text-litvi-purple">Get In Touch</span>
          </span>
          <h2 className="section-title text-gradient-modern">Contact Us</h2>
          <p className="section-subtitle">
            Have questions about our products or need assistance with pricing and orders?
            We're here to help you create the kitchen of your dreams.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
    </section>
  );
};

export default Contact;
