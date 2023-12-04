import {
  LogoWrapper,
  LogoName,
  Icon,
  LogoSecondWrap,
  LogoSecondText,
  LogoTextSpan,
} from './Logo.styled';
import icon from '../../assets/icons/symbol-defs (1).svg';

const Logo = () => {
  return (
    <>
      <LogoWrapper>
        <div>
          <Icon>
            <use href={icon + '#icon-bgAsset-324-2'}></use>
          </Icon>
        </div>
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
