import styled from 'styled-components';
import classNames from 'classnames';

export const DayButton = styled.button.attrs({
  className: 'flex flex-(col wrap place-(content-center items-center)) w-full h-full',
})``;

export const DayContent = styled.time.attrs<{
  $isToday?: boolean;
  $isWeekend?: boolean;
  $isHolyday?: boolean;
  $isInSameMonth?: boolean;
}>((p) => ({
  className: classNames([
    {
      'border-rose-400': p.$isHolyday,
      'border-orange-300': Boolean(p.$isWeekend),
      'border border-(green-300 rounded-16) text-green-300 font-800 hover:(bg-green-300 text-green-800)': Boolean(
        p.$isToday,
      ),
      'border-sky-200': p.$isInSameMonth,
      'border-transparent': !p.$isInSameMonth && !p.$isWeekend,
    },
    'transition text-size-sm p-4 text-center',
    'border border-(2 rounded-2) hover:border-pink-300',
  ]),
}))``;
