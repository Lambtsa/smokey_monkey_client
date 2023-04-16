import Ribs from "@assets/images/ribs.webp";
import { v4 as uuid } from "uuid";
import { useTranslation } from "@hooks/useTranslation";
import {
  SplitScreenContainer,
  SplitScreenWrapper,
  InnerContainer,
} from "./Smoker.styles";
import { Jumbotron } from "@components/Jumbotron";
import { Container, Content } from "@components/Container";
import { Image } from "@components/Image";
import { Masonry } from "@components/Masonry";

export const SmokerScreen = (): JSX.Element => {
  const { t } = useTranslation();

  const images = [Ribs, Ribs, Ribs, Ribs, Ribs, Ribs, Ribs, Ribs, Ribs];

  return (
    <>
      <Jumbotron
        title="team.jumbotron.title"
        subtitle="team.jumbotron.subtitle"
        images={[
          {
            id: uuid(),
            data: Ribs,
            alt: "",
          },
        ]}
      />
      <SplitScreenContainer>
        <SplitScreenWrapper>
          <InnerContainer>
            <Container
              alignment="left"
              title="team.olympe.title"
              subtitle="team.olympe.subtitle"
            >
              <Content alignment="left">
                {t({ id: "team.olympe.first.text" })}
              </Content>
            </Container>
          </InnerContainer>
          <InnerContainer>
            <Image alt="" src={Ribs} />
          </InnerContainer>
        </SplitScreenWrapper>
      </SplitScreenContainer>

      <SplitScreenContainer>
        <SplitScreenWrapper>
          <InnerContainer>
            <Image alt="" src={Ribs} />
          </InnerContainer>
          <InnerContainer>
            <Container
              alignment="left"
              title="team.olympe.title"
              subtitle="team.olympe.subtitle"
            >
              <Content alignment="left">
                {t({ id: "team.olympe.second.text" })}
              </Content>
            </Container>
          </InnerContainer>
        </SplitScreenWrapper>
      </SplitScreenContainer>

      <SplitScreenContainer>
        <SplitScreenWrapper>
          <InnerContainer>
            <Container
              alignment="left"
              title="team.vincent.title"
              subtitle="team.vincent.subtitle"
            >
              <Content alignment="left">
                {t({ id: "team.vincent.first.text" })}
              </Content>
            </Container>
          </InnerContainer>
          <InnerContainer>
            <Image alt="" src={Ribs} />
          </InnerContainer>
        </SplitScreenWrapper>
      </SplitScreenContainer>

      <SplitScreenContainer>
        <SplitScreenWrapper>
          <InnerContainer>
            <Image alt="" src={Ribs} />
          </InnerContainer>
          <InnerContainer>
            <Container
              alignment="left"
              title="team.vincent.title"
              subtitle="team.vincent.subtitle"
            >
              <Content alignment="left">
                {t({ id: "team.vincent.second.text" })}
              </Content>
            </Container>
          </InnerContainer>
        </SplitScreenWrapper>
      </SplitScreenContainer>

      <SplitScreenContainer>
        <SplitScreenWrapper>
          <InnerContainer>
            <Container
              alignment="left"
              title="team.vincent.title"
              subtitle="team.vincent.subtitle"
            >
              <Content alignment="left">
                {t({ id: "team.vincent.third.text" })}
              </Content>
            </Container>
          </InnerContainer>
          <InnerContainer>
            <Image alt="" src={Ribs} />
          </InnerContainer>
        </SplitScreenWrapper>
      </SplitScreenContainer>
      <Masonry images={images} />
    </>
  );
};
