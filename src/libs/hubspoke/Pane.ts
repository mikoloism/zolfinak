import { styled } from 'styled-components';

const Pane = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;
  padding: 1em;
  row-gap: 1em;
`;

const PaneTitle = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
  font-weight: 700;
  text-transform: uppercase;

  & ion-label {
    font-size: small;
  }
`;

const PaneSlideWrapper = styled.div``;

const PaneSlideItem = styled.div``;

export { Pane, PaneSlideItem, PaneSlideWrapper, PaneTitle };
