import { useTranslation } from "@hooks/useTranslation";
import { Map } from "@components/Map";
import {
  Container,
  InnerContainer,
  SplitScreenContainer,
  SplitScreenWrapper,
  Subtitle,
  Title,
  TitleContainer,
} from "@screens/Home/Home.styles";

export const Location = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <SplitScreenContainer>
      <SplitScreenWrapper>
        <InnerContainer>
          <Map />
        </InnerContainer>
        <InnerContainer>
          <Container>
            <TitleContainer>
              <Title>{t({ id: "location.title" })}</Title>
              <Subtitle>{t({ id: "location.subtitle" })}</Subtitle>
            </TitleContainer>
          </Container>
        </InnerContainer>
      </SplitScreenWrapper>
    </SplitScreenContainer>
  );
};
