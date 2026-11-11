"use client";

import Link from "next/link";
import {
  type ReactElement, useCallback, useState
} from "react";
import { useWindowScroll } from "react-use";

import { Icon } from "@/components/icon";
import { LanguageToggle } from "@/components/language_toggle";
import { useTranslation } from "@/hooks/useTranslation";
import { routes } from "@/utils/routes";

import type { NavLinkType } from "./Nav.types";

const links: NavLinkType[] = [
  {
    label: "nav.restaurant",
    url: routes.restaurant.index(),
  },
  {
    label: "nav.menu",
    url: routes.menu(),
    newTab: true,
  },
  {
    label: "nav.smoker",
    url: routes.smoker(),
  },
  {
    label: "nav.bar",
    url: routes.bar(),
  },
  {
    label: "nav.contact",
    url: routes.contact(),
  },
];

const newTabProps = {
  target: "_blank",
  rel: "noopener noreferrer",
};

/*
 * Fixed at the top: transparent over the hero photo, dark green once the page
 * scrolls. On small screens the links open in a full-screen menu.
 */
export const Nav = (): ReactElement => {
  const { t } = useTranslation();
  const { y } = useWindowScroll();

  /* ######################################## */
  /* State */
  /* ######################################## */
  const [isOpen, setIsOpen] = useState(false);
  const isScrolled = y > 8;

  /* ######################################## */
  /* Actions */
  /* ######################################## */
  const handleToggle = useCallback(() => {
    setIsOpen((isOpen) => !isOpen);
  }, []);

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-1000 transition-colors ${isScrolled ? "bg-forest/95 border-b border-brass/20" : "bg-transparent"}`}>
      <div className="flex justify-between items-center gap-6 max-w-[1280px] mx-auto px-5 py-4 md:px-10 md:py-6">
        <Link href={routes.index()} onClick={handleClose} className="font-display text-[21px] md:text-[26px] tracking-[0.02em] text-cream hover:text-brass-light">
          The Smokey Monkey
        </Link>
        <nav
          aria-label={t({
            id: "nav.label",
          })}
          className={`${isOpen ? "flex" : "hidden"} fixed inset-0 flex-col justify-center items-center gap-8 bg-forest md:static md:flex md:flex-row md:gap-8 md:bg-transparent`}
        >
          <ul className="flex flex-col md:flex-row items-center gap-7 md:gap-8">
            {links.map((link) => (
              <li key={link.url}>
                <Link
                  href={link.url}
                  onClick={handleClose}
                  className="caps text-lg md:text-[15px] text-cream hover:text-brass"
                  {...(link.newTab ? newTabProps : {})}
                >
                  {t({
                    id: link.label,
                  })}
                </Link>
              </li>
            ))}
          </ul>
          <LanguageToggle onSelect={handleClose} />
          <Link
            href={routes.restaurant.reservation()}
            onClick={handleClose}
            className="inline-flex items-center min-h-11 px-5 border border-brass caps text-sm text-brass hover:bg-brass hover:text-forest"
          >
            {t({
              id: "generic.reserve",
            })}
          </Link>
        </nav>
        <button
          type="button"
          aria-label={t({
            id: isOpen ? "nav.close" : "nav.open",
          })}
          aria-expanded={isOpen}
          onClick={handleToggle}
          className="relative z-10 flex justify-center items-center size-11 border border-brass/60 text-brass md:hidden"
        >
          <Icon icon={isOpen ? "close" : "burger"} size={20} />
        </button>
      </div>
    </header>
  );
};
