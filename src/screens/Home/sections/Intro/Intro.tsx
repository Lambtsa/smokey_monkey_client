import Dogs from "@assets/images/dogs.jpeg";
import { useTranslation } from "@hooks/useTranslation";
import { IntroList, IntroListElement, LinkBtn } from "./Intro.styles";
import { routes } from "@helpers/routes";
import {
  Container,
  Content,
  Img,
  InnerContainer,
  SplitScreenContainer,
  SplitScreenWrapper,
  Subtitle,
  Title,
  TitleContainer,
} from "@screens/Home/Home.styles";

export const Intro = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <SplitScreenContainer>
      <SplitScreenWrapper>
        <InnerContainer>
          <Container>
            <TitleContainer>
              <Title>{t({ id: "intro.title" })}</Title>
              <Subtitle>{"Subtitle"}</Subtitle>
            </TitleContainer>
            <Content>{t({ id: "intro.subtitle" })}</Content>
            <Content>{t({ id: "intro.content" })}</Content>
            <IntroList>
              <IntroListElement>
                {t({ id: "intro.list.surface" })}
              </IntroListElement>
              <IntroListElement>
                {t({ id: "intro.list.pension" })}
              </IntroListElement>
              <IntroListElement>
                {t({ id: "intro.list.parc" })}
              </IntroListElement>
              <IntroListElement>
                {t({ id: "intro.list.area" })}
              </IntroListElement>
              <IntroListElement>
                {t({ id: "intro.list.gite" })}
              </IntroListElement>
              <IntroListElement>
                {t({ id: "intro.list.garden" })}
              </IntroListElement>
            </IntroList>
            <LinkBtn href={routes.team()}>
              {t({ id: "intro.button.text" })}
            </LinkBtn>
          </Container>
        </InnerContainer>
        <InnerContainer>
          <Img alt="" src={Dogs} />
        </InnerContainer>
      </SplitScreenWrapper>
    </SplitScreenContainer>
  );
};
