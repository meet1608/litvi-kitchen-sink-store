
import HeroBackground from './hero/HeroBackground';
import HeroContent from './hero/HeroContent';
import HeroImage from './hero/HeroImage';
import ScrollIndicator from './hero/ScrollIndicator';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden font-sans">
      <HeroBackground />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20 md:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-20">
          <HeroContent />
          <HeroImage />
        </div>
      </div>
      
      <ScrollIndicator />
    </section>
  );
};

export default Hero;
