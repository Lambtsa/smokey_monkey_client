import {
  Content,
  Img,
  SplitScreen,
  Subtitle,
  Title,
} from "@components/SplitScreen";
import Dogs from "@assets/images/dogs.jpeg";
import { useTranslation } from "@hooks/useTranslation";
import { Container, TitleContainer, TextLink } from "./Team.styles";
import { Jumbotron } from "@components/Jumbotron";

export const TeamScreen = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <>
      <Jumbotron
        title="team.jumbotron.title"
        subtitle="team.jumbotron.subtitle"
      />
      <SplitScreen
        rightBlock={
          <Container>
            <TitleContainer>
              <Title>{t({ id: "team.olympe.title" })}</Title>
              <Subtitle>{t({ id: "team.olympe.subtitle" })}</Subtitle>
            </TitleContainer>
            <Content>{t({ id: "team.olympe.text" })}</Content>
          </Container>
        }
        leftBlock={<Img alt="" src={Dogs} />}
      />
      <SplitScreen
        leftBlock={
          <Container>
            <TitleContainer>
              <Title>{t({ id: "team.vincent.title" })}</Title>
              <Subtitle>{t({ id: "team.vincent.subtitle" })}</Subtitle>
            </TitleContainer>
            <Content>{t({ id: "team.vincent.firstText" })}</Content>
          </Container>
        }
        rightBlock={<Img alt="" src={Dogs} />}
      />
      <SplitScreen
        rightBlock={
          <Container>
            <TitleContainer>
              <Title>{t({ id: "team.borders.title" })}</Title>
              <Subtitle>{t({ id: "team.vincent.subtitle" })}</Subtitle>
            </TitleContainer>
            <Content>
              {t(
                { id: "team.vincent.secondText" },
                {
                  borderUrl: (
                    <TextLink href={"https://www.les-borders-et-nous.com/"}>
                      Les Borders Et Nous
                    </TextLink>
                  ),
                }
              )}
            </Content>
          </Container>
        }
        leftBlock={<Img alt="" src={Dogs} />}
      />
    </>
  );
};
