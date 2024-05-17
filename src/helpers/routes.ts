import { config } from "config";

const buildUrl = (path: string): string =>
  new URL(path, config.frontendUrl).toString();

export const routes = {
  index: () => buildUrl("/"),
  smoker: () => buildUrl("/smoker"),
  bar: () => buildUrl("/bar"),
  restaurant: {
    index: () => buildUrl("/restaurant"),
    reservation: () => buildUrl("/restaurant#reservation"),
  },
  contact: () => buildUrl("/contact"),
  terms: () => buildUrl("/terms"),
  menu: () => buildUrl("/menu.pdf"),
};
