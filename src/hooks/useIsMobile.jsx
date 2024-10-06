"use client";

import { useEffect, useState } from "react";

export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== undefined) {
        setIsMobile(window.innerWidth <= 768);
      }
    };

    // Attach resize event listener
    window.addEventListener("resize", handleResize);

    // Call handleResize initially to set the correct value
    handleResize();

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile;
};
