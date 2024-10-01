"use client";
// Packages
import { useMutation } from "@tanstack/react-query";
import { Trash2 } from "lucide-react";
import { useState } from "react";

// Components
import AlertModal from "@/components/ui/alert-modal";

const RoleDeleteAction = ({ clerkId }) => {
  const [open, setOpen] = useState(false);

  // package delete api
  const { mutate: deleteMutate, isPending: deletePending } = useMutation({
    mutationKey: ["users"],
    mutationFn: async () => {
      const method = "DELETE";
      const url = `${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/package/${pack._id}`;

      const response = await fetch(url, {
        method: method,
      });

      if (!response.ok) {
        const errorResponse = await response.json(); // Get the error response
        toast.error(errorResponse.message || "An error occured");
      }

      return response.json();
    },
    onError: (error) => {
      toast.error(error.message);
    },
    onSuccess: () => {
      toast.success("User deleted successfully.");
      setOpen(false);

      // Invalidate the package query so that it refetches and updates the tables
    },
  });

  const onDelete = () => {
    deleteMutate();
  };
  return (
    <>
      <AlertModal
        isOpen={open}
        onClose={() => setOpen(false)}
        onConfirm={onDelete}
        loading={deletePending}
      />
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center gap-x-2 text-14px font-inter text-tourHub-title hover:shadow-sm   px-3 hover:text-rose-600 py-1 rounded-md"
      >
        <Trash2 className="h-4 w-4" /> Delete User
      </button>
    </>
  );
};

export default RoleDeleteAction;
