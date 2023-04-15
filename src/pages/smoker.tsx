import { MetaData } from "@components/MetaData";
import type { NextPage } from "next";
import { pageData } from "config/metadata";
import { Layout } from "@components/Layout";
import { SmokerScreen } from "@screens/Smoker";

const TeamPage: NextPage = () => {
  const { smoker } = pageData;
  return (
    <Layout>
      <MetaData
        title={smoker.title}
        description={smoker.description}
        url={smoker.url}
      />
      <SmokerScreen />
    </Layout>
  );
};

export default TeamPage;
