"use client"
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, clearCart, IncreaseItemQuantity, DecreaseItemQuantity } from "../redux/slices/cartSlice";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar1 from "../components/navbar/Navbar1";
import Footer from "../components/footer/Footer";
import { ShoppingBag, Minus, Plus, X, ShoppingCart, ArrowRight, Trash2 } from 'lucide-react';

const Cart = () => {
  const cartItems = useSelector((state: any) => state.cart.cartItems);
  const dispatch = useDispatch();
  const [hydrated, setHydrated] = useState(false);

  const totalPriceReduce = cartItems.reduce((sum: any, product: any) => 
    sum + (product.price * product.quantity), 0
  );

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) return null;

  if (cartItems.length === 0) {
    return (
      <>
        <Navbar1 title="Cart" />
        <div className="min-h-[60vh] flex flex-col items-center justify-center p-8">
          <ShoppingCart size={64} className="text-gray-300 mb-4" />
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">Your cart is empty</h2>
          <p className="text-gray-600 mb-6">Add some delicious items to your cart!</p>
          <Link href="/menu">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-colors">
              Continue Shopping
              <ArrowRight size={20} />
            </button>
          </Link>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar1 title="Cart" />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Shopping Cart</h1>
          <p className="text-gray-600 mt-2">{cartItems.length} items in your cart</p>
        </div>

        {/* Desktop View */}
        <div className="hidden md:block bg-white rounded-xl shadow-sm overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Product</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Price</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Quantity</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Total</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {cartItems.map((item: any) => (
                <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-4">
                      <div className="relative h-16 w-16 flex-shrink-0">
                        <Image
                          src={item.images[0]}
                          alt={item.product}
                          fill
                          className="object-cover rounded-lg"
                        />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900">{item.product}</h3>
                        <div className="text-yellow-400 text-sm">
                          {"★".repeat(item.stars)}
                          <span className="text-gray-200">{"★".repeat(5 - item.stars)}</span>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-900">${item.price}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <button 
                        onClick={() => dispatch(DecreaseItemQuantity(item._id))}
                        className="p-1 rounded-md hover:bg-gray-100"
                      >
                        <Minus size={16} />
                      </button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <button 
                        onClick={() => dispatch(IncreaseItemQuantity(item._id))}
                        className="p-1 rounded-md hover:bg-gray-100"
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-900">${item.price * item.quantity}</td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => dispatch(removeFromCart(item._id))}
                      className="text-red-500 hover:text-red-700 p-2 rounded-md hover:bg-red-50 transition-colors"
                    >
                      <Trash2 size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile View */}
        <div className="md:hidden space-y-4">
          {cartItems.map((item: any) => (
            <div key={item.id} className="bg-white rounded-lg shadow-sm p-4">
              <div className="flex gap-4">
                <div className="relative h-20 w-20 flex-shrink-0">
                  <Image
                    src={item.images[0]}
                    alt={item.product}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between">
                    <h3 className="font-medium text-gray-900">{item.product}</h3>
                    <button
                      onClick={() => dispatch(removeFromCart(item._id))}
                      className="text-red-500 p-1"
                    >
                      <X size={18} />
                    </button>
                  </div>
                  <div className="text-yellow-400 text-sm">
                    {"★".repeat(item.stars)}
                    <span className="text-gray-200">{"★".repeat(5 - item.stars)}</span>
                  </div>
                  <div className="mt-2 flex justify-between items-center">
                    <span className="text-gray-900">${item.price}</span>
                    <div className="flex items-center gap-2 border rounded-lg p-1">
                      <button 
                        onClick={() => dispatch(DecreaseItemQuantity(item._id))}
                        className="p-1"
                      >
                        <Minus size={16} />
                      </button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <button 
                        onClick={() => dispatch(IncreaseItemQuantity(item._id))}
                        className="p-1"
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Cart Summary */}
        <div className="mt-8 max-w-md ml-auto">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
            <div className="space-y-3">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span>${totalPriceReduce}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="border-t pt-3">
                <div className="flex justify-between text-lg font-semibold">
                  <span>Total</span>
                  <span>${totalPriceReduce}</span>
                </div>
              </div>
            </div>
            <Link href="/checkout">
              <button className="w-full mt-6 bg-orange-500 hover:bg-orange-600 text-white py-3 px-4 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors">
                Proceed to Checkout
                <ArrowRight size={20} />
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;