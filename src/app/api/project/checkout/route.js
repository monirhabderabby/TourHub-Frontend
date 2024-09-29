import { stripe } from "@/lib/stripe";
import { currentUser } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

// Helper function to check if the user already booked the package
async function checkBookingStatus(userId, packageId) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/booking/already-book`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ clerkId: userId, packageId }),
      }
    );
    const bookingStatus = await res.json();
    if (bookingStatus.success) {
      return false;
    } else {
      return true;
    }
  } catch (error) {
    console.error("/api/v1/booking/already-book", error.message);
    throw new Error("Failed to check booking status.");
  }
}

// Helper function to get Stripe customer information
async function getStripeCustomer(userId) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/users/stripe-user/${userId}`
    );
    const response = await res.json();
    return response?.success ? response : null;
  } catch (error) {
    console.error("Error fetching Stripe customer:", error.message);
    return null;
  }
}

// Helper function to create a Stripe checkout session
async function createStripeCheckoutSession(
  stripeCustomerId,
  lineItems,
  metadata
) {
  return await stripe.checkout.sessions.create({
    customer: stripeCustomerId,
    line_items: lineItems,
    mode: "payment",
    success_url: `${process.env.NEXT_PUBLIC_APP_URL}/packages/${metadata.packageId}/success`,
    cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/packages/${metadata.packageId}/canceled`,
    metadata,
  });
}

// Main function for handling the POST request
export async function POST(req) {
  try {
    const user = await currentUser();
    const { packageId, packageName, packagePrice } = await req.json();

    if (!user || !user.id || !packageId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    // Check if the user has already booked this package
    const packageAlreadyBooked = await checkBookingStatus(user.id, packageId);
    if (packageAlreadyBooked) {
      return NextResponse.json(
        { message: "You have already purchased this package!" },
        { status: 400 }
      );
    }

    // Prepare Stripe line items
    const lineItems = [
      {
        quantity: 1,
        price_data: {
          currency: "USD",
          product_data: { name: packageName },
          unit_amount: Math.round(packagePrice * 100), // Amount in cents
        },
      },
    ];

    // Fetch or create a Stripe customer
    let stripeCustomer = await getStripeCustomer(user.id);
    if (!stripeCustomer) {
      stripeCustomer = await stripe.customers.create({
        email: user?.emailAddresses[0]?.emailAddress,
      });
      // Optionally store the new Stripe customer in the database
    }

    // Create Stripe checkout session
    const session = await createStripeCheckoutSession(
      stripeCustomer?.customerId || stripeCustomer?.id,
      lineItems,
      {
        packageId,
        clerkId: user.id,
        packagePrice,
        packageName,
      }
    );

    // Return the checkout URL
    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("[PACKAGE_ID-Checkout]", error.message);
    return NextResponse("Internal Error", { status: 500 });
  }
}
