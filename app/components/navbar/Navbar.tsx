"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { Handbag, Search, List, X } from 'react-bootstrap-icons';
import CartLength from '../cartLength/CartLength';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="relative text-white">
            <div className="hidden lg:grid lg:grid-cols-3 lg:px-5 lg:place-items-center lg:h-28 lg:w-[95%] lg:mx-auto">
                <div className="links-div hidden lg:block">
                    <ul className="flex gap-4 font-normal font-inter">
                        <Link href="/" className="text-white hover:text-[#FF9F0D]">Home</Link>
                        <Link href="/menu" className="text-[#FF9F0D]">Menu</Link>
                        <Link href="/blog" className="text-white hover:text-[#FF9F0D]">Blog</Link>
                        <Link href="/pages" className="text-white hover:text-[#FF9F0D]">Pages</Link>
                        <Link href="/about" className="text-white hover:text-[#FF9F0D]">About</Link>
                        <Link href="/shop" className="text-white hover:text-[#FF9F0D]">Shop</Link>
                        <Link href="/contact" className="text-white hover:text-[#FF9F0D]">Contact</Link>
                    </ul>
                </div>

                <div className="logo flex items-start justify-center h-32">
                    <h1 className="font-medium text-[48px]">
                        <span className='text-favColor'>Food</span>tuck
                    </h1>
                </div>

                <div className="input-div flex items-center justify-end gap-3">
                    <div className="input rounded-3xl border border-favColor p-3 flex justify-center gap-2">
                        <input
                            placeholder='Search......'
                            className="h-full outline-none placeholder:text-white border-none bg-transparent"
                            type="text"
                        />
                        <button>
                            <Search />
                        </button>
                    </div>
                    <h3>
                        <Link href="/cart">

                            <CartLength icon={<Handbag className="h-5 w-5" />} />

                        </Link>
                    </h3>
                </div>
            </div>

            <div className="lg:hidden flex justify-between items-center p-4">
                <div className="logo">
                    <h1 className="font-medium text-2xl">
                        <span className='text-favColor'>Food</span>tuck
                    </h1>
                </div>

                <div className="flex items-center gap-4">
                    <Link href="/cart" className="mr-2">
                        <Handbag />
                    </Link>
                    <button onClick={toggleMenu} className="z-50">
                        {isMenuOpen ? <X size={24} /> : <List size={24} />}
                    </button>
                </div>
            </div>

            {isMenuOpen && (
                <div className="fixed inset-0 bg-black z-40 lg:hidden">
                    <div className="flex flex-col items-center justify-center h-full space-y-6 text-center">
                        <Link href="/" className="text-white hover:text-[#FF9F0D] text-2xl" onClick={toggleMenu}>Home</Link>
                        <Link href="/menu" className="text-[#FF9F0D] text-2xl" onClick={toggleMenu}>Menu</Link>
                        <Link href="/blog" className="text-white hover:text-[#FF9F0D] text-2xl" onClick={toggleMenu}>Blog</Link>
                        <Link href="/pages" className="text-white hover:text-[#FF9F0D] text-2xl" onClick={toggleMenu}>Pages</Link>
                        <Link href="/about" className="text-white hover:text-[#FF9F0D] text-2xl" onClick={toggleMenu}>About</Link>
                        <Link href="/shop" className="text-white hover:text-[#FF9F0D] text-2xl" onClick={toggleMenu}>Shop</Link>
                        <Link href="/contact" className="text-white hover:text-[#FF9F0D] text-2xl" onClick={toggleMenu}>Contact</Link>

                        <div className="input rounded-3xl border border-favColor p-3 flex justify-center gap-2 w-[80%] max-w-md">
                            <input
                                placeholder='Search......'
                                className="w-full h-full outline-none placeholder:text-white border-none bg-transparent"
                                type="text"
                            />
                            <button>
                                <Search />
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}

export default Navbar;