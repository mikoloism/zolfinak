import { dayjs, type Dayjs } from 'lib/date/mod';
import { globalSetting } from 'lib/settings/global';
import { generateMonthView } from './generator';

export type DaysInMonth = Dayjs[];

enum Calendar {
  GREGORIAN = 'gregory',
  JALALI = 'jalali',
  // eslint-disable-next-line ts/prefer-literal-enum-member
  PERSIAN = JALALI,
}

namespace Calendar {
  export function generateOf(today?: Date): DaysInMonth {
    const localeName = globalSetting.languageCode.get();
    const calendarType = globalSetting.calendarType.get();

    const date = dayjs(today).calendar(calendarType).locale(localeName);
    return generateMonthView(date);
  }
}

export { Calendar };
