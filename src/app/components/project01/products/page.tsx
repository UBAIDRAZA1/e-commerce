'use client';
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { ShoppingCart } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface Product {
  image: string;
  name: string;
  price: number;
  description: string;
  material: string;
  dimensions: string;
  weight: string;
}

export default function Products() {
  const [cart, setCart] = useState<Product[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
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
      name: 'Executive Office Chair',
      price: 50,
      description: 'Luxurious office chair with leather finish and high back support.',
      material: 'Leather and Metal',
      dimensions: '24x24x45 inches',
      weight: '15 kg',
    },
    {
      image: '/milestone2/chair4.png',
      name: 'Kids Study Chair',
      price: 12,
      description: 'Bright and colorful chair designed for kids.',
      material: 'Plastic',
      dimensions: '15x15x25 inches',
      weight: '5 kg',
    },
    {
      image: '/milestone2/sec1.png.png',
      name: 'Folding Chair',
      price: 18,
      description: 'Portable folding chair, ideal for events and gatherings.',
      material: 'Steel and Fabric',
      dimensions: '16x16x30 inches',
      weight: '6 kg',
    },
    {
      image: '/milestone2/card.png',
      name: 'Recliner Chair',
      price: 100,
      description: 'Premium recliner chair with adjustable back and leg rest.',
      material: 'Leather and Wood',
      dimensions: '30x30x40 inches',
      weight: '20 kg',
    },
    {
      image: '/milestone2/image.png',
      name: 'Bar Stool Chair',
      price: 25,
      description: 'Modern bar stool chair with swivel functionality.',
      material: 'Metal and Foam',
      dimensions: '15x15x35 inches',
      weight: '7 kg',
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
    {
      image: '/milestone2/sec.png.png',
      name: 'Dining Chair',
      price: 22,
      description: 'Classic dining chair with padded seat and wooden frame.',
      material: 'Wood and Fabric',
      dimensions: '18x18x36 inches',
      weight: '9 kg',
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
      name: 'Executive Office Chair',
      price: 50,
      description: 'Luxurious office chair with leather finish and high back support.',
      material: 'Leather and Metal',
      dimensions: '24x24x45 inches',
      weight: '15 kg',
    },
    {
      image: '/milestone2/sec2.png.png',
      name: 'Outdoor Chair',
      price: 30,
      description: 'Weather-resistant outdoor chair for patios and gardens.',
      material: 'Plastic and Aluminum',
      dimensions: '22x22x32 inches',
      weight: '9 kg',
    },
  ];
  

  const addToCart = (product: Product) => {
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
    <div>
      {/* Featured Products Section */}
      <div className="mt-8 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-36">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-5">
          {products.map((product, index) => (
            <Card key={index} className="border-none shadow-md group">
              <CardContent className="relative">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={300}
                  height={300}
                  className="w-full h-auto object-cover rounded-lg"
                />
                <div className="absolute inset-0 flex justify-center items-center bg-opacity-0 group-hover:bg-opacity-30 bg-gray-100 transition-all duration-300 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0">
                  <button
                    className="bg-white p-2 mx-2 shadow-md rounded-lg flex items-center hover:bg-green-400 transition-colors duration-300"
                    onClick={() => addToCart(product)}
                  >
                    <ShoppingCart className="fill-green-700 group-hover:fill-white mr-2" />
                    Add to Cart
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
                  <div className="text-lg text-green-600 font-medium">{product.name}</div>
                  <div className="flex justify-between w-full items-center mt-2">
                    <div className="text-lg font-bold">${product.price}</div>
                  </div>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
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
      
      {/* Section 2: Newsletter */}
      <div className="bg-stone-100 mt-12 flex flex-col items-center py-16">
        {/* Title */}
        <h1 className="text-5xl font-medium text-center mb-8">
          Or Subscribe To The Newsletter
        </h1>

        {/* Input Section */}
        <div className="flex flex-col md:flex-row items-center gap-4 mb-12">
          <input 
            type="text" 
            placeholder="Email Address..." 
            className="w-full md:w-[643px] border-b-2 outline-none border-gray-300 text-lg px-2 py-1" 
          />
          <button 
            className="text-white bg-black px-8 py-2 text-lg font-medium hover:bg-gray-800 transition duration-300">
            SUBMIT
          </button>
        </div>

        {/* Instagram Section */}
        <div className="text-center mb-8">
          <p className="text-2xl font-medium">
            Follow Products And Discounts On Instagram
          </p>
        </div>

       {/* Instagram Images */}
<div className="grid grid-cols-2 md:grid-cols-6 gap-6 px-6">
  {[
    { image: "/milestone2/sec1.png.png", alt: "Product 1", details: "Comfortable library stool chair." },
    { image: "/milestone2/sec.png.png", alt: "Product 2", details: "Classic dining chair with padded seat." },
    { image: "/milestone2/chair2.png", alt: "Product 3", details: "Perfect study chair with adjustable height." },
    { image: "/milestone2/chair.png", alt: "Product 4", details: "Library stool chair with ergonomic design." },
    { image: "/milestone2/chair3.png", alt: "Product 5", details: "Executive office chair with leather finish." },
    { image: "/milestone2/sec2.png.png", alt: "Product 6", details: "Weather-resistant outdoor chair." },
  ].map((item, index) => (
    <div
      key={index}
      className="relative group overflow-hidden rounded-md shadow-md"
    >
      <Image
        src={item.image}
        alt={item.alt}
        width={128}
        height={128}
        className="object-cover rounded-md transform group-hover:scale-110 transition-transform duration-300"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <p className="text-white text-center text-sm px-4">{item.details}</p>
      </div>
    </div>
  ))}
</div>

      </div>
    </div>
  );
}
