import { HomeIcon, LayoutDashboard, Newspaper, Package } from "lucide-react";

export const dashboardTabsList = [
  {
    id: 1,
    path: "/dashboard",
    icon: <HomeIcon className="h-4 w-4" />,
    linkText: "Overview",
  },
  {
    id: 2,
    path: "/dashboard/news",
    icon: <Newspaper className="h-4 w-4" />,
    linkText: "News",
  },
  {
    id: 3,
    path: "/dashboard/packages",
    icon: <Package className="h-4 w-4" />,
    linkText: "Packages",
  },
  {
    id: 4,
    path: "/dashboard/category",
    icon: <LayoutDashboard className="h-4 w-4" />,
    linkText: "Category",
  },
];
