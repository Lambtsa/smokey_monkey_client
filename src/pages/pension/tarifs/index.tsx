import { MetaData } from "@components/MetaData";
import type { NextPage } from "next";
import { pageData } from "@helpers/metadata";
import { Layout } from "@components/Layout";

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
      <h2>Hello World!</h2>
    </Layout>
  );
};

export default TarifsPage;
