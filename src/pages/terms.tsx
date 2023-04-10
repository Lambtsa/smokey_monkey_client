import { MetaData } from "@components/MetaData";
import type { NextPage } from "next";
import { pageData } from "@helpers/metadata";
import { Layout } from "@components/Layout";
import { TermsScreen } from "@screens/Terms";

const TermsPage: NextPage = () => {
  const { terms } = pageData;
  return (
    <Layout>
      <MetaData
        title={terms.title}
        description={terms.description}
        url={terms.url}
      />
      <TermsScreen />
    </Layout>
  );
};

export default TermsPage;
