import { MetaData } from "@components/MetaData";
import type { NextPage } from "next";
import { HomeScreen } from "@screens/Home";
import { pageData } from "config/metadata";
import { Layout } from "@components/Layout";

const IndexPage: NextPage = () => {
  const { index } = pageData;
  return (
    <Layout>
      <MetaData
        title={index.title}
        description={index.description}
        url={index.url}
      />
      <HomeScreen />
    </Layout>
  );
};

export default IndexPage;
