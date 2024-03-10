import { IndividualSetting } from 'lib/settings/base';
import { getLocaleCode } from './helpers';
import { LanguageName } from './languages';

class Setting extends IndividualSetting<string> {
  public constructor() {
    super();
  }

  public override get = (): string => {
    return getLocaleCode(this._value as LanguageName);
  };

  public override update = (value: string): void => {
    this._value = value;
  };

  public override init() {
    super.init();
    this.update(LanguageName.DEFAULT);
  }
}

export { Setting as LanguageCodeSetting };
