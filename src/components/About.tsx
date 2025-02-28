
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
    <section id="about" className="py-20 bg-white">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
            className="order-2 lg:order-1"
          >
            <span className="inline-block px-4 py-1 mb-4 rounded-full bg-litvi-cream border border-litvi-brown/20">
              <span className="text-sm font-medium text-litvi-brown">Our Story</span>
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient-modern">
              Crafting Excellence for Your Kitchen
            </h2>
            <p className="text-litvi-brown/80 mb-6">
              Litvi was born from a passion for combining artistry with functionality. 
              For nearly two decades, we've been revolutionizing kitchens with our premium sink designs,
              meticulously crafted to elevate both the aesthetic and practical aspects of your culinary space.
            </p>
            <p className="text-litvi-brown/80 mb-8">
              Our team of skilled artisans and innovative designers work tirelessly to create products that
              not only meet the highest standards of quality but also reflect contemporary design sensibilities
              while honoring timeless craftsmanship traditions.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-start"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <CheckCircle className="h-5 w-5 text-litvi-brown mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-litvi-darkBrown">{feature}</span>
                </motion.div>
              ))}
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex -space-x-2">
                <img 
                  className="w-10 h-10 rounded-full border-2 border-white" 
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=60" 
                  alt="Team member" 
                />
                <img 
                  className="w-10 h-10 rounded-full border-2 border-white" 
                  src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&auto=format&fit=crop&q=60" 
                  alt="Team member" 
                />
                <img 
                  className="w-10 h-10 rounded-full border-2 border-white" 
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&auto=format&fit=crop&q=60" 
                  alt="Team member" 
                />
              </div>
              <p className="text-sm text-litvi-brown">Joined by over <span className="font-semibold">50+ craftspeople</span> worldwide</p>
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
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="rounded-lg overflow-hidden shadow-md">
                    <img 
                      src="https://images.unsplash.com/photo-1609259886986-7103cfec4bba?w=500&auto=format&fit=crop&q=60" 
                      alt="Craftsmanship" 
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <div className="rounded-lg overflow-hidden shadow-md">
                    <img 
                      src="https://images.unsplash.com/photo-1640143405373-cf92d6595667?w=500&auto=format&fit=crop&q=60" 
                      alt="Sink design" 
                      className="w-full h-64 object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="rounded-lg overflow-hidden shadow-md">
                    <img 
                      src="https://images.unsplash.com/photo-1447888698054-5954c839f908?w=500&auto=format&fit=crop&q=60" 
                      alt="Workshop" 
                      className="w-full h-64 object-cover"
                    />
                  </div>
                  <div className="rounded-lg overflow-hidden shadow-md">
                    <img 
                      src="https://images.unsplash.com/photo-1500630417200-63156e226754?w=500&auto=format&fit=crop&q=60" 
                      alt="Material selection" 
                      className="w-full h-48 object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-litvi-brown/5 rounded-full -z-10"></div>
            <div className="absolute bottom-10 -right-10 w-40 h-40 bg-litvi-brown/10 rounded-full -z-10"></div>
            <div className="absolute top-10 -left-10 w-40 h-40 bg-litvi-brown/10 rounded-full -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
