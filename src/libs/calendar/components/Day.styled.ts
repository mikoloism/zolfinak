import styled from 'styled-components';
import classNames from 'classnames';

export const DayButton = styled.button.attrs({
  className: 'flex flex-(col wrap place-(content-center items-center)) w-full h-full',
})``;

export const DayContent = styled.time.attrs<{
  $isToday?: boolean;
  $isWeekend?: boolean;
  isHolyday?: boolean;
}>((p) => ({
  className: classNames([
    {
      'text-rose-400': p.isHolyday,
      'text-orange-300': Boolean(p.$isWeekend),
      'border border-(3 green-300 rounded-16) text-green-300 font-800 hover:(bg-green-300 text-green-800)': Boolean(
        p.$isToday,
      ),
    },
    'border-rounded transition text-size-sm p-4 text-center',
    'hover:(bg-blue-200 text-blue-900)',
  ]),
}))``;
