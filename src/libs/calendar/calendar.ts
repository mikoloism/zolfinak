import type { DateTime, Interval } from 'luxon';

import { globalSetting } from 'lib/settings/global';
import { GregorianCalendar } from './gregorian';
import { PersianCalendar } from './persian';

export type DaysInMonth = Array<Interval<boolean>>;
export interface CalendarSystem {
  today: Date | DateTime;
  generate: () => DaysInMonth;
}

enum Calendar {
  GREGORIAN = 'gregorian',
  BUDDHIST = 'buddhist',
  CHINESE = 'chinese',
  COPTIC = 'coptic',
  ETHIOAA = 'ethioaa',
  ETHIOPIC = 'ethiopic',
  HEBREW = 'hebrew',
  INDIAN = 'indian',
  ISLAMIC = 'islamic',
  ISLAMICC = 'islamicc',
  JAPANESE = 'japanese',
  PERSIAN = 'persian',
  // eslint-disable-next-line ts/prefer-literal-enum-member
  DEFAULT = PERSIAN,
}

namespace Calendar {
  export function generateOf(today?: Date): DaysInMonth {
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
