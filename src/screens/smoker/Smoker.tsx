"use client";

import type { ReactElement } from "react";

import Ribs from "@/assets/images/ribs.webp";
import SmokerBob from "@/assets/images/smoker-bob.jpg";
import Smoker1 from "@/assets/images/smoker1.jpeg";
import Smoker2 from "@/assets/images/smoker2.jpeg";
import Smoker3 from "@/assets/images/smoker3.jpeg";
import Smoker4 from "@/assets/images/smoker4.jpeg";
import Smoker5 from "@/assets/images/smoker5.jpeg";
import Smoker6 from "@/assets/images/smoker6.jpeg";
import Smoker7 from "@/assets/images/smoker7.jpeg";
import Smoker8 from "@/assets/images/smoker8.jpeg";
import Smoker9 from "@/assets/images/smoker9.jpeg";
import { Container, Content } from "@/components/container";
import { Hero } from "@/components/hero";
import { Image } from "@/components/image";
import { Masonry } from "@/components/masonry";
import { SplitScreen } from "@/components/split_screen";
import { useTranslation } from "@/hooks/useTranslation";
import { routes } from "@/utils/routes";

const images = [
  Smoker1,
  Smoker2,
  Smoker3,
  Smoker4,
  Smoker5,
  Smoker6,
  Smoker7,
  Smoker8,
  Smoker9,
].map((img, index) => ({
  id: `smoker${index + 1}`,
  img,
}));

export const SmokerScreen = (): ReactElement => {
  const { t } = useTranslation();

  return (
    <>
      <Hero
        title="smoker.jumbotron.title"
        subtitle="smoker.jumbotron.subtitle"
        image={Ribs}
        links={[
          {
            text: "generic.reserveTable",
            href: routes.restaurant.reservation(),
          },
        ]}
      />

      {/* L'histoire */}
      <SplitScreen
        showImage={false}
        contentBlock={(
          <Container
            alignment="left"
            title="smoker.intro.title"
            subtitle="smoker.intro.subtitle"
          >
            <Content alignment="left">
              {t({
                id: "smoker.intro.content",
              })}
            </Content>
          </Container>
        )}
        imgBlock={<Image alt="" sizes="(max-width: 768px) 100vw, 50vw" src={SmokerBob} />}
      />

      <Masonry images={images} />
    </>
  );
};
