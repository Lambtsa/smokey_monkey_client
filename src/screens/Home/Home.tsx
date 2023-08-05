import { Jumbotron } from "@components/Jumbotron";
import { v4 as uuid } from "uuid";
import { Map } from "@components/Map";
import Ribs from "@assets/images/ribs.webp";
import Background from "@assets/images/background-monkey.jpg";
import Sports from "@assets/images/sports-monkey.jpg";
import Cocktails from "@assets/images/bar-monkey.jpg";
import Music from "@assets/images/music-monkeys.jpg";
import { Image } from "@components/Image";
import { Container, Content } from "@components/Container";
import { useTranslation } from "@hooks/useTranslation";
import { LinkBtn } from "@components/LinkBtn";
import { SplitScreen } from "@components/SplitScreen";
import { routes } from "@helpers/routes";
import { details } from "@constants/details";

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
            data: Background,
            alt: "",
          },
        ]}
      />

      {/* Le Smoker */}
      <SplitScreen
        leftBlock={
          <Container
            alignment="left"
            title="home.intro.title"
            subtitle="home.intro.subtitle"
          >
            <Content alignment="left">
              {t({ id: "home.intro.content" })}
            </Content>
            <LinkBtn href={routes.smoker()} text="generic.findOutMore" />
          </Container>
        }
        rightBlock={<Image alt="" src={Ribs} />}
      />

      {/* Le Bar */}
      <SplitScreen
        background="red"
        leftBlock={<Image alt="" src={Cocktails} />}
        rightBlock={
          <Container
            alignment="left"
            title="home.bar.title"
            subtitle="home.bar.subtitle"
          >
            <Content alignment="left">{t({ id: "home.bar.content" })}</Content>
            <LinkBtn href={routes.bar()} text="generic.findOutMore" />
          </Container>
        }
      />

      {/* Les Matches */}
      <SplitScreen
        background="black"
        leftBlock={
          <Container
            alignment="left"
            title="home.sport.title"
            subtitle="home.sport.subtitle"
          >
            <Content alignment="left">
              {t({ id: "home.sport.content" })}
            </Content>
          </Container>
        }
        rightBlock={<Image alt="" src={Sports} />}
      />

      {/* Les events */}
      <SplitScreen
        background="blue"
        rightBlock={
          <Container
            alignment="left"
            title="home.events.title"
            subtitle="home.events.subtitle"
          >
            <Content alignment="left">
              {t({ id: "home.events.content" })}
            </Content>
          </Container>
        }
        leftBlock={<Image alt="" src={Music} />}
      />

      {/* Localisation */}
      <SplitScreen
        rightBlock={<Map />}
        leftBlock={
          <Container
            alignment="left"
            title="home.location.title"
            subtitle="home.location.subtitle"
          >
            <Content alignment="left">
              {t({ id: "home.location.content" })}
            </Content>
            <LinkBtn
              openInTab
              href={details.googleMaps}
              text="home.location.btn.text"
            />
          </Container>
        }
      />
    </>
  );
};
