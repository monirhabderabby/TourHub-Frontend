import { UploadDropzone } from "@/lib/uploadthing";
import { X } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";

const FileUpload = ({ apiEndPoint, onChange, value }) => {
    const type = value?.split(".").pop();

    if (value) {
        return (
            <div className="flex flex-col justify-center items-center">
                {type !== "pdf" && (
                    <div className="relative w-40 h-40">
                        <Image
                            src={value}
                            alt="uploaded image"
                            className="object-contain"
                            fill
                        />
                    </div>
                )}

                <Button
                    onClick={() => onChange("")}
                    variant={"ghost"}
                    type="button"
                >
                    <X className="h-4 w-4" />
                    Remove Image
                </Button>
            </div>
        );
    }

    return (
        <div className="w-full bg-muted/30">
            <UploadDropzone
                endpoint={apiEndPoint}
                onClientUploadComplete={(res) => {
                    onChange(res?.[0].url);
                }}
                onUploadError={(error) => {
                    console.error(error);
                }}
            />
        </div>
    );
};

export default FileUpload;
