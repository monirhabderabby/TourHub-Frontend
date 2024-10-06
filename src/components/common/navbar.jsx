"use client";

// Packages
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

// Components
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "../ui/sheet";

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false); // Track scrolling state for styling changes

  const pathname = usePathname(); // Get current route to highlight active menu

  const menus = [
    { id: 1, href: "/", linkText: "Home" },
    { id: 2, href: "/packages", linkText: "Discover" },
    { id: 3, href: "/news", linkText: "News" },
    { id: 4, href: "/about", linkText: "About Us" },
    { id: 5, href: "/Contact", linkText: "Contact" },
    { id: 6, href: "/dashboard", linkText: "Dashboard" },
  ];

  // Track window scroll to update navbar style
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true); // Set navbar background when scrolling
      } else {
        setScrolling(false); // Reset when not scrolling
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`py-3 fixed top-0 z-50 text-white w-full h-[60px] ${
        scrolling && "bg-tourHub-green-dark" // Add background when scrolling
      }  ${
        pathname === "/"
          ? !scrolling && "md:mt-7" // Add margin on homepage when not scrolling
          : "bg-tourHub-green-dark mt-0" // Default background for other pages
      } transition duration-300`}
    >
      <div className="container">
        <div className="flex justify-between items-center">
          <div>
            <Link href={"/"} className="font-bold text-xl">
              TourHub
            </Link>
          </div>
          <div className="hidden md:flex items-center md:gap-x-5 lg:gap-x-10">
            {/* Desktop Menu Links */}
            {menus.map((menu) => (
              <Link
                key={menu.id}
                href={menu.href}
                className={`${
                  pathname === menu.href ? "font-semibold" : "font-light" // Highlight active menu
                }`}
              >
                {menu.linkText}
              </Link>
            ))}
          </div>
          {/* Login button */}
          <div className="hidden md:block">
            <SignedOut>
              <SignInButton
                fallbackRedirectUrl="/"
                signUpFallbackRedirectUrl="/wizard"
              >
                <Button
                  className={cn(
                    scrolling && "border-[1px] border-white/10", // Add border when scrolling
                    "bg-tourHub-green-dark hover:bg-[#3a6f54]" // Change hover color for button
                  )}
                >
                  Sign In
                </Button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <div className="flex items-center mt-[3px]">
                <UserButton />
              </div>
            </SignedIn>
          </div>

          {/* Mobile Responsive */}
          <div className="md:hidden flex items-center gap-x-4">
            <div>
              <SignedOut>
                <SignInButton
                  fallbackRedirectUrl="/"
                  signUpFallbackRedirectUrl="/wizard"
                >
                  <Button
                    className={cn(
                      scrolling && "border-[1px] border-white/10", // Add border when scrolling
                      "bg-tourHub-green-dark hover:bg-[#3a6f54]" // Change hover color for button
                    )}
                  >
                    Sign In
                  </Button>
                </SignInButton>
              </SignedOut>
              <SignedIn>
                <div className="relative top-1">
                  <UserButton />
                </div>
              </SignedIn>
            </div>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" className="p-1">
                  <Menu />
                </Button>
              </SheetTrigger>
              <SheetContent side="top" className="bg-[#047857] text-white">
                <div className="flex flex-col items-center gap-y-8 mt-6">
                  {/* Login button for mobile */}

                  <div className="flex flex-col items-center gap-y-5">
                    {/* Mobile Menu Links */}
                    {menus.map((menu) => (
                      <Link
                        key={menu.id}
                        href={menu.href}
                        className={`${
                          pathname === menu.href
                            ? "font-semibold"
                            : "font-light" // Highlight active menu on mobile
                        }`}
                      >
                        <SheetClose>{menu.linkText}</SheetClose>
                      </Link>
                    ))}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
