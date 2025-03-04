
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { NavigationItem } from './types';

interface DesktopMenuProps {
  navigation: NavigationItem[];
}

const DesktopMenu = ({ navigation }: DesktopMenuProps) => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (name: string) => {
    if (activeDropdown === name) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(name);
    }
  };

  return (
    <div className="hidden md:flex md:items-center md:space-x-8">
      {navigation.map((item, index) => (
        <div key={item.name} className="relative group">
          {item.hasDropdown ? (
            <button
              onClick={() => toggleDropdown(item.name)}
              className="text-sm font-medium flex items-center gap-1 text-white/80 hover:text-white transition-colors"
            >
              {item.name}
              <ChevronDown className="h-4 w-4" />
            </button>
          ) : (
            <motion.a
              href={item.href}
              className="text-sm font-medium text-white/80 hover:text-white transition-colors"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 * index }}
            >
              {item.name}
            </motion.a>
          )}

          {item.hasDropdown && (
            <div className="absolute top-full left-0 mt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <div className="neo-blur rounded-md shadow-lg py-2 border border-white/10">
                {item.dropdownItems?.map((dropdownItem) => (
                  <a
                    key={dropdownItem.name}
                    href={dropdownItem.href}
                    className="block px-4 py-2 text-sm text-white/80 hover:bg-litvi-purple/20 hover:text-white transition-colors"
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
  );
};

export default DesktopMenu;
