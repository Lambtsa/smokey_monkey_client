import { MetaData } from "@components/MetaData";
import type { NextPage } from "next";
import { pageData } from "config/metadata";
import { Layout } from "@components/Layout";
import { BarScreen } from "@screens/Bar";

const GitePage: NextPage = () => {
  const { bar } = pageData;
  return (
    <Layout>
      <MetaData title={bar.title} description={bar.description} url={bar.url} />
      <BarScreen />
    </Layout>
  );
};

export default GitePage;
