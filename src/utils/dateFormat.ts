export const dateFormatLong = (date: string, time = false) => {
  const convertedDate = new Date(date);

  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "numeric",
    hourCycle: "h12",
    minute: "numeric",
  };

  const optionsWithoutTime: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };

  return convertedDate.toLocaleDateString(
    "default",
    time ? options : optionsWithoutTime
  );
};

export default dateFormatLong;
