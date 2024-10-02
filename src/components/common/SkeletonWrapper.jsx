import { cn } from "@/lib/utils";
import { Skeleton } from "../ui/skeleton";

const SkeletonWrapper = ({
  children,
  isLoading,
  fullWidth = true,
  className,
}) => {
  if (!isLoading) return children;
  return (
    <Skeleton className={cn(fullWidth && "w-full rounded-12px", className)}>
      <div className="opacity-0">{children}</div>
    </Skeleton>
  );
};

export default SkeletonWrapper;
