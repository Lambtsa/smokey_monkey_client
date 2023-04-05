import { Title, SplitScreen, Subtitle } from "@components/SplitScreen";
import {} from "../Jumbotron/Jumbotron.styles";
import { useTranslation } from "@hooks/useTranslation";
import { Map } from "@components/Map";
import { LocationContainer } from "./Location.styles";

export const Location = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <SplitScreen
      rightBlock={
        <LocationContainer>
          <Title>{t({ id: "location.title" })}</Title>
          <Subtitle>{t({ id: "location.subtitle" })}</Subtitle>
        </LocationContainer>
      }
      leftBlock={<Map />}
    />
  );
};
