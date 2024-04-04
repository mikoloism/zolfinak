import { Store } from 'pullstate';
import { globalSetting, Setting } from 'lib/settings/mod';
import { dayjs, type Dayjs } from 'lib/date/mod';
import { Singletor } from 'lib/singletor/singletor';
import { TimeZone } from 'lib/timezone/timezone';

type Value = { value: Dayjs };
type ValueStore = Store<Value>;
export class Today extends Setting<ValueStore> {
  public constructor() {
    super();
    this._value = new Store<Value>(() => ({ value: dayjs() }));
  }

  public override get = (): Dayjs => {
    const today = this._value!.useState().value;
    const localeName = globalSetting.language.get();
    const calendarType = globalSetting.calendar.get();
    const firstDayOfWeek = globalSetting.firstDayOfWeek.get();
    const date = dayjs(today).tz(TimeZone['Asia/Tehran']).locale(localeName).calendar(calendarType);
    return date;
  };

  // @ts-ignore
  public override update = (date: Date | Dayjs) => {
    const value = dayjs(date);
    this._value?.update((draft) => Object.assign(draft, { value }));
  };

  public override init = () => {};
}

export const todayStore = Singletor.from<Today>(Today);
