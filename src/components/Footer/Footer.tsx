import { useTranslation } from "@hooks/useTranslation";
import {
  CopyrightContainer,
  FooterContainer,
  FooterList,
  FooterListItem,
  FooterSections,
  Title,
} from "./Footer.styles";

export const Footer = (): JSX.Element => {
  const { t } = useTranslation();
  return (
    <>
      <FooterContainer>
        <FooterSections>
          <Title>test</Title>
          <FooterList>
            <FooterListItem>test</FooterListItem>
            <FooterListItem>test</FooterListItem>
            <FooterListItem>test</FooterListItem>
            <FooterListItem>test</FooterListItem>
            <FooterListItem>test</FooterListItem>
          </FooterList>
        </FooterSections>
        <FooterSections>
          <Title>test</Title>
          <FooterList>
            <FooterListItem>test</FooterListItem>
          </FooterList>
        </FooterSections>
        <FooterSections>
          <Title>test</Title>
          <FooterList>
            <FooterListItem>test</FooterListItem>
          </FooterList>
        </FooterSections>
      </FooterContainer>
      <CopyrightContainer>
        {t({ id: "footer.copyright" }, { date: new Date().getFullYear() })}
      </CopyrightContainer>
    </>
  );
};
