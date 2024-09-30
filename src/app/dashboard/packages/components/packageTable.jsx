"use client";

import { DataTable } from "@/components/ui/data-table";
import { TextEffect } from "@/components/ui/text-effect";
import { useQuery } from "@tanstack/react-query";
import { CircleOff, Loader2Icon } from "lucide-react";
import { columns } from "./columns";

const PackageTable = () => {
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ["packages"],
        queryFn: () =>
            fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/package`).then(
                (res) => res.json()
            ),
    });

    if (isLoading)
        return (
            <div className="flex justify-center items-center h-[calc(100vh-280px)]">
                <Loader2Icon className="h-7 w-7 animate-spin text-tourHub-green-dark" />
            </div>
        );
    if (isError)
        return (
            <div className="w-full flex flex-col gap-2 justify-center items-center min-h-[60vh] font-inter">
                <CircleOff className="h-7 w-7 text-red-600" />
                <p className="max-w-[400px] text-center text-14px text-tourHub-gray">
                    <TextEffect per="char" preset="fade">
                        {error.message}
                    </TextEffect>
                </p>
            </div>
        );

    return (
        <div>
            <DataTable
                columns={columns}
                data={data?.data}
                filterField={"name"}
                filterPlaceholder={"Filter by name"}
            />
        </div>
    );
};

export default PackageTable;
