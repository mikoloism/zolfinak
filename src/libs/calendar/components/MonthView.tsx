import { TimeZone } from 'lib/timezone/timezone';
import { Calendar } from 'lib/calendar/calendar';
import { PersianCalendar } from '../persian';


export const DEFAULT_TIMEZONE = TimeZone['Asia/Tehran'];

export function MonthView(): JSX.Element {
  const weeksInMonth = new PersianCalendar().generate()

  return <div>
    {weeksInMonth.map(function crawl_month(date, index) {
      return <div key={index}>
        {date.format('DD MMMM')}
      </div>
    })}
  </div>;
}


