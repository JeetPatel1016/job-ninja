export const formatCurrency = (
  amount: string,
  interval: string,
  currency: string = "CAD"
) => {
  const int = interval === "hourly" ? "hr" : "yr";
  return `${amount} ${currency}/${int}`;
};

export const formatDateToLocal = (
  dateStr: string,
  locale: string = "en-US"
) => {
  const date = new Date(dateStr);
  const options: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "short",
    year: "numeric",
  };
  const formatter = new Intl.DateTimeFormat(locale, options);
  return formatter.format(date);
};
