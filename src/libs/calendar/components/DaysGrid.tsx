import { Calendar } from 'lib/calendar/calendar';
import { Day } from './Day';
import { DaysGrid } from './DaysGrid.styled';

export function DaysGridView() {
  const weeksInMonth = Calendar.generateOf();

  return (
    <DaysGrid>
      {weeksInMonth.map((date) =>
        <Day date={date} key={date.toISOString()} />
      )}
    </DaysGrid>
  )
}
