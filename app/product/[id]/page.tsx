"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "next/navigation";
import Navbar1 from "@/app/components/navbar/Navbar1";
import Footer from "@/app/components/footer/Footer";

const DishDetails = () => {
    const { id } = useParams();
    const [dish, setDish] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [selectedImage, setSelectedImage] = useState<string>("");

    useEffect(() => {
        const fetchDish = async () => {
            try {
                const response = await axios.get(`/api/dishes/${id}`);
                setDish(response.data.message);
                setSelectedImage(response.data.message.images[0]); // Pehli image ko default set karna
            } catch (error) {
                console.error("Error fetching dish:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchDish();
    }, [id]);

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-favColor"></div>
            </div>
        );
    }

    if (!dish) {
        return (
            <div className="flex justify-center items-center ">
                <h2 className="text-red-500 text-xl font-bold">Dish not found!</h2>
            </div>
        );
    }

    return (
        <>
            <Navbar1 title="Product Details" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white p-6 rounded-xl shadow-lg">

                <div>
                    <div className="relative">
                        <img src={selectedImage} alt={dish.name} className="rounded-xl w-full h-96 object-cover" />
                        <div className="absolute top-4 left-4 bg-blue-500 text-white px-3 py-1 rounded-lg text-sm font-bold">
                            {dish.price} Rs
                        </div>
                    </div>

                    <div className="flex mt-4 space-x-2">
                        {dish.images.map((img: string, index: number) => (
                            <div key={index} className="relative h-20 w-20 rounded-lg overflow-hidden border-2 border-gray-300 cursor-pointer"
                                onClick={() => setSelectedImage(img)}>
                                <img src={img} alt="small preview" className="object-cover w-full h-full" />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="space-y-6">
                    <h1 className="text-3xl font-bold text-gray-900">{dish.name}</h1>
                    <p className="text-gray-600">{dish.description}</p>

                    <div className="flex items-center space-x-2">
                        {[...Array(5)].map((_, index) => {
                            const rating = dish.ratings?.average || 0;
                            return (
                                <svg
                                    key={index}
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill={index < rating ? "gold" : "gray"}
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-5 h-5"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 17.27l5.18 3.73-1.64-6.03L20 9.24l-6.06-.52L12 3l-1.94 5.72L4 9.24l4.46 3.73-1.64 6.03L12 17.27z" />
                                </svg>
                            );
                        })}
                        <span className="text-gray-500">(0 reviews)</span>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold">Ingredients</h3>
                        <ul className="list-disc list-inside text-gray-700">
                            {dish.ingredients.map((ingredient: string, index: number) => (
                                <li key={index}>{ingredient}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="flex space-x-4">
                        <button className="flex-1 bg-favColor text-white py-3 px-6 rounded-lg transition duration-300">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default DishDetails;
