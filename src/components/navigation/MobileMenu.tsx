
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, LogIn } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { NavigationItem } from './types';

interface MobileMenuProps {
  isOpen: boolean;
  navigation: NavigationItem[];
  activeDropdown: string | null;
  toggleDropdown: (name: string) => void;
  onClose: () => void;
}

const MobileMenu = ({ 
  isOpen, 
  navigation, 
  activeDropdown, 
  toggleDropdown, 
  onClose 
}: MobileMenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="md:hidden neo-blur"
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
                      className="w-full flex items-center justify-between px-3 py-2 rounded-md text-base font-medium text-white/80 hover:text-white hover:bg-litvi-purple/20 transition-colors"
                    >
                      <span>{item.name}</span>
                      <ChevronDown className={`h-4 w-4 transition-transform ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
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
                              className="block px-3 py-2 rounded-md text-sm font-medium text-white/80 hover:text-white hover:bg-litvi-purple/20 transition-colors"
                              onClick={onClose}
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
                    className="block px-3 py-2 rounded-md text-base font-medium text-white/80 hover:text-white hover:bg-litvi-purple/20 transition-colors"
                    onClick={onClose}
                  >
                    {item.name}
                  </a>
                )}
              </div>
            ))}

            {/* Mobile Login Button */}
            <Link to="/auth/login" onClick={onClose}>
              <Button variant="outline" className="w-full flex items-center justify-center gap-2 border-white/20 text-white hover:bg-litvi-purple/20 mt-2">
                <LogIn className="h-4 w-4" />
                Login
              </Button>
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
