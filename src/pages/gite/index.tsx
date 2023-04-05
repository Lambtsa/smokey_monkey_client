import { MetaData } from "@components/MetaData";
import type { NextPage } from "next";
import { pageData } from "@helpers/metadata";
import { Layout } from "@components/Layout";

const GitePage: NextPage = () => {
  const {
    gite: { index },
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

export default GitePage;
