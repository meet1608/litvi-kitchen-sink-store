
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Full-screen background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=2074&auto=format&fit=crop" 
          alt="Luxury kitchen" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-litvi-darkBrown/80 to-black/50" />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20 md:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-20">
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
              className="inline-block mb-3 px-4 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20"
            >
              <span className="text-sm font-medium text-white">Luxury Kitchen Solutions</span>
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 text-white"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              Redefining <span className="text-gradient-modern bg-gradient-to-r from-litvi-cream to-white">Kitchen Excellence</span>
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl mb-8 text-white/90 max-w-xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              Discover our exquisite collection of premium kitchen sinks designed to seamlessly blend 
              timeless elegance with unmatched durability. Transform your kitchen with Litvi's craftsmanship.
            </motion.p>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <Button 
                className="bg-litvi-cream hover:bg-white text-litvi-darkBrown px-8 py-6"
                asChild
              >
                <a href="#products">
                  Explore Collection
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              
            </motion.div>
          </motion.div>
          
          <motion.div
            className="hidden lg:block"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          >
            <motion.div 
              className="relative z-10 p-6 rounded-2xl backdrop-blur-sm bg-white/10 border border-white/10 shadow-2xl"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.5 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80" 
                alt="Elegant kitchen sink" 
                className="w-full h-auto object-cover rounded-xl shadow-inner"
              />
              
              <div className="absolute -bottom-10 -right-10">
                <div className="bg-litvi-cream text-litvi-darkBrown px-6 py-3 rounded-lg shadow-lg font-medium">
                  <span className="text-sm uppercase tracking-wider">Premium Quality</span>
                </div>
              </div>
              
              <div className="absolute -top-10 -left-10">
                <div className="bg-litvi-brown text-white px-6 py-3 rounded-lg shadow-lg font-medium">
                  <span className="text-sm uppercase tracking-wider">Lifetime Warranty</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 z-10 hidden md:block">
        <div className="flex justify-center">
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ 
              duration: 1,
              delay: 1.5,
              repeat: Infinity,
              repeatType: "reverse",
              repeatDelay: 0.5
            }}
          >
            <a href="#products" className="text-white/80 flex flex-col items-center gap-2">
              <span className="text-sm font-medium">Discover More</span>
              <ArrowRight className="h-5 w-5 rotate-90" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
