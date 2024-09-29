import { stripe } from "@/lib/stripe";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(req) {
  const body = await req.text();
  const signature = headers().get("Stripe-Signature");

  let event;
  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (error) {
    return new NextResponse(`Webhook Error: ${error.message}`, {
      status: 400,
    });
  }

  const session = event.data.object;
  const clerkId = session?.metadata?.clerkId;
  const packageId = session?.metadata?.packageId;
  const packagePrice = session?.metadata?.packagePrice;
  const packageName = session?.metadata?.packageName;

  if (event.type === "checkout.session.completed") {
    console.log({
      clerkId,
      packageId,
      packagePrice,
      packageName,
    });
  }

  return NextResponse.json({ success: true });
}
