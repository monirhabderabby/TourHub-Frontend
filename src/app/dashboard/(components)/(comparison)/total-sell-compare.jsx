"use client";
// Packages
import { useQuery } from "@tanstack/react-query";
import { CircleOff, TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

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

export const description = "A multiple bar chart";

const chartConfig = {
  sell: {
    label: "sell",
    color: "hsl(var(--chart-1))",
  },
  booked: {
    label: "booked",
    color: "hsl(var(--chart-2))",
  },
};

export default function TotalSellCompare() {
  const {
    isLoading,
    data: response,
    isError,
    error,
  } = useQuery({
    queryKey: ["sales-stats"],
    queryFn: () =>
      fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/booking/stats/monthly-sales`
      ).then((res) => res.json()),
  });

  // Get the current month index (0 for January, 9 for October, etc.)
  const currentMonthIndex = new Date().getMonth();

  let content;
  if (isLoading) {
    content = (
      <SkeletonWrapper isLoading={isLoading}>
        <TotalSellCompareCard />
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
      <TotalSellCompareCard
        chartData={filteredData}
        sellStatus={response?.data?.comparison?.sellStatus || ""}
        sellPercentage={response?.data?.comparison?.sellPercentage || 5.2}
      />
    );
  }

  return content;
}

const TotalSellCompareCard = ({ chartData, sellStatus, sellPercentage }) => {
  return (
    <Card className="shadow-none">
      <CardHeader>
        <CardTitle>Bar Chart - Sell</CardTitle>
        <CardDescription>
          {chartData?.length > 0 && chartData[0]?.month} -{" "}
          {chartData?.length > 0 && chartData[chartData?.length - 1]?.month}{" "}
          2024
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar dataKey="sell" fill="var(--color-sell)" radius={4} />
            <Bar dataKey="booked" fill="var(--color-booked)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Trending {sellStatus === "increase" ? "up" : "down"} by 5.
          {sellPercentage}% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total sales report for the last {chartData?.length} months
        </div>
      </CardFooter>
    </Card>
  );
};
