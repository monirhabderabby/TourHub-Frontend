"use client";

import { cn } from "@/lib/utils";
import { ChevronsUpDown, MapPin, Search } from "lucide-react";
import { useState } from "react";
import bgImg from "../../assets/bg.png";
import { Button } from "../ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "../ui/command";
import DateRangePicker from "../ui/date-range-picker";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

const Banner = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [dateRange, setDateRange] = useState([null, null]);

  const handleDateRangeChange = (range) => {
    setDateRange(range);
  };

  const handleSearch = () => {
    // TODO: handle all search functionality
    console.log("City: ", value);
    console.log("Date Range: ", dateRange);
  };

  const cities = [
    {
      value: "machu_picchu",
      label: "Machu Picchu, Peru",
    },
    {
      value: "grand_canyon",
      label: "Grand Canyon, USA",
    },
    {
      value: "great_barrier",
      label: "Great Barrier, Australia",
    },
    {
      value: "santorini",
      label: "Santorini, Greece",
    },
    {
      value: "bora_bora",
      label: "Bora Bora, French",
    },
    {
      value: "banff",
      label: "Banff Park, Canada",
    },
    {
      value: "fiordland",
      label: "Fiordland Park, New Zealand",
    },
    {
      value: "amalfi_coast",
      label: "Amalfi Coast, Italy",
    },
    {
      value: "victoria_falls",
      label: "Victoria Falls, Zambia",
    },
    {
      value: "ha_long_bay",
      label: "Ha Long Bay, Vietnam",
    },
  ];

  return (
    <div
      className="h-[100vh] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgImg.src})` }}
    >
      <div className="container flex justify-center items-center h-full">
        <div className="max-w-3xl">
          <div>
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

                    <div className="w-full bg-white px-3 py-2 rounded-[8px] flex flex-col md:flex-row items-center justify-center md:justify-between gap-2">
                        {/* city or destination field */}
                        <div className="w-full">
                            <Popover open={open} onOpenChange={setOpen}>
                                <PopoverTrigger asChild>
                                    <Button
                                        variant="outline"
                                        role="combobox"
                                        aria-expanded={open}
                                        className="w-full justify-between"
                                    >
                                        {value ? (
                                            cities.find(
                                                (city) => city.value === value
                                            )?.label
                                        ) : (
                                            <span className="text-muted-foreground font-normal">
                                                City or Destination
                                            </span>
                                        )}
                                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-full md:w-[200px] p-0">
                                    <Command>
                                        <CommandInput placeholder="Search city..." />
                                        <CommandList>
                                            <CommandEmpty>
                                                No city found.
                                            </CommandEmpty>
                                            <CommandGroup>
                                                {cities.map((city) => (
                                                    <CommandItem
                                                        key={city.value}
                                                        value={city.value}
                                                        onSelect={(
                                                            currentValue
                                                        ) => {
                                                            setValue(
                                                                currentValue ===
                                                                    value
                                                                    ? ""
                                                                    : currentValue
                                                            );
                                                            setOpen(false);
                                                        }}
                                                    >
                                                        <MapPin
                                                            className={cn(
                                                                "mr-2 h-4 w-4",
                                                                value ===
                                                                    city.value
                                                                    ? "opacity-100"
                                                                    : "opacity-0"
                                                            )}
                                                        />
                                                        {city.label}
                                                    </CommandItem>
                                                ))}
                                            </CommandGroup>
                                        </CommandList>
                                    </Command>
                                </PopoverContent>
                            </Popover>
                        </div>

            {/* date range picker */}
            <DateRangePicker
              onDateRangeChange={handleDateRangeChange}
              placeholder="Choose your date range"
              className={"w-full"}
            />

            {/* Search button */}
            <Button
              onClick={() => handleSearch()}
              className="text-sm bg-tourHub-green-light text-white rounded-md px-3 py-2"
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
