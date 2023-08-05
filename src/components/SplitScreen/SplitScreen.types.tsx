import { ReactNode } from "react";

export interface SplitScreenProps {
  id?: string;
  showImage?: boolean;
  leftBlock: ReactNode;
  showImg?: boolean;
  rightBlock: ReactNode;
  background?: BackgroundType;
  order?: MobileOrder;
  noImg?: boolean;
}

export type BackgroundType = "black" | "green" | "blue" | "red";

export type MobileOrder = "regular" | "reversed";
