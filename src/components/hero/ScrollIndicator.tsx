
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const ScrollIndicator = () => {
  return (
    <motion.div 
      className="absolute bottom-10 left-0 right-0 z-10 hidden md:block"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5, duration: 0.8 }}
    >
      <div className="flex justify-center">
        <motion.div
          animate={{ 
            y: [0, 10, 0],
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut"
          }}
        >
          <a href="#products" className="text-white flex flex-col items-center gap-2 opacity-80 hover:opacity-100 transition-opacity">
            <span className="text-sm font-medium">Discover More</span>
            <ArrowRight className="h-5 w-5 rotate-90" />
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ScrollIndicator;
