// Packages
import { Plus } from "lucide-react";
import dynamic from "next/dynamic";

// Components
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

const PackageTable = dynamic(() => import("./components/packageTable"), {
  ssr: false,
});

const PackagesTab = () => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-tourHub-title2 text-23px md:text-[30px] font-bold font-inter">
            Packages
          </h2>
          <p className="text-tourHub-gray text-14px pt-1 mb-1">
            Manage all packages
          </p>
        </div>
        <Link href={"/dashboard/packages/new"}>
          <Button
            className="text-sm bg-tourHub-green-light text-white rounded-md px-3 py-2"
            size="sm"
          >
            <Plus className="mr-2 h-4 w-4" />
            Add New
          </Button>
        </Link>
      </div>
      <Separator className="mb-4" />
      <PackageTable />
    </div>
  );
};

export default PackagesTab;
