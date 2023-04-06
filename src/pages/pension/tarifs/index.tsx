import { MetaData } from "@components/MetaData";
import type { NextPage } from "next";
import { pageData } from "@helpers/metadata";
import { Layout } from "@components/Layout";
import { TarifsScreen } from "@screens/Tarifs";

const TarifsPage: NextPage = () => {
  const {
    pension: { tarifs },
  } = pageData;
  return (
    <Layout>
      <MetaData
        title={tarifs.title}
        description={tarifs.description}
        url={tarifs.url}
      />
      <TarifsScreen />
    </Layout>
  );
};

export default TarifsPage;
