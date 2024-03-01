import { DateTime } from 'luxon';
import type { CalendarSystem, DaysInWeek, WeeksInMonth } from './calendar';

export class PersianCalendar implements CalendarSystem {
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

  public generate = (): WeeksInMonth => {
    const startPointOfMonth: DateTime = DateTime.fromJSDate(this.today.toJSDate()).startOf('month').startOf('week');
    const endPointOfMonth: DateTime = DateTime.fromJSDate(this.today.toJSDate()).endOf('month').endOf('week');

    let crawlPoint = startPointOfMonth.minus({ day: 2 });
    let weeksInMonth: WeeksInMonth = [];
    while (crawlPoint.hasSame(endPointOfMonth, 'day') === false) {
      let daysInWeek: DaysInWeek = [];
      for (let index = 0; index < 7; index++) {
        crawlPoint = crawlPoint.plus({ day: 1 });
        daysInWeek = daysInWeek.concat(crawlPoint);
      }
      weeksInMonth = weeksInMonth.concat(daysInWeek);
    }

    return weeksInMonth;
  };
}
