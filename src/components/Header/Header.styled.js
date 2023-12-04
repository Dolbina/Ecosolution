import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 112px;

  position: sticky;
  top: -1px;
  background-color: #fff;
  z-index: 999;
`;
export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 36px 20px;
  margin: 0 auto;
  @media (min-width: 480px) {
    width: 480px;
  }
  @media (min-width: 768px) {
    width: 768px;
    padding-left: 30px;
    padding-right: 30px;
  }
  @media (min-width: 1440px) {
    width: 1440px;
    padding-left: 100px;
    padding-right: 100px;
  }
`;

export const BurgerWrapTop = styled.div`
  display: flex;
  gap: 12px;

  align-items: center;
`;
