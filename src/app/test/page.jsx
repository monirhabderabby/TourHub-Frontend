"use client";
import { useState } from "react";
import FramerModal from "../../components/common/framer-modal";
import { Step } from "../../components/ui/Step";

const Test = () => {
  const [isOpen, toggleOpen] = useState(false);
  let [step, setStep] = useState(1);
  return (
    <div className="w-full min-h-screen flex flex-col gap-y-10 justify-center items-center">
      <button onClick={() => toggleOpen(true)}>Modal</button>
      <FramerModal isOpen={isOpen} modalControl={() => toggleOpen(false)}>
        <div className="flex items-center justify-between w-full">
          <Step step={1} currentStep={step} />
          <Step step={2} currentStep={step} />
          <Step step={3} currentStep={step} />
          <Step step={4} currentStep={step} />
        </div>
        <button className="mt-5" onClick={() => setStep((prev) => prev + 1)}>
          Next
        </button>
      </FramerModal>
    </div>
  );
};

export default Test;
