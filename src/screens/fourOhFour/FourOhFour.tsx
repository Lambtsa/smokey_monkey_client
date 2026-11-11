"use client";

import Link from "next/link";
import type { ReactElement } from "react";

import { buttonClassName } from "@/components/button";
import { useTranslation } from "@/hooks/useTranslation";
import { routes } from "@/utils/routes";

export const FourOhFour = (): ReactElement => {
  const { t } = useTranslation();

  return (
    <section className="flex justify-center items-center w-full h-dvh bg-night text-ivory">
      <div className="flex flex-col justify-center items-center gap-4 max-w-[768px] p-4">
        <div className="flex flex-col gap-2">
          <h1 className="font-display font-bold text-center text-5xl leading-12 sm:text-7xl sm:leading-[72px] text-ivory">
            {t({
              id: "fourOhFour.title",
            })}
          </h1>
          <p className="font-normal italic text-center text-base leading-4 text-ivory/80">
            {t({
              id: "fourOhFour.subtitle",
            })}
          </p>
        </div>
        <Link href={routes.index()} className={`${buttonClassName("secondary")} text-center`}>
          {t({
            id: "fourOhFour.btn",
          })}
        </Link>
      </div>
    </section>
  );
};
