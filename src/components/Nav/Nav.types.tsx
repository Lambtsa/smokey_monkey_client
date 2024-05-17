import { TranslationKey } from "@types";
import { CSSProperties } from "styled-components";

export type NavPosition = NonNullable<CSSProperties["position"]>;

export interface NavProps {
  position?: NavPosition;
}

export interface NavLinkType {
  id: string;
  label: TranslationKey;
  url: string;
  newTab?: boolean;
  subLinks: {
    id: string;
    label: TranslationKey;
    url: string;
  }[];
}
