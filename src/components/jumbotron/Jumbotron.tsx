"use client";

import Link from "next/link";
import type { ReactElement } from "react";

import { Carousel } from "@/components/carousel";
import { linkBtnClassName } from "@/components/link_btn";
import { useTranslation } from "@/hooks/useTranslation";

import type { JumbotronProps } from "./Jumbotron.types";

export const Jumbotron = ({
  title,
  subtitle,
  images,
  type = "dot",
  link,
}: JumbotronProps): ReactElement => {
  const { t } = useTranslation();

  return (
    <section className="relative flex justify-center items-center w-full h-dvh bg-ivory text-eerie-black">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center gap-2 w-full max-w-[768px] p-4 md:p-0 z-200">
        <h1 className="font-signage font-normal text-center text-[56px] leading-14 text-ivory">
          {t({
            id: title,
          })}
        </h1>
        <p className="font-normal text-center text-base leading-4 mb-4 text-ivory/50">
          {t({
            id: subtitle,
          })}
        </p>
        {link && (
          <Link href={link.href} className={linkBtnClassName}>
            {t({
              id: link.text,
            })}
          </Link>
        )}
      </div>
      <Carousel images={images} type={type} />
    </section>
  );
};
