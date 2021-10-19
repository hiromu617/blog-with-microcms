/**
 * microCMSのDate型の文字列をYY.MM.DDにフォーマットして返す関数
 * @param dateString - 日付を表す文字列
 * @returns {string} - yyyy.MM.dd
 */
export const parseDate = (dateString: string) => {
  const date = new Date(dateString);
  return `${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()}`;
};
