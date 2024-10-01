import { sendPaymentSuccessEmail } from "@/lib/sendPaymentSuccessEmail";
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
  const transactionId = session?.payment_intent;
  const customerEmail = session?.metadata?.customerEmail;

  if (event.type === "checkout.session.completed") {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/booking`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            clerkId: clerkId,
            packageId: packageId,
            amount: Number(packagePrice),
            paymentStatus: "Paid",
            transactionId: transactionId,
          }),
        }
      );

      const bookingData = await res.json(); // Get response as text

      if (!res.ok) {
        console.log("Failed to create booking on stripe webhook");
        console.log(bookingData); // Log the raw response for debugging
      }

      // Send email
      if (customerEmail) {
        const res = await sendPaymentSuccessEmail({
          to: customerEmail,
          packageName,
          price: packagePrice,
          transactionId: transactionId,
        });

        if (res) {
          console.log("Email Sent Successfully!");
        }
      }
    } catch (error) {
      console.error(
        "An error occurred while creating a booking:",
        error.message
      );
    }
  }

  return NextResponse.json({ success: true });
}
