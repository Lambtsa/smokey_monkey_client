import type { Metadata } from "next";
import type { ReactElement } from "react";

import { BarScreen } from "@/screens/bar";
import { createMetadata, pageData } from "@/utils/metadata";

export const metadata: Metadata = createMetadata(pageData.bar);

const Page = (): ReactElement => {
  return <BarScreen />;
};

export default Page;
