"use client"

import Image from "next/image";
import Navbar1 from "../components/navbar/Navbar1";
import Footer from "../components/footer/Footer";
import axios from "axios";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/cartSlice";

export default function ProductGrid() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState<boolean>(true);
   
    const dispatch = useDispatch();

    const handleAddToCart = (dish:any) => {

        

      dispatch(addToCart(dish));
    };
  


    const fetchDishes = async () => {
        try {
            const response = await axios.get("/api/dishes");
            setProducts(response.data.dishes);
             console.log(response);
             
            setLoading(false);
        } catch (error) {
            console.error("Error fetching dishes:", error);
            setLoading(false);
        };
    }

    useEffect(() => {
        fetchDishes();
    }, []);



    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-favColor "></div>
            </div>
        );
    }

    return (
        <>
            <Navbar1 title={"Shop"} />
            <div className="container mx-auto px-4 py-8">
                <div className="flex justify-between flex-wrap gap-4 items-center mb-6">
                    <div className="flex gap-2 items-center">
                        <label className="font-semibold">Sort By :</label>
                        <select className="border rounded px-2 py-1 focus:outline-none">
                            <option>Newest</option>
                            <option>Price: Low to High</option>
                            <option>Price: High to Low</option>
                        </select>
                    </div>
                    <div className="flex gap-2 items-center">
                        <label className="font-semibold">Show :</label>
                        <select className="border rounded px-2 py-1 focus:outline-none">
                            <option>Default</option>
                            <option>12</option>
                            <option>24</option>
                        </select>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-8">
                    <div className="w-full lg:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {products.map((product: any, index) => (
                            <div key={index} className="border rounded overflow-hidden shadow-lg hover:shadow-xl transition relative">
                                <Link href={`/product/${product._id}`}>
                                    <div className="relative h-60">
                                        <Image
                                            src={product.images[0]}
                                            alt={product.name}
                                            layout="fill"
                                            objectFit="cover"
                                            className="rounded-t"
                                        />
                                        {product.label && (
                                            <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded shadow-md">
                                                {product.label}
                                            </span>
                                        )}
                                    </div>
                                </Link>
                                <div className="p-4 bg-white">
                                    <h3 className="font-semibold text-lg mb-2 text-gray-800">{product.name}</h3>
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="text-favColor font-bold text-xl">
                                            ${product.price.toFixed(2)}
                                        </span>
                                        {product.oldPrice && (
                                            <span className="text-gray-400 line-through text-sm">
                                                {product.oldPrice.toFixed(2)}  Rs
                                            </span>
                                        )}
                                    </div>
                                    <button 
                                     onClick={()=>{handleAddToCart(product)}}
                                    className="w-full bg-favColor text-white py-2 px-4 rounded shadow hover:bg-orange-500 transition">
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <aside className="w-full lg:w-1/4">
                        <div className="mb-4">
                            <input
                                type="text"
                                placeholder="Search Product"
                                className="w-full border p-2 rounded focus:outline-favColor"
                            />
                        </div>
                        <h3 className="font-semibold mb-2">Category</h3>
                        <ul>
                            {[
                                "Sandwiches",
                                "Burger",
                                "Chicken Chup",
                                "Drink",
                                "Pizza",
                                "Thi",
                                "Non Veg",
                                "Uncategorized",
                            ].map((category, index) => (
                                <li key={index} className="mb-2">
                                    <label className="flex items-center gap-2">
                                        <input type="checkbox" />
                                        {category}
                                    </label>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-6">
                            <h3 className="font-semibold mb-2">Perfect Taste</h3>
                            <div className="relative h-52 overflow-hidden">
                                <Image
                                    src="/products/bg.png"
                                    alt="Classic Restaurant"
                                    layout="fill"
                                    objectFit="cover"
                                />
                            </div>
                            <p className="text-favColor mt-2 font-semibold">$45.00</p>
                        </div>

                        <div className="mb-6">
                            <h3 className="font-semibold mb-2">Filter By Price</h3>
                            <div>
                                <input
                                    type="range"
                                    min="0"
                                    max="8000"
                                    step="10"
                                    className="w-full accent-favColor"
                                />
                                <div className="flex justify-between text-sm mt-2">
                                    <span>From $0 to $8000</span>
                                    <button className="text-favColor font-semibold">Filter</button>
                                </div>
                            </div>
                        </div>

                        <div className="mb-6">
                            <h3 className="font-semibold mb-2">Latest Products</h3>
                            <div className="flex flex-col gap-4">
                                {[
                                    { name: "Pizza", price: 35.0, image_url: "/mainImages/pizza.png" },
                                    { name: "Cupcake", price: 35.0, image_url: "/mainImages/burger.png" },
                                    { name: "Cookies", price: 35.0, image_url: "/products/2.png" },
                                    { name: "Burger", price: 35.0, image_url: "/mainImages/burger.png" },
                                ].map((product, index) => (
                                    <div key={index} className="flex items-center gap-4">
                                        <div className="relative w-16 h-16 rounded overflow-hidden">
                                            <Image
                                                src={product.image_url}
                                                alt={product.name}
                                                width={500}
                                                height={200}
                                                objectFit="cover"
                                            />
                                        </div>
                                        <div>
                                            <p className="font-medium">{product.name}</p>
                                            <p className="text-favColor font-semibold">${product.price}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="font-semibold mb-2">Product Tags</h3>
                            <div className="flex flex-wrap gap-2">
                                {[
                                    "Services",
                                    "Our Menu",
                                    "Pizza",
                                    "Cupcake",
                                    "Burger",
                                    "Cookies",
                                    "Our Shop",
                                    "Tandoori Chicken",
                                ].map((tag, index) => (
                                    <span
                                        key={index}
                                        className="text-gray-600 text-sm px-2 py-1 border rounded cursor-pointer hover:bg-favColor hover:text-white transition"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </aside>
                </div>
            </div >
            <Footer />
        </>
    );
}
