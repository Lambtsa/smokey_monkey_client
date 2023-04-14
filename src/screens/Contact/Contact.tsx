import { Jumbotron } from "@components/Jumbotron";
import { v4 as uuid } from "uuid";
import Photo from "@assets/images/photo6.jpeg";
import { ReactComponent as Times } from "@assets/times.svg";
import { ReactComponent as Mail } from "@assets/mail.svg";
import { ReactComponent as Phone } from "@assets/phone.svg";
import { useTranslation } from "@hooks/useTranslation";
import {
  ContactContainer,
  InnerContainer,
  Content,
  Title,
  Wrapper,
  ContactLink,
} from "./Contact.styles";
import { Container, TitleContainer } from "@components/Container";
import { details } from "@constants/details";

export const ContactScreen = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <>
      <Jumbotron
        title="contact.jumbotron.title"
        subtitle="contact.jumbotron.subtitle"
        images={[
          {
            id: uuid(),
            data: Photo,
            alt: "",
          },
        ]}
      />
      <ContactContainer>
        <Container
          maxWidth="TV"
          alignment="center"
          title="contact.details.title"
          subtitle="contact.details.subtitle"
        >
          <InnerContainer>
            <Wrapper>
              <Phone />
              <TitleContainer alignment="center">
                <Title>{t({ id: "contact.phone.title" })}</Title>
                <ContactLink href={details.mobile}>
                  {t({ id: "contact.phone.subtitle" })}
                </ContactLink>
              </TitleContainer>
            </Wrapper>
            <Wrapper>
              <Mail />
              <TitleContainer alignment="center">
                <Title>{t({ id: "contact.email.title" })}</Title>
                <ContactLink href={details.email}>
                  {t({ id: "contact.email.subtitle" })}
                </ContactLink>
              </TitleContainer>
            </Wrapper>
            <Wrapper>
              <Times />
              <TitleContainer alignment="center">
                <Title>{t({ id: "contact.times.title" })}</Title>
                <Content>{t({ id: "contact.times.subtitle" })}</Content>
              </TitleContainer>
            </Wrapper>
          </InnerContainer>
        </Container>
      </ContactContainer>
    </>
  );
};
