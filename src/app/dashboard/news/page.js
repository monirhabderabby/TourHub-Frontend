// Packages
import { Plus } from "lucide-react";
import dynamic from "next/dynamic";
import Link from "next/link";

// Components
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const NewsTable = dynamic(() => import("./components/newsTable"), {
  ssr: false,
});

const NewsPage = () => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-tourHub-title2 text-[30px] font-bold font-inter">
            News
          </h2>
          <p className="text-tourHub-gray text-14px pt-1 mb-1">
            Manage all news
          </p>
        </div>
        <Link href={"/dashboard/news/new"}>
          <Button className="text-sm bg-tourHub-green-light text-white rounded-md px-3 py-2">
            <Plus className="mr-2 h-4 w-4" />
            Add New
          </Button>
        </Link>
      </div>
      <Separator className="mb-4" />
      <NewsTable />
    </div>
  );
};

export default NewsPage;
