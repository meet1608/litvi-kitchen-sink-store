// product/[id].tsx or product\[id].js (depending on your project setup)
import { Navigate, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useParams } from "react-router-dom";
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
