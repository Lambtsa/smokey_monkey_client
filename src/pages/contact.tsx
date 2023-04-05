import { MetaData } from "@components/MetaData";
import type { NextPage } from "next";
import { pageData } from "@helpers/metadata";
import { Layout } from "@components/Layout";

const ContactPage: NextPage = () => {
  const { contact } = pageData;
  return (
    <Layout>
      <MetaData
        title={contact.title}
        description={contact.description}
        url={contact.url}
      />
      <h2>Hello World!</h2>
    </Layout>
  );
};

export default ContactPage;
