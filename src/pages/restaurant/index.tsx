import { MetaData } from "@components/MetaData";
import type { NextPage } from "next";
import { pageData } from "config/metadata";
import { Layout } from "@components/Layout";
import { RestaurantScreen } from "@screens/Restaurant";

const PensionPage: NextPage = () => {
  const {
    restaurant: { index },
  } = pageData;
  return (
    <Layout>
      <MetaData
        title={index.title}
        description={index.description}
        url={index.url}
      />
      <RestaurantScreen />
    </Layout>
  );
};

export default PensionPage;
