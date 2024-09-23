"use client";

import { dashboardTabsList } from "@/lib/dashboardTabsList";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

const DashboardContent = ({ children }) => {
    const pathname = usePathname();
    return (
        <div>
            <div className="md:hidden flex items-center gap-x-3 mb-4">
                {dashboardTabsList.map((tab) => (
                    <Link
                        key={tab.id}
                        href={tab.path}
                        className={clsx(
                            "rounded-lg p-2 text-gray-500 transition-all hover:text-gray-900 border border-white",
                            {
                                "rounded-lg bg-gray-200 p-2 text-gray-900  transition-all hover:text-gray-900 border border-tourHub-title":
                                    pathname === tab.path,
                            }
                        )}
                    >
                        {tab.icon}
                    </Link>
                ))}
            </div>
            {children}
        </div>
    );
};

export default DashboardContent;
