import type { DefaultTheme } from "styled-components";

/**
 * @see https://coolors.co/38393d-262626-dd9f93-fffeed-329a91
 */
const colors = {
  englishVermillion: "#C64142",
  greenPigment: "#4BA457",
  pacificBlue: "#3CACC5",
  persianOrange: "#DF964A",
  primary: "#284135",
  primary10: "rgba(40, 65, 53, 0.1)",
  primary70: "rgba(40, 65, 53, 0.7)",
  primaryDark: "#21352B",
  secondary: "#FFFEEB",
  secondary20: "rgba(255, 254, 235, 0.2)",
  secondary70: "rgba(255, 254, 235, 0.7)",
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
