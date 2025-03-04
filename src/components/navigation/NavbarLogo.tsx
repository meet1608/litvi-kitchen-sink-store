
import { motion } from 'framer-motion';

const NavbarLogo = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <a href="#home" className="flex items-center gap-2">
        <motion.div
          className="w-10 h-10 bg-litvi-purple/80 rounded-full flex items-center justify-center"
          whileHover={{ rotate: 180 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-white font-bold text-lg">L</span>
        </motion.div>
        <span className="text-xl font-bold tracking-tight text-white">Litvi</span>
      </a>
    </motion.div>
  );
};

export default NavbarLogo;
