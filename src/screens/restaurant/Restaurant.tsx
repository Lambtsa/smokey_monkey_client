"use client";

import type { ReactElement } from "react";

import Bar from "@/assets/images/bar.jpg";
import Dessert from "@/assets/images/dessert.jpeg";
import Fingerfood from "@/assets/images/fingerfood.jpeg";
import Ribs from "@/assets/images/ribs.webp";
import Smoker from "@/assets/images/smoker2.jpeg";
import { Container, Content } from "@/components/container";
import { Image } from "@/components/image";
import { Jumbotron } from "@/components/jumbotron";
import { LinkBtn } from "@/components/link_btn";
import { SplitScreen } from "@/components/split_screen";
import { useTranslation } from "@/hooks/useTranslation";
import { routes } from "@/utils/routes";

import { ReservationSection } from "./reservation";

const HALF = "(max-width: 768px) 100vw, 50vw";

export const RestaurantScreen = (): ReactElement => {
  const { t } = useTranslation();

  return (
    <>
      <Jumbotron
        title="restaurant.jumbotron.title"
        subtitle="restaurant.jumbotron.subtitle"
        link={{
          text: "restaurant.jumbotron.btn",
          href: routes.restaurant.reservation(),
        }}
        images={[
          {
            id: "ribs",
            data: Ribs,
            alt: "",
          },
        ]}
      />

      {/* Intro */}
      <div className="flex flex-col justify-center items-center gap-8 w-full h-dvh bg-eerie-black">
        <Container
          maxWidth="TABLET"
          title="restaurant.intro.title"
          subtitle="restaurant.intro.subtitle"
        >
          <Content alignment="center">
            {t({
              id: "restaurant.intro.content",
            })}
          </Content>
        </Container>
      </div>

      {/* Fingerfoods */}
      <SplitScreen
        contentBlock={(
          <Container
            alignment="left"
            title="restaurant.starter.title"
            subtitle="restaurant.starter.subtitle"
          >
            <Content alignment="left">
              {t({
                id: "restaurant.starter.content",
              })}
            </Content>
          </Container>
        )}
        imgBlock={<Image alt="" sizes={HALF} src={Fingerfood} />}
      />

      {/* Smoker */}
      <SplitScreen
        order="reversed"
        background="black"
        imgBlock={<Image alt="" sizes={HALF} src={Smoker} />}
        contentBlock={(
          <Container
            alignment="left"
            title="restaurant.smoker.title"
            subtitle="restaurant.smoker.subtitle"
          >
            <Content alignment="left">
              {t({
                id: "restaurant.smoker.content",
              })}
            </Content>
            <LinkBtn href={routes.smoker()} text="restaurant.smoker.btn.text" />
          </Container>
        )}
      />

      {/* Desserts */}
      <SplitScreen
        background="red"
        contentBlock={(
          <Container
            alignment="left"
            title="restaurant.deserts.title"
            subtitle="restaurant.deserts.subtitle"
          >
            <Content alignment="left">
              {t({
                id: "restaurant.deserts.content",
              })}
            </Content>
          </Container>
        )}
        imgBlock={<Image alt="" sizes={HALF} src={Dessert} />}
      />

      {/* Le restaurant */}
      <SplitScreen
        order="reversed"
        background="black"
        contentBlock={(
          <Container
            alignment="left"
            title="restaurant.venue.title"
            subtitle="restaurant.venue.subtitle"
          >
            <Content alignment="left">
              {t({
                id: "restaurant.venue.content",
              })}
            </Content>
          </Container>
        )}
        imgBlock={<Image alt="" sizes={HALF} src={Bar} />}
      />

      <ReservationSection />
    </>
  );
};
