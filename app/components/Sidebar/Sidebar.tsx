"use client"

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  ChevronFirst,
  ChevronLast,
  LayoutDashboard,
  PlusCircle,
  Utensils,
  LayoutGrid,
  ClipboardList,
  Users,
  UserCircle,
} from 'lucide-react';

const Sidebar = () => {
  const [expanded, setExpanded] = useState(true);
  const pathname = usePathname();

  const menuItems = [
    { name: 'Dashboard', icon: <LayoutDashboard size={20} />, path: '/dashboard' },
    { name: 'Add Product', icon: <PlusCircle size={20} />, path: '/dashboard/create-product' },
    { name: 'Dishes & Stock', icon: <Utensils size={20} />, path: '/dashboard/dishes' },
    { name: 'Category', icon: <LayoutGrid size={20} />, path: '/dashboard/category' },
    { name: 'Orders', icon: <ClipboardList size={20} />, path: '/dashboard/orders' },
    { name: 'Users', icon: <Users size={20} />, path: '/dashboard/users' },
  ];

  return (
    <aside className={`h-screen relative ${expanded ? 'w-64' : 'w-20'} duration-300 bg-gray-900`}>
      <nav className="h-full flex flex-col border-r border-gray-800">
        <div className="p-4 pb-2 flex justify-between items-center">
          <h1 className="font-medium text-[28px]">
            <span className='text-favColor'>Foodtuck</span>
          </h1>
          <button
            onClick={() => setExpanded((curr) => !curr)}
            className="p-1.5 rounded-lg bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-white"
          >
            {expanded ? <ChevronFirst size={20} /> : <ChevronLast size={20} />}
          </button>
        </div>

        <div className="border-t border-gray-800 my-2"></div>

        <ul className="flex-1 px-3">
          {menuItems.map((item) => {
            const isActive = pathname === item.path;
            return (
              <Link href={item.path} key={item.path}>
                <li
                  className={`
                    relative flex items-center py-3 px-3 my-1
                    font-medium rounded-md cursor-pointer
                    transition-colors group
                    ${isActive
                      ? 'bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800'
                      : 'hover:bg-indigo-50 text-gray-300 hover:text-indigo-600'
                    }
                  `}
                >
                  {isActive && (
                    <div className="absolute left-0 w-1 h-8 bg-indigo-600 rounded-r-full" />
                  )}
                  <div className="flex items-center gap-4">
                    <div className={isActive ? 'text-indigo-600' : ''}>{item.icon}</div>
                    <span
                      className={`overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"
                        }`}
                    >
                      {item.name}
                    </span>
                  </div>
                </li>
              </Link>
            );
          })}
        </ul>

        <div className="border-t border-gray-800 p-3">
          <div
            className={`
              flex items-center gap-2 p-3 rounded-md cursor-pointer
              hover:bg-indigo-50 text-gray-300 hover:text-indigo-600
              transition-colors
            `}
          >
            <UserCircle size={20} />
            <div
              className={`
                flex items-center gap-2
                overflow-hidden transition-all ${expanded ? "w-52" : "w-0"}
              `}
            >
              <div className="flex flex-col">
                <span className="text-sm font-medium">Admin User</span>
                <span className="text-xs">admin@foodtuck.com</span>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;