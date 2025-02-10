"use client"

import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import Navbar1 from "../components/navbar/Navbar1";
import Footer from "../components/footer/Footer";
import Image from "next/image";
import Link from "next/link";
import { 
  Edit2,
  ShoppingBag,
  CreditCard,
  MapPin,
  User,
  Mail,
  ArrowRight,
} from 'lucide-react';

const Checkout = () => {
  interface RootState {
    cart: {
      cartItems: {
        id: string;
        name: string;
        price: number;
        quantity: number;
        images: string[];
      }[];
    };
  }

  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    address: "",
  });
  const [loading, setLoading] = useState(false);
  const [cartItemMount, setCartItemMount] = useState<{ id: string; name: string; price: number; quantity: number; images: string[]; }[]>([]);

  useEffect(() => {
    setCartItemMount(cartItems);
  }, [cartItems]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };

  const handleCheckout = async () => {
    if (!cartItems.length) {
      alert("Your cart is empty");
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post("/api/checkout", {
        cartItems,
        userDetails,
      });

      if (response.data.url) {
        window.location.href = response.data.url;
      }
    } catch (error) {
      console.error("Checkout Error:", error);
      alert("Failed to proceed to payment");
    } finally {
      setLoading(false);
    }
  };

  const calculateTotal = () => {
    return cartItemMount.reduce(
      (total, item: { id: string; name: string; price: number; quantity: number; images: string[]; }) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar1 title="Checkout" />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Checkout</h1>
          <p className="text-gray-600 mt-2">Please review your order and complete your details</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-2">
                  <ShoppingBag className="text-gray-600" size={20} />
                  <h2 className="text-xl font-semibold">Order Summary</h2>
                </div>
                <Link href="/cart">
                  <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition">
                    <Edit2 size={18} />
                    <span>Edit Cart</span>
                  </button>
                </Link>
              </div>

              <div className="space-y-4">
                {cartItemMount.length > 0 ? (
                  cartItemMount.map((item: { id: string; name: string; price: number; quantity: number; images: string[]; }) => (
                    <div
                      key={item.id}
                      className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
                    >
                      <div className="relative h-20 w-20">
                        <Image
                          src={item.images[0]}
                          alt={item.name}
                          fill
                          className="object-cover rounded-lg"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium text-gray-900">{item.name}</h3>
                        <p className="text-gray-500 text-sm">Quantity: {item.quantity}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-gray-900">${item.price * item.quantity}</p>
                        <p className="text-sm text-gray-500">${item.price} each</p>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-8">
                    <ShoppingBag className="mx-auto h-12 w-12 text-gray-400" />
                    <h3 className="mt-2 text-sm font-medium text-gray-900">No items in cart</h3>
                    <p className="mt-1 text-sm text-gray-500">Add some items to your cart to continue</p>
                  </div>
                )}
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 mt-6">
              <div className="flex items-center gap-2 mb-6">
                <CreditCard className="text-gray-600" size={20} />
                <h2 className="text-xl font-semibold">Billing Details</h2>
              </div>

              <div className="space-y-4">
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                  <input
                    name="name"
                    placeholder="Full Name"
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    onChange={handleChange}
                  />
                </div>

                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                  <input
                    name="email"
                    placeholder="Email Address"
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    onChange={handleChange}
                  />
                </div>

                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                  <input
                    name="address"
                    placeholder="Delivery Address"
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm p-6 sticky top-6">
              <h2 className="text-xl font-semibold mb-4">Order Total</h2>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>${calculateTotal()}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>
                <div className="border-t pt-3">
                  <div className="flex justify-between text-lg font-semibold">
                    <span>Total</span>
                    <span>${calculateTotal()}</span>
                  </div>
                </div>
              </div>

              <button
                className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 px-6 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors disabled:bg-gray-400"
                onClick={handleCheckout}
                disabled={loading}
              >
                {loading ? (
                  "Processing..."
                ) : (
                  <>
                    Proceed to Payment
                    <ArrowRight size={18} />
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Checkout;