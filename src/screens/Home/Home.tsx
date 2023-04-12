import { Jumbotron } from "@components/Jumbotron";
import { v4 as uuid } from "uuid";
import { Map } from "@components/Map";
import JumboImg from "@assets/images/dogs1.jpeg";
import Gite1 from "@assets/images/gite1.jpeg";
import Gite6 from "@assets/images/gite6.jpeg";
import Pension from "@assets/images/pension1.jpeg";
import {
  Img,
  InnerContainer,
  IntroList,
  IntroListElement,
  SplitScreenContainer,
  SplitScreenWrapper,
} from "./Home.styles";
import { Container, Content } from "@components/Container";
import { useTranslation } from "@hooks/useTranslation";
import { LinkBtn } from "@components/LinkBtn";

export const HomeScreen = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <>
      {/* Jumbotron */}
      <Jumbotron
        title="home.jumbotron.title"
        subtitle="home.jumbotron.subtitle"
        images={[
          {
            id: uuid(),
            data: JumboImg,
            alt: "",
          },
        ]}
      />

      {/* Les copains de maui */}
      <SplitScreenContainer>
        <SplitScreenWrapper>
          <InnerContainer>
            <Container
              alignment="left"
              title="home.intro.title"
              subtitle="home.intro.subtitle"
            >
              <Content alignment="left">
                {t({ id: "home.intro.content" })}
              </Content>
              <IntroList>
                <IntroListElement>
                  {t({ id: "home.intro.list.surface" })}
                </IntroListElement>
                <IntroListElement>
                  {t({ id: "home.intro.list.pension" })}
                </IntroListElement>
                <IntroListElement>
                  {t({ id: "home.intro.list.parc" })}
                </IntroListElement>
                <IntroListElement>
                  {t({ id: "home.intro.list.area" })}
                </IntroListElement>
                <IntroListElement>
                  {t({ id: "home.intro.list.gite" })}
                </IntroListElement>
                <IntroListElement>
                  {t({ id: "home.intro.list.garden" })}
                </IntroListElement>
              </IntroList>
            </Container>
          </InnerContainer>
          <InnerContainer>
            <Img alt="" src={Gite6} fill />
          </InnerContainer>
        </SplitScreenWrapper>
      </SplitScreenContainer>

      {/* La Pension */}
      <SplitScreenContainer>
        <SplitScreenWrapper>
          <InnerContainer>
            <Img alt="" src={Pension} fill />
          </InnerContainer>
          <InnerContainer>
            <Container
              alignment="left"
              title="home.pension.title"
              subtitle="home.pension.subtitle"
            >
              <Content alignment="left">
                {t({ id: "home.pension.content" })}
              </Content>
              <LinkBtn href="" text="generic.findOutMore" />
            </Container>
          </InnerContainer>
        </SplitScreenWrapper>
      </SplitScreenContainer>

      {/* Le Gite */}
      <SplitScreenContainer>
        <SplitScreenWrapper>
          <InnerContainer>
            <Container
              alignment="left"
              title="home.gite.title"
              subtitle="home.gite.subtitle"
            >
              <Content alignment="left">
                {t({ id: "home.gite.content" })}
              </Content>
              <LinkBtn href="" text="generic.findOutMore" />
            </Container>
          </InnerContainer>
          <InnerContainer>
            <Img alt="" src={Gite1} fill />
          </InnerContainer>
        </SplitScreenWrapper>
      </SplitScreenContainer>

      {/* Localisation */}
      <SplitScreenContainer>
        <SplitScreenWrapper>
          <InnerContainer>
            <Map />
          </InnerContainer>
          <InnerContainer>
            <Container
              alignment="left"
              title="home.location.title"
              subtitle="home.location.subtitle"
            >
              <Content alignment="left">
                {t({ id: "home.location.content" })}
              </Content>
              <LinkBtn href="" text="home.location.btn.text" />
            </Container>
          </InnerContainer>
        </SplitScreenWrapper>
      </SplitScreenContainer>
    </>
  );
};
