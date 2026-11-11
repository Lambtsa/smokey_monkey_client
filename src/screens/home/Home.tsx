"use client";

import Image, { type StaticImageData } from "next/image";
import type { ReactElement } from "react";

import Background from "@/assets/images/background-monkey.jpg";
import Cocktails from "@/assets/images/bar-monkey.jpg";
import Elvis from "@/assets/images/elvis-monkey.jpg";
import Ribs from "@/assets/images/ribs.webp";
import Sports from "@/assets/images/sports-monkey.jpg";
import {
  Container, Content, Ornament,
} from "@/components/container";
import { Hero } from "@/components/hero";
import { Hours } from "@/components/hours";
import { Image as FillImage } from "@/components/image";
import { LinkBtn } from "@/components/link_btn";
import { SplitScreen } from "@/components/split_screen";
import { useTranslation } from "@/hooks/useTranslation";
import { ReservationSection } from "@/screens/restaurant/reservation";
import type { TranslationKey } from "@/types/translations";
import { routes } from "@/utils/routes";

interface HouseCard {
  id: string;
  image: StaticImageData;
  label: TranslationKey;
  title: TranslationKey;
  content: TranslationKey;
  link: TranslationKey;
  href: string;
}

/* The three sides of the place: smoker, bar, matches */
const houses: HouseCard[] = [
  {
    id: "smoker",
    image: Ribs,
    label: "home.houses.smoker.label",
    title: "home.houses.smoker.title",
    content: "home.houses.smoker.content",
    link: "home.houses.smoker.link",
    href: routes.smoker(),
  },
  {
    id: "bar",
    image: Cocktails,
    label: "home.houses.bar.label",
    title: "home.houses.bar.title",
    content: "home.houses.bar.content",
    link: "home.houses.bar.link",
    href: routes.bar(),
  },
  {
    id: "matches",
    image: Sports,
    label: "home.houses.matches.label",
    title: "home.houses.matches.title",
    content: "home.houses.matches.content",
    link: "home.houses.matches.link",
    href: routes.bar(),
  },
];

export const HomeScreen = (): ReactElement => {
  const { t } = useTranslation();

  return (
    <>
      <Hero
        size="full"
        title="home.jumbotron.title"
        subtitle="home.jumbotron.subtitle"
        description="home.jumbotron.description"
        image={Background}
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
        aside={<Hours />}
      />

      {/* Trois maisons sous un même toit */}
      <section className="px-6 py-20 md:px-10 md:py-32 bg-forest">
        <div className="flex flex-col gap-12 md:gap-16 max-w-[1280px] mx-auto">
          <div className="flex flex-col items-center gap-4 text-center">
            <p className="eyebrow">
              {t({
                id: "home.houses.title",
              })}
            </p>
            <h2 className="font-display font-normal text-4xl md:text-[64px] leading-tight">
              {t({
                id: "home.houses.subtitle",
              })}
            </h2>
            <Ornament />
          </div>
          <ul className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-8">
            {houses.map((house) => (
              <li key={house.id} className="flex flex-col p-2.5 md:p-3.5 border border-brass/40 bg-bottle">
                <Image
                  src={house.image}
                  alt=""
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="w-full h-56 md:h-auto md:aspect-[4/5] object-cover"
                />
                <div className="flex flex-col items-start gap-3.5 px-2 pt-6 pb-3 md:px-3.5 md:pt-7">
                  <p className="eyebrow">
                    {t({
                      id: house.label,
                    })}
                  </p>
                  <h3 className="font-display font-normal text-[28px] md:text-[34px] leading-tight">
                    {t({
                      id: house.title,
                    })}
                  </h3>
                  <p className="text-[17px] leading-relaxed font-light text-parchment">
                    {t({
                      id: house.content,
                    })}
                  </p>
                  <LinkBtn href={house.href} text={house.link} />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Événements */}
      <SplitScreen
        order="reversed"
        background="burgundy"
        imgBlock={<FillImage alt="" sizes="(max-width: 768px) 100vw, 50vw" src={Elvis} />}
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
            <LinkBtn href={routes.contact()} text="home.events.link" />
          </Container>
        )}
      />

      <ReservationSection />
    </>
  );
};
