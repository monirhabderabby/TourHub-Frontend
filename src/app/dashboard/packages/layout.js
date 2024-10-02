// Import necessary functions from Clerk and Next.js
import { currentUser } from "@clerk/nextjs/server"; // Fetch the current authenticated user
import { redirect } from "next/navigation"; // Function to programmatically redirect users

// Define the default export function for the dashboard category layout
export default async function PackagesDashboardLayout({ children, params }) {
  // Fetch the current user asynchronously
  const user = await currentUser();

  // If no user is authenticated, redirect to the sign-in page with a redirect URL back to the current page
  if (!user) {
    redirect(
      `/sign-in?redirect_url=${
        process.env.NEXT_PUBLIC_APP_URL
      }/${encodeURIComponent(params.slug)}` // Encode the slug parameter to pass it safely in the URL
    );
  }

  // Check if the authenticated user has the admin role
  const admin = user?.publicMetadata?.role === "admin";

  // If the user is not an admin, redirect them to the profile page in the dashboard
  if (!admin) {
    redirect("/dashboard/profile");
  }

  // Render the main layout and return the children components
  return <main>{children}</main>;
}
