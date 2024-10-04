"use client";
import AlertModal from "@/components/ui/alert-modal";
import { Button } from "@/components/ui/button";
import { Loader2, TrashIcon } from "lucide-react";

export default function BulkDeleteButton({
  onDelete,
  loading,
  open,
  setOpen,
  isPending,
}) {
  return (
    <>
      <AlertModal
        isOpen={open}
        onClose={() => setOpen(false)}
        onConfirm={() => {
          onDelete();
        }}
        loading={loading}
      />
      <Button
        variant="outline"
        size="sm"
        className="ml-auto h-8 lg:flex"
        onClick={() => {
          setOpen((prev) => !prev);
        }}
        disabled={loading}
      >
        {isPending ? (
          <Loader2 className="h-4 w-4 animate-spin mr-2" />
        ) : (
          <TrashIcon className="mr-2 h-4 w-4" />
        )}
        Delete All
      </Button>
    </>
  );
}
