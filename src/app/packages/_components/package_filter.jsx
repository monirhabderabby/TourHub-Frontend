"use client";
// Packages
import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useState } from "react";

// Components
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import DateRangePicker from "@/components/ui/date-range-picker";
import RangeSlider from "react-range-slider-input";
// CSS

import "react-range-slider-input/dist/style.css";

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
      <FilterPrice />
      <FilterRatings />
      <ActionButton />
    </div>
  );
};

export default PackageFilter;

// Tour type Components
const TourType = () => {
  const [open, setOpen] = useState(true);
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
    <div className="py-8 px-6 border-b-[1px] border-[#E7E6E6]">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="font-inter font-medium text-[18px] leading-27px text-tourHub-title2"
      >
        Tour Type
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-4 space-y-3"
          >
            {demoData.map(({ id, label, value }) => (
              <div className="flex items-center space-x-2" key={id}>
                <Checkbox
                  id={`checkbox-${id}`} // Assign unique id for each checkbox
                  value={value}
                  checked={checked.includes(value)}
                  onCheckedChange={(isChecked) => {
                    setChecked((prev) =>
                      isChecked
                        ? [...prev, value]
                        : prev.filter((acc) => acc !== value)
                    );
                  }}
                />
                <label
                  htmlFor={`checkbox-${id}`} // Associate the label with the correct checkbox
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {label}
                </label>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FilterPrice = () => {
  const [open, setOpen] = useState(true);
  const [value, setValue] = useState([5000, 15000]);
  return (
    <div className=" py-8 px-6 border-b-[1px] border-[#E7E6E6]">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="font-inter font-medium text-[18px] leading-27px text-tourHub-title2"
      >
        Filter Price
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: "auto",
            }}
            exit={{ opacity: 0, height: 0 }}
          >
            <div className="w-full flex justify-end">
              {value[0]} - {value[1]}
            </div>
            <div className="mt-5">
              <RangeSlider
                id="range-slider-green"
                value={value}
                max={50000}
                min={5000}
                onInput={setValue}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FilterRatings = () => {
  const demoData = [
    {
      id: 1,
      label: "1★",
      value: "1",
    },
    {
      id: 2,
      label: "2★",
      value: "2",
    },
    {
      id: 3,
      label: "3★",
      value: "3",
    },
    {
      id: 4,
      label: "4★",
      value: "4",
    },
    {
      id: 4,
      label: "5★",
      value: "5",
    },
  ];
  const [open, setOpen] = useState(false);
  const [checked, setChecked] = useState(demoData[0].value);

  return (
    <div className="py-8 px-6 border-b-[1px] border-[#E7E6E6]">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="font-inter font-medium text-[18px] leading-27px text-tourHub-title2"
      >
        Rating
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-4 flex items-center gap-4 flex-wrap justify-start"
          >
            {demoData.map(({ id, label, value }) => (
              <div
                className="flex items-center space-x-2 bg-green-200 p-3 rounded-12px"
                key={id}
              >
                <Checkbox
                  id={`checkbox-${id}`} // Assign unique id for each checkbox
                  value={value}
                  checked={checked.includes(value)}
                  onCheckedChange={(isChecked) => {
                    setChecked(value);
                  }}
                />
                <label
                  htmlFor={`checkbox-${id}`} // Associate the label with the correct checkbox
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {label}
                </label>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const ActionButton = () => {
  return (
    <div className="py-6 px-6 flex justify-center items-center">
      <Button className="bg-tourHub-green-dark w-full lg:py-6 ">Filter</Button>
    </div>
  );
};
