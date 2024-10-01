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

// Function to store the new Stripe customer in the database
async function storeStripeCustomerInDB(clerkId, customerId) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/users/stripe-user`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ clerkId, customerId }),
      }
    );

    if (!res.ok) {
      return {
        success: false,
        message: "Failed to store Stripe user in the database.",
      };
    }

    const result = await res.json();
    return { success: true, data: result?.data };
  } catch (error) {
    return { success: false, message: error.message };
  }
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
    // Attempt to fetch an existing Stripe customer for the user
    let stripeCustomer;
    const res = await getStripeCustomer(user.id);

    // Check if the fetching operation was unsuccessful
    if (res?.success) {
      // Assign the fetched customer data to the variable
      stripeCustomer = res?.data;
    }

    // If no customer data is found, create a new Stripe customer
    if (!stripeCustomer) {
      // Create a new customer in Stripe using the user's email
      const stripeResponse = await stripe.customers.create({
        email: user?.emailAddresses[0]?.emailAddress,
      });

      // Optionally store the newly created Stripe customer ID in the database
      const res = await storeStripeCustomerInDB(user?.id, stripeResponse?.id);

      // Check if the storing operation was unsuccessful
      if (!res?.success) {
        // Return an error response if unable to save the customer information
        return NextResponse.json({ message: res?.message }, { status: 405 });
      }

      // Assign the newly created customer data to the variable
      stripeCustomer = res?.data;
    }

    if (!user?.primaryEmailAddress.emailAddress) {
      return NextResponse.json(
        { message: "Email address not found from clerk" },
        { status: 400 }
      );
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
        customerEmail: user?.primaryEmailAddress?.emailAddress,
      }
    );

    // Return the checkout URL
    return NextResponse.json({ url: session?.url });
  } catch (error) {
    console.error("[PACKAGE_ID-Checkout]", error.message);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
