"use client"

import { useState } from "react";
import Navbar1 from "../components/navbar/Navbar1";
import Footer from "../components/footer/Footer";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";

const Menu = () => {

    let [error, setError] = useState("");

    let router = useRouter();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        rememberMe: false,
    });

    const handleChange = (e: any) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        try {
            const response: any = await fetch("/api/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    password: formData.password
                })
            })

            let jsonData = await response.json();

            if (jsonData.status === 200) {
                console.log(jsonData.message);
                setError(jsonData.message)
                router.push("/login");
            } else {
                console.log(jsonData.message || "Sign-up failed!");
                setError(jsonData.message)
            }
        } catch (error) {
            console.error("Error signing up:", error);
            alert("An error occurred. Please try again.");
        }
    };

    return (
        <>
            <Navbar1 />

            <div className="max-w-sm mx-auto mt-14 mb-14 p-6 bg-white shadow-2xl rounded-lg">
                <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>
                 {
                    error && <div className="bg-red-100 mb-3 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                        <span className="block sm:inline">{error}</span>
                    </div>

                 }
                <form onSubmit={handleSubmit} method="POST">
                    <div className="mb-4">
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-favColor focus:border-favColor"
                        />
                    </div>

                    <div className="mb-4">
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-favColor focus:border-favColor"
                        />
                    </div>

                    <div className="mb-4">
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-favColor focus:border-favColor"
                        />
                    </div>

                    <div className="mb-4 flex items-center">
                        <input
                            type="checkbox"
                            name="rememberMe"
                            checked={formData.rememberMe}
                            onChange={handleChange}
                            className="h-4 w-4 text-favColor border-gray-300 rounded"
                        />
                        <label className="ml-2 text-sm text-gray-700">Remember me?</label>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-favColor text-white py-2 px-4 rounded-md hover:bg-orange-600"
                    >
                        Sign Up
                    </button>
                </form>

                <div className="mt-4 text-center">
                    <Link href="#" className="text-sm text-favColor hover:underline">
                        Forgot password?
                    </Link>
                </div>
                <div className="mt-4 text-center">
                    <Link href="/login" className="text-sm text-favColor hover:underline">
                        Login?
                    </Link>
                </div>

                <div className="flex items-center my-6">
                    <div className="flex-grow h-px bg-gray-300"></div>
                    <span className="px-4 text-sm text-gray-500">OR</span>
                    <div className="flex-grow h-px bg-gray-300"></div>
                </div>

                <div className="flex flex-col space-y-4">
                    <button className="flex items-center justify-center w-full py-2 px-4 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
                        <Image src="/google.png" alt="Google" width={20} height={20} className="w-5 h-5 mr-2" />
                        Sign up with Google
                    </button>
                    <button className="flex items-center justify-center w-full py-2 px-4 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
                        <Image src="/apple.png" alt="Apple" width={20} height={20} className="w-5 h-5 mr-2" />
                        Sign up with Apple
                    </button>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default Menu;
