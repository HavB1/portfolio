"use client";

import { useQuery } from "@tanstack/react-query";
import { ArrowUpRight } from "lucide-react";
import { useTRPC } from "@/trpc/client";
import { nowBuilding } from "./content";

const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });

function ago(iso: string) {
  const minutes = Math.round((new Date(iso).getTime() - Date.now()) / 60_000);
  if (Math.abs(minutes) < 60) return rtf.format(minutes, "minute");
  const hours = Math.round(minutes / 60);
  if (Math.abs(hours) < 24) return rtf.format(hours, "hour");
  return rtf.format(Math.round(hours / 24), "day");
}

export function NowBuilding() {
  const trpc = useTRPC();
  const { data: commits = [] } = useQuery(trpc.nowBuilding.commits.queryOptions());

  return (
    <>
      <p className="dl-label">Now building</p>
      <a href={nowBuilding.url} target="_blank" rel="noreferrer" className="dl-what">
        {nowBuilding.title}
        <ArrowUpRight aria-hidden="true" size={16} />
      </a>
      {commits.length > 0 && (
        <ol className="dl-commits" aria-label="Latest commits">
          {commits.map((c) => (
            <li key={c.sha}>
              <span className="dl-commit-msg">{c.message}</span>
              {c.date && (
                <time dateTime={c.date} className="dl-commit-time">
                  {ago(c.date)}
                </time>
              )}
            </li>
          ))}
        </ol>
      )}
    </>
  );
}
