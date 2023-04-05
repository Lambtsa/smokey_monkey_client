import { TranslationKey } from "@types";
import { routes } from "./routes";

export interface MetaData {
  title: TranslationKey;
  description: TranslationKey;
  url: string;
}

interface Pages {
  index: MetaData;
  about: MetaData;
  pension: {
    index: MetaData;
    tarifs: MetaData;
    conditions: MetaData;
  };
  gite: {
    index: MetaData;
    reserver: MetaData;
  };
  contact: MetaData;
  media: MetaData;
}

export const pageData: Pages = {
  index: {
    title: "metadata.index.title",
    description: "metadata.index.description",
    url: routes.index(),
  },
  about: {
    title: "metadata.about.title",
    description: "metadata.about.description",
    url: routes.about(),
  },
  pension: {
    index: {
      title: "metadata.pension.index.title",
      description: "metadata.pension.index.description",
      url: routes.pension.index(),
    },
    tarifs: {
      title: "metadata.pension.tarifs.title",
      description: "metadata.pension.tarifs.description",
      url: routes.pension.tarifs(),
    },
    conditions: {
      title: "metadata.pensions.conditions.title",
      description: "metadata.pensions.conditions.description",
      url: routes.pension.conditions(),
    },
  },
  gite: {
    index: {
      title: "metadata.gite.index.title",
      description: "metadata.gite.index.description",
      url: routes.gite.index(),
    },
    reserver: {
      title: "metadata.gite.reserver.title",
      description: "metadata.gite.reserver.description",
      url: routes.gite.reserver(),
    },
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
};
