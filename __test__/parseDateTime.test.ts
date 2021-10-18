import { parseDateTime } from "../utils/parseDateTime";

test("parse date (2021-10-15T07:22:40.318Z)", () => {
  expect(parseDateTime("2021-10-15T07:22:40.318Z")).toEqual("2021.10.15 16:22");
});