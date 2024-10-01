"use client";
// Components
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { useFilterStore } from "@/store/packageFilter";
import { useEffect, useState } from "react";

// Demo Data
const sortingData = [
  {
    id: 2,
    name: "Price (Low to High)",
    value: "price",
  },
  {
    id: 3,
    name: "Price (High to Low)",
    value: "-price",
  },
  {
    id: 4,
    name: "Name (A-Z)",
    value: "name",
  },
  {
    id: 5,
    name: "Name (Z-A)",
    value: "-name",
  },
];

const PackagesSorting = () => {
  const { setSortBy, sortBy } = useFilterStore();
  const [selected, setSelected] = useState(sortBy || "");

  useEffect(() => {
    setSelected(sortBy);
  }, [sortBy]);

  return (
    <div>
      <Select
        value={selected}
        onValueChange={(value) => {
          setSortBy(value);
          setSelected(value);
        }}
        className="overflow-hidden"
      >
        <SelectTrigger className="w-[180px] focus-visible:ring-0">
          <span className="py-2">
            {sortingData.find((item) => item.value === selected)?.name ||
              "Sort By"}
          </span>
        </SelectTrigger>
        <SelectContent>
          {sortingData.map((item) => (
            <SelectItem key={item.id} value={item.value}>
              {item.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default PackagesSorting;
