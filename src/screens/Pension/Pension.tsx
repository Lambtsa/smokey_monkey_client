import { Jumbotron } from "@components/Jumbotron";
import { v4 as uuid } from "uuid";
import Dogs from "@assets/images/dogs.jpeg";
import Image1 from "@assets/images/image1.jpeg";
import Image2 from "@assets/images/image2.jpeg";
import Image3 from "@assets/images/image3.jpeg";
import Image4 from "@assets/images/image4.jpeg";
import Image5 from "@assets/images/image5.jpeg";
import Image6 from "@assets/images/image6.jpeg";
import Image7 from "@assets/images/image7.jpeg";
import Image8 from "@assets/images/image8.jpeg";
import Image9 from "@assets/images/image9.jpeg";
import {
  InnerContainer,
  PensionContainer,
  SplitScreenContainer,
  SplitScreenWrapper,
} from "./Pension.styles";
import { useTranslation } from "@hooks/useTranslation";
import { Masonry } from "@components/Masonry";
import { Container, Content } from "@components/Container";
import { Image } from "@components/Image";

export const PensionScreen = (): JSX.Element => {
  const { t } = useTranslation();

  const images = [
    Image1,
    Image2,
    Image3,
    Image4,
    Image5,
    Image6,
    Image7,
    Image8,
    Image9,
  ];

  return (
    <>
      <Jumbotron
        title="pension.jumbotron.title"
        subtitle="pension.jumbotron.subtitle"
        images={[
          {
            id: uuid(),
            data: Image6,
            alt: "",
          },
        ]}
      />
      <PensionContainer>
        <Container
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
            <Image alt="" src={Dogs} />
          </InnerContainer>
        </SplitScreenWrapper>
      </SplitScreenContainer>
      <Masonry images={images} />
    </>
  );
};
