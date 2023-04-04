import { MetaData } from "@components/MetaData";
import { pageData } from "@helpers/metadata";
import { FourOhFour } from "@screens/fourOhFour";

const Custom404 = () => {
  const { index } = pageData;
  return (
    <>
      <MetaData
        title={index.title}
        description={index.description}
        url={index.url}
      />
      <FourOhFour />
    </>
  );
};

export default Custom404;
