import { dayjs, type Dayjs } from 'lib/date/mod';
import { globalSetting } from 'lib/settings/global';
import { generateMonthView, type DaysInMonth } from './generator';
import { TimeZone } from '../timezone/timezone';

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
    const firstDayOfWeek = globalSetting.firstDayOfWeek.get();
    const date = dayjs(today).calendar(calendarType).locale(localeName).tz(TimeZone['Asia/Tehran']);
    return generateMonthView(date, firstDayOfWeek);
  }
}

export { Calendar };
