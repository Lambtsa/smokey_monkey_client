import { format, roundToNearestMinutes } from "date-fns";
import { fr } from "date-fns/locale/fr";

/**
 * The value for a datetime-local input, rounded up to the next half hour
 * (tables are booked by the half hour).
 * @example 2023-08-05T06:18 -> "2023-08-05T06:30"
 */
export const formatTime = (date: Date): string => {
  const newDate = roundToNearestMinutes(date, {
    nearestTo: 30,
    roundingMethod: "ceil",
  });
  return format(newDate, "yyyy-MM-dd'T'HH:mm");
};

/**
 * A date written out in French, for the reservation email.
 * @example "samedi 5 août 2023 06:18"
 */
export const dateToString = (date: Date): string => {
  return format(date, "cccc d MMMM yyyy HH:mm", {
    locale: fr,
  });
};
