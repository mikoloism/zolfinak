import { CalendarTypeSetting } from 'lib/calendar/setting';
import { LanguageCodeSetting } from 'lib/i18n/setting';

export interface GlobalSetting {
  // TODO:
  // timeZone: TimeZoneSetting;
  // themeMode: ThemeModeSetting;
  readonly languageCode: LanguageCodeSetting;
  readonly calendarType: CalendarTypeSetting;
}

export const globalSetting: GlobalSetting = {
  languageCode: new LanguageCodeSetting(),
  calendarType: new CalendarTypeSetting(),
};
