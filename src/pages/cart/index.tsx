
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  ShoppingCart, 
  Trash2, 
  Plus, 
  Minus, 
  ArrowLeft, 
  ArrowRight, 
  CreditCard,
  Package
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Input } from '@/components/ui/input';

const Cart = () => {
  const { 
    cartItems, 
    removeFromCart, 
    updateQuantity, 
    getCartTotal, 
    getCartCount,
    clearCart
  } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
    
    // Log current cart state for debugging
    console.log("Cart page loaded with items:", cartItems);
  }, [cartItems]);

  return (
    <div className="min-h-screen flex flex-col bg-litvi-dark text-white">
      <Navbar />
      
      <div className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full"
        >
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold flex items-center">
              <ShoppingCart className="mr-3 h-8 w-8" />
              Shopping Cart {getCartCount() > 0 && <span className="ml-2 text-xl">({getCartCount()} items)</span>}
            </h1>
            
            {cartItems.length > 0 && (
              <Button 
                variant="ghost" 
                onClick={clearCart}
                className="text-white/70 hover:text-white hover:bg-litvi-purple/20"
              >
                <Trash2 className="mr-2 h-4 w-4" />
                Clear Cart
              </Button>
            )}
          </div>

          {cartItems.length === 0 ? (
            <div className="text-center py-16 px-4 neo-blur backdrop-blur-sm rounded-lg border border-white/10">
              <div className="mx-auto w-20 h-20 rounded-full bg-white/5 flex items-center justify-center mb-5">
                <ShoppingCart className="h-10 w-10 text-white/40" />
              </div>
              <h2 className="text-2xl font-semibold mb-3">Your cart is empty</h2>
              <p className="text-white/60 max-w-md mx-auto mb-8">
                Looks like you haven't added any items to your cart yet. 
                Explore our collection of premium quartz sinks and find the perfect match for your kitchen.
              </p>
              <Button 
                onClick={() => navigate('/')}
                className="bg-gradient-to-r from-litvi-purple to-litvi-magenta hover:opacity-90 text-white px-8"
              >
                Browse Products
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart Items List */}
              <div className="lg:col-span-2 space-y-4">
                <div className="neo-blur backdrop-blur-sm rounded-lg border border-white/10 overflow-hidden">
                  <div className="hidden sm:grid grid-cols-12 gap-4 p-4 border-b border-white/10 text-white/70 text-sm">
                    <div className="col-span-6">Product</div>
                    <div className="col-span-2 text-center">Price</div>
                    <div className="col-span-2 text-center">Quantity</div>
                    <div className="col-span-2 text-center">Total</div>
                  </div>
                  
                  <div className="divide-y divide-white/10">
                    {cartItems.map((item) => (
                      <div key={item.id} className="p-4 sm:grid sm:grid-cols-12 sm:gap-4 sm:items-center">
                        {/* Mobile: Product with image, name, price */}
                        <div className="col-span-6 flex items-center">
                          <div className="w-20 h-20 rounded overflow-hidden mr-4 flex-shrink-0">
                            <img 
                              src={item.image} 
                              alt={item.name} 
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div>
                            <h3 className="font-medium">{item.name}</h3>
                            <p className="text-white/70 text-sm sm:hidden mt-1">${item.price.toFixed(2)}</p>
                            <button 
                              onClick={() => removeFromCart(item.id)}
                              className="text-white/60 hover:text-litvi-purple text-sm flex items-center mt-2 sm:hidden"
                            >
                              <Trash2 className="h-3 w-3 mr-1" />
                              Remove
                            </button>
                          </div>
                        </div>
                        
                        {/* Desktop: Price */}
                        <div className="col-span-2 text-center hidden sm:block">
                          ${item.price.toFixed(2)}
                        </div>
                        
                        {/* Quantity Controls */}
                        <div className="col-span-2 flex items-center justify-center mt-4 sm:mt-0">
                          <div className="flex items-center space-x-2">
                            <Button
                              type="button"
                              variant="outline"
                              size="icon"
                              className="h-8 w-8 rounded-full border-white/20 text-white"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            >
                              <Minus className="h-3 w-3" />
                            </Button>
                            
                            <span className="text-center w-8">{item.quantity}</span>
                            
                            <Button
                              type="button"
                              variant="outline"
                              size="icon"
                              className="h-8 w-8 rounded-full border-white/20 text-white"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            >
                              <Plus className="h-3 w-3" />
                            </Button>
                          </div>
                        </div>
                        
                        {/* Desktop: Total */}
                        <div className="col-span-2 text-center hidden sm:block">
                          ${(item.price * item.quantity).toFixed(2)}
                        </div>
                        
                        {/* Mobile: Total price and Remove button */}
                        <div className="sm:hidden flex justify-between items-center mt-4">
                          <span className="font-medium">
                            Total: ${(item.price * item.quantity).toFixed(2)}
                          </span>
                          <button 
                            onClick={() => removeFromCart(item.id)}
                            className="text-white/60 hover:text-litvi-purple text-sm hidden sm:flex items-center"
                          >
                            <Trash2 className="h-3 w-3 mr-1" />
                            Remove
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="flex justify-between pt-4">
                  <Button 
                    variant="outline" 
                    onClick={() => navigate('/')}
                    className="border-white/10 text-white hover:bg-white/10"
                  >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Continue Shopping
                  </Button>
                </div>
              </div>
              
              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="neo-blur backdrop-blur-sm rounded-lg border border-white/10 p-6">
                  <h2 className="text-xl font-bold mb-4">Order Summary</h2>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between text-white/70">
                      <span>Subtotal</span>
                      <span>${getCartTotal().toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-white/70">
                      <span>Shipping</span>
                      <span>Calculated at checkout</span>
                    </div>
                    <div className="border-t border-white/10 pt-3 flex justify-between font-semibold">
                      <span>Total</span>
                      <span>${getCartTotal().toFixed(2)}</span>
                    </div>
                  </div>
                  
                  {/* Promo Code */}
                  <div className="mb-6">
                    <label htmlFor="promo-code" className="block text-sm font-medium text-white/70 mb-2">
                      Promo Code
                    </label>
                    <div className="flex space-x-2">
                      <Input
                        id="promo-code"
                        type="text"
                        placeholder="Enter code"
                        className="flex-grow bg-white/5 border-white/10 text-white placeholder:text-white/30"
                      />
                      <Button variant="outline" className="border-white/20 text-white hover:bg-litvi-purple/20">
                        Apply
                      </Button>
                    </div>
                  </div>
                  
                  <Button 
                    className="w-full bg-gradient-to-r from-litvi-purple to-litvi-magenta hover:opacity-90 mb-4 flex justify-center"
                  >
                    <CreditCard className="mr-2 h-4 w-4" />
                    Proceed to Checkout
                  </Button>
                  
                  <div className="flex items-center justify-center text-white/70 text-sm mt-4">
                    <Package className="h-4 w-4 mr-2" />
                    <span>Free shipping on orders over $500</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Cart;
