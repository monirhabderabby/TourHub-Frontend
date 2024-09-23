"use client";
// Packages
import { AnimatePresence, motion } from "framer-motion";
import { CloudUpload, X } from "lucide-react";
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

// Components
import { useEdgeStore } from "@/lib/edgestore";
import Image from "next/image";

const SingleImageUpload = ({ onChange, value }) => {
  const [loading, setLoading] = useState(false);
  const [uploadedImg, setUploadedImg] = useState(value || "");

  const { edgestore } = useEdgeStore();
  const onDrop = useCallback(async (acceptedFiles) => {
    // Do something with the files
    setUploadedImg("");
    setLoading(true);
    if (acceptedFiles) {
      const res = await edgestore.publicFiles.upload({
        file: acceptedFiles[0],
      });

      setLoading(false);
      setUploadedImg(res?.url);
      onChange(res?.url);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  return (
    <div>
      <AnimatePresence>
        {uploadedImg ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: {
                duration: 0.5,
              },
            }}
            exit={{
              opacity: 0,
              transition: {
                duration: 0.5,
              },
            }}
            className=" w-full bg-muted/50 border-dashed border-[1px] rounded-12px min-h-[100px] p-4 flex justify-center items-center"
          >
            <div className="relative">
              <motion.div
                initial={{ filter: "blur(1px)" }}
                animate={{
                  filter: "blur(0px)",
                  transition: {
                    delay: 1,
                    duration: 0.5,
                  },
                }}
                exit={{
                  opacity: 0,
                  scale: 0.8,
                  transition: {
                    duration: 0.5,
                  },
                }}
                className="h-[150px] w-[150px] relative"
              >
                <Image
                  src={uploadedImg}
                  fill
                  alt="profile"
                  className="rounded-8px "
                />
              </motion.div>
              <div
                className="bg-rose-500 w-fit text-white absolute top-0 right-0 rounded-tr-8px cursor-pointer"
                onClick={() => {
                  onChange("");
                  setUploadedImg("");
                }}
              >
                <X />
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: {
                duration: 0.5,
              },
            }}
            exit={{
              opacity: 0,
              transition: {
                duration: 0.5,
              },
            }}
            {...getRootProps()}
            className=" w-full bg-muted/50 border-dashed border-[1px] rounded-12px min-h-[100px] p-4 flex justify-center items-center"
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
