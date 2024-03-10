import React from 'react';
import styled from 'styled-components';

import { Calendar } from 'lib/calendar/calendar';
import type { Dayjs } from 'lib/date/mod';
import { getLocaleCode, getTextDirection } from 'lib/i18n/helpers';
import { i18n } from 'lib/i18n/i18n';
import type { LanguageName } from 'lib/i18n/languages';
import { globalSetting } from 'lib/settings/global';
import { TimeZone } from 'lib/timezone/timezone';
import { WeekDayNamesBar } from './WeekDayNamesBar';

export const DEFAULT_TIMEZONE = TimeZone['Asia/Tehran'];

export const DaysGrid = styled.div`
  grid-template-columns: repeat(7, 1fr);
`

export function MonthView(): JSX.Element {
  const weeksInMonth = Calendar.generateOf();




  return <div style={{
    width: 'clamp(350px, 40%, 600px)'
  }}>
    <WeekDayNamesBar />
    <div className='grid grid-(place-content-center place-items-center)' style={{
      direction: getTextDirection(i18n.language as LanguageName) as never,
      gridTemplateColumns: 'repeat(7, 1fr)',
      gridTemplateRows: 'repeat(7, 1fr)',
    }}>
      {weeksInMonth.map(function crawl_month(date) {
        const timeRef = React.createRef<HTMLTimeElement>();
        return <DayItem date={date} key={date.toISOString()} timeRef={timeRef} />
      })}
    </div>
  </div>;
}

function DayItem({ date, timeRef }: { date: Dayjs, timeRef: React.RefObject<HTMLTimeElement> }): JSX.Element {
  const language = globalSetting.language.get();
  const locale = getLocaleCode(language);
  const digitFormatter = new Intl.NumberFormat(locale, {
    style: 'decimal',
    minimumIntegerDigits: 2,
  });

  return <button
    className='w-full h-full flex flex-(col wrap place-items-center place-content-center) p-4 text-center'
    onClick={() => {
      // eslint-disable-next-line no-console
      console.log(timeRef.current?.dateTime)
    }}
    value={date.toISOString()}>
    <time dateTime={date.toISOString()} ref={timeRef}>
      {digitFormatter.format(date.date())}
    </time>
  </button>
}
