import { Jumbotron } from "@components/Jumbotron";
import { useTranslation } from "@hooks/useTranslation";
import { Table } from "@components/Table";
import {
  Content,
  InnerPricesContainer,
  PricesContainer,
  PricesTitleContainer,
  Subtitle,
  Title,
} from "./Prices.styles";

export const PricesScreen = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <>
      <Jumbotron
        title="pension.jumbotron.title"
        subtitle="pension.jumbotron.subtitle"
      />
      <PricesContainer>
        <InnerPricesContainer>
          <PricesTitleContainer>
            <Title>{t({ id: "prices.content.title" })}</Title>
            <Subtitle>{t({ id: "prices.content.subtitle" })}</Subtitle>
          </PricesTitleContainer>
          <Table />
          <Content>{t({ id: "prices.content.text" })}</Content>
        </InnerPricesContainer>
      </PricesContainer>
    </>
  );
};
