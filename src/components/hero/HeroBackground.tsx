
const HeroBackground = () => {
  return (
    <div className="absolute inset-0 z-0">
      <img 
        src="https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=2074&auto=format&fit=crop" 
        alt="Luxury kitchen" 
        className="w-full h-full object-cover opacity-50"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-litvi-dark/85 to-litvi-darkCharcoal/80" />
    </div>
  );
};

export default HeroBackground;
