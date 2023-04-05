import { MetaData } from "@components/MetaData";
import type { NextPage } from "next";
import { pageData } from "@helpers/metadata";
import { Layout } from "@components/Layout";

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
      <h2>Hello World!</h2>
    </Layout>
  );
};

export default PensionPage;
