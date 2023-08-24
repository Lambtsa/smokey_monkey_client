import { dateToString, formatTime } from "./date";

describe("Test formatTime", () => {
  test("returns correct hours", () => {
    const now = new Date("2023-08-05T06:18:29.418Z");
    expect(formatTime(now)).toBe("2023-08-05T08:18");
  });
  test("returns correct minutes", () => {
    const now = new Date("2023-08-05T18:08:29.418Z");
    expect(formatTime(now)).toBe("2023-08-05T20:08");
  });
});

describe("Test dateToString", () => {
  test("returns correct hours", () => {
    const now = new Date("2023-08-05T06:18");
    expect(dateToString(now)).toBe("samedi 5 août 2023 06:18");
  });
  test("returns correct minutes", () => {
    const now = new Date("2023-08-05T18:08:29.418Z");
    expect(dateToString(now)).toBe("samedi 5 août 2023 20:08");
  });
});
