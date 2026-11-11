import type { TranslationKey } from "@/types/translations";

export interface NavLinkType {
  label: TranslationKey;
  url: string;
  /* Opens in a new tab (the menu PDF) */
  newTab?: boolean;
}
