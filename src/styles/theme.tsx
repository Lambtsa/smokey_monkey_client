import type { DefaultTheme } from "styled-components";

/**
 * @see https://coolors.co/38393d-262626-dd9f93-fffeed-329a91
 */
const colors = {
  /* dcfffd,95d3e0,61ae46,336133,15361b */
  englishVermillion: "#C64142",
  greenPigment: "#4BA457",
  pacificBlue: "#3CACC5",
  persianOrange: "#DF964A",
  darkGreen: "rgba(21, 54, 27, 1)",
  hunterGreen: "rgba(51, 97, 51, 1)",
  eerieBlack: "rgba(37, 36, 34, 1)",
  eerieBlack90: "rgba(37, 36, 34, 0.9)",
  eerieBlack80: "rgba(37, 36, 34, 0.8)",
  eerieBlack70: "rgba(37, 36, 34, 0.7)",
  eerieBlack60: "rgba(37, 36, 34, 0.6)",
  eerieBlack50: "rgba(37, 36, 34, 0.5)",
  eerieBlack40: "rgba(37, 36, 34, 0.4)",
  eerieBlack30: "rgba(37, 36, 34, 0.3)",
  eerieBlack20: "rgba(37, 36, 34, 0.2)",
  moonstone: "rgba(80, 183, 205, 1)",
  night: "rgba(21, 21, 20, 1)",
  white: "rgba(255, 254, 235, 1)",
  white90: "rgba(255, 254, 235, 0.9)",
  white80: "rgba(255, 254, 235, 0.8)",
  white70: "rgba(255, 254, 235, 0.7)",
  white60: "rgba(255, 254, 235, 0.6)",
  white50: "rgba(255, 254, 235, 0.5)",
  white40: "rgba(255, 254, 235, 0.4)",
  white30: "rgba(255, 254, 235, 0.3)",
  white20: "rgba(255, 254, 235, 0.2)",

  mintGreen: "rgba(220, 255, 253, 1)",
  nonPhotoBlue: "rgba(149, 211, 224, 1)",
  kellyGreen: "rgba(97, 147, 70, 1)",
};

const fonts = {
  montserrat: "'Montserrat', sans-serif",
  notoSans: "'Noto Sans', sans-serif;",
  royalSignage: "Royal signage, serif",
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
