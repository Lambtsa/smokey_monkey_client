import {
  JumbotronContainer,
  JumbotronInnerContainer,
  Subtitle,
  Title,
} from "./Jumbotron.styles";
import { useTranslation } from "@hooks/useTranslation";

export const Jumbotron = (): JSX.Element => {
  const { t } = useTranslation();
  return (
    <JumbotronContainer>
      <JumbotronInnerContainer>
        <div>
          <Title>{t({ id: "jumbotron.title" })}</Title>
          <Subtitle>{t({ id: "jumbotron.subtitle" })}</Subtitle>
        </div>
      </JumbotronInnerContainer>
    </JumbotronContainer>
  );
};
