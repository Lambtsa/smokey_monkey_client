import { MetaData } from "@components/MetaData";
import type { NextPage } from "next";
import { pageData } from "@helpers/metadata";
import { Layout } from "@components/Layout";
import { GiteScreen } from "@screens/Gite";

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
      <GiteScreen />
    </Layout>
  );
};

export default GitePage;
