import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-01-27.acacia",
});

export async function POST(req: Request) {
  const sig = req.headers.get("stripe-signature")!;
  const body = await req.text();
  const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET!;

  let event;

  try {
    event = stripe.webhooks.constructEvent(body, sig, endpointSecret);
  } catch (err) {
    console.error("Webhook Error:", err);
    return NextResponse.json({ error: "Invalid webhook signature" }, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object;
    const line_items = await stripe.checkout.sessions.listLineItems(session.id);
    const userId = session.metadata?.userId || "Unknown";  // ✅ Yahan se user ID mil rahi hai

    const items = await Promise.all(line_items.data.map(async (item) => {
      let image = null;

      if (item.price?.product) { // Fixed: Use price.product
        try {
          const product = await stripe.products.retrieve(item.price.product);
          image = product.images?.[0] || null; // Fetch first image
        } catch (err) {
          console.error("Error retrieving product image:", err);
        }
      }

      return {
        name: item.description,
        image: image,
        userId: userId,
        quantity: item.quantity,
        price: item.amount_total / 100,
      };
    }));

    const orderData = {
      customerEmail: session.customer_email,
      paymentStatus: session.payment_status,
      totalAmount: (session.amount_total ?? 0) / 100,
      currency: session.currency,
      orderId: session.id,
      userId: userId,
      items: items,
    };

    console.log("Saving Order:", orderData);
  }

  return NextResponse.json({ received: true }, { status: 200 });
}
