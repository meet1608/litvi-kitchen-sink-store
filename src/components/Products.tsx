import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowUpRight } from 'lucide-react';
import { Navigate, useNavigate } from 'react-router-dom';
import im1 from '../accets/im1.jpg';
import im4 from '../accets/im4.jpg';
import im2 from '../accets/im2.jpg';
import im3 from '../accets/im3.jpg';
import im5 from '../accets/im5.jpg';
import im6 from '../accets/im6.jpg';


// Sample product data based on LITVI's Quartz Sinks
const products = {
  metallic: [
    {
      id: 1,
      name: "Metallic Brown",
      price: 299.99,
      image: im3,
      description: "Elegant Metallic Brown quartz sink with high durability and shine lock technology.",
      dimensions: "16x18x8 inches",
      weight: "8 kg"
    },
    {
      id: 2,
      name: "Metallic Black",
      price: 349.99,
      image: im6,
      description: "Sleek Metallic Black quartz sink, perfect for modern kitchens.",
      dimensions: "21x18x9 inches",
      weight: "10 kg"
    },
    {
      id: 3,
      name: "Metallic White",
      price: 379.99,
      image: im5,
      description: "Timeless Metallic White quartz sink with a smooth finish.",
      dimensions: "24x18x9 inches",
      weight: "11 kg"
    }
  ],
  granite: [
    {
      id: 4,
      name: "Grey Sand",
      price: 329.99,
      image: im4,
      description: "Granite Grey Sand quartz sink, combining elegance and durability.",
      dimensions: "28x19x9 inches",
      weight: "14 kg"
    },
    {
      id: 5,
      name: "Ivory Sand",
      price: 359.99,
      image: im2,
      description: "Ivory Sand quartz sink with a natural stone look.",
      dimensions: "31x19x9 inches",
      weight: "14 kg"
    },
    {
      id: 6,
      name: "Red Rose",
      price: 399.99,
      image: im1,
      description: "Bold Red Rose quartz sink, adding a touch of luxury to your kitchen.",
      dimensions: "36x18x9 inches",
      weight: "16 kg"
    }
  ],
  specialty: [
    {
      id: 7,
      name: "Lemon Sand",
      price: 449.99,
      image: im3,
      description: "Unique Lemon Sand quartz sink with a vibrant finish.",
      dimensions: "37x18x9 inches",
      weight: "24 kg"
    },
    {
      id: 8,
      name: "Moon Sand",
      price: 419.99,
      image: im5,
      description: "Moon Sand quartz sink with a subtle, elegant texture.",
      dimensions: "30x20x8.5 inches",
      weight: "20.5 kg"
    },
    {
      id: 9,
      name: "Snow Sand",
      price: 399.99,
      image: im4,
      description: "Snow Sand quartz sink, offering a pristine white finish.",
      dimensions: "28x19x9 inches",
      weight: "14 kg"
    }
  ]
};

const ProductCard = ({ product, index }: { product: any, index: number }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <motion.div
      className="sink-card group"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
    >
      <div className="aspect-square overflow-hidden relative">
  <img
    src={product.image}
    alt={product.name}
    className="w-full h-full object-cover object-center transition-all duration-500 group-hover:scale-110"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
</div>


      <div className="p-6 bg-litvi-darkCharcoal">
      <h3 className="text-xl font-bold text-white">{product.name}</h3>
        <p className="text-white/70 mb-4">{product.description}</p>
        <p className="text-white/70 mb-4">Dimensions: {product.dimensions}</p>
        <p className="text-white/70 mb-4">Weight: {product.weight}</p>
        <Button
          onClick={handleNavigate}
          variant="outline"
          size="sm"
          className="border-litvi-steel text-litvi-chrome hover:bg-litvi-steel/20 hover:text-white w-full flex items-center justify-between"
        >
          <span>View Details</span>
          <ArrowUpRight className="h-4 w-4" />
        </Button>
      </div>

      
    </motion.div>
  );
};

const Products = () => {
  const [selectedTab, setSelectedTab] = useState("metallic");

  return (
    <section id="products" className="py-24 bg-litvi-dark">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 mb-4 rounded-full glass-effect">
            <span className="text-sm font-medium text-litvi-purple">Our Collection</span>
          </span>
          <h2 className="section-title text-gradient-modern">Premium Quartz Kitchen Sinks</h2>
          <p className="section-subtitle">
            Explore our exquisite collection of quartz kitchen sinks, designed to blend elegance with unmatched durability.
          </p>
        </motion.div>

        <Tabs
          defaultValue="metallic"
          value={selectedTab}
          onValueChange={setSelectedTab}
          className="w-full"
        >
          <motion.div
            className="flex justify-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <TabsList className="neo-blur p-1 max-w-xs sm:max-w-sm rounded-lg">
              <TabsTrigger
                value="metallic"
                className="data-[state=active]:bg-litvi-purple data-[state=active]:text-white rounded-md px-4 py-2 text-sm"
              >
                Metallic Series
              </TabsTrigger>
              <TabsTrigger
                value="granite"
                className="data-[state=active]:bg-litvi-purple data-[state=active]:text-white rounded-md px-4 py-2 text-sm"
              >
                Granite Series
              </TabsTrigger>
              <TabsTrigger
                value="specialty"
                className="data-[state=active]:bg-litvi-purple data-[state=active]:text-white rounded-md px-4 py-2 text-sm"
              >
                Specialty
              </TabsTrigger>
            </TabsList>
          </motion.div>

          <TabsContent value="metallic" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.metallic.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="granite" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.granite.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="specialty" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.specialty.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <Button
            className="bg-gradient-to-r from-litvi-purple to-litvi-magenta hover:opacity-90 text-white px-8 py-6 shadow-lg"
          >
            View Full Catalog
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Products;