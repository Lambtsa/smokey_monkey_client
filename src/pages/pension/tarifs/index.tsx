import { MetaData } from "@components/MetaData";
import type { NextPage } from "next";
import { pageData } from "@helpers/metadata";
import { Layout } from "@components/Layout";
import { PricesScreen } from "@screens/Prices";

const PricesPage: NextPage = () => {
  const {
    pension: { prices },
  } = pageData;
  return (
    <Layout>
      <MetaData
        title={prices.title}
        description={prices.description}
        url={prices.url}
      />
      <PricesScreen />
    </Layout>
  );
};

export default PricesPage;
