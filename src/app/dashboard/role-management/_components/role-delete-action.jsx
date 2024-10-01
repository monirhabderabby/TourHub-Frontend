"use client";
// Packages
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Loader2, Trash2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

// Components
import AlertModal from "@/components/ui/alert-modal";

const RoleDeleteAction = ({ clerkId }) => {
  const [open, setOpen] = useState(false);

  const queryClient = useQueryClient();

  // package delete api
  const { mutate: deleteMutate, isPending: deletePending } = useMutation({
    mutationKey: ["users"],
    mutationFn: async () =>
      fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/users/${clerkId}`, {
        method: "DELETE",
      }),
    onError: (error) => {
      toast.error(error.message);
    },
    onSuccess: () => {
      toast.success("User deleted successfully.");
      setOpen(false);

      // Invalidate the package query so that it refetches and updates the tables
      queryClient.invalidateQueries(["users"]);
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
        {deletePending ? (
          <Loader2 className="h-4 w-4 animate-spin text-rose-600" />
        ) : (
          <Trash2 className="h-4 w-4" />
        )}{" "}
        Delete User
      </button>
    </>
  );
};

export default RoleDeleteAction;
