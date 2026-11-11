import type { Metadata } from "next";
import type { ReactElement } from "react";

import { RestaurantScreen } from "@/screens/restaurant";
import { createMetadata, pageData } from "@/utils/metadata";

export const metadata: Metadata = createMetadata(pageData.restaurant.index);

const Page = (): ReactElement => {
  return <RestaurantScreen />;
};

export default Page;
