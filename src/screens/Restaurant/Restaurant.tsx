import { Jumbotron } from "@components/Jumbotron";
import { v4 as uuid } from "uuid";
import Ribs from "@assets/images/ribs.webp";
import {
  InnerContainer,
  PensionContainer,
  SplitScreenContainer,
  SplitScreenWrapper,
} from "./Restaurant.styles";
import { useTranslation } from "@hooks/useTranslation";
import { Masonry } from "@components/Masonry";
import { Container, Content } from "@components/Container";
import { Image } from "@components/Image";

export const RestaurantScreen = (): JSX.Element => {
  const { t } = useTranslation();

  const images = [Ribs, Ribs, Ribs, Ribs, Ribs, Ribs, Ribs, Ribs, Ribs];

  return (
    <>
      <Jumbotron
        title="pension.jumbotron.title"
        subtitle="pension.jumbotron.subtitle"
        images={[
          {
            id: uuid(),
            data: Ribs,
            alt: "",
          },
        ]}
      />
      <PensionContainer>
        <Container
          maxWidth="TABLET"
          title="pension.intro.title"
          subtitle="pension.intro.subtitle"
        >
          <Content alignment="center">
            {t({ id: "pension.intro.content" })}
          </Content>
        </Container>
      </PensionContainer>
      <SplitScreenContainer>
        <SplitScreenWrapper>
          <InnerContainer>
            <Container
              alignment="left"
              title="pension.intro.title"
              subtitle="pension.intro.subtitle"
            >
              <Content alignment="left">
                {t({ id: "pension.intro.content" })}
              </Content>
            </Container>
          </InnerContainer>
          <InnerContainer>
            <Image alt="" src={Ribs} />
          </InnerContainer>
        </SplitScreenWrapper>
      </SplitScreenContainer>
      <Masonry images={images} />
    </>
  );
};
