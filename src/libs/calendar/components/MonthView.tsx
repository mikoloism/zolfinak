import { DaysGridView } from './DaysGrid';
import { MonthViewWrapper } from './MonthView.styled';
import { NavigatorBar } from './NavigatorBar';
import { WeekDayNamesBar } from './WeekDayNamesBar';

export function MonthView(): JSX.Element {
  return (
    <MonthViewWrapper>
      <NavigatorBar />
      <WeekDayNamesBar />
      <DaysGridView />
    </MonthViewWrapper>
  );
}
