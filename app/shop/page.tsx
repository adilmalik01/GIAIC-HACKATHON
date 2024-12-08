import Image from "next/image";
import Navbar1 from "../components/navbar/Navbar1";
import Footer from "../components/footer/Footer";


export default function ProductGrid() {

    const products = [
        {
            id: 1,
            name: "Fresh Lime",
            price: 38.0,
            oldPrice: 45.0,
            image: "/products/1.png",
            category: "Drink",
        },
        {
            id: 2,
            name: "Chocolate Muffin",
            price: 28.0,
            image: "/products/2.png",
            category: "Sandwiches",
            label: "Sell",
        },
        {
            id: 3,
            name: "Burger",
            price: 21.0,
            oldPrice: 45.0,
            image: "/products/3.png",
            category: "Burger",
        },
        {
            id: 4,
            name: "Country Burger",
            price: 45.0,
            image: "/products/7.png",
            category: "Burger",
        },
        {
            id: 5,
            name: "Drink",
            price: 23.0,
            oldPrice: 45.0,
            image: "/products/8.png",
            category: "Drink",
        },
        {
            id: 6,
            name: "Pizza",
            price: 43.0,
            image: "/products/9.png",
            category: "Pizza",
        },
        {
            id: 4,
            name: "Country Burger",
            price: 45.0,
            image: "/products/4.png",
            category: "Burger",
        },
        {
            id: 5,
            name: "Drink",
            price: 23.0,
            oldPrice: 45.0,
            image: "/products/6.png",
            category: "Drink",
        },
        {
            id: 6,
            name: "Pizza",
            price: 43.0,
            image: "/products/5.png",
            category: "Pizza",
        },
        {
            id: 4,
            name: "Country Burger",
            price: 45.0,
            image: "/products/7.png",
            category: "Burger",
        },
        {
            id: 5,
            name: "Drink",
            price: 23.0,
            oldPrice: 45.0,
            image: "/products/8.png",
            category: "Drink",
        },
        {
            id: 6,
            name: "Pizza",
            price: 43.0,
            image: "/products/9.png",
            category: "Pizza",
        },
    ];


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

                <div className="flex flex-col max-md:flex-col-reverse lg:flex-row gap-8">



                    <div className="w-full lg:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {products.map((product) => (
                            <div
                                key={product.id}
                                className="border rounded overflow-hidden shadow hover:shadow-lg transition"
                            >
                                <div className="relative h-52">
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        layout="fill"
                                        objectFit="cover"
                                    />
                                    {product.label && (
                                        <span className="absolute top-2 left-2 bg-favColor text-white text-xs px-2 py-1 rounded">
                                            {product.label}
                                        </span>
                                    )}
                                </div>
                                <div className="p-4">
                                    <h3 className="font-semibold mb-1">{product.name}</h3>
                                    <div className="flex items-center gap-2">
                                        <span className="text-favColor font-bold">
                                            ${product.price.toFixed(2)}
                                        </span>
                                        {product.oldPrice && (
                                            <span className="text-gray-400 line-through text-sm">
                                                ${product.oldPrice.toFixed(2)}
                                            </span>
                                        )}
                                    </div>
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
                                    { name: "Pizza", price: 35.0, image: "/mainImages/pizza.png" },
                                    { name: "Cupcake", price: 35.0, image: "/mainImages/burger.png" },
                                    { name: "Cookies", price: 35.0, image: "/products/2.png" },
                                    { name: "Burger", price: 35.0, image: "/mainImages/burger.png" },
                                ].map((product, index) => (
                                    <div key={index} className="flex items-center gap-4">
                                        <div className="relative w-16 h-16 rounded overflow-hidden">
                                            <Image
                                                src={product.image}
                                                alt={product.name}
                                                layout="fill"
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
            </div>

            <Footer />
        </>
    );
}
