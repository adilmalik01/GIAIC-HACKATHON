"use client"
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';



interface CartLengthProps {
    icon: React.ReactNode;
}



const CartLength: React.FC<CartLengthProps> = ({ icon }) => {
    interface RootState {
        cart: {
            cartItems: unknown[]; // Replace 'unknown' with the actual type of cartItems if known
        };
    }

    const cartItems = useSelector((state: RootState) => state.cart.cartItems);

    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
        setCartCount(cartItems.length);
    }, [cartItems]);

    return (


        <div className="relative top-0 ">
            <div> {icon}</div>
            <div className=' absolute top-[-10px] right-[-10px] flex justify-center items-center  bg-favColor   h-[20px] w-[20px] rounded-full'>{cartCount}</div>
        </div>
    );

};



export default CartLength;