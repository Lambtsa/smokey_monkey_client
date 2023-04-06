import { TranslationKey } from "@types";
import {
  JumbotronContainer,
  JumbotronInnerContainer,
  Subtitle,
  Title,
} from "./Jumbotron.styles";
import { useTranslation } from "@hooks/useTranslation";

interface JumbotronProps {
  title: TranslationKey;
  subtitle: TranslationKey;
}

export const Jumbotron = ({ title, subtitle }: JumbotronProps): JSX.Element => {
  const { t } = useTranslation();
  return (
    <JumbotronContainer>
      <JumbotronInnerContainer>
        <div>
          <Title>{t({ id: title })}</Title>
          <Subtitle>{t({ id: subtitle })}</Subtitle>
        </div>
      </JumbotronInnerContainer>
    </JumbotronContainer>
  );
};
