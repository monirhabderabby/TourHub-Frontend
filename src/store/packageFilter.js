import { create } from "zustand";

export const useFilterStore = create((set) => ({
  min: 5,
  max: 4000,
  startDate: "",
  endDate: "",
  category: "",
  starRating: "",
  location: "",
  country: "",
  sortBy: "",
  limit: 10,
  page: 1,
  totalPage: 0,
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
  setRating: (rating) =>
    set((state) => {
      // Split the existing rating string into an array of IDs and filter out any empty strings
      const arrayOfIds = state.starRating.split(",").filter(Boolean);
      const exists = arrayOfIds.includes(rating); // Check if the rating already exists

      if (exists) {
        // If the rating exists, filter it out
        const filteredRating = arrayOfIds.filter((id) => id !== rating);
        return {
          starRating: filteredRating.join(","), // Return the updated string
        };
      } else {
        // If it doesn't exist, add the new category ID
        const updatedRating = Array.from(new Set([...arrayOfIds, rating])); // Use Set to ensure uniqueness
        return {
          starRating: updatedRating.join(","), // Return the updated string
        };
      }
    }),

  setLocation: (location) => set((state) => ({ location })),
  setCountry: (country) => set((state) => ({ country })),
  setSortBy: (value) => set((state) => ({ sortBy: value })),
  setPage: (number) => set((state) => ({ page: number })),
  setTotalPage: (number) => set((state) => ({ totalPage: number })),
  reset: () =>
    set((state) => ({
      min: 50,
      max: 4000,
      startDate: "",
      endDate: "",
      category: "",
      starRating: "",
      location: "",
      country: "",
      sortBy: "",
      limit: 10,
      page: 1,
      totalPage: 0,
    })),
}));
