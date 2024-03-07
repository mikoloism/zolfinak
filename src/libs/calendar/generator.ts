import type { Dayjs } from 'lib/date/mod';

export type DaysInMonth = Dayjs[];

function month_view(date: Dayjs, startDayOfWeek: number = 0): Dayjs[] {
  const clonedDate = date.clone();
  const startPointOfMonth = clonedDate.startOf('months').startOf('weeks').startOf('days');
  const endPointOfMonth = clonedDate.endOf('months').endOf('weeks').startOf('days');

  let crawlPoint = startPointOfMonth.subtract(startDayOfWeek, 'days');
  let daysOfMonth: Dayjs[] = [];
  while (endPointOfMonth.isSame(crawlPoint) === false) {
    crawlPoint = crawlPoint.clone().add(1, 'day');
    daysOfMonth = daysOfMonth.concat(crawlPoint);
  }

  return daysOfMonth;
}

export { month_view as generateMonthView };
