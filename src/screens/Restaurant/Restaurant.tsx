import { Jumbotron } from "@components/Jumbotron";
import { v4 as uuid } from "uuid";
import Ribs from "@assets/images/ribs.webp";
import Fingerfood from "@assets/images/fingerfood.jpeg";
import Smoker from "@assets/images/smoker2.jpeg";
import Dessert from "@assets/images/dessert.jpeg";
import Bar from "@assets/images/bar.jpg";
import { RestaurantContainer } from "./Restaurant.styles";
import { useTranslation } from "@hooks/useTranslation";
import { Container, Content } from "@components/Container";
import { Image } from "@components/Image";
import { routes } from "@helpers/routes";
import { CONTAINER } from "@constants/layout";
import { LinkBtn } from "@components/LinkBtn";
import { SplitScreen } from "@components/SplitScreen";
import { ReservationSection } from "./Reservation";

export const RestaurantScreen = (): JSX.Element => {
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
            id: uuid(),
            data: Ribs,
            alt: "",
          },
        ]}
      />

      {/* Intro */}
      <RestaurantContainer>
        <Container
          maxWidth={CONTAINER.TABLET}
          title="restaurant.intro.title"
          subtitle="restaurant.intro.subtitle"
        >
          <Content alignment="center">
            {t({ id: "restaurant.intro.content" })}
          </Content>
        </Container>
      </RestaurantContainer>

      {/* Fingerfoods */}
      <SplitScreen
        contentBlock={
          <Container
            alignment="left"
            title="restaurant.starter.title"
            subtitle="restaurant.starter.subtitle"
          >
            <Content alignment="left">
              {t({ id: "restaurant.starter.content" })}
            </Content>
          </Container>
        }
        imgBlock={
          <Image
            alt=""
            sizes="(max-width: 768px) 100vw, 50vw"
            src={Fingerfood}
          />
        }
      />

      {/* Smoker */}
      <SplitScreen
        order="reversed"
        background="black"
        imgBlock={
          <Image alt="" sizes="(max-width: 768px) 100vw, 50vw" src={Smoker} />
        }
        contentBlock={
          <Container
            alignment="left"
            title="restaurant.smoker.title"
            subtitle="restaurant.smoker.subtitle"
          >
            <Content alignment="left">
              {t({ id: "restaurant.smoker.content" })}
            </Content>
            <LinkBtn href="" text="restaurant.smoker.btn.text" />
          </Container>
        }
      />

      {/* Deserts */}
      <SplitScreen
        background="red"
        contentBlock={
          <Container
            alignment="left"
            title="restaurant.deserts.title"
            subtitle="restaurant.deserts.subtitle"
          >
            <Content alignment="left">
              {t({ id: "restaurant.deserts.content" })}
            </Content>
          </Container>
        }
        imgBlock={
          <Image alt="" sizes="(max-width: 768px) 100vw, 50vw" src={Dessert} />
        }
      />

      {/* Le restaurant */}
      <SplitScreen
        order="reversed"
        background="black"
        contentBlock={
          <Container
            alignment="left"
            title="restaurant.venue.title"
            subtitle="restaurant.venue.subtitle"
          >
            <Content alignment="left">
              {t({ id: "restaurant.venue.content" })}
            </Content>
          </Container>
        }
        imgBlock={
          <Image alt="" sizes="(max-width: 768px) 100vw, 50vw" src={Bar} />
        }
      />

      <ReservationSection />
    </>
  );
};
