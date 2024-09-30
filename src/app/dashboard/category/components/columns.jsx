import Image from "next/image";
import CategoryRowActions from "./CategoryRowActions";

export const CategoryColumns = [
  {
    accessorKey: "image",
    header: "Image",
    cell: ({ row }) => {
      const image = row.getValue("image");

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
    accessorKey: "name",
    header: "Category name",
  },
  {
    accessorKey: "categoryDescription",
    header: "Description",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const category = row.original;

      return <CategoryRowActions category={category} />;
    },
  },
];
