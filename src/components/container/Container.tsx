"use client";

import type { ReactElement } from "react";

import { useTranslation } from "@/hooks/useTranslation";

import type {
  AlignedProps,   Alignment, ContainerProps,
} from "./Container.types";

const MAX_WIDTH: Record<NonNullable<ContainerProps["maxWidth"]>, string> = {
  MOBILE: "max-w-[460px]",
  TABLET: "max-w-[768px]",
  PC: "max-w-[1180px]",
  TV: "max-w-[1400px]",
};

const ITEMS: Record<Alignment, string> = {
  left: "items-start",
  right: "items-end",
  center: "items-center",
};

const TEXT: Record<Alignment, string> = {
  left: "text-left",
  right: "text-right",
  center: "text-center",
};

/* Title and subtitle block, also used on its own by the contact cards */
export const TitleContainer = ({ alignment, children }: AlignedProps): ReactElement => (
  <div className={`flex flex-col justify-center gap-2 w-full ${ITEMS[alignment]}`}>
    {children}
  </div>
);

/* A paragraph of body text; "\n" in translations makes a new line */
export const Content = ({ alignment, children }: AlignedProps): ReactElement => (
  <p className={`w-full whitespace-pre-line text-base leading-6 font-normal text-ivory ${TEXT[alignment]}`}>
    {children}
  </p>
);

export const Container = ({
  title,
  subtitle,
  children,
  maxWidth = "TV",
  alignment = "center",
}: ContainerProps): ReactElement => {
  const { t } = useTranslation();

  return (
    <div className={`flex flex-col justify-center gap-8 w-full h-full px-4 py-12 md:px-8 ${MAX_WIDTH[maxWidth]} ${ITEMS[alignment]}`}>
      <TitleContainer alignment={alignment}>
        <h2 className={`font-display font-bold uppercase text-sm leading-4 text-ivory/50 ${TEXT[alignment]}`}>
          {t({
            id: title,
          })}
        </h2>
        <p className={`font-bold text-[32px] leading-10 text-ivory ${TEXT[alignment]}`}>
          {t({
            id: subtitle,
          })}
        </p>
      </TitleContainer>
      {children}
    </div>
  );
};
