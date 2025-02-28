
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen pt-20 pb-16 flex items-center">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 top-1/4 -left-48 bg-litvi-brown/10 rounded-full animate-slow-spin" />
        <div className="absolute w-64 h-64 bottom-1/4 -right-32 bg-litvi-brown/5 rounded-full animate-slow-spin" style={{ animationDelay: '2s' }} />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-block mb-3 px-4 py-1 rounded-full bg-litvi-lightCream border border-litvi-brown/20"
            >
              <span className="text-sm font-medium text-litvi-brown">Elevate Your Kitchen</span>
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gradient-modern"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              Modern Design <br />For Modern Living
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl mb-8 text-litvi-brown/90 max-w-xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              Discover our exquisite collection of premium kitchen sinks designed for elegance, 
              durability, and functionality. Transform your kitchen with Litvi's craftsmanship.
            </motion.p>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <Button 
                className="bg-litvi-brown hover:bg-litvi-darkBrown text-white px-8 py-6"
                asChild
              >
                <a href="#products">
                  Explore Collection
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button 
                variant="outline" 
                className="border-litvi-brown text-litvi-brown hover:bg-litvi-brown hover:text-white px-8 py-6"
                asChild
              >
                <a href="#about">Learn More</a>
              </Button>
            </motion.div>
          </motion.div>
          
          <motion.div
            className="hidden lg:block"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          >
            <div className="relative">
              <motion.div 
                className="absolute -top-6 -left-6 w-48 h-48 bg-litvi-brown/10 rounded-full"
                animate={{ 
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 5,
                  ease: "easeInOut"
                }}
              />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80" 
                  alt="Elegant kitchen sink" 
                  className="w-full h-auto object-cover"
                />
              </div>
              <motion.div 
                className="absolute -bottom-8 -right-8 w-72 h-72 bg-litvi-brown/5 rounded-full"
                animate={{ 
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 7,
                  ease: "easeInOut",
                  delay: 1
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
