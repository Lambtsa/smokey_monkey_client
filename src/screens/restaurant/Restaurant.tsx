"use client";

import type { ReactElement } from "react";

import Bar from "@/assets/images/bar.jpg";
import Dessert from "@/assets/images/dessert.jpeg";
import Fingerfood from "@/assets/images/fingerfood.jpeg";
import Ribs from "@/assets/images/ribs.webp";
import Smoker from "@/assets/images/smoker2.jpeg";
import { Container, Content } from "@/components/container";
import { Hero } from "@/components/hero";
import { Image } from "@/components/image";
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
      <Hero
        title="restaurant.jumbotron.title"
        subtitle="restaurant.jumbotron.subtitle"
        image={Ribs}
        links={[
          {
            text: "generic.reserveTable",
            href: routes.restaurant.reservation(),
          },
          {
            text: "home.jumbotron.menu",
            href: routes.menu(),
            newTab: true,
          },
        ]}
      />

      {/* Intro */}
      <div className="flex flex-col justify-center items-center w-full bg-forest">
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
        background="forest"
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
        background="burgundy"
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
        background="forest"
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
