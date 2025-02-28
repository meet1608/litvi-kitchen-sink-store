
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';

const navigation = [
  { name: 'Home', href: '#home' },
  { 
    name: 'Products', 
    href: '#products',
    hasDropdown: true,
    dropdownItems: [
      { name: 'Farmhouse Sinks', href: '#products' },
      { name: 'Undermount Sinks', href: '#products' },
      { name: 'Specialty Designs', href: '#products' },
    ]
  },
  { name: 'Journey', href: '#timeline' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDropdown = (name: string) => {
    if (activeDropdown === name) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(name);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 ${
        scrolled ? 'bg-white shadow-md' : 'bg-transparent'
      } transition-all duration-300`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:py-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <a href="#home" className="flex items-center gap-2">
              <motion.div
                className="w-10 h-10 bg-litvi-brown rounded-full flex items-center justify-center"
                whileHover={{ rotate: 180 }}
                transition={{ duration: 0.5 }}
              >
                <span className="text-litvi-cream font-bold text-lg">L</span>
              </motion.div>
              <span className="text-xl font-bold tracking-tight text-litvi-darkBrown">Litvi</span>
            </a>
          </motion.div>

          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navigation.map((item, index) => (
              <div key={item.name} className="relative group">
                {item.hasDropdown ? (
                  <button 
                    onClick={() => toggleDropdown(item.name)}
                    className="text-sm font-medium flex items-center gap-1 text-litvi-brown hover:text-litvi-darkBrown transition-colors"
                  >
                    {item.name}
                    <ChevronDown className="h-4 w-4" />
                  </button>
                ) : (
                  <motion.a
                    href={item.href}
                    className="text-sm font-medium text-litvi-brown hover:text-litvi-darkBrown transition-colors"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                  >
                    {item.name}
                  </motion.a>
                )}
                
                {item.hasDropdown && (
                  <div className="absolute top-full left-0 mt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    <div className="bg-white rounded-md shadow-lg py-2 border border-gray-100">
                      {item.dropdownItems?.map((dropdownItem) => (
                        <a 
                          key={dropdownItem.name}
                          href={dropdownItem.href}
                          className="block px-4 py-2 text-sm text-litvi-brown hover:bg-litvi-cream hover:text-litvi-darkBrown transition-colors"
                        >
                          {dropdownItem.name}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Contact Info */}
          <div className="hidden md:flex items-center">
            <a 
              href="tel:+15551234567" 
              className="flex items-center gap-2 text-litvi-brown hover:text-litvi-darkBrown transition-colors"
            >
              <div className="w-8 h-8 rounded-full bg-litvi-cream flex items-center justify-center">
                <Phone className="h-4 w-4 text-litvi-brown" />
              </div>
              <span className="text-sm font-medium">+1 (555) 123-4567</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              type="button"
              className="text-litvi-brown"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden bg-white"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 shadow-lg">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.hasDropdown ? (
                    <>
                      <button
                        onClick={() => toggleDropdown(item.name)}
                        className="w-full flex items-center justify-between px-3 py-2 rounded-md text-base font-medium text-litvi-brown hover:text-litvi-darkBrown hover:bg-litvi-lightCream transition-colors"
                      >
                        <span>{item.name}</span>
                        <ChevronDown className={`h-4 w-4 transition-transform ${
                          activeDropdown === item.name ? 'rotate-180' : ''
                        }`} />
                      </button>
                      
                      <AnimatePresence>
                        {activeDropdown === item.name && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="pl-4"
                          >
                            {item.dropdownItems?.map((dropdownItem) => (
                              <a
                                key={dropdownItem.name}
                                href={dropdownItem.href}
                                className="block px-3 py-2 rounded-md text-sm font-medium text-litvi-brown hover:text-litvi-darkBrown hover:bg-litvi-lightCream transition-colors"
                                onClick={() => setIsOpen(false)}
                              >
                                {dropdownItem.name}
                              </a>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <a
                      href={item.href}
                      className="block px-3 py-2 rounded-md text-base font-medium text-litvi-brown hover:text-litvi-darkBrown hover:bg-litvi-lightCream transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </a>
                  )}
                </div>
              ))}
              
              <a 
                href="tel:+15551234567" 
                className="flex items-center gap-2 px-3 py-2 text-litvi-brown hover:text-litvi-darkBrown transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
