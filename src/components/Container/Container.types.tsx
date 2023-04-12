import { TranslationKey } from "@types";
import { ReactNode } from "react";

export type Alignment = "center" | "left" | "right";

export interface ContainerProps {
  title: TranslationKey;
  subtitle: TranslationKey;
  children: ReactNode;
  alignment?: Alignment;
}
