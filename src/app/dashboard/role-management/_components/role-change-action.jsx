"use client";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

const RoleChangeAction = ({ data }) => {
  const { role } = data;
  const isAdmin = role === "admin";
  return (
    <Popover>
      <PopoverTrigger asChild>
        <p
          className={cn(
            "font-inter text-14px w-fit px-2 rounded-[50px] cursor-pointer",
            isAdmin ? "bg-green-200" : "bg-gray-200"
          )}
        >
          {role}
        </p>
      </PopoverTrigger>
      <PopoverContent className="w-full max-w-[200px]">
        <p className="text-14px font-inter text-tourHub-title2 font-medium outline-tourHub-title">
          Are you sure you want to change the user&apos;s role?
        </p>

        <div className="flex justify-end">
          <Button
            className="mt-4 bg-tourHub-title2 hover:bg-tourHub-title2/80"
            size="sm"
          >
            Make {isAdmin ? "User" : "Admin"}
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default RoleChangeAction;
