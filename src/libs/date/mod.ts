import dayjs from 'dayjs';
import calendar from 'dayjs/plugin/calendar';
import isBetween from 'dayjs/plugin/isBetween';
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';
import isToday from 'dayjs/plugin/isToday';
import timezone from 'dayjs/plugin/timezone';
import toObject from 'dayjs/plugin/toObject';
import updateLocale from 'dayjs/plugin/updateLocale';
import utc from 'dayjs/plugin/utc';
import weekday from 'dayjs/plugin/weekday';
import jalaliday from 'jalaliday';

import 'dayjs/locale/en';
import 'dayjs/locale/fa';

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(calendar);
dayjs.extend(isBetween);
dayjs.extend(isSameOrAfter);
dayjs.extend(isSameOrBefore);
dayjs.extend(isToday);
dayjs.extend(toObject);
dayjs.extend(updateLocale);
dayjs.extend(weekday);
dayjs.extend(jalaliday);

export type { Dayjs, FormatObject } from 'dayjs';
export * from './utils';
export { dayjs };
