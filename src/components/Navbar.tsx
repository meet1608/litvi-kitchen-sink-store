
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, LogIn } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import NavbarLogo from './navigation/NavbarLogo';
import DesktopMenu from './navigation/DesktopMenu';
import MobileMenu from './navigation/MobileMenu';
import { NavigationItem } from './navigation/types';

const navigation: NavigationItem[] = [
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
  { name: 'Contact Us', href: '#contact' },
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
      className={`fixed top-0 left-0 right-0 z-50 ${scrolled ? 'neo-blur backdrop-blur-xl' : 'bg-transparent'} transition-all duration-300`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:py-6">
          <NavbarLogo />

          {/* Desktop menu */}
          <DesktopMenu navigation={navigation} />

          {/* Login Button (Desktop) */}
          <div className="hidden md:flex">
            <Link to="/auth/login">
              <Button variant="outline" className="flex items-center gap-2 border-white/20 text-white hover:bg-litvi-purple/20">
                <LogIn className="h-4 w-4" />
                Login
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              type="button"
              className="text-white"
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
      <MobileMenu 
        isOpen={isOpen}
        navigation={navigation}
        activeDropdown={activeDropdown}
        toggleDropdown={toggleDropdown}
        onClose={() => setIsOpen(false)}
      />
    </motion.nav>
  );
};

export default Navbar;
