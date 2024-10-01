import { Copy, Edit, FileSearch2, MoreHorizontal, Trash } from "lucide-react";

import AlertModal from "@/components/ui/alert-modal";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

const NewsRowActions = ({ news }) => {
  const [open, setOpen] = useState(false);

  const queryClient = useQueryClient();
  const router = useRouter();

  const onCopy = (id) => {
    navigator.clipboard.writeText(id);
    toast.success(`News id copied to the clipboard`);
  };

  // news delete api
  const { mutate: deleteMutate, isPending: deletePending } = useMutation({
    mutationKey: ["news", news?._id],
    mutationFn: async () => {
      const method = "DELETE";
      const url = `${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/news/${news._id}`;

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
      toast.success("News deleted successfully.");
      setOpen(false);

      // Invalidate the news query so that it refetches and updates the table
      queryClient.invalidateQueries(["news"]);
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
          <DropdownMenuItem onClick={() => onCopy(news._id)}>
            <Copy className="mr-2 h-4 w-4" />
            Copy Id
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => router.push(`/news/${news._id}`)}>
            <FileSearch2 className="mr-2 h-4 w-4" />
            View News
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => router.push(`/dashboard/news/${news._id}`)}
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

export default NewsRowActions;
