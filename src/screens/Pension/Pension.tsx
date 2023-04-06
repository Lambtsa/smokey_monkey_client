import { Jumbotron } from "@components/Jumbotron";
import {
  Content,
  Img,
  SplitScreen,
  Subtitle,
  Title,
} from "@components/SplitScreen";
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
import { PensionContainer, PensionTitleContainer } from "./Pension.styles";
import { useTranslation } from "@hooks/useTranslation";
import { CentreScreen } from "@components/CentreScreen";
import { Masonry } from "@components/Masonry";

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
      />
      <CentreScreen>
        <Title>{t({ id: "pension.intro.title" })}</Title>
        <Subtitle>{t({ id: "pension.intro.subtitle" })}</Subtitle>
        <Content>{t({ id: "pension.intro.content" })}</Content>
      </CentreScreen>
      <SplitScreen
        leftBlock={
          <PensionContainer>
            <PensionTitleContainer>
              <Title>{t({ id: "pension.intro.title" })}</Title>
              <Subtitle>{t({ id: "pension.intro.subtitle" })}</Subtitle>
            </PensionTitleContainer>
            <Content>{t({ id: "pension.intro.content" })}</Content>
          </PensionContainer>
        }
        rightBlock={<Img alt="" src={Dogs} />}
      />
      <Masonry images={images} />
    </>
  );
};
