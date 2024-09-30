// Packages
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Copy, Edit, FileSearch2, MoreHorizontal, Trash } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

// Components
import AlertModal from "@/components/ui/alert-modal";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const PackagesRowActions = ({ pack }) => {
  const [open, setOpen] = useState(false);

  const router = useRouter();
  const queryClient = useQueryClient();

  const onCopy = (id) => {
    navigator.clipboard.writeText(id);
    toast.success(`Product id copied to the clipboard`);
  };

  // package delete api
  const { mutate: deleteMutate, isPending: deletePending } = useMutation({
    mutationKey: ["packages", pack?._id],
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
      toast.success("Package deleted successfully.");
      setOpen(false);

      // Invalidate the package query so that it refetches and updates the table
      queryClient.invalidateQueries(["packages"]);
    },
  });

  const onDelete = () => {
    deleteMutate();
  };

  return (
    <div>
      <AlertModal
        isOpen={open}
        onClose={() => setOpen(false)}
        onConfirm={onDelete}
        loading={deletePending}
      />
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <span className="sr-only">Open menu</span>
            <MoreHorizontal className="h-4 w-4 " />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Actions</DropdownMenuLabel>
          <DropdownMenuItem onClick={() => onCopy(pack._id)}>
            <Copy className="mr-2 h-4 w-4" />
            Copy Id
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => router.push(`/packages/${pack._id}`)}
          >
            <FileSearch2 className="mr-2 h-4 w-4" />
            View Details
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => router.push(`/dashboard/packages/${pack._id}`)}
          >
            <Edit className="mr-2 h-4 w-4" />
            Update
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setOpen((prev) => !prev)}>
            <Trash className="mr-2 h-4 w-4" />
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default PackagesRowActions;
