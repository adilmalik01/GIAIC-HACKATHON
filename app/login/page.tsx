"use client";

import Navbar1 from "../components/navbar/Navbar1";
import Footer from "../components/footer/Footer";
import Link from "next/link";
import Image from "next/image";
import { signIn } from "next-auth/react";

import { useState } from "react";

const Menu = () => {
    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const result: any = await signIn("credentials", {
            email,
            password,
            redirect: true,
            callbackUrl: "/profile", 
        });
    };

    return (
        <>
            <Navbar1 title={"Sign in"} />
            <div className="max-w-sm mx-auto mt-14 mb-14 p-6 bg-white shadow-2xl rounded-lg">
                <h2 className="text-2xl font-bold text-center mb-6">Sign In</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-favColor focus:border-favColor"
                        />
                    </div>

                    <div className="mb-4">
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-favColor focus:border-favColor"
                        />
                    </div>

                    <div className="mb-4 flex items-center">
                        <input
                            type="checkbox"
                            className="h-4 w-4 text-favColor border-gray-300 rounded"
                        />
                        <label className="ml-2 text-sm text-gray-700">Remember me?</label>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-favColor text-white py-2 px-4 rounded-md hover:bg-orange-600"
                    >
                        Sign In
                    </button>
                </form>

                <div className="mt-4 text-center">
                    <Link href="#" className="text-sm text-favColor hover:underline">
                        Forgot password?
                    </Link>
                </div>
                <div className="mt-4 text-center">
                    <Link href="/signup" className="text-sm text-favColor hover:underline">
                        Sign up?
                    </Link>
                </div>

                <div className="flex items-center my-6">
                    <div className="flex-grow h-px bg-gray-300"></div>
                    <span className="px-4 text-sm text-gray-500">OR</span>
                    <div className="flex-grow h-px bg-gray-300"></div>
                </div>

                <div className="flex flex-col space-y-4">
                    <button
                        type="button"
                        onClick={() => signIn("google")}
                        className="flex items-center justify-center w-full py-2 px-4 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                    >
                        <Image
                            src="/google.png"
                            alt="Google"
                            width={5}
                            height={5}
                            className="w-5 h-5 mr-2"
                        />
                        Sign in with Google
                    </button>
                    <button
                        type="button"
                        onClick={() => signIn("apple")}
                        className="flex items-center justify-center w-full py-2 px-4 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                    >
                        <Image
                            src="/apple.png"
                            alt="Apple"
                            width={5}
                            height={5}
                            className="w-5 h-5 mr-2"
                        />
                        Sign in with Apple
                    </button>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default Menu;