"use client";

import { useEffect, useState } from "react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@ui-sdk/react/tooltip";

function montrealTime() {
  return new Date().toLocaleTimeString("en-GB", {
    timeZone: "America/Toronto",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export function MontrealClock() {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    setTime(montrealTime());
    const id = setInterval(() => setTime(montrealTime()), 10_000);
    return () => clearInterval(id);
  }, []);

  return (
    <Tooltip>
      <TooltipTrigger className="dl-time">{time ?? "--:--"}</TooltipTrigger>
      <TooltipContent className="dl-tip">
        Eastern Time · replies within a day
      </TooltipContent>
    </Tooltip>
  );
}
