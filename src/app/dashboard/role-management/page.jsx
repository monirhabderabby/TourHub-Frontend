// Packages
import dynamic from "next/dynamic";

// Components
import { Separator } from "@/components/ui/separator";
const RoleManagementTable = dynamic(
  () => import("./_components/role-management-table"),
  { ssr: false }
);

const Page = () => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-tourHub-title2 text-[30px] font-bold font-inter">
            All Users
          </h2>
          <p className="text-tourHub-gray text-14px pt-1 mb-1">
            Manage all users
          </p>
        </div>
      </div>
      <Separator className="mb-4" />
      <RoleManagementTable />
    </div>
  );
};

export default Page;
