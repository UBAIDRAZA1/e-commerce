import React from 'react'
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { ShoppingCart } from 'lucide-react';
import Image from 'next/image';  // Import the Image component

export default function LastHome() {
  const products = [
    { image: "/milestone2/chair.png", name: "Library Stool Chair", price: "$20" },
    { image: "/milestone2/chair2.png", name: "Library Stool Chair", price: "$20" },
    { image: "/milestone2/chair3.png", name: "Library Stool Chair", price: "$20" },
    { image: "/milestone2/chair4.png", name: "Library Stool Chair", price: "$20" },
  ];
  
  const otherProducts = [  
    { image: "/milestone2/image.png", name: "Library Stool Chair", price: "$20" },
    { image: "/milestone2/sec.png.png", name: "Library Stool Chair", price: "$20" },
    { image: "/milestone2/card.png", name: "Library Stool Chair", price: "$20" },
    { image: "/milestone2/chair.png", name: "Library Stool Chair", price: "$20" },
  ];

  return (
    <div className='mt-8'>
      <div className='flex flex-wrap mt-5'>
        {products.map((product, index) => (
          <Card key={index} className='border-none shadow-none m-2 flex-1 min-w-[200px] max-w-[300px]'>
            <CardContent>
              {/* Use Next.js Image component */}
              <Image 
                src={product.image} 
                alt={product.name} 
                className="w-full" 
                width={300}  // Set an appropriate width
                height={200}  // Set an appropriate height
              />
            </CardContent>
            <CardFooter>
              <div className="flex flex-col items-start">
                <div className="text-xl text-green-500">{product.name}</div>
                <div className='flex flex-row justify-between w-full'>
                  <div className="text-xl font-bold mt-2">{product.price}</div>
                  <button className="btn btn-primary mt-2">
                    <ShoppingCart className="mr-2 rounded-[4px] hover:bg-[#029FAE]" />
                  </button>
                </div>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className='flex flex-wrap'>
        {otherProducts.map((otherProduct, index) => (
          <Card key={index} className='border-none shadow-none m-2 flex-1 min-w-[200px] max-w-[300px]'>
            <CardContent>
              {/* Use Next.js Image component */}
              <Image 
                src={otherProduct.image} 
                alt={otherProduct.name} 
                className="w-full" 
                width={300}  // Set an appropriate width
                height={200}  // Set an appropriate height
              />
            </CardContent>
            <CardFooter>
              <div className="flex flex-col items-start">
                <div className="text-xl text-green-500">{otherProduct.name}</div>
                <div className='flex flex-row justify-between w-full'>
                  <div className="text-xl font-bold mt-2">{otherProduct.price}</div>
                  <button className="btn btn-primary mt-2">
                    <ShoppingCart className="mr-2 rounded-[4px] hover:bg-[#029FAE]" />
                  </button>
                </div>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
