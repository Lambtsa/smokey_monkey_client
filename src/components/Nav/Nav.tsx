import { ReactComponent as Logo } from "@assets/logo.svg";
import { ReactComponent as BurgerMenu } from "@assets/burger.svg";
import { ReactComponent as CloseMenu } from "@assets/close24.svg";
import {
  BurgerMenuBtn,
  CloseBtn,
  DropdownContainer,
  DropdownContent,
  DropdownLink,
  NavContainer,
  NavElement,
  NavLanguages,
  NavLink,
  NavList,
} from "./Nav.styles";
import { v4 as uuid } from "uuid";
import { routes } from "@helpers/routes";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useTranslation } from "@hooks/useTranslation";
import { LanguageToggle } from "@components/LanguageToggle";
import { useWindowScroll } from "react-use";
import Link from "next/link";
import type { NavLinkType, NavProps } from "./Nav.types";

export const Nav = ({ position }: NavProps): JSX.Element => {
  const { t } = useTranslation();
  const { y } = useWindowScroll();

  /* ######################################## */
  /* State */
  /* ######################################## */
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    console.log({ isOpen });
  }, [isOpen]);

  const isScrolled = useMemo(() => {
    if (typeof window === "undefined") {
      return false;
    }
    return y !== 0;
  }, [y]);

  const links: NavLinkType[] = useMemo(
    () => [
      {
        id: uuid(),
        label: "nav.pension",
        url: routes.pension.index(),
        subLinks: [
          {
            id: uuid(),
            label: "nav.pension.prices",
            url: routes.pension.prices(),
          },
          {
            id: uuid(),
            label: "nav.pension.conditions",
            url: routes.pension.conditions(),
          },
        ],
      },
      {
        id: uuid(),
        label: "nav.gite",
        url: routes.gite(),
        subLinks: [],
      },
      {
        id: uuid(),
        label: "nav.team",
        url: routes.team(),
        subLinks: [],
      },
      {
        id: uuid(),
        label: "nav.contact",
        url: routes.contact(),
        subLinks: [],
      },
      {
        id: uuid(),
        label: "nav.media",
        url: routes.media(),
        subLinks: [],
      },
    ],
    []
  );

  /* ######################################## */
  /* Actions */
  /* ######################################## */
  const handleOnClick = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  const hasLinks = !!links.length;

  return (
    <NavContainer position={position} isScrolled={isScrolled}>
      <Link href={routes.index()}>
        <Logo />
      </Link>
      <NavList isOpen={isOpen}>
        {hasLinks &&
          links.map((link) => {
            return (
              <NavElement key={link.id}>
                <DropdownContainer>
                  <NavLink href={link.url} isScrolled={isScrolled}>
                    {t({ id: link.label })}
                  </NavLink>
                  {!!link.subLinks.length && (
                    <DropdownContent>
                      {link.subLinks.map((subLink) => (
                        <DropdownLink key={subLink.id} href={subLink.url}>
                          {t({ id: subLink.label })}
                        </DropdownLink>
                      ))}
                    </DropdownContent>
                  )}
                </DropdownContainer>
              </NavElement>
            );
          })}
        <NavLanguages>
          <LanguageToggle setIsOpen={setIsOpen} />
        </NavLanguages>
      </NavList>
      <BurgerMenuBtn>
        <BurgerMenu onClick={handleOnClick} />
      </BurgerMenuBtn>
      <CloseBtn onClick={handleOnClick} isOpen={isOpen}>
        <CloseMenu />
      </CloseBtn>
    </NavContainer>
  );
};
