import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-01-27.acacia",
});

export async function POST(req: Request) {
  const sig = req.headers.get("stripe-signature");
  const body = await req.text();
  const endpointSecret = "acct_1QpdEF04RT7QLE1E";

  let event;

  try {
    event = stripe.webhooks.constructEvent(body, sig!, endpointSecret!);

  } catch (err) {
    
    console.error("Webhook Error:", err);
    return NextResponse.json({ error: "Invalid webhook signature" }, { status: 400 });
 
}

  if (event.type === "checkout.session.completed") {
    const session = event.data.object;
     const line_items = await stripe.checkout.sessions.listLineItems(session.id);

     const orderData = {
       customerEmail: session.customer_email,
       paymentStatus: session.payment_status,
       totalAmount: (session.amount_total ?? 0) / 100,
       currency: session.currency,
       orderId: session.id,
       items: line_items.data.map((item) => ({
         name: item.description,
         quantity: item.quantity,
         price: item.amount_total / 100,
       })),
     };
 
     console.log("Saving Order:", orderData);
 
  }

  return NextResponse.json({ received: true }, { status: 200 });
}
