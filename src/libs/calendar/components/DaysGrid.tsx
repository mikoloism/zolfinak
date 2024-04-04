import { Calendar } from 'lib/calendar/calendar';
import { Day } from './Day';
import { DaysGrid } from './DaysGrid.styled';
import { todayStore } from '../store';

export function DaysGridView() {
  const today = todayStore.get();
  const weeksInMonth = Calendar.generateOf(today);

  return (
    <DaysGrid>
      {weeksInMonth.map((date) =>
        <Day date={date} key={date.toISOString()} />
      )}
    </DaysGrid>
  )
}
