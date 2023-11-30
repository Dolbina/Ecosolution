import styled from 'styled-components';

export const LogoWrapper = styled.div`
  display: flex;
  gap: 4px;
  justify-content: space-between;



`;

export const LogoName = styled.p`
  color: #173d33;
  font-size: 33px;

  font-weight: 500;
  line-height: normal;
  letter-spacing: -1.32px;

  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: #97d28b;
  }
`;

export const Icon = styled.svg`
  width: 31px;
  height: 18px;
  
  fill: none;
`;

export const LogoSecondWrap = styled.div`
  display: flex;
  align-items: center;
 
`;

export const LogoSecondText = styled.p`
  color: #173d33;
  
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.11;
  letter-spacing: -0.4px;
`;
export const LogoTextSpan = styled.p`
  color: #97d28b;
`;

