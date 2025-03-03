// product/[id].tsx or product\[id].js (depending on your project setup)
import { Navigate, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useParams } from "react-router-dom";

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
];

const ProductDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    if (id) {
      const foundProduct = products.find(p => p.id === parseInt(id as string, 10));
      setProduct(foundProduct || null);
    }
  }, [id]);

  if (!product) {
    return <div className="text-center text-white">Product not found.</div>;
  }

  return (
    <div className="min-h-screen bg-litvi-dark text-white flex items-center justify-center p-6">
      <div className="max-w-4xl w-full bg-litvi-darkCharcoal p-8 rounded-lg shadow-lg">
      <Button variant="outline" onClick={() => navigate('/')} className="mb-4 flex items-center">
      <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Products
        </Button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4">{product.name}</h2>
            <p className="text-lg text-litvi-chrome">${product.price}</p>
            <p className="mt-4">{product.description}</p>
            <p className="mt-2">Dimensions: {product.dimensions}</p>
            <p className="mt-2">Weight: {product.weight}</p>

            <Button
              className="mt-6 bg-gradient-to-r from-litvi-purple to-litvi-magenta hover:opacity-90 text-white px-6 py-4 shadow-lg"
            >
              Buy Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
