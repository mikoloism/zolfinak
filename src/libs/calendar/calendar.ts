import { dayjs, type Dayjs } from 'lib/date/mod';
import { globalSetting } from 'lib/settings/global';
import { generateMonthView, type DaysInMonth } from './generator';

enum Calendar {
  GREGORIAN = 'gregory',
  JALALI = 'jalali',
}

namespace Calendar {
  export const PERSIAN: Calendar = Calendar.JALALI;
  export const DEFAULT: Calendar = Calendar.JALALI;

  export function generateOf(today?: Date | Dayjs): DaysInMonth {
    const localeName = globalSetting.language.get();
    const calendarType = globalSetting.calendar.get();
    const date = dayjs(today).calendar(calendarType).locale(localeName);
    return generateMonthView(date);
  }
}

export { Calendar };
