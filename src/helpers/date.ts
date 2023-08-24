import utc from "dayjs/plugin/utc";
import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import LocalizedFormat from "dayjs/plugin/localizedFormat";
import fr from "dayjs/locale/fr";

dayjs.locale(fr);
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(LocalizedFormat);

dayjs.tz.setDefault("Europe/Paris");

/**
 *
 */
export const formatTime = (date: Date): string => {
  return dayjs(date).format("YYYY-MM-DD[T]HH:mm");
};

/**
 *
 */
export const dateToString = (date: Date): string => {
  return dayjs(date).format("LLLL");
};
