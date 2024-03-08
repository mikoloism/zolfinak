import { reorder } from 'lib/date/mod';
import { i18n } from 'lib/i18n/mod';

enum WeekDay {
  SUNDAY = 0,
  MONDAY = 1,
  TUESDAY = 2,
  WEDNESDAY = 3,
  THURSDAY = 4,
  FRIDAY = 5,
  SATURDAY = 6,
}

namespace WeekDay {
  export const DEFAULT = WeekDay.SATURDAY;
  const getListOfNames = () => [
    i18n.t('settings:calendar_sunday'),
    i18n.t('settings:calendar_monday'),
    i18n.t('settings:calendar_tuesday'),
    i18n.t('settings:calendar_wednesday'),
    i18n.t('settings:calendar_thursday'),
    i18n.t('settings:calendar_friday'),
    i18n.t('settings:calendar_saturday'),
  ];

  export function resolveNamesFrom(firstDayOfWeek: WeekDay = WeekDay.DEFAULT): string[] {
    return reorder(getListOfNames(), firstDayOfWeek);
  }

  export function resolveNameOf(index: WeekDay): string {
    return getListOfNames().at(index)!;
  }
}

export function resolveWeekDayName(index: WeekDay): string {
  const WEEKDAY_NAMES = [
    i18n.t('settings:calendar_sunday'),
    i18n.t('settings:calendar_monday'),
    i18n.t('settings:calendar_tuesday'),
    i18n.t('settings:calendar_wednesday'),
    i18n.t('settings:calendar_thursday'),
    i18n.t('settings:calendar_friday'),
    i18n.t('settings:calendar_saturday'),
  ];
  return WEEKDAY_NAMES[index];
}

export { WeekDay };
