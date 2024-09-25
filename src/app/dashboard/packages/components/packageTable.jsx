"use client";

import { DataTable } from "@/components/ui/data-table";
import { useQuery } from "@tanstack/react-query";
import { Loader2Icon } from "lucide-react";
import { columns } from "./columns";

const PackageTable = () => {
    const { data, isLoading, isError } = useQuery({
        queryKey: ["packages"],
        queryFn: () =>
            fetch(`https://tour-hub-backend.vercel.app/api/v1/package`).then(
                (res) => res.json()
            ),
    });

    if (isLoading)
        return (
            <div className="flex justify-center items-center h-[calc(100vh-280px)]">
                <Loader2Icon className="h-7 w-7 animate-spin text-tourHub-green-dark" />
            </div>
        );
    if (isError) return <div>Error</div>;

    return (
        <div>
            <DataTable columns={columns} data={data?.data} />
        </div>
    );
};

export default PackageTable;
