
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ShoppingCart, Heart, Share, ZoomIn } from 'lucide-react';
import { useParams } from "react-router-dom";
import { motion } from 'framer-motion';
import { useToast } from '@/hooks/use-toast';
import { useCart } from '@/context/CartContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import im1 from '../../accets/im1.jpg';
import im2 from '../../accets/im2.jpg';
import im3 from '../../accets/im3.jpg';
import im4 from '../../accets/im4.jpg';
import im5 from '../../accets/im5.jpg';
import im6 from '../../accets/im6.jpg';
import im7 from '../../accets/im7.jpg';
import im8 from '../../accets/im8.webp';

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  dimensions: string;
  weight: string;
};

// Sample product data
const products = [
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
  },
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
  },
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
];

// Product features
const productFeatures = [
  "Premium quality quartz material",
  "Scratch and stain-resistant surface",
  "Heat resistant up to 535°F",
  "Easy to clean and maintain",
  "Environmentally friendly materials",
  "10-year limited warranty"
];

// Related products - show 3 random products that are not the current one
const getRelatedProducts = (currentId: number) => {
  const filteredProducts = products.filter(p => p.id !== currentId);
  return filteredProducts.sort(() => 0.5 - Math.random()).slice(0, 3);
};

const ProductDetail = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { id } = useParams<{ id: string }>();
  const { addToCart, cartItems } = useCart();
  const [product, setProduct] = useState<Product | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const [isZoomed, setIsZoomed] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    if (id) {
      const productId = parseInt(id, 10);
      const foundProduct = products.find(p => p.id === productId);
      setProduct(foundProduct || null);
      
      if (foundProduct) {
        setRelatedProducts(getRelatedProducts(productId));
      }
    }
  }, [id]);

  // Console log to verify cart items
  useEffect(() => {
    console.log("Current cart items:", cartItems);
  }, [cartItems]);

  const handleToggleFavorite = () => {
    setIsFavorite(!isFavorite);
    toast({
      title: isFavorite ? "Removed from favorites" : "Added to favorites",
      description: `${product?.name} has been ${isFavorite ? "removed from" : "added to"} your favorites.`,
    });
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast({
      title: "Link copied!",
      description: "Product link has been copied to clipboard.",
    });
  };

  const handleAddToCart = () => {
    if (product) {
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image
      });
      
      toast({
        title: "Added to cart",
        description: `${product.name} has been added to your cart.`,
      });
    }
  };

  if (!product) {
    return (
      <div className="min-h-screen bg-litvi-dark flex items-center justify-center">
        <div className="text-center text-white bg-litvi-darkCharcoal p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
          <p className="mb-6">The product you're looking for doesn't exist or has been removed.</p>
          <Button onClick={() => navigate('/')} className="bg-gradient-to-r from-litvi-purple to-litvi-magenta">
            Back to Products
          </Button>
        </div>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-litvi-dark via-litvi-darkCharcoal to-litvi-darkGray text-white pb-16 pt-24">
        {/* Breadcrumb navigation */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 md:pt-10">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/')} 
            className="mb-6 flex items-center text-white/70 hover:text-white hover:bg-white/5"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Products
          </Button>
        </div>

        {/* Product Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="bg-litvi-darkCharcoal rounded-xl overflow-hidden border border-white/5 shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Product Image Section */}
              <div className="relative overflow-hidden bg-gradient-to-br from-litvi-darkCharcoal to-litvi-dark p-6 md:p-8">
                <div className={`relative ${isZoomed ? 'cursor-zoom-out' : 'cursor-zoom-in'} transition-all duration-500`}>
                  <div className="aspect-square overflow-hidden rounded-lg relative">
                    <motion.img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                      initial={{ scale: 1 }}
                      animate={{ scale: isZoomed ? 1.5 : 1 }}
                      transition={{ duration: 0.3 }}
                      onClick={() => setIsZoomed(!isZoomed)}
                    />
                    <div className="absolute top-2 right-2 z-10">
                      <Button 
                        size="icon" 
                        variant="outline" 
                        className="rounded-full bg-black/30 backdrop-blur-sm border-white/10 hover:bg-black/50"
                        onClick={() => setIsZoomed(!isZoomed)}
                      >
                        <ZoomIn className="h-4 w-4 text-white" />
                      </Button>
                    </div>
                  </div>
                </div>
                
                <div className="absolute bottom-4 left-4 right-4 flex justify-between">
                  <Button 
                    size="icon" 
                    variant="outline" 
                    className={`rounded-full ${isFavorite ? 'bg-litvi-purple/20 border-litvi-purple' : 'bg-black/30 backdrop-blur-sm border-white/10'} hover:bg-litvi-purple/30`}
                    onClick={handleToggleFavorite}
                  >
                    <Heart className={`h-4 w-4 ${isFavorite ? 'text-litvi-purple fill-litvi-purple' : 'text-white'}`} />
                  </Button>
                  
                  <Button 
                    size="icon" 
                    variant="outline" 
                    className="rounded-full bg-black/30 backdrop-blur-sm border-white/10 hover:bg-black/50"
                    onClick={handleShare}
                  >
                    <Share className="h-4 w-4 text-white" />
                  </Button>
                </div>
              </div>
              
              {/* Product Details Section */}
              <div className="p-6 md:p-8 lg:p-10">
                <span className="inline-block px-3 py-1 mb-4 rounded-full text-xs font-medium bg-litvi-purple/20 text-litvi-purple">
                  Premium Collection
                </span>
                
                <h1 className="text-3xl md:text-4xl font-bold text-gradient-modern mb-2">
                  {product.name}
                </h1>
                
                <div className="flex items-baseline mb-6">
                  <span className="text-2xl md:text-3xl font-bold text-white">${product.price}</span>
                  <span className="ml-2 text-sm text-white/60">USD</span>
                </div>
                
                <div className="prose prose-invert max-w-none mb-6">
                  <p className="text-white/80 text-lg">{product.description}</p>
                </div>
                
                <div className="space-y-6 mb-8">
                  <div>
                    <h3 className="text-sm font-medium text-white/70 mb-2">Specifications</h3>
                    <div className="bg-black/20 rounded-lg p-4 grid grid-cols-2 gap-4">
                      <div>
                        <span className="text-xs text-white/50">Dimensions</span>
                        <p className="text-white font-medium">{product.dimensions}</p>
                      </div>
                      <div>
                        <span className="text-xs text-white/50">Weight</span>
                        <p className="text-white font-medium">{product.weight}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-medium text-white/70 mb-2">Features</h3>
                    <ul className="space-y-2">
                      {productFeatures.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-litvi-purple/20 text-litvi-purple mr-2 flex-shrink-0">
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </span>
                          <span className="text-white/80">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                  <Button
                    className="w-full bg-gradient-to-r from-litvi-purple to-litvi-magenta hover:opacity-90 text-white py-6"
                    onClick={handleAddToCart}
                  >
                    <ShoppingCart className="mr-2 h-5 w-5" />
                    Add to Cart
                  </Button>
                  
                  <Button
                    variant="outline"
                    className="w-full border-white/10 text-white hover:bg-white/5 py-6"
                  >
                    Request Custom Quote
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Product Details Tabs */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
          <div className="bg-litvi-darkCharcoal rounded-xl overflow-hidden border border-white/5 shadow-lg p-6 md:p-8">
            <h2 className="text-2xl font-bold mb-6">Product Details</h2>
            
            <div className="prose prose-invert max-w-none">
              <p className="text-white/80">
                Our premium {product.name} quartz sink is designed to be the centerpiece of your modern kitchen. 
                Crafted with meticulous attention to detail, this sink combines aesthetic appeal with unparalleled 
                functionality. The quartz material ensures exceptional durability, resistance to scratches, 
                and ease of maintenance.
              </p>
              
              <h3 className="text-xl font-medium mt-6 mb-4">Material & Construction</h3>
              <p className="text-white/80">
                Made from high-quality quartz composite (80% quartz and 20% resin binders), our sinks are 
                non-porous, hygienic, and highly resistant to heat, scratches, stains, and impact. The 
                manufacturing process involves molding the material under high pressure and temperature, 
                ensuring consistent quality throughout.
              </p>
              
              <h3 className="text-xl font-medium mt-6 mb-4">Installation & Maintenance</h3>
              <p className="text-white/80">
                The {product.name} sink can be installed as an undermount, topmount, or flush-mount, 
                providing flexibility to match your kitchen design. Regular cleaning with mild soap 
                and water is all that's needed to maintain its pristine appearance. Avoid using 
                abrasive cleaners or scrubbers to preserve the surface finish.
              </p>
            </div>
          </div>
        </div>
        
        {/* Related Products Section */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
          <h2 className="text-2xl font-bold mb-8">You Might Also Like</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedProducts.map((relatedProduct, index) => (
              <motion.div
                key={relatedProduct.id}
                className="sink-card cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                onClick={() => navigate(`/product/${relatedProduct.id}`)}
              >
                <div className="aspect-square overflow-hidden relative">
                  <img
                    src={relatedProduct.image}
                    alt={relatedProduct.name}
                    className="w-full h-full object-cover object-center transition-all duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                </div>
                
                <div className="p-4">
                  <h3 className="text-lg font-bold text-white">{relatedProduct.name}</h3>
                  <p className="text-litvi-chrome font-medium">${relatedProduct.price}</p>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-full mt-2 text-white hover:bg-white/5"
                  >
                    View Details
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetail;
