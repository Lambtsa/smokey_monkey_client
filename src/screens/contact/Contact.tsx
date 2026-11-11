"use client";

import Link from "next/link";
import type { ReactElement } from "react";

import Music from "@/assets/images/music-monkeys.jpg";
import { Container, TitleContainer } from "@/components/container";
import { Icon } from "@/components/icon";
import { Jumbotron } from "@/components/jumbotron";
import { details } from "@/constants/details";
import { useTranslation } from "@/hooks/useTranslation";

const cardClassName = "flex flex-col flex-1 justify-start items-center gap-4 w-full px-4 py-12 rounded-[7px] bg-ivory/20";
const titleClassName = "font-display font-bold uppercase text-center text-sm leading-4 text-ivory/50";
const linkClassName = "font-normal text-left text-base leading-5 text-ivory hover:underline";

export const ContactScreen = (): ReactElement => {
  const { t } = useTranslation();

  return (
    <>
      <Jumbotron
        title="contact.jumbotron.title"
        subtitle="contact.jumbotron.subtitle"
        images={[
          {
            id: "music",
            data: Music,
            alt: "",
          },
        ]}
      />
      <section className="flex flex-col justify-center items-center gap-8 w-full min-h-dvh bg-dark-green">
        <Container
          maxWidth="TV"
          alignment="center"
          title="contact.details.title"
          subtitle="contact.details.subtitle"
        >
          <div className="grid grid-cols-1 md:grid-cols-[minmax(300px,1fr)_1fr_1fr] gap-8 w-full">
            <div className={cardClassName}>
              <Icon icon="phone" />
              <TitleContainer alignment="center">
                <h2 className={titleClassName}>
                  {t({
                    id: "contact.phone.title",
                  })}
                </h2>
                <Link href={details.mobile} className={linkClassName}>
                  {t({
                    id: "contact.phone.subtitle",
                  })}
                </Link>
              </TitleContainer>
            </div>
            <div className={cardClassName}>
              <Icon icon="mail" />
              <TitleContainer alignment="center">
                <h2 className={titleClassName}>
                  {t({
                    id: "contact.email.title",
                  })}
                </h2>
                <Link href={`mailto:${details.email}`} className={linkClassName}>
                  {t({
                    id: "contact.email.subtitle",
                  })}
                </Link>
              </TitleContainer>
            </div>
            <div className={cardClassName}>
              <Icon icon="times" />
              <TitleContainer alignment="center">
                <h2 className={titleClassName}>
                  {t({
                    id: "contact.times.title",
                  })}
                </h2>
                <p className="w-full whitespace-pre-line font-normal text-center text-base leading-5 text-ivory">
                  {t({
                    id: "contact.times.subtitle",
                  })}
                </p>
              </TitleContainer>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};
