import Image from "next/image";
import RoleChangeAction from "./role-change-action";
import RoleDeleteAction from "./role-delete-action";

export const RoleManagementColumns = [
  {
    accessorKey: "email",
    header: "Profile",
    cell: ({ row }) => {
      const { image, name, email } = row.original || {};
      return (
        <div className="flex items-center gap-x-3">
          <div className="relative h-[30px] w-[30px] rounded-full border-[2px] border-tourHub-green-hover">
            <Image src={image} alt={name} fill className="rounded-full" />
          </div>
          <div>
            <h3 className="text-14px font-inter font-semibold">{name}</h3>
            <p className="select-none text-[12px] text-tourHub-gray font-inter font-normal">
              {email}
            </p>
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "role",
    header: "Role",
    cell: ({ row }) => {
      const data = row.original || {};

      return <RoleChangeAction data={data} />;
    },
  },
  {
    id: "actions",
    cell: ({ row }) => <RoleDeleteAction clerkId={row?.original?.clerkId} />,
  },
];
