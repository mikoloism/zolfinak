import { DateTime, Interval } from 'luxon';
import type { CalendarSystem, DaysInMonth } from './calendar';

export class GregorianCalendar implements CalendarSystem {
  #today: DateTime;

  public constructor(today?: Date) {
    if (typeof today === 'undefined') {
      this.#today = DateTime.now();
    } else {
      this.#today = DateTime.fromJSDate(today);
    }
  }

  public get today(): DateTime {
    return this.#today;
  }

  public set today(date: Date) {
    this.#today = DateTime.fromJSDate(date);
  }

  public generate = (): DaysInMonth => {
    const startPointOfMonth: DateTime = DateTime.fromJSDate(this.today.toJSDate()).startOf('month').startOf('week');
    const endPointOfMonth: DateTime = DateTime.fromJSDate(this.today.toJSDate()).endOf('month').endOf('week');
    const daysInMonth: DaysInMonth = Interval.fromDateTimes(startPointOfMonth, endPointOfMonth).splitBy({ days: 1 });
    return daysInMonth;
  };
}
