"use client";

import type { ReactElement } from "react";

import Bar from "@/assets/images/bar-monkey2.jpg";
import Elvis from "@/assets/images/elvis-monkey.jpg";
import Prohibition from "@/assets/images/prohibition-monkey.jpg";
import Sports from "@/assets/images/sports-monkey.jpg";
import { Container, Content } from "@/components/container";
import { Hero } from "@/components/hero";
import { Image } from "@/components/image";
import { LinkBtn } from "@/components/link_btn";
import { SplitScreen } from "@/components/split_screen";
import { useTranslation } from "@/hooks/useTranslation";
import { routes } from "@/utils/routes";

const HALF = "(max-width: 768px) 100vw, 50vw";

export const BarScreen = (): ReactElement => {
  const { t } = useTranslation();

  return (
    <>
      <Hero
        title="bar.jumbotron.title"
        subtitle="bar.jumbotron.subtitle"
        image={Bar}
        links={[
          {
            text: "generic.reserveTable",
            href: routes.restaurant.reservation(),
          },
        ]}
      />

      {/* Intro */}
      <SplitScreen
        contentBlock={(
          <Container
            alignment="left"
            title="bar.intro.title"
            subtitle="bar.intro.subtitle"
          >
            <Content alignment="left">
              {t({
                id: "bar.intro.content",
              })}
            </Content>
          </Container>
        )}
        imgBlock={<Image alt="" sizes={HALF} src={Prohibition} />}
      />

      {/* Matches */}
      <SplitScreen
        background="forest"
        imgBlock={<Image alt="" sizes={HALF} src={Sports} />}
        contentBlock={(
          <Container
            alignment="left"
            title="bar.matches.title"
            subtitle="bar.matches.subtitle"
          >
            <Content alignment="left">
              {t({
                id: "bar.matches.content",
              })}
            </Content>
            <LinkBtn href={routes.restaurant.reservation()} text="generic.reserveTable" />
          </Container>
        )}
      />

      {/* Les soirées spéciales */}
      <SplitScreen
        background="burgundy"
        contentBlock={(
          <Container
            alignment="left"
            title="bar.specials.title"
            subtitle="bar.specials.subtitle"
          >
            <Content alignment="left">
              {t({
                id: "bar.specials.content",
              })}
            </Content>
            <LinkBtn href={routes.restaurant.reservation()} text="generic.reserveTable" />
          </Container>
        )}
        imgBlock={<Image alt="" sizes={HALF} src={Elvis} />}
      />
    </>
  );
};
