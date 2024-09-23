"use client";
// Packages
import { AnimatePresence, motion } from "framer-motion";
import { CloudUpload, X } from "lucide-react";
import Image from "next/image";
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

// Components
import { useEdgeStore } from "@/lib/edgestore";
import { useUser } from "@clerk/nextjs";

const SingleImageUpload = ({ onChange, value, isForClerk = false }) => {
  const [loading, setLoading] = useState(false); // Track loading state
  const [uploadedImg, setUploadedImg] = useState(value || ""); // Set initial image state if any

  const { edgestore } = useEdgeStore();
  const { user, isLoaded, isSignedIn } = useUser(); // Destructure user authentication state

  // Check if user authentication data has loaded
  if (!isLoaded) {
    return null; // Return nothing while loading
  }

  // Redirect to sign-in page if the user is not signed in
  if (!isSignedIn) {
    redirect("/sign-in");
  }

  // Handle file drop and image upload
  const onDrop = useCallback(
    async (acceptedFiles) => {
      setUploadedImg(""); // Clear current image
      setLoading(true); // Start loading

      if (acceptedFiles) {
        // Edge Store
        const res = await edgestore.publicFiles.upload({
          file: acceptedFiles[0],
        });

        setLoading(false); // Stop loading after upload completes
        setUploadedImg(res?.url); // Update uploaded image URL
        onChange(res?.url); // Pass URL back to parent component
      }
    },
    [edgestore, onChange]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div>
      <AnimatePresence>
        {uploadedImg ? (
          <motion.div
            initial={{ opacity: 0 }} // Initial opacity for fade-in
            animate={{
              opacity: 1,
              transition: { duration: 0.5 },
            }}
            exit={{
              opacity: 0,
              transition: { duration: 0.5 },
            }}
            className="w-full bg-muted/50 border-dashed border-[1px] rounded-12px min-h-[100px] p-4 flex justify-center items-center"
          >
            <div className="relative">
              <motion.div
                initial={{ filter: "blur(1px)" }} // Initial blur for subtle image effect
                animate={{
                  filter: "blur(0px)",
                  transition: { delay: 1, duration: 0.5 },
                }}
                exit={{
                  opacity: 0,
                  scale: 0.8,
                  transition: { duration: 0.5 },
                }}
                className="h-[150px] w-[150px] relative"
              >
                <Image
                  src={uploadedImg}
                  fill
                  alt="profile"
                  className="rounded-8px"
                />
              </motion.div>

              {/* Remove Image Button */}
              <div
                className="bg-rose-500 w-fit text-white absolute top-0 right-0 rounded-tr-8px cursor-pointer"
                onClick={() => {
                  onChange(""); // Clear parent state
                  setUploadedImg(""); // Clear local image state
                }}
              >
                <X />
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }} // Initial opacity for fade-in
            animate={{
              opacity: 1,
              transition: { duration: 0.5 },
            }}
            exit={{
              opacity: 0,
              transition: { duration: 0.5 },
            }}
            {...getRootProps()}
            className="w-full bg-muted/50 border-dashed border-[1px] rounded-12px min-h-[100px] p-4 flex justify-center items-center"
          >
            <>
              <input {...getInputProps()} disabled={loading} />
              {isDragActive ? (
                <div className="text-tourHub-gray flex flex-col justify-center items-center py-8 space-x-2">
                  <CloudUpload className="w-7 h-7" />
                  <h1 className="text-center text-19px font-medium font-inter text-tourHub-green-dark">
                    {loading ? "Uploading..." : "Drop the files here..."}
                  </h1>
                  <p className="text-center text-[12px]">
                    Accepted file types: .png, .jpg, jpeg
                  </p>
                  <p className="text-center text-[12px]">
                    Maximum file size: 4MB
                  </p>
                </div>
              ) : (
                <div className="text-tourHub-gray flex flex-col justify-center items-center py-8 space-x-2">
                  <CloudUpload className="w-7 h-7" />
                  <h1 className="text-center text-19px font-medium font-inter text-tourHub-green-dark">
                    {loading ? "Uploading..." : "Drop file to upload"}
                  </h1>
                  <p className="text-center text-[12px]">
                    Accepted file types: .png, .jpg, jpeg
                  </p>
                  <p className="text-center text-[12px]">
                    Maximum file size: 4MB
                  </p>
                </div>
              )}
            </>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SingleImageUpload;
