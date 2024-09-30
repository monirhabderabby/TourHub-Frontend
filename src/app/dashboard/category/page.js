// Packages
import { Plus } from "lucide-react";
import Link from "next/link";

// Components
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import CategoryTable from "./components/categoryTable";

const CategoryPage = () => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-tourHub-title2 text-[30px] font-bold font-inter">
            Categories
          </h2>
          <p className="text-tourHub-gray text-14px pt-1 mb-1">
            Manage all categories
          </p>
        </div>
        <Link href={"/dashboard/category/new"}>
          <Button className="text-sm bg-tourHub-green-light text-white rounded-md px-3 py-2">
            <Plus className="mr-2 h-4 w-4" />
            Add New
          </Button>
        </Link>
      </div>
      <Separator className="mb-4" />
      <CategoryTable />
    </div>
  );
};

export default CategoryPage;
