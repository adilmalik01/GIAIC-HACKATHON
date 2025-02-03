import { ListOrdered, PlusCircle, User } from "lucide-react";
import Link from "next/link";
import { List, PlusCircleFill } from "react-bootstrap-icons";
import { FaTachometerAlt, FaCalendar, FaUser, FaTasks, FaTable, FaList } from "react-icons/fa";

const Sidebar = () => {
    return (
        <div className="w-64 bg-gray-900 text-white flex flex-col">
            <div className="text-xl font-bold p-4 border-b border-gray-800">FoodTuck</div>
            <nav className="flex-grow">
                <ul>
                    <li className="p-4 cursor-pointer hover:bg-gray-700 flex items-center gap-4">
                        <FaTachometerAlt />
                        Dashboard
                    </li>
                    <Link href="/dashboard/create-product">
                        <li className="p-4 cursor-pointer hover:bg-gray-700 flex items-center gap-4">
                            <PlusCircleFill />
                            Add Product
                        </li>
                    </Link>

                    <Link href="/dashboard/dishes">
                        <li className="p-4 cursor-pointer hover:bg-gray-700 flex items-center gap-4">
                            <PlusCircleFill />
                            Dishes & Stock
                        </li>
                    </Link>

                    <Link href="/dashboard/category">
                        <li className="p-4 cursor-pointer hover:bg-gray-700 flex items-center gap-4">
                            <PlusCircleFill />
                            Category
                        </li>
                    </Link>

                    <Link href="/dashboard/orders">
                        <li className="p-4 cursor-pointer hover:bg-gray-700 flex items-center gap-4">
                            <FaList />
                            Orders
                        </li>
                    </Link>

                    <Link href="/dashboard/users">
                        <li className="p-4 cursor-pointer hover:bg-gray-700 flex items-center gap-4">
                            <FaUser />
                            Users
                        </li>
                    </Link>
                    <Link href="/dashboard/profile">
                        <li className="p-4 cursor-pointer hover:bg-gray-700 flex items-center gap-4">
                            <FaUser />
                            Profile
                        </li>
                    </Link>

                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;
