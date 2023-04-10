import "styled-components";

interface Colors {
  englishVermillion: string;
  greenPigment: string;
  pacificBlue: string;
  persianOrange: string;
  darkGreen: string;
  hunterGreen: string;
  eerieBlack: string;
  eerieBlack90: string;
  eerieBlack80: string;
  eerieBlack70: string;
  night: string;
  white: string;
  white90: string;
  white80: string;
  white70: string;
  white20: string;
  mintGreen: string;
  nonPhotoBlue: string;
  kellyGreen: string;
}

interface Fonts {
  montserrat: string;
  notoSans: string;
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
