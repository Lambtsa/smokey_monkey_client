import { TranslationKey } from "@types";
import { routes } from "../helpers/routes";

export interface MetaData {
  title: TranslationKey;
  description: TranslationKey;
  url: string;
}

interface Pages {
  index: MetaData;
  team: MetaData;
  pension: {
    index: MetaData;
    prices: MetaData;
    conditions: MetaData;
  };
  gite: MetaData;
  contact: MetaData;
  media: MetaData;
  terms: MetaData;
}

export const pageData: Pages = {
  index: {
    title: "metadata.index.title",
    description: "metadata.index.description",
    url: routes.index(),
  },
  team: {
    title: "metadata.team.title",
    description: "metadata.team.description",
    url: routes.team(),
  },
  pension: {
    index: {
      title: "metadata.pension.index.title",
      description: "metadata.pension.index.description",
      url: routes.pension.index(),
    },
    prices: {
      title: "metadata.pension.prices.title",
      description: "metadata.pension.prices.description",
      url: routes.pension.prices(),
    },
    conditions: {
      title: "metadata.pensions.conditions.title",
      description: "metadata.pensions.conditions.description",
      url: routes.pension.conditions(),
    },
  },
  gite: {
    title: "metadata.gite.title",
    description: "metadata.gite.description",
    url: routes.gite(),
  },
  contact: {
    title: "metadata.contact.title",
    description: "metadata.contact.description",
    url: routes.contact(),
  },
  media: {
    title: "metadata.media.title",
    description: "metadata.media.description",
    url: routes.media(),
  },
  terms: {
    title: "metadata.media.title",
    description: "metadata.media.description",
    url: routes.media(),
  },
};
