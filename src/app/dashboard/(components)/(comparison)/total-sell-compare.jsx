"use client";

import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

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

export const description = "A multiple bar chart";

const chartData = [
  { month: "January", sell: 1866, booked: 80 },
  { month: "February", sell: 3055, booked: 200 },
  { month: "March", sell: 2377, booked: 120 },
  { month: "April", sell: 733, booked: 190 },
  { month: "May", sell: 2099, booked: 130 },
  { month: "June", sell: 2144, booked: 140 },
];

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
  return (
    <Card className="shadow-none">
      <CardHeader>
        <CardTitle>Bar Chart - Sell</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
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
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total sales report for the last 6 months
        </div>
      </CardFooter>
    </Card>
  );
}
