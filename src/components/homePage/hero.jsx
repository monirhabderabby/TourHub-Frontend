"use client";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import Image from "next/image";
import * as React from "react";

const HeroPage = () => {
  const [date, setDate] = React.useState();

  return (
    <section className="  ">
      <Image
        src="https://utfs.io/f/soyLwyt7O15Dn7dbSyMi8o7jnKpG6aumseScIqdlgZwFBhEy"
        alt="Description of my image"
        fill
        style={{ objectFit: "cover" }}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />

      <div className=" absolute  text-white top-28 sm:top-1/3 z-10 flex flex-col justify-center items-center">
        <h1 className=" md:text-6xl text-center text-3xl">
          Explore the world with a smile
        </h1>
        <p className="  text-center md:px-56 py-2 md:leading-7 px-12 leading-5 text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis, lectus magna fringilla urna,
          porttitor rhoncus dolor purus non enim praesent elementum facilisis
          leo,
        </p>
        <div
          className=" bg-white text-gray-800 md:w-[550px]   md:mt-12  md:text-xs mt-10
         text-[8px] rounded-lg w-[230px] md:px-8 mx-auto py-3"
        >
          <div className=" flex justify-center items-center gap-5 flex-col md:flex-row ">
            <div className="w-[200px] text-xs text-muted-foreground  text-start">
              <Select>
                <SelectTrigger className=" text-xs">
                  <SelectValue
                    placeholder="City or Destination"
                    className=" text-xs"
                  />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="apple"></SelectItem>
                    <SelectItem value="banana">Thiland</SelectItem>
                    <SelectItem value="blueberry">France</SelectItem>
                    <SelectItem value="grapes">UK</SelectItem>
                    <SelectItem value="pineapple">USA</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "w-[200px] justify-start text-left font-normal",
                      !date && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? (
                      format(date, "PPP")
                    ) : (
                      <span className=" text-xs">Date of stay</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>

            <div className="  w-[200px]  flex ">
              <Button className=" text-xs bg-tourHub-green-light  text-white rounded-md  px-3 py-2">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z"
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <p className=" ml-2">Find Trip Now</p>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroPage;
