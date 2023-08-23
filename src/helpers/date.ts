/**
 *
 */
export const toFrenchTime = (date: Date): string => {
  const hours = `${date.getUTCHours() + 2}`;
  const minutes =
    date.getMinutes() < 10 ? `0${date.getMinutes()}` : `${date.getMinutes()}`;
  return `${date.toISOString().split("T")[0]!}T${hours}:${minutes}`;
};
