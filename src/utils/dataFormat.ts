export const dataFormat = (date: string) => new Date(date).toLocaleString('ru', {
  year: 'numeric',
  month: 'numeric',
  day: 'numeric',
  timeZone: 'UTC',
});
