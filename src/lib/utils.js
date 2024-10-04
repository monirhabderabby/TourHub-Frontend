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

export function generateInvoiceId() {
  const prefix = "Inv";
  const randomPart = Math.floor(Math.random() * 1000000) // Generate a random number
    .toString() // Convert number to string
    .padStart(6, "0"); // Pad with leading zeros if necessary

  return `${prefix}-${randomPart}`;
}
