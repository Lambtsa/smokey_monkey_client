import type { ReactNode } from "react";

import type { CONTAINER } from "@/constants/layout";
import type { TranslationKey } from "@/types/translations";

export type Alignment = "center" | "left" | "right";

export interface ContainerProps {
  title: TranslationKey;
  subtitle: TranslationKey;
  children: ReactNode;
  alignment?: Alignment;
  maxWidth?: keyof typeof CONTAINER;
}

export interface AlignedProps {
  alignment: Alignment;
  children: ReactNode;
}
