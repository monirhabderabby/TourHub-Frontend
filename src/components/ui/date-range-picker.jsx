"use client";

import { format, startOfToday } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import * as React from "react";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

export default function DateRangePicker({
    className,
    onDateRangeChange,
    placeholder = "Select date range",
}) {
    const [date, setDate] = React.useState(undefined);
    const today = startOfToday();

    const handleDateChange = (newDate) => {
        setDate(newDate);
        if (onDateRangeChange) {
            const formattedRange =
                newDate && newDate.from
                    ? [
                          format(newDate.from, "yyyy-MM-dd"),
                          newDate.to ? format(newDate.to, "yyyy-MM-dd") : null,
                      ]
                    : [null, null];
            onDateRangeChange(formattedRange);
        }
    };

    const buttonText = date?.from
        ? date.to
            ? `${format(date.from, "MMM dd, yyyy")} - ${format(
                  date.to,
                  "MMM dd, yyyy"
              )}`
            : format(date.from, "MMM dd, yyyy")
        : placeholder;

    return (
        <div className={cn("grid gap-2", className)}>
            <Popover>
                <PopoverTrigger asChild>
                    <Button
                        id="date"
                        variant={"outline"}
                        className={cn(
                            "w-full justify-start text-left font-normal",
                            !date && "text-muted-foreground"
                        )}
                    >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        <span>{buttonText}</span>
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                        initialFocus
                        mode="range"
                        selected={date}
                        onSelect={handleDateChange}
                        numberOfMonths={2}
                        disabled={(date) => date < today}
                        defaultMonth={today}
                    />
                </PopoverContent>
            </Popover>
        </div>
    );
}
