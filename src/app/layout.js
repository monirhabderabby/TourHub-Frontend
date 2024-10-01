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
