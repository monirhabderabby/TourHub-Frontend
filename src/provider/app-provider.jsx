"use client";
import { EdgeStoreProvider } from "@/lib/edgestore";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "sonner";

const AppProvider = ({ children }) => {
  // Create a client
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <EdgeStoreProvider>{children}</EdgeStoreProvider>
      <Toaster />
    </QueryClientProvider>
  );
};

export default AppProvider;
