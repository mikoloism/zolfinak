import classNames from 'classnames';
import styled from 'styled-components';

export const MonthViewWrapper = styled.div.attrs({
  className: classNames(
    'flex flex-(col wrap place-(content-stretch items-stretch)) gap-sm',
    `sm:(text-size-xs)
    lg:(text-size-md)
  `,
  ),
})`
  width: clamp(340px, 40%, 600px);
`;
