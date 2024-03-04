declare interface Window {
  formatPersian: boolean;
}

declare module 'persian-date' {
  /* --- CONSTRUCTOR --- */

  export default class PersianDate {
    static isSameDay: (a: PersianDate, b: PersianDate) => boolean;

    constructor(
      ...args:
        | [date: Date]
        | [unix_milliseconds: number]
        | [
            array: [
              year?: number,
              month?: number,
              day?: number,
              hour?: number,
              minute?: number,
              second?: number,
              millisecond?: number,
            ],
          ]
        | [asp_json: `/Date(${string})/`]
        | []
    ): PersianDate;

    /** @return {number} in moment month how much days can be exists */
    daysInMonth(): number;
    valueOf: () => number;
    clone(): PersianDate;
    unix(seconds: number): string;
    zone(): number;

    toCalendar(cal: 'gregorian' | 'persian'): PersianDate;
    toLocale(...args: [locale: 'fa' | 'en'] | [locale: string]): PersianDate;
    toLeapYearMode(mode: 'algorithmic' | 'astronomical'): PersianDate;
    toArray(): number[];
    toDate(): Date;

    add(indicator: Indicator, offset: number): PersianDate;
    subtract(indicator: Indicator, offset: number): PersianDate;

    diff(
      ...args:
        | [value: PersianDate | string | boolean]
        | [value: PersianDate | string | boolean, indicator: Indicator]
        | [value: PersianDate | string | boolean, indicator: Indicator, flag: boolean]
    ): number;
    isSameDay(date: PersianDate): boolean;
    isSameMonth(date: PersianDate): boolean;
    isPersianDate(value: unknown): value is PersianDate;
    isDST(): boolean;
    isLeapYear(): boolean;

    startOf(indicator: Indicator): PersianDate;
    endOf(indicator: Indicator): PersianDate;
    rangeName(): RangeName;

    /** @param {number?} from 0 to 999 */
    millisecond(...args: [value: number] | []): number;
    /** @param {number?} from 0 to 999 */
    milliseconds(...args: [value: number] | []): number;

    /** @param {number?} from 0 to 59 */
    second(...args: [value: number] | []): number;
    /** @param {number?} from 0 to 59 */
    seconds(...args: [value: number] | []): number;

    /** @param {number?} from 0 to 59 */
    minute(...args: [value: number] | []): number;
    /** @param {number?} from 0 to 59 */
    minutes(...args: [value: number] | []): number;

    /** @param {number?} from 0 to 23 */
    hour(...args: [value: number] | []): number;
    /** @param {number?} from 0 to 23 */
    hours(...args: [value: number] | []): number;

    /** @param {number?} from 1 to 31 @returns {number} days of month */
    date(...args: [value: number] | []): number;
    /** @param {number?} from 1 to 31 @returns {number} days of month */
    dates(...args: [value: number] | []): number;

    /** @param {number?} from 1 to 12 */
    month(...args: [value: number] | []): number;
    /** @param {number?} from 1 to 12 */
    months(...args: [value: number] | []): number;

    /** @param {number?} from -270,000 to 270,000 */
    year(...args: [value: number] | []): number;
    /** @param {number?} from -270,000 to 270,000 */
    years(...args: [value: number] | []): number;

    /** @param {number?} from 1 to 7 @returns {number} days of week */
    day(...args: [value: number] | []): number;
    /** @param {number?} from 1 to 7 @returns {number} days of week */
    days(...args: [value: number] | []): number;

    format(...args: [pttrn: string] | []): string;
  }

  /* --- UTILS --- */

  export type Indicator = 'year' | 'month' | 'week' | 'day' | 'hour' | 'minute' | 'second';

  export interface RangeName {
    months: string[];
    weekdays: string[];
    weekdaysMin: string[];
    monthsShort: string[];
    persianDaysName: string[];
  }
}
