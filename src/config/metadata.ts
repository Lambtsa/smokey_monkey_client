import { TranslationKey } from "@types";
import { routes } from "../helpers/routes";

export interface MetaData {
  title: TranslationKey;
  description: TranslationKey;
  url: string;
}

interface Pages {
  index: MetaData;
  smoker: MetaData;
  restaurant: {
    index: MetaData;
    reservation: MetaData;
  };
  bar: MetaData;
  contact: MetaData;
  terms: MetaData;
}

export const pageData: Pages = {
  index: {
    title: "metadata.index.title",
    description: "metadata.index.description",
    url: routes.index(),
  },
  smoker: {
    title: "metadata.smoker.title",
    description: "metadata.smoker.description",
    url: routes.smoker(),
  },
  restaurant: {
    index: {
      title: "metadata.restaurant.index.title",
      description: "metadata.restaurant.index.description",
      url: routes.restaurant.index(),
    },
    reservation: {
      title: "metadata.restaurant.reservation.title",
      description: "metadata.restaurant.reservation.description",
      url: routes.restaurant.reservation(),
    },
  },
  bar: {
    title: "metadata.bar.title",
    description: "metadata.bar.description",
    url: routes.bar(),
  },
  contact: {
    title: "metadata.contact.title",
    description: "metadata.contact.description",
    url: routes.contact(),
  },
  terms: {
    title: "metadata.terms.title",
    description: "metadata.terms.description",
    url: routes.terms(),
  },
};
