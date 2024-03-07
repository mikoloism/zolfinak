import { dayjs } from 'lib/date/mod';
import { globalSetting } from 'lib/settings/global';
import { generateMonthView, type DaysInMonth } from './generator';

enum Calendar {
  GREGORIAN = 'gregory',
  JALALI = 'jalali',
}

namespace Calendar {
  export const PERSIAN: Calendar = Calendar.JALALI;
  export const DEFAULT: Calendar = Calendar.JALALI;

  export function generateOf(today?: Date): DaysInMonth {
    const localeName = globalSetting.languageCode.get();
    const calendarType = globalSetting.calendarType.get();

    const date = dayjs(today).calendar(calendarType).locale(localeName);
    return generateMonthView(date);
  }
}

export { Calendar };
