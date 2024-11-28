import { fr } from "date-fns/locale/fr";
import { format, roundToNearestMinutes } from "date-fns";

/**
 *
 */
export const formatTime = (date: Date): string => {
  const newDate = roundToNearestMinutes(date, {
    nearestTo: 30,
    roundingMethod: "ceil",
  });
  return format(newDate, "yyyy-MM-dd'T'HH:mm");
};

/**
 *
 */
export const dateToString = (date: Date): string => {
  return format(date, "cccc d MMMM yyyy HH:mm", {
    locale: fr,
  });
};
