import type { ReactElement } from "react";

import Background from "@/assets/images/background-monkey.jpg";
import { Hero } from "@/components/hero";

/* Placeholder until the page has its own content */
export const TermsScreen = (): ReactElement => {
  return (
    <Hero
      title="terms.jumbotron.title"
      subtitle="terms.jumbotron.subtitle"
      image={Background}
    />
  );
};
