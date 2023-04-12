import { v4 as uuid } from "uuid";
import Gite1 from "@assets/images/gite1.jpeg";
import Gite2 from "@assets/images/gite2.jpeg";
import Gite3 from "@assets/images/gite3.jpeg";
import Gite4 from "@assets/images/gite4.jpeg";
import Gite5 from "@assets/images/gite5.jpeg";
import { useTranslation } from "@hooks/useTranslation";
import { Jumbotron } from "@components/Jumbotron";
import {
  InnerContainer,
  SplitScreenContainer,
  SplitScreenWrapper,
} from "./Gite.styles";
import { Container, Content } from "@components/Container";

export const GiteScreen = (): JSX.Element => {
  const { t } = useTranslation();

  const images = [
    {
      id: uuid(),
      data: Gite1,
      alt: "",
    },
    {
      id: uuid(),
      data: Gite2,
      alt: "",
    },
    {
      id: uuid(),
      data: Gite3,
      alt: "",
    },
    {
      id: uuid(),
      data: Gite4,
      alt: "",
    },
    {
      id: uuid(),
      data: Gite5,
      alt: "",
    },
  ];

  return (
    <>
      <Jumbotron
        title="gite.title"
        subtitle="gite.subtitle"
        images={images}
        type="dot"
        link={{ text: "gite.btn", href: "#reservation" }}
      />
      <SplitScreenContainer id="reservation">
        <SplitScreenWrapper>
          <InnerContainer>test</InnerContainer>
          <InnerContainer>
            <Container
              alignment="left"
              title="home.location.title"
              subtitle="home.location.subtitle"
            >
              <Content alignment="left">
                {t({ id: "home.gite.content" })}
              </Content>
            </Container>
          </InnerContainer>
        </SplitScreenWrapper>
      </SplitScreenContainer>
    </>
  );
};
