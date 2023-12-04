import styled from 'styled-components';

export const StyledContainer = styled.div`
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;
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
