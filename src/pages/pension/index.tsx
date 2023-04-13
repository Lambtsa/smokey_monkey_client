import { MetaData } from "@components/MetaData";
import type { NextPage } from "next";
import { pageData } from "config/metadata";
import { Layout } from "@components/Layout";
import { PensionScreen } from "@screens/Pension";

const PensionPage: NextPage = () => {
  const {
    pension: { index },
  } = pageData;
  return (
    <Layout>
      <MetaData
        title={index.title}
        description={index.description}
        url={index.url}
      />
      <PensionScreen />
    </Layout>
  );
};

export default PensionPage;
