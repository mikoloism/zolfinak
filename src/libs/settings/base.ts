export interface SettingReason<T> {
  get: () => unknown;
  update: (value: unknown) => unknown;
  init: () => void;
}

export abstract class Setting<T> implements SettingReason<T> {
  public constructor(protected _value?: T) {}

  public get = (): unknown => {
    return this._value!;
  };

  public update = (value: unknown): void => {
    this._value = value as unknown as T;
  };

  public abstract init: () => void;
}
