import { genArrayFromRange } from "../utils/genArrayfromRange";

test("generate array 1..3", () => {
  expect(genArrayFromRange(1, 3)).toEqual([1,2,3]);
});

test("generate array 1", () => {
  expect(genArrayFromRange(1, 1)).toEqual([1]);
});
