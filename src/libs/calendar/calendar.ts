import { dayjs, type Dayjs } from 'lib/date/mod';
import { IndividualSetting } from 'lib/settings/base';
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
    const localeName = globalSetting.languageCode.get();
    const calendarType = Calendar.setting.get();
    const date = dayjs(today).calendar(calendarType).locale(localeName);
    return generateMonthView(date);
  }

  export class Setting extends IndividualSetting<Calendar> {
    public readonly DEFAULT_VALUE: Calendar = Calendar.DEFAULT;

    public constructor() {
      super();
    }
  }

  export const setting: Setting = new Setting();
}

export { Calendar };
