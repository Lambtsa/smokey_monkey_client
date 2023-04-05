import { MetaData } from "@components/MetaData";
import type { NextPage } from "next";
import { pageData } from "@helpers/metadata";
import { Layout } from "@components/Layout";

const AboutPage: NextPage = () => {
  const { about } = pageData;
  return (
    <Layout>
      <MetaData
        title={about.title}
        description={about.description}
        url={about.url}
      />
      <h2>Hello World!</h2>
    </Layout>
  );
};

export default AboutPage;
