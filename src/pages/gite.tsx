import { MetaData } from "@components/MetaData";
import type { NextPage } from "next";
import { pageData } from "config/metadata";
import { Layout } from "@components/Layout";
import { GiteScreen } from "@screens/Gite";

const GitePage: NextPage = () => {
  const { gite } = pageData;
  return (
    <Layout>
      <MetaData
        title={gite.title}
        description={gite.description}
        url={gite.url}
      />
      <GiteScreen />
    </Layout>
  );
};

export default GitePage;
