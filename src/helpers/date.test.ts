import { toFrenchTime } from "./date";

describe("Test handleFrenchTime", () => {
  test("returns correct hours", () => {
    const now = new Date("2023-08-05T18:18:29.418Z");
    expect(toFrenchTime(now)).toBe("2023-08-05T20:18");
  });
  test("returns correct minutes", () => {
    const now = new Date("2023-08-05T18:08:29.418Z");
    expect(toFrenchTime(now)).toBe("2023-08-05T20:08");
  });
});
