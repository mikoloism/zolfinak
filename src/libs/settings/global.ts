import { LanguageCode } from 'lib/i18n/setting';
import { Singletor } from 'lib/singletor/singletor';
import { CalendarType } from './setting/CalendarType';
import { FirstDayOfWeek } from './setting/FirstDayOfWeek';

export interface GlobalSetting {
  readonly language: LanguageCode;
  readonly calendar: CalendarType;
  readonly firstDayOfWeek: FirstDayOfWeek;
}

export const globalSetting: GlobalSetting = {
  language: Singletor.from<LanguageCode>(LanguageCode),
  calendar: Singletor.from<CalendarType>(CalendarType),
  firstDayOfWeek: Singletor.from<FirstDayOfWeek>(FirstDayOfWeek),
};

export async function initializeGlobalSetting() {
  globalSetting.language.init();
  globalSetting.calendar.init();
  globalSetting.firstDayOfWeek.init();
}
