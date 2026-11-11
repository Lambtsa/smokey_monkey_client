"use client";

import Link from "next/link";
import type { ReactElement } from "react";

import { useTranslation } from "@/hooks/useTranslation";
import type { TranslationKey } from "@/types/translations";

interface LinkBtnProps {
  href: string;
  text: TranslationKey;
  newTab?: boolean;
}

export const linkBtnClassName = "px-6 py-3 rounded-[7px] bg-ivory text-dark-green hover:bg-eerie-black hover:text-ivory";

export const LinkBtn = ({
  href,
  text,
  newTab = false,
}: LinkBtnProps): ReactElement => {
  const { t } = useTranslation();

  return (
    <Link
      href={href}
      className={linkBtnClassName}
      {...(newTab ? {
        target: "_blank",
        rel: "noopener noreferrer",
      } : {})}
    >
      {t({
        id: text,
      })}
    </Link>
  );
};
