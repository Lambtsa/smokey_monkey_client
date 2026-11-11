"use client";

import Link from "next/link";
import type { ReactElement } from "react";

import { SocialIcons } from "@/components/social_icons";
import { details } from "@/constants/details";
import { useTranslation } from "@/hooks/useTranslation";
import type { TranslationKey } from "@/types/translations";
import { routes } from "@/utils/routes";

interface FooterLinkType {
  label: TranslationKey;
  url: string;
}

const links: FooterLinkType[] = [
  {
    label: "footer.links.smoker.title",
    url: routes.smoker(),
  },
  {
    label: "footer.links.restaurant.title",
    url: routes.restaurant.index(),
  },
  {
    label: "footer.links.reservation.title",
    url: routes.restaurant.reservation(),
  },
  {
    label: "footer.links.bar.title",
    url: routes.bar(),
  },
  {
    label: "footer.links.contact.title",
    url: routes.contact(),
  },
  {
    label: "footer.links.terms.title",
    url: routes.terms(),
  },
];

const titleClassName = "font-bold text-center text-2xl leading-6 text-ivory";
const smallTitleClassName = "font-bold text-left text-sm leading-[14px] uppercase text-ivory";
const linkClassName = "font-normal text-left text-base leading-5 text-ivory hover:underline";
const sectionClassName = "flex flex-col justify-start items-start gap-12 w-full h-full";
const contentClassName = "flex flex-col justify-start items-start gap-3";

export const Footer = (): ReactElement => {
  const { t } = useTranslation();

  return (
    <footer>
      <div className="grid grid-cols-1 gap-12 px-4 py-12 md:grid-cols-[3fr_2fr] md:gap-8 md:p-12 items-center text-xs text-ivory bg-eerie-black">
        <div className={sectionClassName}>
          <h2 className={titleClassName}>
            {t({
              id: "footer.contact.title",
            })}
          </h2>
          <div className="flex flex-wrap justify-start items-center gap-8">
            <div className={contentClassName}>
              <h3 className={smallTitleClassName}>
                {t({
                  id: "footer.contact.address.title",
                })}
              </h3>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href={details.googleMaps}
                className={linkClassName}
              >
                {t({
                  id: "footer.contact.address.text",
                })}
              </Link>
            </div>
            <div className={contentClassName}>
              <h3 className={smallTitleClassName}>
                {t({
                  id: "footer.contact.phone.title",
                })}
              </h3>
              <Link href={details.mobile} className={linkClassName}>
                {t({
                  id: "footer.contact.phone.text",
                })}
              </Link>
            </div>
            <div className={contentClassName}>
              <h3 className={smallTitleClassName}>
                {t({
                  id: "footer.contact.email.title",
                })}
              </h3>
              <Link href={`mailto:${details.email}`} className={linkClassName}>
                {t({
                  id: "footer.contact.email.text",
                })}
              </Link>
            </div>
          </div>
          <div className={contentClassName}>
            <h3 className={`${smallTitleClassName} mb-4`}>
              {t({
                id: "footer.contact.social.title",
              })}
            </h3>
            <SocialIcons />
          </div>
        </div>
        <div className={sectionClassName}>
          <h2 className={titleClassName}>
            {t({
              id: "footer.links.title",
            })}
          </h2>
          <div className={contentClassName}>
            <h3 className={smallTitleClassName}>
              {t({
                id: "footer.links.subtitle",
              })}
            </h3>
            <ul className="flex flex-col gap-3 list-none">
              {links.map((link) => (
                <li key={link.url} className="font-normal text-left text-base leading-4 text-ivory">
                  <Link href={link.url} className={linkClassName}>
                    {t({
                      id: link.label,
                    })}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center gap-8 p-4 text-center text-xs leading-4 text-ivory/80 bg-night">
        {t({
          id: "footer.copyright",
        }, {
          date: new Date().getFullYear(),
        })}
      </div>
    </footer>
  );
};
