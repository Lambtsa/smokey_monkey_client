import type { Metadata } from "next";
import type { ReactElement } from "react";

import { HomeScreen } from "@/screens/home";
import { createMetadata, pageData } from "@/utils/metadata";

export const metadata: Metadata = createMetadata(pageData.index);

const Home = (): ReactElement => {
  /* Read when the page is served, so the Docker image needs no build-time settings */
  return <HomeScreen mapboxToken={process.env.MAPBOX_TOKEN ?? ""} />;
};

export default Home;
