import { config } from "config";

const buildUrl = (path: string): string => {
  return `${config.frontendUrl}${path}`;
};

export const routes = {
  index: () => buildUrl("/"),
  smoker: () => buildUrl("/smoker"),
  bar: () => buildUrl("/bar"),
  restaurant: {
    index: () => buildUrl("/restaurant"),
    reservation: () => buildUrl("/restaurant/reservation"),
  },
  contact: () => buildUrl("/contact"),
  terms: () => buildUrl("/terms"),
};
