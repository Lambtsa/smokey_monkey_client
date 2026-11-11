"use client";

import Link from "next/link";
import type { ReactElement } from "react";

import Music from "@/assets/images/music-monkeys.jpg";
import { Container, Content } from "@/components/container";
import { Hero } from "@/components/hero";
import { Icon, type IconType } from "@/components/icon";
import { LinkBtn } from "@/components/link_btn";
import { Map } from "@/components/map";
import { SplitScreen } from "@/components/split_screen";
import { details } from "@/constants/details";
import { useTranslation } from "@/hooks/useTranslation";
import type { TranslationKey } from "@/types/translations";

interface ContactCard {
  icon: IconType;
  title: TranslationKey;
  text: TranslationKey;
  href?: string;
}

const cards: ContactCard[] = [
  {
    icon: "phone",
    title: "contact.phone.title",
    text: "contact.phone.subtitle",
    href: details.mobile,
  },
  {
    icon: "mail",
    title: "contact.email.title",
    text: "contact.email.subtitle",
    href: `mailto:${details.email}`,
  },
  {
    icon: "clock",
    title: "contact.times.title",
    text: "contact.times.subtitle",
  },
];

interface ContactScreenProps {
  mapboxToken: string;
}

export const ContactScreen = ({ mapboxToken }: ContactScreenProps): ReactElement => {
  const { t } = useTranslation();

  return (
    <>
      <Hero
        title="contact.jumbotron.title"
        subtitle="contact.jumbotron.subtitle"
        image={Music}
      />

      <section className="flex justify-center w-full bg-forest">
        <Container
          maxWidth="PC"
          title="contact.details.title"
          subtitle="contact.details.subtitle"
        >
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 w-full mt-4">
            {cards.map((card) => (
              <li key={card.title} className="flex flex-col items-center gap-4 px-6 py-10 text-center border border-brass/40 bg-bottle">
                <Icon icon={card.icon} size={32} className="text-brass" />
                <h3 className="eyebrow">
                  {t({
                    id: card.title,
                  })}
                </h3>
                {card.href ? (
                  <Link href={card.href} className="text-lg break-all text-cream hover:text-brass">
                    {t({
                      id: card.text,
                    })}
                  </Link>
                ) : (
                  <p className="whitespace-pre-line text-lg text-cream">
                    {t({
                      id: card.text,
                    })}
                  </p>
                )}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Venez nous retrouver */}
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
