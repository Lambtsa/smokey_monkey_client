import { MetaData } from "@components/MetaData";
import type { NextPage } from "next";
import { pageData } from "config/metadata";
import { Layout } from "@components/Layout";
import { ConditionsScreen } from "@screens/Conditions";

const ConditionsPage: NextPage = () => {
  const {
    pension: { conditions },
  } = pageData;
  return (
    <Layout>
      <MetaData
        title={conditions.title}
        description={conditions.description}
        url={conditions.url}
      />
      <ConditionsScreen />
    </Layout>
  );
};

export default ConditionsPage;
