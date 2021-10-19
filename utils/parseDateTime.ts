/**
 * microCMSのDate型の文字列をYY.MM.DDにフォーマットして返す関数
 * @param dateString - 日付を表す文字列
 * @returns {string} - yyyy.MM.dd k:m
 */
export const parseDateTime = (dateString: string) => {
  const date = new Date(dateString);
  return `${date.getFullYear()}.${
    date.getMonth() + 1
  }.${date.getDate()} ${date.getHours()}:${
    date.getMinutes().toString().length === 1
      ? "0" + date.getMinutes().toString()
      : date.getMinutes().toString()
  }`;
};
