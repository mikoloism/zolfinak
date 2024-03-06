import { IndividualSetting } from 'lib/settings/base';
import { getLocaleCode } from './helpers';
import { LanguageName } from './languages';

export class LanguageCodeSetting extends IndividualSetting<string> {
  public readonly DEFAULT_VALUE: string;

  public constructor() {
    super();

    this.DEFAULT_VALUE = getLocaleCode(LanguageName.DEFAULT);
  }

  public override get = (): string => {
    return getLocaleCode(this._value as LanguageName) ?? this.DEFAULT_VALUE;
  };

  public override update = (value: string): void => {
    this._value = value;
  };
}
