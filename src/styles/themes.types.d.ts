import "styled-components";

interface Colors {
  englishVermillion: string;
  greenPigment: string;
  pacificBlue: string;
  persianOrange: string;
  primary: string;
  primary10: string;
  primary70: string;
  primaryDark: string;
  secondary: string;
  secondary20: string;
  secondary70: string;
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
