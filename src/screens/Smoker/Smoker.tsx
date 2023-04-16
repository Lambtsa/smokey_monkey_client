import Ribs from "@assets/images/ribs.webp";
import { v4 as uuid } from "uuid";
import { useTranslation } from "@hooks/useTranslation";
import { Jumbotron } from "@components/Jumbotron";
import { Container, Content } from "@components/Container";
import { Image } from "@components/Image";
import { Masonry } from "@components/Masonry";
import { SplitScreen } from "@components/SplitScreen";

export const SmokerScreen = (): JSX.Element => {
  const { t } = useTranslation();

  const images = [Ribs, Ribs, Ribs, Ribs, Ribs, Ribs, Ribs, Ribs, Ribs];

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
        leftBlock={
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
        rightBlock={<Image alt="" src={Ribs} />}
      />

      {/* l'histoire */}
      <SplitScreen
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
      />
      <Masonry images={images} />
    </>
  );
};
