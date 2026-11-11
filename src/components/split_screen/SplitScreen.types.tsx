import type { ReactNode } from "react";

export type BackgroundType = "black" | "green" | "blue" | "red";

/* Which half comes first on large screens; on small screens the picture is always on top */
export type Order = "regular" | "reversed";

export interface SplitScreenProps {
  id?: string;
  imgBlock: ReactNode;
  contentBlock: ReactNode;
  background?: BackgroundType;
  /* Show the picture on small screens */
  showImage?: boolean;
  order?: Order;
  /* The content is a form: no picture row on small screens */
  isForm?: boolean;
}
