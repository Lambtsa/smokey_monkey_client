import { v4 as uuid } from "uuid";
import Ribs from "@assets/images/ribs.webp";
import Prohibition from "@assets/images/prohibition-monkey.jpg";
import Sports from "@assets/images/sports-monkey.jpg";
import Elvis from "@assets/images/elvis-monkey.jpg";
import { Image } from "@components/Image";
import { Jumbotron } from "@components/Jumbotron";
import { SplitScreen } from "@components/SplitScreen";
import { Container, Content } from "@components/Container";
import { LinkBtn } from "@components/LinkBtn";
import { useTranslation } from "@hooks/useTranslation";
import { routes } from "@helpers/routes";

export const BarScreen = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <>
      <Jumbotron
        title="bar.jumbotron.title"
        subtitle="bar.jumbotron.subtitle"
        images={[
          {
            id: uuid(),
            data: Ribs,
            alt: "",
          },
        ]}
        link={{
          text: "bar.jumbotron.btn",
          href: routes.restaurant.reservation(),
        }}
      />

      {/* Intro */}
      <SplitScreen
        leftBlock={
          <Container
            alignment="left"
            title="bar.intro.title"
            subtitle="bar.intro.subtitle"
          >
            <Content alignment="left">{t({ id: "bar.intro.content" })}</Content>
          </Container>
        }
        rightBlock={<Image alt="" src={Prohibition} />}
      />

      {/* Matches */}
      <SplitScreen
        leftBlock={<Image alt="" src={Sports} />}
        rightBlock={
          <Container
            alignment="left"
            title="bar.matches.title"
            subtitle="bar.matches.subtitle"
          >
            <Content alignment="left">
              {t({ id: "bar.matches.content" })}
            </Content>
            <LinkBtn href="" text="generic.reserve" />
          </Container>
        }
      />

      {/* Le soirées spéciales */}
      <SplitScreen
        leftBlock={
          <Container
            alignment="left"
            title="bar.specials.title"
            subtitle="bar.specials.subtitle"
          >
            <Content alignment="left">
              {t({ id: "bar.specials.content" })}
            </Content>
            <LinkBtn href="" text="generic.reserve" />
          </Container>
        }
        rightBlock={<Image alt="" src={Elvis} />}
      />
    </>
  );
};
