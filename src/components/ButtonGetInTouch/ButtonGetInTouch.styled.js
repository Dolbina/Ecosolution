import styled from 'styled-components';

export const Button = styled.button`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;
    gap: 12px;
    min-width: 140px;
    height: 39px;
    padding: 10px 16px;
    text-align: center;

    cursor: pointer;
    border-radius: 500px;
    background-color: #97d28b;
    border: none;

    color: #173d33;

    font-family: inherit;
    font-size: 16px;

    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.64px;

    transition: background-color, color 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover,
    &:focus {
      background-color: #173d33;
      color: #97d28b;
      > span {
        background-color: #97d28b;
        color: #173d33;
      }
    }
  }
`;
export const Circle = styled.span`
  display: flex;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  background-color: #173d33;
  color: transparent;

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const IconArrow = styled.svg`
  width: 14px;
  height: 14px;
  stroke: currentColor;
  fill: none;
  transform: rotate(-180deg);
`;
