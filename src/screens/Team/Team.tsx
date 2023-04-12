import Dogs from "@assets/images/dogs.jpeg";
import { useTranslation } from "@hooks/useTranslation";
import {
  SplitScreenContainer,
  SplitScreenWrapper,
  InnerContainer,
  Img,
} from "./Team.styles";
import { Jumbotron } from "@components/Jumbotron";
import { Container, Content } from "@components/Container";

export const TeamScreen = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <>
      <Jumbotron
        title="team.jumbotron.title"
        subtitle="team.jumbotron.subtitle"
        images={[]}
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
            <Img alt="" src={Dogs} fill />
          </InnerContainer>
        </SplitScreenWrapper>
      </SplitScreenContainer>

      <SplitScreenContainer>
        <SplitScreenWrapper>
          <InnerContainer>
            <Img alt="" src={Dogs} fill />
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
            <Img alt="" src={Dogs} fill />
          </InnerContainer>
        </SplitScreenWrapper>
      </SplitScreenContainer>

      <SplitScreenContainer>
        <SplitScreenWrapper>
          <InnerContainer>
            <Img alt="" src={Dogs} fill />
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
            <Img alt="" src={Dogs} fill />
          </InnerContainer>
        </SplitScreenWrapper>
      </SplitScreenContainer>
    </>
  );
};
