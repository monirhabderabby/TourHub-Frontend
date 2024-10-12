// Packages
import { Inter, Poppins } from "next/font/google";

// Components
import { cn } from "@/lib/utils";

// CSS
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/navbar";
import AppProvider from "@/provider/app-provider";
import { CrispProvider } from "@/provider/crisp-provider";
import NProgress from "@/provider/NProgress";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";

// Fonts
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

export const metadata = {
  title: "TourHub",
  description:
    "Explore and book your next travel adventure with TourHub, your gateway to amazing destinations.",
  keywords:
    "Tour Package Booking, Travel Website, User-Friendly Interface, Dynamic Filtering, Location-Based Filtering, Date Range Filtering, Price-Based Filtering, Customer Reviews, Ratings System, Secure Payment Processing, Travel Itineraries, Adventure Tours, Cultural Tours, Family Travel, Responsive Design, Frontend Development, Backend Development, RESTful APIs, JavaScript, Next.js, React.js, Node.js, Express.js, MongoDB, UI/UX Design, Search Functionality, Pagination, Customization Options, User Dashboard, Travel Experiences, Online Booking, Data Management, Code Optimization, SEO Best Practices, Version Control, API Integration, Mobile-Friendly Design, User Engagement, Travel Recommendations.",
  openGraph: {
    images:
      "https://utfs.io/f/0CpqaBXnsrLBoLZBf3JoaZ38xwgVG9sic14knHfuR2ve7TNS",
  },
  publisher: "Monir Hossain",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <CrispProvider />
        <body className={cn(poppins.className, inter.className)}>
          <AppProvider>
            <Navbar />
            <NProgress />
            {children}
            <Footer />
          </AppProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
