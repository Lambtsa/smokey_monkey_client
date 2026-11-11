"use client";

import type { ReactElement } from "react";

import { useTranslation } from "@/hooks/useTranslation";

import type {
  AlignedProps, Alignment, ContainerProps,
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

/* Label and title block, also used on its own by the contact cards */
export const TitleContainer = ({ alignment, children }: AlignedProps): ReactElement => (
  <div className={`flex flex-col justify-center gap-4 w-full ${ITEMS[alignment]} ${TEXT[alignment]}`}>
    {children}
  </div>
);

/* A paragraph of body text; "\n" in translations makes a new line */
export const Content = ({ alignment, children }: AlignedProps): ReactElement => (
  <p className={`w-full max-w-[560px] whitespace-pre-line text-lg leading-relaxed font-light text-parchment ${TEXT[alignment]}`}>
    {children}
  </p>
);

/* The art deco rule under a centred title: two lines and a diamond */
export const Ornament = (): ReactElement => (
  <span aria-hidden="true" className="flex items-center gap-3">
    <span className="block w-20 h-px bg-brass" />
    <span className="block size-2 rotate-45 border border-brass" />
    <span className="block w-20 h-px bg-brass" />
  </span>
);

/*
 * A block of text: a brass label (title), a display title (subtitle), then
 * the children (paragraphs, a link).
 */
export const Container = ({
  title,
  subtitle,
  children,
  maxWidth = "TV",
  alignment = "center",
}: ContainerProps): ReactElement => {
  const { t } = useTranslation();

  return (
    <div className={`flex flex-col justify-center gap-7 w-full h-full px-6 py-16 md:px-16 md:py-24 ${MAX_WIDTH[maxWidth]} ${ITEMS[alignment]}`}>
      <TitleContainer alignment={alignment}>
        <p className="eyebrow">
          {t({
            id: title,
          })}
        </p>
        <h2 className="font-display font-normal text-4xl leading-tight md:text-[56px] md:leading-[1.05] text-cream">
          {t({
            id: subtitle,
          })}
        </h2>
        {alignment === "center" && <Ornament />}
      </TitleContainer>
      {children}
    </div>
  );
};
