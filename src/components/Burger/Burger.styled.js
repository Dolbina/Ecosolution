import styled from 'styled-components';

export const BurgerWrap = styled.div`
  display: flex;
  height: 40px;
  width: 40px;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: #dcefd8;

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: #97d28b;
  }
`;
export const IconBurger = styled.svg`
  width: 16px;
  height: 16px;
  stroke: currentColor;
  fill: none;
 
`;