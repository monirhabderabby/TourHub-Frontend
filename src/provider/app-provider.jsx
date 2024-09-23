import { EdgeStoreProvider } from "@/lib/edgestore";

const AppProvider = ({ children }) => {
  return <EdgeStoreProvider>{children}</EdgeStoreProvider>;
};

export default AppProvider;
