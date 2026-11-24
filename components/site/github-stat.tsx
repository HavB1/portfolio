"use client";

import { useQuery } from "@tanstack/react-query";
import { useTRPC } from "@/trpc/client";

const year = new Date().getFullYear();
const bars = 24;

export function GitHubStat() {
  const trpc = useTRPC();
  const { data, isError } = useQuery(
    trpc.github.getContributions.queryOptions({ year }),
  );

  const weekly = (data?.weeks ?? []).map((w) =>
    w.contributionDays.reduce((sum, d) => sum + d.contributionCount, 0),
  );
  const recent = weekly.slice(-bars);
  const peak = Math.max(1, ...recent);

  return (
    <>
      <p className="dl-label">Contributions · {year}</p>
      <div>
        <p className="dl-num">
          {data ? data.totalContributions.toLocaleString("en-US") : isError ? "—" : "…"}
        </p>
        <div
          className="dl-spark"
          role="img"
          aria-label={`Weekly GitHub contributions, last ${recent.length} weeks`}
          data-loading={data ? undefined : ""}
        >
          {(data ? recent : Array.from({ length: bars }, () => 0)).map((n, i) => (
            <i key={i} style={{ height: `${data ? Math.max(6, (n / peak) * 100) : 20}%` }} />
          ))}
        </div>
      </div>
    </>
  );
}
