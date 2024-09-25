// Packages
import { Plus } from "lucide-react";
import dynamic from "next/dynamic";

// Components
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const PackageTable = dynamic(() => import("./components/packageTable"), {
  ssr: false,
});

const PackagesTab = () => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-tourHub-title2 text-[30px] font-bold font-inter">
            Packages
          </h2>
          <p className="text-tourHub-green-dark text-base mb-1">
            Manage all packages
          </p>
        </div>
        <Button className="text-sm bg-tourHub-green-light text-white rounded-md px-3 py-2">
          <Plus className="mr-2 h-4 w-4" />
          Add New
        </Button>
      </div>
      <Separator className="mb-4" />
      <PackageTable />
    </div>
  );
};

export default PackagesTab;
