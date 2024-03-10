import { WeekDay } from 'lib/calendar/weekday';
import { globalSetting } from 'lib/settings/global';

export function WeekDayNamesBar(): JSX.Element {
  const firstDayOfWeek: WeekDay = globalSetting.firstDayOfWeek.get();
  return <ul className='flex flex-(row wrap place-items-center place-content-around) w-full'>
    {WeekDay.resolveNamesFrom(firstDayOfWeek).map((weekDayName) => (
      <li
        className='flex flex-(col wrap place-items-center place-content-center) font-300  text-sky-300 bg-sky-600 bg-opacity-30 w-1/7 p3'
        key={weekDayName}>
        {weekDayName}
      </li>
    ))}
  </ul>
}
