"use client";

import { useState } from "react";
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
import type { ContributionWeek, ContributionDay } from "@/trpc/routers/github";
import { Skeleton } from "@/components/ui/skeleton";
import { motion } from "motion/react";

const ACCENT = "#FFD166";
const BG_GRADIENT =
  "bg-gradient-to-br from-[#23243a] via-[#36394F] to-[#23243a]";

const currentYear = new Date().getFullYear();
const years = Array.from({ length: 5 }, (_, i) => currentYear - i);

function LoadingSkeleton() {
  return (
    <section className="w-full flex justify-center">
      <div className="px-0 pb-8 pt-0">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2 mb-2">
            <Skeleton className="h-4 w-[22ch] bg-[var(--accent-color,#FFD166)]/60" />
            <div className="flex items-center gap-2">
              <Skeleton className="h-4 w-8 bg-gray-700" />
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Skeleton
                    key={i}
                    className={`w-3 h-3 rounded ${
                      i === 4
                        ? "bg-[var(--accent-color,#FFD166)]"
                        : "bg-gray-700"
                    }`}
                  />
                ))}
              </div>
              <Skeleton className="h-4 w-8 bg-gray-700" />
            </div>
          </div>
          <div className="relative overflow-x-auto">
            <div className="absolute -top-6 left-8 right-0 flex justify-between text-xs select-none pointer-events-none">
              {[...Array(12)].map((_, i) => (
                <Skeleton
                  key={i}
                  className="h-4 w-8 bg-gray-700"
                  style={{ marginLeft: i === 0 ? "0" : "auto" }}
                />
              ))}
            </div>
            <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between text-xs select-none pointer-events-none h-[110px] py-1">
              {[...Array(3)].map((_, i) => (
                <Skeleton key={i} className="h-4 w-8 bg-gray-700" />
              ))}
            </div>
            <div className="grid grid-cols-53 gap-1 pl-8 pt-2 pb-2">
              {[...Array(53)].map((_, weekIndex) => (
                <div key={weekIndex} className="flex flex-col gap-1">
                  {[...Array(7)].map((_, dayIndex) => (
                    <Skeleton
                      key={dayIndex}
                      className="w-4 h-4 rounded-[3.5px] bg-gray-700"
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </section>
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
    if (count === 0) return "bg-gray-700 border border-gray-600";
    if (count <= 3) return "bg-yellow-100/80 border border-yellow-200/80";
    if (count <= 6) return "bg-yellow-200/80 border border-yellow-300/80";
    if (count <= 9) return "bg-yellow-300/80 border border-yellow-400/80";
    return "bg-[var(--accent-color,#FFD166)] border border-yellow-400/90";
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

  return (
    <section
      className={`relative py-24 px-4 ${BG_GRADIENT} rounded-2xl shadow-xl`}
    >
      {/* Subtle pattern overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='40' height='40' fill='%23FFD166' fill-opacity='0.07'/%3E%3C/svg%3E\")",
        }}
      />
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-extrabold text-white text-center mb-4 tracking-tight"
        >
          GitHub Activity
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg text-gray-300 text-center mb-12 max-w-2xl mx-auto"
        >
          My journey, visualized.
        </motion.p>
        <div className="w-full flex justify-center">
          <Card className="w-full bg-[#23243a]/80 border-none shadow-xl rounded-2xl p-0 overflow-visible">
            <CardHeader className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pb-6 pt-8 px-8">
              <div>
                <CardTitle className="text-2xl font-bold text-white mb-1">
                  Contributions
                </CardTitle>
                <div className="text-gray-400 text-base font-normal">
                  Select a year to view your GitHub activity.
                </div>
              </div>
              <div className="flex items-center gap-2">
                <label htmlFor="year-select" className="text-xs text-gray-400">
                  Year
                </label>
                <Select
                  value={selectedYear.toString()}
                  onValueChange={(value) => setSelectedYear(parseInt(value))}
                >
                  <SelectTrigger
                    id="year-select"
                    className="w-[120px] bg-[#23243a]/80 border border-gray-700 shadow-sm text-white"
                  >
                    <SelectValue placeholder="Select year" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#23243a]">
                    {years.map((year) => (
                      <SelectItem
                        key={year}
                        value={year.toString()}
                        className="text-white"
                      >
                        {year}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </CardHeader>
            <CardContent className="px-8 pb-8 pt-0">
              {isLoading ? (
                <LoadingSkeleton />
              ) : contributions ? (
                <div className="flex flex-col gap-6 w-full">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2 mb-2">
                    <span className="text-lg font-semibold text-[var(--accent-color,#FFD166)]">
                      {contributions.totalContributions.toLocaleString()}{" "}
                      contributions in {selectedYear}
                    </span>
                    <div className="flex items-center gap-2 text-xs text-gray-400">
                      <span>Less</span>
                      <div className="flex gap-1">
                        <div className="w-3 h-3 rounded border bg-gray-700 border-gray-600"></div>
                        <div className="w-3 h-3 rounded border bg-yellow-100/80 border-yellow-200/80"></div>
                        <div className="w-3 h-3 rounded border bg-yellow-200/80 border-yellow-300/80"></div>
                        <div className="w-3 h-3 rounded border bg-yellow-300/80 border-yellow-400/80"></div>
                        <div className="w-3 h-3 rounded border bg-[var(--accent-color,#FFD166)] border-yellow-400/90"></div>
                      </div>
                      <span>More</span>
                    </div>
                  </div>
                  <div className="relative w-full overflow-x-auto  px-8">
                    <div className="absolute -top-6 left-8 right-0 flex justify-between text-xs text-gray-400 font-medium select-none pointer-events-none min-w-4xl">
                      {monthLabels.map((month, index) => (
                        <span
                          key={month}
                          style={{ marginLeft: index === 0 ? "0" : "auto" }}
                        >
                          {month}
                        </span>
                      ))}
                    </div>
                    <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between text-xs text-gray-400 font-medium select-none pointer-events-none h-[110px] py-1">
                      {["Mon", "Wed", "Fri"].map((day) => (
                        <span key={day}>{day}</span>
                      ))}
                    </div>
                    <div className="grid grid-cols-53 gap-1 pl-8 pt-2 pb-2 min-w-5xl">
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
                                      text: `${
                                        day.contributionCount
                                      } contribution${
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
                        className="fixed z-50 px-3 py-2 rounded-lg shadow-lg bg-[#23243a] text-sm text-white border border-gray-700 pointer-events-none animate-fade-in"
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
              ) : null}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
