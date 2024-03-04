import type { Interval } from 'luxon';

import { globalSetting } from 'lib/settings/global';
import type PersianDate from 'persian-date';
import { GregorianCalendar } from './gregorian';
import { PersianCalendar } from './persian';

export type DaysInMonth = Array<Interval<boolean>>;
export type DaysInWeek = PersianDate[];
export type WeeksInMonth = DaysInWeek[];
export interface CalendarSystem {
  today: PersianDate;
  generate: () => DaysInWeek;
}

enum Calendar {
  GREGORIAN = 'gregory',
  BUDDHIST = 'buddhist',
  CHINESE = 'chinese',
  COPTIC = 'coptic',
  ETHIOAA = 'ethioaa',
  ETHIOPIC = 'ethiopic',
  HEBREW = 'hebrew',
  INDIAN = 'indian',
  ISLAMIC = 'islamic',
  JAPANESE = 'japanese',
  PERSIAN = 'persian',
  // eslint-disable-next-line ts/prefer-literal-enum-member
  DEFAULT = PERSIAN,
}

namespace Calendar {
  export function generateOf(today?: Date): DaysInWeek {
    let calendar: CalendarSystem;
    switch (globalSetting.calendarType.get()) {
      case Calendar.GREGORIAN:
        calendar = new GregorianCalendar(today);
        break;

      case Calendar.PERSIAN:
      default:
        calendar = new PersianCalendar(today);
        break;
    }

    return calendar.generate();
  }
}

export { Calendar };
