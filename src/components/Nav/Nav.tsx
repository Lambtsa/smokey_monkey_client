import { ReactComponent as Logo } from "@assets/logo.svg";
import {
  NavContainer,
  NavElement,
  NavLanguages,
  NavLink,
  NavList,
} from "./Nav.styles";
import { TranslationKey } from "@types";
import { v4 as uuid } from "uuid";
import { routes } from "@helpers/routes";
import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "@hooks/useTranslation";
import { LanguageToggle } from "@components/LanguageToggle";
import { useWindowScroll } from "react-use";

interface NavLinkType {
  id: string;
  label: TranslationKey;
  url: string;
}

export const Nav = (): JSX.Element => {
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
      },
      {
        id: uuid(),
        label: "nav.gite",
        url: routes.gite.index(),
      },
      {
        id: uuid(),
        label: "nav.about",
        url: routes.about(),
      },
      {
        id: uuid(),
        label: "nav.contact",
        url: routes.contact(),
      },
      {
        id: uuid(),
        label: "nav.media",
        url: routes.media(),
      },
    ],
    []
  );

  return (
    <NavContainer isScrolled={isScrolled}>
      <Logo />
      <NavList>
        {links &&
          links.map((link) => (
            <NavElement key={link.id}>
              <NavLink isScrolled={isScrolled} href={link.url} passHref>
                {t({ id: link.label })}
              </NavLink>
            </NavElement>
          ))}
        <NavLanguages>
          <LanguageToggle setIsOpen={setIsOpen} />
        </NavLanguages>
      </NavList>
    </NavContainer>
  );
};
