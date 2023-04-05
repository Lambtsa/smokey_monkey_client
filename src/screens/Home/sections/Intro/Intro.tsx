import { Img, SplitScreen, Subtitle, Title } from "@components/SplitScreen";
import Dogs from "@assets/images/dogs.jpeg";
import { useTranslation } from "@hooks/useTranslation";
import {
  IntroContainer,
  IntroContent,
  IntroList,
  IntroListElement,
  IntroTitleContainer,
} from "./Intro.styles";

export const Intro = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <SplitScreen
      leftBlock={
        <IntroContainer>
          <IntroTitleContainer>
            <Title>{t({ id: "intro.title" })}</Title>
            <Subtitle>{t({ id: "intro.subtitle" })}</Subtitle>
          </IntroTitleContainer>
          <IntroContent>{t({ id: "intro.content" })}</IntroContent>
          <IntroList>
            <IntroListElement>
              {t({ id: "intro.list.surface" })}
            </IntroListElement>
            <IntroListElement>
              {t({ id: "intro.list.pension" })}
            </IntroListElement>
            <IntroListElement>{t({ id: "intro.list.parc" })}</IntroListElement>
            <IntroListElement>{t({ id: "intro.list.area" })}</IntroListElement>
            <IntroListElement>{t({ id: "intro.list.gite" })}</IntroListElement>
            <IntroListElement>
              {t({ id: "intro.list.garden" })}
            </IntroListElement>
          </IntroList>
        </IntroContainer>
      }
      rightBlock={<Img alt="" src={Dogs} />}
    />
  );
};
