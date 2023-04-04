import { config } from "config";
import { routes } from "./routes";

export interface MetaData {
  title: FormatjsIntl.Message["ids"];
  description: FormatjsIntl.Message["ids"];
  url: string;
}

interface Pages {
  default: Omit<MetaData, "production">;
  index: Omit<MetaData, "production">;
}

const buildUrl = (path: string): string => {
  return `${config.frontendUrl}${path}`;
};

export const pageData: Pages = {
  default: {
    title: "metadata.title",
    description: "metadata.description",
    url: buildUrl(routes.index()),
  },
  index: {
    title: "metadata.title",
    description: "metadata.description",
    url: buildUrl(routes.index()),
  },
};
