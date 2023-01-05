import { formatTime } from "../utils/functions";

describe("Test functions", () => {
  test("renders time after formating", () => {
    expect(formatTime("2023-01-05T14:11:58.254Z")).toBe("1/5/2023, 9:11:58 PM");
  });

  test("not renders time after formating", () => {
    expect(formatTime("2023-01-05T14:11:58.254Z")).not.toBe("9:11:58 PM");
  });
});
