"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "../ui/sheet";

const Navbar = () => {
    const [scrolling, setScrolling] = useState(false);

    const pathname = usePathname();

    const menus = [
        { id: 1, href: "/", linkText: "Home" },
        { id: 2, href: "/packages", linkText: "Discover" },
        { id: 3, href: "/services", linkText: "Services" },
        { id: 4, href: "/news", linkText: "News" },
        { id: 5, href: "/about", linkText: "About Us" },
        { id: 6, href: "/Contact", linkText: "Contact" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolling(true);
            } else {
                setScrolling(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div
            className={`py-3 px-3 xl:px-0 fixed top-0 z-50 text-white w-full h-[60px] ${
                scrolling && "bg-green-500"
            } ${
                pathname === "/" ? !scrolling && "md:mt-7" : "bg-green-500 mt-0"
            } transition duration-300`}
        >
            <div className="w-full max-w-[1200px] mx-auto">
                <div className="flex justify-between items-center">
                    <div>
                        <Link href={"/"} className="font-bold text-xl">
                            TourHub
                        </Link>
                    </div>
                    <div className="hidden md:flex items-center md:gap-x-5 lg:gap-x-10">
                        {menus.map((menu) => (
                            <Link
                                key={menu.id}
                                href={menu.href}
                                className={`${
                                    pathname === menu.href
                                        ? "font-semibold"
                                        : "font-light"
                                }`}
                            >
                                {menu.linkText}
                            </Link>
                        ))}
                    </div>
                    {/* Login button */}
                    <div className="hidden md:block">
                        <Button className="bg-tourHub-green-light text-white rounded-md">
                            Login
                        </Button>
                    </div>

                    {/* Mobile Responsive */}
                    <div className="block md:hidden">
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button variant="ghost">
                                    <Menu />
                                </Button>
                            </SheetTrigger>
                            <SheetContent
                                side="top"
                                className="bg-[#047857] text-white"
                            >
                                <div className="flex flex-col items-center gap-y-8 mt-6">
                                    <div className="flex flex-col items-center gap-y-5">
                                        {menus.map((menu) => (
                                            <Link
                                                key={menu.id}
                                                href={menu.href}
                                                className={`${
                                                    pathname === menu.href
                                                        ? "font-semibold"
                                                        : "font-light"
                                                }`}
                                            >
                                                <SheetClose>
                                                    {menu.linkText}
                                                </SheetClose>
                                            </Link>
                                        ))}
                                    </div>
                                    {/* Login button */}
                                    <Link href={"/login"}>
                                        <Button className="bg-tourHub-green-light text-white rounded-md">
                                            <SheetClose>Login</SheetClose>
                                        </Button>
                                    </Link>
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
