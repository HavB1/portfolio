"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useQuery } from "@tanstack/react-query";
import { useTRPC } from "@/trpc/client";
import type {
  ContributionData,
  ContributionWeek,
  ContributionDay,
} from "@/trpc/routers/github";
import { Skeleton } from "@/components/ui/skeleton";

const currentYear = new Date().getFullYear();
const years = Array.from({ length: 5 }, (_, i) => currentYear - i);

function LoadingSkeleton() {
  return (
    <div className="w-full flex justify-center">
      <Card className="w-full bg-gradient-to-br from-white/80 to-blue-50/60 dark:from-slate-900/80 dark:to-blue-900/60 backdrop-blur-md border border-blue-100 dark:border-blue-900 shadow-2xl rounded-2xl p-0 overflow-visible">
        <CardHeader className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pb-6 pt-8 px-8">
          <div>
            <Skeleton className="h-8 w-48 mb-2" />
            <Skeleton className="h-5 w-32" />
          </div>
          <div className="flex flex-col items-end gap-1">
            <Skeleton className="h-4 w-8 mb-1" />
            <Skeleton className="h-10 w-[120px]" />
          </div>
        </CardHeader>
        <CardContent className="px-8 pb-8 pt-0">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2 mb-2">
              <Skeleton className="h-6 w-48" />
              <div className="flex items-center gap-2">
                <Skeleton className="h-4 w-8" />
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Skeleton key={i} className="w-3 h-3 rounded" />
                  ))}
                </div>
                <Skeleton className="h-4 w-8" />
              </div>
            </div>
            <div className="relative overflow-x-auto">
              <div className="absolute -top-6 left-8 right-0 flex justify-between text-xs text-gray-400 dark:text-gray-500 font-medium select-none pointer-events-none">
                {[...Array(12)].map((_, i) => (
                  <Skeleton
                    key={i}
                    className="h-4 w-8"
                    style={{ marginLeft: i === 0 ? "0" : "auto" }}
                  />
                ))}
              </div>
              <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between text-xs text-gray-400 dark:text-gray-500 font-medium select-none pointer-events-none h-[110px] py-1">
                {[...Array(3)].map((_, i) => (
                  <Skeleton key={i} className="h-4 w-8" />
                ))}
              </div>
              <div className="grid grid-cols-53 gap-1 pl-8 pt-2 pb-2">
                {[...Array(53)].map((_, weekIndex) => (
                  <div key={weekIndex} className="flex flex-col gap-1">
                    {[...Array(7)].map((_, dayIndex) => (
                      <Skeleton key={dayIndex} className="w-4 h-4 rounded-md" />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default function GitHubContributions() {
  const trpc = useTRPC();
  const [selectedYear, setSelectedYear] = useState(currentYear);
  const [tooltip, setTooltip] = useState<{
    x: number;
    y: number;
    text: string;
  } | null>(null);

  const { data: contributions, isLoading } = useQuery(
    trpc.github.getContributions.queryOptions(
      {
        year: selectedYear,
      },
      {
        enabled: !!selectedYear,
      }
    )
  );

  const getColorClass = (count: number) => {
    if (count === 0)
      return "bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700";
    if (count <= 3)
      return "bg-green-100 dark:bg-green-900 border border-green-200 dark:border-green-900";
    if (count <= 6)
      return "bg-green-200 dark:bg-green-800 border border-green-300 dark:border-green-800";
    if (count <= 9)
      return "bg-green-300 dark:bg-green-700 border border-green-400 dark:border-green-700";
    return "bg-green-400 dark:bg-green-600 border border-green-500 dark:border-green-600";
  };

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const monthLabels = Array.from({ length: 12 }, (_, i) => {
    const monthIndex = (i + 1) % 12;
    return months[monthIndex];
  });

  if (isLoading) {
    return <LoadingSkeleton />;
  }

  if (!contributions) {
    return <div>No contributions data available</div>;
  }

  return (
    <div className="w-full flex justify-center">
      <Card className="w-full  bg-gradient-to-br from-white/80 to-blue-50/60 dark:from-slate-900/80 dark:to-blue-900/60 backdrop-blur-md border border-blue-100 dark:border-blue-900 shadow-2xl rounded-2xl p-0 overflow-visible">
        <CardHeader className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pb-6 pt-8 px-8">
          <div>
            <CardTitle className="text-3xl font-extrabold text-gray-900 dark:text-white mb-1">
              GitHub Activity
            </CardTitle>
            <div className="text-gray-500 dark:text-gray-300 text-base font-normal">
              My journey, visualized.
            </div>
          </div>
          <div className="flex flex-col items-end gap-1">
            <label
              htmlFor="year-select"
              className="text-xs text-gray-500 dark:text-gray-400 mb-1"
            >
              Year
            </label>
            <Select
              value={selectedYear.toString()}
              onValueChange={(value) => setSelectedYear(parseInt(value))}
            >
              <SelectTrigger
                id="year-select"
                className="w-[120px] bg-white/80 dark:bg-slate-800/80 border border-gray-200 dark:border-gray-700 shadow-sm"
              >
                <SelectValue placeholder="Select year" />
              </SelectTrigger>
              <SelectContent>
                {years.map((year) => (
                  <SelectItem key={year} value={year.toString()}>
                    {year}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent className="px-8 pb-8 pt-0">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2 mb-2">
              <span className="text-lg font-semibold text-blue-700 dark:text-blue-200">
                {contributions.totalContributions.toLocaleString()}{" "}
                contributions in {selectedYear}
              </span>
              <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                <span>Less</span>
                <div className="flex gap-1">
                  <div className="w-3 h-3 rounded border bg-gray-100 dark:bg-gray-800 border-gray-200 dark:border-gray-700"></div>
                  <div className="w-3 h-3 rounded border bg-green-100 dark:bg-green-900 border-green-200 dark:border-green-900"></div>
                  <div className="w-3 h-3 rounded border bg-green-200 dark:bg-green-800 border-green-300 dark:border-green-800"></div>
                  <div className="w-3 h-3 rounded border bg-green-300 dark:bg-green-700 border-green-400 dark:border-green-700"></div>
                  <div className="w-3 h-3 rounded border bg-green-400 dark:bg-green-600 border-green-500 dark:border-green-600"></div>
                </div>
                <span>More</span>
              </div>
            </div>
            <div className="relative overflow-x-auto">
              <div className="absolute -top-6 left-8 right-0 flex justify-between text-xs text-gray-400 dark:text-gray-500 font-medium select-none pointer-events-none">
                {monthLabels.map((month, index) => (
                  <span
                    key={month}
                    style={{ marginLeft: index === 0 ? "0" : "auto" }}
                  >
                    {month}
                  </span>
                ))}
              </div>
              <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between text-xs text-gray-400 dark:text-gray-500 font-medium select-none pointer-events-none h-[110px] py-1">
                {["Mon", "Wed", "Fri"].map((day) => (
                  <span key={day}>{day}</span>
                ))}
              </div>
              <div className="grid grid-cols-53 gap-1 pl-8 pt-2 pb-2">
                {contributions.weeks.map(
                  (week: ContributionWeek, weekIndex: number) => (
                    <div key={weekIndex} className="flex flex-col gap-1">
                      {week.contributionDays.map(
                        (day: ContributionDay, dayIndex: number) => (
                          <div
                            key={dayIndex}
                            className={`w-4 h-4 rounded-[3.5px] shadow-sm transition-all duration-200 cursor-pointer ${getColorClass(
                              day.contributionCount
                            )}`}
                            onMouseEnter={(e) => {
                              const rect = (
                                e.target as HTMLElement
                              ).getBoundingClientRect();
                              setTooltip({
                                x: rect.left + rect.width / 2,
                                y: rect.top - 8,
                                text: `${day.contributionCount} contribution${
                                  day.contributionCount !== 1 ? "s" : ""
                                } on ${day.date}`,
                              });
                            }}
                            onMouseLeave={() => setTooltip(null)}
                          />
                        )
                      )}
                    </div>
                  )
                )}
              </div>
              {tooltip && (
                <div
                  className="fixed z-50 px-3 py-2 rounded-lg shadow-lg bg-white dark:bg-slate-800 text-sm text-gray-800 dark:text-gray-100 border border-gray-200 dark:border-gray-700 pointer-events-none animate-fade-in"
                  style={{
                    left: tooltip.x,
                    top: tooltip.y,
                    transform: "translate(-50%, -100%)",
                  }}
                >
                  {tooltip.text}
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
