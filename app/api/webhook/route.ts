import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-01-27.acacia",
});



// Main handler function for POST requests
export async function POST(req: Request) {
  const sig = req.headers.get("stripe-signature")!;
  const body = await req.text(); // Get the raw body from the request
  const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET!; // Use your environment variable for the secret

  let event;

  try {
    // Use the body and signature to construct the Stripe event and verify it
    event = stripe.webhooks.constructEvent(body, sig, endpointSecret);
  } catch (err) {
    console.error("Webhook Error:", err);
    return NextResponse.json({ error: "Invalid webhook signature" }, { status: 400 });
  }

  // Handle the 'checkout.session.completed' event
  if (event.type === "checkout.session.completed") {
    const session = event.data.object;
    const line_items = await stripe.checkout.sessions.listLineItems(session.id);

    // Create an order data object
    const orderData = {
      customerEmail: session.customer_email,
      paymentStatus: session.payment_status,
      totalAmount: (session.amount_total ?? 0) / 100, // Convert from cents to dollars
      currency: session.currency,
      orderId: session.id,
      items: line_items.data.map((item) => ({
        name: item.description,
        quantity: item.quantity,
        price: item.amount_total / 100, // Convert from cents to dollars
      })),
    };

    // Log the order data (You would likely save this to a database in a real app)
    console.log("Saving Order:", orderData);
  }

  // Return a 200 status to acknowledge receipt of the event
  return NextResponse.json({ received: true }, { status: 200 });
}
