
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const features = [
  "Premium materials sourced globally",
  "Handcrafted with expert precision",
  "Revolutionary design approach",
  "Sustainable manufacturing",
  "Lifetime warranty on all products",
  "Award-winning customer service"
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-litvi-darkCharcoal relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute -top-40 -right-40 w-96 h-96 bg-litvi-purple/5 rounded-full"
          animate={{
            y: [0, 20, 0],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-litvi-purple/5 rounded-full"
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 mb-4 rounded-full glass-effect">
            <span className="text-sm font-medium text-litvi-purple">Our Story</span>
          </span>
          <h2 className="section-title text-gradient-modern">The Litvi Legacy</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
            className="order-2 lg:order-1"
          >
            <span className="inline-block text-3xl font-bold mb-6 text-white">
              Crafting Excellence <br/>for Your Kitchen
            </span>
            <p className="text-white/70 mb-6 text-lg">
              Litvi was born from a passion for combining artistry with functionality. 
              For nearly two decades, we've been revolutionizing kitchens with our premium sink designs,
              meticulously crafted to elevate both the aesthetic and practical aspects of your culinary space.
            </p>
            <p className="text-white/70 mb-8 text-lg">
              Our team of skilled artisans and innovative designers work tirelessly to create products that
              not only meet the highest standards of quality but also reflect contemporary design sensibilities
              while honoring timeless craftsmanship traditions.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {features.map((feature, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-start"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <div className="mt-1 mr-3 flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-litvi-purple/20 text-litvi-purple">
                    <CheckCircle className="h-4 w-4" />
                  </div>
                  <span className="text-white">{feature}</span>
                </motion.div>
              ))}
            </div>
            
            <div className="flex items-center space-x-4 mt-10">
              <div className="flex -space-x-3">
                <img 
                  className="w-12 h-12 rounded-full border-2 border-litvi-dark object-cover" 
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=60" 
                  alt="Team member" 
                />
                <img 
                  className="w-12 h-12 rounded-full border-2 border-litvi-dark object-cover" 
                  src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&auto=format&fit=crop&q=60" 
                  alt="Team member" 
                />
                <img 
                  className="w-12 h-12 rounded-full border-2 border-litvi-dark object-cover" 
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&auto=format&fit=crop&q=60" 
                  alt="Team member" 
                />
              </div>
              <p className="text-sm font-medium text-white/70">Joined by over <span className="font-semibold text-white">50+ craftspeople</span> worldwide</p>
            </div>
          </motion.div>
          
          <motion.div
            className="relative order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="relative z-10">
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-7 space-y-4">
                  <motion.div 
                    className="rounded-2xl overflow-hidden shadow-xl neo-blur"
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img 
                      src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80" 
                      alt="Craftsmanship" 
                      className="w-full h-80 object-cover"
                    />
                  </motion.div>
                </div>
                <div className="col-span-5 pt-16 space-y-4">
                  <motion.div 
                    className="rounded-2xl overflow-hidden shadow-xl neo-blur"
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img 
                      src="https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&q=80" 
                      alt="Sink design" 
                      className="w-full h-64 object-cover"
                    />
                  </motion.div>
                </div>
                <div className="col-span-5 space-y-4">
                  <motion.div 
                    className="rounded-2xl overflow-hidden shadow-xl neo-blur"
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img 
                      src="https://images.unsplash.com/photo-1640143405373-cf92d6595667?auto=format&fit=crop&q=80" 
                      alt="Workshop" 
                      className="w-full h-64 object-cover"
                    />
                  </motion.div>
                </div>
                <div className="col-span-7 space-y-4 pt-16">
                  <motion.div 
                    className="rounded-2xl overflow-hidden shadow-xl neo-blur"
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img 
                      src="https://images.unsplash.com/photo-1609259886986-7103cfec4bba?auto=format&fit=crop&q=80" 
                      alt="Material selection" 
                      className="w-full h-60 object-cover"
                    />
                  </motion.div>
                </div>
              </div>
            </div>
            
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-litvi-purple/20 rounded-full -z-10 blur-3xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
