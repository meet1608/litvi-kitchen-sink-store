
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Star, ArrowLeft, ArrowRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Interior Designer",
    content: "Litvi sinks have transformed my clients' kitchens. The craftsmanship is unmatched, and the design elevates any space. They've become my go-to recommendation for high-end renovations.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=60",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Home Builder",
    content: "As a custom home builder, I need reliable products that deliver on both quality and aesthetics. Litvi's farmhouse sinks have consistently exceeded my expectations and impressed my most discerning clients.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=60",
    rating: 5
  },
  {
    id: 3,
    name: "Rebecca Martinez",
    role: "Homeowner",
    content: "Our Litvi sink is the centerpiece of our kitchen renovation. The quality is exceptional, and it's held up beautifully with our busy family of five. Worth every penny!",
    avatar: "https://images.unsplash.com/photo-1546961329-78bef0414d7c?w=100&auto=format&fit=crop&q=60",
    rating: 5
  },
  {
    id: 4,
    name: "David Thompson",
    role: "Chef & Restaurant Owner",
    content: "After using Litvi sinks in my restaurant kitchen, I had to have one at home. The durability and functionality are perfect for intense use, and the design is simply stunning.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=60",
    rating: 4
  },
  {
    id: 5,
    name: "Emily Wilson",
    role: "Architect",
    content: "Litvi offers the perfect balance of form and function. Their sinks are not just practical fixtures but design elements that enhance the overall aesthetic of my architectural projects.",
    avatar: "https://images.unsplash.com/photo-1614644147724-2d4785d69962?w=100&auto=format&fit=crop&q=60",
    rating: 5
  }
];

const TestimonialCard = ({ testimonial }: { testimonial: any }) => {
  return (
    <motion.div
      className="relative bg-white p-8 rounded-xl shadow-md border border-litvi-brown/10 h-full flex flex-col"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{ y: -8, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
    >
      <div className="absolute -top-2 -right-2">
        <div className="text-litvi-brown/10">
          <Quote className="h-16 w-16 rotate-180" />
        </div>
      </div>
      
      <div className="flex mb-4 relative z-10">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            className={`w-4 h-4 ${i < testimonial.rating ? 'text-amber-400 fill-amber-400' : 'text-gray-300'}`} 
          />
        ))}
      </div>
      
      <p className="text-litvi-brown/80 text-lg mb-6 flex-grow relative z-10">{testimonial.content}</p>
      
      <div className="flex items-center mt-4 relative z-10">
        <img 
          src={testimonial.avatar} 
          alt={testimonial.name} 
          className="w-12 h-12 rounded-full object-cover border-2 border-litvi-cream"
        />
        <div className="ml-4">
          <h4 className="font-semibold text-litvi-darkBrown">{testimonial.name}</h4>
          <p className="text-sm text-litvi-brown/70">{testimonial.role}</p>
        </div>
      </div>
    </motion.div>
  );
};

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleTestimonials, setVisibleTestimonials] = useState<any[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const updateVisibleItems = () => {
      let itemsToShow = 3; // Default for desktop
      
      if (window.innerWidth < 768) {
        itemsToShow = 1; // Mobile
      } else if (window.innerWidth < 1024) {
        itemsToShow = 2; // Tablet
      }
      
      const visibleItems = [];
      for (let i = 0; i < itemsToShow; i++) {
        const index = (currentIndex + i) % testimonials.length;
        visibleItems.push(testimonials[index]);
      }
      setVisibleTestimonials(visibleItems);
    };
    
    updateVisibleItems();
    window.addEventListener('resize', updateVisibleItems);
    
    return () => window.removeEventListener('resize', updateVisibleItems);
  }, [currentIndex]);
  
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
  
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };
  
  return (
    <section className="py-24 bg-litvi-brown/5 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-litvi-brown/10 rounded-full transform translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-litvi-brown/10 rounded-full transform -translate-x-1/2 translate-y-1/2 blur-3xl"></div>
      
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 mb-4 rounded-full bg-white border border-litvi-brown/20">
            <span className="text-sm font-medium text-litvi-brown">Testimonials</span>
          </span>
          <h2 className="section-title text-gradient-modern">What Our Customers Say</h2>
          <p className="section-subtitle">
            Don't just take our word for it. Hear from homeowners, designers, and professionals
            who have experienced the Litvi difference.
          </p>
        </motion.div>
        
        <div className="relative">
          <div 
            ref={containerRef} 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 overflow-hidden"
          >
            {visibleTestimonials.map((testimonial, idx) => (
              <TestimonialCard key={`${testimonial.id}-${idx}`} testimonial={testimonial} />
            ))}
          </div>
          
          <div className="flex justify-center mt-16 space-x-6">
            <motion.button
              onClick={handlePrev}
              className="w-14 h-14 rounded-full bg-white shadow-md border border-litvi-brown/10 flex items-center justify-center text-litvi-brown hover:bg-litvi-brown hover:text-white transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ArrowLeft className="w-5 h-5" />
            </motion.button>
            
            <motion.button
              onClick={handleNext}
              className="w-14 h-14 rounded-full bg-white shadow-md border border-litvi-brown/10 flex items-center justify-center text-litvi-brown hover:bg-litvi-brown hover:text-white transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
