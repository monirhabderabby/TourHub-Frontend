"use client";

// Packages
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AnimatePresence } from "framer-motion";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

// Components
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { useUser } from "@clerk/nextjs";

const RoleChangeAction = ({ data }) => {
  const [open, setOpen] = useState(false); // Default state is false
  const superAdmin = process.env.NEXT_PUBLIC_SUPER_ADMIN;
  const { role, clerkId } = data;
  const isSuperAdmin = clerkId === superAdmin;
  console.log(isSuperAdmin, clerkId, superAdmin);
  const isAdmin = role === "admin";

  const { isLoaded, user } = useUser(); // useUser hook called unconditionally

  const queryClient = useQueryClient();

  // Ensure that the component waits for the user to load before rendering

  const { mutate, isPending } = useMutation({
    mutationKey: ["users"],
    mutationFn: () =>
      fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/users/update-role/${clerkId}`,
        {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
            ClerkId: user?.id,
          },
        }
      ).then((res) => res.json()),
    onSuccess: (data) => {
      if (data?.success) {
        queryClient.invalidateQueries(["users"]);
        setOpen(false); // Close the popover on success
        toast.success(`${data?.data?.name} is now a ${data?.data?.role}.`);
      }
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const onUpdate = () => {
    if (isLoaded) {
      mutate();
    } else {
      toast.warning(
        "User data is still loading. Please wait before attempting to change the role."
      );
    }
  };

  const onPopOverChange = () => {
    if (isSuperAdmin) {
      return;
    }
    setOpen((prev) => !prev);
  };

  return (
    <Popover open={open} onOpenChange={onPopOverChange}>
      <PopoverTrigger asChild>
        <p
          className={cn(
            "font-inter text-14px w-fit px-2 rounded-[50px] cursor-pointer",
            isAdmin ? "bg-green-200" : "bg-gray-200",
            isSuperAdmin && "bg-orange-200"
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
            className={cn(
              "mt-4 bg-tourHub-title2 hover:bg-tourHub-title2/80 text-[12px] text-white flex items-center gap-x-1",
              isSuperAdmin && "select-none"
            )}
            size="sm"
            onClick={onUpdate}
            disabled={isPending || !isLoaded || isSuperAdmin} // Updated to 'isLoading'
          >
            Make {isAdmin ? "User" : "Admin"}
            <AnimatePresence>
              {isPending && <Loader2 className="h-3 w-3 animate-spin" />}
            </AnimatePresence>
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default RoleChangeAction;
