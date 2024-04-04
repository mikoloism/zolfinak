import { dayjs, type Dayjs } from 'lib/date/mod';
import { getLocaleCode } from 'lib/i18n/helpers';
import { globalSetting } from 'lib/settings/global';
import { DayButton, DayContent } from './Day.styled';

export function Day({ date }: Props): JSX.Element {
  const language = globalSetting.language.get();
  const calendar = globalSetting.calendar.get();
  const firstDayOfWeek = globalSetting.firstDayOfWeek.get();
  const locale = getLocaleCode(language);
  const digitFormatter = new Intl.NumberFormat(locale, {
    style: 'decimal',
    minimumIntegerDigits: 2,
  });

  console.log({
    same: date.isBetween(dayjs().calendar(calendar).startOf('days').startOf('months'), dayjs().calendar(calendar).startOf('days').endOf('months')),
    date: date.toString()
  })

  return (
    <DayButton>
      <DayContent
        $isToday={date.startOf('days').toISOString() === dayjs().startOf('days').toISOString()}
        $isInSameMonth={date.isBetween(dayjs().calendar(calendar).startOf('days').startOf('months'), dayjs().calendar(calendar).startOf('days').endOf('months'))}
        dateTime={date.toISOString()}>
        {digitFormatter.format(parseInt(date.format('D')))}
      </DayContent>
    </DayButton>
  );
}

export interface Props {
  date: Dayjs;
}
