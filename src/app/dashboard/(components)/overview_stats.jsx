"use client";

import SkeletonWrapper from "@/components/common/SkeletonWrapper";
import { Card } from "@/components/ui/card";
import { TextEffect } from "@/components/ui/text-effect";
import { useQuery } from "@tanstack/react-query";
import { AlertCircle, DollarSign, TicketCheck, Users } from "lucide-react";
import CountUp from "react-countup";

const Overview = () => {
  const {
    isLoading,
    isError,
    data: response,
    error,
  } = useQuery({
    queryKey: ["stats"],
    queryFn: () =>
      fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/booking/stats/basic-stats`
      ).then((res) => res.json()),
  });

  if (isError) {
    return (
      <div className="h-[300px] w-full flex justify-center gap-x-2 items-center">
        <div className="flex flex-col justify-center items-center">
          <AlertCircle className="h-6 w-6 text-red-500" />
          <p className="font-inter text-16px text-red-500">
            <TextEffect per="char" preset="fade">
              {error.message}
            </TextEffect>
          </p>
        </div>
      </div>
    );
  }

  const data = [
    {
      id: 1,
      name: "Users",
      icon: (
        <Users className="h-10 w-10 items-center rounded-lg p-2 text-tourHub-green-dark bg-tourHub-green-dark/10" />
      ),
      value: response?.data?.totalUsers,
    },
    {
      id: 2,
      name: "Booked",
      icon: (
        <TicketCheck className="h-10 w-10 items-center rounded-lg p-2 text-tourHub-green-dark bg-tourHub-green-dark/10" />
      ),
      value: response?.data?.totalBookings,
    },
    {
      id: 3,
      name: "Sell",
      icon: (
        <DollarSign className="h-10 w-10 items-center rounded-lg p-2 text-tourHub-green-dark bg-tourHub-green-dark/10" />
      ),
      value: response?.data?.totalPrice,
    },
  ];
  return (
    <div className="relative flex w-full flex-wrap gap-2 md:flex-nowrap">
      {data?.map(({ icon, id, name, value }) => (
        <SkeletonWrapper isLoading={isLoading} key={id}>
          <Card className="flex h-24 w-full items-center gap-2 gap-x-3 p-4 rounded-5px shadow-none font-inter">
            {icon}
            <div className="flex flex-col items-start gap-0">
              <p className="text-muted-foreground text-16px">{name}</p>
              <CountUp
                preserveValue
                redraw={false}
                end={value}
                className="text-2xl"
              />
            </div>
          </Card>
        </SkeletonWrapper>
      ))}
    </div>
  );
};

export default Overview;
