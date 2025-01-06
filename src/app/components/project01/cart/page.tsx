"use client";
import React, { useState, useEffect } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";
import Image from "next/image";
import { useRouter } from 'next/navigation';

// Define CartItem and WishlistCounts interfaces
interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  description: string;
  size: string;
  image: string;
}

interface WishlistCounts {
  [key: string]: number;
}

export default function Cart() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]); // Specify CartItem type
  const [wishlistCounts, setWishlistCounts] = useState<WishlistCounts>({}); // Specify WishlistCounts type
  const router = useRouter();

  useEffect(() => {
    // Load cart items from localStorage when the component mounts
    const savedCart = JSON.parse(localStorage.getItem("cart") || "[]").map((item: CartItem) => ({
      ...item,
      quantity: item.quantity || 1, // Default quantity to 1 if not provided
    }));
    setCartItems(savedCart);
  }, []);

  // Remove a specific item from the cart
  const removeItem = (id: string) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart)); // Update localStorage
  };

  // Handle the heart icon click (wishlist count)
  const toggleWishlistCount = (id: string) => {
    setWishlistCounts((prevCounts) => {
      const currentCount = prevCounts[id] || 0; // Get the current count for the item
      const newCount = currentCount === 0 ? 1 : 0; // Toggle between 0 and 1
      return { ...prevCounts, [id]: newCount };
    });
  };

  const calculateTotals = () => {
    const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const discount = subtotal * 0.1; // 10% discount
    const salePolicyDiscount = subtotal * 0.05; // 5% discount
    const total = subtotal - discount - salePolicyDiscount;
    return { subtotal, discount, salePolicyDiscount, total };
  };

  const totals = calculateTotals();

  return (
    <div className="min-h-screen bg-gray-100 md:pl-56 md:pr-36 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl font-semibold mb-6">Bag</h1>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Bag Section */}
          <div className="col-span-2 space-y-4">
            {cartItems.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col md:flex-row items-center bg-white p-4 rounded-lg shadow-md"
                >
                  {/* Product Image */}
                  <div className="w-32 h-32 flex-shrink-0 relative">
                    <Image
                      src={item.image}
                      alt={item.name}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-md"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="flex-grow md:ml-4">
                    <h2 className="text-lg font-semibold">{item.name}</h2>
                    <p className="text-sm text-gray-500">{item.description}</p>

                    {/* Size and Quantity in One Line */}
                    <div className="text-sm text-gray-500 flex space-x-4 mt-1">
                      <p>Size: {item.size}</p>
                      <p>Quantity: {item.quantity}</p>
                    </div>

                    {/* Wishlist and Delete Below */}
                    <div className="flex items-center space-x-4 mt-2">
                      <button
                        className={`${
                          wishlistCounts[item.id] === 1 ? "text-red-500" : "text-gray-500"
                        } hover:text-red-500 flex items-center`}
                        onClick={() => toggleWishlistCount(item.id)}
                      >
                        {wishlistCounts[item.id] === 1 ? <FaHeart /> : <FaRegHeart />}
                        {wishlistCounts[item.id] === 1 && (
                          <span className="ml-2 text-sm text-gray-700">1</span>
                        )}
                      </button>
                      <button
                        className="text-gray-500 hover:text-red-500"
                        onClick={() => removeItem(item.id)} // Deleting specific item
                      >
                        <RiDeleteBin5Line />
                      </button>
                    </div>
                  </div>

                  {/* Product Price */}
                  <div className="flex flex-col items-end">
                    <p className="text-lg font-semibold">MRP: ${item.price}</p>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Summary Section */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Summary</h2>
            <div className="space-y-2">
              <div className="flex justify-between">
                <p className="text-gray-500">Subtotal</p>
                <p className="font-semibold">${totals.subtotal.toFixed(2)}</p>
              </div>
              <div className="flex justify-between">
                <p className="text-gray-500">Discount</p>
                <p className="font-semibold">-${totals.discount.toFixed(2)}</p>
              </div>
              <div className="flex justify-between">
                <p className="text-gray-500">Sale Policy Discount</p>
                <p className="font-semibold">-${totals.salePolicyDiscount.toFixed(2)}</p>
              </div>
              <div className="border-t border-gray-300 my-4"></div>
              <div className="flex justify-between text-lg font-semibold">
                <p>Total</p>
                <p>${totals.total.toFixed(2)}</p>
              </div>
            </div>
            <button className="w-full mt-4 bg-teal-500 text-white py-2 px-4 rounded-md hover:bg-teal-600"
             onClick={() => router.push('/components/project01/checkout')}>
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
