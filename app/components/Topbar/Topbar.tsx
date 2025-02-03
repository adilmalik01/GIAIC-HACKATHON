"use client";

import { useSession } from "next-auth/react";
import { FaSearch, FaUserCircle } from "react-icons/fa";

const Topbar = () => {
  const { data: session, status }: any = useSession();

  return (
    <div className="flex items-center sticky top-0 z-[999] justify-between bg-white p-4 shadow-md">
      <div className="flex items-center gap-4">
        <FaSearch className="text-gray-600" />
        <input
          type="text"
          placeholder="Type to search..."
          className="border p-2 rounded-md w-64"
        />
      </div>
      <div className="flex cursor-pointer items-center gap-4">
        <FaUserCircle className="text-gray-600 text-2xl" />
        <span className="font-semibold">{session?.user?.name}</span>
      </div>
    </div>
  );
};

export default Topbar;
