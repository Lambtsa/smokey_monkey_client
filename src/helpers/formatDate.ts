import { LOCALES } from "@constants/locales";

/**
 * Small
 * @param date
 */
export const formatDate = (
  dateString: string,
  locale: keyof typeof LOCALES
): string => {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return date.toLocaleDateString(LOCALES[locale], options);
};
