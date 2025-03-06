
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { 
  Plus, 
  Search, 
  Edit,
  Trash2,
  Filter,
  ArrowUpDown
} from "lucide-react";
import im1 from '../../accets/im1.jpg';
import im2 from '../../accets/im2.jpg';
import im3 from '../../accets/im3.jpg';
import im4 from '../../accets/im4.jpg';
import im5 from '../../accets/im5.jpg';
import im6 from '../../accets/im6.jpg';

// Use the same product data structure from the main site
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
    stock: 25
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
    stock: 18
  },
  {
    id: 3,
    name: "Metallic White",
    price: 379.99,
    image: im5,
    description: "Timeless Metallic White quartz sink with a smooth finish.",
    dimensions: "24x18x9 inches",
    weight: "11 kg",
    category: "metallic",
    stock: 15
  },
  {
    id: 4,
    name: "Grey Sand",
    price: 329.99,
    image: im4,
    description: "Granite Grey Sand quartz sink, combining elegance and durability.",
    dimensions: "28x19x9 inches",
    weight: "14 kg",
    category: "granite",
    stock: 12
  },
  {
    id: 5,
    name: "Ivory Sand",
    price: 359.99,
    image: im2,
    description: "Ivory Sand quartz sink with a natural stone look.",
    dimensions: "31x19x9 inches",
    weight: "14 kg",
    category: "granite",
    stock: 20
  },
  {
    id: 6,
    name: "Red Rose",
    price: 399.99,
    image: im1,
    description: "Bold Red Rose quartz sink, adding a touch of luxury to your kitchen.",
    dimensions: "36x18x9 inches",
    weight: "16 kg",
    category: "granite",
    stock: 8
  }
];

const AdminProducts = () => {
  const [products, setProducts] = useState(initialProducts);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  // Filter products based on search
  const filteredProducts = products.filter(
    product => 
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDelete = (id: number) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      setProducts(products.filter(product => product.id !== id));
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Products</h1>
          <p className="text-gray-600">Manage your product inventory</p>
        </div>
        <Button 
          onClick={() => navigate("/admin/products/new")}
          className="bg-litvi-purple hover:bg-litvi-purple/90 text-white"
        >
          <Plus className="w-4 h-4 mr-2" /> Add New Product
        </Button>
      </div>

      <Card className="p-6">
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              type="text"
              placeholder="Search products..."
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="gap-2">
              <Filter className="h-4 w-4" /> Filter
            </Button>
            <Button variant="outline" className="gap-2">
              <ArrowUpDown className="h-4 w-4" /> Sort
            </Button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Product
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Category
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Price
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Stock
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Dimensions
                </th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredProducts.map((product) => (
                <tr key={product.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="h-12 w-12 flex-shrink-0">
                        <img 
                          className="h-12 w-12 rounded-md object-cover" 
                          src={product.image} 
                          alt={product.name} 
                        />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{product.name}</div>
                        <div className="text-sm text-gray-500 truncate max-w-xs">
                          {product.description.substring(0, 60)}...
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                      {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                    ${product.price.toFixed(2)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                    {product.stock}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {product.dimensions}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-center">
                    <div className="flex justify-center gap-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => navigate(`/admin/products/edit/${product.id}`)}
                        className="h-8 w-8 text-blue-600 hover:text-blue-800 hover:bg-blue-50"
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleDelete(product.id)}
                        className="h-8 w-8 text-red-600 hover:text-red-800 hover:bg-red-50"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {filteredProducts.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            No products found. Try a different search term or add a new product.
          </div>
        )}
      </Card>
    </div>
  );
};

export default AdminProducts;
