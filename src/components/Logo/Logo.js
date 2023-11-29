import {
  LogoWrapper,
  LogoName,
  Icon,
  LogoSecondWrap,
  LogoSecondText,
  LogoTextSpan,
} from './Logo.styled';




const Logo = () => {
  return (
    <>
      <LogoWrapper>
        <Icon />
        <LogoName>ecosolution</LogoName>
        <LogoSecondWrap>
          <div>
            <LogoSecondText>
              <LogoTextSpan>GREEN</LogoTextSpan>ERGY
            </LogoSecondText>
          </div>
          <div>
            <LogoSecondText>FOR LIFE</LogoSecondText>
          </div>
        </LogoSecondWrap>
      </LogoWrapper>
    </>
  );
};

export default Logo;
