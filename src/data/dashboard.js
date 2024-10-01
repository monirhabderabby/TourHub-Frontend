import {
  HomeIcon,
  LayoutDashboard,
  Newspaper,
  Package,
  ShieldEllipsis,
  Store,
  User,
} from "lucide-react";

// Function to generate a random ID
const generateRandomId = () => Math.floor(Math.random() * 100000);

export const dashboardTabsList = [
  {
    id: generateRandomId(),
    path: "/dashboard",
    icon: <HomeIcon className="h-4 w-4" />,
    linkText: "Overview",
  },
  {
    id: generateRandomId(),
    path: "/dashboard/profile",
    icon: <User className="h-4 w-4" />,
    linkText: "Profile",
  },
  {
    id: generateRandomId(),
    path: "/dashboard/my-bookings",
    icon: <Store className="h-4 w-4" />,
    linkText: "My Bookings",
  },
  {
    id: generateRandomId(),
    path: "/dashboard/news",
    icon: <Newspaper className="h-4 w-4" />,
    linkText: "News",
  },
  {
    id: generateRandomId(),
    path: "/dashboard/bookings",
    icon: <Store className="h-4 w-4" />,
    linkText: "Bookings",
  },
  {
    id: generateRandomId(),
    path: "/dashboard/packages",
    icon: <Package className="h-4 w-4" />,
    linkText: "Packages",
  },
  {
    id: generateRandomId(),
    path: "/dashboard/category",
    icon: <LayoutDashboard className="h-4 w-4" />,
    linkText: "Category",
  },
  {
    id: generateRandomId(),
    path: "/dashboard/role-management",
    icon: <ShieldEllipsis className="h-4 w-4" />,
    linkText: "Role Management",
  },
];
