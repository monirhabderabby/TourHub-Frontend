"use client";

import { Check, ChevronsUpDown, PlusCircle, X } from "lucide-react";
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

export default function MultiSelectComboboxCreate({
    selectedValues,
    onChange,
    data,
    placeholder,
    searchPlaceholder,
    emptyMessage,
}) {
    const [open, setOpen] = React.useState(false);
    const [finalData, setFinalData] = React.useState(data);
    const [search, setSearch] = React.useState("");

    const filteredData = React.useMemo(() => {
        return finalData.filter((d) =>
            d.label.toLowerCase().includes(search.toLowerCase())
        );
    }, [finalData, search]);

    const handleSelect = (currentValue) => {
        const newSelectedValues = selectedValues.includes(currentValue)
            ? selectedValues.filter((value) => value !== currentValue)
            : [...selectedValues, currentValue];
        onChange(newSelectedValues);
    };

    const handleRemove = (valueToRemove) => {
        onChange(selectedValues.filter((value) => value !== valueToRemove));
    };

    const handleCreateNew = () => {
        const newItem = search.trim();
        if (newItem && !finalData.some((d) => d.value === newItem)) {
            const newData = {
                value: newItem,
                label: newItem,
            };
            setFinalData((prev) => [...prev, newData]);
            onChange([...selectedValues, newItem]);
            setSearch("");
            setOpen(false);
        }
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
            <PopoverContent className="w-full p-0">
                <Command shouldFilter={false}>
                    <CommandInput
                        placeholder={searchPlaceholder}
                        value={search}
                        onValueChange={setSearch}
                    />
                    <CommandList>
                        <CommandEmpty>
                            {emptyMessage}
                            <Button
                                variant="outline"
                                size="sm"
                                className="mt-2 w-full"
                                onClick={handleCreateNew}
                            >
                                <PlusCircle className="mr-2 h-4 w-4" />
                                Create &quot;{search}&quot;
                            </Button>
                        </CommandEmpty>
                        <CommandGroup>
                            {filteredData.map((d) => (
                                <CommandItem
                                    key={d.value}
                                    value={d.value}
                                    onSelect={handleSelect}
                                >
                                    <Check
                                        className={cn(
                                            "mr-2 h-4 w-4",
                                            selectedValues.includes(d.value)
                                                ? "opacity-100"
                                                : "opacity-0"
                                        )}
                                    />
                                    {d.label}
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
            <div className="flex flex-wrap gap-2 mt-2">
                {selectedValues.map((value) => {
                    const selectedData = finalData.find(
                        (f) => f.value === value
                    );
                    return selectedData ? (
                        <Badge
                            key={value}
                            variant="secondary"
                            className="flex items-center gap-1"
                        >
                            {selectedData.label}
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
