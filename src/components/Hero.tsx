
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  // Container animation variants
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

  // Item animation variants
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1.0] }
    }
  };

  // Image animation variants
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.4 } 
    }
  };

  // Badge animation
  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5, delay: 0.3 }
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden font-sans">
      {/* Full-screen background with parallax effect */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="w-full h-full"
        >
          <img 
            src="https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=2074&auto=format&fit=crop" 
            alt="Luxury kitchen" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-litvi-darkBrown/80 to-black/60" />
        </motion.div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20 md:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-20">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left space-y-6"
          >
            <motion.div
              variants={badgeVariants}
              className="inline-block mb-2 px-4 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20"
            >
              <span className="text-sm font-medium text-white">Premium Kitchen Solutions</span>
            </motion.div>
            
            <motion.h1 
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-7xl font-bold mb-4 text-white leading-tight tracking-tight"
            >
              Redefining{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
                Kitchen Excellence
              </span>
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-lg md:text-xl mb-6 text-white/90 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              Discover our exquisite collection of premium kitchen sinks designed to seamlessly blend 
              timeless elegance with unmatched durability. Transform your kitchen with Litvi's craftsmanship.
            </motion.p>
            
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button 
                className="bg-gradient-to-r from-litvi-cream to-white text-litvi-darkBrown hover:brightness-110 transition-all duration-300 px-8 py-6 shadow-lg hover:shadow-xl"
                asChild
              >
                <a href="#products" className="flex items-center gap-2">
                  <span>Explore Collection</span>
                  <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </Button>
              
              <Button 
                className="bg-transparent border border-white/30 text-white hover:bg-white/10 transition-all duration-300 px-8 py-6"
                asChild
              >
                <a href="#about" className="flex items-center gap-2">
                  <span>Our Story</span>
                </a>
              </Button>
            </motion.div>
          </motion.div>
          
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            className="hidden lg:block"
          >
            <div className="relative z-10">
              <motion.div 
                className="relative z-10 p-6 rounded-2xl backdrop-blur-sm bg-white/10 border border-white/20 shadow-2xl overflow-hidden"
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80" 
                  alt="Elegant kitchen sink" 
                  className="w-full h-auto object-cover rounded-xl shadow-inner"
                />
                
                <motion.div 
                  className="absolute -bottom-10 -right-10"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                >
                  <div className="bg-gradient-to-r from-litvi-cream to-white text-litvi-darkBrown px-6 py-3 rounded-lg shadow-lg font-medium">
                    <span className="text-sm uppercase tracking-wider">Premium Quality</span>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="absolute -top-10 -left-10"
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1, duration: 0.5 }}
                >
                  <div className="bg-gradient-to-r from-litvi-brown to-litvi-darkBrown text-white px-6 py-3 rounded-lg shadow-lg font-medium">
                    <span className="text-sm uppercase tracking-wider">Lifetime Warranty</span>
                  </div>
                </motion.div>
              </motion.div>
              
              {/* Decorative elements */}
              <div className="absolute -z-10 -bottom-10 -right-10 w-40 h-40 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-2xl"></div>
              <div className="absolute -z-10 -top-10 -left-10 w-40 h-40 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-2xl"></div>
            </div>
          </motion.div>
        </div>
      </div>
      
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
    </section>
  );
};

export default Hero;
