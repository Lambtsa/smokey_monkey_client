import Ribs from "@assets/images/ribs.webp";
import SmokerBob from "@assets/images/smoker-bob.jpg";
import Smoker1 from "@assets/images/smoker1.jpeg";
import Smoker2 from "@assets/images/smoker2.jpeg";
import Smoker3 from "@assets/images/smoker3.jpeg";
import Smoker4 from "@assets/images/smoker4.jpeg";
import Smoker5 from "@assets/images/smoker5.jpeg";
import Smoker6 from "@assets/images/smoker6.jpeg";
import Smoker7 from "@assets/images/smoker7.jpeg";
import Smoker8 from "@assets/images/smoker8.jpeg";
import Smoker9 from "@assets/images/smoker9.jpeg";
import { v4 as uuid } from "uuid";
import { useTranslation } from "@hooks/useTranslation";
import { Jumbotron } from "@components/Jumbotron";
import { Container, Content } from "@components/Container";
import { Image } from "@components/Image";
import { Masonry } from "@components/Masonry";
import { SplitScreen } from "@components/SplitScreen";

export const SmokerScreen = (): JSX.Element => {
  const { t } = useTranslation();

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
  ];

  return (
    <>
      <Jumbotron
        title="smoker.jumbotron.title"
        subtitle="smoker.jumbotron.subtitle"
        images={[
          {
            id: uuid(),
            data: Ribs,
            alt: "",
          },
        ]}
      />

      {/* l'histoire */}
      <SplitScreen
        showImage={false}
        contentBlock={
          <Container
            alignment="left"
            title="smoker.intro.title"
            subtitle="smoker.intro.subtitle"
          >
            <Content alignment="left">
              {t({ id: "smoker.intro.content" })}
            </Content>
          </Container>
        }
        imgBlock={
          <Image
            alt=""
            sizes="(max-width: 768px) 100vw, 50vw"
            src={SmokerBob}
          />
        }
      />

      {/* l'histoire */}
      {/* <SplitScreen
        background="black"
        leftBlock={<Image alt="" src={Ribs} />}
        rightBlock={
          <Container
            alignment="left"
            title="smoker.monkey.title"
            subtitle="smoker.monkey.subtitle"
          >
            <Content alignment="left">
              {t({ id: "smoker.monkey.content" })}
            </Content>
          </Container>
        }
      /> */}
      <Masonry images={images} />
    </>
  );
};
