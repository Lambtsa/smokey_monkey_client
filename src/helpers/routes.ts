import { config } from "config";

const buildUrl = (path: string): string => {
  return `${config.frontendUrl}${path}`;
};

export const routes = {
  index: () => buildUrl("/"),
  team: () => buildUrl("/equipe"),
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
  terms: () => buildUrl("/terms"),
};
