"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
const NavPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=" bg-gradient text-primary-foreground absolute w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex  justify-between items-center   gap-64">
            <div className="flex-shrink-0">
              <span className="font-bold text-xl">TourHub</span>
            </div>
            <div className="hidden md:block">
              <div className="ml-40 flex items-baseline space-x-4">
                <a
                  href="#"
                  className="px-3 py-2 rounded-md text-sm font-medium hover:bg-primary-foreground hover:text-primary"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="px-3 py-2 rounded-md text-sm font-medium hover:bg-primary-foreground hover:text-primary"
                >
                  About
                </a>
                <a
                  href="#"
                  className="px-3 py-2 rounded-md text-sm font-medium hover:bg-primary-foreground hover:text-primary"
                >
                  Services
                </a>
                <a
                  href="#"
                  className="px-3 py-2 rounded-md text-sm font-medium hover:bg-primary-foreground hover:text-primary"
                >
                  Contact
                </a>
              </div>
            </div>
            <div className="hidden md:block ">
              <Button className="  bg-tourHub-green-light  text-white rounded-md  ">
                <p className=" ml-2">Login</p>
              </Button>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-primary-foreground hover:text-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-primary focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div
          className="md:hidden bg-black z-10  absolute w-full  flex flex-col justify-center items-center"
          id="mobile-menu"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-primary-foreground hover:text-primary"
            >
              Home
            </a>
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-primary-foreground hover:text-primary"
            >
              About
            </a>
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-primary-foreground hover:text-primary"
            >
              Services
            </a>
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-primary-foreground hover:text-primary"
            >
              Contact
            </a>
            <Button className="  bg-tourHub-green-light  text-white rounded-md  ml-2 ">
                <p className=" ml-2">Login</p>
              </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavPage;
