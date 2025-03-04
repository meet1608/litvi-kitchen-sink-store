
import { motion } from 'framer-motion';
import im0 from '../../accets/im0.jpeg';

// Animation variants
const imageVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut", delay: 0.4 } 
  }
};

const HeroImage = () => {
  return (
    <motion.div
      variants={imageVariants}
      initial="hidden"
      animate="visible"
      className="hidden lg:block"
    >
      <div className="relative z-10">
        <motion.div 
          className="relative z-10 p-6 rounded-2xl neo-blur overflow-hidden"
          whileHover={{ y: -10, transition: { duration: 0.3 } }}
        >
          <img 
            src={im0}
            alt="Elegant kitchen sink" 
            className="w-full h-auto object-cover rounded-xl shadow-inner"
          />
          
          <motion.div 
            className="absolute -bottom-10 -right-10"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <div className="bg-gradient-to-r from-litvi-steel to-litvi-chrome text-white px-6 py-3 rounded-lg shadow-lg font-medium">
              <span className="text-sm uppercase tracking-wider">High Durability</span>
            </div>
          </motion.div>
          
          <motion.div 
            className="absolute -top-10 -left-10"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <div className="bg-gradient-to-r from-litvi-purple to-litvi-magenta text-white px-6 py-3 rounded-lg shadow-lg font-medium">
              <span className="text-sm uppercase tracking-wider">Shine Lock Technology</span>
            </div>
          </motion.div>
        </motion.div>
        
        {/* Decorative elements */}
        <div className="absolute -z-10 -bottom-10 -right-10 w-40 h-40 bg-gradient-to-br from-litvi-steel/20 to-litvi-chrome/10 rounded-full blur-2xl"></div>
        <div className="absolute -z-10 -top-10 -left-10 w-40 h-40 bg-gradient-to-br from-litvi-purple/20 to-litvi-magenta/10 rounded-full blur-2xl"></div>
      </div>
    </motion.div>
  );
};

export default HeroImage;
