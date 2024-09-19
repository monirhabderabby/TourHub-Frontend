// Packages
import { Inter, Poppins } from "next/font/google";

// Components
import NavPage from "@/components/common/navbar";
import { cn } from "@/lib/utils";

// CSS
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
        <html lang="en">
            <body className={cn(poppins.className, inter.className)}>
                <NavPage />
                {children}
            </body>
        </html>
    );
}
