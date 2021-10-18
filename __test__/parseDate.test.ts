import { parseDate } from "../utils/parseDate";

test("parse date (2021-10-08T00:59:00.560Z)", () => {
  expect(parseDate("2021-10-08T00:59:00.560Z")).toEqual("2021.10.8");
});
