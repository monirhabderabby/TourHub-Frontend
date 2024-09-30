"use client";

import { Card } from "@/components/ui/card";
import { DollarSign, TicketCheck, Users } from "lucide-react";
import CountUp from "react-countup";

const Overview = () => {
  const data = [
    {
      id: 1,
      name: "Users",
      icon: (
        <Users className="h-10 w-10 items-center rounded-lg p-2 text-tourHub-green-dark bg-tourHub-green-dark/10" />
      ),
      value: 500,
    },
    {
      id: 2,
      name: "Booked",
      icon: (
        <TicketCheck className="h-10 w-10 items-center rounded-lg p-2 text-tourHub-green-dark bg-tourHub-green-dark/10" />
      ),
      value: 133,
    },
    {
      id: 3,
      name: "Sell",
      icon: (
        <DollarSign className="h-10 w-10 items-center rounded-lg p-2 text-tourHub-green-dark bg-tourHub-green-dark/10" />
      ),
      value: 5000,
    },
  ];
  return (
    <div className="relative flex w-full flex-wrap gap-2 md:flex-nowrap">
      {data?.map(({ icon, id, name, value }) => (
        <Card
          className="flex h-24 w-full items-center gap-2 gap-x-3 p-4 rounded-5px shadow-none font-inter"
          key={id}
        >
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
      ))}
    </div>
  );
};

export default Overview;
