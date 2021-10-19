/**
 * startからendまでの範囲の配列を返す
 * @param start 
 * @param end 
 * @returns {number[]} - numberの配列
 */
export const genArrayFromRange = (start: number, end: number) => {
  return [...Array(end - start + 1)].map((_, i) => start + i);
};
