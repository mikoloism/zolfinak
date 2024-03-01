import type { DateTime } from 'luxon';

export type DaysInWeek = DateTime[];
export type WeeksInMonth = DaysInWeek[];
export interface CalendarSystem {
  today: Date | DateTime;
  generate: () => WeeksInMonth;
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

export { Calendar };
