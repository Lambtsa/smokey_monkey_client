import { MetaData } from "@components/MetaData";
import type { NextPage } from "next";
import { pageData } from "config/metadata";
import { Layout } from "@components/Layout";
import { MediasScreen } from "@screens/Medias";

const MediaPage: NextPage = () => {
  const { media } = pageData;
  return (
    <Layout>
      <MetaData
        title={media.title}
        description={media.description}
        url={media.url}
      />
      <MediasScreen />
    </Layout>
  );
};

export default MediaPage;
