import { ReactNode } from "react";

export interface SplitScreenProps {
  id?: string;
  leftBlock: ReactNode;
  rightBlock: ReactNode;
  background?: BackgroundType;
}

export type BackgroundType = "black" | "green" | "blue";
