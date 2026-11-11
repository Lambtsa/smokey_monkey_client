"use client";

import Link from "next/link";
import type { ReactElement } from "react";

import { buttonClassName } from "@/components/button";
import { useTranslation } from "@/hooks/useTranslation";
import { routes } from "@/utils/routes";

export const FourOhFour = (): ReactElement => {
  const { t } = useTranslation();

  return (
    <section className="flex justify-center items-center w-full min-h-dvh px-6 bg-forest text-cream">
      <div className="flex flex-col justify-center items-center gap-8 max-w-[768px] text-center">
        <div className="flex flex-col items-center gap-5">
          <h1 className="font-display font-normal text-8xl md:text-[160px] leading-none text-brass">
            {t({
              id: "fourOhFour.title",
            })}
          </h1>
          <p className="text-xl font-light text-parchment">
            {t({
              id: "fourOhFour.subtitle",
            })}
          </p>
        </div>
        <Link href={routes.index()} className={buttonClassName("outline")}>
          {t({
            id: "fourOhFour.btn",
          })}
        </Link>
      </div>
    </section>
  );
};
