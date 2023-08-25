import { ReactNode } from "react";

export interface SplitScreenProps {
  id?: string;
  imgBlock: ReactNode;
  contentBlock: ReactNode;
  background?: BackgroundType;
  /* Show image on mobile */
  showImage?: boolean;
  order?: MobileOrder;
  isForm?: boolean;
}

export type BackgroundType = "black" | "green" | "blue" | "red";

export type MobileOrder = "regular" | "reversed";
