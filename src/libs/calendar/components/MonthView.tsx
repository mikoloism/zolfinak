import { globalSetting } from '@/libs/settings/global';
import { Calendar } from '../calendar';

export function MonthView(): JSX.Element {
  const daysInMonth = Calendar.generateOf();

  return <div className="flex flex-row flex-wrap flex-place-items-start flex-place-content-start w-full h-full">
    {daysInMonth.map(function crawl_month(date) {
      return <div className="w-16 h-16 border border-rounded" key={date.toISODate()} title={date.toISODate()}>
        {date.start?.toFormat('DD', { outputCalendar: globalSetting.calendarType.get() })}
      </div>
    })}
  </div>
}


