import { MetaData } from "@components/MetaData";
import type { NextPage } from "next";
import { pageData } from "@helpers/metadata";
import { Layout } from "@components/Layout";

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
      <h2>Hello World!</h2>
    </Layout>
  );
};

export default ReserverPage;
