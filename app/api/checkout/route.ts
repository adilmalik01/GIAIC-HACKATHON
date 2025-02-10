import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: Request) {
    try {
        const { cartItems, userDetails } = await req.json();


        if (!cartItems.length) {
            return NextResponse.json({ error: "Your cart is empty" }, { status: 400 });
        }

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            mode: "payment",
            success_url: `http://localhost:3000/payment-success`,
            cancel_url: `http://localhost:3000/cart`,
            customer_email: userDetails.email,
            metadata: {
                userId: userDetails._id, 
            },
            line_items: cartItems.map((item: { name: string; images: string[]; price: number; quantity: number }) => ({
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