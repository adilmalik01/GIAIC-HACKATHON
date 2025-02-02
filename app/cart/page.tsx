'use client'
import Navbar1 from "../components/navbar/Navbar1";
import Footer from "../components/footer/Footer";
import Image from "next/image";

const Cart = () => {

    const cartItems = [
        {
            id: 1,
            product: "Burger",
            price: "$35.00",
            quantity: 1,
            total: "$221.00",
            image: "/mainImages/burger.png",
            stars: 3,
        },
        {
            id: 2,
            product: "Fresh Lime",
            price: "$25.00",
            quantity: 1,
            total: "$521.00",
            image: "/mainImages/pizza.png",
            stars: 2,
        },
        {
            id: 3,
            product: "Pizza",
            price: "$15.00",
            quantity: 1,
            total: "$421.00",
            image: "/mainImages/pizza.png",
            stars: 3,
        },
        {
            id: 4,
            product: "Chocolate Muffin",
            price: "$45.00",
            quantity: 1,
            total: "$521.00",
            image: "/mainImages/dish3.png",
            stars: 2,
        },
        {
            id: 5,
            product: "Cheese Butter",
            price: "$16.00",
            quantity: 1,
            total: "$325.00",
            image: "/mainImages/lettuce-leaf.png",
            stars: 4,
        },
    ];



    return (<>
        <Navbar1 title={"Cart"} />
        <div className="container mx-auto p-8">
            <table className="w-full text-left border-collapse">
                <thead>
                    <tr className="border-b">
                        <th className="pb-3">Product</th>
                        <th className="pb-3">Price</th>
                        <th className="pb-3">Quantity</th>
                        <th className="pb-3">Total</th>
                        <th className="pb-3">Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {cartItems.map((item: any) => (
                        <tr key={item.id} className="border-b">
                            <td className="py-3 flex items-center gap-3">
                                <Image
                                    src={item.image}
                                    alt={item.product}
                                    width={60}
                                    height={60}
                                    className="rounded-md"
                                />
                                <div>
                                    <p className="font-semibold">{item.product}</p>
                                    <div className="text-yellow-500">
                                        {"★".repeat(item.stars)}{" "}
                                        <span className="text-gray-300">
                                            {"★".repeat(5 - item.stars)}
                                        </span>
                                    </div>
                                </div>
                            </td>
                            <td>{item.price}</td>
                            <td>
                                <div className="flex items-center">
                                    <button className="px-2 border rounded-l">-</button>
                                    <span className="px-3">{item.quantity}</span>
                                    <button className="px-2 border rounded-r">+</button>
                                </div>
                            </td>
                            <td>{item.total}</td>
                            <td>
                                <button className="text-red-500 hover:text-red-700">X</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="grid max-md:grid-cols-1 grid-cols-2 gap-8 mt-8">
                <div className="">
                    <h3 className="font-semibold mb-3">Coupon Code</h3>
                    <p className="text-sm text-gray-500 mb-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                    <div className="flex">
                        <input
                            type="text"
                            placeholder="Enter Here code"
                            className="border p-2 w-full"
                        />
                        <button className="bg-orange-500 text-white px-4 py-2 ml-2 hover:bg-orange-600">
                            Apply
                        </button>
                    </div>
                </div>

                <div className="">
                    <h3 className="font-semibold mb-3">Total Bill</h3>
                    <div className="flex justify-between text-sm border-b py-2">
                        <span>Cart Subtotal</span>
                        <span>$120.00</span>
                    </div>
                    <div className="flex justify-between text-sm border-b py-2">
                        <span>Shipping Charge</span>
                        <span>$50.00</span>
                    </div>
                    <div className="flex justify-between font-semibold py-2">
                        <span>Total Amount</span>
                        <span>$205.00</span>
                    </div>
                    <button className="w-full mt-4 bg-orange-500 text-white py-2 rounded hover:bg-orange-600">
                        Proceed to Checkout
                    </button>
                </div>
            </div>
        </div>

        < Footer />

    </>);
}

export default Cart;