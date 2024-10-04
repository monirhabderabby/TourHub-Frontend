"use client";
import AlertModal from "@/components/ui/alert-modal";
import { Button } from "@/components/ui/button";
import { TrashIcon } from "lucide-react";
import { useState } from "react";

export default function BulkDeleteButton({ onDelete, loading }) {
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);

  return (
    <>
      <AlertModal
        isOpen={showDeleteDialog}
        onClose={() => setShowDeleteDialog(false)}
        onConfirm={() => {
          setShowDeleteDialog(false);
          onDelete();
        }}
        loading={loading}
      />
      <Button
        variant="outline"
        size="sm"
        className="ml-auto h-8 lg:flex"
        onClick={() => {
          setShowDeleteDialog((prev) => !prev);
        }}
        disabled={loading}
      >
        <TrashIcon className="mr-2 h-4 w-4" />
        Delete All
      </Button>
    </>
  );
}
