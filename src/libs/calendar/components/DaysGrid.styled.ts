import styled from 'styled-components';

export const DaysGrid = styled.div.attrs({
  className: 'grid grid-(auto-flow-row place-(content-center items-center))',
})`
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-auto-rows: 1fr;
`;
