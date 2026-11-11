"use client";

import Link from "next/link";
import type { ReactElement } from "react";

import { Icon } from "@/components/icon";
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

const linkClassName = "text-parchment hover:text-brass";

export const Footer = (): ReactElement => {
  const { t } = useTranslation();

  return (
    <footer className="bg-cellar text-cream border-t border-brass/30">
      <div className="grid grid-cols-1 md:grid-cols-[1.3fr_1fr_1fr] gap-12 max-w-[1280px] mx-auto px-6 py-16 md:px-10">
        <div className="flex flex-col gap-4">
          <p className="font-display text-[32px] leading-tight">The Smokey Monkey</p>
          <p className="text-[15px] text-stone">
            {t({
              id: "home.jumbotron.subtitle",
            })}
          </p>
          <SocialIcons />
        </div>
        <div className="flex flex-col gap-5">
          <h2 className="eyebrow">
            {t({
              id: "footer.contact.title",
            })}
          </h2>
          <ul className="flex flex-col gap-4 text-base">
            <li className="flex items-start gap-3">
              <Icon icon="pin" size={20} className="shrink-0 mt-0.5 text-brass" />
              <Link target="_blank" rel="noopener noreferrer" href={details.googleMaps} className={linkClassName}>
                {t({
                  id: "footer.contact.address.text",
                })}
              </Link>
            </li>
            <li className="flex items-center gap-3">
              <Icon icon="phone" size={20} className="shrink-0 text-brass" />
              <Link href={details.mobile} className={linkClassName}>
                {t({
                  id: "footer.contact.phone.text",
                })}
              </Link>
            </li>
            <li className="flex items-center gap-3">
              <Icon icon="mail" size={20} className="shrink-0 text-brass" />
              <Link href={`mailto:${details.email}`} className={`${linkClassName} break-all`}>
                {t({
                  id: "footer.contact.email.text",
                })}
              </Link>
            </li>
          </ul>
        </div>
        <nav
          aria-label={t({
            id: "footer.links.subtitle",
          })}
          className="flex flex-col gap-5"
        >
          <h2 className="eyebrow">
            {t({
              id: "footer.links.subtitle",
            })}
          </h2>
          <ul className="flex flex-col gap-3 text-base">
            {links.map((link) => (
              <li key={link.url}>
                <Link href={link.url} className={linkClassName}>
                  {t({
                    id: link.label,
                  })}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <p className="px-6 py-5 text-center text-xs leading-5 text-stone border-t border-cream/10">
        {t({
          id: "footer.copyright",
        }, {
          date: new Date().getFullYear(),
        })}
      </p>
    </footer>
  );
};
