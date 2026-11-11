"use client";

import Link from "next/link";
import type { ReactElement } from "react";

import { buttonClassName } from "@/components/button";
import type { ButtonType } from "@/components/button/Button.types";
import { useTranslation } from "@/hooks/useTranslation";
import type { TranslationKey } from "@/types/translations";

/* A button-shaped link, or "arrow": brass capitals followed by an arrow */
type LinkBtnVariant = ButtonType | "arrow";

interface LinkBtnProps {
  href: string;
  text: TranslationKey;
  variant?: LinkBtnVariant;
  newTab?: boolean;
}

const arrowClassName = "inline-flex items-center gap-2 min-h-11 caps text-sm font-semibold text-brass hover:text-brass-light";

export const LinkBtn = ({
  href,
  text,
  variant = "arrow",
  newTab = false,
}: LinkBtnProps): ReactElement => {
  const { t } = useTranslation();

  return (
    <Link
      href={href}
      className={variant === "arrow" ? arrowClassName : buttonClassName(variant)}
      {...(newTab ? {
        target: "_blank",
        rel: "noopener noreferrer",
      } : {})}
    >
      {t({
        id: text,
      })}
      {variant === "arrow" && <span aria-hidden="true">→</span>}
    </Link>
  );
};
