import { Jumbotron } from "@components/Jumbotron";
import { v4 as uuid } from "uuid";
import Ribs from "@assets/images/ribs.webp";
import {
  InnerContainer,
  RestaurantContainer,
  SplitScreenContainer,
  SplitScreenWrapper,
} from "./Restaurant.styles";
import { useTranslation } from "@hooks/useTranslation";
import { Container, Content } from "@components/Container";
import { Image } from "@components/Image";
import { routes } from "@helpers/routes";
import { CONTAINER } from "@constants/layout";
import { LinkBtn } from "@components/LinkBtn";

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

      <SplitScreenContainer>
        <SplitScreenWrapper>
          <InnerContainer>
            <Container
              alignment="left"
              title="restaurant.starter.title"
              subtitle="restaurant.starter.subtitle"
            >
              <Content alignment="left">
                {t({ id: "restaurant.starter.content" })}
              </Content>
            </Container>
          </InnerContainer>
          <InnerContainer>
            <Image alt="" src={Ribs} />
          </InnerContainer>
        </SplitScreenWrapper>
      </SplitScreenContainer>

      <SplitScreenContainer>
        <SplitScreenWrapper>
          <InnerContainer>
            <Image alt="" src={Ribs} />
          </InnerContainer>
          <InnerContainer>
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
          </InnerContainer>
        </SplitScreenWrapper>
      </SplitScreenContainer>

      <SplitScreenContainer>
        <SplitScreenWrapper>
          <InnerContainer>
            <Container
              alignment="left"
              title="restaurant.deserts.title"
              subtitle="restaurant.deserts.subtitle"
            >
              <Content alignment="left">
                {t({ id: "restaurant.deserts.content" })}
              </Content>
            </Container>
          </InnerContainer>
          <InnerContainer>
            <Image alt="" src={Ribs} />
          </InnerContainer>
        </SplitScreenWrapper>
      </SplitScreenContainer>
    </>
  );
};
