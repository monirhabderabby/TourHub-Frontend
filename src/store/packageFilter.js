import { create } from "zustand";

export const useFilterStore = create((set) => ({
  min: 600,
  max: 5000,
  startDate: new Date().toISOString().split("T")[0],
  endDate: new Date(new Date().setDate(new Date().getDate() + 15))
    .toISOString()
    .split("T")[0], // Date 15 days in the future, formatted as YYYY-MM-DD
  category: "",
  setMinMax: (newMin, newMax) => set((state) => ({ min: newMin, max: newMax })),
  setDateRange: (newStartDate, newEndDate) =>
    set((state) => ({ startDate: newStartDate, endDate: newEndDate })),
  setCategory: (categoryId) =>
    set((state) => {
      // Split the existing category string into an array of IDs and filter out any empty strings
      const arrayOfIds = state.category.split(",").filter(Boolean);
      const exists = arrayOfIds.includes(categoryId); // Check if the category ID already exists

      if (exists) {
        // If the category ID exists, filter it out
        const filteredCategories = arrayOfIds.filter((id) => id !== categoryId);
        return {
          category: filteredCategories.join(","), // Return the updated string
        };
      } else {
        // If it doesn't exist, add the new category ID
        const updatedCategories = Array.from(
          new Set([...arrayOfIds, categoryId])
        ); // Use Set to ensure uniqueness
        return {
          category: updatedCategories.join(","), // Return the updated string
        };
      }
    }),
}));
