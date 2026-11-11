import type { Metadata } from "next";
import type { ReactElement } from "react";

import { ContactScreen } from "@/screens/contact";
import { createMetadata, pageData } from "@/utils/metadata";

export const metadata: Metadata = createMetadata(pageData.contact);

const Page = (): ReactElement => {
  return <ContactScreen />;
};

export default Page;
