"use client";

// Packages
import { useState } from "react";

// Components
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalTrigger,
} from "@/components/ui/animated-modal";
import PackageFilter from "./package_filter";

const MobileDialogFilter = () => {
  const [open, setOpen] = useState(false);
  return (
    <Modal open={open} setOpen={setOpen}>
      <ModalTrigger>
        <div className="px-8 py-2 bg-tourHub-green-dark text-white rounded-8px">
          Filter
        </div>
      </ModalTrigger>
      <ModalBody>
        <ModalContent>
          <PackageFilter />
        </ModalContent>
      </ModalBody>
    </Modal>
  );
};

export default MobileDialogFilter;
