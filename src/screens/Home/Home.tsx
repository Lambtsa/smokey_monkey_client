import { Jumbotron } from "@components/Jumbotron";
import { v4 as uuid } from "uuid";
import { Map } from "@components/Map";
import Ribs from "@assets/images/ribs.webp";
import Background from "@assets/images/background-monkey.jpg";
import Sports from "@assets/images/sports-monkey.jpg";
import Cocktails from "@assets/images/bar-monkey.jpg";
import Elvis from "@assets/images/elvis-monkey.jpg";
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
        showImage={false}
        contentBlock={
          <Container
            alignment="left"
            title="home.intro.title"
            subtitle="home.intro.subtitle"
          >
            <Content $alignment="left">
              {t({ id: "home.intro.content" })}
            </Content>
            <LinkBtn href={routes.smoker()} text="generic.findOutMore" />
          </Container>
        }
        imgBlock={
          <Image
            priority={false}
            alt=""
            sizes="(max-width: 768px) 100vw, 50vw"
            src={Ribs}
          />
        }
      />

      {/* Le Bar */}
      <SplitScreen
        order="reversed"
        background="red"
        imgBlock={
          <Image
            alt=""
            sizes="(max-width: 768px) 100vw, 50vw"
            src={Cocktails}
          />
        }
        contentBlock={
          <Container
            alignment="left"
            title="home.bar.title"
            subtitle="home.bar.subtitle"
          >
            <Content $alignment="left">{t({ id: "home.bar.content" })}</Content>
            {/* <LinkBtn href={routes.bar()} text="generic.findOutMore" /> */}
          </Container>
        }
      />

      {/* Les Matches */}
      <SplitScreen
        background="black"
        contentBlock={
          <Container
            alignment="left"
            title="home.sport.title"
            subtitle="home.sport.subtitle"
          >
            <Content $alignment="left">
              {t({ id: "home.sport.content" })}
            </Content>
          </Container>
        }
        imgBlock={
          <Image alt="" sizes="(max-width: 768px) 100vw, 50vw" src={Sports} />
        }
      />

      {/* Les events */}
      <SplitScreen
        order="reversed"
        background="blue"
        contentBlock={
          <Container
            alignment="left"
            title="home.events.title"
            subtitle="home.events.subtitle"
          >
            <Content $alignment="left">
              {t({ id: "home.events.content" })}
            </Content>
          </Container>
        }
        imgBlock={
          <Image alt="" sizes="(max-width: 768px) 100vw, 50vw" src={Elvis} />
        }
      />

      {/* Localisation */}
      <SplitScreen
        imgBlock={<Map />}
        contentBlock={
          <Container
            alignment="left"
            title="home.location.title"
            subtitle="home.location.subtitle"
          >
            <Content $alignment="left">
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
