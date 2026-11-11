import type { Metadata } from "next";
import type { ReactElement } from "react";

import { HomeScreen } from "@/screens/home";
import { createMetadata, pageData } from "@/utils/metadata";

export const metadata: Metadata = createMetadata(pageData.index);

const Home = (): ReactElement => {
  return <HomeScreen />;
};

export default Home;
