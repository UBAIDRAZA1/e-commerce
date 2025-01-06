'use client'
import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import Image from "next/image";

export default function Home() {
  // State to manage selected product details
  const [selectedProduct, setSelectedProduct] = useState({
    image: "/milestone2/chair2.png",
    name: "Library Stool Chair",
    price: "$20.00 US",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim. Lorem ipsum dolor sit amet, consectetur adipiscing.",
  });

  // Array of demo products
const demoProducts = [
  {
    image: "/milestone2/chair.png",
    name: "Elegant Wooden Chair",
    price: "$30.00 US",
    description: `This elegant wooden chair is designed to add a touch of sophistication to your home or office space. 
- Crafted with high-quality oak wood for durability.
- Ergonomic backrest for comfortable seating.
- Lightweight and easy to move around.
- Perfect for dining rooms, study areas, or casual gatherings.`,
  },
  {
    image: "/milestone2/chair2.png",
    name: "Library Stool Chair",
    price: "$20.00 US",
    description: `The library stool chair is a versatile seating solution for small spaces or additional seating needs.
- Compact design, ideal for tight spaces like libraries or study corners.
- Made of sturdy material to ensure long-lasting usage.
- Sleek and minimalist design with a modern aesthetic.
- Easy to clean and maintain.`,
  },
  {
    image: "/milestone2/chair3.png",
    name: "Modern Office Chair",
    price: "$50.00 US",
    description: `Upgrade your workspace with this modern office chair that combines style and comfort.
- Adjustable height and swivel mechanism for flexibility.
- Premium cushioning for extended seating comfort.
- Breathable fabric to keep you cool during long working hours.
- Perfect for home offices, study desks, or corporate environments.`,
  },
  {
    image: "/milestone2/chair4.png",
    name: "Classic Armchair",
    price: "$70.00 US",
    description: `Indulge in comfort with this classic armchair that blends luxury with functionality.
- Luxurious padding for ultimate relaxation.
- Wide armrests for additional support.
- Upholstered in high-quality fabric for a premium feel.
- Ideal for living rooms, lounges, or reading corners.`,
  },
  {
    image: "/milestone2/card.png",
    name: "Stylish Card Chair",
    price: "$25.00 US",
    description: `This lightweight and stylish chair is perfect for casual seating needs.
- Durable plastic body with reinforced steel legs for extra support.
- Stackable design for easy storage.
- Compact size makes it ideal for outdoor use or small spaces.
- Available in multiple color options to suit your style.`,
  },
];

  return (
    <div className="min-h-screen md:pl-56 md:pr-36 bg-gray-50 py-10 px-6">
      {/* Main Product Section */}
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-lg p-10 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Product Image */}
        <div className="flex justify-center items-center">
          <Image
            src={selectedProduct.image}
            alt={selectedProduct.name}
            width={500} // Adjust width and height as needed
            height={500} // Adjust width and height as needed
            className="rounded-lg w-full max-w-sm object-cover"
          />
        </div>
        {/* Product Details */}
        <div className="flex flex-col justify-center space-y-6">
          <h1 className="text-4xl font-bold text-[rgb(35,43,83)]">
            {selectedProduct.name}
          </h1>
          <span className="p-4 bg-[#029FAE] rounded-full inline-block font-semibold text-white">
            {selectedProduct.price}
          </span>
          <p className="text-[#6C757D] text-base leading-relaxed">
            {selectedProduct.description}
          </p>
          {/* <button className="flex items-center gap-2 bg-[#007BFF] text-white font-bold py-3 px-6 rounded-lg hover:bg-[#0056b3] transition ">
            <FaShoppingCart size={18} />
            Add To Cart
          </button> */}
        </div>
      </div>

      {/* Featured Products Section */}
      <div className="max-w-7xl mx-auto mt-16">
        {/* Section Header */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-[#343A40]">Featured Products</h2>
          <a
            href="#"
            className="text-[#007BFF] hover:text-[#0056b3] font-semibold text-sm"
          >
            View all
          </a>
        </div>

        {/* Featured Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {demoProducts.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-5 hover:shadow-xl transition cursor-pointer"
              onClick={() =>
                setSelectedProduct({
                  image: product.image,
                  name: product.name,
                  price: product.price,
                  description: product.description,
                })
              }
            >
              <Image
                src={product.image}
                alt={product.name}
                width={500} // Adjust width and height as needed
                height={500} // Adjust width and height as needed
                className="rounded-lg w-full h-48 object-cover mb-4"
              />
              <h3 className="text-[#343A40] font-semibold text-sm mb-2">
                {product.name}
              </h3>
              <p className="text-[#6C757D] font-bold">{product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

