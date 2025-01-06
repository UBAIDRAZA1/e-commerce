'use client';
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { ShoppingCart } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function LastHome() {
  const [cart, setCart] = useState<any[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<any | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedCart = JSON.parse(localStorage.getItem('cart') || '[]');
      setCart(savedCart);
    }
  }, []);

  const products = [
    {
      image: '/milestone2/chair.png',
      name: 'Library Stool Chair',
      price: 20,
      description: 'Comfortable library stool chair with ergonomic design.',
      material: 'Wood and Steel',
      dimensions: '18x18x30 inches',
      weight: '10 kg',
    },
    {
      image: '/milestone2/chair2.png',
      name: 'Study Chair',
      price: 15,
      description: 'Perfect study chair with padded seat and adjustable height.',
      material: 'Plastic and Fabric',
      dimensions: '20x20x35 inches',
      weight: '8 kg',
    },
    {
      image: '/milestone2/chair3.png',
      name: 'Office Chair',
      price: 30,
      description: 'High-back office chair with lumbar support and tilt mechanism.',
      material: 'Mesh and Metal',
      dimensions: '22x22x40 inches',
      weight: '12 kg',
    },
    {
      image: '/milestone2/chair4.png',
      name: 'Recliner Chair',
      price: 50,
      description: 'Luxurious recliner chair with soft cushions and adjustable backrest.',
      material: 'Leather and Wood',
      dimensions: '25x30x40 inches',
      weight: '20 kg',
    },
 
    {
      image: '/milestone2/image.png',
      name: 'Dining Chair',
      price: 25,
      description: 'Elegant dining chair with a modern wooden finish.',
      material: 'Wood',
      dimensions: '18x18x36 inches',
      weight: '9 kg',
    },
    {
      image: '/milestone2/sec.png.png',
      name: 'Bar Stool',
      price: 35,
      description: 'Stylish bar stool with a swivel seat and chrome base.',
      material: 'Metal and Leather',
      dimensions: '16x16x40 inches',
      weight: '7 kg',
    },
    {
      image: '/milestone2/card.png',
      name: 'Rocking Chair',
      price: 45,
      description: 'Classic wooden rocking chair with a smooth rocking motion.',
      material: 'Solid Wood',
      dimensions: '22x30x45 inches',
      weight: '15 kg',
    },
    {
      image: '/milestone2/chair.png',
      name: 'Library Stool Chair',
      price: 20,
      description: 'Comfortable library stool chair with ergonomic design.',
      material: 'Wood and Steel',
      dimensions: '18x18x30 inches',
      weight: '10 kg',
    },
  ];
  
  const addToCart = (product: any) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    if (typeof window !== 'undefined') {
      localStorage.setItem('cart', JSON.stringify(updatedCart));
    }
    setIsCartOpen(true);
  };

  const calculateTotal = () => {
    const subtotal = cart.reduce((sum, item) => sum + item.price, 0);
    const discount = subtotal * 0.1;
    const salePolicyDiscount = subtotal * 0.05;
    const total = subtotal - discount - salePolicyDiscount;
    return { subtotal, discount, salePolicyDiscount, total };
  };

  return (
    <div className="mt-8">
      {/* Product Grid */}
      <div className="flex flex-wrap mt-5">
        {products.map((product, index) => (
          <Card
            key={index}
            className="border-none shadow-none m-2 flex-1 min-w-[200px] max-w-[300px] relative group"
          >
            <CardContent className="relative overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                width={500}
                height={500}
                className="w-full transition-transform duration-300 transform group-hover:scale-105"
              />
              <div className="absolute inset-0 flex justify-center items-center bg-opacity-0 group-hover:bg-opacity-30 bg-gray-100 transition-all duration-300 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0">
                <button
                  className="bg-white p-2 mx-2 shadow-md rounded-lg flex items-center hover:bg-green-400 transition-colors duration-300"
                  onClick={() => addToCart(product)}
                >
                  <ShoppingCart className="fill-green-700 group-hover:fill-white mr-2" />
                </button>
                <button
                  className="bg-white p-2 mx-2 shadow-md rounded-lg hover:bg-red-400 transition-colors duration-300 hover:font-bold"
                  onClick={() => setSelectedProduct(product)}
                >
                  Details...
                </button>
              </div>
            </CardContent>
            <CardFooter>
              <div className="flex flex-col items-start">
                <div className="text-xl text-green-500">{product.name}</div>
                <div className="flex flex-row justify-between w-full">
                  <div className="text-xl font-bold mt-2">$ {product.price}</div>
                </div>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>

     {/* Product Details Modal */}
           {selectedProduct && (
             <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
               <div className="relative bg-white rounded-lg p-6 w-[90%] max-w-[800px] flex flex-col md:flex-row">
                 {/* Product Image */}
                 <Image
                   src={selectedProduct.image}
                   alt={selectedProduct.name}
                   width={300}
                   height={300}
                   className="rounded-md"
                 />
                 <div className="ml-0 md:ml-6 mt-4 md:mt-0 flex-1">
                   {/* Close Button */}
                   <button
                     className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-2xl"
                     onClick={() => setSelectedProduct(null)}
                   >
                     &times;
                   </button>
                   {/* Product Name */}
                   <h2 className="text-2xl font-bold mb-4">{selectedProduct.name}</h2>
                   {/* Product Description */}
                   <p className="text-gray-700 mb-4">{selectedProduct.description}</p>
                   {/* Product Details */}
                   <ul className="list-disc ml-5 mb-4">
                     <li>
                       <strong>Material:</strong> {selectedProduct.material}
                     </li>
                     <li>
                       <strong>Dimensions:</strong> {selectedProduct.dimensions}
                     </li>
                     <li>
                       <strong>Weight:</strong> {selectedProduct.weight}
                     </li>
                   </ul>
                   {/* Price and Add to Cart */}
                   <div className="flex justify-between items-center">
                     <div className="text-lg font-bold">$ {selectedProduct.price}</div>
                     <button
                       className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600"
                       onClick={() => {
                         addToCart(selectedProduct);
                         setSelectedProduct(null);
                       }}
                     >
                       Add to Cart
                     </button>
                   </div>
                 </div>
               </div>
             </div>
           )}
     
           {/* Cart Sidebar */}
           {isCartOpen && (
             <div className="fixed top-0 right-0 w-[350px] h-full bg-white shadow-lg z-50">
               <div className="flex justify-between items-center p-4 border-b">
                 <h3 className="text-lg font-semibold">Shopping Cart</h3>
                 <button
                   onClick={() => setIsCartOpen(false)}
                   className="text-red-500 hover:text-red-700"
                 >
                   Close
                 </button>
               </div>
               <div className="p-4">
                 {cart.length === 0 ? (
                   <p className="text-gray-500">Your cart is empty.</p>
                 ) : (
                   <>
                     {cart.map((item, index) => (
                       <div key={index} className="flex items-center mb-4">
                         <Image
                           src={item.image}
                           alt={item.name}
                           width={50}
                           height={50}
                           className="rounded-md"
                         />
                         <div className="ml-4">
                           <h4 className="font-semibold">{item.name}</h4>
                           <p>$ {item.price}</p>
                         </div>
                       </div>
                     ))}
                     {/* Cart Summary */}
                     <div className="mt-4 border-t pt-4">
                       <table className="w-full text-left">
                         <tbody>
                           <tr>
                             <td className="py-2">Sub Total:</td>
                             <td>$ {calculateTotal().subtotal}</td>
                           </tr>
                           <tr>
                             <td className="py-2">Discount:</td>
                             <td>$ {calculateTotal().discount}</td>
                           </tr>
                           <tr>
                             <td className="py-2">Sale Policy Discount:</td>
                             <td>$ {calculateTotal().salePolicyDiscount}</td>
                           </tr>
                           <tr className="font-bold">
                             <td className="py-2">Total:</td>
                             <td>$ {calculateTotal().total}</td>
                           </tr>
                         </tbody>
                       </table>
                       <button
                         className="bg-green-500 text-white py-2 px-4 mt-4 w-full rounded-md hover:bg-green-600"
                         onClick={() => router.push('/components/project01/cart')}
                       >
                         View Cart
                       </button>
                       <button
                         className="bg-green-500 text-white py-2 px-4 mt-4 w-full rounded-md hover:bg-green-600"
                         onClick={() => router.push('/components/project01/checkout')}
                       >
                         Checkout Now
                       </button>
                     </div>
                   </>
                 )}
               </div>
             </div>
           )}
    </div>
  );
}
