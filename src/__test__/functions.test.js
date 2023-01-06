import { formatTime } from "../utils/functions";

describe("formatTime()", () => {
  test("should return the time properly formatted", () => {
    expect(formatTime("2023-01-05T14:11:58.254Z")).toBe("5/1/2023, 9:11:58 pm");
    expect(formatTime("2023-01-06T02:16:01.482Z")).toBe("6/1/2023, 9:16:01 am");
  });

  test("should not return the time properly formatted", () => {
    expect(formatTime("2023-01-05T14:11:58.254Z")).not.toBe("9:11:58 pm");
    expect(formatTime("2023-01-06T02:16:01.482Z")).not.toBe("6/1/2023");
  });
});
