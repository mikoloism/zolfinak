import i18n from 'i18next';
import { createElement, type PropsWithChildren } from 'react';
import { initReactI18next, I18nextProvider as RealI18nextProvider } from 'react-i18next';
import { LanguageName } from './languages';
import { LocaleMap as resources, type LocaleMap } from './localizations';
import { DEFAULT_I18N_NAMESPACE, I18nNSList } from './token';

declare module 'i18next' {
  interface CustomTypeOptions {
    resrources: typeof LocaleMap;
  }
}

void i18n.use(initReactI18next).init({
  resources,
  ns: I18nNSList,
  defaultNS: DEFAULT_I18N_NAMESPACE,
  lng: LanguageName.DEFAULT,
  fallbackLng: LanguageName.DEFAULT,
  supportedLngs: [LanguageName.ENGLISH, LanguageName.PERSIAN],
});

export function I18nextProvider(props: PropsWithChildren): JSX.Element {
  return createElement(RealI18nextProvider, { i18n }, props.children);
}

export { i18n };
