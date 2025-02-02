"use client";

import React, { useState } from 'react'
import { Search, User, ShoppingBag, X, Menu, UserCircle } from 'lucide-react'
import Link from "next/link"
import { useSession, signOut } from "next-auth/react";

export default function Navbar1({ title }: any) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { data: session, status } = useSession();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
       
      <header className=" relative z-50">
        <nav className="bg-black  px-4 md:px-6">
          <div className="mx-auto   sticky top-0 flex h-16 max-w-7xl items-center justify-between">
            <Link href="/" className="flex items-center text-xl font-bold text-white">
              Food<span className="text-orange-500">tuck</span>
            </Link>

            <div className="hidden items-center gap-8 md:flex">
              <Link href="/" className="text-white hover:text-orange-500">Home</Link>
              <Link href="/menu" className="text-white">Menu</Link>
              <Link href="/blog" className="text-white hover:text-orange-500">Blog</Link>
              <Link href="/pages" className="text-white hover:text-orange-500">Pages</Link>
              <Link href="/about" className="text-white hover:text-orange-500">About</Link>
              <Link href="/shop" className="text-white hover:text-orange-500">Shop</Link>
              <Link href="/contact" className="text-white hover:text-orange-500">Contact</Link>
            </div>

            <div className="flex items-center gap-4 justify-center">
              <button className="text-white hover:text-orange-500">
                <Search className="h-5 w-5" />
                <span className="sr-only">Search</span>
              </button>
              <Link href={status === "authenticated" ? "/profile" : "/login"}>
                <button className="text-white hover:text-orange-500">
                  {status === "authenticated" ? (
                    <>
                      <UserCircle className="h-5 w-5" />
                      <span className="sr-only">Profile</span>
                    </>
                  ) : (
                    <>
                      <User className="h-5 w-5" />
                      <span className="sr-only">Account</span>
                    </>
                  )}
                </button>
              </Link>
              
              <Link href="/cart">
                <button className="text-white hover:text-orange-500">
                  <ShoppingBag className="h-5 w-5" />
                  <span className="sr-only">Cart</span>
                </button>
              </Link>

              <button
                onClick={toggleMenu}
                className="md:hidden text-white hover:text-orange-500"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                <span className="sr-only">Toggle Menu</span>
              </button>
            </div>
          </div>
        </nav>

        {isMenuOpen && (
          <div className="fixed inset-0 bg-black z-40 md:hidden">
            <div className="relative h-full">
              <button
                onClick={toggleMenu}
                className="absolute top-4 right-4 text-white hover:text-orange-500"
              >
                <X className="h-8 w-8" />
                <span className="sr-only">Close Menu</span>
              </button>

              <div className="flex flex-col items-center justify-center h-full space-y-6 text-center">
                <Link href="/" className="text-white hover:text-orange-500 text-2xl" onClick={toggleMenu}>Home</Link>
                <Link href="/menu" className="text-orange-500 text-2xl" onClick={toggleMenu}>Menu</Link>
                <Link href="/blog" className="text-white hover:text-orange-500 text-2xl" onClick={toggleMenu}>Blog</Link>
                <Link href="/pages" className="text-white hover:text-orange-500 text-2xl" onClick={toggleMenu}>Pages</Link>
                <Link href="/about" className="text-white hover:text-orange-500 text-2xl" onClick={toggleMenu}>About</Link>
                <Link href="/shop" className="text-white hover:text-orange-500 text-2xl" onClick={toggleMenu}>Shop</Link>
                <Link href="/contact" className="text-white hover:text-orange-500 text-2xl" onClick={toggleMenu}>Contact</Link>
              </div>
            </div>
          </div>
        )}

        <div className="relative h-[300px] w-full bg-cover bg-center" style={{ backgroundImage: `url('/mainImages/header.png')` }}>
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-4 text-center">
            <h1 className="mb-4 text-3xl md:text-5xl font-bold text-white">{title}</h1>
            <div className="flex items-center gap-2 text-base md:text-lg">
              <Link href="/" className="text-white hover:text-orange-500">
                Home
              </Link>
              <span className="text-white">&gt;</span>
              <span className="text-orange-500">{title}</span>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
