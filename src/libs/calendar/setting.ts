import { IndividualSetting } from 'lib/settings/base';
import { Calendar } from './calendar';

class Setting extends IndividualSetting<Calendar> {
  public constructor() {
    super();
  }

  public override init() {
    super.init();
    this.update(Calendar.DEFAULT);
  }
}

export { Setting as CalendarTypeSetting };
