import { MetaData } from "@components/MetaData";
import type { NextPage } from "next";
import { pageData } from "@helpers/metadata";
import { Layout } from "@components/Layout";
import { ReserverScreen } from "@screens/Reserver";

const ReserverPage: NextPage = () => {
  const {
    gite: { reserver },
  } = pageData;
  return (
    <Layout>
      <MetaData
        title={reserver.title}
        description={reserver.description}
        url={reserver.url}
      />
      <ReserverScreen />
    </Layout>
  );
};

export default ReserverPage;
