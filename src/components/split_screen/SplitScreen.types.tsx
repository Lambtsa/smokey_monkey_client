import type { ReactNode } from "react";

/* Colour tokens from globals.css; burgundy once per page at most */
export type BackgroundType = "forest" | "bottle" | "cellar" | "burgundy";

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
}
