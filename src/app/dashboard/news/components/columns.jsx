import Image from "next/image";
import RowActions from "./rowActions";

export const columns = [
    {
        accessorKey: "images",
        header: "Image",
        cell: ({ row }) => {
            const image = row.getValue("images");

            return (
                <div>
                    <Image
                        src={image}
                        alt="Image"
                        width={80}
                        height={60}
                        className="bg-gray-100 rounded-md"
                    />
                </div>
            );
        },
    },
    {
        accessorKey: "title",
        header: "News title",
    },
    {
        accessorKey: "newsCategory",
        header: "Category",
    },
    {
        id: "actions",
        cell: ({ row }) => {
            const news = row.original;

            return <RowActions news={news} />;
        },
    },
];
