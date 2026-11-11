"use client";

import type { StaticImageData } from "next/image";
import type { ReactElement, ReactNode } from "react";

import { Image } from "@/components/image";
import { LinkBtn } from "@/components/link_btn";
import { useTranslation } from "@/hooks/useTranslation";
import type { TranslationKey } from "@/types/translations";

interface HeroLink {
  text: TranslationKey;
  href: string;
  newTab?: boolean;
}

interface HeroProps {
  /* The page's h1 */
  title: TranslationKey;
  /* The brass label above the title */
  subtitle: TranslationKey;
  description?: TranslationKey;
  image: StaticImageData;
  /* Up to two: the first is the main (filled) button, the second an outlined one */
  links?: HeroLink[];
  /* Shown beside the text on large screens, under it on small ones */
  aside?: ReactNode;
  /* "full": the whole screen (home page); "page": a shorter band */
  size?: "full" | "page";
}

/* The photo band at the top of every page, text at the bottom left */
export const Hero = ({
  title,
  subtitle,
  description,
  image,
  links = [],
  aside,
  size = "page",
}: HeroProps): ReactElement => {
  const { t } = useTranslation();

  return (
    <section className={`relative flex items-end w-full overflow-hidden bg-forest ${size === "full" ? "min-h-dvh md:min-h-[860px]" : "min-h-[72dvh] md:min-h-[640px]"}`}>
      <Image src={image} alt="" sizes="100vw" priority className="sepia-[0.35] brightness-[0.55]" />
      <div aria-hidden="true" className="absolute inset-0 bg-linear-to-b from-forest/55 via-forest/20 to-forest/95" />
      <div className="relative flex flex-wrap justify-between items-end gap-12 w-full max-w-[1280px] mx-auto px-6 pt-32 pb-16 md:px-10 md:pb-24">
        <div className="flex flex-col gap-6 md:gap-7 max-w-[760px] flex-[1_1_620px]">
          <p className="eyebrow flex items-center gap-4">
            <span aria-hidden="true" className="block w-12 h-px bg-brass" />
            {t({
              id: subtitle,
            })}
          </p>
          <h1 className={`font-display font-normal text-cream leading-none ${size === "full" ? "text-[52px] md:text-[104px] md:leading-[0.98]" : "text-5xl md:text-[80px]"}`}>
            {t({
              id: title,
            })}
          </h1>
          {description && (
            <p className="max-w-[540px] text-lg md:text-xl leading-relaxed font-light text-parchment">
              {t({
                id: description,
              })}
            </p>
          )}
          {links.length > 0 && (
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 mt-2">
              {links.map((link, index) => (
                <LinkBtn
                  key={link.href}
                  href={link.href}
                  text={link.text}
                  newTab={link.newTab}
                  variant={index === 0 ? "primary" : "outline"}
                />
              ))}
            </div>
          )}
        </div>
        {aside}
      </div>
    </section>
  );
};
