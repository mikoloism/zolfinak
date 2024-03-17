import { Store } from 'pullstate';
import { Calendar } from 'lib/calendar/mod';
import { Setting } from 'lib/settings/mod';

type Value = { value: Calendar };
type ValueStore = Store<Value>;
export class CalendarType extends Setting<ValueStore> {
  public constructor() {
    super();
    this._value = new Store<Value>(() => ({ value: Calendar.DEFAULT }));
    this._value.subscribe(
      (state) => state,
      (state) => console.log(' [ OK ] ', state.value),
    );
  }

  public override get = (): Calendar => {
    return this._value!.useState().value;
  };

  // @ts-ignore
  public override update = (value: Calendar): void => {
    this._value?.update((draft) => Object.assign(draft, { value }));
  };

  public override init = (): void => {
    this.update(Calendar.DEFAULT);
  };
}
