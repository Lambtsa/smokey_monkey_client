import type { Metadata } from "next";
import type { ReactElement } from "react";

import { ContactScreen } from "@/screens/contact";
import { createMetadata, pageData } from "@/utils/metadata";

export const metadata: Metadata = createMetadata(pageData.contact);

const Page = (): ReactElement => {
  /* Read when the page is served, so the Docker image needs no build-time settings */
  return <ContactScreen mapboxToken={process.env.MAPBOX_TOKEN ?? ""} />;
};

export default Page;
