"use client";
import { AnimatePresence, motion } from "framer-motion";

const FramerModal = ({ setIsOpen, isOpen, children }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30"
          variants={variant}
          initial="containerInitial"
          animate="containerAnimate"
          exit="containerExit"
        >
          <motion.div
            className="relative flex flex-col py-10 px-14 items-center justify-center h-auto w-fit   bg-white rounded-lg p-4 shadow-lg z-50"
            variants={modalVariant}
            initial="initial"
            animate="animate"
            exit="initial"
          >
            {children}
            <button
              className="absolute top-4 right-4 p-1 px-3 rounded-lg shadow-sm bg-red-50 hover:bg-red-200 hover:cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              X
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const variant = {
  containerInitial: {
    opacity: 0,
  },
  containerAnimate: {
    opacity: 1,
    backdropFilter: "blur(10px)",
  },
  containerExit: {
    opacity: 0,
    transition: {
      delay: 0.2,
    },
  },
};

const modalVariant = {
  initial: {
    opacity: 0,
    y: 50,
    transition: {
      type: "spring",
      duration: 0.5,
      mass: 2,
      damping: 10,
      delay: 0.4,
    },
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      duration: 0.5,
      mass: 2,
      damping: 10,
      delay: 0.2,
    },
  },
};

const emojiVariant = {
  initial: {
    y: -30,
    opacity: 0,
    transition: {
      type: "spring",
      duration: 0.5,
      mass: 2,
      damping: 10,
    },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 0.5,
      mass: 2,
      damping: 10,
      delay: 0.4,
    },
  },
};

export default FramerModal;
