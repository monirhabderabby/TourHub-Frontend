import { Copy, Edit, MoreHorizontal, Trash } from "lucide-react";

import AlertModal from "@/components/ui/alert-modal";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

const RowActions = ({ pack }) => {
    const [loading, setIsLoading] = useState(false);
    const [open, setOpen] = useState(false);

    const router = useRouter();

    const onCopy = (id) => {
        navigator.clipboard.writeText(id);
        toast.success(`Product id copied to the clipboard`);
    };

    const onDelete = () => {
        toast.error("Delete api not connected");
    };

    return (
        <div>
            <AlertModal
                isOpen={open}
                onClose={() => setOpen(false)}
                onConfirm={onDelete}
                loading={loading}
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
                        onClick={() =>
                            router.push(`/dashboard/packages/${pack._id}`)
                        }
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

export default RowActions;
