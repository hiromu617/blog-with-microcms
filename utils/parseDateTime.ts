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
