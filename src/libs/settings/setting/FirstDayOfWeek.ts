import { Store } from 'pullstate';
import { WeekDay } from 'lib/calendar/mod';
import { Setting } from 'lib/settings/mod';

type Value = { value: WeekDay };
type ValueStore = Store<Value>;
export class FirstDayOfWeek extends Setting<ValueStore> {
  public constructor() {
    super();
    this._value = new Store<Value>(() => ({ value: WeekDay.DEFAULT }));
  }

  public override get = (): WeekDay => {
    return this._value!.useState().value;
  };

  // @ts-ignore
  public override update = (value: WeekDay): void => {
    this._value?.update((draft) => Object.assign(draft, { value }));
  };

  public override init = (): void => {
    this.update(WeekDay.DEFAULT);
  };
}
