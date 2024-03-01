export interface SettingReason<T> {
  get: () => T | undefined;
  update: (value: T) => void;
}

export abstract class IndividualSetting<T> implements SettingReason<T> {
  public constructor(protected _value?: T) {}

  public get = (): T | undefined => {
    return this._value;
  };

  public update = (value: T): void => {
    this._value = value;
  };
}
