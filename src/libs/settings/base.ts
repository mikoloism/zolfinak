export interface SettingReason<T> {
  get: () => T;
  update: (value: T) => void;
  init: () => void;
}

export abstract class IndividualSetting<T> implements SettingReason<T> {
  public constructor(protected _value?: T) {}

  public get = (): T => {
    return this._value!;
  };

  public update = (value: T): void => {
    this._value = value;
  };

  protected was_initialized: boolean = false;
  public init(): void {
    if (this.was_initialized === true) {
      throw new Error('<.init> method should call once time in whole life of application');
    } else {
      this.was_initialized = true;
    }
  }
}
