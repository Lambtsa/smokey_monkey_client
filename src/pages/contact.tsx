import { MetaData } from "@components/MetaData";
import type { NextPage } from "next";
import { pageData } from "config/metadata";
import { Layout } from "@components/Layout";
import { ContactScreen } from "@screens/Contact";

const ContactPage: NextPage = () => {
  const { contact } = pageData;
  return (
    <Layout>
      <MetaData
        title={contact.title}
        description={contact.description}
        url={contact.url}
      />
      <ContactScreen />
    </Layout>
  );
};

export default ContactPage;
