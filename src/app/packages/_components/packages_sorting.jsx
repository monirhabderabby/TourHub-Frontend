"use client";
// Components
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";

// Demo Data
const sortingData = [
  {
    id: 1,
    name: "Featured",
    value: "featured",
  },
  {
    id: 2,
    name: "Price (Low to High)",
    value: "low-to-high",
  },
  {
    id: 3,
    name: "Price (High to Low)",
    value: "high-to-low",
  },
  {
    id: 4,
    name: "Name (A-Z)",
    value: "a-z",
  },
  {
    id: 5,
    name: "Name (Z-A)",
    value: "z-a",
  },
];

const PackagesSorting = () => {
  return (
    <div>
      <Select onValueChange={(value) => console.log(value)}>
        <SelectTrigger className="w-[180px] focus-visible:ring-0">
          Sort By
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
