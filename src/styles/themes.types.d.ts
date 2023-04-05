import "styled-components";

interface Colors {
  englishVermillion: string;
  greenPigment: string;
  pacificBlue: string;
  persianOrange: string;
  primary: string;
  darkBlack: string;
  black: string;
  black90: string;
  black80: string;
  black70: string;
  white: string;
}

interface Fonts {
  montserrat: string;
  parisienne: string;
}

interface FontWeights {
  bold: string;
  regular: string;
  light: string;
}

interface ZIndexes {
  toast: number;
}

declare module "styled-components" {
  export interface DefaultTheme {
    colors: Colors;
    fonts: Fonts;
    fontWeights: FontWeights;
    zIndexes: ZIndexes;
  }
}
