"use client";

import type { ReactElement } from "react";

import { useTranslation } from "@/hooks/useTranslation";

/* The opening hours in a brass frame (home page hero) */
export const Hours = (): ReactElement => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-3 w-full sm:w-auto flex-[0_1_300px] p-7 border border-brass/55 bg-forest/60">
      <p className="eyebrow">
        {t({
          id: "hours.title",
        })}
      </p>
      <p className="whitespace-pre-line text-[22px] leading-snug">
        {t({
          id: "hours.days",
        })}
      </p>
      <p className="text-[15px] text-stone">
        {t({
          id: "hours.closed",
        })}
      </p>
    </div>
  );
};
