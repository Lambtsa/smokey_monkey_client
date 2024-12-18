import { useTranslation } from "@hooks/useTranslation";
import {
  StyledContainer,
  Subtitle,
  Title,
  TitleContainer,
} from "./Container.styles";
import { ContainerProps } from "./Container.types";
import { CONTAINER } from "@constants/layout";

export const Container = ({
  title,
  subtitle,
  children,
  maxWidth = CONTAINER.TV,
  alignment = "center",
}: ContainerProps): JSX.Element => {
  const { t } = useTranslation();
  return (
    <StyledContainer $maxWidth={maxWidth} $alignment={alignment}>
      <TitleContainer $alignment={alignment}>
        <Title $alignment={alignment}>{t({ id: title })}</Title>
        <Subtitle $alignment={alignment}>{t({ id: subtitle })}</Subtitle>
      </TitleContainer>
      {children}
    </StyledContainer>
  );
};
