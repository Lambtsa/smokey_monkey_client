import "styled-components";

interface Colors {
  chocolateCosmos: string;
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
  eerieBlack60: string;
  eerieBlack50: string;
  eerieBlack40: string;
  eerieBlack30: string;
  eerieBlack20: string;
  moonstone: string;
  night: string;
  white: string;
  white90: string;
  white80: string;
  white70: string;
  white60: string;
  white50: string;
  white40: string;
  white30: string;
  white20: string;
  mintGreen: string;
  nonPhotoBlue: string;
  kellyGreen: string;
}

interface Fonts {
  montserrat: string;
  notoSans: string;
  royalSignage: string;
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
