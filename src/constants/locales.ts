export const LOCALES = {
  EN: "en-GB",
  FR: "fr-FR",
} as const;

export type LocaleType = keyof typeof LOCALES;
