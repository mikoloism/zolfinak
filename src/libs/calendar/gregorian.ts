import PersianDate from 'persian-date';
import type { CalendarSystem, DaysInWeek, WeeksInMonth } from './calendar';

export class GregorianCalendar implements CalendarSystem {
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
    const endPointOfMonth: PersianDate = this.today.endOf('month').endOf('week').clone();

    let crawlPoint: PersianDate = startPointOfMonth.subtract('day', 2).clone();
    let weeksInMonth: WeeksInMonth = [];
    while (endPointOfMonth.isSameDay(crawlPoint)) {
      let daysInWeek: DaysInWeek = [];
      for (let index = 0; index < 7; index++) {
        crawlPoint = crawlPoint.add('day', 1).clone();
        daysInWeek = daysInWeek.concat(crawlPoint);
      }
      weeksInMonth = weeksInMonth.concat(daysInWeek);
    }

    return weeksInMonth as unknown as DaysInWeek;
  };
}
