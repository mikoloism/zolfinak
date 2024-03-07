import { LanguageCodeSetting } from 'lib/i18n/setting';

export interface GlobalSetting {
  // TODO:
  // timeZone: TimeZoneSetting;
  // themeMode: ThemeModeSetting;
  readonly languageCode: LanguageCodeSetting;
}

export const globalSetting: GlobalSetting = {
  languageCode: new LanguageCodeSetting(),
};
