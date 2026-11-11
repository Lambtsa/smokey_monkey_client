import type { ReactNode, SVGProps } from "react";

export interface IconProps extends Omit<SVGProps<SVGSVGElement>, "width" | "height"> {
  /* Width and height in px (default 24) */
  size?: number;
  children: ReactNode;
}

export type IconType =
  | "burger"
  | "clock"
  | "close"
  | "facebook"
  | "instagram"
  | "mail"
  | "phone"
  | "pin";
