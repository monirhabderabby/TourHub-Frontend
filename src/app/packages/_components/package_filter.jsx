"use client";
// Packages
import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useState } from "react";
import RangeSlider from "react-range-slider-input";

// Components
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import DateRangePicker from "@/components/ui/date-range-picker";

import { useFilterStore } from "@/store/packageFilter";
// CSS
import { useQuery } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";
import "react-range-slider-input/dist/style.css";

const PackageFilter = () => {
  return (
    <div className="w-full rounded-12px border-[1px] border-[#E7E6E6]">
      <DatePicker />
      <TourType />
      <FilterPrice />
      <FilterRatings />
      <ActionButton />
    </div>
  );
};

export default PackageFilter;

const DatePicker = () => {
  const { startDate, endDate, setDateRange } = useFilterStore();

  const handleDateRangeChange = useCallback(
    (range) => {
      setDateRange(range[0], range[1]);
    },
    [startDate, endDate]
  );
  return (
    <div className="bg-tourHub-green-dark rounded-t-12px py-8 px-6">
      <h5 className="text-white font-inter font-medium text-14px leading-28px">
        When you are travelling?
      </h5>
      <DateRangePicker
        onDateRangeChange={handleDateRangeChange}
        placeholder="Choose your date range"
        className="mt-4 h-[45px]"
        defaultValue={{
          from: startDate,
          to: endDate,
        }}
      />
    </div>
  );
};

// Tour type Components
const TourType = () => {
  // Fetch all categories from the API
  const {
    data: response,
    isLoading,
    isFetching,
    isError,
    error,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: () =>
      fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/category`).then(
        (res) => res.json()
      ),
  });

  const { category, setCategory } = useFilterStore(); // Zustand store for category state
  const [open, setOpen] = useState(true); // State for dropdown visibility
  const [checked, setChecked] = useState(category.split(",")); // State for selected checkboxes

  // Convert fetched data into a more usable format
  const convertedData =
    response?.data?.map((item) => ({
      id: item._id,
      label: item.name,
      value: item._id,
    })) || []; // Default to empty array if response is undefined

  // Handle checkbox change events
  const handleCheckboxChange = (value) => {
    const isChecked = checked.includes(value); // Check if the value is already selected
    const updatedChecked = isChecked
      ? checked.filter((id) => id !== value) // Remove from checked if already selected
      : [...checked, value]; // Add to checked if not selected

    setChecked(updatedChecked); // Update local state
    setCategory(value); // Update Zustand store with comma-separated values
  };

  // Conditional rendering based on the query state
  let content;

  if (isLoading || isFetching) {
    // Show loader while data is loading
    content = (
      <div className="py-8 px-6 border-b-[1px] border-[#E7E6E6] flex justify-center items-center">
        <Loader2 className="animate-spin h-5 w-5" />
      </div>
    );
  } else if (isError) {
    // Show error message if there was an error fetching data
    content = (
      <div className="py-8 px-6 border-b-[1px] border-[#E7E6E6] text-14px text-red-600">
        {error.message}
      </div>
    );
  } else if (convertedData.length === 0) {
    // Show message if no data is found
    content = (
      <div className="py-8 px-6 border-b-[1px] border-[#E7E6E6] text-14px">
        No tour categories available. Please check back later or try again. If
        the issue persists, contact support for assistance.
      </div>
    );
  } else {
    // Render categories if data is available
    content = (
      <div className="py-8 px-6 border-b-[1px] border-[#E7E6E6]">
        <button
          onClick={() => setOpen((prev) => !prev)} // Toggle dropdown visibility
          className="font-inter font-medium text-[18px] leading-27px text-tourHub-title2"
        >
          Tour Type
        </button>
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }} // Initial state for animation
              animate={{ opacity: 1, height: "auto" }} // Animate to visible state
              exit={{ opacity: 0, height: 0 }} // Animate back to hidden state
              className="mt-4 space-y-3"
            >
              {convertedData.map(({ id, label, value }) => (
                <div className="flex items-center space-x-2" key={id}>
                  <Checkbox
                    id={`checkbox-${id}`} // Assign unique id for each checkbox
                    value={value}
                    checked={checked.includes(value)} // Determine if the checkbox is checked
                    onCheckedChange={(isChecked) => {
                      handleCheckboxChange(value); // Update checked state on change
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
  }

  return content; // Return the rendered content
};

const FilterPrice = () => {
  const [open, setOpen] = useState(true); // State to control whether the filter panel is open or closed
  const { min, max, setMinMax } = useFilterStore(); // Extract min, max, and setMinMax function from the store

  return (
    <div className="py-8 px-6 border-b-[1px] border-[#E7E6E6]">
      <button
        onClick={() => setOpen((prev) => !prev)} // Toggle the filter panel on button click
        className="font-inter font-medium text-[18px] leading-27px text-tourHub-title2"
      >
        Filter Price
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
              height: 0, // Start with the panel being collapsed and invisible
            }}
            animate={{
              opacity: 1,
              height: "auto", // Animate the panel to be fully expanded and visible
            }}
            exit={{ opacity: 0, height: 0 }} // Collapse the panel when closed
          >
            <div className="w-full flex justify-end">
              {min} - {max} {/* Display the current min and max price */}
            </div>
            <div className="mt-5">
              <RangeSlider
                id="range-slider-green"
                value={[min, max]} // Pass current min and max as slider values
                max={50000} // Maximum value of the slider
                min={5000} // Minimum value of the slider
                onInput={(value) => {
                  setMinMax(value[0], value[1]); // Update min and max when the slider values change
                }}
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
      id: 5,
      label: "5★",
      value: "5",
    },
  ];
  const { starRating, setRating } = useFilterStore();
  const [open, setOpen] = useState(false);
  const [checked, setChecked] = useState(starRating.split(","));

  console.log(starRating);

  // Handle checkbox change events
  const handleCheckboxChange = (value) => {
    const isChecked = checked.includes(value); // Check if the value is already selected
    const updatedChecked = isChecked
      ? checked.filter((id) => id !== value) // Remove from checked if already selected
      : [...checked, value]; // Add to checked if not selected

    setChecked(updatedChecked); // Update local state
    setRating(value); // Update Zustand store with comma-separated values
  };

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
                    handleCheckboxChange(value); // Update checked state on change
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
