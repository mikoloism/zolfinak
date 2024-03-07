import { Calendar } from 'lib/calendar/calendar';
import { getTextDirection } from 'lib/i18n/helpers';
import { i18n } from 'lib/i18n/i18n';
import type { LanguageName } from 'lib/i18n/languages';
import { TimeZone } from 'lib/timezone/timezone';
import styled from 'styled-components';


export const DEFAULT_TIMEZONE = TimeZone['Asia/Tehran'];
const WEEKDAY_NAMES = [
  'شنبه',
  'یکشنبه',
  'دوشنبه',
  'سه‌شنبه',
  'چهارشنبه',
  'پنجشنبه',
  'جمعه',
];

export function WeekDayNameBar(): JSX.Element {
  return <ul className='flex flex-(row wrap place-items-center place-content-around) w-full'>
    {WEEKDAY_NAMES.map((weekDayName) => (<li
      className='flex flex-(col wrap place-items-center place-content-center) font-300  text-sky-300 bg-sky-600 bg-opacity-30 w-1/7 p3 '
      key={weekDayName}>{weekDayName}</li>))}
  </ul>
}

export const DaysGrid = styled.div`
  grid-template-columns: repeat(7, 1fr);
`

export function MonthView(): JSX.Element {
  const weeksInMonth = Calendar.generateOf();

  return <div className='w-[600px]'>
    <WeekDayNameBar />
    <div className='grid grid-(place-content-center place-items-center)' style={{
      direction: getTextDirection(i18n.language as LanguageName) as never,
      gridTemplateColumns: 'repeat(7, 1fr)',
      gridTemplateRows: 'repeat(7, 1fr)',
    }}>
      {weeksInMonth.map(function crawl_month(date, index) {
        return <button className='w-full h-full flex flex-(col wrap place-items-center place-content-center) p-4 text-center' key={index}>
          {date.format('DD')}
        </button>
      })}
    </div>
  </div>;
}

