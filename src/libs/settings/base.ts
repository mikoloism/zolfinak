export interface SettingReason<T> {
  get: () => T | undefined;
  update: (value: T) => void;
}

export abstract class IndividualSetting<T> implements SettingReason<T> {
  public abstract readonly DEFAULT_VALUE: T;

  public constructor(protected _value?: T) {}

  public get = (): T => {
    return this._value ?? this.DEFAULT_VALUE;
  };

  public update = (value: T): void => {
    this._value = value;
  };
}
