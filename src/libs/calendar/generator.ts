import { WeekDay } from 'lib/calendar/weekday';
import type { Dayjs } from 'lib/date/mod';

export type DaysInMonth = Dayjs[];

function month_view(date: Dayjs, startDayOfWeek: WeekDay = WeekDay.DEFAULT): Dayjs[] {
  const clonedDate: Dayjs = date.clone();
  const startPointOfMonth: Dayjs = clonedDate.startOf('months').startOf('weeks').startOf('days');
  const endPointOfMonth: Dayjs = clonedDate.endOf('months').endOf('weeks').startOf('days');
  const firstDayOfWeek: number = (((startDayOfWeek - startPointOfMonth.day()) as unknown as number) + 7) % 7;

  let crawlPoint: Dayjs = startPointOfMonth.subtract(firstDayOfWeek, 'days');
  let daysOfMonth: Dayjs[] = [];
  while (endPointOfMonth.isSame(crawlPoint) === false) {
    crawlPoint = crawlPoint.clone().add(1, 'day');
    daysOfMonth = daysOfMonth.concat(crawlPoint);
  }

  return daysOfMonth;
}

export { month_view as generateMonthView };
