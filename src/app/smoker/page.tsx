import type { Metadata } from "next";
import type { ReactElement } from "react";

import { SmokerScreen } from "@/screens/smoker";
import { createMetadata, pageData } from "@/utils/metadata";

export const metadata: Metadata = createMetadata(pageData.smoker);

const Page = (): ReactElement => {
  return <SmokerScreen />;
};

export default Page;
