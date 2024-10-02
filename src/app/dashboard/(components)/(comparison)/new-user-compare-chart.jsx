"use client";
// Packages
import { useQuery } from "@tanstack/react-query";
import { CircleOff, TrendingDown, TrendingUp } from "lucide-react";
import { CartesianGrid, Line, LineChart, XAxis } from "recharts";

// Components
import SkeletonWrapper from "@/components/common/SkeletonWrapper";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { TextEffect } from "@/components/ui/text-effect";
import { monthsOrder } from "@/data/stats";

export const description = "A line chart";

// Get the current month index (0 for January, 9 for October, etc.)
const currentMonthIndex = new Date().getMonth();

const chartConfig = {
  users: {
    label: "New Users",
    color: "hsl(var(--chart-1))",
  },
};

export default function NewUserCompare() {
  const {
    isLoading,
    data: response,
    isError,
    error,
  } = useQuery({
    queryKey: ["new-users"],
    queryFn: () =>
      fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/users/stats/monthly-users`
      ).then((res) => res.json()),
  });

  let content;

  if (isLoading) {
    content = (
      <SkeletonWrapper isLoading={isLoading} className="rounded-xl">
        <NewUsersCompareCard />
      </SkeletonWrapper>
    );
  } else if (isError) {
    content = (
      <Card className="shadow-none w-full h-full flex flex-col justify-center items-center">
        <CircleOff className="h-7 w-7 text-red-600" />
        <p className="max-w-[400px] text-center text-14px text-tourHub-gray">
          <TextEffect per="char" preset="fade">
            {error?.message || "something went wrong!"}
          </TextEffect>
        </p>
      </Card>
    );
  } else if (response?.success) {
    const filteredData = (response?.data?.chartData || []).filter(
      (item) => monthsOrder.indexOf(item.month) <= currentMonthIndex
    );
    content = (
      <NewUsersCompareCard
        chartData={filteredData}
        currentMonthStats={response?.data?.lastMonthStats}
      />
    );
  }

  return content;
}

const NewUsersCompareCard = ({ chartData, currentMonthStats }) => {
  const trendingUp = currentMonthStats?.status == "increase";

  const trendingPercentage = currentMonthStats?.percentage;
  return (
    <Card className="shadow-none">
      <CardHeader>
        <CardTitle>New Users</CardTitle>
        <CardDescription>
          {chartData?.length > 0 && chartData[0]?.month} -{" "}
          {chartData?.length > 0 && chartData[chartData?.length - 1]?.month}{" "}
          2024
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Line
              dataKey="users"
              type="natural"
              stroke="var(--color-users)"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Trending {trendingUp ? "up" : "down"} by {trendingPercentage}% this
          month{" "}
          {trendingUp ? (
            <TrendingUp className="h-4 w-4" />
          ) : (
            <TrendingDown className="h-4 w-4" />
          )}
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total new visitors for the last {chartData?.length} months
        </div>
      </CardFooter>
    </Card>
  );
};
