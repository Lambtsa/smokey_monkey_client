import type { Metadata } from "next";
import type { ReactElement } from "react";

import { FourOhFour } from "@/screens/fourOhFour";
import { createMetadata, pageData } from "@/utils/metadata";

export const metadata: Metadata = createMetadata(pageData.index);

const NotFound = (): ReactElement => {
  return <FourOhFour />;
};

export default NotFound;
