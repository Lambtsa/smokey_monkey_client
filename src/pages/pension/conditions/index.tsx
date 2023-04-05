import { MetaData } from "@components/MetaData";
import type { NextPage } from "next";
import { pageData } from "@helpers/metadata";
import { Layout } from "@components/Layout";

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
      <h2>Hello World!</h2>
    </Layout>
  );
};

export default ConditionsPage;
