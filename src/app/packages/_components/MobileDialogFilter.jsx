"use client";

// Packages
import { useState } from "react";

// Components
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import PackageFilter from "./package_filter";

const MobileDialogFilter = () => {
  const [open, setOpen] = useState(false);
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Edit Profile</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <PackageFilter />
      </DialogContent>
    </Dialog>
  );
};

export default MobileDialogFilter;
