import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const convertFileToUrl = (file) => URL.createObjectURL(file);

export const fileToBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
};

export function convertToISO(dateString) {
  // Convert the input date (e.g., "2024-10-16") to a Date object
  const dateObj = new Date(dateString);

  // Get the current UTC time (hours, minutes, seconds, milliseconds)
  const currentUTC = new Date();
  dateObj.setUTCHours(
    currentUTC.getUTCHours(),
    currentUTC.getUTCMinutes(),
    currentUTC.getUTCSeconds(),
    currentUTC.getUTCMilliseconds()
  );

  // Convert the updated Date object to ISO 8601 format
  return dateObj.toISOString();
}
