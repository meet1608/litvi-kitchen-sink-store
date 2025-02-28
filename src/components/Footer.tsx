
import { motion } from "framer-motion";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-litvi-brown rounded-full flex items-center justify-center">
                <span className="text-litvi-cream font-bold">L</span>
              </div>
              <span className="text-xl font-bold tracking-tight text-litvi-darkBrown">Litvi</span>
            </div>
            <p className="text-litvi-brown/80 mb-6">
              Transforming kitchens with premium sink solutions that blend elegant design with unmatched durability.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="#"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-litvi-cream text-litvi-brown hover:bg-litvi-brown hover:text-white transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Facebook className="h-4 w-4" />
              </motion.a>
              <motion.a
                href="#"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-litvi-cream text-litvi-brown hover:bg-litvi-brown hover:text-white transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Instagram className="h-4 w-4" />
              </motion.a>
              <motion.a
                href="#"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-litvi-cream text-litvi-brown hover:bg-litvi-brown hover:text-white transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Twitter className="h-4 w-4" />
              </motion.a>
              <motion.a
                href="#"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-litvi-cream text-litvi-brown hover:bg-litvi-brown hover:text-white transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Youtube className="h-4 w-4" />
              </motion.a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <h3 className="text-lg font-semibold text-litvi-darkBrown mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-litvi-brown/80 hover:text-litvi-brown transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#products" className="text-litvi-brown/80 hover:text-litvi-brown transition-colors">
                  Products
                </a>
              </li>
              <li>
                <a href="#timeline" className="text-litvi-brown/80 hover:text-litvi-brown transition-colors">
                  Our Journey
                </a>
              </li>
              <li>
                <a href="#about" className="text-litvi-brown/80 hover:text-litvi-brown transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-litvi-brown/80 hover:text-litvi-brown transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <h3 className="text-lg font-semibold text-litvi-darkBrown mb-6">Products</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-litvi-brown/80 hover:text-litvi-brown transition-colors">
                  Farmhouse Sinks
                </a>
              </li>
              <li>
                <a href="#" className="text-litvi-brown/80 hover:text-litvi-brown transition-colors">
                  Undermount Sinks
                </a>
              </li>
              <li>
                <a href="#" className="text-litvi-brown/80 hover:text-litvi-brown transition-colors">
                  Specialty Sinks
                </a>
              </li>
              <li>
                <a href="#" className="text-litvi-brown/80 hover:text-litvi-brown transition-colors">
                  Accessories
                </a>
              </li>
              <li>
                <a href="#" className="text-litvi-brown/80 hover:text-litvi-brown transition-colors">
                  Maintenance Products
                </a>
              </li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <h3 className="text-lg font-semibold text-litvi-darkBrown mb-6">Resources</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-litvi-brown/80 hover:text-litvi-brown transition-colors">
                  Installation Guides
                </a>
              </li>
              <li>
                <a href="#" className="text-litvi-brown/80 hover:text-litvi-brown transition-colors">
                  Care & Maintenance
                </a>
              </li>
              <li>
                <a href="#" className="text-litvi-brown/80 hover:text-litvi-brown transition-colors">
                  Warranty Information
                </a>
              </li>
              <li>
                <a href="#" className="text-litvi-brown/80 hover:text-litvi-brown transition-colors">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="text-litvi-brown/80 hover:text-litvi-brown transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </motion.div>
        </div>
        
        <div className="border-t border-litvi-brown/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-litvi-brown/70 text-sm mb-4 md:mb-0">
              &copy; {currentYear} Litvi. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-sm text-litvi-brown/70 hover:text-litvi-brown transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-litvi-brown/70 hover:text-litvi-brown transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-sm text-litvi-brown/70 hover:text-litvi-brown transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
