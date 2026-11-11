import { type ReactNode, type SVGProps } from "react";

export interface IconProps extends SVGProps<SVGSVGElement> {
  height?: number;
  width?: number;
  color?: string;
  opacity?: number;
  viewBox?: string;
  xmlns?: string;
  fill?: string;
  children: ReactNode;
}

export type IconType =
  | "burger"
  | "caret"
  | "close"
  | "en"
  | "facebook"
  | "fr"
  | "instagram"
  | "mail"
  | "phone"
  | "times";
