"use client";

import { Check, ChevronsUpDown, X } from "lucide-react";
import * as React from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

export default function MultiSelectCombobox({
    selectedValues = [],
    onChange,
    data,
    placeholder,
    searchPlaceholder,
    emptyMessage,
}) {
    const [open, setOpen] = React.useState(false);
    const [searchQuery, setSearchQuery] = React.useState("");

    const filteredData = React.useMemo(() => {
        return data.filter((d) =>
            d.label.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }, [searchQuery, data]);

    const handleSelect = (currentValue) => {
        onChange(
            selectedValues.includes(currentValue)
                ? selectedValues.filter((value) => value !== currentValue)
                : [...selectedValues, currentValue]
        );
    };

    const handleRemove = (valueToRemove) => {
        onChange(selectedValues.filter((value) => value !== valueToRemove));
    };

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className={cn(
                        "w-full justify-between font-normal",
                        selectedValues.length === 0 && "text-muted-foreground"
                    )}
                >
                    {selectedValues.length > 0
                        ? `${selectedValues.length} selected`
                        : placeholder}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[300px] p-0">
                <Command shouldFilter={false}>
                    <CommandInput
                        placeholder={searchPlaceholder}
                        value={searchQuery}
                        onValueChange={setSearchQuery}
                    />
                    <CommandList>
                        <CommandEmpty>{emptyMessage}</CommandEmpty>
                        <CommandGroup>
                            {filteredData.map((data) => (
                                <CommandItem
                                    key={data.value}
                                    value={data.value}
                                    onSelect={handleSelect}
                                >
                                    <Check
                                        className={cn(
                                            "mr-2 h-4 w-4",
                                            selectedValues.includes(data.value)
                                                ? "opacity-100"
                                                : "opacity-0"
                                        )}
                                    />
                                    {data.label}
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
            <div className="flex flex-wrap gap-2 mt-2">
                {selectedValues.map((value) => {
                    const fieldValue = data.find((f) => f.value === value);
                    return fieldValue ? (
                        <Badge
                            key={value}
                            variant="secondary"
                            className="flex items-center gap-1"
                        >
                            {fieldValue.label}
                            <X
                                className="h-3 w-3 cursor-pointer"
                                onClick={() => handleRemove(value)}
                            />
                        </Badge>
                    ) : null;
                })}
            </div>
        </Popover>
    );
}
