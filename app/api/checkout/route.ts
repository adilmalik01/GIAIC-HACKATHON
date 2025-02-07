import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "sk_test_51QpdEF04RT7QLE1EDhvwOKjKxxVrCL9QHlqyN2cJHn60NaDnGJb8GBqmd98mUITgYL5ma29g00UwKJCVGjBSYSGQ003w8d1v6J");

export async function POST(req: Request) {
    try {
        const { cartItems, userDetails } = await req.json();

        if (!cartItems.length) {
            return NextResponse.json({ error: "Your cart is empty" }, { status: 400 });
        }

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            mode: "payment",
            success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/cart`,
            cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/cart`,
            customer_email: userDetails.email,
            line_items: cartItems.map((item: any) => ({
                price_data: {
                    currency: "usd",
                    product_data: {
                        name: item.name,
                        images: [item.images[0]], 
                    },
                    unit_amount: item.price * 100, 
                },
                quantity: item.quantity,
            })),
        });

        return NextResponse.json({ url: session.url });
    } catch (error) {
        console.error("Stripe Checkout Error:", error);
        return NextResponse.json({ error: "Payment failed. Try again." }, { status: 500 });
    }
}