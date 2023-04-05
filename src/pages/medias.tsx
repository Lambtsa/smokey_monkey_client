import { MetaData } from "@components/MetaData";
import type { NextPage } from "next";
import { pageData } from "@helpers/metadata";
import { Layout } from "@components/Layout";

const MediaPage: NextPage = () => {
  const { media } = pageData;
  return (
    <Layout>
      <MetaData
        title={media.title}
        description={media.description}
        url={media.url}
      />
      <h2>Hello World!</h2>
    </Layout>
  );
};

export default MediaPage;
