import PersianDate from 'persian-date';
import type { CalendarSystem, DaysInMonth, DaysInWeek, WeeksInMonth } from './calendar';

export class PersianCalendar implements CalendarSystem {
  #today: PersianDate;

  public constructor(today?: Date) {
    if (typeof today === 'undefined') {
      this.#today = new PersianDate();
    } else {
      this.#today = new PersianDate(today);
    }
  }

  public get today(): PersianDate {
    return this.#today.clone();
  }

  public set today(date: Date) {
    this.#today = new PersianDate(date);
  }

  public generate = (): DaysInWeek => {
    const startPointOfMonth: PersianDate = this.today.startOf('month').startOf('week').clone();
    // const endPointOfMonth: PersianDate = this.today.endOf('month').endOf('week').clone();

    let crawlPoint: PersianDate = startPointOfMonth.clone();
    let daysInMonth: DaysInWeek = [];
    for (let j = 0; j < 7; j++) {
      for (let index = 0; index < 7; index++) {
        crawlPoint = crawlPoint.add('days' as never, 1).clone();
        daysInMonth = daysInMonth.concat(crawlPoint);
      }
    }

    return daysInMonth;
  };
}
