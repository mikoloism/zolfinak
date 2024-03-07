import { CalendarTypeSetting } from 'lib/calendar/setting';
import { LanguageCodeSetting } from 'lib/i18n/setting';

export interface GlobalSetting {
  readonly language: LanguageCodeSetting;
  readonly calendar: CalendarTypeSetting;
}

export const globalSetting: GlobalSetting = {
  language: new LanguageCodeSetting(),
  calendar: new CalendarTypeSetting(),
};

export async function initializeGlobalSetting() {
  globalSetting.language.init();
  globalSetting.calendar.init();
}
