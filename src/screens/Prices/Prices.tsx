import { Jumbotron } from "@components/Jumbotron";
import { v4 as uuid } from "uuid";
import Dogs from "@assets/images/image8.jpeg";
import { useTranslation } from "@hooks/useTranslation";
import { Table } from "@components/Table";
import { PricesContainer } from "./Prices.styles";
import { Container, Content } from "@components/Container";

export const PricesScreen = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <>
      <Jumbotron
        title="pension.jumbotron.title"
        subtitle="pension.jumbotron.subtitle"
        images={[
          {
            id: uuid(),
            data: Dogs,
            alt: "",
          },
        ]}
      />
      <PricesContainer>
        <Container
          maxWidth="TABLET"
          title="prices.content.title"
          subtitle="prices.content.subtitle"
        >
          <Content alignment="center">
            {t({ id: "prices.content.first.text" })}
          </Content>
          <Table />
          <Content alignment="center">
            {t({ id: "prices.content.second.text" })}
          </Content>
        </Container>
      </PricesContainer>
    </>
  );
};
