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
        label: "footer.links.team.title",
        url: routes.team(),
      },
      {
        id: uuid(),
        label: "footer.links.pension.title",
        url: routes.pension.index(),
      },
      {
        id: uuid(),
        label: "footer.links.gite.title",
        url: routes.gite.index(),
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
    []
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
                href={"https://goo.gl/maps/NW6S15bBEmMKvLkB6"}
              >
                {t({ id: "footer.contact.address.text" })}
              </FooterLink>
            </FooterContent>
            <FooterContent>
              <SmallTitle>{t({ id: "footer.contact.phone.title" })}</SmallTitle>
              <FooterLink href={"tel:+33610572748"}>
                {t({ id: "footer.contact.phone.text" })}
              </FooterLink>
            </FooterContent>
            <FooterContent>
              <SmallTitle>{t({ id: "footer.contact.email.title" })}</SmallTitle>
              <FooterLink href={"mailto:lescopainsdemaui@gmail.com"}>
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
