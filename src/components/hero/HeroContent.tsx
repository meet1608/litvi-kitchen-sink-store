
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

// Animation variants
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1.0] }
  }
};

const badgeVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.5, delay: 0.3 }
  }
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { 
      staggerChildren: 0.2,
      delayChildren: 0.3,
    } 
  }
};

const HeroContent = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="text-center lg:text-left space-y-6"
    >
      <motion.div
        variants={badgeVariants}
        className="inline-block mb-2 px-4 py-1 rounded-full neo-blur"
      >
        <span className="text-sm font-medium text-litvi-purple">Premium Quartz Sinks</span>
      </motion.div>
      
      <motion.h1 
        variants={itemVariants}
        className="text-4xl md:text-5xl lg:text-7xl font-bold mb-4 text-white leading-tight tracking-tight"
      >
        Redefining{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-litvi-steel via-litvi-chrome to-litvi-oceanBlue">
          Kitchen Elegance
        </span>
      </motion.h1>
      
      <motion.p 
        variants={itemVariants}
        className="text-lg md:text-xl mb-6 text-white/80 max-w-xl mx-auto lg:mx-0 leading-relaxed"
      >
        LITVI is one of the finest manufacturers of Quartz Kitchen sinks in India, offering innovative designs and unmatched durability. Transform your kitchen with our exquisite collection of Metallic and Granite series sinks.
      </motion.p>
      
      <motion.div
        variants={itemVariants}
        className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
      >
        <Button 
          className="bg-gradient-to-r from-litvi-purple to-litvi-magenta text-white hover:opacity-90 transition-all duration-300 px-8 py-6 shadow-lg hover:shadow-xl"
          asChild
        >
          <a href="#products" className="flex items-center gap-2">
            <span>Explore Collection</span>
            <ArrowRight className="ml-1 h-4 w-4" />
          </a>
        </Button>
        
        <Button 
          className="bg-transparent border border-white/20 text-white hover:bg-white/10 transition-all duration-300 px-8 py-6"
          asChild
        >
          <a href="#about" className="flex items-center gap-2">
            <span>Our Story</span>
          </a>
        </Button>
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
