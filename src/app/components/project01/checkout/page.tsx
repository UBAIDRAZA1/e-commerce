"use client";
import React, { useState, useEffect } from "react";

// Define types for the form data and errors
interface FormData {
  firstName: string;
  lastName: string;
  phone: string;
  whatsapp: string;
  email: string;
  country: string;
  state: string;
  city: string;
  area: string;
  zipCode: string;
  address: string;
  paymentMethod: string;
  orderNote: string;
}

interface Errors {
  firstName?: string;
  lastName?: string;
  phone?: string;
  whatsapp?: string;
  email?: string;
  country?: string;
  state?: string;
  city?: string;
  area?: string;
  zipCode?: string;
  address?: string;
  paymentMethod?: string;
}

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

interface Totals {
  subtotal: number;
  discount: number;
  salePolicyDiscount: number;
  deliveryCharges: number;
  couponDiscount: number;
  grandTotal: number;
}

export default function Checkout() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [totals, setTotals] = useState<Totals>({
    subtotal: 0,
    discount: 0,
    salePolicyDiscount: 0,
    deliveryCharges: 0,
    couponDiscount: 0,
    grandTotal: 0,
  });

  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    phone: "",
    whatsapp: "",
    email: "",
    country: "",
    state: "",
    city: "",
    area: "",
    zipCode: "",
    address: "",
    paymentMethod: "",
    orderNote: "",
  });

  const [errors, setErrors] = useState<Errors>({});
  const [feedback, setFeedback] = useState<string | null>(null);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart") || "[]").map(
      (item: CartItem) => ({
        ...item,
        quantity: item.quantity || 1,
      })
    );
    setCartItems(savedCart);

    const subtotal = savedCart.reduce(
      (sum: number, item: CartItem) => sum + item.price * item.quantity,
      0
    );
    
    const discount = subtotal * 0.1;
    const salePolicyDiscount = subtotal * 0.05;
    const deliveryCharges = 0;
    const couponDiscount = 0;
    const grandTotal =
      subtotal - discount - salePolicyDiscount + deliveryCharges - couponDiscount;

    setTotals({
      subtotal,
      discount,
      salePolicyDiscount,
      deliveryCharges,
      couponDiscount,
      grandTotal,
    });
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Clear error when input is corrected
    if (errors[name as keyof Errors]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const validateForm = () => {
    const newErrors: Errors = {};
    if (!formData.firstName) newErrors.firstName = "First Name is required.";
    if (!formData.lastName) newErrors.lastName = "Last Name is required.";
    if (!formData.phone) newErrors.phone = "Phone is required.";
    if (!formData.whatsapp) newErrors.whatsapp = "Whatsapp Number is required.";
    if (!formData.email) newErrors.email = "Email is required.";
    if (!formData.country) newErrors.country = "Country is required.";
    if (!formData.state) newErrors.state = "State is required.";
    if (!formData.city) newErrors.city = "City is required.";
    if (!formData.area) newErrors.area = "Area is required.";
    if (!formData.zipCode) newErrors.zipCode = "Zip Code is required.";
    if (!formData.address) newErrors.address = "Address is required.";
    if (!formData.paymentMethod) newErrors.paymentMethod = "Payment Method is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      // Log data to console (this simulates submitting to a backend)
      console.log("Order Data Submitted:", { cartItems, totals, formData });

      // Clear form data after submission (only form fields)
      setFormData({
        firstName: "",
        lastName: "",
        phone: "",
        whatsapp: "",
        email: "",
        country: "",
        state: "",
        city: "",
        area: "",
        zipCode: "",
        address: "",
        paymentMethod: "",
        orderNote: "",
      });

      // Show feedback message for a few seconds
      setFeedback("Order Placed Successfully!");
      setTimeout(() => setFeedback(null), 3000); // Clear feedback after 3 seconds
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 flex justify-center">
      <div className="container max-w-4xl bg-white rounded-lg shadow-lg p-6">
        {/* Checkout Header */}
        <h1 className="text-2xl font-semibold mb-6 text-center">Checkout</h1>

        {feedback && (
          <p className="text-center text-green-600 font-semibold mb-4">{feedback}</p>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Billing Details */}
          <div className="col-span-2">
            <h2 className="text-xl font-semibold mb-4">Billing Details</h2>
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { name: "firstName", label: "First Name" },
                  { name: "lastName", label: "Last Name" },
                  { name: "phone", label: "Phone Number" },
                  { name: "whatsapp", label: "Whatsapp Number" },
                  { name: "email", label: "Email" },
                  { name: "country", label: "Country" },
                  { name: "state", label: "State" },
                  { name: "city", label: "City" },
                  { name: "area", label: "Area" },
                  { name: "zipCode", label: "Zip Code" },
                ].map(({ name, label }) => (
                  <div key={name}>
                    <label className="font-bold text-gray-700">{label}</label>
                    <input
                      type="text"
                      name={name}
                      className={`border rounded-lg p-2 w-full ${errors[name as keyof Errors] ? "border-red-500" : ""}`}
                      value={formData[name as keyof FormData]}
                      onChange={handleInputChange}
                    />
                    {errors[name as keyof Errors] && <p className="text-red-500 text-sm mt-1">{errors[name as keyof Errors]}</p>}
                  </div>
                ))}
              </div>

              <div className="mt-4">
                <label className="font-bold text-gray-700">Address</label>
                <textarea
                  name="address"
                  rows={3}
                  className={`border rounded-lg p-2 w-full ${errors.address ? "border-red-500" : ""}`}
                  value={formData.address}
                  onChange={handleInputChange}
                ></textarea>
                {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
              </div>

              <div className="mt-4">
                <label className="font-bold text-gray-700">Payment Method</label>
                <div className="flex space-x-4 mt-2">
                  <label>
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="cod"
                      onChange={handleInputChange}
                    />{" "}
                    Cash on Delivery
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="meezan"
                      onChange={handleInputChange}
                    />{" "}
                    Meezan Bank
                  </label>
                </div>
                {errors.paymentMethod && (
                  <p className="text-red-500 text-sm mt-1">{errors.paymentMethod}</p>
                )}
              </div>
            </form>
          </div>

          {/* Order Summary */}
          <div>
            <h2 className="text-xl font-semibold mb-4 text-center">Your Order</h2>
            <div className="bg-gray-50 rounded-lg shadow-md p-4">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr>
                    <th className="border-b pb-2">Product</th>
                    <th className="border-b pb-2 text-center">Quantity</th>
                    <th className="border-b pb-2 text-right">Subtotal</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item) => (
                    <tr key={item.id}>
                      <td className="py-2">{item.name}</td>
                      <td className="py-2 text-center">{item.quantity}</td>
                      <td className="py-2 text-right">$ {item.price * item.quantity}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="mt-4 space-y-2">
                <div className="flex justify-between">
                  <p>Total</p>
                  <p>$ {totals.subtotal.toFixed(2)}</p>
                </div>
                <div className="flex justify-between">
                  <p>Discount</p>
                  <p>- $ {totals.discount.toFixed(2)}</p>
                </div>
                <div className="flex justify-between">
                  <p>Sale Policy Discount</p>
                  <p>- $ {totals.salePolicyDiscount.toFixed(2)}</p>
                </div>
                <div className="flex justify-between">
                  <p>Delivery Charges</p>
                  <p>$ {totals.deliveryCharges.toFixed(2)}</p>
                </div>
                <div className="flex justify-between">
                  <p>Coupon Discount</p>
                  <p>- $ {totals.couponDiscount.toFixed(2)}</p>
                </div>
                <div className="flex justify-between font-bold">
                  <p>Grand Total</p>
                  <p>$ {totals.grandTotal.toFixed(2)}</p>
                </div>
              </div>
              <button
                className="w-full mt-6 bg-blue-600 text-white py-2 rounded-lg"
                onClick={handleSubmit}
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
