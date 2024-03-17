import { Setting } from 'lib/settings/mod';
import { changeLanguage, initializeLanguageSettings } from './helpers';
import { LanguageName } from './languages';

class LanguageCode extends Setting<LanguageName> {
  public constructor() {
    super();
  }

  public override get = (): LanguageName => {
    return this._value!;
  };

  public override update = (value: string | LanguageName): void => {
    const lang = LanguageName.resolve(value);
    this._value = lang;
    void changeLanguage(lang);
  };

  public override init() {
    initializeLanguageSettings().then((langtag) => {
      this.update(langtag);
    });
  }
}

export { LanguageCode };
