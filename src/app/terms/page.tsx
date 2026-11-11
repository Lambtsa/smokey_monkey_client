import type { Metadata } from "next";
import type { ReactElement } from "react";

import { TermsScreen } from "@/screens/terms";
import { createMetadata, pageData } from "@/utils/metadata";

export const metadata: Metadata = createMetadata(pageData.terms);

const Page = (): ReactElement => {
  return <TermsScreen />;
};

export default Page;
