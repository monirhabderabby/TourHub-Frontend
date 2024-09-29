import { stripe } from "@/lib/stripe";
import { currentUser } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const user = await currentUser();
    const { packageId, packageName, packagePrice } = await req.json();

    if (!user || !user.id || !packageId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    // check if the user is already purchased

    // Create Line Items
    const line_items = [
      {
        quantity: 1,
        price_data: {
          currency: "USD",
          product_data: {
            name: packageName,
          },
          unit_amount: Math.round(packagePrice * 100),
        },
      },
    ];

    // clerk

    const customer = await stripe.customers.create({
      email: user?.emailAddresses[0].emailAddress,
    });

    // Do stfff

    const session = await stripe.checkout.sessions.create({
      customer: customer?.id,
      line_items,
      mode: "payment",
      success_url: `${process.env.NEXT_PUBLIC_APP_URL}/packages/${packageId}/success`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/projects/${packageId}/canceled`,
      metadata: {
        packageId,
        clerkId: user?.id,
        packagePrice,
        packageName,
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.log("[PACKAGE_ID-Checkout]", error);
    return NextResponse("Internel Error", { status: 500 });
  }
}
