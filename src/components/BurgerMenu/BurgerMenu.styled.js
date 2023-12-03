import styled from 'styled-components';

export const BurgerMenuWrapper = styled.div`
  position: fixed;
  top: 36px;
  right: 20px;
  width: 320px;
  height: 100%;

  z-index: 999;
  border-radius: 25px;
  background: rgba(23, 61, 51, 0.75);

  backdrop-filter: blur(12.5px);
`;

export const BurgerMenuContainer = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  justify-content: center;
`;

export const Rectangle = styled.div`
  width: 100%;
  height: 1px;
 background-color: #fff;
  margin-top: 8px;
`;

export const CloseButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 4px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: #ffffff;

  font-family: inherit;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.8px;
  
`;

export const MenuWrap = styled.div`
  margin-top: 24px;
  display: flex;
  gap: 8px;
`;

export const MenuList = styled.ul`
 
  
`;

export const MenuItem = styled.li`
  color: #fff;
 
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.96px;
  cursor: pointer;

  &:hover, :focus {
    color: #97d28b;
  }
`;

export const IconArrow = styled.svg`
  width: 16px;
  height: 16px;
  stroke: currentColor;
  fill: none;
  margin-left: 8px;
`;

export const IconClose = styled.svg`
  width: 20px;
  height: 20px;
  stroke: currentColor;
  fill: none;
 
`;