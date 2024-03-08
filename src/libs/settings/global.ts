import { CalendarTypeSetting, FirstDayOfWeekSetting } from 'lib/calendar/setting';
import { LanguageCodeSetting } from 'lib/i18n/setting';

export interface GlobalSetting {
  readonly language: LanguageCodeSetting;
  readonly calendar: CalendarTypeSetting;
  readonly firstDayOfWeek: FirstDayOfWeekSetting;
}

export const globalSetting: GlobalSetting = {
  language: new LanguageCodeSetting(),
  calendar: new CalendarTypeSetting(),
  firstDayOfWeek: new FirstDayOfWeekSetting(),
};

export async function initializeGlobalSetting() {
  globalSetting.language.init();
  globalSetting.calendar.init();
  globalSetting.firstDayOfWeek.init();
}
