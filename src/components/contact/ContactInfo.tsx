
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const ContactInfo = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.2 }}
      className="flex flex-col justify-between"
    >
      <div className="neo-blur p-8 rounded-xl shadow-sm mb-8">
        <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
        
        <div className="space-y-6">
          <ContactInfoItem 
            icon={<MapPin className="h-6 w-6 text-litvi-purple mr-4 flex-shrink-0" />}
            title="Our Location"
            content="Morbi-Rajkot Highway, Near CNG Pump, Tankara, Gujarat, India"
          />
          
          <ContactInfoItem 
            icon={<Phone className="h-6 w-6 text-litvi-purple mr-4 flex-shrink-0" />}
            title="Phone Number"
            content="+91 9974391865, +91 9081000911, +91 8200169071"
          />
          
          <ContactInfoItem 
            icon={<Mail className="h-6 w-6 text-litvi-purple mr-4 flex-shrink-0" />}
            title="Email Address"
            content="litviindustries@gmail.com"
          />
          
          <ContactInfoItem 
            icon={<Clock className="h-6 w-6 text-litvi-purple mr-4 flex-shrink-0" />}
            title="Business Hours"
            content="Monday - Saturday: 9:00 AM - 8:00 PM<br />Sunday: Closed"
          />
        </div>
      </div>
    </motion.div>
  );
};

interface ContactInfoItemProps {
  icon: React.ReactNode;
  title: string;
  content: string;
}

const ContactInfoItem = ({ icon, title, content }: ContactInfoItemProps) => {
  return (
    <motion.div 
      className="flex items-start"
      whileHover={{ x: 5 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      {icon}
      <div>
        <h4 className="font-semibold text-white">{title}</h4>
        <p className="text-white/70" dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </motion.div>
  );
};

export default ContactInfo;
