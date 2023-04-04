import { config } from "config";

const buildUrl = (path: string): string => {
  return `${config.frontendUrl}${path}`;
};

export const routes = {
  index: () => buildUrl("/"),
  about: () => buildUrl("/a-propos"),
  pension: {
    index: () => buildUrl("/pension"),
    tarifs: () => buildUrl("/pension/tarifs"),
    conditions: () => buildUrl("/pension/conditions"),
  },
  gite: {
    index: () => buildUrl("/gite"),
    reserver: () => buildUrl("/reserver"),
  },
  contact: () => buildUrl("/contact"),
  media: () => buildUrl("/medias"),
};
