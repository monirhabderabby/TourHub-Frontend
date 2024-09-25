"use client";

// Packages
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

// Components
import { useFilterStore } from "@/store/packageFilter";
import bgImg from "../../assets/bg.png";
import { Button } from "../ui/button";
import DateRangePicker from "../ui/date-range-picker";
import LocationPicker from "../ui/location-picker";

const Banner = () => {
  // Destructure necessary state and setter functions from the filter store
  const {
    startDate, // Selected start date
    endDate, // Selected end date
    setDateRange, // Function to set date range in the store
    setCountry, // Function to set country in the store
    setLocation, // Function to set location (city) in the store
    location, // Current location (city) from the store
    country, // Current country from the store
  } = useFilterStore();

  // Local state to manage the displayed location input (combining city and country)
  const [value, setValue] = useState();

  // Effect to update the local `value` state whenever `location` or `country` changes
  useEffect(() => {
    setValue(location && country ? `${location}, ${country}` : ""); // Concatenates location and country into one string for display
  }, [location, country]);

  const router = useRouter();

  // Handler for date range selection, updates the store with the selected range
  const handleDateRangeChange = (range) => {
    setDateRange(range[0], range[1]);
  };

  // Search button handler, triggers navigation to the packages page
  const handleSearch = () => {
    router.push("/packages");
  };

  return (
    <div
      className="h-[100vh] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgImg.src})` }}
    >
      <div className="container flex justify-center items-center h-full">
        <div className="max-w-3xl">
          <div>
            {/* Title and description text */}
            <h1 className="text-3xl md:text-5xl text-white text-center mb-3">
              Explore the world with a smile
            </h1>
            <p className="text-sm md:text-base font-light md:leading-[28px] text-white text-center mb-4 md:mb-16 max-w-2xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              urna, porttitor rhoncus dolor purus non enim praesent elementum
              facilisis leo
            </p>
          </div>

          {/* Form section for selecting location, date, and triggering search */}
          <div className="w-full bg-white px-3 md:px-5 py-5 rounded-[8px] flex flex-col md:flex-row items-center justify-center md:justify-between gap-4">
            {/* Location picker (City or Destination field) */}
            <div className="w-full">
              <LocationPicker
                value={value} // Current value displayed in the location picker
                setValue={(value) => {
                  setValue(value); // Update local state
                  const arr = value.split(", "); // Split the selected value into city and country
                  const location = arr[0]; // Extract city
                  const country = arr[1]; // Extract country
                  setLocation(location); // Update city in the store
                  setCountry(country); // Update country in the store
                }}
              />
            </div>

            {/* Date range picker component for selecting trip dates */}
            <DateRangePicker
              defaultValue={{
                from: startDate, // Start date from the store
                to: endDate, // End date from the store
              }}
              onDateRangeChange={handleDateRangeChange}
              placeholder="Choose your date range"
              className={"w-full"}
            />

            <Button
              onClick={() => handleSearch()} // Trigger search on click
              className="text-sm bg-tourHub-green-light text-white rounded-md px-3 py-2 w-full hover:bg-tourHub-green-hover"
            >
              <p className="mr-2">Find Trip Now</p>
              <Search />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
