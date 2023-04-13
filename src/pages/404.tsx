import { Layout } from "@components/Layout";
import { MetaData } from "@components/MetaData";
import { pageData } from "config/metadata";
import { FourOhFour } from "@screens/fourOhFour";

const Custom404 = () => {
  const { index } = pageData;
  return (
    <Layout>
      <MetaData
        title={index.title}
        description={index.description}
        url={index.url}
      />
      <FourOhFour />
    </Layout>
  );
};

export default Custom404;
