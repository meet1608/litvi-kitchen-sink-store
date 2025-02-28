
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// Sample product data
const products = {
  farmhouse: [
    {
      id: 1,
      name: "Classic Farmhouse",
      price: 249.99,
      image: "https://images.unsplash.com/photo-1575618312141-5c49f12b3384?w=800&auto=format&fit=crop&q=60",
      description: "Deep single bowl farmhouse sink with an elegant apron front design."
    },
    {
      id: 2,
      name: "Double Farmhouse",
      price: 329.99,
      image: "https://images.unsplash.com/photo-1631048500962-6aa645e1811f?w=800&auto=format&fit=crop&q=60",
      description: "Double basin farmhouse sink with spacious compartments for versatile use."
    },
    {
      id: 3,
      name: "Rustic Copper",
      price: 389.99,
      image: "https://images.unsplash.com/photo-1588854337236-6889d631faa8?w=800&auto=format&fit=crop&q=60",
      description: "Handcrafted copper farmhouse sink with a timeless patina finish."
    }
  ],
  undermount: [
    {
      id: 4,
      name: "Modern Undermount",
      price: 199.99,
      image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&auto=format&fit=crop&q=60",
      description: "Sleek single bowl undermount sink with clean lines and premium finish."
    },
    {
      id: 5,
      name: "Dual Basin",
      price: 259.99,
      image: "https://images.unsplash.com/photo-1565183928294-7063f23ce0f8?w=800&auto=format&fit=crop&q=60",
      description: "Double bowl undermount sink with equal-sized compartments."
    },
    {
      id: 6,
      name: "Minimalist Square",
      price: 229.99,
      image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=800&auto=format&fit=crop&q=60",
      description: "Contemporary square undermount sink with sharp angles and modern appeal."
    }
  ],
  specialty: [
    {
      id: 7,
      name: "Integrated Workstation",
      price: 449.99,
      image: "https://images.unsplash.com/photo-1597706557896-01c9171351f7?w=800&auto=format&fit=crop&q=60",
      description: "Multifunctional sink with built-in cutting board, colander, and drying rack."
    },
    {
      id: 8,
      name: "Bar Sink",
      price: 179.99,
      image: "https://images.unsplash.com/photo-1560184897-ae75f418493e?w=800&auto=format&fit=crop&q=60",
      description: "Compact bar or prep sink perfect for entertainment areas or islands."
    },
    {
      id: 9,
      name: "Smart Sink",
      price: 599.99,
      image: "https://images.unsplash.com/photo-1548199569-32d4a8988724?w=800&auto=format&fit=crop&q=60",
      description: "Innovative sink with touchless faucet and integrated water conservation system."
    }
  ]
};

const ProductCard = ({ product, index }: { product: any, index: number }) => {
  return (
    <motion.div
      className="product-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
    >
      <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-t-xl bg-gray-200">
        <img
          src={product.image}
          alt={product.name}
          className="h-64 w-full object-cover object-center transition-all duration-300 hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-litvi-darkBrown">{product.name}</h3>
        <p className="mt-2 text-litvi-brown/80 line-clamp-2">{product.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-lg font-semibold text-litvi-brown">${product.price}</span>
          <Button 
            variant="outline" 
            size="sm" 
            className="border-litvi-brown text-litvi-brown hover:bg-litvi-brown hover:text-white"
          >
            View Details
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

const Products = () => {
  const [selectedTab, setSelectedTab] = useState("farmhouse");
  
  return (
    <section id="products" className="py-20 bg-litvi-lightCream">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1 mb-4 rounded-full bg-white border border-litvi-brown/20">
            <span className="text-sm font-medium text-litvi-brown">Our Collection</span>
          </span>
          <h2 className="section-title text-gradient-modern">Premium Kitchen Sinks</h2>
          <p className="section-subtitle">
            Explore our carefully curated collection of kitchen sinks, 
            combining elegant design with unmatched durability.
          </p>
        </motion.div>
        
        <Tabs 
          defaultValue="farmhouse" 
          value={selectedTab} 
          onValueChange={setSelectedTab}
          className="w-full"
        >
          <motion.div 
            className="flex justify-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <TabsList className="bg-white border border-litvi-brown/20">
              <TabsTrigger 
                value="farmhouse"
                className="data-[state=active]:bg-litvi-brown data-[state=active]:text-white"
              >
                Farmhouse
              </TabsTrigger>
              <TabsTrigger 
                value="undermount"
                className="data-[state=active]:bg-litvi-brown data-[state=active]:text-white"
              >
                Undermount
              </TabsTrigger>
              <TabsTrigger 
                value="specialty"
                className="data-[state=active]:bg-litvi-brown data-[state=active]:text-white"
              >
                Specialty
              </TabsTrigger>
            </TabsList>
          </motion.div>
          
          <TabsContent value="farmhouse" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.farmhouse.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="undermount" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.undermount.map((product, index) => (
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
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <Button 
            className="bg-litvi-brown hover:bg-litvi-darkBrown text-white px-8"
          >
            View All Products
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Products;
