"use client";
// Packages
import { useQuery } from "@tanstack/react-query";
import { AnimatePresence } from "framer-motion";
import { ChevronsUpDown, MapPin } from "lucide-react";
import { useState } from "react";

// Location
import { cn } from "@/lib/utils";
import SkeletonWrapper from "../common/SkeletonWrapper";
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
import { TextEffect } from "./text-effect";

const LocationPicker = ({ value, setValue }) => {
  const {
    isLoading,
    isFetching,
    isRefetching,
    data: response,
    isError,
  } = useQuery({
    queryKey: ["location-country"],
    queryFn: () =>
      fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/package/location-country`
      ).then((res) => res.json()),
    staleTime: 300000,
    cacheTime: 300000,
  });

  const loading = isLoading || isFetching || isRefetching;

  let content;

  if (loading) {
    content = (
      <SkeletonWrapper isLoading={loading}>
        <RenderLocation value={value} setValue={setValue} />
      </SkeletonWrapper>
    );
  } else if (isError) {
    content = (
      <Popover>
        <PopoverTrigger>
          <Button
            className="w-full min-w-[200px] font-inter"
            variant="destructive"
          >
            <TextEffect per="char" preset="fade">
              Error happened!
            </TextEffect>
          </Button>
        </PopoverTrigger>
      </Popover>
    );
  } else if (response?.data?.length === 0) {
    content = (
      <Popover>
        <PopoverTrigger className="w-full">
          <Button
            variant="outline"
            className="w-full min-w-[200px]  font-inter"
          >
            No location found!
          </Button>
        </PopoverTrigger>
      </Popover>
    );
  } else if (response?.data?.length !== 0) {
    const cities = response?.data?.map((item) => ({
      label: item,
      value: item,
    }));

    content = (
      <RenderLocation value={value} setValue={setValue} data={cities} />
    );
  }

  return content;
};

export default LocationPicker;

const RenderLocation = ({ value, setValue, data }) => {
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
                {data?.find((city) => city.value === value)?.label}
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
              {data?.map((city, index) => (
                <CommandItem
                  key={city.value || `city-${index}`}
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
