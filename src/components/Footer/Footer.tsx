import { useTranslation } from "@hooks/useTranslation";
import { v4 as uuid } from "uuid";
import {
  CopyrightContainer,
  FooterContactContainer,
  FooterContainer,
  FooterContent,
  FooterLink,
  FooterList,
  FooterListItem,
  FooterSections,
  SmallTitle,
  Title,
} from "./Footer.styles";
import { useMemo } from "react";
import { TranslationKey } from "@types";
import { routes } from "@helpers/routes";
import { SocialIcons } from "@components/SocialIcons";
import { details } from "@constants/details";

interface FooterLinkType {
  id: string;
  label: TranslationKey;
  url: string;
}

export const Footer = (): JSX.Element => {
  const { t } = useTranslation();

  const links: FooterLinkType[] = useMemo(
    () => [
      {
        id: uuid(),
        label: "footer.links.smoker.title",
        url: routes.smoker(),
      },
      {
        id: uuid(),
        label: "footer.links.restaurant.title",
        url: routes.restaurant.index(),
      },
      {
        id: uuid(),
        label: "footer.links.reservation.title",
        url: routes.restaurant.reservation(),
      },
      {
        id: uuid(),
        label: "footer.links.bar.title",
        url: routes.bar(),
      },
      {
        id: uuid(),
        label: "footer.links.contact.title",
        url: routes.contact(),
      },
      {
        id: uuid(),
        label: "footer.links.terms.title",
        url: routes.terms(),
      },
    ],
    [],
  );

  return (
    <>
      <FooterContainer>
        <FooterSections>
          <Title>{t({ id: "footer.contact.title" })}</Title>
          <FooterContactContainer>
            <FooterContent>
              <SmallTitle>
                {t({ id: "footer.contact.address.title" })}
              </SmallTitle>
              <FooterLink
                target="_blank"
                rel="noopener noreferrer"
                href={details.googleMaps}
              >
                {t({ id: "footer.contact.address.text" })}
              </FooterLink>
            </FooterContent>
            <FooterContent>
              <SmallTitle>{t({ id: "footer.contact.phone.title" })}</SmallTitle>
              <FooterLink href={details.mobile}>
                {t({ id: "footer.contact.phone.text" })}
              </FooterLink>
            </FooterContent>
            <FooterContent>
              <SmallTitle>{t({ id: "footer.contact.email.title" })}</SmallTitle>
              <FooterLink href={`mailto:${details.email}`}>
                {t({ id: "footer.contact.email.text" })}
              </FooterLink>
            </FooterContent>
          </FooterContactContainer>
          <FooterContent>
            <SmallTitle style={{ marginBottom: "16px" }}>
              {t({ id: "footer.contact.social.title" })}
            </SmallTitle>
            <SocialIcons />
          </FooterContent>
        </FooterSections>
        <FooterSections>
          <Title>{t({ id: "footer.links.title" })}</Title>
          <FooterList>
            <FooterContent>
              <SmallTitle>{t({ id: "footer.links.subtitle" })}</SmallTitle>
              {links &&
                links.map((link) => (
                  <FooterListItem key={link.id}>
                    <FooterLink href={link.url}>
                      {t({ id: link.label })}
                    </FooterLink>
                  </FooterListItem>
                ))}
            </FooterContent>
          </FooterList>
        </FooterSections>
      </FooterContainer>
      <CopyrightContainer>
        {t({ id: "footer.copyright" }, { date: new Date().getFullYear() })}
      </CopyrightContainer>
    </>
  );
};
