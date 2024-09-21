"use client";
// Packages
import { useCallback, useState } from "react";

// Components
import { Checkbox } from "@/components/ui/checkbox";
import DateRangePicker from "@/components/ui/date-range-picker";

const PackageFilter = () => {
  const [dateRange, setDateRange] = useState([null, null]);

  const handleDateRangeChange = useCallback((range) => {
    setDateRange(range);
  }, []);
  return (
    <div className="w-full rounded-12px border-[1px] border-[#E7E6E6]">
      {/* Date Range Picker */}
      <div className="bg-tourHub-green-dark rounded-t-12px py-8 px-6">
        <h5 className="text-white font-inter font-medium text-14px leading-28px">
          When you are travelling?
        </h5>
        <DateRangePicker
          onDateRangeChange={handleDateRangeChange}
          placeholder="Choose your date range"
          className="mt-4 h-[45px]"
        />
      </div>
      <TourType />
    </div>
  );
};

export default PackageFilter;

const TourType = () => {
  const demoData = [
    {
      id: 1,
      label: "Nature Tours",
      value: "natureTours",
    },
    {
      id: 2,
      label: "Adventure Tours",
      value: "adventureTours",
    },
    {
      id: 3,
      label: "Cultural Tours",
      value: "culturalTours",
    },
    {
      id: 4,
      label: "City Tours",
      value: "cityTours",
    },
  ];
  const [checked, setChecked] = useState([demoData[0].value]);

  return (
    <div className="py-8 px-6">
      <h5 className="font-inter font-medium text-[18px] leading-27px text-tourHub-title2">
        Tour Type
      </h5>
      <div className="mt-4 space-y-3">
        {demoData.map(({ id, label, value }) => (
          <div className="flex items-center space-x-2" key={id}>
            <Checkbox
              id="terms"
              value={value}
              onCheckedChange={(isChecked) => {
                return isChecked
                  ? setChecked((prev) => [...prev, value])
                  : setChecked((prev) => prev.filter((acc) => acc !== value));
              }}
            />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              {label}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};
