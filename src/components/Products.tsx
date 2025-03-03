import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowUpRight } from 'lucide-react';

// Sample product data based on LITVI's Quartz Sinks
const products = {
  metallic: [
    {
      id: 1,
      name: "Metallic Brown",
      price: 299.99,
      image: "https://images.unsplash.com/photo-1575618312141-5c49f12b3384?w=800&auto=format&fit=crop&q=60",
      description: "Elegant Metallic Brown quartz sink with high durability and shine lock technology.",
      dimensions: "16x18x8 inches",
      weight: "8 kg"
    },
    {
      id: 2,
      name: "Metallic Black",
      price: 349.99,
      image: "https://images.unsplash.com/photo-1631048500962-6aa645e1811f?w=800&auto=format&fit=crop&q=60",
      description: "Sleek Metallic Black quartz sink, perfect for modern kitchens.",
      dimensions: "21x18x9 inches",
      weight: "10 kg"
    },
    {
      id: 3,
      name: "Metallic White",
      price: 379.99,
      image: "https://images.unsplash.com/photo-1588854337236-6889d631faa8?w=800&auto=format&fit=crop&q=60",
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
      image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&auto=format&fit=crop&q=60",
      description: "Granite Grey Sand quartz sink, combining elegance and durability.",
      dimensions: "28x19x9 inches",
      weight: "14 kg"
    },
    {
      id: 5,
      name: "Ivory Sand",
      price: 359.99,
      image: "https://images.unsplash.com/photo-1565183928294-7063f23ce0f8?w=800&auto=format&fit=crop&q=60",
      description: "Ivory Sand quartz sink with a natural stone look.",
      dimensions: "31x19x9 inches",
      weight: "14 kg"
    },
    {
      id: 6,
      name: "Red Rose",
      price: 399.99,
      image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=800&auto=format&fit=crop&q=60",
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
      image: "https://images.unsplash.com/photo-1597706557896-01c9171351f7?w=800&auto=format&fit=crop&q=60",
      description: "Unique Lemon Sand quartz sink with a vibrant finish.",
      dimensions: "37x18x9 inches",
      weight: "24 kg"
    },
    {
      id: 8,
      name: "Moon Sand",
      price: 419.99,
      image: "https://images.unsplash.com/photo-1560184897-ae75f418493e?w=800&auto=format&fit=crop&q=60",
      description: "Moon Sand quartz sink with a subtle, elegant texture.",
      dimensions: "30x20x8.5 inches",
      weight: "20.5 kg"
    },
    {
      id: 9,
      name: "Snow Sand",
      price: 399.99,
      image: "https://images.unsplash.com/photo-1548199569-32d4a8988724?w=800&auto=format&fit=crop&q=60",
      description: "Snow Sand quartz sink, offering a pristine white finish.",
      dimensions: "28x19x9 inches",
      weight: "14 kg"
    }
  ]
};

const ProductCard = ({ product, index }: { product: any, index: number }) => {
  return (
    <motion.div
      className="sink-card group"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
    >
      <div className="aspect-square overflow-hidden water-reflection">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover object-center transition-all duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 p-6 z-10">
          <h3 className="text-xl font-bold text-white">{product.name}</h3>
          <p className="mt-1 text-white/80">${product.price}</p>
        </div>
      </div>

      <div className="p-6 bg-litvi-darkCharcoal">
        <p className="text-white/70 mb-4">{product.description}</p>
        <p className="text-white/70 mb-4">Dimensions: {product.dimensions}</p>
        <p className="text-white/70 mb-4">Weight: {product.weight}</p>
        <Button
          variant="outline"
          size="sm"
          className="border-litvi-steel text-litvi-chrome hover:bg-litvi-steel/20 hover:text-white w-full flex items-center justify-between"
        >
          <span>View Details</span>
          <ArrowUpRight className="h-4 w-4" />
        </Button>
      </div>

      <div className="absolute top-4 right-4 neo-blur rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="w-8 h-8 bg-gradient-to-r from-litvi-purple to-litvi-magenta rounded-full flex items-center justify-center">
          <span className="text-white font-bold text-xs">New</span>
        </div>
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