"use client";

import type { ReactElement } from "react";

import Background from "@/assets/images/background-monkey.jpg";
import Cocktails from "@/assets/images/bar-monkey.jpg";
import Elvis from "@/assets/images/elvis-monkey.jpg";
import Ribs from "@/assets/images/ribs.webp";
import Sports from "@/assets/images/sports-monkey.jpg";
import { Container, Content } from "@/components/container";
import { Image } from "@/components/image";
import { Jumbotron } from "@/components/jumbotron";
import { LinkBtn } from "@/components/link_btn";
import { Map } from "@/components/map";
import { SplitScreen } from "@/components/split_screen";
import { details } from "@/constants/details";
import { useTranslation } from "@/hooks/useTranslation";
import { routes } from "@/utils/routes";

interface HomeScreenProps {
  mapboxToken: string;
}

const HALF = "(max-width: 768px) 100vw, 50vw";

export const HomeScreen = ({ mapboxToken }: HomeScreenProps): ReactElement => {
  const { t } = useTranslation();

  return (
    <>
      {/* Jumbotron */}
      <Jumbotron
        title="home.jumbotron.title"
        subtitle="home.jumbotron.subtitle"
        images={[
          {
            id: "background",
            data: Background,
            alt: "",
          },
        ]}
      />

      {/* Le Smoker */}
      <SplitScreen
        showImage={false}
        contentBlock={(
          <Container
            alignment="left"
            title="home.intro.title"
            subtitle="home.intro.subtitle"
          >
            <Content alignment="left">
              {t({
                id: "home.intro.content",
              })}
            </Content>
            <LinkBtn href={routes.smoker()} text="generic.findOutMore" />
          </Container>
        )}
        imgBlock={<Image alt="" sizes={HALF} src={Ribs} />}
      />

      {/* Le Bar */}
      <SplitScreen
        order="reversed"
        background="red"
        imgBlock={<Image alt="" sizes={HALF} src={Cocktails} />}
        contentBlock={(
          <Container
            alignment="left"
            title="home.bar.title"
            subtitle="home.bar.subtitle"
          >
            <Content alignment="left">
              {t({
                id: "home.bar.content",
              })}
            </Content>
          </Container>
        )}
      />

      {/* Les Matches */}
      <SplitScreen
        background="black"
        contentBlock={(
          <Container
            alignment="left"
            title="home.sport.title"
            subtitle="home.sport.subtitle"
          >
            <Content alignment="left">
              {t({
                id: "home.sport.content",
              })}
            </Content>
          </Container>
        )}
        imgBlock={<Image alt="" sizes={HALF} src={Sports} />}
      />

      {/* Les events */}
      <SplitScreen
        order="reversed"
        background="blue"
        contentBlock={(
          <Container
            alignment="left"
            title="home.events.title"
            subtitle="home.events.subtitle"
          >
            <Content alignment="left">
              {t({
                id: "home.events.content",
              })}
            </Content>
          </Container>
        )}
        imgBlock={<Image alt="" sizes={HALF} src={Elvis} />}
      />

      {/* Localisation */}
      <SplitScreen
        imgBlock={<Map accessToken={mapboxToken} />}
        contentBlock={(
          <Container
            alignment="left"
            title="home.location.title"
            subtitle="home.location.subtitle"
          >
            <Content alignment="left">
              {t({
                id: "home.location.content",
              })}
            </Content>
            <LinkBtn
              newTab
              href={details.googleMaps}
              text="home.location.btn.text"
            />
          </Container>
        )}
      />
    </>
  );
};
