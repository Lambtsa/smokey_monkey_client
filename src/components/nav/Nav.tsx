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
    label: "nav.home",
    url: routes.index(),
  },
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
    label: "nav.reservation",
    url: routes.restaurant.reservation(),
  },
  {
    label: "nav.smoker",
    url: routes.smoker(),
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

const navLinkClassName = "font-normal text-center text-base leading-4 text-ivory hover:underline";

export const Nav = (): ReactElement => {
  const { t } = useTranslation();
  const { y } = useWindowScroll();

  /* ######################################## */
  /* State */
  /* ######################################## */
  const [isOpen, setIsOpen] = useState(false);
  const isScrolled = y !== 0;
  const homeLabel = t({
    id: "nav.home",
  });

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
    <nav className={`fixed top-0 left-0 flex justify-between items-center w-full p-4 z-1000 ${isScrolled ? "bg-eerie-black/80" : "bg-transparent"}`}>
      {/* No logo for now: an empty link home keeps the menu on the right */}
      <Link href={routes.index()} onClick={handleClose} aria-label={homeLabel} />
      <ul className={`${isOpen ? "flex" : "hidden"} fixed top-0 left-0 flex-col justify-center items-center gap-4 w-screen h-dvh z-10 bg-night md:static md:flex md:flex-row md:w-auto md:h-auto md:bg-transparent`}>
        {links.map((link) => (
          <li key={link.url} className="flex flex-col justify-center items-center gap-2">
            <Link
              href={link.url}
              onClick={handleClose}
              className={navLinkClassName}
              {...(link.newTab ? newTabProps : {})}
            >
              {t({
                id: link.label,
              })}
            </Link>
          </li>
        ))}
        <li className="flex justify-center items-center px-2">
          <LanguageToggle onSelect={handleClose} />
        </li>
      </ul>
      <button type="button" aria-label="Menu" onClick={handleToggle} className="block md:hidden">
        <Icon icon="burger" />
      </button>
      {isOpen && (
        <button type="button" aria-label="Close" onClick={handleClose} className="fixed top-4 right-4 z-20 md:hidden">
          <Icon icon="close" />
        </button>
      )}
    </nav>
  );
};
