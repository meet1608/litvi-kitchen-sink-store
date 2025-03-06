
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { ChevronLeft, Save, Upload } from "lucide-react";
import im1 from '../../accets/im1.jpg';
import im2 from '../../accets/im2.jpg';
import im3 from '../../accets/im3.jpg';
import im4 from '../../accets/im4.jpg';
import im5 from '../../accets/im5.jpg';
import im6 from '../../accets/im6.jpg';

// Example product data, similar to the structure from main site
const initialProducts = [
  {
    id: 1,
    name: "Metallic Brown",
    price: 299.99,
    image: im3,
    description: "Elegant Metallic Brown quartz sink with high durability and shine lock technology.",
    dimensions: "16x18x8 inches",
    weight: "8 kg",
    category: "metallic",
    stock: 25,
    sku: "MB-001",
    features: [
      "Shine Lock Technology",
      "Stain Resistant",
      "Scratch Resistant",
      "Heat Resistant up to 280°C",
      "Eco-friendly materials"
    ],
    specifications: {
      material: "Quartz Composite",
      finish: "Metallic Brown",
      installation: "Undermount",
      basinDepth: "8 inches",
      warranty: "10 years"
    }
  },
  {
    id: 2,
    name: "Metallic Black",
    price: 349.99,
    image: im6,
    description: "Sleek Metallic Black quartz sink, perfect for modern kitchens.",
    dimensions: "21x18x9 inches",
    weight: "10 kg",
    category: "metallic",
    stock: 18,
    sku: "MB-002",
    features: [
      "Shine Lock Technology",
      "Stain Resistant",
      "Scratch Resistant",
      "Heat Resistant up to 280°C",
      "Eco-friendly materials"
    ],
    specifications: {
      material: "Quartz Composite",
      finish: "Metallic Black",
      installation: "Undermount",
      basinDepth: "9 inches",
      warranty: "10 years"
    }
  },
  // Add more products here with the same structure if needed
];

// Available categories - could be dynamic in a real app
const categories = [
  { id: "metallic", name: "Metallic Series" },
  { id: "granite", name: "Granite Series" },
  { id: "specialty", name: "Specialty" }
];

const ProductEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const isNewProduct = id === undefined;
  
  // Initialize state for a new product or find existing one
  const [product, setProduct] = useState(
    isNewProduct
      ? {
          id: Date.now(),
          name: "",
          price: 0,
          image: "",
          description: "",
          dimensions: "",
          weight: "",
          category: "metallic",
          stock: 0,
          sku: "",
          features: [""],
          specifications: {
            material: "Quartz Composite",
            finish: "",
            installation: "Undermount",
            basinDepth: "",
            warranty: "10 years"
          }
        }
      : initialProducts.find(p => p.id.toString() === id) || {
          id: Date.now(),
          name: "",
          price: 0,
          image: "",
          description: "",
          dimensions: "",
          weight: "",
          category: "metallic",
          stock: 0,
          sku: "",
          features: [""],
          specifications: {
            material: "Quartz Composite",
            finish: "",
            installation: "Undermount",
            basinDepth: "",
            warranty: "10 years"
          }
        }
  );

  const [activeTab, setActiveTab] = useState("basic");
  const [featureInput, setFeatureInput] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setProduct(prev => ({ ...prev, [name]: value }));
  };

  const handleSpecChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setProduct(prev => ({
      ...prev,
      specifications: { ...prev.specifications, [name]: value }
    }));
  };

  const addFeature = () => {
    if (featureInput.trim()) {
      setProduct(prev => ({
        ...prev,
        features: [...prev.features, featureInput.trim()]
      }));
      setFeatureInput("");
    }
  };

  const removeFeature = (index: number) => {
    setProduct(prev => ({
      ...prev,
      features: prev.features.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send data to your backend
    // For this demo, we'll just show a success message
    
    toast({
      title: isNewProduct ? "Product created" : "Product updated",
      description: `${product.name} has been ${isNewProduct ? "added to" : "updated in"} your inventory.`,
    });
    
    navigate("/admin/products");
  };

  // For selecting placeholder images in this demo
  const placeholderImages = [im1, im2, im3, im4, im5, im6];
  const [showImageSelector, setShowImageSelector] = useState(false);

  const selectImage = (image: string) => {
    setProduct(prev => ({ ...prev, image }));
    setShowImageSelector(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Button 
            variant="outline" 
            size="icon"
            onClick={() => navigate("/admin/products")}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <h1 className="text-2xl font-bold text-gray-800">
            {isNewProduct ? "Add New Product" : `Edit Product: ${product.name}`}
          </h1>
        </div>
        <Button 
          onClick={handleSubmit}
          className="bg-litvi-purple hover:bg-litvi-purple/90 text-white"
        >
          <Save className="w-4 h-4 mr-2" /> Save Product
        </Button>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left column - Image */}
          <Card className="p-6">
            <div className="text-center">
              <p className="text-sm font-medium text-gray-500 mb-2">Product Image</p>
              
              {product.image ? (
                <div className="relative group">
                  <img 
                    src={product.image} 
                    alt={product.name || "Product preview"} 
                    className="w-full h-64 object-cover rounded-lg mb-4"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-lg">
                    <Button
                      type="button"
                      variant="outline"
                      className="bg-white text-gray-800 hover:bg-gray-100"
                      onClick={() => setShowImageSelector(true)}
                    >
                      Change Image
                    </Button>
                  </div>
                </div>
              ) : (
                <div 
                  className="w-full h-64 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center cursor-pointer mb-4"
                  onClick={() => setShowImageSelector(true)}
                >
                  <div className="text-center p-4">
                    <Upload className="h-10 w-10 text-gray-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-500">Click to select product image</p>
                  </div>
                </div>
              )}
              
              {/* Image selector for demo */}
              {showImageSelector && (
                <div className="mt-4">
                  <p className="text-sm font-medium text-gray-800 mb-2">Select an image:</p>
                  <div className="grid grid-cols-3 gap-2">
                    {placeholderImages.map((img, index) => (
                      <div 
                        key={index}
                        className="cursor-pointer border-2 border-transparent hover:border-litvi-purple rounded-md overflow-hidden"
                        onClick={() => selectImage(img)}
                      >
                        <img 
                          src={img} 
                          alt={`Option ${index + 1}`} 
                          className="w-full h-16 object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              <p className="text-xs text-gray-500 mt-2">
                Recommended size: 800x800px. Max size: 5MB
              </p>
            </div>
          </Card>

          {/* Right column - Tabs and form fields */}
          <Card className="p-6 lg:col-span-2">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="w-full mb-6">
                <TabsTrigger value="basic" className="flex-1">Basic Info</TabsTrigger>
                <TabsTrigger value="details" className="flex-1">Details</TabsTrigger>
                <TabsTrigger value="features" className="flex-1">Features</TabsTrigger>
              </TabsList>
              
              <TabsContent value="basic" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-700">Product Name</label>
                    <Input
                      id="name"
                      name="name"
                      value={product.name}
                      onChange={handleChange}
                      placeholder="e.g. Metallic Brown Sink"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="sku" className="text-sm font-medium text-gray-700">SKU</label>
                    <Input
                      id="sku"
                      name="sku"
                      value={product.sku}
                      onChange={handleChange}
                      placeholder="e.g. MB-001"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="category" className="text-sm font-medium text-gray-700">Category</label>
                    <select
                      id="category"
                      name="category"
                      value={product.category}
                      onChange={handleChange}
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      {categories.map(category => (
                        <option key={category.id} value={category.id}>
                          {category.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="price" className="text-sm font-medium text-gray-700">Price ($)</label>
                    <Input
                      id="price"
                      name="price"
                      type="number"
                      min="0"
                      step="0.01"
                      value={product.price}
                      onChange={handleChange}
                      placeholder="e.g. 299.99"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="stock" className="text-sm font-medium text-gray-700">Stock Quantity</label>
                    <Input
                      id="stock"
                      name="stock"
                      type="number"
                      min="0"
                      value={product.stock}
                      onChange={handleChange}
                      placeholder="e.g. 25"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="description" className="text-sm font-medium text-gray-700">Description</label>
                  <Textarea
                    id="description"
                    name="description"
                    value={product.description}
                    onChange={handleChange}
                    placeholder="Enter a detailed product description"
                    rows={5}
                    required
                  />
                </div>
              </TabsContent>
              
              <TabsContent value="details" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="dimensions" className="text-sm font-medium text-gray-700">Dimensions</label>
                    <Input
                      id="dimensions"
                      name="dimensions"
                      value={product.dimensions}
                      onChange={handleChange}
                      placeholder="e.g. 16x18x8 inches"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="weight" className="text-sm font-medium text-gray-700">Weight</label>
                    <Input
                      id="weight"
                      name="weight"
                      value={product.weight}
                      onChange={handleChange}
                      placeholder="e.g. 8 kg"
                    />
                  </div>
                </div>
                
                <h3 className="text-md font-medium text-gray-700 mt-6 mb-2">Specifications</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="material" className="text-sm font-medium text-gray-700">Material</label>
                    <Input
                      id="material"
                      name="material"
                      value={product.specifications.material}
                      onChange={handleSpecChange}
                      placeholder="e.g. Quartz Composite"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="finish" className="text-sm font-medium text-gray-700">Finish</label>
                    <Input
                      id="finish"
                      name="finish"
                      value={product.specifications.finish}
                      onChange={handleSpecChange}
                      placeholder="e.g. Metallic Brown"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="installation" className="text-sm font-medium text-gray-700">Installation Type</label>
                    <Input
                      id="installation"
                      name="installation"
                      value={product.specifications.installation}
                      onChange={handleSpecChange}
                      placeholder="e.g. Undermount"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="basinDepth" className="text-sm font-medium text-gray-700">Basin Depth</label>
                    <Input
                      id="basinDepth"
                      name="basinDepth"
                      value={product.specifications.basinDepth}
                      onChange={handleSpecChange}
                      placeholder="e.g. 8 inches"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="warranty" className="text-sm font-medium text-gray-700">Warranty</label>
                    <Input
                      id="warranty"
                      name="warranty"
                      value={product.specifications.warranty}
                      onChange={handleSpecChange}
                      placeholder="e.g. 10 years"
                    />
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="features" className="space-y-4">
                <div className="space-y-4">
                  <h3 className="text-md font-medium text-gray-700">Product Features</h3>
                  <p className="text-sm text-gray-500">Add key features that make this product stand out.</p>
                  
                  <div className="flex gap-2">
                    <Input
                      value={featureInput}
                      onChange={(e) => setFeatureInput(e.target.value)}
                      placeholder="Enter a product feature"
                      className="flex-1"
                    />
                    <Button 
                      type="button"
                      onClick={addFeature}
                      variant="outline"
                    >
                      Add
                    </Button>
                  </div>
                  
                  <div className="space-y-2 mt-4">
                    {product.features.length > 0 ? (
                      <>
                        <h4 className="text-sm font-medium text-gray-700">Current Features:</h4>
                        <ul className="space-y-2">
                          {product.features.map((feature, index) => (
                            <li key={index} className="flex items-center justify-between bg-gray-50 p-3 rounded-md">
                              <span>{feature}</span>
                              <Button
                                type="button"
                                variant="ghost"
                                size="sm"
                                onClick={() => removeFeature(index)}
                                className="text-red-500 hover:text-red-700 hover:bg-red-50 h-8 w-8 p-0"
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </li>
                          ))}
                        </ul>
                      </>
                    ) : (
                      <p className="text-sm text-gray-500 italic">No features added yet.</p>
                    )}
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </Card>
        </div>
        
        <div className="mt-6 flex justify-end">
          <Button
            type="button"
            variant="outline"
            className="mr-2"
            onClick={() => navigate("/admin/products")}
          >
            Cancel
          </Button>
          <Button 
            type="submit"
            className="bg-litvi-purple hover:bg-litvi-purple/90 text-white"
          >
            <Save className="w-4 h-4 mr-2" /> 
            {isNewProduct ? "Create Product" : "Update Product"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ProductEdit;
