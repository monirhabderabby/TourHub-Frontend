"use client";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import MultiSelectComboboxCreate from "@/components/ui/multi-select-combobox-create";
import { memo } from "react";

const IncludeExcludePicker = ({ form, selectedValues, fieldName }) => {
  console.log("render", fieldName, "picker");
  const featuresData = [
    { value: "Guided Tours", label: "Guided Tours" },
    { value: "Meals", label: "Meals" },
    { value: "Accommodation", label: "Accommodation" },
    { value: "Flights", label: "Flights" },
    { value: "Personal Expenses", label: "Personal Expenses" },
  ];

  let preparedData;

  if (selectedValues?.length > 0) {
    const mergedArray = [
      ...featuresData.map((item) => item.label),
      ...selectedValues,
    ];

    const data = [...new Set(mergedArray)];
    preparedData = data?.map((item) => ({ value: item, label: item }));
  } else {
    preparedData = featuresData;
  }

  return (
    <FormField
      control={form.control}
      name={fieldName}
      render={({ field }) => (
        <FormItem>
          <FormLabel>Included features</FormLabel>
          <FormControl>
            <MultiSelectComboboxCreate
              selectedValues={field.value}
              onChange={field.onChange}
              data={preparedData}
              placeholder="Select features"
              searchPlaceholder="Search feature..."
              emptyMessage={"No feature found."}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default memo(IncludeExcludePicker);
