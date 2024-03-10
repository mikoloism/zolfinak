import { IndividualSetting } from 'lib/settings/base';
import { Calendar } from './calendar';
import { WeekDay } from './weekday';

class Setting extends IndividualSetting<Calendar> {
  public constructor() {
    super();
  }

  public override init() {
    super.init();
    this.update(Calendar.DEFAULT);
  }
}

class FirstDayOfWeekSetting extends IndividualSetting<WeekDay> {
  public constructor() {
    super();
  }

  public override init(): void {
    super.init();
    this.update(WeekDay.DEFAULT);
  }
}

export { Setting as CalendarTypeSetting, FirstDayOfWeekSetting };
