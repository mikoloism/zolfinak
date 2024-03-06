import { IndividualSetting } from 'lib/settings/base';
import { Calendar } from './calendar';

export class CalendarTypeSetting extends IndividualSetting<Calendar> {
  public readonly DEFAULT_VALUE: Calendar = Calendar.JALALI;

  public constructor() {
    super();
  }
}
