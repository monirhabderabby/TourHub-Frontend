"use client";
// Package
import { useQuery } from "@tanstack/react-query";
import { CircleAlert, CircleOff, Loader2 } from "lucide-react";

// Component
import SkeletonWrapper from "@/components/common/SkeletonWrapper";
import { Button } from "@/components/ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { TextEffect } from "@/components/ui/text-effect";
import { useFilterStore } from "@/store/packageFilter";
import { AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useEffect } from "react";
import PackageFilterCard from "./package-filter-card";
import PackagesSorting from "./packages_sorting";

const PackagesData = () => {
  const {
    startDate,
    endDate,
    min,
    max,
    location,
    country,
    category,
    starRating,
    sortBy,
    page,
    limit,
    setPage,
    setTotalPage,
    totalPage,
  } = useFilterStore();
  const {
    isLoading,
    data: response,
    isError,
    isFetching,
    error,
  } = useQuery({
    queryKey: [
      "packages",
      min,
      max,
      startDate,
      endDate,
      location,
      country,
      category,
      starRating,
      sortBy,
      page,
      limit,
    ],
    queryFn: () =>
      fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/package?min=${min}&max=${max}&startDate=${startDate}&endDate=${endDate}&location=${location}&country=${country}&category=${category}&starRating=${starRating}&sortBy=${sortBy}&limit=${limit}&page=${page}`
      ).then((res) => res.json()),
  });

  // Set the total number of pages when data is fetched
  useEffect(() => {
    if (response) {
      const respondedTotalpage = response?.meta?.totalPage || 0;
      if (totalPage !== respondedTotalpage) {
        setTotalPage(response?.meta?.totalPage);
      }
    }
  }, [response, setTotalPage, totalPage]);

  // Pagination logic for rendering page numbers
  const handlePageClick = (pageNum) => {
    if (pageNum >= 1 && pageNum <= totalPage) {
      setPage(pageNum);
    }
  };

  useEffect(() => {
    // Scroll to the top of the page on initial load
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Optional: smooth scrolling
    });
  }, [
    min,
    max,
    startDate,
    endDate,
    location,
    country,
    category.starRating,
    sortBy,
    page,
    limit,
  ]);

  let content;

  if (isLoading) {
    content = (
      <div className="w-full flex gap-x-2 justify-center items-center min-h-[60vh]">
        <Loader2 className="h-5 w-5 animate-spin text-tourHub-green-dark" />
        <p className="text-14px text-tourHub-gray">Loading...</p>
      </div>
    );
  } else if (isError) {
    content = (
      <div className="w-full flex flex-col gap-2 justify-center items-center min-h-[60vh] font-inter">
        <CircleOff className="h-7 w-7 text-red-600" />
        <p className="max-w-[400px] text-center text-14px text-tourHub-gray">
          <TextEffect per="char" preset="fade">
            {error.message}
          </TextEffect>
        </p>
      </div>
    );
  } else if (response?.data?.length === 0) {
    content = (
      <div className="w-full flex flex-col gap-2 justify-center items-center min-h-[60vh] font-inter">
        <CircleAlert className="h-5 w-5" />
        <p className="max-w-[400px] text-center text-14px text-tourHub-gray">
          <TextEffect per="char" preset="fade">
            No data available for the selected criteria. Please try different
            filters or check your connection!
          </TextEffect>
        </p>
      </div>
    );
  } else if (response?.data?.length > 0) {
    content = (
      <div className="mt-4 flex flex-col gap-8 h-auto">
        <AnimatePresence>
          {response?.data.map((item) => (
            <SkeletonWrapper isLoading={isFetching} key={item._id}>
              <PackageFilterCard key={item} data={item} />
            </SkeletonWrapper>
          ))}
        </AnimatePresence>
      </div>
    );
  }

  return (
    <div className="p-2">
      <div className="flex flex-col md:flex-row  justify-around md:justify-between md:items-center items-end">
        {response?.data?.length > 0 && (
          <p className="font-inter font-normal text-[14.18px] leading-28px text-tourHub-gray order-2 mt-1">
            {response?.data?.length + " " + "results"}
          </p>
        )}
        <div className="flex items-center justify-between flex-1  w-full  ">
          <PackagesSorting />
          <div className="lg:hidden ">
            <Link href="/packages/filter">
              <Button>Filter</Button>
            </Link>
          </div>
        </div>
      </div>
      {content}
      <div className="mt-5">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                href="#"
                onClick={() => handlePageClick(page - 1)}
                disabled={page === 1}
              />
            </PaginationItem>
            {/* Dynamically render pagination numbers */}
            {Array.from({ length: totalPage }, (_, index) => (
              <PaginationItem key={index + 1}>
                <PaginationLink
                  href="#"
                  onClick={() => handlePageClick(index + 1)}
                  isActive={page === index + 1}
                >
                  {index + 1}
                </PaginationLink>
              </PaginationItem>
            ))}
            <PaginationItem>
              <PaginationNext
                href="#"
                onClick={() => handlePageClick(page + 1)}
                disabled={page === totalPage}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
};

export default PackagesData;
