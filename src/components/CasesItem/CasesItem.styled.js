import styled from 'styled-components';

export const CasesItemWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 26px;

  @media (min-width: 768px) {
    margin-top: 38px;
   
  }
  @media (min-width: 1440px) {
    margin-top: 120px;
  }
`;

export const ImgSlide = styled.img`
 
  /* width: 320px; */

  @media (min-width: 768px) {
   
    /* width: 343px; */

    @media (min-width: 1440px) {
     
      /* width: 596px; */
    }
  }
`;

export const SignWrap = styled.div`
  display: block;
  padding: 24px 12px 12px 12px;
 background-color: #EAEDF1;
   @media (min-width: 768px) {
    @media (min-width: 1440px) {
    }
  }
`;

export const Sign = styled.p`
  color: #173d33;
width: 175px;
  text-align: justify;
   font-size: 18px;
   font-weight: 400;
  line-height: normal;
  letter-spacing: -0.72px;

  @media (min-width: 768px) {
    @media (min-width: 1440px) {
    }
  }
`;
export const Rectangle = styled.div`
  background-color: #97d28b;
  width: 100%;
  height: 1px;
  margin-top: 21px;

  @media (min-width: 768px) {
    margin-top: 22px;}

    @media (min-width: 1440px) {
    }
  
`;
export const SignWrapInner = styled.div`
  display: flex;
  justify-content: space-between;

  @media (min-width: 768px) {
    @media (min-width: 1440px) {
    }
  }
`;

export const ArrowWrap = styled.div`
  display: flex;
  height: 60px;
  width: 60px;
  justify-content: center;
  align-items: center;

  border-radius: 50%;
  background-color: #97d28b;
  color: #173d33;

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: #173d33;
    color: #97d28b;
  }
`;
export const IconCard = styled.svg`
  width: 28px;
  height: 28px;
  stroke: currentColor;
  fill: none;
`;

export const SignWrapSecond = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 12px;
  @media (min-width: 768px) {
   
    @media (min-width: 1440px) {
    }
  }
`;

export const SignSecond = styled.p`
  color: #173d33;
  text-align: justify;
   font-size: 12px;
   font-weight: 400;
  line-height: normal;
  letter-spacing: -0.48px;

  @media (min-width: 768px) {
    @media (min-width: 1440px) {
    }
  }
`;