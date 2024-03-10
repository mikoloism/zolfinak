import { dayjs, type Dayjs } from 'lib/date/mod';
import { getLocaleCode } from 'lib/i18n/helpers';
import { globalSetting } from 'lib/settings/global';
import { DayButton, DayContent } from './Day.styled';

export function Day({ date }: Props): JSX.Element {
  const language = globalSetting.language.get();
  const locale = getLocaleCode(language);
  const digitFormatter = new Intl.NumberFormat(locale, {
    style: 'decimal',
    minimumIntegerDigits: 2,
  });

  return (
    <DayButton>
      <DayContent
        $isToday={date.startOf('days').toISOString() === dayjs().startOf('days').toISOString()}
        $isWeekend={date.weekday() === 1}
        dateTime={date.toISOString()}>
        {digitFormatter.format(date.date())}
      </DayContent>
    </DayButton>
  );
}

export interface Props {
  date: Dayjs;
}
