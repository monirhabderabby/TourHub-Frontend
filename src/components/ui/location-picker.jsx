"use client";
// Packages
import { AnimatePresence } from "framer-motion";
import { ChevronsUpDown, MapPin } from "lucide-react";
import { useState } from "react";

// Location
import { cn } from "@/lib/utils";
import { Button } from "./button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "./command";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";

const cities = [
  {
    value: "Machu Picchu, Peru",
    label: "Machu Picchu, Peru",
  },
  {
    value: "Grand Canyon, USA",
    label: "Grand Canyon, USA",
  },
  {
    value: "Great Barrier, Australia",
    label: "Great Barrier, Australia",
  },
  {
    value: "Santorini, Greece",
    label: "Santorini, Greece",
  },
  {
    value: "Bora Bora, French",
    label: "Bora Bora, French",
  },
  {
    value: "Banff Park, Canada",
    label: "Banff Park, Canada",
  },
  {
    value: "Fiordland Park, New Zealand",
    label: "Fiordland Park, New Zealand",
  },
  {
    value: "Amalfi Coast, Italy",
    label: "Amalfi Coast, Italy",
  },
  {
    value: "Victoria Falls, Zambia",
    label: "Victoria Falls, Zambia",
  },
  {
    value: "Ha Long Bay, Vietnam",
    label: "Ha Long Bay, Vietnam",
  },
];

const LocationPicker = ({ value, setValue }) => {
  const [open, setOpen] = useState();
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full min-w-[200px] justify-between font-inter font-normal"
        >
          <AnimatePresence>
            {value ? (
              <span className="flex items-center gap-x-1">
                {cities.find((city) => city.value === value)?.label}
              </span>
            ) : (
              <span className="text-muted-foreground font-normal">
                City or Destination
              </span>
            )}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </AnimatePresence>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full  p-0">
        <Command>
          <CommandInput placeholder="Search city..." />
          <CommandList>
            <CommandEmpty>No city found.</CommandEmpty>
            <CommandGroup>
              {cities.map((city, index) => (
                <CommandItem
                  key={index}
                  value={city.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                >
                  <MapPin
                    className={cn(
                      "mr-2 h-5 w-4 text-tourHub-green-dark",
                      value === city.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  <span className="font-inter font-normal text-14px">
                    {city.label}
                  </span>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default LocationPicker;
