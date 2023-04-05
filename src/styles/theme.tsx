import type { DefaultTheme } from "styled-components";

/**
 * @see https://coolors.co/38393d-262626-dd9f93-fffeed-329a91
 */
const colors = {
  englishVermillion: "#C64142",
  greenPigment: "#4BA457",
  pacificBlue: "#3CACC5",
  persianOrange: "#DF964A",
  primary: "#C64142",
  black: "rgba(37, 36, 34, 1)",
  black90: "rgba(37, 36, 34, 0.9)",
  black80: "rgba(37, 36, 34, 0.8)",
  black70: "rgba(37, 36, 34, 0.7)",
  darkBlack: "#151514",
  white: "#FFFEEB",
};

const fonts = {
  montserrat: "'Montserrat', sans-serif",
  parisienne: "'Parisienne', cursive",
};

const fontWeights = {
  bold: "700",
  regular: "400",
  light: "300",
};

const zIndexes = {
  toast: 1000,
};

export const theme: DefaultTheme = {
  colors,
  fonts,
  fontWeights,
  zIndexes,
};
