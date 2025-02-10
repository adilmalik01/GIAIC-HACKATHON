"use client";

import { useState } from "react";
import { useSession, signOut } from "next-auth/react";

import { FaUser, FaBox, FaSignOutAlt } from "react-icons/fa";
import Navbar1 from "../navbar/Navbar1";
import Image from "next/image";

interface UserData {
  user: {
    image: string;
    name: string;
    email: string;
    profileBio?: string;
  };
}

export default function ProfileClient({ Data }: { Data: UserData }) {
  const [activeTab, setActiveTab] = useState("profile");
  const { status } = useSession();
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Navbar1 title="Profile" />

      <div className="flex flex-1 flex-col md:flex-row">
        <aside className="w-full md:w-64 bg-gray-800 text-white p-5 flex flex-col">
          <ul className="flex-1">
            <li className={`p-3 cursor-pointer ${activeTab === "profile" && "bg-gray-700"}`} onClick={() => setActiveTab("profile")}>
              <FaUser className="inline mr-2" /> Profile
            </li>
            <li className={`p-3 cursor-pointer ${activeTab === "orders" && "bg-gray-700"}`} onClick={() => setActiveTab("orders")}>
              <FaBox className="inline mr-2" /> Order History
            </li>
          </ul>
          <li >
            {status === "authenticated" && (
              <button
                onClick={() => signOut({ callbackUrl: "/" })}
                className="p-3 cursor-pointer text-red-400 hover:text-red-600"
              >
            <FaSignOutAlt className="inline mr-2" />    Logout
              </button>
            )}
          </li>


        </aside>

        <main className="flex-1 p-6 flex flex-col items-center">
          {activeTab === "profile" && (
            <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-2xl text-center">
              <Image width={100} height={100} className="w-24 h-24 rounded-full mb-4 mx-auto" src={Data.user.image || "/profile-placeholder.png"} alt="Profile" />
              <p className="text-lg font-semibold">Welcome, {Data.user.name}</p>
              <p className="text-gray-600">Email: {Data.user.email}</p>
              <p className="text-gray-500 mt-2 italic">{Data.user.profileBio || "No bio available."}</p>
            </div>
          )}
          {activeTab === "orders" && (
            <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-2xl text-center">
              <h1 className="text-2xl font-bold mb-4">Orders</h1>
              <p className="text-gray-600">You have no orders yet.</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
