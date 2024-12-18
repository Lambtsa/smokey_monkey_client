import { Button } from "@components/Button";
import { routes } from "@helpers/routes";
import { useTranslation } from "@hooks/useTranslation";
import { useRouter } from "next/router";
import { useCallback } from "react";
import {
  FourOhFourContainer,
  FourOhFourInnerContainer,
  FourOhFourTitleContainer,
  Subtitle,
  Title,
} from "./FourOhFour.styles";

export const FourOhFour = (): JSX.Element => {
  const { t } = useTranslation();
  const router = useRouter();

  const handleOnClick = useCallback(() => {
    router.push(routes.index());
  }, [router]);

  return (
    <FourOhFourContainer>
      <FourOhFourInnerContainer>
        <FourOhFourTitleContainer>
          <Title>{t({ id: "fourOhFour.title" })}</Title>
          <Subtitle>{t({ id: "fourOhFour.subtitle" })}</Subtitle>
        </FourOhFourTitleContainer>
        <Button type="button" onClick={handleOnClick} btnType="secondary">
          {t({ id: "fourOhFour.btn" })}
        </Button>
      </FourOhFourInnerContainer>
    </FourOhFourContainer>
  );
};
