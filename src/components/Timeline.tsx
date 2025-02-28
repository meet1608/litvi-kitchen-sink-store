
import { motion } from "framer-motion";

const timelineData = [
  {
    year: "2005",
    title: "The Beginning",
    description: "Litvi was founded with a mission to redefine kitchen experiences through innovative sink designs."
  },
  {
    year: "2010",
    title: "Design Innovation",
    description: "Introduced our award-winning farmhouse collection, revolutionizing traditional sink designs with modern sensibilities."
  },
  {
    year: "2015",
    title: "Sustainable Manufacturing",
    description: "Transitioned to eco-friendly materials and sustainable manufacturing processes across all product lines."
  },
  {
    year: "2018",
    title: "Global Expansion",
    description: "Expanded our reach to international markets, bringing Litvi kitchen solutions to homes worldwide."
  },
  {
    year: "2022",
    title: "Smart Integration",
    description: "Launched our innovative smart sink technology, seamlessly blending traditional craftsmanship with digital convenience."
  },
  {
    year: "2023",
    title: "Design Excellence Award",
    description: "Received prestigious industry recognition for our commitment to exceptional design and functionality."
  }
];

const TimelineItem = ({ item, index }: { item: any, index: number }) => {
  const isEven = index % 2 === 0;
  
  return (
    <motion.div
      className={`relative pl-10 md:pl-0 ${isEven ? 'md:pr-16 ml-auto' : 'md:pl-16'} pb-12 md:w-1/2`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="timeline-dot"></div>
      <div 
        className={`p-8 bg-white rounded-xl shadow-md border border-litvi-brown/10 hover:shadow-lg transition-all duration-300 ${
          isEven ? 'md:text-right' : ''
        }`}
      >
        <span className="inline-block px-4 py-2 mb-4 text-sm font-bold bg-litvi-cream text-litvi-brown rounded-full">
          {item.year}
        </span>
        <h3 className="text-2xl font-bold text-litvi-darkBrown mb-3">{item.title}</h3>
        <p className="text-litvi-brown/80 text-lg">{item.description}</p>
      </div>
    </motion.div>
  );
};

const Timeline = () => {
  return (
    <section id="timeline" className="py-24 bg-litvi-cream relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute -top-40 -right-40 w-96 h-96 bg-litvi-brown/5 rounded-full"
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
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-litvi-brown/5 rounded-full"
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

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 mb-4 rounded-full bg-white border border-litvi-brown/20">
            <span className="text-sm font-medium text-litvi-brown">Our Journey</span>
          </span>
          <h2 className="section-title text-gradient-modern">A Timeline of Excellence</h2>
          <p className="section-subtitle">
            From our humble beginnings to becoming a leader in premium kitchen sink solutions, 
            explore the milestones that have shaped our journey.
          </p>
        </motion.div>
        
        <div className="relative timeline-item">
          <div className="ml-8 md:ml-0 flex flex-col md:flex-row md:flex-wrap">
            {timelineData.map((item, index) => (
              <TimelineItem key={index} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
