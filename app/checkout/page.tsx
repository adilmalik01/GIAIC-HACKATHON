"use client";

import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import Navbar1 from "../components/navbar/Navbar1";
import Footer from "../components/footer/Footer";
import Image from "next/image";
import { FiEdit } from "react-icons/fi"; // Edit cart icon
import Link from "next/link";

const Checkout = () => {
    const cartItems = useSelector((state: any) => state.cart.cartItems);
    const [userDetails, setUserDetails] = useState({
        name: "",
        email: "",
        address: "",
    });
    const [loading, setLoading] = useState(false);
    const [cartItemMount, setCartItemMount] = useState([]);

    useEffect(() => {
        setCartItemMount(cartItems);
    }, [cartItems]);

    const handleChange = (e: any) => {
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
        return cartItemMount.reduce((total, item: any) => total + item.price * item.quantity, 0);
    };

    return (
        <>
            <Navbar1 title="Checkout" />
            <div className="container mx-auto p-6 max-w-4xl">
                <h2 className="text-3xl font-bold mb-6 text-center">Checkout</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  
                    <div className="bg-gray-100 p-4 rounded-lg shadow-md relative">
                        <h3 className="text-lg font-semibold mb-4 flex justify-between items-center">
                            Your Cart Items
                            <Link href={"/cart"}>
                                <FiEdit className="text-xl cursor-pointer text-gray-700 hover:text-gray-900" />
                            </Link>
                        </h3>
                        {cartItemMount.length > 0 ? (
                            cartItemMount.map((item: any) => (
                                <div key={item.id} className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-md mb-3">
                                    <Image
                                        src={item.images[0]}
                                        alt="Product Image"
                                        width={80}
                                        height={80}
                                        className="rounded-lg"
                                    />
                                    <div className="flex-1">
                                        <p className="text-lg font-semibold">{item.name}</p>
                                        <p className="text-gray-600">${item.price} x {item.quantity} = <span className="font-bold">${item.price * item.quantity}</span></p>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p className="text-gray-500">No items in cart.</p>
                        )}
                  
                        {cartItemMount.length > 0 && (
                            <div className="mt-4 p-4 bg-white rounded-lg shadow-md">
                                <p className="text-xl font-bold text-right">Total: ${calculateTotal()}</p>
                            </div>
                        )}
                    </div>

              
                    <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                        <h3 className="text-lg font-semibold mb-4">Billing Details</h3>
                        <input name="name" placeholder="Full Name" className="border p-2 w-full mb-3 rounded" onChange={handleChange} />
                        <input name="email" placeholder="Email" className="border p-2 w-full mb-3 rounded" onChange={handleChange} />
                        <input name="address" placeholder="Address" className="border p-2 w-full mb-3 rounded" onChange={handleChange} />
                        <button
                            className="bg-orange-500 text-white p-3 w-full mt-4 rounded-lg hover:bg-orange-600 transition disabled:bg-gray-400"
                            onClick={handleCheckout}
                            disabled={loading}
                        >
                            {loading ? "Processing..." : "Proceed to Payment"}
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Checkout;
