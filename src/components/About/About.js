import {
  AboutSection,
  AboutTitle,
  AboutText,
  AboutWrap,
 
} from './About.styled';
import AboutList from 'components/AboutList/AboutList';


const About = () => {
    return (
      <AboutSection id="about-section">
        <AboutWrap>
          <AboutTitle>Main values of our company</AboutTitle>
          <AboutText>
            EcoSolution envisions a world where sustainable energy solutions
            power a brighter and cleaner future for all. We aspire to be at the
            forefront of the global shift towards renewable energy, leading the
            way in innovative technologies that harness the power of nature to
            meet the world's energy needs.
          </AboutText>
        </AboutWrap>
        <AboutList />
      </AboutSection>
    );
};

export default About;
