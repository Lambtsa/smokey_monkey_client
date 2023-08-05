import { formatDate } from "./formatDate";

describe("Test formatDate", () => {
  test("returns correct date", () => {
    const now = new Date("2023-08-05T18:18:29.418Z");
    expect(formatDate(now)).toBe("2023-08-05");
  });
});
